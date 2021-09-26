## Tilastokeskuksen Visualisointihackathon 15.9.2021 - 30.9.2021

Tämä on joukkue Visukinttujen kilpailytyö Tilastokeskuksen Visualisointihackathonia varten. TIlastokeskuksen Visualisointihackathonin tehtävänä oli tehdä visualisointi pohjautuen TIlastokeskuksen kokeellisiin tilastoihin.

Joukkueemme visualisoi kokeellisista tilastoista Riistaonnettomuustilaston luvut hiukan normaalista poiketen karttakuvaa mukailevan pallokuvion avulla. Kilpailutyö on alla ja sen alle on koottu vastaukset tuomariston esittämiin kysymyksiin ja myös käytetty koodi aineistoineen. Visualisointityön toteutuksessa on käytetty D3js-javascript-kirjastoa ja Pythonin matplotlib-kirjastoa. Kuvioissa on käytetty Tilastokeskuksen värejä. 

### Selvitä alta mihin eläimeen törmätään eniten kunnittain?

Kuvion tiedot perustuvat [riistaonnettomuustilaston](https://www.stat.fi/tup/kokeelliset-tilastot/riistaonnettomuudet/2020/index.html) vuoden 2020 kunnittaisiin tietoihin, jotka on poimittu tilaston tietokantataulukoista.

Tilasto sisältää tietoja valkohäntäpeurojen, metsäkauriiden, hirvien, metsäpeurojen, kuusipeurojen ja villisikojen kanssa ajetuista kolareista. Katso alla olevasta kuviosta miten eniten kolareita aiheuttaneet eläimet jakautuvat kunnittain. Alla on mallikuvat eläimistä tunnistamisen helpottamiseksi. 


 ![Osalliset eläinlajit](kokoelma.jpg)

Vie hiiri pallojen päälle tai kosketa niitä mobiilissa sormella ja eläimen kuva paljastuu. Saat samalla lisätietoa kunnassa vuoden 2020 aikana tapahtuneista onnettomuuksista ja niitä aiheuttaneista eläimistä.

 <meta charset="utf-8">


 <style>


div.tooltip {	
    position: absolute;			
    text-align: left;			
    width: 380px;					
    height: 389px;					
    padding: 2px;				
    font: 14px sans-serif;		
    background: black;	
    border: 2px;		
    border-radius: 8px;			
    pointer-events: none;			
}
</style>




 <!-- Add 2 buttons-->

<script src="https://d3js.org/d3.v4.min.js">
</script>



<div id="chart"> 





<script>

//(function test () {
	var width = 900,
	height=900;
//data
	var data = [
{id:'i1', name: 'Akaa', onn:160, onnkvl:66.3625051845707, xk:303.238349769901, yk:571.846271456827, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Akaa.png' },
{id:'i2', name: 'Alajärvi', onn:22, onnkvl:30.0957592339261, xk:317.3470602544, yk:462.626844312414, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Alajärvi.png' },
{id:'i3', name: 'Alavieska', onn:6, onnkvl:8.67052023121387, xk:332.981210522673, yk:388.5864227523, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Alavieska.png' },
{id:'i4', name: 'Alavus', onn:20, onnkvl:22.4466891133558, xk:302.167610931134, yk:483.55273900845, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Alavus.png' },
{id:'i5', name: 'Asikkala', onn:56, onnkvl:50.8628519527702, xk:367.440754543461, yk:570.827617827684, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Asikkala.png' },
{id:'i6', name: 'Askola', onn:9, onnkvl:11.0429447852761, xk:369.323640369133, yk:611.299912530083, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Askola.png' },
{id:'i7', name: 'Aura', onn:39, onnkvl:14.2961876832845, xk:258.766760445058, yk:602.22488657623, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Aura.png' },
//{id:'i8', name: 'Enonkoski', onn:0, onnkvl:0, xk:479.439627618523, yk:513.996600530962, maakunta: '10' ,kuva: 'kuvat/villisika.png' ,kaavio: 'kaaviot/Enonkoski.png' },
{id:'i9', name: 'Enontekiö', onn:1, onnkvl:2.31481481481481, xk:301.481668402982, yk:114.947176323877, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Enontekiö.png' },
{id:'i10', name: 'Espoo', onn:218, onnkvl:12.342184226915, xk:333.731770063556, yk:630.24305531201, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Espoo.png' },
{id:'i11', name: 'Eura', onn:207, onnkvl:161.71875, xk:244.060216334976, yk:572.212422826438, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Eura.png' },
{id:'i12', name: 'Eurajoki', onn:150, onnkvl:82.2819528250137, xk:228.675884428329, yk:558.663992024852, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Eurajoki.png' },
{id:'i13', name: 'Evijärvi', onn:10, onnkvl:14.0252454417952, xk:302.58383731489, yk:436.824302723446, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Evijärvi.png' },
{id:'i14', name: 'Forssa', onn:60, onnkvl:38.4122919334187, xk:298.621185692857, yk:587.170771085459, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Forssa.png' },
{id:'i15', name: 'Haapajärvi', onn:6, onnkvl:7.27272727272727, xk:362.179963924433, yk:413.946499535387, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Haapajärvi.png' },
{id:'i16', name: 'Haapavesi', onn:5, onnkvl:9.3984962406015, xk:364.470702150471, yk:393.048213287343, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Haapavesi.png' },
//{id:'i17', name: 'Hailuoto', onn:0, onnkvl:0, xk:350.036768855332, yk:338.015942844466, maakunta: '17' ,kuva: 'kuvat/villisika.png' ,kaavio: 'kaaviot/Hailuoto.png' },
{id:'i18', name: 'Halsua', onn:3, onnkvl:8.31024930747922, xk:329.165974389664, yk:433.004677182753, maakunta: '16' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Halsua.png' },
{id:'i19', name: 'Hamina', onn:16, onnkvl:9.90712074303406, xk:424.225236446083, yk:608.097948788292, maakunta: '08' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hamina.png' },
{id:'i20', name: 'Hankasalmi', onn:12, onnkvl:12.1457489878543, xk:399.023379884124, yk:500.235366417823, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hankasalmi.png' },
{id:'i21', name: 'Hanko', onn:42, onnkvl:28.4552845528455, xk:275.010094664591, yk:650, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Hanko.png' },
{id:'i22', name: 'Harjavalta', onn:17, onnkvl:8.62068965517241, xk:248.476140175245, yk:559.287714899431, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Harjavalta.png' },
{id:'i23', name: 'Hartola', onn:11, onnkvl:9.55690703735882, xk:384.101126023221, yk:547.435295789788, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hartola.png' },
{id:'i24', name: 'Hattula', onn:74, onnkvl:30.8848080133556, xk:320.254401161779, yk:579.376412281938, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Hattula.png' },
{id:'i25', name: 'Hausjärvi', onn:63, onnkvl:63.2530120481928, xk:346.085696676996, yk:595.33390995597, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Hausjärvi.png' },
{id:'i26', name: 'Heinola', onn:44, onnkvl:15.2883947185546, xk:386.281330748139, yk:569.13800704065, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Heinola.png' },
{id:'i27', name: 'Heinävesi', onn:6, onnkvl:11.9284294234592, xk:473.476670454342, yk:496.170040108483, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Heinävesi.png' },
{id:'i28', name: 'Helsinki', onn:59, onnkvl:1.54949181920845, xk:347.154546674285, yk:631.91681374863, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Helsinki.png' },
{id:'i29', name: 'Hirvensalmi', onn:11, onnkvl:15.5148095909732, xk:406.327484844379, yk:541.40935762297, maakunta: '10' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hirvensalmi.png' },
{id:'i30', name: 'Hollola', onn:118, onnkvl:71.7761557177616, xk:361.529605176579, yk:583.673965214606, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hollola.png' },
{id:'i32', name: 'Huittinen', onn:176, onnkvl:144.499178981938, xk:269.044431064543, yk:572.183504560864, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Huittinen.png' },
{id:'i33', name: 'Humppila', onn:60, onnkvl:39.4218134034166, xk:288.485153804379, yk:584.160418292426, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Humppila.png' },
{id:'i34', name: 'Hyrynsalmi', onn:8, onnkvl:28.673835125448, xk:469.903656952459, yk:362.722665130318, maakunta: '18' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hyrynsalmi.png' },
{id:'i35', name: 'Hyvinkää', onn:137, onnkvl:30.5803571428571, xk:339.142986745247, yk:606.930319956659, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Hyvinkää.png' },
{id:'i36', name: 'Hämeenkyrö', onn:68, onnkvl:41.743400859423, xk:285.393301042076, yk:542.605920942601, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Hämeenkyrö.png' },
{id:'i37', name: 'Hämeenlinna', onn:349, onnkvl:194.104560622914, xk:329.439929100528, yk:580.163259161906, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Hämeenlinna.png' },
{id:'i38', name: 'Ii', onn:7, onnkvl:5.81395348837209, xk:369.57161108358, yk:310.403049123104, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ii.png' },
{id:'i39', name: 'Iisalmi', onn:14, onnkvl:13.7254901960784, xk:423.351731943367, yk:430.715158138486, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Iisalmi.png' },
{id:'i40', name: 'Iitti', onn:17, onnkvl:17.9704016913319, xk:389.842301051902, yk:588.066473879251, maakunta: '07' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Iitti.png' },
{id:'i41', name: 'Ikaalinen', onn:36, onnkvl:33.4261838440111, xk:282.789180007547, yk:530.403421276897, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ikaalinen.png' },
{id:'i42', name: 'Ilmajoki', onn:34, onnkvl:22.3097112860892, xk:269.995095292087, yk:475.476995090868, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ilmajoki.png' },
{id:'i43', name: 'Ilomantsi', onn:3, onnkvl:12.8205128205128, xk:550, yk:473.168229509572, maakunta: '12' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ilomantsi.png' },
{id:'i44', name: 'Imatra', onn:14, onnkvl:4.40528634361234, xk:481.064017539138, yk:572.184627332326, maakunta: '09' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Imatra.png' },
{id:'i45', name: 'Inari', onn:9, onnkvl:19.1897654584222, xk:416.858940873398, yk:101.439809601301, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Inari.png' },
{id:'i46', name: 'Inkoo', onn:127, onnkvl:80.6861499364676, xk:307.784617935558, yk:641.187899804601, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Inkoo.png' },
{id:'i47', name: 'Isojoki', onn:22, onnkvl:52.6315789473684, xk:244.327959354659, yk:508.899285605549, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Isojoki.png' },
{id:'i48', name: 'Isokyrö', onn:8, onnkvl:11.4777618364419, xk:265.870353870427, yk:459.874216572977, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Isokyrö.png' },
{id:'i49', name: 'Janakkala', onn:209, onnkvl:70.7275803722504, xk:335.669063255857, yk:591.073863388494, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Janakkala.png' },
{id:'i50', name: 'Joensuu', onn:28, onnkvl:26.046511627907, xk:530.757087976521, yk:485.244350892136, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Joensuu.png' },
{id:'i51', name: 'Jokioinen', onn:51, onnkvl:34.3434343434343, xk:291.755776113134, yk:591.449755256019, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Jokioinen.png' },
{id:'i52', name: 'Joroinen', onn:13, onnkvl:10.7615894039735, xk:443.493759892955, yk:511.593397365012, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Joroinen.png' },
{id:'i53', name: 'Joutsa', onn:7, onnkvl:6.38686131386861, xk:389.006464515659, yk:532.709967850649, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Joutsa.png' },
{id:'i54', name: 'Juuka', onn:4, onnkvl:7.8740157480315, xk:490.120631957307, yk:449.257838272439, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Juuka.png' },
{id:'i55', name: 'Juupajoki', onn:10, onnkvl:13.4228187919463, xk:330.176367516508, yk:531.551673549928, maakunta: '06' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Juupajoki.png' },
{id:'i56', name: 'Juva', onn:11, onnkvl:11.2130479102956, xk:446.180671149577, yk:533.37503912662, maakunta: '10' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Juva.png' },
{id:'i57', name: 'Jyväskylä', onn:74, onnkvl:20.981003685852, xk:371.42838335979, yk:513.476586385586, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Jyväskylä.png' },
{id:'i58', name: 'Jämijärvi', onn:7, onnkvl:11.7056856187291, xk:270.172577393986, yk:528.362186663753, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Jämijärvi.png' },
{id:'i59', name: 'Jämsä', onn:36, onnkvl:37.4609781477627, xk:350.42535413771, yk:527.700631083845, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Jämsä.png' },
{id:'i60', name: 'Järvenpää', onn:9, onnkvl:0.838144905941516, xk:349.537393806062, yk:614.168600724161, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Järvenpää.png' },
{id:'i61', name: 'Kaarina', onn:88, onnkvl:12.6056438905601, xk:254.143184795721, yk:616.24029856969, maakunta: '02' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kaarina.png' },
{id:'i62', name: 'Kaavi', onn:3, onnkvl:9.06344410876133, xk:475.203681170371, yk:465.049653194518, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kaavi.png' },
{id:'i63', name: 'Kajaani', onn:16, onnkvl:14.8423005565863, xk:428.702296659166, yk:392.059526702769, maakunta: '18' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kajaani.png' },
{id:'i64', name: 'Kalajoki', onn:11, onnkvl:9.9728014505893, xk:316.299048269838, yk:387.645591511647, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kalajoki.png' },
{id:'i65', name: 'Kangasala', onn:84, onnkvl:36.2850971922246, xk:330.242194323422, yk:552.947239859856, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kangasala.png' },
{id:'i66', name: 'Kangasniemi', onn:7, onnkvl:14.4329896907216, xk:404.328470259467, yk:521.316623070686, maakunta: '10' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kangasniemi.png' },
{id:'i67', name: 'Kankaanpää', onn:74, onnkvl:90.2439024390244, xk:258.370954179557, yk:524.55177990183, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Kankaanpää.png' },
{id:'i68', name: 'Kannonkoski', onn:7, onnkvl:19.3905817174515, xk:363.836580826132, yk:464.615528061075, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kannonkoski.png' },
{id:'i69', name: 'Kannus', onn:3, onnkvl:3.37837837837838, xk:320.697958247121, yk:403.57530216994, maakunta: '16' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kannus.png' },
{id:'i70', name: 'Karijoki', onn:6, onnkvl:16.260162601626, xk:240.564152311855, yk:498.297755051156, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Karijoki.png' },
{id:'i71', name: 'Karkkila', onn:97, onnkvl:58.2932692307692, xk:319.806374089356, yk:608.794020254683, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Karkkila.png' },
{id:'i72', name: 'Karstula', onn:14, onnkvl:28.6298568507157, xk:344.079261223069, yk:467.502258833229, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Karstula.png' },
{id:'i73', name: 'Karvia', onn:9, onnkvl:21.0280373831776, xk:267.359916534393, yk:509.521631119883, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Karvia.png' },
{id:'i74', name: 'Kauhajoki', onn:49, onnkvl:62.3409669211196, xk:260.4208636458, yk:499.96156475929, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kauhajoki.png' },
{id:'i75', name: 'Kauhava', onn:20, onnkvl:22.5479143179256, xk:286.278253492343, yk:446.251300515219, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kauhava.png' },
{id:'i76', name: 'Kauniainen', onn:6, onnkvl:0.216974650128377, xk:334.838394418919, yk:630.764322529798, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kauniainen.png' },
{id:'i77', name: 'Kaustinen', onn:9, onnkvl:6.66173205033309, xk:311.935271501533, yk:424.947741992503, maakunta: '16' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kaustinen.png' },
{id:'i78', name: 'Keitele', onn:4, onnkvl:12.6984126984127, xk:395.187924377461, yk:452.293238617656, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Keitele.png' },
{id:'i79', name: 'Kemi', onn:15, onnkvl:3.11397135146357, xk:344.641727650883, yk:296.428034928296, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kemi.png' },
{id:'i80', name: 'Kemijärvi', onn:8, onnkvl:17.3913043478261, xk:433.318577414958, yk:239.825506773483, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kemijärvi.png' },
{id:'i81', name: 'Keminmaa', onn:12, onnkvl:8.13008130081301, xk:352.091271670827, yk:287.58640562923, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Keminmaa.png' },
{id:'i82', name: 'Kemiönsaari', onn:68, onnkvl:92.6430517711172, xk:255.689452233281, yk:639.36255265912, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Kemiönsaari.png' },
{id:'i83', name: 'Kempele', onn:7, onnkvl:0.99304865938431, xk:372.916542171747, yk:346.341723202241, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kempele.png' },
{id:'i84', name: 'Kerava', onn:31, onnkvl:1.79066543438078, xk:349.524323394593, yk:620.399378222389, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kerava.png' },
{id:'i85', name: 'Keuruu', onn:25, onnkvl:35.4107648725212, xk:335.789302283485, yk:503.586729492136, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Keuruu.png' },
{id:'i86', name: 'Kihniö', onn:5, onnkvl:11.6009280742459, xk:290.071519884907, yk:508.291875622669, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kihniö.png' },
{id:'i87', name: 'Kinnula', onn:4, onnkvl:10.8695652173913, xk:352.905919227272, yk:441.46465442399, maakunta: '13' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kinnula.png' },
{id:'i88', name: 'Kirkkonummi', onn:251, onnkvl:55.0438596491228, xk:324.772033501916, yk:638.233807841442, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Kirkkonummi.png' },
{id:'i89', name: 'Kitee', onn:15, onnkvl:25.6410256410256, xk:519.0767520461, yk:519.875608873952, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kitee.png' },
{id:'i90', name: 'Kittilä', onn:7, onnkvl:12.6353790613718, xk:359.998867378504, yk:164.669697456527, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kittilä.png' },
{id:'i91', name: 'Kiuruvesi', onn:6, onnkvl:18.2926829268293, xk:404.177683338624, yk:422.890223975377, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kiuruvesi.png' },
{id:'i92', name: 'Kivijärvi', onn:7, onnkvl:23.1023102310231, xk:352.950943324818, yk:451.796731491708, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kivijärvi.png' },
{id:'i93', name: 'Kokemäki', onn:32, onnkvl:38.1406436233611, xk:255.464318184996, yk:560.018532559359, maakunta: '04' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kokemäki.png' },
{id:'i94', name: 'Kokkola', onn:41, onnkvl:25.625, xk:302.630890639511, yk:406.591064847047, maakunta: '16' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kokkola.png' },
{id:'i95', name: 'Kolari', onn:8, onnkvl:15.4142581888247, xk:330.236340385591, yk:200.466992568253, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kolari.png' },
{id:'i96', name: 'Konnevesi', onn:6, onnkvl:10.3986135181976, xk:391.439646831282, yk:482.633356530289, maakunta: '13' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Konnevesi.png' },
{id:'i97', name: 'Kontiolahti', onn:17, onnkvl:11.509817197021, xk:510.654003256506, yk:472.360804809415, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kontiolahti.png' },
{id:'i98', name: 'Korsnäs', onn:15, onnkvl:25.3807106598985, xk:223.66477579467, yk:467.985679816686, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Korsnäs.png' },
{id:'i99', name: 'Koski Tl', onn:77, onnkvl:88.2016036655212, xk:279.490639540404, yk:601.99800913753, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Koski Tl.png' },
{id:'i100', name: 'Kotka', onn:14, onnkvl:2.74941084053417, xk:417.269968281696, yk:618.431876266764, maakunta: '08' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kotka.png' },
{id:'i101', name: 'Kouvola', onn:112, onnkvl:80.6335493160547, xk:406.362485079314, yk:590.655125807054, maakunta: '08' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kouvola.png' },
{id:'i102', name: 'Kristiinankaupunki', onn:39, onnkvl:51.5191545574637, xk:228.407996199887, yk:505.245077799532, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kristiinankaupunki.png' },
{id:'i103', name: 'Kruunupyy', onn:37, onnkvl:38.2626680455015, xk:300.501410033811, yk:420.475426489389, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kruunupyy.png' },
{id:'i104', name: 'Kuhmo', onn:15, onnkvl:66.6666666666667, xk:503.421273076535, yk:385.425556243878, maakunta: '18' ,kuva: 'kuvat/metsapeura.png?raw=true' ,kaavio: 'kaaviot/Kuhmo.png' },
{id:'i105', name: 'Kuhmoinen', onn:22, onnkvl:39.3559928443649, xk:354.502963207769, yk:543.754100914311, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Kuhmoinen.png' },
{id:'i106', name: 'Kuopio', onn:54, onnkvl:43.9739413680782, xk:444.256428512294, yk:459.238745994135, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kuopio.png' },
{id:'i107', name: 'Kuortane', onn:13, onnkvl:13, xk:302.585716995391, yk:474.217222935401, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kuortane.png' },
{id:'i108', name: 'Kurikka', onn:53, onnkvl:51.7578125, xk:260.207209140221, yk:483.517591152796, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kurikka.png' },
{id:'i109', name: 'Kustavi', onn:44, onnkvl:117.333333333333, xk:215.392405474394, yk:603.8726874715, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Kustavi.png' },
{id:'i110', name: 'Kuusamo', onn:5, onnkvl:10.4384133611691, xk:481.363913636606, yk:282.650344288579, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kuusamo.png' },
{id:'i111', name: 'Kyyjärvi', onn:11, onnkvl:18.9003436426117, xk:335.935113371675, yk:458.663590792884, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kyyjärvi.png' },
{id:'i112', name: 'Kärkölä', onn:42, onnkvl:43.0769230769231, xk:356.060328452469, yk:592.217888320045, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Kärkölä.png' },
{id:'i113', name: 'Kärsämäki', onn:15, onnkvl:18.3823529411765, xk:379.236449911854, yk:402.913124969479, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Kärsämäki.png' },
{id:'i114', name: 'Lahti', onn:97, onnkvl:20.0911350455675, xk:377.469137749272, yk:584.420662664455, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lahti.png' },
{id:'i115', name: 'Laihia', onn:5, onnkvl:5.82750582750583, xk:253.090807173288, yk:464.104895813141, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Laihia.png' },
{id:'i116', name: 'Laitila', onn:123, onnkvl:91.7910447761194, xk:232.375377639649, yk:583.220619143312, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Laitila.png' },
{id:'i117', name: 'Lapinjärvi', onn:7, onnkvl:6.62878787878788, xk:386.828841374413, yk:607.207260356846, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Lapinjärvi.png' },
{id:'i118', name: 'Lapinlahti', onn:8, onnkvl:10.8991825613079, xk:436.667470437175, yk:439.836182019334, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lapinlahti.png' },
{id:'i119', name: 'Lappajärvi', onn:7, onnkvl:9.37081659973226, xk:305.818851405748, yk:446.607541382708, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lappajärvi.png' },
{id:'i120', name: 'Lappeenranta', onn:31, onnkvl:19.2188468691878, xk:458.760769445745, yk:585.562221378539, maakunta: '09' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Lappeenranta.png' },
{id:'i121', name: 'Lapua', onn:6, onnkvl:3.96563119629874, xk:292.24060325305, yk:462.684508822087, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lapua.png' },
{id:'i122', name: 'Laukaa', onn:42, onnkvl:18.850987432675, xk:383.800395640219, yk:499.980334766061, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Laukaa.png' },
{id:'i123', name: 'Lemi', onn:14, onnkvl:14.9892933618844, xk:445.033702858311, yk:579.158171414584, maakunta: '09' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lemi.png' },
{id:'i124', name: 'Lempäälä', onn:54, onnkvl:7.73085182534001, xk:304.210055912815, yk:560.2855889024, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lempäälä.png' },
{id:'i125', name: 'Leppävirta', onn:27, onnkvl:20.4545454545455, xk:450.264391612853, yk:491.723297550323, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Leppävirta.png' },
{id:'i126', name: 'Lestijärvi', onn:7, onnkvl:15.5210643015521, xk:342.158880088493, yk:431.836392005086, maakunta: '16' ,kuva: 'kuvat/metsapeura.png?raw=true' ,kaavio: 'kaaviot/Lestijärvi.png' },
{id:'i127', name: 'Lieksa', onn:6, onnkvl:21.1267605633803, xk:521.683175896316, yk:440.290240147345, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Lieksa.png' },
{id:'i128', name: 'Lieto', onn:98, onnkvl:41.5078356628547, xk:260.468609740948, yk:605.696909489939, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Lieto.png' },
{id:'i129', name: 'Liminka', onn:12, onnkvl:4.55753892897835, xk:374.459722704037, yk:357.868173678516, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Liminka.png' },
{id:'i130', name: 'Liperi', onn:12, onnkvl:9.47119179163378, xk:494.611328621296, yk:488.153287675066, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Liperi.png' },
{id:'i131', name: 'Lohja', onn:319, onnkvl:136.034115138593, xk:306.339511086918, yk:620.622656065114, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Lohja.png' },
{id:'i132', name: 'Loimaa', onn:250, onnkvl:229.147571035747, xk:273.606477253957, yk:586.117455952001, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Loimaa.png' },
{id:'i133', name: 'Loppi', onn:224, onnkvl:200, xk:325.13617757604, yk:601.699482560723, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Loppi.png' },
{id:'i134', name: 'Loviisa', onn:49, onnkvl:27.4509803921569, xk:388.263242070702, yk:617.307932158061, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Loviisa.png' },
{id:'i135', name: 'Luhanka', onn:4, onnkvl:11.2359550561798, xk:372.916142871897, yk:535.322253251839, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Luhanka.png' },
{id:'i136', name: 'Lumijoki', onn:5, onnkvl:4.79386385426654, xk:359.686511305664, yk:348.274154948544, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Lumijoki.png' },
{id:'i137', name: 'Luoto', onn:10, onnkvl:4.8661800486618, xk:279.024153426958, yk:410.500211043374, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Luoto.png' },
{id:'i138', name: 'Luumäki', onn:19, onnkvl:15.7938487115544, xk:434.505551670593, yk:587.858878731038, maakunta: '09' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Luumäki.png' },
{id:'i139', name: 'Maalahti', onn:26, onnkvl:25.844930417495, xk:227.66456181105, yk:459.094511521447, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Maalahti.png' },
{id:'i140', name: 'Marttila', onn:59, onnkvl:52.1201413427562, xk:271.571226231297, yk:603.411794794208, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Marttila.png' },
{id:'i141', name: 'Masku', onn:112, onnkvl:42.5047438330171, xk:237.81055651584, yk:605.896544037297, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Masku.png' },
{id:'i142', name: 'Merijärvi', onn:3, onnkvl:9.00900900900901, xk:339.59358767132, yk:380.576846214204, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Merijärvi.png' },
{id:'i143', name: 'Merikarvia', onn:39, onnkvl:46.875, xk:229.225958353907, yk:524.172334054518, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Merikarvia.png' },
{id:'i144', name: 'Miehikkälä', onn:3, onnkvl:9.64630225080386, xk:441.225968714162, yk:602.165047986505, maakunta: '08' ,kuva: 'kuvat/villisika.png?raw=true' ,kaavio: 'kaaviot/Miehikkälä.png' },
{id:'i145', name: 'Mikkeli', onn:74, onnkvl:66.1304736371761, xk:426.821241184998, yk:544.262810279995, maakunta: '10' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Mikkeli.png' },
{id:'i146', name: 'Muhos', onn:7, onnkvl:5.45596258768511, xk:392.136152611305, yk:355.629517242145, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Muhos.png' },
{id:'i147', name: 'Multia', onn:11, onnkvl:21.6110019646365, xk:345.168952250108, yk:492.893280102342, maakunta: '13' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Multia.png' },
{id:'i148', name: 'Muonio', onn:1, onnkvl:1.85528756957328, xk:327.029277603518, yk:163.863417673144, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Muonio.png' },
{id:'i149', name: 'Mustasaari', onn:87, onnkvl:54.2732376793512, xk:236.353350256443, yk:440.560966134686, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Mustasaari.png' },
{id:'i150', name: 'Muurame', onn:26, onnkvl:7.40740740740741, xk:370.986690484326, yk:513.797915059549, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Muurame.png' },
{id:'i151', name: 'Mynämäki', onn:138, onnkvl:103.370786516854, xk:239.545507415687, yk:596.766098251367, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Mynämäki.png' },
{id:'i152', name: 'Myrskylä', onn:7, onnkvl:12.8676470588235, xk:376.953460004836, yk:605.583771805067, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Myrskylä.png' },
{id:'i153', name: 'Mäntsälä', onn:135, onnkvl:36.4175883463717, xk:356.287796298311, yk:604.184058602591, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Mäntsälä.png' },
{id:'i154', name: 'Mänttä-Vilppula', onn:21, onnkvl:24.0825688073394, xk:328.759925568501, yk:517.143812223803, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Mänttä-Vilppula.png' },
{id:'i155', name: 'Mäntyharju', onn:14, onnkvl:16.7865707434053, xk:410.923208707444, yk:562.089153363606, maakunta: '10' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Mäntyharju.png' },
{id:'i156', name: 'Naantali', onn:136, onnkvl:77.8032036613272, xk:233.324003406246, yk:612.666871760007, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Naantali.png' },
{id:'i157', name: 'Nakkila', onn:43, onnkvl:23.3441910966341, xk:241.922812776593, yk:556.247320020075, maakunta: '04' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Nakkila.png' },
{id:'i158', name: 'Nivala', onn:3, onnkvl:3.39750849377123, xk:354.154113994843, yk:405.497474729077, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Nivala.png' },
{id:'i159', name: 'Nokia', onn:90, onnkvl:24.31775195893, xk:291.066035295624, yk:554.019705342725, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Nokia.png' },
{id:'i160', name: 'Nousiainen', onn:35, onnkvl:28.6885245901639, xk:244.53758047953, yk:600.968438594628, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Nousiainen.png' },
{id:'i161', name: 'Nurmes', onn:18, onnkvl:37.9746835443038, xk:483.629947525964, yk:425.088451518857, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Nurmes.png' },
{id:'i162', name: 'Nurmijärvi', onn:249, onnkvl:54.9062844542448, xk:337.175336951743, yk:614.10381827524, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Nurmijärvi.png' },
{id:'i163', name: 'Närpiö', onn:77, onnkvl:100.522193211488, xk:224.966797486931, yk:482.781570371036, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Närpiö.png' },
{id:'i164', name: 'Orimattila', onn:43, onnkvl:26.7579340385812, xk:376.873297086382, yk:596.44793621592, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Orimattila.png' },
{id:'i165', name: 'Oripää', onn:78, onnkvl:93.4131736526946, xk:264.846415743215, yk:587.848552777613, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Oripää.png' },
{id:'i166', name: 'Orivesi', onn:36, onnkvl:26.7857142857143, xk:332.271925019812, yk:542.369908903459, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Orivesi.png' },
{id:'i167', name: 'Oulainen', onn:8, onnkvl:9.38967136150235, xk:351.212915353367, yk:384.04115312045, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Oulainen.png' },
{id:'i168', name: 'Oulu', onn:53, onnkvl:15.1905990255087, xk:373.897009369548, yk:335.090735285492, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Oulu.png' },
{id:'i169', name: 'Outokumpu', onn:4, onnkvl:5.73065902578797, xk:481.307102669875, yk:478.463855886234, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Outokumpu.png' },
{id:'i170', name: 'Padasjoki', onn:42, onnkvl:62.407132243685, xk:355.644469195189, yk:562.520805725988, maakunta: '07' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Padasjoki.png' },
{id:'i171', name: 'Paimio', onn:77, onnkvl:23.4470158343484, xk:265.520271161132, yk:611.999878983257, maakunta: '02' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Paimio.png' },
{id:'i172', name: 'Paltamo', onn:16, onnkvl:23.7037037037037, xk:439.96643062284, yk:374.912397820621, maakunta: '18' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Paltamo.png' },
{id:'i173', name: 'Parainen', onn:257, onnkvl:294.050343249428, xk:228.25532929422, yk:626.504918298182, maakunta: '02' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Parainen.png' },
{id:'i174', name: 'Parikkala', onn:11, onnkvl:16.7427701674277, xk:506.795046775874, yk:545.453298105648, maakunta: '09' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Parikkala.png' },
{id:'i175', name: 'Parkano', onn:36, onnkvl:30.8747855917667, xk:280.682969722533, yk:517.644944178483, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Parkano.png' },
{id:'i176', name: 'Pedersören kunta', onn:24, onnkvl:18.1818181818182, xk:287.389600516437, yk:426.600767382434, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pedersören kunta.png' },
{id:'i177', name: 'Pelkosenniemi', onn:2, onnkvl:6.0790273556231, xk:432.314056369737, yk:211.223295281785, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pelkosenniemi.png' },
{id:'i178', name: 'Pello', onn:11, onnkvl:24.1228070175439, xk:335.554703804569, yk:234.50083333907, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pello.png' },
{id:'i179', name: 'Perho', onn:2, onnkvl:4.93827160493827, xk:334.565623768788, yk:444.630366401856, maakunta: '16' ,kuva: 'kuvat/metsapeura.png?raw=true' ,kaavio: 'kaaviot/Perho.png' },
{id:'i180', name: 'Pertunmaa', onn:10, onnkvl:9.06618313689937, xk:397.566700023006, yk:553.647054454963, maakunta: '10' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pertunmaa.png' },
{id:'i181', name: 'Petäjävesi', onn:26, onnkvl:32.258064516129, xk:356.021081385259, yk:503.875488996315, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Petäjävesi.png' },
{id:'i182', name: 'Pieksämäki', onn:16, onnkvl:22.7920227920228, xk:421.606321705127, yk:504.64214416275, maakunta: '10' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pieksämäki.png' },
{id:'i183', name: 'Pielavesi', onn:4, onnkvl:11.2044817927171, xk:407.286215481168, yk:443.318176374832, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pielavesi.png' },
{id:'i184', name: 'Pietarsaari', onn:9, onnkvl:2.78637770897833, xk:275.607037005948, yk:417.619030834852, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pietarsaari.png' },
{id:'i185', name: 'Pihtipudas', onn:8, onnkvl:11.2994350282486, xk:374.860710576831, yk:436.587991005459, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pihtipudas.png' },
{id:'i186', name: 'Pirkkala', onn:30, onnkvl:2.80741156653565, xk:299.759599280029, yk:555.3318724669, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pirkkala.png' },
{id:'i187', name: 'Polvijärvi', onn:11, onnkvl:26.2529832935561, xk:495.236649675308, yk:467.42446806783, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Polvijärvi.png' },
{id:'i188', name: 'Pomarkku', onn:24, onnkvl:26.6370699223085, xk:250.037072196731, yk:535.086559449799, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Pomarkku.png' },
{id:'i189', name: 'Pori', onn:285, onnkvl:142.428785607196, xk:235.817796017414, yk:542.580441174628, maakunta: '04' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pori.png' },
{id:'i190', name: 'Pornainen', onn:15, onnkvl:13.1810193321617, xk:358.704451436308, yk:614.529802415848, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Pornainen.png' },
{id:'i191', name: 'Porvoo', onn:158, onnkvl:43.4902284613267, xk:369.766024981385, yk:626.11479769945, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Porvoo.png' },
{id:'i192', name: 'Posio', onn:4, onnkvl:16.9491525423729, xk:448.910610076527, yk:270.129609878614, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Posio.png' },
{id:'i193', name: 'Pudasjärvi', onn:18, onnkvl:32.9067641681901, xk:425.282869020219, yk:312.19426015724, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pudasjärvi.png' },
{id:'i194', name: 'Pukkila', onn:3, onnkvl:5.8252427184466, xk:366.754879978102, yk:604.883841180326, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pukkila.png' },
{id:'i195', name: 'Punkalaidun', onn:104, onnkvl:222.698072805139, xk:282.138240179885, yk:574.649340891774, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Punkalaidun.png' },
{id:'i196', name: 'Puolanka', onn:1, onnkvl:4.149377593361, xk:438.843217444991, yk:347.974136231997, maakunta: '18' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Puolanka.png' },
{id:'i197', name: 'Puumala', onn:2, onnkvl:5.78034682080925, xk:457.972310492787, yk:551.889256318512, maakunta: '10' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Puumala.png' },
{id:'i198', name: 'Pyhtää', onn:13, onnkvl:8.68403473613894, xk:404.600815920294, yk:617.986212480667, maakunta: '08' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pyhtää.png' },
{id:'i199', name: 'Pyhäjoki', onn:6, onnkvl:6.67408231368187, xk:335.906256952538, yk:374.046315400871, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pyhäjoki.png' },
{id:'i200', name: 'Pyhäjärvi', onn:11, onnkvl:14.9659863945578, xk:381.476313662757, yk:424.599783522787, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pyhäjärvi.png' },
{id:'i201', name: 'Pyhäntä', onn:11, onnkvl:22.4489795918367, xk:398.962949293237, yk:396.486368967435, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Pyhäntä.png' },
{id:'i202', name: 'Pyhäranta', onn:55, onnkvl:48.5008818342152, xk:222.105004765637, yk:577.640927746589, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Pyhäranta.png' },
{id:'i203', name: 'Pälkäne', onn:26, onnkvl:30.952380952381, xk:332.099465977177, yk:560.540032899905, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Pälkäne.png' },
{id:'i204', name: 'Pöytyä', onn:290, onnkvl:280.193236714976, xk:259.968765097566, yk:591.360620753891, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Pöytyä.png' },
{id:'i205', name: 'Raahe', onn:19, onnkvl:15.2733118971061, xk:345.401447438332, yk:364.228467436392, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Raahe.png' },
{id:'i206', name: 'Raasepori', onn:448, onnkvl:356.972111553785, xk:284.705665987339, yk:643.515304194464, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Raasepori.png' },
{id:'i207', name: 'Raisio', onn:43, onnkvl:3.03629430871346, xk:244.161184164342, yk:609.790769227871, maakunta: '02' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Raisio.png' },
{id:'i208', name: 'Rantasalmi', onn:8, onnkvl:13.4907251264755, xk:459.422515534632, yk:519.761363993545, maakunta: '10' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Rantasalmi.png' },
{id:'i209', name: 'Ranua', onn:19, onnkvl:55.5555555555556, xk:406.709870011489, yk:275.948093927904, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Ranua.png' },
{id:'i210', name: 'Rauma', onn:189, onnkvl:91.7921321029626, xk:224.507634856443, yk:569.005325689528, maakunta: '04' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Rauma.png' },
{id:'i211', name: 'Rautalampi', onn:3, onnkvl:6.5359477124183, xk:407.16949531159, yk:484.228703359651, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Rautalampi.png' },
{id:'i212', name: 'Rautavaara', onn:2, onnkvl:8.58369098712446, xk:462.625701341115, yk:433.699472308606, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Rautavaara.png' },
{id:'i213', name: 'Rautjärvi', onn:11, onnkvl:17.6565008025682, xk:493.099502326773, yk:558.890159446692, maakunta: '09' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Rautjärvi.png' },
{id:'i214', name: 'Reisjärvi', onn:1, onnkvl:2.32558139534884, xk:351.916279601453, yk:423.714948020645, maakunta: '17' ,kuva: 'kuvat/metsapeura.png?raw=true' ,kaavio: 'kaaviot/Reisjärvi.png' },
{id:'i215', name: 'Riihimäki', onn:96, onnkvl:15.1062155782848, xk:336.081112500527, yk:600.650777520967, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Riihimäki.png' },
{id:'i216', name: 'Ristijärvi', onn:3, onnkvl:8.26446280991736, xk:461.39713129397, yk:371.319228074407, maakunta: '18' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Ristijärvi.png' },
{id:'i217', name: 'Rovaniemi', onn:48, onnkvl:49.4845360824742, xk:391.630985421787, yk:244.255735384792, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Rovaniemi.png' },
{id:'i218', name: 'Ruokolahti', onn:8, onnkvl:12.8410914927769, xk:480.974777258287, yk:560.422558063713, maakunta: '09' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Ruokolahti.png' },
{id:'i219', name: 'Ruovesi', onn:29, onnkvl:38.7182910547397, xk:316.250818586435, yk:521.627771480657, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ruovesi.png' },
{id:'i220', name: 'Rusko', onn:18, onnkvl:12.1703853955375, xk:248.708661256174, yk:604.969740385202, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Rusko.png' },
{id:'i221', name: 'Rääkkylä', onn:4, onnkvl:14.760147601476, xk:509.049022489462, yk:503.532335225726, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Rääkkylä.png' },
{id:'i222', name: 'Saarijärvi', onn:47, onnkvl:75.8064516129032, xk:354.416137094977, yk:478.555104261424, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Saarijärvi.png' },
{id:'i223', name: 'Salla', onn:5, onnkvl:23.1481481481481, xk:474.385370096935, yk:218.014321916613, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Salla.png' },
{id:'i224', name: 'Salo', onn:582, onnkvl:328.257191201354, xk:277.179941371705, yk:627.281123186998, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Salo.png' },
{id:'i225', name: 'Sastamala', onn:329, onnkvl:309.501411100659, xk:274.4076435785, yk:551.586807200157, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Sastamala.png' },
{id:'i226', name: 'Sauvo', onn:40, onnkvl:52.8401585204756, xk:261.278100185377, yk:622.356395201052, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Sauvo.png' },
{id:'i227', name: 'Savitaipale', onn:8, onnkvl:16.0642570281125, xk:438.154075821145, yk:571.06753088301, maakunta: '09' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Savitaipale.png' },
{id:'i228', name: 'Savonlinna', onn:17, onnkvl:20.8588957055215, xk:482.486776694968, yk:522.198244596883, maakunta: '10' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Savonlinna.png' },
{id:'i229', name: 'Savukoski', onn:2, onnkvl:13.6986301369863, xk:461.003749941492, yk:187.080388553913, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Savukoski.png' },
{id:'i230', name: 'Seinäjoki', onn:37, onnkvl:22.1556886227545, xk:282.167383980398, yk:474.302153157109, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Seinäjoki.png' },
{id:'i231', name: 'Sievi', onn:9, onnkvl:8.49056603773585, xk:340.786349698029, yk:410.233986120651, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Sievi.png' },
{id:'i232', name: 'Siikainen', onn:17, onnkvl:63.4328358208955, xk:244.914075280654, yk:526.059699534899, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Siikainen.png' },
{id:'i233', name: 'Siikajoki', onn:9, onnkvl:11.1111111111111, xk:352.626991283816, yk:355.200905191878, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Siikajoki.png' },
{id:'i234', name: 'Siikalatva', onn:20, onnkvl:28.0504908835905, xk:386.915209272422, yk:380.896462991415, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Siikalatva.png' },
{id:'i235', name: 'Siilinjärvi', onn:11, onnkvl:3.25829383886256, xk:438.286346558674, yk:457.366746684781, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Siilinjärvi.png' },
{id:'i236', name: 'Simo', onn:5, onnkvl:5.89622641509434, xk:362.369914623387, yk:292.41946574373, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Simo.png' },
{id:'i237', name: 'Sipoo', onn:132, onnkvl:35.8598207008965, xk:356.723256523174, yk:626.013057661057, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Sipoo.png' },
{id:'i238', name: 'Siuntio', onn:66, onnkvl:46.643109540636, xk:317.050271531628, yk:634.078501992323, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Siuntio.png' },
{id:'i239', name: 'Sodankylä', onn:12, onnkvl:19.2307692307692, xk:409.723123334104, yk:181.097472046571, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Sodankylä.png' },
{id:'i240', name: 'Soini', onn:4, onnkvl:14.9812734082397, xk:326.175080369102, yk:470.459741653794, maakunta: '14' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Soini.png' },
{id:'i241', name: 'Somero', onn:108, onnkvl:142.292490118577, xk:293.965177339424, yk:605.037201111228, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Somero.png' },
{id:'i242', name: 'Sonkajärvi', onn:7, onnkvl:15.1187904967603, xk:434.713242158114, yk:416.699310368613, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Sonkajärvi.png' },
{id:'i243', name: 'Sotkamo', onn:21, onnkvl:36.2694300518135, xk:465.127653997107, yk:399.676806483605, maakunta: '18' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Sotkamo.png' },
//{id:'i244', name: 'Sulkava', onn:0, onnkvl:0, xk:465.660190024218, yk:538.386123956158, maakunta: '10' ,kuva: 'kuvat/villisika.png' ,kaavio: 'kaaviot/Sulkava.png' },
{id:'i245', name: 'Suomussalmi', onn:12, onnkvl:50.6329113924051, xk:491.539532592307, yk:336.593435767692, maakunta: '18' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Suomussalmi.png' },
{id:'i246', name: 'Suonenjoki', onn:11, onnkvl:9.01639344262295, xk:421.935414737694, yk:486.412346675717, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Suonenjoki.png' },
{id:'i247', name: 'Sysmä', onn:4, onnkvl:7.14285714285714, xk:373.368306253392, yk:552.436636925676, maakunta: '07' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Sysmä.png' },
{id:'i248', name: 'Säkylä', onn:116, onnkvl:100.607111882047, xk:255.950125674779, yk:573.731845409828, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Säkylä.png' },
{id:'i249', name: 'Taipalsaari', onn:5, onnkvl:7.36377025036819, xk:453.370975523166, yk:571.317018789527, maakunta: '09' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Taipalsaari.png' },
{id:'i250', name: 'Taivalkoski', onn:5, onnkvl:9.29368029739777, xk:460.412605249933, yk:306.572529797709, maakunta: '17' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Taivalkoski.png' },
{id:'i251', name: 'Taivassalo', onn:77, onnkvl:87.8995433789954, xk:224.482090087604, yk:603.602981398957, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Taivassalo.png' },
{id:'i252', name: 'Tammela', onn:134, onnkvl:110.106820049302, xk:304.588889687965, yk:593.94288511696, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Tammela.png' },
{id:'i253', name: 'Tampere', onn:113, onnkvl:15.0066401062417, xk:307.536099027342, yk:544.781706933129, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tampere.png' },
{id:'i254', name: 'Tervo', onn:4, onnkvl:12.2324159021407, xk:410.299528241234, yk:465.138419932743, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tervo.png' },
{id:'i255', name: 'Tervola', onn:20, onnkvl:31.6455696202532, xk:366.398897533105, yk:272.224988827258, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tervola.png' },
{id:'i256', name: 'Teuva', onn:7, onnkvl:13.9720558882236, xk:244.344619453494, yk:483.581940637572, maakunta: '14' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Teuva.png' },
{id:'i257', name: 'Tohmajärvi', onn:6, onnkvl:10.4166666666667, xk:530.406039522632, yk:505.446072997692, maakunta: '12' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Tohmajärvi.png' },
{id:'i258', name: 'Toholampi', onn:8, onnkvl:11.9940029985007, xk:330.055135693646, yk:416.50099124311, maakunta: '16' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Toholampi.png' },
{id:'i259', name: 'Toivakka', onn:8, onnkvl:8.49256900212314, xk:384.612386717149, yk:517.040564396963, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Toivakka.png' },
{id:'i260', name: 'Tornio', onn:19, onnkvl:15.5355682747343, xk:333.569893510991, yk:280.232855096034, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tornio.png' },
{id:'i261', name: 'Turku', onn:190, onnkvl:28.2696027376878, xk:246.905958688845, yk:612.119023894319, maakunta: '02' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Turku.png' },
{id:'i262', name: 'Tuusniemi', onn:3, onnkvl:5.94059405940594, xk:464.8282831753, yk:475.501659678233, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Tuusniemi.png' },
{id:'i263', name: 'Tuusula', onn:88, onnkvl:14.8824623710468, xk:346.678277437572, yk:616.098846600032, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tuusula.png' },
{id:'i264', name: 'Tyrnävä', onn:4, onnkvl:4.13223140495868, xk:378.047153403335, yk:357.463491184209, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Tyrnävä.png' },
{id:'i265', name: 'Ulvila', onn:77, onnkvl:39.5480225988701, xk:248.732806889987, yk:550.105632805043, maakunta: '04' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Ulvila.png' },
{id:'i266', name: 'Urjala', onn:231, onnkvl:242.138364779874, xk:294.783205767658, yk:575.823365270678, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Urjala.png' },
{id:'i267', name: 'Utajärvi', onn:14, onnkvl:25.2252252252252, xk:407.853736326173, yk:350.892237430636, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Utajärvi.png' },
{id:'i268', name: 'Utsjoki', onn:4, onnkvl:18.4331797235023, xk:410.302855872517, yk:50, maakunta: '19' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Utsjoki.png' },
{id:'i269', name: 'Uurainen', onn:10, onnkvl:11.2485939257593, xk:364.320688994902, yk:493.32875804905, maakunta: '13' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Uurainen.png' },
{id:'i270', name: 'Uusikaarlepyy', onn:33, onnkvl:31.5487571701721, xk:270.111960288271, yk:428.251013706676, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Uusikaarlepyy.png' },
{id:'i271', name: 'Uusikaupunki', onn:170, onnkvl:153.70705244123, xk:218.425836278913, yk:585.638772951809, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Uusikaupunki.png' },
{id:'i272', name: 'Vaala', onn:5, onnkvl:11.8203309692671, xk:414.13029118218, yk:370.905421627866, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vaala.png' },
{id:'i273', name: 'Vaasa', onn:46, onnkvl:16.5885322755139, xk:240.371335369748, yk:451.591394103308, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vaasa.png' },
{id:'i274', name: 'Valkeakoski', onn:99, onnkvl:35.2313167259786, xk:314.278431151229, yk:568.34813308893, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Valkeakoski.png' },
{id:'i275', name: 'Vantaa', onn:153, onnkvl:6.45297342893294, xk:346.074360374155, yk:625.528617925228, maakunta: '01' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vantaa.png' },
{id:'i276', name: 'Varkaus', onn:3, onnkvl:2.02565833896016, xk:456.528246658199, yk:504.931140276376, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Varkaus.png' },
{id:'i277', name: 'Vehmaa', onn:57, onnkvl:65.2173913043478, xk:228.877660655116, yk:598.580142643737, maakunta: '02' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Vehmaa.png' },
{id:'i278', name: 'Vesanto', onn:2, onnkvl:7.04225352112676, xk:395.118931731077, yk:467.976989866374, maakunta: '11' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vesanto.png' },
{id:'i279', name: 'Vesilahti', onn:60, onnkvl:107.719928186715, xk:293.412011443621, yk:563.318254489183, maakunta: '06' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Vesilahti.png' },
{id:'i280', name: 'Veteli', onn:15, onnkvl:20.5761316872428, xk:318.031822096738, yk:434.392198070589, maakunta: '16' ,kuva: 'kuvat/metsapeura.png?raw=true' ,kaavio: 'kaaviot/Veteli.png' },
{id:'i281', name: 'Vieremä', onn:7, onnkvl:18.2291666666667, xk:416.914326537549, yk:413.168752304135, maakunta: '11' ,kuva: 'kuvat/hirvi.png?raw=true' ,kaavio: 'kaaviot/Vieremä.png' },
{id:'i282', name: 'Vihti', onn:167, onnkvl:57.0160464322294, xk:324.678245400044, yk:618.418902915095, maakunta: '01' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Vihti.png' },
{id:'i283', name: 'Viitasaari', onn:21, onnkvl:24.3055555555556, xk:379.70832760624, yk:456.956636704641, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Viitasaari.png' },
{id:'i284', name: 'Vimpeli', onn:3, onnkvl:5.00834724540902, xk:316.461609860506, yk:448.96867183196, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vimpeli.png' },
{id:'i285', name: 'Virolahti', onn:7, onnkvl:8.70646766169154, xk:438.518627297544, yk:610.982527231913, maakunta: '08' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Virolahti.png' },
{id:'i286', name: 'Virrat', onn:33, onnkvl:50.2283105022831, xk:307.459071396984, yk:503.63320315589, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Virrat.png' },
{id:'i287', name: 'Vöyri', onn:36, onnkvl:41.3793103448276, xk:258.194677563705, yk:437.92004167305, maakunta: '15' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Vöyri.png' },
{id:'i288', name: 'Ylitornio', onn:14, onnkvl:32.258064516129, xk:334.757835427224, yk:249.428406417903, maakunta: '19' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ylitornio.png' },
{id:'i289', name: 'Ylivieska', onn:10, onnkvl:6.4143681847338, xk:342.930714596627, yk:396.723226850675, maakunta: '17' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ylivieska.png' },
{id:'i290', name: 'Ylöjärvi', onn:56, onnkvl:32.3699421965318, xk:297.008017803333, yk:530.801647356836, maakunta: '06' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ylöjärvi.png' },
{id:'i291', name: 'Ypäjä', onn:21, onnkvl:25.4854368932039, xk:284.510422245742, yk:591.696773640371, maakunta: '05' ,kuva: 'kuvat/valkohantapeura.png?raw=true' ,kaavio: 'kaaviot/Ypäjä.png' },
{id:'i292', name: 'Ähtäri', onn:18, onnkvl:29.1734197730956, xk:324.046934013887, yk:485.444435715287, maakunta: '14' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Ähtäri.png' },
{id:'i293', name: 'Äänekoski', onn:38, onnkvl:19.5372750642674, xk:380.408452655138, yk:478.849419871903, maakunta: '13' ,kuva: 'kuvat/metsakauris.png?raw=true' ,kaavio: 'kaaviot/Äänekoski.png' }



							
];


//määritellään tooltippi
var dataFilter = data.map(function(d){return {kuva: d.kuva, name: d.name, xk: d.xk, yk: d.yk,value: d.onn,onn: d.onn,onnkvl: d.onnkvl,kaavio: d.kaavio} });

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
	var radiusScale = d3.scaleSqrt().domain([1,1000]).range([3,60])	
	
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
      .style("background-color", "#ea7404")
      .style("border-radius", "10px")
      .style("padding", "10px")
      .style("color", "black")


	var showTooltip = function(d) {
		tooltip
		  .transition()
		  .duration(200)
		tooltip
		  .style("opacity", 1)
		  .html(d.name + "<br> Onnettomuuksia yhteensä:" + d.onn + "<br> Onnettomuuksia suhteessa liikennemäärään:" + Math.round(d.onnkvl * 10) / 10 
		  +"<br> <br> <img src='"+d.kaavio+"' alt='testikuva' width='375' height='299'></img>")
		  .style("left", (d3.mouse(this)[0]+10) + "px")
		  .style("top", (d3.mouse(this)[1]+100) + "px")
	  }
	  var moveTooltip = function(d) {
		tooltip
		  .style("left", (d3.mouse(this)[0]+10) + "px")
		  .style("top", (d3.mouse(this)[1]+100) + "px")
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
			return d.name.replace(" ","-")
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
		.attr("fill", "#0073b0")
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




      d3.select(this)
		//.data(data)
        .transition()
        .duration(100)
        .attr('r', function(d) {
			return radiusScale(d.value)+20
		})
        .attr('fill', function (d) {
		return "url(#"+ d.name.replace(" ","-") +")"
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
testi()



function vaihdaluku(color){
	


	
	dataFilter = data.map(function(d){return {kuva: d.kuva, name: d.name, xk: d.xk, yk: d.yk,value: d.onn,onn: d.onn,onnkvl: d.onnkvl,kaavio: d.kaavio} });
	g.selectAll(".circle")
	//testi() 

 }

 
//})()




</script>
</div>
```
For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).


### Visukintut-joukkue

Joukkueeseen kuuluu Matti Kokkonen, Yhteiskuntatilasto, Katja Löytynoja, Digitalisaatiopalvelut ja Mervi Niemi, Taloustilastot
