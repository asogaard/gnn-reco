Search.setIndex({docnames:["graphnet","graphnet.components","graphnet.data","graphnet.models","graphnet.models.detector","graphnet.models.gnn","graphnet.models.task","graphnet.models.training","graphnet.modules","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["graphnet.rst","graphnet.components.rst","graphnet.data.rst","graphnet.models.rst","graphnet.models.detector.rst","graphnet.models.gnn.rst","graphnet.models.task.rst","graphnet.models.training.rst","graphnet.modules.rst","index.rst","modules.rst"],objects:{"":[[0,0,0,"-","graphnet"]],"graphnet.components":[[1,0,0,"-","layers"],[1,0,0,"-","loss_functions"],[1,0,0,"-","pool"],[1,0,0,"-","utils"]],"graphnet.components.layers":[[1,1,1,"","DynEdgeConv"]],"graphnet.components.layers.DynEdgeConv":[[1,2,1,"","forward"]],"graphnet.components.loss_functions":[[1,1,1,"","BinaryCrossEntropyLoss"],[1,1,1,"","EuclideanDistance"],[1,1,1,"","LogCMK"],[1,1,1,"","LogCoshLoss"],[1,1,1,"","LossFunction"],[1,1,1,"","VonMisesFisher2DLoss"],[1,1,1,"","VonMisesFisherLoss"]],"graphnet.components.loss_functions.BinaryCrossEntropyLoss":[[1,3,1,"","reduction"]],"graphnet.components.loss_functions.EuclideanDistance":[[1,2,1,"","_forward"],[1,3,1,"","reduction"]],"graphnet.components.loss_functions.LogCMK":[[1,2,1,"","backward"],[1,2,1,"","forward"]],"graphnet.components.loss_functions.LogCoshLoss":[[1,2,1,"","_forward"],[1,2,1,"","_log_cosh"],[1,3,1,"","reduction"]],"graphnet.components.loss_functions.LossFunction":[[1,2,1,"","_forward"],[1,2,1,"","forward"],[1,3,1,"","reduction"]],"graphnet.components.loss_functions.VonMisesFisher2DLoss":[[1,2,1,"","_forward"],[1,3,1,"","reduction"],[1,3,1,"","training"],[1,3,1,"","weight"]],"graphnet.components.loss_functions.VonMisesFisherLoss":[[1,2,1,"","_evaluate"],[1,2,1,"","log_cmk"],[1,2,1,"","log_cmk_approx"],[1,2,1,"","log_cmk_exact"],[1,3,1,"","reduction"],[1,3,1,"","training"],[1,3,1,"","weight"]],"graphnet.components.pool":[[1,4,1,"","group_identical"],[1,4,1,"","group_pulses_to_dom"],[1,4,1,"","group_pulses_to_pmt"],[1,4,1,"","sum_pool"],[1,4,1,"","sum_pool_and_distribute"],[1,4,1,"","sum_pool_x"]],"graphnet.components.utils":[[1,4,1,"","check_db_size"],[1,4,1,"","fit_scaler"]],"graphnet.data":[[2,0,0,"-","constants"],[2,0,0,"-","dataconverter"],[2,0,0,"-","i3extractor"],[2,0,0,"-","sqlite_dataconverter"],[2,0,0,"-","sqlite_dataset"],[2,0,0,"-","sqlite_dataset_perturbed"],[2,0,0,"-","utils"]],"graphnet.data.constants":[[2,1,1,"","FEATURES"],[2,1,1,"","TRUTH"]],"graphnet.data.constants.FEATURES":[[2,3,1,"","DEEPCORE"],[2,3,1,"","ICECUBE86"],[2,3,1,"","UPGRADE"]],"graphnet.data.constants.TRUTH":[[2,3,1,"","DEEPCORE"],[2,3,1,"","ICECUBE86"],[2,3,1,"","UPGRADE"]],"graphnet.data.dataconverter":[[2,1,1,"","DataConverter"]],"graphnet.data.dataconverter.DataConverter":[[2,2,1,"","__init__"]],"graphnet.data.i3extractor":[[2,1,1,"","I3Extractor"],[2,1,1,"","I3ExtractorCollection"],[2,1,1,"","I3FeatureExtractor"],[2,1,1,"","I3FeatureExtractorIceCube86"],[2,1,1,"","I3FeatureExtractorIceCubeDeepCore"],[2,1,1,"","I3FeatureExtractorIceCubeUpgrade"],[2,1,1,"","I3PulseNoiseTruthFlagIceCubeUpgrade"],[2,1,1,"","I3RetroExtractor"],[2,1,1,"","I3TruthExtractor"],[2,4,1,"","find_data_type"],[2,4,1,"","frame_contains_classifiers"],[2,4,1,"","frame_contains_retro"],[2,4,1,"","frame_is_lvl7"],[2,4,1,"","frame_is_montecarlo"],[2,4,1,"","frame_is_noise"],[2,4,1,"","get_primary_particle_interaction_type_and_elasticity"]],"graphnet.data.i3extractor.I3Extractor":[[2,2,1,"","__call__"],[2,2,1,"","_load_gcd_data"],[2,5,1,"","name"],[2,2,1,"","set_files"]],"graphnet.data.i3extractor.I3ExtractorCollection":[[2,2,1,"","set_files"]],"graphnet.data.i3extractor.I3FeatureExtractor":[[2,2,1,"","_get_om_keys_and_pulseseries"]],"graphnet.data.i3extractor.I3FeatureExtractorIceCube86":[[2,2,1,"","__call__"]],"graphnet.data.i3extractor.I3FeatureExtractorIceCubeUpgrade":[[2,2,1,"","__call__"]],"graphnet.data.i3extractor.I3PulseNoiseTruthFlagIceCubeUpgrade":[[2,2,1,"","__call__"]],"graphnet.data.i3extractor.I3RetroExtractor":[[2,2,1,"","__call__"]],"graphnet.data.i3extractor.I3TruthExtractor":[[2,2,1,"","__call__"]],"graphnet.data.sqlite_dataconverter":[[2,1,1,"","SQLiteDataConverter"],[2,4,1,"","apply_event_no"],[2,4,1,"","is_empty"]],"graphnet.data.sqlite_dataconverter.SQLiteDataConverter":[[2,2,1,"","__init__"],[2,2,1,"","_attach_index"],[2,2,1,"","_create_table"],[2,2,1,"","_extract_everything"],[2,2,1,"","_merge_databases"],[2,2,1,"","_merge_temporary_databases"],[2,2,1,"","_parallel_extraction"],[2,2,1,"","_process_files"],[2,2,1,"","_save_filenames"],[2,2,1,"","_submit_to_database"]],"graphnet.data.sqlite_dataset":[[2,1,1,"","SQLiteDataset"]],"graphnet.data.sqlite_dataset.SQLiteDataset":[[2,2,1,"","_create_graph"],[2,2,1,"","_query_database"],[2,2,1,"","close_connection"],[2,2,1,"","establish_connection"]],"graphnet.data.sqlite_dataset_perturbed":[[2,1,1,"","SQLiteDatasetPerturbed"]],"graphnet.data.utils":[[2,4,1,"","create_out_directory"],[2,4,1,"","find_i3_files"],[2,4,1,"","frame_has_key"],[2,4,1,"","get_desired_event_numbers"],[2,4,1,"","get_equal_proportion_neutrino_indices"],[2,4,1,"","get_even_dbang_selection"],[2,4,1,"","get_even_signal_background_indicies"],[2,4,1,"","get_even_track_cascade_indicies"],[2,4,1,"","has_extension"],[2,4,1,"","is_gcd_file"],[2,4,1,"","is_i3_file"],[2,4,1,"","muon_stopped"],[2,4,1,"","pairwise_shuffle"]],"graphnet.models":[[4,0,0,"-","detector"],[5,0,0,"-","gnn"],[3,0,0,"-","graph_builders"],[3,0,0,"-","model"],[6,0,0,"-","task"],[7,0,0,"-","training"],[3,0,0,"-","utils"]],"graphnet.models.detector":[[4,0,0,"-","detector"],[4,0,0,"-","icecube"]],"graphnet.models.detector.detector":[[4,1,1,"","Detector"]],"graphnet.models.detector.detector.Detector":[[4,2,1,"","_forward"],[4,5,1,"","features"],[4,2,1,"","forward"],[4,5,1,"","nb_inputs"],[4,5,1,"","nb_outputs"],[4,3,1,"","training"]],"graphnet.models.detector.icecube":[[4,1,1,"","IceCube86"],[4,1,1,"","IceCubeDeepCore"],[4,1,1,"","IceCubeUpgrade"],[4,1,1,"","IceCubeUpgrade_V2"]],"graphnet.models.detector.icecube.IceCube86":[[4,2,1,"","_forward"],[4,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[4,3,1,"","features"],[4,3,1,"","precision"],[4,3,1,"","prepare_data_per_node"],[4,3,1,"","training"],[4,3,1,"","use_amp"]],"graphnet.models.detector.icecube.IceCubeDeepCore":[[4,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[4,3,1,"","precision"],[4,3,1,"","prepare_data_per_node"],[4,3,1,"","training"],[4,3,1,"","use_amp"]],"graphnet.models.detector.icecube.IceCubeUpgrade":[[4,2,1,"","_forward"],[4,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[4,3,1,"","features"],[4,3,1,"","precision"],[4,3,1,"","prepare_data_per_node"],[4,3,1,"","training"],[4,3,1,"","use_amp"]],"graphnet.models.detector.icecube.IceCubeUpgrade_V2":[[4,2,1,"","_forward"],[4,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[4,3,1,"","features"],[4,5,1,"","nb_outputs"],[4,3,1,"","precision"],[4,3,1,"","prepare_data_per_node"],[4,3,1,"","training"],[4,3,1,"","use_amp"]],"graphnet.models.gnn":[[5,0,0,"-","convnet"],[5,0,0,"-","dynedge"],[5,0,0,"-","gnn"]],"graphnet.models.gnn.convnet":[[5,1,1,"","ConvNet"]],"graphnet.models.gnn.convnet.ConvNet":[[5,2,1,"","__init__"],[5,2,1,"","forward"],[5,3,1,"","training"]],"graphnet.models.gnn.dynedge":[[5,1,1,"","DynEdge"],[5,1,1,"","DynEdge_V2"]],"graphnet.models.gnn.dynedge.DynEdge":[[5,2,1,"","__init__"],[5,2,1,"","forward"],[5,3,1,"","training"]],"graphnet.models.gnn.dynedge.DynEdge_V2":[[5,2,1,"","__init__"],[5,2,1,"","forward"],[5,3,1,"","training"]],"graphnet.models.gnn.gnn":[[5,1,1,"","GNN"]],"graphnet.models.gnn.gnn.GNN":[[5,2,1,"","forward"],[5,5,1,"","nb_inputs"],[5,5,1,"","nb_outputs"],[5,3,1,"","training"]],"graphnet.models.graph_builders":[[3,1,1,"","GraphBuilder"],[3,1,1,"","KNNGraphBuilder"],[3,1,1,"","RadialGraphBuilder"]],"graphnet.models.model":[[3,1,1,"","Model"]],"graphnet.models.model.Model":[[3,2,1,"","compute_loss"],[3,2,1,"","configure_optimizers"],[3,2,1,"","forward"],[3,2,1,"","inference"],[3,2,1,"","load"],[3,2,1,"","load_state_dict"],[3,2,1,"","save"],[3,2,1,"","save_state_dict"],[3,2,1,"","shared_step"],[3,2,1,"","train"],[3,3,1,"","training"],[3,2,1,"","training_step"],[3,2,1,"","validation_step"]],"graphnet.models.task":[[6,0,0,"-","reconstruction"],[6,0,0,"-","task"]],"graphnet.models.task.reconstruction":[[6,1,1,"","AzimuthReconstruction"],[6,1,1,"","AzimuthReconstructionWithKappa"],[6,1,1,"","BinaryClassificationTask"],[6,1,1,"","BinaryClassificationTaskLogits"],[6,1,1,"","EnergyReconstruction"],[6,1,1,"","EnergyReconstructionWithUncertainty"],[6,1,1,"","PassOutput1"],[6,1,1,"","PassOutput2"],[6,1,1,"","PassOutput3"],[6,1,1,"","PositionReconstruction"],[6,1,1,"","TimeReconstruction"],[6,1,1,"","VertexReconstruction"],[6,1,1,"","ZenithReconstruction"],[6,1,1,"","ZenithReconstructionWithKappa"]],"graphnet.models.task.reconstruction.AzimuthReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.AzimuthReconstructionWithKappa":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.BinaryClassificationTask":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.BinaryClassificationTaskLogits":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.EnergyReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.EnergyReconstructionWithUncertainty":[[6,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[6,3,1,"","nb_inputs"],[6,3,1,"","precision"],[6,3,1,"","prepare_data_per_node"],[6,3,1,"","training"],[6,3,1,"","use_amp"]],"graphnet.models.task.reconstruction.PassOutput1":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.PassOutput2":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.PassOutput3":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.PositionReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.TimeReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.VertexReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.ZenithReconstruction":[[6,3,1,"","nb_inputs"],[6,3,1,"","training"]],"graphnet.models.task.reconstruction.ZenithReconstructionWithKappa":[[6,3,1,"","allow_zero_length_dataloader_with_multiple_devices"],[6,3,1,"","nb_inputs"],[6,3,1,"","precision"],[6,3,1,"","prepare_data_per_node"],[6,3,1,"","training"],[6,3,1,"","use_amp"]],"graphnet.models.task.task":[[6,1,1,"","Task"]],"graphnet.models.task.task.Task":[[6,2,1,"","_forward"],[6,2,1,"","_validate_and_set_transforms"],[6,2,1,"","compute_loss"],[6,2,1,"","forward"],[6,2,1,"","inference"],[6,5,1,"","nb_inputs"],[6,2,1,"","train_eval"],[6,3,1,"","training"]],"graphnet.models.training":[[7,0,0,"-","callbacks"],[7,0,0,"-","utils"]],"graphnet.models.training.callbacks":[[7,1,1,"","PiecewiseLinearLR"],[7,1,1,"","ProgressBar"]],"graphnet.models.training.callbacks.PiecewiseLinearLR":[[7,2,1,"","get_lr"]],"graphnet.models.training.callbacks.ProgressBar":[[7,2,1,"","get_metrics"],[7,2,1,"","init_predict_tqdm"],[7,2,1,"","init_test_tqdm"],[7,2,1,"","init_train_tqdm"],[7,2,1,"","init_validation_tqdm"],[7,2,1,"","on_train_epoch_start"]],"graphnet.models.training.utils":[[7,4,1,"","get_predictions"],[7,4,1,"","load_model"],[7,4,1,"","make_dataloader"],[7,4,1,"","make_train_validation_dataloader"],[7,4,1,"","save_results"]],"graphnet.models.utils":[[3,4,1,"","calculate_xyzt_homophily"]],"graphnet.utils":[[0,4,1,"","eps_like"]],graphnet:[[1,0,0,"-","components"],[2,0,0,"-","data"],[3,0,0,"-","models"],[0,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:property"},terms:{"0":[1,2,3,5,7],"00028":3,"01":3,"02":3,"04616":1,"0th":1,"1":[1,2,3,6,7],"10":[3,7],"100":[1,2],"10000":2,"12":1,"128":5,"14":1,"16":[1,3],"1704":3,"1812":1,"1e":3,"1e6":6,"1st":1,"2":[1,2,3,6],"2019":1,"2d":1,"3":[1,3,5,6],"33":7,"3d":1,"4":[5,6],"42":[2,7],"5":3,"6":[1,3],"700":1,"8":1,"86":4,"99":3,"abstract":[1,2,4,5,6],"boolean":[1,2],"case":[2,3,6],"catch":2,"class":[1,2,3,4,5,6,7],"default":[1,2,3,4,5,6,7],"do":[1,3],"final":[1,2,4,6],"float":[1,2,3,5,7],"function":[1,2,3,6],"import":2,"int":[1,2,3,4,5,6,7],"return":[0,1,2,3,4,5,6,7],"static":1,"super":7,"switch":1,"true":[1,3,7],"var":6,"while":7,A:[1,2,3],AND:1,AS:1,At:3,BE:1,BUT:1,But:3,By:6,FOR:1,For:7,IN:1,IS:1,If:[1,3,7],In:[2,3],It:[1,3],NO:1,NOT:1,No:2,OF:1,OR:1,THE:1,TO:1,The:[1,2,3,6,7],There:3,WITH:1,_____________________:1,__call__:2,__init__:[2,5],_attach_index:2,_create_graph:2,_create_t:2,_evalu:1,_extract_everyth:2,_forward:[1,4,6],_get_om_keys_and_pulseseri:2,_load_gcd_data:2,_log_cosh:1,_lrschedul:7,_merge_databas:2,_merge_temporary_databas:2,_parallel_extract:2,_process_fil:2,_query_databas:2,_save_filenam:2,_submit_to_databas:2,_validate_and_set_transform:6,_weightedloss:1,ab:[1,3],abc:[2,3],abov:[1,3],acc:3,accept:1,accord:[1,3],accross:2,accuraci:3,across:[1,2,3],act:1,action:1,actual:3,adam:3,add:3,add_imag:3,addit:[1,3],additional_attribut:7,adjac:[3,4],adjanc:2,advanc:1,affect:3,affin:6,after:[3,7],aggr:1,algorithm:3,all:[1,2,3,4,5,6],alloc:2,allow:7,allow_zero_length_dataloader_with_multiple_devic:[4,6],along:3,also:[1,2,3,6],altern:1,an:[1,2,3,7],angl:[1,6],ani:[1,3],anyth:3,append:3,appli:[1,2],apply_event_no:2,appropri:6,approx:1,ar:[1,2,3,6],arbitrari:1,architectur:[3,5],archiv:7,arg:[1,6],argmax:3,argument:[1,2,3,6],aris:1,arrai:2,arxiv:[1,3],assert:6,assign:1,associ:[1,2,3,6],assum:[3,4,6],attach:2,attribut:[1,2],author:[1,5],autograd:1,automat:[1,3],avail:[2,3],averag:[1,3],avoid:[1,2],azimuth:[2,6],azimuthreconstruct:6,azimuthreconstructionwithkappa:6,b:1,back:3,backprop:3,backward:[1,3],bar:[3,7],base:[1,2,3,4,5,6,7],batch:[1,3],batch_idx:3,batch_siz:[1,3,7],batchnorm:3,becaus:2,been:[1,3],befor:[2,6,7],behavior:3,behaviour:7,being:[3,6],below:3,bessel:1,between:[1,3,7],binari:1,binaryclassificationtask:6,binaryclassificationtasklogit:6,binarycrossentropyloss:1,bit:3,blob:1,bool:[1,2,3,4,5,6,7],border:2,both:6,build:[3,4],c:1,c_:1,calcul:[1,3],calculate_xyzt_homophili:3,call:[2,3],callabl:[1,6],callback:[0,3],can:[1,3],centr:3,certain:3,chain:3,chang:1,charg:[1,2,4],check:2,check_db_siz:1,check_val_every_n_epoch:3,choos:3,chosen:3,claim:1,classif:6,classmethod:[1,3],close_connect:2,closest:7,closur:3,cluster:1,cluster_index:1,coarsen:1,collect:[1,7],column:[1,2,3],com:1,combin:[6,7],common:3,comparison:1,complet:3,compon:[0,3,6,10],comput:[1,3,6],compute_loss:[3,6],condit:[1,3],configur:3,configure_optim:3,conjunct:6,connect:[1,2,4],constant:[0,10],construct:6,constructor:2,contain:[1,2,3],content:10,context:1,continu:[1,3],contract:1,control:3,conv:1,convert:2,convnet:[0,3],copi:1,copyright:1,core:[2,3,4,5,6],correct:1,correpond:2,correspond:[1,2,3,6],cosh:1,cosineann:3,could:3,creat:2,create_out_directori:2,cross:1,csv:2,ctx:1,current:[2,3,7],custom:[3,7],customis:7,cycl:3,d:[1,3],damag:1,data:[0,1,3,4,5,6,7,10],databas:2,database_indic:7,databaseerror:2,dataconvert:[0,10],datafram:2,dataload:[2,3,7],dataloader_idx:3,dataset:[2,3],db:[1,2,7],db_file:2,db_name:2,db_path:2,dbang:2,deactiv:6,deal:1,decid:6,decod:3,deepcor:[2,4],deepspe:3,def:[3,7],defin:[1,2,3],delet:2,denot:7,dens:1,depth:2,describ:3,descript:5,desir:2,desired_s:2,detail:3,detector:[0,2,3,7],determin:2,devic:[3,7],dict:[2,3,4],dictionari:[2,3,7],differ:[1,3],differenti:1,dim:3,dimens:[1,5],dimension:1,dimenson:1,dir:2,directori:2,dis_opt:3,dis_sch:3,disabl:3,disk:2,displai:[3,7],distanc:1,distribut:1,ditto:1,diverg:1,document:[1,3],doe:[2,5],doesnt:2,dom:[1,3],dom_i:[2,4],dom_numb:[2,4],dom_tim:[2,4],dom_typ:[2,4],dom_x:[2,4],dom_z:[2,4],don:[3,7],drop:5,dropout:3,dropout_ratio:5,dtype:[0,2],due:2,dure:1,dynedg:[0,3],dynedge_v2:5,dynedgeconv:1,e:[1,2,3,5,6],each:[1,2,3,7],edg:1,edge_attr:2,edge_conv:1,edge_index:[1,3],edge_weight:2,edgeconv:1,effect:3,either:[1,2,3],elast:2,element:3,elementwis:1,els:1,email:5,enabl:3,encod:3,end:[2,3],energi:[2,6],energyreconstruct:6,energyreconstructionwithuncertainti:6,enforc:3,ensur:[1,2],entir:3,entri:2,entropi:1,ep:0,epoch:[3,7],eps_lik:0,equal:2,error:2,establish_connect:2,estim:1,etc:[2,3],euclidean:1,euclideandist:1,eval:3,evalu:3,even:[1,2],event:[1,2],event_count:2,event_no:2,event_no_list:2,everi:[2,3],everyth:2,exact:1,exampl:[1,3,7],example_imag:3,exist:2,experi:[2,3],exponenti:1,exponentiallr:3,express:1,extens:2,extract:[1,2,6],extractor:2,f:1,factor:7,fals:[1,2,3,7],fancier:3,fc:1,featur:[1,2,3,4,5,7],feature_extractor_class:2,features_subset:1,feed:6,fiduci:2,file:[1,2,3],filenam:2,files_list:2,find:2,find_data_typ:2,find_i3_fil:2,first:[1,2,3,7],fisher:1,fit:[1,3],fit_scal:1,flavour:2,float32:2,float64:1,folder:2,follow:1,format:2,former:3,formula:1,forward:[1,3,4,5,6],found:[1,2,3],fraction:5,fraction_muon:2,fraction_nois:2,fraction_nu_:2,fraction_nu_mu:2,fraction_nu_tau:2,frame:2,frame_contains_classifi:2,frame_contains_retro:2,frame_has_kei:2,frame_is_lvl7:2,frame_is_montecarlo:2,frame_is_nois:2,free:1,frequenc:3,from:[1,2,3,5,6,7],furnish:1,further:2,g:[1,3,6],gan:3,gcd:2,gcd_dict:2,gcd_file:2,gcd_list:2,gcd_rescu:2,gcd_shuffl:2,gen_opt:3,gen_sch:3,gener:[1,2,3],geospati:2,get:[2,3],get_desired_event_numb:2,get_equal_proportion_neutrino_indic:2,get_even_dbang_select:2,get_even_signal_background_indici:2,get_even_track_cascade_indici:2,get_lr:7,get_metr:7,get_predict:7,get_primary_particle_interaction_type_and_elast:2,get_standard_metr:7,github:1,given:[1,3],global:2,gnn:[0,2,3,7],gnn_modul:[0,10],goe:3,gpu:3,grad:1,grad_output:1,gradient:[1,3],grant:1,graph:[1,2,3,4,5],graph_build:[0,4,10],graphbuild:[3,4],graphnet:10,grid:3,group:1,group_ident:1,group_pulses_to_dom:1,group_pulses_to_pmt:1,ha:[1,2,3,5],handi:2,handl:[2,3],handler:2,has_extens:2,have:[1,3,6],here:[3,7],herebi:1,hidden:[3,5],hidden_s:6,hit:3,holder:1,homophili:3,hook:3,horizont:2,horizontal_pad:2,how:[3,7],http:[1,3],i3:2,i3_fil:2,i3_list:2,i3_shuffl:2,i3extractor:[0,10],i3extractorcollect:2,i3featureextractor:2,i3featureextractoricecube86:2,i3featureextractoricecubedeepcor:2,i3featureextractoricecubeupgrad:2,i3pulsenoisetruthflagicecubeupgrad:2,i3retroextractor:2,i3truthextractor:2,i:[1,2,5],icecub:[0,2,3],icecube86:[2,4],icecubedeepcor:4,icecubeupgrad:4,icecubeupgrade_v2:4,ident:1,imag:[2,3],implement:[1,2,3,5,7],implent:[1,4,6],impli:1,impos:2,improv:3,inabl:2,includ:[1,2,3],increas:7,index:[2,3,7,9],index_column:2,indic:[1,2,3,7],indici:[1,2],individu:1,inf:1,infer:[3,6],inform:2,ingest:4,inherit:[1,2,4,6],init_predict_tqdm:7,init_test_tqdm:7,init_train_tqdm:7,init_validation_tqdm:7,input:[1,2,3,4,5,6],input_fil:2,ins:4,insid:2,instanc:3,instead:1,integ:[3,5],interact:2,interaction_tim:2,interaction_typ:2,interest:3,interfer:6,intermedi:5,interpol:7,interv:3,invers:6,invert:6,ipu:3,is_empti:2,is_gcd_fil:2,is_i3_fil:2,is_pulse_map:2,issu:2,item:[3,7],its:[2,3],itself:6,iv:1,just:[1,2],k:[1,3],kappa:[1,6],kappa_switch:1,kei:[2,3],kera:1,keyword:[3,6],kind:1,knngraphbuild:3,know:3,known:1,kwarg:[1,6],l1580:1,l1617:1,label:[2,5],labels_hat:3,lambdalr:3,larg:1,last:[3,7],last_epoch:7,latter:3,layer:[0,5,6,10],layer_size_scal:5,lbfg:3,ldot:1,learn:[3,7],learnabl:5,learningratemonitor:3,len:[2,3],length:[2,7],liabil:1,liabl:1,licens:1,lightn:[3,4,5,6,7],lightningmodul:[3,4,5,6],like:[1,3],limit:1,line:7,linearli:7,list:[1,2,3,4,6,7],load:[2,3],load_model:7,load_state_dict:3,log10:6,log:[1,3,6],log_cmk:1,log_cmk_approx:1,log_cmk_exact:1,log_dict:3,logcmk:1,logcoshloss:1,logger:3,longtensor:1,loss:[1,3,6,7],loss_funct:[0,6,10],lossfunct:[1,6],lr:3,lr_schedul:[3,7],lr_scheduler_config:3,lstm:3,m:1,made:3,mai:4,main:3,make:2,make_dataload:7,make_grid:3,make_train_validation_dataload:7,malform:2,manag:2,mani:[1,3],map:2,map_async:2,martin:5,master:1,match:[0,2],mathbb:1,mathbf:1,matrix:1,max:[1,2],max_dictionary_s:2,maximum:[1,2,6],mc:2,mciniceprimari:2,mean:2,measur:3,mention:3,merchant:1,merg:[1,2],messag:7,method:[1,2,3,6],metric:[3,7],metric_to_track:3,metric_v:3,might:3,mileston:7,min:2,min_max_decay_length:2,minh:5,minimum:6,minu:1,mise:1,mit:1,mode:[3,6],model:[0,1,2,10],model_di:3,model_gen:3,moder:1,modifi:1,modul:[9,10],monitor:3,montecarlo:2,more:2,most:3,mryab:1,multi:3,multipl:[2,3,7],multipli:7,muon:[1,2],muon_stop:2,must:[1,3,7],n:1,n_1:1,n_b:1,n_critic:3,name:[2,3,6],nb_input:[4,5,6],nb_intermedi:5,nb_nearest_neighbour:3,nb_neighbor:1,nb_output:[4,5],nearest:3,necessari:2,need:[1,3],needs_input_grad:1,neighbour:3,neither:2,neutral:2,neutrino:[1,2],next:3,nn:[1,6],node:[1,2,3,5,6],non:[1,2],none:[1,2,3,4,6,7],noninfring:1,normal:3,notic:[1,3],num:1,num_work:7,number:[1,2,3,5,6,7],numer:[1,6],numpi:2,o:6,object:[1,2,3,4,6],obtain:1,oerso:5,often:3,om_kei:2,omit:2,on_train_epoch_start:7,one:[1,2,3],onli:[1,3,6],open:2,oper:[1,3],optim:[3,7],optimizer1:3,optimizer2:3,optimizer_class:3,optimizer_idx:3,optimizer_kwarg:3,optimizer_on:3,optimizer_step:3,optimizer_two:3,option:[1,2,3,4,5,6,7],order:3,ordereddict:2,org:[1,3],other:1,otherwis:1,out:[1,2,3],outdir:2,outlin:2,output:[1,3,5,6],over:3,overrid:[3,7],overridden:[1,4],overwrit:7,own:[2,3],p:1,packag:10,pad:2,padding_valu:2,page:9,pairwise_shuffl:2,panda:2,paper:1,parallel:2,param:1,paramet:[1,2,3,4,5,6,7],paramref:3,particl:2,particular:[1,3],pass:[1,2,3,5,6],passoutput1:6,passoutput2:6,passoutput3:6,path:[2,3],path_to_tmp:2,per:1,perform:[1,2,6],permiss:1,permit:1,persistent_work:7,person:1,perturb:2,perturbation_dict:2,physic:[2,6],pid:[1,2],piecewiselinearlr:7,plane:1,pleas:2,pmt:1,pmt_area:[2,4],pmt_dir_i:[2,4],pmt_dir_x:[2,4],pmt_dir_z:[2,4],pmt_number:[2,4],point:[1,2],pool:[0,10],pop:7,portion:1,posit:1,position_i:2,position_x:2,position_z:2,positionreconstruct:6,possibl:6,pre:4,precis:[1,3,4,6],pred:[3,6],predict:[1,5,6,7],prediction_column:7,prepar:1,prepare_data_per_nod:[4,6],preprocess:[2,4],present:[2,3],previou:[3,7],primari:2,print:7,prob:1,probabl:1,procedur:3,process:[2,4],process_posit:7,produc:3,progress:[3,7],progressbar:7,propag:3,properti:[1,2,4,5,6],proport:2,provid:1,pseudocod:3,publish:1,puls:[1,2],pulsemap:[1,2,7],pulsemap_t:2,purpos:1,put:3,py:1,pytorch:[2,3,7],pytorch_lightn:[3,4,5,6,7],quantiti:[2,3,6],queri:2,r:1,radialgraphbuild:3,radiu:3,random:2,rang:6,rasmu:5,rate:[3,7],rather:6,rde:[2,4],read:[2,3,4],reco:2,reconstruct:[0,2,3],recov:6,recurs:2,reducelronplateau:3,reduct:1,refer:3,refresh_r:7,relat:2,relev:2,replica:2,report:1,repres:1,represent:1,request:2,requir:[1,2,3],resp:2,respect:1,restrict:[1,6],result:[1,2,7],retriev:1,retro:2,return_el:1,ride:2,right:1,row:1,run:[2,3],ryabinin:1,s:[0,2,3,5,6],same:[1,4,6,7],sample_img:3,save:[1,2,3],save_result:7,save_state_dict:3,scalar:[1,3],scale:[1,5,6],scaler:4,schedul:3,scheduler1:3,scheduler2:3,scheduler_class:3,scheduler_config:3,scheduler_kwarg:3,search:[2,9],sec:1,second:[2,3],see:[1,3,7],seed:[2,7],select:[2,7],self:[2,3,7],sell:1,separ:7,sequenc:1,sequenti:[2,3],seri:2,set:[1,2,3,6],set_fil:2,sever:2,sgd:3,shall:1,shape:[1,3],shared_step:3,should:[1,2,3],show:7,shown:3,shrink:2,shuffl:[2,7],sign:1,silent:2,sim_typ:2,similar:[1,3],simpli:3,simul:2,sinc:1,singl:[1,2,3],size:[1,3,5],skip:3,small:1,smooth:3,so:[1,3],softwar:1,some:3,someth:3,sourc:[0,1,2,3,4,5,6,7],space:1,sparsetensor:1,special:3,specialis:2,specif:[1,3,4],specifi:[2,3,6,7],sphere:[1,3],spite:1,sqlite3:2,sqlite:2,sqlite_dataconvert:[0,10],sqlite_dataset:[0,10],sqlite_dataset_perturb:[0,10],sqlitedataconvert:2,sqlitedataset:2,sqlitedatasetperturb:2,stabil:2,stabl:[1,6],stage:2,standard:7,start:2,state:3,state_dict:3,stdout:7,step:[2,3,7],stop:[2,3],store:1,str:[1,2,3,4,6,7],strict:3,string:[1,2,4],studi:2,subclass:1,subject:1,sublicens:1,submit:2,submodul:10,subpackag:10,substanti:1,suggest:1,sum:[1,3],sum_pool:1,sum_pool_and_distribut:1,sum_pool_x:1,support:3,sure:2,syntax:[1,4,6],t:[1,3,7],t_max:3,tabl:2,table_nam:2,tag:7,take:1,target:[1,6],target_label:6,task:[0,3,7],team:1,tell:3,temporari:2,tensor:[0,1,3,5,6],term:1,test:[2,6,7],test_siz:7,text:3,than:6,thei:3,them:6,therebi:2,thi:[1,2,3,4,5,6,7],thing:[2,3],those:3,through:[1,3],thu:3,time:[1,2,3],timereconstruct:6,togeth:3,torch:[0,1,2,3,5,6,7],torch_geometr:[1,3,4,5,6],torch_spars:1,torchvis:3,tort:1,tpu:3,tqdm:7,tqdm_progress:7,tqdmprogressbar:7,track:2,train:[0,1,2,3,4,5,6],train_batch:3,train_ev:6,trainer:[3,7],training_step:3,transform:[1,6],transform_infer:6,transform_prediction_and_target:6,transform_support:6,transform_target:6,travel:2,truncat:3,truncated_bptt_step:3,truth:[1,2,7],truth_tabl:2,tupl:[1,2,3,6,7],two:[1,2,3,7],type:[1,2,3,4,5],unaccur:1,uncertainti:6,union:[1,2,3,6,7],unit:[1,3],updat:[3,6,7],upgrad:[2,4],us:[1,2,3,4,6,7],use_amp:[4,6],user:7,util:10,utilis:1,v2:1,v_num:7,val:3,val_acc:3,val_batch:3,val_data:3,val_loss:3,val_out:3,valid:[1,3,6,7],validation_epoch_end:3,validation_step:3,validation_step_end:3,valu:[1,2,3],variabl:3,vector:1,verbos:[2,3,7],versa:7,version:[1,6,7],vertexreconstruct:6,vertic:2,vertical_pad:2,vice:7,vmf_loss:1,volum:2,von:1,vonmisesfisher2dloss:1,vonmisesfisherloss:1,w:1,warn:3,warranti:1,wasserstein:3,weight:1,were:1,what:[3,5],whatev:[3,6],when:3,where:[1,2],wherea:3,whether:[1,2,3],which:[1,2,3],whom:1,whose:3,wise:1,within:1,without:[1,3,6],worker:2,wrap:7,written:2,x:[1,2,3,6],xy:2,xyzt:3,y:[2,3],yield:1,you:[1,3,6],your:[3,6],z:[2,3],zenith:[2,6],zenithreconstruct:6,zenithreconstructionwithkappa:6},titles:["graphnet package","graphnet.components package","graphnet.data package","graphnet.models package","graphnet.models.detector package","graphnet.models.gnn package","graphnet.models.task package","graphnet.models.training package","graphnet.modules package","Welcome to gnn-reco\u2019s documentation!","src"],titleterms:{callback:7,compon:1,constant:2,content:[0,1,2,3,4,5,6,7,8],convnet:5,data:2,dataconvert:2,detector:4,document:9,dynedg:5,gnn:[5,9],gnn_modul:8,graph_build:3,graphnet:[0,1,2,3,4,5,6,7,8],i3extractor:2,icecub:4,indic:9,layer:1,loss_funct:1,model:[3,4,5,6,7],modul:[0,1,2,3,4,5,6,7,8],packag:[0,1,2,3,4,5,6,7,8],pool:1,reco:9,reconstruct:6,s:9,sqlite_dataconvert:2,sqlite_dataset:2,sqlite_dataset_perturb:2,src:10,submodul:[0,1,2,3,4,5,6,7,8],subpackag:[0,3],tabl:9,task:6,train:7,util:[0,1,2,3,7],welcom:9}})