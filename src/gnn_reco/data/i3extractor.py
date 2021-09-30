try:
    from icecube import dataclasses, icetray, dataio  # pyright: reportMissingImports=false
except ImportError:
    print("icecube package not available.")
    
from .utils import frame_has_key

def build_retroreco_extraction(is_mc):
    """Builds the standard RetroReco extraction. Later evaluated using eval()

    Args:
        is_mc (bool): if the current physics frame is monte carlo

    Returns:
        dict: dicationary where the fields will be used as column names in the sqlite table and the entries are strings evaluated later using eval()
    """
    retro_extraction = {'azimuth_retro': 'frame["L7_reconstructed_azimuth"].value',
                        'time_retro': 'frame["L7_reconstructed_time"].value',
                        'energy_retro': 'frame["L7_reconstructed_total_energy"].value', 
                        'position_x_retro': 'frame["L7_reconstructed_vertex_x"].value', 
                        'position_y_retro': 'frame["L7_reconstructed_vertex_y"].value',
                        'position_z_retro': 'frame["L7_reconstructed_vertex_z"].value',
                        'zenith_retro': 'frame["L7_reconstructed_zenith"].value',
                        'azimuth_sigma': 'frame["L7_retro_crs_prefit__azimuth_sigma_tot"].value',
                        'position_x_sigma': 'frame["L7_retro_crs_prefit__x_sigma_tot"].value',
                        'position_y_sigma': 'frame["L7_retro_crs_prefit__y_sigma_tot"].value',
                        'position_z_sigma': 'frame["L7_retro_crs_prefit__z_sigma_tot"].value',
                        'time_sigma': 'frame["L7_retro_crs_prefit__time_sigma_tot"].value',
                        'zenith_sigma': 'frame["L7_retro_crs_prefit__zenith_sigma_tot"].value',
                        'energy_sigma': 'frame["L7_retro_crs_prefit__energy_sigma_tot"].value',
                        'cascade_energy_retro': 'frame["L7_reconstructed_cascade_energy"].value',
                        'track_energy_retro': 'frame["L7_reconstructed_track_energy"].value',
                        'track_length_retro': 'frame["L7_reconstructed_track_length"].value',
                        'L7_MuonClassifier_FullSky_ProbNu': 'frame["L7_MuonClassifier_FullSky_ProbNu"].value',
                        'L4_MuonClassifier_Data_ProbNu': 'frame["L4_MuonClassifier_Data_ProbNu"].value',
                        'L4_NoiseClassifier_ProbNu': 'frame["L4_NoiseClassifier_ProbNu"].value',
                        'L7_PIDClassifier_FullSky_ProbTrack': 'frame["L7_PIDClassifier_FullSky_ProbTrack"].value'}

    if is_mc:
        retro_extraction['osc_weight'] = 'frame["I3MCWeightDict"]["weight"]'    
    return retro_extraction

def build_standard_extraction():
    """Builds the standard truth extraction

    Returns:
        dict: dicationary where the fields will be used as column names in the sqlite table and the entries are strings evaluated later using eval()
    """
    standard_truths = {'energy': 'MCInIcePrimary.energy',
            'position_x': 'MCInIcePrimary.pos.x', 
            'position_y': 'MCInIcePrimary.pos.y', 
            'position_z': 'MCInIcePrimary.pos.z',
            'azimuth': 'MCInIcePrimary.dir.azimuth',
            'zenith': 'MCInIcePrimary.dir.zenith',
            'pid': 'MCInIcePrimary.pdg_encoding',
            'event_time': 'event_time',
            'sim_type': 'sim_type',
            'interaction_type': 'interaction_type',
            'elasticity': 'elasticity',
            'RunID': 'RunID',
            'SubrunID': 'SubrunID',
            'EventID': 'EventID',
            'SubEventID': 'SubEventID'}
    return standard_truths

def build_blank_extraction(padding_value = -1):
    """Builds a blank truth extraction

    Args:
        padding_value (int, optional): Defaults to -1.

    Returns:
        blank_extraction (dictionary): dicationary where the fields will be used as column names in the sqlite table and the entries are strings evaluated later using eval()
    """
    ## Please note that if the simulation type is pure noise or real that these values will be appended to the truth table
    blank_extraction = {'energy': str(padding_value),
            'position_x': str(padding_value), 
            'position_y': str(padding_value), 
            'position_z': str(padding_value),
            'azimuth': str(padding_value),
            'zenith': str(padding_value),
            'pid': str(padding_value),
            'event_time': 'event_time',
            'sim_type': 'sim_type',
            'interaction_type': str(padding_value),
            'elasticity': str(padding_value),
            'RunID': 'RunID',
            'SubrunID': 'SubrunID',
            'EventID': 'EventID',
            'SubEventID': 'SubEventID'}
    return blank_extraction

# Module-level constants
_SUPPORTED_MODES = [
    'inference',
    'oscNext',
    'NuGen',
]


class I3Extractor:
    """Extracts relevant information from physics frames."""

    def __init__(self, mode, pulsemap):
        # Check(s)
        assert mode in _SUPPORTED_MODES, f"Mode {mode} is not supported by I3Extractor."

        # Member variables
        self._mode = mode
        self._pulsemap = pulsemap
        self._i3_file = None
        self._gcd_file = None
        self._gcd_dict = None
        self._calibration = None

    def set_files(self, i3_file, gcd_file):
        self._i3_file = i3_file
        self._gcd_file = gcd_file
        self._load_gcd_data()
        
    def _load_gcd_data(self):
        """Loads the geospatial information contained in the gcd-file."""
        gcd_file = dataio.I3File(self._gcd_file)
        g_frame = gcd_file.pop_frame(icetray.I3Frame.Geometry)
        c_frame = gcd_file.pop_frame(icetray.I3Frame.Calibration)
        self._gcd_dict = g_frame["I3Geometry"].omgeo
        self._calibration = c_frame["I3Calibration"]
            
    def __call__(self, frame, custom_truth = None):
        """ Extracts relevant information from frame depending on mode

        Args:
            frame (i3 physics frame): i3 physics frame that is being processed
            custom_truth (dict, optional): A dictionary where field names will correspond to column name in database table. Entries in the dictionary are strings that are evaluated using eval(). Defaults to None.

        Returns:
            pulsemap: dictionary with input data
            truth   : dictionary with truth data
            retro   : dictionary with RetroReco and associated quantities
        """
        if self._mode == 'oscNext' or self._mode == 'NuGen':
            truth, pulsemap, retro = self._oscnext_extractor(frame, custom_truth)
            return truth, pulsemap, retro
        elif self._mode == 'inference':
            pulsemap = self._extract_features(frame)
            return None, pulsemap, None
        
        assert False, "Shouldn't reach here."
        
    def _oscnext_extractor(self, frame, custom_truth = None):
        """Extracts PFrame data. Officially supports oscNext and NuGen (LE and HE) but might work for others too.

        Args:
            frame (i3 frame): i3 physics frame
            custom_truth (dict, optional): a custom truth. Field names become column names in the truth table. Entries are strings that are evaluated using eval(). Defaults to None.

        Returns:
            truths (dict): truth dictionary, empty if no truth exists in the files (e.g. if real measurements)
            features (dict): feature dictionary
            retros (dict): retros dictionary, empty if no RetroReco exists in the files.
        """
        features = self._extract_features(frame)
        truths   = self._extract_truth(frame, custom_truth)
        retros   = self._extract_retro(frame)
        return truths, features, retros
    
    def _extract_features(self, frame):
        """Extracts xyz, time, charge, relative dom eff. and pmt area

        Args:
            frame (i3 physics frame): i3 physics frame
            gcd_dict (dict): the gcd dictionary that can be indexed using om_keys
            calibration (??): i3 physics frame calibration

        Returns:
            features (dict): a dictionary containing the input features.
        """
        charge = []
        time   = []
        width  = []
        area   = []
        rqe    = []
        x       = []
        y       = []
        z       = []
        if self._pulsemap in frame.keys():
            om_keys, data = self._get_om_keys_and_pulseseries(frame)
            for om_key in om_keys:
                pulses = data[om_key]
                for pulse in pulses:
                    charge.append(pulse.charge)
                    time.append(pulse.time) 
                    width.append(pulse.width)
                    area.append(self._gcd_dict[om_key].area)  
                    rqe.append(frame["I3Calibration"].dom_cal[om_key].relative_dom_eff)
                    x.append(self._gcd_dict[om_key].position.x)
                    y.append(self._gcd_dict[om_key].position.y)
                    z.append(self._gcd_dict[om_key].position.z)
            
        features = {'charge': charge, 
                    'dom_time': time, 
                    'dom_x': x, 
                    'dom_y': y, 
                    'dom_z': z,
                    'width' : width,
                    'pmt_area': area, 
                    'rde': rqe}
        return features

    def _extract_truth(self, frame, extract_these_truths = None):
        """Extracts the truths in extract_these_truths. Defaults standard_truth_extraction()

        Args:
            frame (i3 physics frame): i3 physics frame
            input_file (str): path to i3-file
            extract_these_truths (dict, optional): custom truth dictionary. Defaults to None.

        Returns:
            truth (dictionary): dictionary containing the thruth.
        """
        if extract_these_truths == None:
            extract_these_truths = build_standard_extraction()
        mc = frame_is_montecarlo(frame)
        sim_type = find_data_type(mc, self._i3_file)
        event_time =  frame['I3EventHeader'].start_time.utc_daq_time
        RunID, SubrunID, EventID, SubEventID = extract_event_ids(frame)
        if mc:
            MCInIcePrimary, interaction_type, elasticity = get_primary_particle_interaction_type_and_elasticity(frame, sim_type)
            if MCInIcePrimary != None:
                ## is not noise
                truth = {}
                for truth_variable in extract_these_truths.keys():
                    truth[truth_variable] = eval(extract_these_truths[truth_variable])
            else:
                print('Could Not Find Primary Particle')
        else:
            ## is real data or noise   
            blank_extraction = build_blank_extraction()
            truth = {}
            for truth_variable in blank_extraction.keys():
                truth[truth_variable] = eval(blank_extraction[truth_variable])
        return truth

    def _extract_retro(self, frame):
        """Extracts RetroReco and associated quantities if available

        Args:
            frame (i3 physics frame): i3 physics frame

        Returns:
            retro: dictionary containing RetroReco and associated quantitites
        """
        contains_retro = frame_contains_retroreco(frame)
        contains_classifier = frame_contains_classifiers(frame)
        is_mc = frame_is_montecarlo(frame)
        retro = {}
        if contains_retro or contains_classifier:
            retro_extraction = build_retroreco_extraction(is_mc)
            for retro_variable in retro_extraction.keys():
                retro[retro_variable] = eval(self.evaluate_expression(retro_extraction[retro_variable],frame)) 
        return retro

    def _get_om_keys_and_pulseseries(self, frame):
        """Gets the indicies for the gcd_dict and the pulse series

        Args:
            frame (i3 physics frame): i3 physics frame
            
        Returns:
            om_keys (index): the indicies for the gcd_dict
            data    (??)   : the pulse series
        """
        data = frame[self._pulsemap]
        try:
            om_keys = data.keys()
        except:
            try:
                if "I3Calibration" in frame.keys():
                    data = frame[self._pulsemap].apply(frame)
                    om_keys = data.keys()
                else:
                    frame["I3Calibration"] = self._calibration 
                    data = frame[self._pulsemap].apply(frame)
                    om_keys = data.keys()
            except:
                data = dataclasses.I3RecoPulseSeriesMap.from_frame(frame, self._pulsemap)
                om_keys = data.keys()
        return om_keys, data

    def evaluate_expression(self, expression, frame, padding_value = -1):
        try:
            eval(expression)
            out = expression
        except:
            out = str(padding_value)
        return out

# Utilty methods
def frame_contains_retroreco(frame):
    return frame_has_key(frame, "L7_reconstructed_zenith")

def frame_contains_classifiers(frame):
    return frame_has_key(frame, "L4_MuonClassifier_Data_ProbNu")

def frame_is_montecarlo(frame):
    return (
        frame_has_key(frame, "MCInIcePrimary") or 
        frame_has_key(frame, "I3MCTree")
    )
    

def find_data_type(mc, input_file):
    """Determines the data type

    Args:
        mc (boolean): is this montecarlo?
        input_file (str): path to i3 file

    Returns:
        str: the simulation/data type
    """
    if mc == False:
        sim_type = 'data'
    else:
        sim_type = 'NuGen'
    if 'muon' in input_file:
        sim_type = 'muongun'
    if 'corsika' in input_file:
        sim_type = 'corsika'
    if 'genie' in input_file:
        sim_type = 'genie'
    if 'noise' in input_file:
        sim_type = 'noise'
    if sim_type == 'lol':
        print('SIM TYPE NOT FOUND!')
    return sim_type

def get_primary_particle_interaction_type_and_elasticity(frame, sim_type, padding_value=-1):
    """"Returns primary particle, interaction type, and elasticity.
    
    A case handler that does two things
        1) Catches issues related to determining the primary MC particle.
        2) Error handles cases where interaction type and elasticity doesnt exist

    Args:
        frame (i3 physics frame): ...
        sim_type (string): Simulation type
        padding_value (int | float): The value used for padding.

    Returns
        McInIcePrimary (?): The primary particle
        interaction_type (int): Either 1 (charged current), 2 (neutral current), 0 (neither)
        elasticity (float): In ]0,1[ 
    """
    if sim_type != 'noise':
        try:
            MCInIcePrimary = frame['MCInIcePrimary']
        except:
            MCInIcePrimary = frame['I3MCTree'][0]
    else:
        MCInIcePrimary = None
    
    try:
        interaction_type = frame["I3MCWeightDict"]["InteractionType"]
    except:
        interaction_type = padding_value
    
    try:
        elasticity = frame['I3GENIEResultDict']['y']
    except:
        elasticity = padding_value
    
    return MCInIcePrimary, interaction_type, elasticity

def extract_event_ids(frame):
    """Extracts relevant information contained in the event header. Usefull for backtracking to original i3-files.

    Args:
        frame (i3 physics frame)

    Returns:
        RunID (int): ID of the run (eg. 120000)
        SubrunID (int): ID of the subrun (e.g. 502)
        EventID (int): ID of the event (eg. 5)   #NOTICE: THIS IS NOT A UNIQUE NUMBER BETWEEN I3 FILES
        SubEventID (int): ID of the subevent if the original event is split into multiple (e.g. 2)
    """
    RunID       = frame['I3EventHeader'].run_id
    SubrunID    = frame['I3EventHeader'].sub_run_id
    EventID     = frame['I3EventHeader'].event_id
    SubEventID  = frame['I3EventHeader'].sub_event_id
    return RunID, SubrunID, EventID, SubEventID 
