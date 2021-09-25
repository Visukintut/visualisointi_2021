//(function test () {
	var width = 1000,
	height=1000;
//data
	var data = [
		{id:'i1', name: 'Akaa', onn:160, onnkvl:66.3625051845707, xk:529.857524654852, yk:571.846271456827, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i2', name: 'Alajärvi', onn:22, onnkvl:30.0957592339261, xk:551.020590381601, yk:462.626844312414, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i3', name: 'Alavieska', onn:6, onnkvl:8.67052023121387, xk:574.47181578401, yk:388.5864227523, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i4', name: 'Alavus', onn:20, onnkvl:22.4466891133558, xk:528.251416396701, yk:483.55273900845, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i5', name: 'Asikkala', onn:56, onnkvl:50.8628519527702, xk:626.161131815192, yk:570.827617827684, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i6', name: 'Askola', onn:9, onnkvl:11.0429447852761, xk:628.985460553699, yk:611.299912530083, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i7', name: 'Aura', onn:39, onnkvl:14.2961876832845, xk:463.150140667588, yk:602.22488657623, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		//{id:'i8', name: 'Enonkoski', onn:0, onnkvl:0, xk:794.159441427785, yk:513.996600530962, maakunta: '10' ,kuva: 'kuvat/villisika.png' },
		{id:'i9', name: 'Enontekiö', onn:1, onnkvl:2.31481481481481, xk:527.222502604473, yk:114.947176323877, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i10', name: 'Espoo', onn:218, onnkvl:12.342184226915, xk:575.597655095334, yk:630.24305531201, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i11', name: 'Eura', onn:207, onnkvl:161.71875, xk:441.090324502464, yk:572.212422826438, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i12', name: 'Eurajoki', onn:150, onnkvl:82.2819528250137, xk:418.013826642493, yk:558.663992024852, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i13', name: 'Evijärvi', onn:10, onnkvl:14.0252454417952, xk:528.875755972335, yk:436.824302723446, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i14', name: 'Forssa', onn:60, onnkvl:38.4122919334187, xk:522.931778539286, yk:587.170771085459, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i15', name: 'Haapajärvi', onn:6, onnkvl:7.27272727272727, xk:618.26994588665, yk:413.946499535387, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i16', name: 'Haapavesi', onn:5, onnkvl:9.3984962406015, xk:621.706053225706, yk:393.048213287343, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		//{id:'i17', name: 'Hailuoto', onn:0, onnkvl:0, xk:600.055153282998, yk:338.015942844466, maakunta: '17' ,kuva: 'kuvat/villisika.png' },
		{id:'i18', name: 'Halsua', onn:3, onnkvl:8.31024930747922, xk:568.748961584496, yk:433.004677182753, maakunta: '16' ,kuva: 'kuvat/hirvi.png' },
		{id:'i19', name: 'Hamina', onn:16, onnkvl:9.90712074303406, xk:711.337854669124, yk:608.097948788292, maakunta: '08' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i20', name: 'Hankasalmi', onn:12, onnkvl:12.1457489878543, xk:673.535069826186, yk:500.235366417823, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i21', name: 'Hanko', onn:42, onnkvl:28.4552845528455, xk:487.515141996887, yk:650, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i22', name: 'Harjavalta', onn:17, onnkvl:8.62068965517241, xk:447.714210262868, yk:559.287714899431, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i23', name: 'Hartola', onn:11, onnkvl:9.55690703735882, xk:651.151689034832, yk:547.435295789788, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i24', name: 'Hattula', onn:74, onnkvl:30.8848080133556, xk:555.381601742668, yk:579.376412281938, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i25', name: 'Hausjärvi', onn:63, onnkvl:63.2530120481928, xk:594.128545015495, yk:595.33390995597, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i26', name: 'Heinola', onn:44, onnkvl:15.2883947185546, xk:654.421996122209, yk:569.13800704065, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i27', name: 'Heinävesi', onn:6, onnkvl:11.9284294234592, xk:785.215005681514, yk:496.170040108483, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i28', name: 'Helsinki', onn:59, onnkvl:1.54949181920845, xk:595.731820011427, yk:631.91681374863, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i29', name: 'Hirvensalmi', onn:11, onnkvl:15.5148095909732, xk:684.491227266568, yk:541.40935762297, maakunta: '10' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i30', name: 'Hollola', onn:118, onnkvl:71.7761557177616, xk:617.294407764869, yk:583.673965214606, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i32', name: 'Huittinen', onn:176, onnkvl:144.499178981938, xk:478.566646596814, yk:572.183504560864, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i33', name: 'Humppila', onn:60, onnkvl:39.4218134034166, xk:507.727730706568, yk:584.160418292426, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i34', name: 'Hyrynsalmi', onn:8, onnkvl:28.673835125448, xk:779.855485428689, yk:362.722665130318, maakunta: '18' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i35', name: 'Hyvinkää', onn:137, onnkvl:30.5803571428571, xk:583.71448011787, yk:606.930319956659, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i36', name: 'Hämeenkyrö', onn:68, onnkvl:41.743400859423, xk:503.089951563114, yk:542.605920942601, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i37', name: 'Hämeenlinna', onn:349, onnkvl:194.104560622914, xk:569.159893650793, yk:580.163259161906, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i38', name: 'Ii', onn:7, onnkvl:5.81395348837209, xk:629.357416625369, yk:310.403049123104, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i39', name: 'Iisalmi', onn:14, onnkvl:13.7254901960784, xk:710.027597915051, yk:430.715158138486, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i40', name: 'Iitti', onn:17, onnkvl:17.9704016913319, xk:659.763451577853, yk:588.066473879251, maakunta: '07' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i41', name: 'Ikaalinen', onn:36, onnkvl:33.4261838440111, xk:499.183770011321, yk:530.403421276897, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i42', name: 'Ilmajoki', onn:34, onnkvl:22.3097112860892, xk:479.99264293813, yk:475.476995090868, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i43', name: 'Ilomantsi', onn:3, onnkvl:12.8205128205128, xk:900, yk:473.168229509572, maakunta: '12' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i44', name: 'Imatra', onn:14, onnkvl:4.40528634361234, xk:796.596026308707, yk:572.184627332326, maakunta: '09' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i45', name: 'Inari', onn:9, onnkvl:19.1897654584222, xk:700.288411310097, yk:101.439809601301, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i46', name: 'Inkoo', onn:127, onnkvl:80.6861499364676, xk:536.676926903337, yk:641.187899804601, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i47', name: 'Isojoki', onn:22, onnkvl:52.6315789473684, xk:441.491939031988, yk:508.899285605549, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i48', name: 'Isokyrö', onn:8, onnkvl:11.4777618364419, xk:473.805530805641, yk:459.874216572977, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i49', name: 'Janakkala', onn:209, onnkvl:70.7275803722504, xk:578.503594883786, yk:591.073863388494, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i50', name: 'Joensuu', onn:28, onnkvl:26.046511627907, xk:871.135631964782, yk:485.244350892136, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i51', name: 'Jokioinen', onn:51, onnkvl:34.3434343434343, xk:512.633664169701, yk:591.449755256019, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i52', name: 'Joroinen', onn:13, onnkvl:10.7615894039735, xk:740.240639839433, yk:511.593397365012, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i53', name: 'Joutsa', onn:7, onnkvl:6.38686131386861, xk:658.509696773488, yk:532.709967850649, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i54', name: 'Juuka', onn:4, onnkvl:7.8740157480315, xk:810.180947935961, yk:449.257838272439, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i55', name: 'Juupajoki', onn:10, onnkvl:13.4228187919463, xk:570.264551274762, yk:531.551673549928, maakunta: '06' ,kuva: 'kuvat/hirvi.png' },
		{id:'i56', name: 'Juva', onn:11, onnkvl:11.2130479102956, xk:744.271006724366, yk:533.37503912662, maakunta: '10' ,kuva: 'kuvat/hirvi.png' },
		{id:'i57', name: 'Jyväskylä', onn:74, onnkvl:20.981003685852, xk:632.142575039684, yk:513.476586385586, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i58', name: 'Jämijärvi', onn:7, onnkvl:11.7056856187291, xk:480.258866090978, yk:528.362186663753, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i59', name: 'Jämsä', onn:36, onnkvl:37.4609781477627, xk:600.638031206566, yk:527.700631083845, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i60', name: 'Järvenpää', onn:9, onnkvl:0.838144905941516, xk:599.306090709093, yk:614.168600724161, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i61', name: 'Kaarina', onn:88, onnkvl:12.6056438905601, xk:456.214777193582, yk:616.24029856969, maakunta: '02' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i62', name: 'Kaavi', onn:3, onnkvl:9.06344410876133, xk:787.805521755557, yk:465.049653194518, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i63', name: 'Kajaani', onn:16, onnkvl:14.8423005565863, xk:718.053444988748, yk:392.059526702769, maakunta: '18' ,kuva: 'kuvat/hirvi.png' },
		{id:'i64', name: 'Kalajoki', onn:11, onnkvl:9.9728014505893, xk:549.448572404757, yk:387.645591511647, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i65', name: 'Kangasala', onn:84, onnkvl:36.2850971922246, xk:570.363291485133, yk:552.947239859856, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i66', name: 'Kangasniemi', onn:7, onnkvl:14.4329896907216, xk:681.492705389201, yk:521.316623070686, maakunta: '10' ,kuva: 'kuvat/hirvi.png' },
		{id:'i67', name: 'Kankaanpää', onn:74, onnkvl:90.2439024390244, xk:462.556431269335, yk:524.55177990183, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i68', name: 'Kannonkoski', onn:7, onnkvl:19.3905817174515, xk:620.754871239198, yk:464.615528061075, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i69', name: 'Kannus', onn:3, onnkvl:3.37837837837838, xk:556.046937370681, yk:403.57530216994, maakunta: '16' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i70', name: 'Karijoki', onn:6, onnkvl:16.260162601626, xk:435.846228467782, yk:498.297755051156, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i71', name: 'Karkkila', onn:97, onnkvl:58.2932692307692, xk:554.709561134033, yk:608.794020254683, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i72', name: 'Karstula', onn:14, onnkvl:28.6298568507157, xk:591.118891834604, yk:467.502258833229, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i73', name: 'Karvia', onn:9, onnkvl:21.0280373831776, xk:476.039874801589, yk:509.521631119883, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i74', name: 'Kauhajoki', onn:49, onnkvl:62.3409669211196, xk:465.6312954687, yk:499.96156475929, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i75', name: 'Kauhava', onn:20, onnkvl:22.5479143179256, xk:504.417380238514, yk:446.251300515219, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i76', name: 'Kauniainen', onn:6, onnkvl:0.216974650128377, xk:577.257591628379, yk:630.764322529798, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i77', name: 'Kaustinen', onn:9, onnkvl:6.66173205033309, xk:542.902907252299, yk:424.947741992503, maakunta: '16' ,kuva: 'kuvat/hirvi.png' },
		{id:'i78', name: 'Keitele', onn:4, onnkvl:12.6984126984127, xk:667.781886566192, yk:452.293238617656, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i79', name: 'Kemi', onn:15, onnkvl:3.11397135146357, xk:591.962591476324, yk:296.428034928296, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i80', name: 'Kemijärvi', onn:8, onnkvl:17.3913043478261, xk:724.977866122437, yk:239.825506773483, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i81', name: 'Keminmaa', onn:12, onnkvl:8.13008130081301, xk:603.13690750624, yk:287.58640562923, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i82', name: 'Kemiönsaari', onn:68, onnkvl:92.6430517711172, xk:458.534178349922, yk:639.36255265912, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i83', name: 'Kempele', onn:7, onnkvl:0.99304865938431, xk:634.374813257621, yk:346.341723202241, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i84', name: 'Kerava', onn:31, onnkvl:1.79066543438078, xk:599.286485091889, yk:620.399378222389, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i85', name: 'Keuruu', onn:25, onnkvl:35.4107648725212, xk:578.683953425227, yk:503.586729492136, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i86', name: 'Kihniö', onn:5, onnkvl:11.6009280742459, xk:510.107279827361, yk:508.291875622669, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i87', name: 'Kinnula', onn:4, onnkvl:10.8695652173913, xk:604.358878840907, yk:441.46465442399, maakunta: '13' ,kuva: 'kuvat/hirvi.png' },
		{id:'i88', name: 'Kirkkonummi', onn:251, onnkvl:55.0438596491228, xk:562.158050252874, yk:638.233807841442, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i89', name: 'Kitee', onn:15, onnkvl:25.6410256410256, xk:853.61512806915, yk:519.875608873952, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i90', name: 'Kittilä', onn:7, onnkvl:12.6353790613718, xk:614.998301067756, yk:164.669697456527, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i91', name: 'Kiuruvesi', onn:6, onnkvl:18.2926829268293, xk:681.266525007936, yk:422.890223975377, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i92', name: 'Kivijärvi', onn:7, onnkvl:23.1023102310231, xk:604.426414987228, yk:451.796731491708, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i93', name: 'Kokemäki', onn:32, onnkvl:38.1406436233611, xk:458.196477277494, yk:560.018532559359, maakunta: '04' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i94', name: 'Kokkola', onn:41, onnkvl:25.625, xk:528.946335959267, yk:406.591064847047, maakunta: '16' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i95', name: 'Kolari', onn:8, onnkvl:15.4142581888247, xk:570.354510578386, yk:200.466992568253, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i96', name: 'Konnevesi', onn:6, onnkvl:10.3986135181976, xk:662.159470246923, yk:482.633356530289, maakunta: '13' ,kuva: 'kuvat/hirvi.png' },
		{id:'i97', name: 'Kontiolahti', onn:17, onnkvl:11.509817197021, xk:840.981004884759, yk:472.360804809415, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i98', name: 'Korsnäs', onn:15, onnkvl:25.3807106598985, xk:410.497163692005, yk:467.985679816686, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i99', name: 'Koski Tl', onn:77, onnkvl:88.2016036655212, xk:494.235959310606, yk:601.99800913753, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i100', name: 'Kotka', onn:14, onnkvl:2.74941084053417, xk:700.904952422544, yk:618.431876266764, maakunta: '08' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i101', name: 'Kouvola', onn:112, onnkvl:80.6335493160547, xk:684.543727618971, yk:590.655125807054, maakunta: '08' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i102', name: 'Kristiinankaupunki', onn:39, onnkvl:51.5191545574637, xk:417.61199429983, yk:505.245077799532, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i103', name: 'Kruunupyy', onn:37, onnkvl:38.2626680455015, xk:525.752115050716, yk:420.475426489389, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i104', name: 'Kuhmo', onn:15, onnkvl:66.6666666666667, xk:830.131909614802, yk:385.425556243878, maakunta: '18' ,kuva: 'kuvat/metsapeura.png' },
		{id:'i105', name: 'Kuhmoinen', onn:22, onnkvl:39.3559928443649, xk:606.754444811654, yk:543.754100914311, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i106', name: 'Kuopio', onn:54, onnkvl:43.9739413680782, xk:741.384642768441, yk:459.238745994135, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i107', name: 'Kuortane', onn:13, onnkvl:13, xk:528.878575493087, yk:474.217222935401, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i108', name: 'Kurikka', onn:53, onnkvl:51.7578125, xk:465.310813710331, yk:483.517591152796, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i109', name: 'Kustavi', onn:44, onnkvl:117.333333333333, xk:398.088608211591, yk:603.8726874715, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i110', name: 'Kuusamo', onn:5, onnkvl:10.4384133611691, xk:797.045870454909, yk:282.650344288579, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i111', name: 'Kyyjärvi', onn:11, onnkvl:18.9003436426117, xk:578.902670057512, yk:458.663590792884, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i112', name: 'Kärkölä', onn:42, onnkvl:43.0769230769231, xk:609.090492678703, yk:592.217888320045, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i113', name: 'Kärsämäki', onn:15, onnkvl:18.3823529411765, xk:643.854674867781, yk:402.913124969479, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i114', name: 'Lahti', onn:97, onnkvl:20.0911350455675, xk:641.203706623909, yk:584.420662664455, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i115', name: 'Laihia', onn:5, onnkvl:5.82750582750583, xk:454.636210759932, yk:464.104895813141, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i116', name: 'Laitila', onn:123, onnkvl:91.7910447761194, xk:423.563066459474, yk:583.220619143312, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i117', name: 'Lapinjärvi', onn:7, onnkvl:6.62878787878788, xk:655.243262061619, yk:607.207260356846, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i118', name: 'Lapinlahti', onn:8, onnkvl:10.8991825613079, xk:730.001205655763, yk:439.836182019334, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i119', name: 'Lappajärvi', onn:7, onnkvl:9.37081659973226, xk:533.728277108621, yk:446.607541382708, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i120', name: 'Lappeenranta', onn:31, onnkvl:19.2188468691878, xk:763.141154168617, yk:585.562221378539, maakunta: '09' ,kuva: 'kuvat/hirvi.png' },
		{id:'i121', name: 'Lapua', onn:6, onnkvl:3.96563119629874, xk:513.360904879576, yk:462.684508822087, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i122', name: 'Laukaa', onn:42, onnkvl:18.850987432675, xk:650.700593460328, yk:499.980334766061, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i123', name: 'Lemi', onn:14, onnkvl:14.9892933618844, xk:742.550554287466, yk:579.158171414584, maakunta: '09' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i124', name: 'Lempäälä', onn:54, onnkvl:7.73085182534001, xk:531.315083869222, yk:560.2855889024, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i125', name: 'Leppävirta', onn:27, onnkvl:20.4545454545455, xk:750.396587419279, yk:491.723297550323, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i126', name: 'Lestijärvi', onn:7, onnkvl:15.5210643015521, xk:588.238320132739, yk:431.836392005086, maakunta: '16' ,kuva: 'kuvat/metsapeura.png' },
		{id:'i127', name: 'Lieksa', onn:6, onnkvl:21.1267605633803, xk:857.524763844474, yk:440.290240147345, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i128', name: 'Lieto', onn:98, onnkvl:41.5078356628547, xk:465.702914611422, yk:605.696909489939, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i129', name: 'Liminka', onn:12, onnkvl:4.55753892897835, xk:636.689584056056, yk:357.868173678516, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i130', name: 'Liperi', onn:12, onnkvl:9.47119179163378, xk:816.916992931944, yk:488.153287675066, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i131', name: 'Lohja', onn:319, onnkvl:136.034115138593, xk:534.509266630377, yk:620.622656065114, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i132', name: 'Loimaa', onn:250, onnkvl:229.147571035747, xk:485.409715880936, yk:586.117455952001, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i133', name: 'Loppi', onn:224, onnkvl:200, xk:562.704266364061, yk:601.699482560723, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i134', name: 'Loviisa', onn:49, onnkvl:27.4509803921569, xk:657.394863106053, yk:617.307932158061, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i135', name: 'Luhanka', onn:4, onnkvl:11.2359550561798, xk:634.374214307846, yk:535.322253251839, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i136', name: 'Lumijoki', onn:5, onnkvl:4.79386385426654, xk:614.529766958496, yk:348.274154948544, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i137', name: 'Luoto', onn:10, onnkvl:4.8661800486618, xk:493.536230140437, yk:410.500211043374, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i138', name: 'Luumäki', onn:19, onnkvl:15.7938487115544, xk:726.758327505889, yk:587.858878731038, maakunta: '09' ,kuva: 'kuvat/hirvi.png' },
		{id:'i139', name: 'Maalahti', onn:26, onnkvl:25.844930417495, xk:416.496842716575, yk:459.094511521447, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i140', name: 'Marttila', onn:59, onnkvl:52.1201413427562, xk:482.356839346946, yk:603.411794794208, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i141', name: 'Masku', onn:112, onnkvl:42.5047438330171, xk:431.71583477376, yk:605.896544037297, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i142', name: 'Merijärvi', onn:3, onnkvl:9.00900900900901, xk:584.39038150698, yk:380.576846214204, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i143', name: 'Merikarvia', onn:39, onnkvl:46.875, xk:418.838937530861, yk:524.172334054518, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i144', name: 'Miehikkälä', onn:3, onnkvl:9.64630225080386, xk:736.838953071243, yk:602.165047986505, maakunta: '08' ,kuva: 'kuvat/villisika.png' },
		{id:'i145', name: 'Mikkeli', onn:74, onnkvl:66.1304736371761, xk:715.231861777497, yk:544.262810279995, maakunta: '10' ,kuva: 'kuvat/hirvi.png' },
		{id:'i146', name: 'Muhos', onn:7, onnkvl:5.45596258768511, xk:663.204228916958, yk:355.629517242145, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i147', name: 'Multia', onn:11, onnkvl:21.6110019646365, xk:592.753428375162, yk:492.893280102342, maakunta: '13' ,kuva: 'kuvat/hirvi.png' },
		{id:'i148', name: 'Muonio', onn:1, onnkvl:1.85528756957328, xk:565.543916405276, yk:163.863417673144, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i149', name: 'Mustasaari', onn:87, onnkvl:54.2732376793512, xk:429.530025384665, yk:440.560966134686, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i150', name: 'Muurame', onn:26, onnkvl:7.40740740740741, xk:631.480035726489, yk:513.797915059549, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i151', name: 'Mynämäki', onn:138, onnkvl:103.370786516854, xk:434.31826112353, yk:596.766098251367, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i152', name: 'Myrskylä', onn:7, onnkvl:12.8676470588235, xk:640.430190007254, yk:605.583771805067, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i153', name: 'Mäntsälä', onn:135, onnkvl:36.4175883463717, xk:609.431694447466, yk:604.184058602591, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i154', name: 'Mänttä-Vilppula', onn:21, onnkvl:24.0825688073394, xk:568.139888352751, yk:517.143812223803, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i155', name: 'Mäntyharju', onn:14, onnkvl:16.7865707434053, xk:691.384813061166, yk:562.089153363606, maakunta: '10' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i156', name: 'Naantali', onn:136, onnkvl:77.8032036613272, xk:424.986005109369, yk:612.666871760007, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i157', name: 'Nakkila', onn:43, onnkvl:23.3441910966341, xk:437.88421916489, yk:556.247320020075, maakunta: '04' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i158', name: 'Nivala', onn:3, onnkvl:3.39750849377123, xk:606.231170992264, yk:405.497474729077, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i159', name: 'Nokia', onn:90, onnkvl:24.31775195893, xk:511.599052943437, yk:554.019705342725, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i160', name: 'Nousiainen', onn:35, onnkvl:28.6885245901639, xk:441.806370719295, yk:600.968438594628, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i161', name: 'Nurmes', onn:18, onnkvl:37.9746835443038, xk:800.444921288946, yk:425.088451518857, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i162', name: 'Nurmijärvi', onn:249, onnkvl:54.9062844542448, xk:580.763005427614, yk:614.10381827524, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i163', name: 'Närpiö', onn:77, onnkvl:100.522193211488, xk:412.450196230397, yk:482.781570371036, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i164', name: 'Orimattila', onn:43, onnkvl:26.7579340385812, xk:640.309945629573, yk:596.44793621592, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i165', name: 'Oripää', onn:78, onnkvl:93.4131736526946, xk:472.269623614823, yk:587.848552777613, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i166', name: 'Orivesi', onn:36, onnkvl:26.7857142857143, xk:573.407887529718, yk:542.369908903459, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i167', name: 'Oulainen', onn:8, onnkvl:9.38967136150235, xk:601.819373030051, yk:384.04115312045, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i168', name: 'Oulu', onn:53, onnkvl:15.1905990255087, xk:635.845514054321, yk:335.090735285492, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i169', name: 'Outokumpu', onn:4, onnkvl:5.73065902578797, xk:796.960654004813, yk:478.463855886234, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i170', name: 'Padasjoki', onn:42, onnkvl:62.407132243685, xk:608.466703792784, yk:562.520805725988, maakunta: '07' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i171', name: 'Paimio', onn:77, onnkvl:23.4470158343484, xk:473.280406741698, yk:611.999878983257, maakunta: '02' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i172', name: 'Paltamo', onn:16, onnkvl:23.7037037037037, xk:734.94964593426, yk:374.912397820621, maakunta: '18' ,kuva: 'kuvat/hirvi.png' },
		{id:'i173', name: 'Parainen', onn:257, onnkvl:294.050343249428, xk:417.38299394133, yk:626.504918298182, maakunta: '02' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i174', name: 'Parikkala', onn:11, onnkvl:16.7427701674277, xk:835.192570163811, yk:545.453298105648, maakunta: '09' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i175', name: 'Parkano', onn:36, onnkvl:30.8747855917667, xk:496.024454583799, yk:517.644944178483, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i176', name: 'Pedersören kunta', onn:24, onnkvl:18.1818181818182, xk:506.084400774656, yk:426.600767382434, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i177', name: 'Pelkosenniemi', onn:2, onnkvl:6.0790273556231, xk:723.471084554605, yk:211.223295281785, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i178', name: 'Pello', onn:11, onnkvl:24.1228070175439, xk:578.332055706854, yk:234.50083333907, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i179', name: 'Perho', onn:2, onnkvl:4.93827160493827, xk:576.848435653182, yk:444.630366401856, maakunta: '16' ,kuva: 'kuvat/metsapeura.png' },
		{id:'i180', name: 'Pertunmaa', onn:10, onnkvl:9.06618313689937, xk:671.350050034509, yk:553.647054454963, maakunta: '10' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i181', name: 'Petäjävesi', onn:26, onnkvl:32.258064516129, xk:609.031622077888, yk:503.875488996315, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i182', name: 'Pieksämäki', onn:16, onnkvl:22.7920227920228, xk:707.409482557691, yk:504.64214416275, maakunta: '10' ,kuva: 'kuvat/hirvi.png' },
		{id:'i183', name: 'Pielavesi', onn:4, onnkvl:11.2044817927171, xk:685.929323221752, yk:443.318176374832, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i184', name: 'Pietarsaari', onn:9, onnkvl:2.78637770897833, xk:488.410555508922, yk:417.619030834852, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i185', name: 'Pihtipudas', onn:8, onnkvl:11.2994350282486, xk:637.291065865246, yk:436.587991005459, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i186', name: 'Pirkkala', onn:30, onnkvl:2.80741156653565, xk:524.639398920044, yk:555.3318724669, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i187', name: 'Polvijärvi', onn:11, onnkvl:26.2529832935561, xk:817.854974512962, yk:467.42446806783, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i188', name: 'Pomarkku', onn:24, onnkvl:26.6370699223085, xk:450.055608295097, yk:535.086559449799, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i189', name: 'Pori', onn:285, onnkvl:142.428785607196, xk:428.726694026121, yk:542.580441174628, maakunta: '04' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i190', name: 'Pornainen', onn:15, onnkvl:13.1810193321617, xk:613.056677154461, yk:614.529802415848, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i191', name: 'Porvoo', onn:158, onnkvl:43.4902284613267, xk:629.649037472078, yk:626.11479769945, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i192', name: 'Posio', onn:4, onnkvl:16.9491525423729, xk:748.36591511479, yk:270.129609878614, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i193', name: 'Pudasjärvi', onn:18, onnkvl:32.9067641681901, xk:712.924303530328, yk:312.19426015724, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i194', name: 'Pukkila', onn:3, onnkvl:5.8252427184466, xk:625.132319967152, yk:604.883841180326, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i195', name: 'Punkalaidun', onn:104, onnkvl:222.698072805139, xk:498.207360269827, yk:574.649340891774, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i196', name: 'Puolanka', onn:1, onnkvl:4.149377593361, xk:733.264826167486, yk:347.974136231997, maakunta: '18' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i197', name: 'Puumala', onn:2, onnkvl:5.78034682080925, xk:761.95846573918, yk:551.889256318512, maakunta: '10' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i198', name: 'Pyhtää', onn:13, onnkvl:8.68403473613894, xk:681.901223880441, yk:617.986212480667, maakunta: '08' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i199', name: 'Pyhäjoki', onn:6, onnkvl:6.67408231368187, xk:578.859385428807, yk:374.046315400871, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i200', name: 'Pyhäjärvi', onn:11, onnkvl:14.9659863945578, xk:647.214470494135, yk:424.599783522787, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i201', name: 'Pyhäntä', onn:11, onnkvl:22.4489795918367, xk:673.444423939855, yk:396.486368967435, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i202', name: 'Pyhäranta', onn:55, onnkvl:48.5008818342152, xk:408.157507148455, yk:577.640927746589, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i203', name: 'Pälkäne', onn:26, onnkvl:30.952380952381, xk:573.149198965765, yk:560.540032899905, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i204', name: 'Pöytyä', onn:290, onnkvl:280.193236714976, xk:464.95314764635, yk:591.360620753891, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i205', name: 'Raahe', onn:19, onnkvl:15.2733118971061, xk:593.102171157498, yk:364.228467436392, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i206', name: 'Raasepori', onn:448, onnkvl:356.972111553785, xk:502.058498981008, yk:643.515304194464, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i207', name: 'Raisio', onn:43, onnkvl:3.03629430871346, xk:441.241776246513, yk:609.790769227871, maakunta: '02' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i208', name: 'Rantasalmi', onn:8, onnkvl:13.4907251264755, xk:764.133773301948, yk:519.761363993545, maakunta: '10' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i209', name: 'Ranua', onn:19, onnkvl:55.5555555555556, xk:685.064805017234, yk:275.948093927904, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i210', name: 'Rauma', onn:189, onnkvl:91.7921321029626, xk:411.761452284665, yk:569.005325689528, maakunta: '04' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i211', name: 'Rautalampi', onn:3, onnkvl:6.5359477124183, xk:685.754242967384, yk:484.228703359651, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i212', name: 'Rautavaara', onn:2, onnkvl:8.58369098712446, xk:768.938552011672, yk:433.699472308606, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i213', name: 'Rautjärvi', onn:11, onnkvl:17.6565008025682, xk:814.64925349016, yk:558.890159446692, maakunta: '09' ,kuva: 'kuvat/hirvi.png' },
		{id:'i214', name: 'Reisjärvi', onn:1, onnkvl:2.32558139534884, xk:602.874419402179, yk:423.714948020645, maakunta: '17' ,kuva: 'kuvat/metsapeura.png' },
		{id:'i215', name: 'Riihimäki', onn:96, onnkvl:15.1062155782848, xk:579.12166875079, yk:600.650777520967, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i216', name: 'Ristijärvi', onn:3, onnkvl:8.26446280991736, xk:767.095696940955, yk:371.319228074407, maakunta: '18' ,kuva: 'kuvat/hirvi.png' },
		{id:'i217', name: 'Rovaniemi', onn:48, onnkvl:49.4845360824742, xk:662.446478132681, yk:244.255735384792, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i218', name: 'Ruokolahti', onn:8, onnkvl:12.8410914927769, xk:796.462165887431, yk:560.422558063713, maakunta: '09' ,kuva: 'kuvat/hirvi.png' },
		{id:'i219', name: 'Ruovesi', onn:29, onnkvl:38.7182910547397, xk:549.376227879653, yk:521.627771480657, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i220', name: 'Rusko', onn:18, onnkvl:12.1703853955375, xk:448.062991884261, yk:604.969740385202, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i221', name: 'Rääkkylä', onn:4, onnkvl:14.760147601476, xk:838.573533734192, yk:503.532335225726, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i222', name: 'Saarijärvi', onn:47, onnkvl:75.8064516129032, xk:606.624205642465, yk:478.555104261424, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i223', name: 'Salla', onn:5, onnkvl:23.1481481481481, xk:786.578055145402, yk:218.014321916613, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i224', name: 'Salo', onn:582, onnkvl:328.257191201354, xk:490.769912057558, yk:627.281123186998, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i225', name: 'Sastamala', onn:329, onnkvl:309.501411100659, xk:486.61146536775, yk:551.586807200157, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i226', name: 'Sauvo', onn:40, onnkvl:52.8401585204756, xk:466.917150278066, yk:622.356395201052, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i227', name: 'Savitaipale', onn:8, onnkvl:16.0642570281125, xk:732.231113731717, yk:571.06753088301, maakunta: '09' ,kuva: 'kuvat/hirvi.png' },
		{id:'i228', name: 'Savonlinna', onn:17, onnkvl:20.8588957055215, xk:798.730165042451, yk:522.198244596883, maakunta: '10' ,kuva: 'kuvat/hirvi.png' },
		{id:'i229', name: 'Savukoski', onn:2, onnkvl:13.6986301369863, xk:766.505624912238, yk:187.080388553913, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i230', name: 'Seinäjoki', onn:37, onnkvl:22.1556886227545, xk:498.251075970597, yk:474.302153157109, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i231', name: 'Sievi', onn:9, onnkvl:8.49056603773585, xk:586.179524547043, yk:410.233986120651, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i232', name: 'Siikainen', onn:17, onnkvl:63.4328358208955, xk:442.371112920981, yk:526.059699534899, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i233', name: 'Siikajoki', onn:9, onnkvl:11.1111111111111, xk:603.940486925723, yk:355.200905191878, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i234', name: 'Siikalatva', onn:20, onnkvl:28.0504908835905, xk:655.372813908633, yk:380.896462991415, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i235', name: 'Siilinjärvi', onn:11, onnkvl:3.25829383886256, xk:732.429519838011, yk:457.366746684781, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i236', name: 'Simo', onn:5, onnkvl:5.89622641509434, xk:618.55487193508, yk:292.41946574373, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i237', name: 'Sipoo', onn:132, onnkvl:35.8598207008965, xk:610.08488478476, yk:626.013057661057, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i238', name: 'Siuntio', onn:66, onnkvl:46.643109540636, xk:550.575407297443, yk:634.078501992323, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i239', name: 'Sodankylä', onn:12, onnkvl:19.2307692307692, xk:689.584685001156, yk:181.097472046571, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i240', name: 'Soini', onn:4, onnkvl:14.9812734082397, xk:564.262620553653, yk:470.459741653794, maakunta: '14' ,kuva: 'kuvat/hirvi.png' },
		{id:'i241', name: 'Somero', onn:108, onnkvl:142.292490118577, xk:515.947766009136, yk:605.037201111228, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i242', name: 'Sonkajärvi', onn:7, onnkvl:15.1187904967603, xk:727.06986323717, yk:416.699310368613, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i243', name: 'Sotkamo', onn:21, onnkvl:36.2694300518135, xk:772.69148099566, yk:399.676806483605, maakunta: '18' ,kuva: 'kuvat/hirvi.png' },
		//{id:'i244', name: 'Sulkava', onn:0, onnkvl:0, xk:773.490285036327, yk:538.386123956158, maakunta: '10' ,kuva: 'kuvat/villisika.png' },
		{id:'i245', name: 'Suomussalmi', onn:12, onnkvl:50.6329113924051, xk:812.309298888461, yk:336.593435767692, maakunta: '18' ,kuva: 'kuvat/hirvi.png' },
		{id:'i246', name: 'Suonenjoki', onn:11, onnkvl:9.01639344262295, xk:707.903122106541, yk:486.412346675717, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i247', name: 'Sysmä', onn:4, onnkvl:7.14285714285714, xk:635.052459380089, yk:552.436636925676, maakunta: '07' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i248', name: 'Säkylä', onn:116, onnkvl:100.607111882047, xk:458.925188512169, yk:573.731845409828, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i249', name: 'Taipalsaari', onn:5, onnkvl:7.36377025036819, xk:755.056463284749, yk:571.317018789527, maakunta: '09' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i250', name: 'Taivalkoski', onn:5, onnkvl:9.29368029739777, xk:765.618907874899, yk:306.572529797709, maakunta: '17' ,kuva: 'kuvat/hirvi.png' },
		{id:'i251', name: 'Taivassalo', onn:77, onnkvl:87.8995433789954, xk:411.723135131406, yk:603.602981398957, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i252', name: 'Tammela', onn:134, onnkvl:110.106820049302, xk:531.883334531948, yk:593.94288511696, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i253', name: 'Tampere', onn:113, onnkvl:15.0066401062417, xk:536.304148541012, yk:544.781706933129, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i254', name: 'Tervo', onn:4, onnkvl:12.2324159021407, xk:690.449292361851, yk:465.138419932743, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i255', name: 'Tervola', onn:20, onnkvl:31.6455696202532, xk:624.598346299658, yk:272.224988827258, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i256', name: 'Teuva', onn:7, onnkvl:13.9720558882236, xk:441.516929180242, yk:483.581940637572, maakunta: '14' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i257', name: 'Tohmajärvi', onn:6, onnkvl:10.4166666666667, xk:870.609059283948, yk:505.446072997692, maakunta: '12' ,kuva: 'kuvat/hirvi.png' },
		{id:'i258', name: 'Toholampi', onn:8, onnkvl:11.9940029985007, xk:570.082703540469, yk:416.50099124311, maakunta: '16' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i259', name: 'Toivakka', onn:8, onnkvl:8.49256900212314, xk:651.918580075724, yk:517.040564396963, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i260', name: 'Tornio', onn:19, onnkvl:15.5355682747343, xk:575.354840266486, yk:280.232855096034, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i261', name: 'Turku', onn:190, onnkvl:28.2696027376878, xk:445.358938033267, yk:612.119023894319, maakunta: '02' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i262', name: 'Tuusniemi', onn:3, onnkvl:5.94059405940594, xk:772.242424762951, yk:475.501659678233, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i263', name: 'Tuusula', onn:88, onnkvl:14.8824623710468, xk:595.017416156357, yk:616.098846600032, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i264', name: 'Tyrnävä', onn:4, onnkvl:4.13223140495868, xk:642.070730105002, yk:357.463491184209, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i265', name: 'Ulvila', onn:77, onnkvl:39.5480225988701, xk:448.099210334981, yk:550.105632805043, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i266', name: 'Urjala', onn:231, onnkvl:242.138364779874, xk:517.174808651487, yk:575.823365270678, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i267', name: 'Utajärvi', onn:14, onnkvl:25.2252252252252, xk:686.780604489259, yk:350.892237430636, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i268', name: 'Utsjoki', onn:4, onnkvl:18.4331797235023, xk:690.454283808775, yk:50, maakunta: '19' ,kuva: 'kuvat/hirvi.png' },
		{id:'i269', name: 'Uurainen', onn:10, onnkvl:11.2485939257593, xk:621.481033492352, yk:493.32875804905, maakunta: '13' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i270', name: 'Uusikaarlepyy', onn:33, onnkvl:31.5487571701721, xk:480.167940432407, yk:428.251013706676, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i271', name: 'Uusikaupunki', onn:170, onnkvl:153.70705244123, xk:402.63875441837, yk:585.638772951809, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i272', name: 'Vaala', onn:5, onnkvl:11.8203309692671, xk:696.19543677327, yk:370.905421627866, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i273', name: 'Vaasa', onn:46, onnkvl:16.5885322755139, xk:435.557003054623, yk:451.591394103308, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i274', name: 'Valkeakoski', onn:99, onnkvl:35.2313167259786, xk:546.417646726843, yk:568.34813308893, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i275', name: 'Vantaa', onn:153, onnkvl:6.45297342893294, xk:594.111540561232, yk:625.528617925228, maakunta: '01' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i276', name: 'Varkaus', onn:3, onnkvl:2.02565833896016, xk:759.792369987298, yk:504.931140276376, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i277', name: 'Vehmaa', onn:57, onnkvl:65.2173913043478, xk:418.316490982674, yk:598.580142643737, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i278', name: 'Vesanto', onn:2, onnkvl:7.04225352112676, xk:667.678397596616, yk:467.976989866374, maakunta: '11' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i279', name: 'Vesilahti', onn:60, onnkvl:107.719928186715, xk:515.118017165431, yk:563.318254489183, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i280', name: 'Veteli', onn:15, onnkvl:20.5761316872428, xk:552.047733145107, yk:434.392198070589, maakunta: '16' ,kuva: 'kuvat/metsapeura.png' },
		{id:'i281', name: 'Vieremä', onn:7, onnkvl:18.2291666666667, xk:700.371489806323, yk:413.168752304135, maakunta: '11' ,kuva: 'kuvat/hirvi.png' },
		{id:'i282', name: 'Vihti', onn:167, onnkvl:57.0160464322294, xk:562.017368100065, yk:618.418902915095, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i283', name: 'Viitasaari', onn:21, onnkvl:24.3055555555556, xk:644.562491409361, yk:456.956636704641, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i284', name: 'Vimpeli', onn:3, onnkvl:5.00834724540902, xk:549.692414790759, yk:448.96867183196, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i285', name: 'Virolahti', onn:7, onnkvl:8.70646766169154, xk:732.777940946316, yk:610.982527231913, maakunta: '08' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i286', name: 'Virrat', onn:33, onnkvl:50.2283105022831, xk:536.188607095475, yk:503.63320315589, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i287', name: 'Vöyri', onn:36, onnkvl:41.3793103448276, xk:462.292016345557, yk:437.92004167305, maakunta: '15' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i288', name: 'Ylitornio', onn:14, onnkvl:32.258064516129, xk:577.136753140836, yk:249.428406417903, maakunta: '19' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i289', name: 'Ylivieska', onn:10, onnkvl:6.4143681847338, xk:589.396071894941, yk:396.723226850675, maakunta: '17' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i290', name: 'Ylöjärvi', onn:56, onnkvl:32.3699421965318, xk:520.512026704999, yk:530.801647356836, maakunta: '06' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i291', name: 'Ypäjä', onn:21, onnkvl:25.4854368932039, xk:501.765633368613, yk:591.696773640371, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png' },
		{id:'i292', name: 'Ähtäri', onn:18, onnkvl:29.1734197730956, xk:561.070401020831, yk:485.444435715287, maakunta: '14' ,kuva: 'kuvat/metsakauris.png' },
		{id:'i293', name: 'Äänekoski', onn:38, onnkvl:19.5372750642674, xk:645.612678982707, yk:478.849419871903, maakunta: '13' ,kuva: 'kuvat/metsakauris.png' }
							
	];


//määritellään tooltippi
var dataFilter = data.map(function(d){return {kuva: d.kuva, name: d.name, xk: d.xk, yk: d.yk,value: d.onn,onn: d.onn,onnkvl: d.onnkvl} });

//määritellään kuvio
	var svg = d3.select("#chart")
	.append("svg")
	.attr("height", height)
	.attr("width", width)
	.append("g")
	.attr("transform", "translate(0,0)")
	
	d3.select('#tooltip')
	.append('div')

	.attr('style', 'position: absolute; opacity: 0;');


	var defs = svg.append("defs");
	defs.append("pattern")
	.attr("id", "elain")
	.attr("height", "100%")
	.attr("width", "100%")
	.attr("patternContentUnits", "objectBoundingBox")
	.append ("image")
	.attr("height",1)
	.attr("width",1)
	.attr("preserveAspectRatio", "none")
	.attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
	.attr("xlink:href","IMG_20210707_1458482.jpg")

//skaalataan pallojen koko
	var radiusScale = d3.scaleSqrt().domain([1,500]).range([3,90])	
	
	//var forceY = d3.forceY(height/2).strength(0.05)
	
	// if (d.maakunta=== '01') { return 300
	//} else if (d.maakunta=== '02') { return 350
	//} else if (d.maakunta=== '04') { return 400
	//} else if (d.maakunta=== '05') { return 450
	//} else if (d.maakunta=== '06') { return 500
	//} else if (d.maakunta=== '07') { return 550
	//} else if (d.maakunta=== '08') { return 600
	//} else if (d.maakunta=== '09') { return 660
	//} else if (d.maakunta=== '10') { return 700
	//} else if (d.maakunta=== '11') { return 750
	//} else if (d.maakunta=== '12') { return 800
	//} else if (d.maakunta=== '13') { return 850
	//} else if (d.maakunta=== '14') { return 900
	//} else if (d.maakunta=== '15') { return 950
	//} else if (d.maakunta=== '16') { return 1000
	//} else if (d.maakunta=== '17') { return 1050
	//} else if (d.maakunta=== '18') { return 1100
	//} else  return 1150
	
	
	var forceX = d3.forceX(function(d) {
		return d.xk
	}).strength(1.0)
	var forceY = d3.forceY(function(d) {
		return d.yk
	}).strength(1.0)
	
	
		
	//}).strength(0.05)

//	var forceX = d3.forceX(function(d) {
//	  return d.xk
//	} else if (d.maakunta=== '02') { return 700
//	} else if (d.maakunta=== '04') { return 500
//	} else if (d.maakunta=== '05') { return 550
//	} else if (d.maakunta=== '06') { return 500
//	} else if (d.maakunta=== '07') { return 525
//	} else if (d.maakunta=== '08') { return 500
//	} else if (d.maakunta=== '09') { return 500
//	} else if (d.maakunta=== '10') { return 450
//	} else if (d.maakunta=== '11') { return 400
//	} else if (d.maakunta=== '12') { return 350
//	} else if (d.maakunta=== '13') { return 400
//	} else if (d.maakunta=== '14') { return 400
//	} else if (d.maakunta=== '15') { return 300
//	} else if (d.maakunta=== '16') { return 250
//	} else if (d.maakunta=== '17') { return 200
//	} else if (d.maakunta=== '18') { return 150
	
	
	
		
//	}).strength(0.05)


	var simulation = d3.forceSimulation()
	//.force("x", d3.forceX(width/2).strength(0.05))

	.force("x", forceX)
	.force("y", forceY)

	//.force("y", d3.forceY(width/2).strength(0.05))
	.force("collide", d3.forceCollide(function(d){
		return radiusScale(d.value)+1;
	}))

	var tooltip = d3.select("#chart")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "green")
      .style("border-radius", "10px")
      .style("padding", "10px")
      .style("color", "white")


	var showTooltip = function(d) {
		tooltip
		  .transition()
		  .duration(200)
		tooltip
		  .style("opacity", 1)
		  .html(d.name + "<br> Onnettomuuksia yhteensä:" + d.onn + "<br> Onnettomuuksia suhteessa liikennemäärään:" + d.onnkvl )
		  .style("left", (d3.mouse(this)[0]+30) + "px")
		  .style("top", (d3.mouse(this)[1]+30) + "px")
	  }
	  var moveTooltip = function(d) {
		tooltip
		  .style("left", (d3.mouse(this)[0]+30) + "px")
		  .style("top", (d3.mouse(this)[1]+30) + "px")
	  }
	  var hideTooltip = function(d) {
		tooltip
		  .transition()
		  .duration(200)
		  .style("opacity", 0)
	  }


	//laitetaan data "jonoon"
function testi () {
d3.queue()
.await(ready)
function ready (error, datapoints) {
		defs.selectAll(".artist-pattern")
		.data(dataFilter)
		.enter().append("pattern")
		.attr("class", "artist-pattern")
		.attr("id", function(d) {
			return d.name
		})
		.attr("height", "100%")
		.attr("width", "100%")
		.attr("patternContentUnits", "objectBoundingBox")
		.append ("image")
		.attr("height",1)
		.attr("width",1)
		.attr("preserveAspectRatio", "none")
		.attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
		.attr("xlink:href",function(d) {
			return d.kuva
		})

		
		var circles = svg.selectAll(".artist")
		.data(dataFilter)
		.enter().append("circle")
		.attr("class", "artist")
		.attr("r", function(d) {
			return radiusScale(d.value)
		})
		.attr("fill", "lightblue")
		.on("mouseover.teksti", showTooltip )
		.on("mousemove.teksti", moveTooltip )
		.on("mouseleave.teksti", hideTooltip )
		.on('mouseover', function(d) {
			d3.select('#tooltip').style('opacity', 1).text(d)
		 })
		 // on('mouseout', function() {
		//	d3.select('#tooltip').style('opacity', 0)
		//  })
		.on('mouseover', function(d, i) {
			console.log("mouseover on", this)
			console.log("mouseover on", d.value)

      // make the mouseover'd element
      // bigger and red



	  d3.select(".infobox .title").text(d['name']);
	  d3.select(".infobox .published").text(d['value']);
	  d3.select(".infobox").style('visibility', 'visible');
      d3.select(this)
		//.data(data)
        .transition()
        .duration(100)
        .attr('r', function(d) {
			return radiusScale(d.value)+20
		})
        .attr('fill', function (d) {
		return "url(#"+ d.name +")"
			//.attr('fill', function (d) {
				//return "url(#elain)"
		})


    })

    .on('mouseout', function(d, i) {
      console.log("mouseout", this);
      // return the mouseover'd element
      // to being smaller and black

      d3.select(this)
        .transition()
        .duration(100)
        .attr('r', function(d) {
			return radiusScale(d.value)
		})
		//poista kommentit, jos halutaan palauttaa sininenn pallura
        //.attr('fill', 'lightblue');
    })

	  
		simulation.nodes(dataFilter)

		.on('tick', ticked)
		function ticked() {
			circles
			.attr("cx", function(d) {
				return d.x
			})
			.attr("cy", function(d) {
				return d.y
			})	


		}




}}
//testi()



function vaihdaluku(color){
	


	
	dataFilter = data.map(function(d){return {kuva: d.kuva, name: d.name, xk: d.xk, yk: d.yk, value:d[color],onn: d.onn,onnkvl: d.onnkvl}  });

	testi() 

 }

 
//})()



