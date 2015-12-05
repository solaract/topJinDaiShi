

//至善网近代史答题超简版
//此脚本分为挂时间，自动答题和自动媒体评价三部分
//使用方法：
//进入至善网近代史课程学习页面
//f12打开控制台，在console或控制台粘贴此脚本，回车运行即可

//！！运行结束前不要刷新页面，不要关闭控制台！！
//！！使用答题和媒体评价功能前请先学满学习时间！！

//运行时可不停留在本页
//运行结束后会有弹框进行通知

//此处为数据，主程序与说明在最下面
var ans = [{
	jid:"3",
	pid:"5",
	msg:"3"
},
{
	jid:"3",
	pid:"6",
	msg:"1"
},{
	jid:"3",
	pid:"7",
	msg:"1"
},
{
	jid:"3",
	pid:"8",
	msg:"2"
},
{
	jid:"3",
	pid:"9",
	msg:"0"
},
{
	jid:"3",
	pid:"10",
	msg:"0,1,2,3"
},
{
	jid:"3",
	pid:"11",
	msg:"0,1,2,3"
},
{
	jid:"3",
	pid:"12",
	msg:"0,1,2,3"
},
{
	jid:"4",
	pid:"13",
	msg:"1"
},
{
	jid:"4",
	pid:"14",
	msg:"0"
},
{
	jid:"4",
	pid:"15",
	msg:"2"
},
{
	jid:"4",
	pid:"16",
	msg:"2"
},
{
	jid:"4",
	pid:"17",
	msg:"3"
},
{
	jid:"4",
	pid:"18",
	msg:"0"
},
{
	jid:"4",
	pid:"19",
	msg:"0,1,2,3"
},
{
	jid:"4",
	pid:"20",
	msg:"0,1,3"
},
{
	jid:"4",
	pid:"21",
	msg:"0,1,2"
},
{
	jid:"4",
	pid:"22",
	msg:"0,1"
},
{
	jid:"4",
	pid:"23",
	msg:"0"
},
{
	jid:"4",
	pid:"24",
	msg:"0"
},
{
	jid:"4",
	pid:"25",
	msg:"0"
},
{
	jid:"4",
	pid:"26",
	msg:"0"
},
{
	jid:"4",
	pid:"27",
	msg:"0"
},
{
	jid:"4",
	pid:"28",
	msg:"0"
},
{
	jid:"7",
	pid:"29",
	msg:"1"
},
{
	jid:"7",
	pid:"30",
	msg:"0"
},
{
	jid:"7",
	pid:"31",
	msg:"2"
},
{
	jid:"7",
	pid:"32",
	msg:"3"
},
{
	jid:"7",
	pid:"33",
	msg:"2"
},
{
	jid:"7",
	pid:"34",
	msg:"1"
},
{
	jid:"7",
	pid:"35",
	msg:"1"
},
{
	jid:"7",
	pid:"37",
	msg:"1"
},
{
	jid:"7",
	pid:"38",
	msg:"0"
},
{
	jid:"7",
	pid:"39",
	msg:"1"
},
{
	jid:"7",
	pid:"40",
	msg:"2"
},
{
	jid:"7",
	pid:"41",
	msg:"1"
},
{
	jid:"7",
	pid:"42",
	msg:"0"
},
{
	jid:"7",
	pid:"43",
	msg:"0,1,2,3"
},
{
	jid:"7",
	pid:"44",
	msg:"0,1,2"
},
{
	jid:"7",
	pid:"45",
	msg:"1,2,3"
},
{
	jid:"7",
	pid:"46",
	msg:"0,3"
},
{
	jid:"7",
	pid:"47",
	msg:"0,3"
},
{
	jid:"7",
	pid:"48",
	msg:"0,1,2"
},
{
	jid:"7",
	pid:"49",
	msg:"0,1,2,3"
},
{
	jid:"7",
	pid:"50",
	msg:"1"
},
{
	jid:"7",
	pid:"51",
	msg:"0"
},
{
	jid:"7",
	pid:"52",
	msg:"1"
},
{
	jid:"7",
	pid:"53",
	msg:"1"
},
{
	jid:"7",
	pid:"54",
	msg:"1"
},
{
	jid:"7",
	pid:"55",
	msg:"0"
},
{
	jid:"5",
	pid:"56",
	msg:"1"
},
{
	jid:"5",
	pid:"57",
	msg:"3"
},
{
	jid:"5",
	pid:"58",
	msg:"2"
},
{
	jid:"5",
	pid:"59",
	msg:"2"
},
{
	jid:"5",
	pid:"60",
	msg:"2"
},
{
	jid:"5",
	pid:"61",
	msg:"2"
},
{
	jid:"5",
	pid:"62",
	msg:"0"
},
{
	jid:"5",
	pid:"63",
	msg:"0"
},
{
	jid:"5",
	pid:"64",
	msg:"2"
},
{
	jid:"5",
	pid:"65",
	msg:"0"
},
{
	jid:"5",
	pid:"66",
	msg:"0"
},
{
	jid:"5",
	pid:"67",
	msg:"0"
},
{
	jid:"5",
	pid:"68",
	msg:"0"
},
{
	jid:"5",
	pid:"69",
	msg:"0"
},
{
	jid:"5",
	pid:"70",
	msg:"0"
},
{
	jid:"5",
	pid:"71",
	msg:"0,1,2,3"
},
{
	jid:"5",
	pid:"72",
	msg:"0,1,2,3"
},
{
	jid:"5",
	pid:"73",
	msg:"0,1,2,3,4"
},
{
	jid:"5",
	pid:"74",
	msg:"0,1,2,3"
},
{
	jid:"5",
	pid:"75",
	msg:"0,1,2,3"
},
{
	jid:"5",
	pid:"76",
	msg:"0,1,2"
},
{
	jid:"5",
	pid:"77",
	msg:"0,2,3"
},
{
	jid:"5",
	pid:"78",
	msg:"0,1,2"
},
{
	jid:"5",
	pid:"79",
	msg:"1"
},
{
	jid:"5",
	pid:"80",
	msg:"1"
},
{
	jid:"5",
	pid:"81",
	msg:"0"
},
{
	jid:"5",
	pid:"82",
	msg:"1"
},
{
	jid:"5",
	pid:"83",
	msg:"1"
},
{
	jid:"5",
	pid:"84",
	msg:"1"
},
{
	jid:"5",
	pid:"85",
	msg:"0"
},
{
	jid:"6",
	pid:"86",
	msg:"0"
},
{
	jid:"6",
	pid:"87",
	msg:"0"
},
{
	jid:"6",
	pid:"88",
	msg:"2"
},
{
	jid:"6",
	pid:"89",
	msg:"3"
},
{
	jid:"6",
	pid:"90",
	msg:"2"
},
{
	jid:"6",
	pid:"91",
	msg:"3"
},
{
	jid:"6",
	pid:"92",
	msg:"3"
},
{
	jid:"6",
	pid:"93",
	msg:"0,3"
},
{
	jid:"6",
	pid:"94",
	msg:"0,1,2,3"
},
{
	jid:"6",
	pid:"95",
	msg:"0,1"
},
{
	jid:"6",
	pid:"96",
	msg:"0,2,3"
},
{
	jid:"6",
	pid:"97",
	msg:"0,1,2,3"
},
{
	jid:"6",
	pid:"98",
	msg:"1"
},
{
	jid:"6",
	pid:"99",
	msg:"0"
},
{
	jid:"6",
	pid:"100",
	msg:"1"
},
{
	jid:"8",
	pid:"101",
	msg:"2"
},
{
	jid:"8",
	pid:"102",
	msg:"1"
},
{
	jid:"8",
	pid:"103",
	msg:"1"
},
{
	jid:"8",
	pid:"104",
	msg:"0"
},
{
	jid:"8",
	pid:"105",
	msg:"0"
},
{
	jid:"8",
	pid:"106",
	msg:"0"
},
{
	jid:"8",
	pid:"107",
	msg:"1"
},
{
	jid:"8",
	pid:"108",
	msg:"2"
},
{
	jid:"8",
	pid:"109",
	msg:"3"
},
{
	jid:"8",
	pid:"110",
	msg:"0,1"
},
{
	jid:"8",
	pid:"111",
	msg:"1,3"
},
{
	jid:"8",
	pid:"112",
	msg:"0"
},
{
	jid:"8",
	pid:"113",
	msg:"1"
},
{
	jid:"92",
	pid:"114",
	msg:"2"
},
{
	jid:"92",
	pid:"115",
	msg:"2"
},
{
	jid:"92",
	pid:"116",
	msg:"2"
},
{
	jid:"92",
	pid:"117",
	msg:"1"
},
{
	jid:"92",
	pid:"118",
	msg:"2"
},
{
	jid:"92",
	pid:"119",
	msg:"1"
},
{
	jid:"92",
	pid:"120",
	msg:"2"
},
{
	jid:"92",
	pid:"121",
	msg:"2"
},
{
	jid:"92",
	pid:"122",
	msg:"2"
},
{
	jid:"92",
	pid:"123",
	msg:"0,3"
},
{
	jid:"92",
	pid:"124",
	msg:"0,1,2,3"
},
{
	jid:"92",
	pid:"125",
	msg:"0,1,2,3"
},
{
	jid:"92",
	pid:"126",
	msg:"0,1,2"
},
{
	jid:"92",
	pid:"127",
	msg:"0,2,3"
},
{
	jid:"92",
	pid:"128",
	msg:"1,2"
},
{
	jid:"92",
	pid:"129",
	msg:"0"
},
{
	jid:"92",
	pid:"130",
	msg:"0"
},
{
	jid:"92",
	pid:"131",
	msg:"1"
},
{
	jid:"92",
	pid:"132",
	msg:"0"
},
{
	jid:"92",
	pid:"133",
	msg:"0"
},
{
	jid:"93",
	pid:"134",
	msg:"0"
},
{
	jid:"93",
	pid:"135",
	msg:"3"
},
{
	jid:"93",
	pid:"136",
	msg:"2"
},
{
	jid:"93",
	pid:"137",
	msg:"3"
},
{
	jid:"93",
	pid:"138",
	msg:"0"
},
{
	jid:"93",
	pid:"139",
	msg:"1"
},
{
	jid:"93",
	pid:"140",
	msg:"0"
},
{
	jid:"93",
	pid:"141",
	msg:"0"
},
{
	jid:"93",
	pid:"142",
	msg:"3"
},
{
	jid:"93",
	pid:"143",
	msg:"0"
},
{
	jid:"93",
	pid:"144",
	msg:"3"
},
{
	jid:"93",
	pid:"145",
	msg:"2"
},
{
	jid:"93",
	pid:"146",
	msg:"0,1,2,3,4"
},
{
	jid:"93",
	pid:"147",
	msg:"0,1,2,3,4"
},
{
	jid:"93",
	pid:"148",
	msg:"0,1,2"
},
{
	jid:"93",
	pid:"149",
	msg:"0,1,3"
},
{
	jid:"93",
	pid:"150",
	msg:"1"
},
{
	jid:"93",
	pid:"151",
	msg:"0"
},
{
	jid:"93",
	pid:"152",
	msg:"1"
},
{
	jid:"93",
	pid:"153",
	msg:"1"
},
{
	jid:"94",
	pid:"154",
	msg:"3"
},
{
	jid:"94",
	pid:"155",
	msg:"1"
},
{
	jid:"94",
	pid:"156",
	msg:"1"
},
{
	jid:"94",
	pid:"157",
	msg:"1"
},
{
	jid:"94",
	pid:"158",
	msg:"0"
},
{
	jid:"94",
	pid:"159",
	msg:"3"
},
{
	jid:"94",
	pid:"160",
	msg:"1"
},
{
	jid:"94",
	pid:"161",
	msg:"2"
},
{
	jid:"94",
	pid:"162",
	msg:"2"
},
{
	jid:"94",
	pid:"163",
	msg:"0"
},
{
	jid:"94",
	pid:"164",
	msg:"0,1,2"
},
{
	jid:"94",
	pid:"165",
	msg:"0,1,2,3"
},
{
	jid:"94",
	pid:"166",
	msg:"0,1,2,3"
},
{
	jid:"94",
	pid:"167",
	msg:"0,1"
},
{
	jid:"94",
	pid:"168",
	msg:"0,1,2"
},
{
	jid:"94",
	pid:"169",
	msg:"1"
},
{
	jid:"94",
	pid:"170",
	msg:"1"
},
{
	jid:"94",
	pid:"171",
	msg:"1"
},
{
	jid:"94",
	pid:"172",
	msg:"1"
},
{
	jid:"94",
	pid:"173",
	msg:"1"
},
{
	jid:"94",
	pid:"174",
	msg:"0"
},
{
	jid:"69",
	pid:"175",
	msg:"3"
},
{
	jid:"69",
	pid:"176",
	msg:"2"
},
{
	jid:"69",
	pid:"177",
	msg:"1"
},
{
	jid:"69",
	pid:"178",
	msg:"2"
},
{
	jid:"69",
	pid:"179",
	msg:"2"
},
{
	jid:"69",
	pid:"180",
	msg:"2"
},
{
	jid:"69",
	pid:"181",
	msg:"2"
},
{
	jid:"69",
	pid:"182",
	msg:"2"
},
{
	jid:"69",
	pid:"183",
	msg:"0"
},
{
	jid:"69",
	pid:"184",
	msg:"2"
},
{
	jid:"69",
	pid:"185",
	msg:"0"
},
{
	jid:"69",
	pid:"186",
	msg:"0,1,2"
},
{
	jid:"69",
	pid:"187",
	msg:"1,2,3"
},
{
	jid:"69",
	pid:"188",
	msg:"0,1,3"
},
{
	jid:"69",
	pid:"189",
	msg:"0,1,2,3"
},
{
	jid:"69",
	pid:"190",
	msg:"0,1,2,3"
},
{
	jid:"69",
	pid:"191",
	msg:"0,2"
},
{
	jid:"69",
	pid:"192",
	msg:"0,2,3"
},
{
	jid:"69",
	pid:"193",
	msg:"1,2,3,4"
},
{
	jid:"69",
	pid:"194",
	msg:"1"
},
{
	jid:"69",
	pid:"195",
	msg:"1"
},
{
	jid:"69",
	pid:"196",
	msg:"1"
},
{
	jid:"69",
	pid:"197",
	msg:"1"
},
{
	jid:"69",
	pid:"198",
	msg:"1"
},
{
	jid:"69",
	pid:"199",
	msg:"1"
},
{
	jid:"69",
	pid:"200",
	msg:"1"
},
{
	jid:"90",
	pid:"201",
	msg:"0"
},
{
	jid:"90",
	pid:"202",
	msg:"1"
},
{
	jid:"90",
	pid:"203",
	msg:"3"
},
{
	jid:"90",
	pid:"204",
	msg:"0"
},
{
	jid:"90",
	pid:"205",
	msg:"2"
},
{
	jid:"90",
	pid:"206",
	msg:"0"
},
{
	jid:"90",
	pid:"207",
	msg:"1"
},
{
	jid:"90",
	pid:"208",
	msg:"3"
},
{
	jid:"90",
	pid:"209",
	msg:"0"
},
{
	jid:"90",
	pid:"210",
	msg:"1"
},
{
	jid:"90",
	pid:"211",
	msg:"3"
},
{
	jid:"90",
	pid:"212",
	msg:"0,1,2,3"
},
{
	jid:"90",
	pid:"213",
	msg:"0,1,2"
},
{
	jid:"90",
	pid:"214",
	msg:"0,1,2,3"
},
{
	jid:"90",
	pid:"215",
	msg:"1"
},
{
	jid:"90",
	pid:"216",
	msg:"1"
},
{
	jid:"90",
	pid:"217",
	msg:"0"
},
{
	jid:"91",
	pid:"218",
	msg:"2"
},
{
	jid:"91",
	pid:"219",
	msg:"3"
},
{
	jid:"91",
	pid:"220",
	msg:"2"
},
{
	jid:"91",
	pid:"221",
	msg:"3"
},
{
	jid:"91",
	pid:"222",
	msg:"2"
},
{
	jid:"91",
	pid:"223",
	msg:"0"
},
{
	jid:"91",
	pid:"224",
	msg:"0"
},
{
	jid:"91",
	pid:"225",
	msg:"0"
},
{
	jid:"91",
	pid:"226",
	msg:"3"
},
{
	jid:"91",
	pid:"227",
	msg:"3"
},
{
	jid:"91",
	pid:"228",
	msg:"1,2,3"
},
{
	jid:"91",
	pid:"229",
	msg:"0,1,2"
},
{
	jid:"91",
	pid:"230",
	msg:"0,1,2"
},
{
	jid:"91",
	pid:"231",
	msg:"0"
},
{
	jid:"91",
	pid:"232",
	msg:"0"
},
{
	jid:"91",
	pid:"233",
	msg:"1"
},
{
	jid:"91",
	pid:"234",
	msg:"1"
},
{
	jid:"91",
	pid:"235",
	msg:"1"
},
{
	jid:"116",
	pid:"236",
	msg:"0"
},
{
	jid:"116",
	pid:"237",
	msg:"3"
},
{
	jid:"116",
	pid:"238",
	msg:"0"
},
{
	jid:"116",
	pid:"239",
	msg:"2"
},
{
	jid:"116",
	pid:"240",
	msg:"0"
},
{
	jid:"116",
	pid:"241",
	msg:"2"
},
{
	jid:"116",
	pid:"242",
	msg:"3"
},
{
	jid:"116",
	pid:"243",
	msg:"0"
},
{
	jid:"116",
	pid:"244",
	msg:"0,1,2,3"
},
{
	jid:"116",
	pid:"245",
	msg:"0"
},
{
	jid:"118",
	pid:"246",
	msg:"0"
},
{
	jid:"118",
	pid:"247",
	msg:"2"
},
{
	jid:"118",
	pid:"248",
	msg:"2"
},
{
	jid:"118",
	pid:"249",
	msg:"1"
},
{
	jid:"118",
	pid:"250",
	msg:"1"
},
{
	jid:"118",
	pid:"251",
	msg:"0"
},
{
	jid:"118",
	pid:"252",
	msg:"1,2,3"
},
{
	jid:"118",
	pid:"253",
	msg:"0,1,2,3"
},
{
	jid:"118",
	pid:"254",
	msg:"0,1,2,3"
},
{
	jid:"118",
	pid:"255",
	msg:"0"
},
{
	jid:"118",
	pid:"256",
	msg:"0"
},
{
	jid:"118",
	pid:"257",
	msg:"1"
},
{
	jid:"118",
	pid:"258",
	msg:"0"
},
{
	jid:"119",
	pid:"259",
	msg:"1,2,3"
},
{
	jid:"119",
	pid:"260",
	msg:"0,2,3"
},
{
	jid:"119",
	pid:"261",
	msg:"0,2"
},
{
	jid:"119",
	pid:"262",
	msg:"0,1,2,3"
},
{
	jid:"119",
	pid:"263",
	msg:"0,1,2,3,4"
},
{
	jid:"119",
	pid:"264",
	msg:"0,2"
},
{
	jid:"119",
	pid:"265",
	msg:"0,1,2,3"
},
{
	jid:"119",
	pid:"266",
	msg:"0"
},
{
	jid:"119",
	pid:"267",
	msg:"1"
},
{
	jid:"119",
	pid:"268",
	msg:"0"
},
{
	jid:"119",
	pid:"269",
	msg:"1"
},{
	jid:"95",
	pid:"270",
	msg:"3"
},
{
	jid:"95",
	pid:"271",
	msg:"0"
},
{
	jid:"95",
	pid:"272",
	msg:"1"
},
{
	jid:"95",
	pid:"273",
	msg:"0"
},
{
	jid:"95",
	pid:"274",
	msg:"2"
},
{
	jid:"95",
	pid:"275",
	msg:"3"
},
{
	jid:"95",
	pid:"276",
	msg:"2"
},
{
	jid:"95",
	pid:"277",
	msg:"0"
},
{
	jid:"95",
	pid:"278",
	msg:"0"
},
{
	jid:"95",
	pid:"279",
	msg:"0,1,2,3"
},
{
	jid:"95",
	pid:"280",
	msg:"0,1,3"
},
{
	jid:"95",
	pid:"281",
	msg:"0,2,3"
},
{
	jid:"95",
	pid:"282",
	msg:"0,3"
},
{
	jid:"95",
	pid:"283",
	msg:"0,1,2"
},
{
	jid:"95",
	pid:"284",
	msg:"0,1,2,3"
},
{
	jid:"95",
	pid:"285",
	msg:"1"
},
{
	jid:"95",
	pid:"286",
	msg:"1"
},
{
	jid:"95",
	pid:"287",
	msg:"1"
},
{
	jid:"95",
	pid:"288",
	msg:"1"
},
{
	jid:"95",
	pid:"289",
	msg:"0"
},
{
	jid:"95",
	pid:"290",
	msg:"1"
},
{
	jid:"95",
	pid:"291",
	msg:"1"
},
{
	jid:"95",
	pid:"292",
	msg:"1"
},
{
	jid:"95",
	pid:"293",
	msg:"1"
},
{
	jid:"96",
	pid:"294",
	msg:"2"
},
{
	jid:"96",
	pid:"295",
	msg:"1"
},
{
	jid:"96",
	pid:"296",
	msg:"0"
},
{
	jid:"96",
	pid:"297",
	msg:"3"
},
{
	jid:"96",
	pid:"298",
	msg:"3"
},
{
	jid:"96",
	pid:"299",
	msg:"1"
},
{
	jid:"96",
	pid:"300",
	msg:"1"
},
{
	jid:"96",
	pid:"301",
	msg:"0,1,2,3"
},
{
	jid:"96",
	pid:"302",
	msg:"0,1,2,3"
},
{
	jid:"96",
	pid:"303",
	msg:"0,1,2"
},
{
	jid:"96",
	pid:"304",
	msg:"0,1,3"
},
{
	jid:"96",
	pid:"305",
	msg:"0,1,2"
},
{
	jid:"96",
	pid:"306",
	msg:"0,1,2"
},
{
	jid:"96",
	pid:"307",
	msg:"1"
},
{
	jid:"96",
	pid:"308",
	msg:"1"
},
{
	jid:"96",
	pid:"309",
	msg:"1"
},
{
	jid:"96",
	pid:"310",
	msg:"0"
},
{
	jid:"97",
	pid:"311",
	msg:"2"
},
{
	jid:"97",
	pid:"312",
	msg:"2"
},
{
	jid:"97",
	pid:"313",
	msg:"3"
},
{
	jid:"97",
	pid:"314",
	msg:"0"
},
{
	jid:"97",
	pid:"315",
	msg:"3"
},
{
	jid:"97",
	pid:"316",
	msg:"0"
},
{
	jid:"97",
	pid:"317",
	msg:"2"
},
{
	jid:"97",
	pid:"318",
	msg:"0"
},
{
	jid:"97",
	pid:"319",
	msg:"3"
},
{
	jid:"97",
	pid:"320",
	msg:"2"
},
{
	jid:"97",
	pid:"321",
	msg:"3"
},
{
	jid:"97",
	pid:"322",
	msg:"2"
},
{
	jid:"97",
	pid:"323",
	msg:"2"
},
{
	jid:"97",
	pid:"324",
	msg:"0,1,3"
},
{
	jid:"97",
	pid:"325",
	msg:"0,1,2,3"
},
{
	jid:"97",
	pid:"326",
	msg:"1,2,3"
},
{
	jid:"97",
	pid:"327",
	msg:"0,1,2"
},
{
	jid:"97",
	pid:"328",
	msg:"0"
},
{
	jid:"98",
	pid:"329",
	msg:"2"
},
{
	jid:"98",
	pid:"330",
	msg:"0"
},
{
	jid:"98",
	pid:"331",
	msg:"1"
},
{
	jid:"98",
	pid:"332",
	msg:"1"
},
{
	jid:"98",
	pid:"333",
	msg:"1"
},
{
	jid:"98",
	pid:"334",
	msg:"0"
},
{
	jid:"98",
	pid:"335",
	msg:"0"
},
{
	jid:"98",
	pid:"336",
	msg:"3"
},
{
	jid:"98",
	pid:"337",
	msg:"3"
},
{
	jid:"98",
	pid:"338",
	msg:"2"
},
{
	jid:"98",
	pid:"339",
	msg:"3"
},
{
	jid:"98",
	pid:"340",
	msg:"3"
},
{
	jid:"98",
	pid:"341",
	msg:"2"
},
{
	jid:"98",
	pid:"342",
	msg:"0"
},
{
	jid:"98",
	pid:"343",
	msg:"2"
},
{
	jid:"98",
	pid:"344",
	msg:"3"
},
{
	jid:"98",
	pid:"345",
	msg:"2"
},
{
	jid:"98",
	pid:"346",
	msg:"2"
},
{
	jid:"98",
	pid:"347",
	msg:"1"
},
{
	jid:"98",
	pid:"348",
	msg:"0"
},
{
	jid:"98",
	pid:"349",
	msg:"0,2"
},
{
	jid:"98",
	pid:"350",
	msg:"0,1,2"
},
{
	jid:"98",
	pid:"351",
	msg:"0,1,2"
},
{
	jid:"98",
	pid:"352",
	msg:"1,3"
},
{
	jid:"98",
	pid:"353",
	msg:"2,3"
},
{
	jid:"98",
	pid:"354",
	msg:"0,1,2,3"
},
{
	jid:"98",
	pid:"355",
	msg:"0,3"
},
{
	jid:"98",
	pid:"356",
	msg:"0,1,2,3"
},
{
	jid:"98",
	pid:"357",
	msg:"0,3"
},
{
	jid:"98",
	pid:"358",
	msg:"1"
},
{
	jid:"98",
	pid:"359",
	msg:"1"
},
{
	jid:"98",
	pid:"360",
	msg:"1"
},
{
	jid:"98",
	pid:"361",
	msg:"1"
},
{
	jid:"98",
	pid:"362",
	msg:"1"
},
{
	jid:"98",
	pid:"363",
	msg:"0"
},
{
	jid:"98",
	pid:"364",
	msg:"1"
},
{
	jid:"98",
	pid:"365",
	msg:"1"
},
{
	jid:"98",
	pid:"366",
	msg:"1"
},
{
	jid:"98",
	pid:"367",
	msg:"1"
},
{
	jid:"99",
	pid:"368",
	msg:"3"
},
{
	jid:"99",
	pid:"369",
	msg:"0"
},
{
	jid:"99",
	pid:"370",
	msg:"1"
},
{
	jid:"99",
	pid:"371",
	msg:"1"
},
{
	jid:"99",
	pid:"372",
	msg:"2"
},
{
	jid:"99",
	pid:"373",
	msg:"1"
},
{
	jid:"99",
	pid:"374",
	msg:"0"
},
{
	jid:"99",
	pid:"375",
	msg:"2"
},
{
	jid:"99",
	pid:"376",
	msg:"1"
},
{
	jid:"99",
	pid:"377",
	msg:"1"
},
{
	jid:"99",
	pid:"378",
	msg:"2"
},
{
	jid:"99",
	pid:"380",
	msg:"3"
},
{
	jid:"99",
	pid:"381",
	msg:"0"
},
{
	jid:"99",
	pid:"382",
	msg:"3"
},
{
	jid:"99",
	pid:"383",
	msg:"2,3"
},
{
	jid:"99",
	pid:"384",
	msg:"0,1,2,3"
},
{
	jid:"99",
	pid:"385",
	msg:"0,1,3"
},
{
	jid:"99",
	pid:"386",
	msg:"2,3"
},
{
	jid:"99",
	pid:"387",
	msg:"0,1,2,3"
},
{
	jid:"99",
	pid:"388",
	msg:"0,1"
},
{
	jid:"99",
	pid:"389",
	msg:"1"
},
{
	jid:"99",
	pid:"390",
	msg:"0"
},
{
	jid:"99",
	pid:"391",
	msg:"1"
},
{
	jid:"99",
	pid:"392",
	msg:"1"
},
{
	jid:"99",
	pid:"393",
	msg:"1"
},
{
	jid:"99",
	pid:"394",
	msg:"1"
},
{
	jid:"100",
	pid:"395",
	msg:"2"
},
{
	jid:"100",
	pid:"396",
	msg:"2"
},
{
	jid:"100",
	pid:"397",
	msg:"0,1,2,3,4"
},
{
	jid:"100",
	pid:"398",
	msg:"1,2,3"
},
{
	jid:"100",
	pid:"399",
	msg:"1"
},
{
	jid:"100",
	pid:"400",
	msg:"0"
},
{
	jid:"100",
	pid:"401",
	msg:"1"
},
{
	jid:"100",
	pid:"402",
	msg:"1"
},
{
	jid:"122",
	pid:"403",
	msg:"0"
},
{
	jid:"122",
	pid:"404",
	msg:"1"
},
{
	jid:"122",
	pid:"405",
	msg:"0"
},
{
	jid:"122",
	pid:"406",
	msg:"0"
},
{
	jid:"122",
	pid:"407",
	msg:"1"
},
{
	jid:"122",
	pid:"408",
	msg:"1"
},
{
	jid:"122",
	pid:"409",
	msg:"1"
},
{
	jid:"122",
	pid:"410",
	msg:"0"
},
{
	jid:"123",
	pid:"411",
	msg:"2"
},
{
	jid:"123",
	pid:"412",
	msg:"0"
},
{
	jid:"123",
	pid:"413",
	msg:"2"
},
{
	jid:"123",
	pid:"414",
	msg:"0"
},
{
	jid:"123",
	pid:"415",
	msg:"1"
},
{
	jid:"123",
	pid:"416",
	msg:"0"
},
{
	jid:"123",
	pid:"417",
	msg:"1"
},
{
	jid:"123",
	pid:"418",
	msg:"3"
},
{
	jid:"123",
	pid:"419",
	msg:"0,1,2,4"
},
{
	jid:"123",
	pid:"420",
	msg:"0,1,2"
},
{
	jid:"123",
	pid:"421",
	msg:"0,1,2,3"
},
{
	jid:"123",
	pid:"422",
	msg:"0,1,2"
},
{
	jid:"123",
	pid:"423",
	msg:"0,1"
},
{
	jid:"123",
	pid:"424",
	msg:"0,1,2,3"
},
{
	jid:"123",
	pid:"425",
	msg:"1,2"
},
{
	jid:"123",
	pid:"426",
	msg:"0"
},
{
	jid:"123",
	pid:"427",
	msg:"1"
},
{
	jid:"123",
	pid:"428",
	msg:"1"
},
{
	jid:"123",
	pid:"429",
	msg:"1"
},
{
	jid:"123",
	pid:"430",
	msg:"1"
},
{
	jid:"125",
	pid:"431",
	msg:"3"
},
{
	jid:"125",
	pid:"432",
	msg:"1"
},
{
	jid:"125",
	pid:"433",
	msg:"2"
},
{
	jid:"125",
	pid:"434",
	msg:"2"
},
{
	jid:"125",
	pid:"435",
	msg:"1"
},
{
	jid:"125",
	pid:"436",
	msg:"2"
},
{
	jid:"125",
	pid:"437",
	msg:"3"
},
{
	jid:"125",
	pid:"438",
	msg:"3"
},
{
	jid:"125",
	pid:"439",
	msg:"0"
},
{
	jid:"125",
	pid:"440",
	msg:"3"
},
{
	jid:"125",
	pid:"441",
	msg:"0"
},
{
	jid:"125",
	pid:"442",
	msg:"2"
},
{
	jid:"125",
	pid:"443",
	msg:"1"
},
{
	jid:"125",
	pid:"444",
	msg:"1"
},
{
	jid:"125",
	pid:"445",
	msg:"1"
},
{
	jid:"125",
	pid:"446",
	msg:"2"
},
{
	jid:"125",
	pid:"451",
	msg:"1"
},
{
	jid:"125",
	pid:"452",
	msg:"1"
},
{
	jid:"125",
	pid:"453",
	msg:"0,1,4"
},
{
	jid:"125",
	pid:"454",
	msg:"0,1,2"
},
{
	jid:"125",
	pid:"455",
	msg:"0,1,2"
},
{
	jid:"125",
	pid:"456",
	msg:"0"
},
{
	jid:"125",
	pid:"457",
	msg:"1"
},
{
	jid:"126",
	pid:"458",
	msg:"3"
},
{
	jid:"126",
	pid:"459",
	msg:"0,1,2,4"
},
{
	jid:"126",
	pid:"460",
	msg:"0,1,2,4"
},
{
	jid:"101",
	pid:"461",
	msg:"3"
},
{
	jid:"101",
	pid:"462",
	msg:"2"
},
{
	jid:"101",
	pid:"463",
	msg:"1"
},
{
	jid:"101",
	pid:"464",
	msg:"0"
},
{
	jid:"101",
	pid:"465",
	msg:"3"
},
{
	jid:"101",
	pid:"466",
	msg:"2"
},
{
	jid:"101",
	pid:"467",
	msg:"2"
},
{
	jid:"101",
	pid:"468",
	msg:"0,1,3"
},
{
	jid:"101",
	pid:"469",
	msg:"0,3"
},
{
	jid:"101",
	pid:"470",
	msg:"0,1,2"
},
{
	jid:"101",
	pid:"472",
	msg:"0,1,2,3"
},
{
	jid:"101",
	pid:"473",
	msg:"0,2,3,4"
},
{
	jid:"101",
	pid:"474",
	msg:"0,1,2"
},
{
	jid:"101",
	pid:"481",
	msg:"0,1,3"
},
{
	jid:"101",
	pid:"475",
	msg:"1"
},
{
	jid:"101",
	pid:"476",
	msg:"0"
},
{
	jid:"101",
	pid:"477",
	msg:"1"
},
{
	jid:"101",
	pid:"478",
	msg:"1"
},
{
	jid:"101",
	pid:"479",
	msg:"1"
},
{
	jid:"101",
	pid:"480",
	msg:"1"
},
{
	jid:"102",
	pid:"482",
	msg:"1"
},
{
	jid:"102",
	pid:"483",
	msg:"2"
},
{
	jid:"102",
	pid:"484",
	msg:"3"
},
{
	jid:"102",
	pid:"485",
	msg:"3"
},
{
	jid:"102",
	pid:"486",
	msg:"0"
},
{
	jid:"102",
	pid:"487",
	msg:"0"
},
{
	jid:"102",
	pid:"488",
	msg:"2"
},
{
	jid:"102",
	pid:"489",
	msg:"3"
},
{
	jid:"102",
	pid:"490",
	msg:"1"
},
{
	jid:"102",
	pid:"491",
	msg:"0"
},
{
	jid:"102",
	pid:"492",
	msg:"0"
},
{
	jid:"102",
	pid:"493",
	msg:"0,1,2,3"
},
{
	jid:"102",
	pid:"494",
	msg:"0,1,2,3"
},
{
	jid:"102",
	pid:"495",
	msg:"0,3"
},
{
	jid:"102",
	pid:"496",
	msg:"1,2,3,4"
},
{
	jid:"102",
	pid:"497",
	msg:"0,1,2,3"
},
{
	jid:"102",
	pid:"498",
	msg:"1"
},
{
	jid:"102",
	pid:"499",
	msg:"0"
},
{
	jid:"102",
	pid:"500",
	msg:"1"
},
{
	jid:"102",
	pid:"501",
	msg:"0"
},
{
	jid:"103",
	pid:"502",
	msg:"0"
},
{
	jid:"103",
	pid:"503",
	msg:"1"
},
{
	jid:"104",
	pid:"504",
	msg:"3"
},
{
	jid:"104",
	pid:"505",
	msg:"1"
},
{
	jid:"104",
	pid:"506",
	msg:"1"
},
{
	jid:"104",
	pid:"507",
	msg:"2"
},
{
	jid:"104",
	pid:"508",
	msg:"2"
},
{
	jid:"104",
	pid:"509",
	msg:"3"
},
{
	jid:"104",
	pid:"510",
	msg:"2"
},
{
	jid:"104",
	pid:"510",
	msg:"2"
},
{
	jid:"104",
	pid:"511",
	msg:"0,1"
},
{
	jid:"104",
	pid:"512",
	msg:"0,2,3"
},
{
	jid:"104",
	pid:"513",
	msg:"0"
},
{
	jid:"104",
	pid:"514",
	msg:"1"
},
{
	jid:"104",
	pid:"515",
	msg:"0"
},
{
	jid:"104",
	pid:"516",
	msg:"1"
},
{
	jid:"104",
	pid:"517",
	msg:"1"
},
{
	jid:"104",
	pid:"517",
	msg:"1"
},
{
	jid:"117",
	pid:"518",
	msg:"0"
},
{
	jid:"117",
	pid:"519",
	msg:"0"
},
{
	jid:"117",
	pid:"520",
	msg:"1"
},
{
	jid:"117",
	pid:"521",
	msg:"3"
},
{
	jid:"117",
	pid:"522",
	msg:"1"
},
{
	jid:"117",
	pid:"523",
	msg:"3"
},
{
	jid:"117",
	pid:"524",
	msg:"1"
},
{
	jid:"117",
	pid:"525",
	msg:"3"
},
{
	jid:"117",
	pid:"526",
	msg:"0"
},
{
	jid:"117",
	pid:"527",
	msg:"3"
},
{
	jid:"117",
	pid:"528",
	msg:"1"
},
{
	jid:"117",
	pid:"529",
	msg:"1"
},
{
	jid:"117",
	pid:"530",
	msg:"2"
},
{
	jid:"117",
	pid:"531",
	msg:"0"
},
{
	jid:"117",
	pid:"532",
	msg:"1"
},
{
	jid:"117",
	pid:"533",
	msg:"2"
},
{
	jid:"117",
	pid:"534",
	msg:"3"
},
{
	jid:"117",
	pid:"535",
	msg:"0,1,2,3"
},
{
	jid:"117",
	pid:"536",
	msg:"0,2"
},
{
	jid:"117",
	pid:"537",
	msg:"0,1"
},
{
	jid:"117",
	pid:"538",
	msg:"0,2"
},
{
	jid:"117",
	pid:"539",
	msg:"2,3"
},
{
	jid:"117",
	pid:"540",
	msg:"0,2,3"
},
{
	jid:"117",
	pid:"541",
	msg:"0,3"
},
{
	jid:"117",
	pid:"542",
	msg:"0,1,3"
},
{
	jid:"117",
	pid:"543",
	msg:"1,2,3"
},
{
	jid:"117",
	pid:"544",
	msg:"0,1,3"
},
{
	jid:"117",
	pid:"545",
	msg:"1"
},
{
	jid:"117",
	pid:"546",
	msg:"0"
},

{
	jid:"117",
	pid:"547",
	msg:"1"
},
{
	jid:"117",
	pid:"548",
	msg:"0"
},
{
	jid:"117",
	pid:"549",
	msg:"0"
},
{
	jid:"117",
	pid:"550",
	msg:"0"
},
{
	jid:"117",
	pid:"551",
	msg:"1"
},
{
	jid:"117",
	pid:"552",
	msg:"0"
},
{
	jid:"117",
	pid:"553",
	msg:"1"
},
{
	jid:"117",
	pid:"554",
	msg:"0"
},
{
	jid:"117",
	pid:"555",
	msg:"1"
},
{
	jid:"105",
	pid:"556",
	msg:"2"
},
{
	jid:"105",
	pid:"557",
	msg:"2"
},
{
	jid:"105",
	pid:"558",
	msg:"2"
},
{
	jid:"105",
	pid:"559",
	msg:"0"
},
{
	jid:"105",
	pid:"560",
	msg:"1"
},
{
	jid:"105",
	pid:"561",
	msg:"1"
},
{
	jid:"105",
	pid:"562",
	msg:"2"
},
{
	jid:"105",
	pid:"563",
	msg:"0,1,3"
},
{
	jid:"105",
	pid:"564",
	msg:"0,1,2,3,4"
},
{
	jid:"105",
	pid:"565",
	msg:"0,2,3"
},
{
	jid:"105",
	pid:"566",
	msg:"0,1,2,3,4"
},
{
	jid:"105",
	pid:"567",
	msg:"0,3,4"
},
{
	jid:"105",
	pid:"568",
	msg:"0,1,3"
},
{
	jid:"105",
	pid:"570",
	msg:"0"
},
{
	jid:"105",
	pid:"571",
	msg:"1"
},
{
	jid:"106",
	pid:"572",
	msg:"0"
},
{
	jid:"106",
	pid:"573",
	msg:"2"
},
{
	jid:"106",
	pid:"574",
	msg:"2"
},
{
	jid:"106",
	pid:"575",
	msg:"3"
},
{
	jid:"106",
	pid:"576",
	msg:"3"
},
{
	jid:"106",
	pid:"577",
	msg:"3"
},
{
	jid:"106",
	pid:"578",
	msg:"2"
},
{
	jid:"106",
	pid:"579",
	msg:"0"
},
{
	jid:"106",
	pid:"580",
	msg:"0"
},
{
	jid:"106",
	pid:"581",
	msg:"1"
},
{
	jid:"106",
	pid:"582",
	msg:"1"
},
{
	jid:"106",
	pid:"583",
	msg:"3"
},
{
	jid:"106",
	pid:"584",
	msg:"2"
},
{
	jid:"106",
	pid:"585",
	msg:"1"
},
{
	jid:"106",
	pid:"586",
	msg:"0"
},
{
	jid:"106",
	pid:"587",
	msg:"3"
},
{
	jid:"106",
	pid:"588",
	msg:"0,2,3,4"
},
{
	jid:"106",
	pid:"589",
	msg:"0,1,2"
},
{
	jid:"106",
	pid:"590",
	msg:"0,1,2"
},
{
	jid:"106",
	pid:"591",
	msg:"0,1,2"
},
{
	jid:"106",
	pid:"592",
	msg:"0,1,2,3"
},
{
	jid:"106",
	pid:"593",
	msg:"0,1,2,3"
},
{
	jid:"106",
	pid:"594",
	msg:"0,1,2,3"
},
{
	jid:"106",
	pid:"595",
	msg:"0,1,2"
},
{
	jid:"106",
	pid:"596",
	msg:"0"
},
{
	jid:"107",
	pid:"597",
	msg:"0"
},
{
	jid:"107",
	pid:"598",
	msg:"0"
},
{
	jid:"107",
	pid:"599",
	msg:"2"
},
{
	jid:"107",
	pid:"600",
	msg:"2"
},
{
	jid:"107",
	pid:"601",
	msg:"0"
},
{
	jid:"107",
	pid:"602",
	msg:"2,3,4"
},
{
	jid:"107",
	pid:"603",
	msg:"3,4"
},
{
	jid:"107",
	pid:"604",
	msg:"0,1,2,3,4"
},
{
	jid:"107",
	pid:"605",
	msg:"0,1,2,4"
},
{
	jid:"107",
	pid:"606",
	msg:"0"
},
{
	jid:"107",
	pid:"607",
	msg:"1"
},
{
	jid:"107",
	pid:"608",
	msg:"1"
},
{
	jid:"107",
	pid:"609",
	msg:"1"
},
{
	jid:"107",
	pid:"610",
	msg:"0"
},
{
	jid:"107",
	pid:"611",
	msg:"0"
},
{
	jid:"107",
	pid:"612",
	msg:"1"
},
{
	jid:"107",
	pid:"613",
	msg:"0"
},
{
	jid:"107",
	pid:"614",
	msg:"1"
},
{
	jid:"107",
	pid:"615",
	msg:"0"
},
{
	jid:"107",
	pid:"616",
	msg:"1"
},
{
	jid:"107",
	pid:"617",
	msg:"1"
},
//第九章第一节
{
	jid:"108",
	pid:"618",
	msg:"1"
},
{
	jid:"108",
	pid:"619",
	msg:"2"
},
{
	jid:"108",
	pid:"620",
	msg:"0"
},
{
	jid:"108",
	pid:"621",
	msg:"2"
},
{
	jid:"108",
	pid:"622",
	msg:"1"
},

{
	jid:"108",
	pid:"623",
	msg:"3"
},
{
	jid:"108",
	pid:"624",
	msg:"3"
},
{
	jid:"108",
	pid:"625",
	msg:"2"
},
{
	jid:"108",
	pid:"626",
	msg:"0"
},
{
	jid:"108",
	pid:"627",
	msg:"1"
},

{
	jid:"108",
	pid:"628",
	msg:"2"
},
{
	jid:"108",
	pid:"629",
	msg:"3"
},
{
	jid:"108",
	pid:"630",
	msg:"3"
},
{
	jid:"108",
	pid:"631",
	msg:"2"
},
{
	jid:"108",
	pid:"632",
	msg:"2"
},

{
	jid:"108",
	pid:"633",
	msg:"1"
},
{
	jid:"108",
	pid:"634",
	msg:"2"
},
{
	jid:"108",
	pid:"635",
	msg:"3"
},
{
	jid:"108",
	pid:"636",
	msg:"2"
},
{
	jid:"108",
	pid:"637",
	msg:"1"
},

{
	jid:"108",
	pid:"638",
	msg:"0,1,3"
},
{
	jid:"108",
	pid:"639",
	msg:"2,3"
},
{
	jid:"108",
	pid:"640",
	msg:"0,1,3"
},
{
	jid:"108",
	pid:"641",
	msg:"0,3"
},
{
	jid:"108",
	pid:"642",
	msg:"0,1,2,3"
},

{
	jid:"108",
	pid:"643",
	msg:"0,1,2,3"
},
{
	jid:"108",
	pid:"644",
	msg:"2,3"
},
{
	jid:"108",
	pid:"645",
	msg:"2,3"
},
{
	jid:"108",
	pid:"646",
	msg:"0,1,2,3"
},
{
	jid:"108",
	pid:"647",
	msg:"1"
},

{
	jid:"108",
	pid:"648",
	msg:"1"
},
{
	jid:"108",
	pid:"649",
	msg:"1"
},
{
	jid:"108",
	pid:"650",
	msg:"1"
},
{
	jid:"108",
	pid:"651",
	msg:"1"
},
{
	jid:"108",
	pid:"652",
	msg:"1"
},
//第九章第二节
{
	jid:"109",
	pid:"653",
	msg:"0"
},
{
	jid:"109",
	pid:"654",
	msg:"0"
},
{
	jid:"109",
	pid:"655",
	msg:"1"
},
{
	jid:"109",
	pid:"656",
	msg:"3"
},
{
	jid:"109",
	pid:"657",
	msg:"3"
},

{
	jid:"109",
	pid:"658",
	msg:"0"
},
{
	jid:"109",
	pid:"659",
	msg:"1"
},
{
	jid:"109",
	pid:"660",
	msg:"1"
},
{
	jid:"109",
	pid:"661",
	msg:"3"
},
{
	jid:"109",
	pid:"662",
	msg:"3"
},

{
	jid:"109",
	pid:"663",
	msg:"0,1,2,3"
},
{
	jid:"109",
	pid:"664",
	msg:"0,1,2,3"
},
{
	jid:"109",
	pid:"665",
	msg:"0,1,2"
},
{
	jid:"109",
	pid:"666",
	msg:"0,1,2,3"
},
{
	jid:"109",
	pid:"667",
	msg:"0,1,2,3"
},

{
	jid:"109",
	pid:"668",
	msg:"0,1,2,3"
},
{
	jid:"109",
	pid:"669",
	msg:"1"
},
{
	jid:"109",
	pid:"670",
	msg:"1"
},
//第九章第三节
{
	jid:"110",
	pid:"671",
	msg:"1"
},
{
	jid:"110",
	pid:"672",
	msg:"1"
},
{
	jid:"110",
	pid:"673",
	msg:"1"
},
//第十章第一节
{
	jid:"111",
	pid:"674",
	msg:"1"
},
{
	jid:"111",
	pid:"675",
	msg:"2"
},
{
	jid:"111",
	pid:"676",
	msg:"1"
},
{
	jid:"111",
	pid:"677",
	msg:"1"
},
{
	jid:"111",
	pid:"678",
	msg:"1"
},

{
	jid:"111",
	pid:"679",
	msg:"2"
},
{
	jid:"111",
	pid:"680",
	msg:"0"
},
{
	jid:"111",
	pid:"681",
	msg:"3"
},
{
	jid:"111",
	pid:"682",
	msg:"0"
},
{
	jid:"111",
	pid:"683",
	msg:"1"
},

{
	jid:"111",
	pid:"684",
	msg:"2"
},
{
	jid:"111",
	pid:"685",
	msg:"0,1,2"
},
{
	jid:"111",
	pid:"686",
	msg:"0,2,4"
},
{
	jid:"111",
	pid:"687",
	msg:"0,1,2,3"
},
{
	jid:"111",
	pid:"688",
	msg:"0,1,2,4"
},

{
	jid:"111",
	pid:"689",
	msg:"0,1,3,4"
},
{
	jid:"111",
	pid:"690",
	msg:"0,1,2,3,4"
},
{
	jid:"111",
	pid:"691",
	msg:"0,1,2"
},
{
	jid:"111",
	pid:"692",
	msg:"0,1,2,3"
},
{
	jid:"111",
	pid:"693",
	msg:"0,1,2,3"
},

{
	jid:"111",
	pid:"694",
	msg:"1"
},
{
	jid:"111",
	pid:"695",
	msg:"1"
},
{
	jid:"111",
	pid:"696",
	msg:"0"
},
{
	jid:"111",
	pid:"697",
	msg:"0"
},
//第十章第二节
{
	jid:"112",
	pid:"698",
	msg:"1"
},
{
	jid:"112",
	pid:"699",
	msg:"2"
},
{
	jid:"112",
	pid:"700",
	msg:"2"
},
{
	jid:"112",
	pid:"701",
	msg:"2"
},
{
	jid:"112",
	pid:"702",
	msg:"2"
},

{
	jid:"112",
	pid:"703",
	msg:"0"
},
{
	jid:"112",
	pid:"704",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"705",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"706",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"707",
	msg:"0,2,3"
},

{
	jid:"112",
	pid:"708",
	msg:"0,1,2"
},
{
	jid:"112",
	pid:"709",
	msg:"0,1,2"
},
{
	jid:"112",
	pid:"710",
	msg:"0,3"
},
{
	jid:"112",
	pid:"711",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"712",
	msg:"0,1,2"
},

{
	jid:"112",
	pid:"713",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"714",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"715",
	msg:"0,1,2,3"
},
{
	jid:"112",
	pid:"716",
	msg:"1"
},
{
	jid:"112",
	pid:"717",
	msg:"1"
},

{
	jid:"112",
	pid:"718",
	msg:"1"
},
{
	jid:"112",
	pid:"720",
	msg:"0"
},
{
	jid:"112",
	pid:"721",
	msg:"0"
},
{
	jid:"112",
	pid:"722",
	msg:"1"
},
{
	jid:"112",
	pid:"723",
	msg:"1"
},
//第十章第三节
{
	jid:"113",
	pid:"724",
	msg:"2"
},
{
	jid:"113",
	pid:"725",
	msg:"2"
},
{
	jid:"113",
	pid:"726",
	msg:"1"
},
{
	jid:"113",
	pid:"727",
	msg:"2"
},
{
	jid:"113",
	pid:"728",
	msg:"3"
},

{
	jid:"113",
	pid:"729",
	msg:"0"
},
{
	jid:"113",
	pid:"730",
	msg:"2"
},
{
	jid:"113",
	pid:"731",
	msg:"3"
},
{
	jid:"113",
	pid:"732",
	msg:"2"
},
{
	jid:"113",
	pid:"733",
	msg:"2"
},

{
	jid:"113",
	pid:"734",
	msg:"3"
},
{
	jid:"113",
	pid:"735",
	msg:"0,1,2,3"
},
{
	jid:"113",
	pid:"736",
	msg:"0,4"
},
{
	jid:"113",
	pid:"737",
	msg:"0,1,2"
},
{
	jid:"113",
	pid:"738",
	msg:"0"
},
//第十章第四节
{
	jid:"114",
	pid:"739",
	msg:"1"
},
{
	jid:"114",
	pid:"740",
	msg:"3"
},
{
	jid:"114",
	pid:"741",
	msg:"0,1,2"
},
{
	jid:"114",
	pid:"742",
	msg:"0"
},
{
	jid:"114",
	pid:"743",
	msg:"0"
},

{
	jid:"114",
	pid:"744",
	msg:"1"
},
//第十章第五节没有题~~么么哒~~
]
//自动答题
//将此部分与上面数据一同粘贴使用

//！！答题结束可能会有部分题遗漏，请自行答题补上，否则可能出现bug（亲测T.T）！！
var ans_len = ans.length;
var i = 0;
function doCommonReturn(data){
	var flag=data["flag"];
	if(flag!==1){
	// 	parent.reloadAjax();
	// 	parent.showSuccess();
	// 	try{
	// 		parent.atPageClose();
	// 	}catch(e){}
	// 	return;
	// }else{
		var msg=getCommonMsg(flag);
		// parent.atInfo(msg);
		console.log(msg);
	}
	else{
		console.log('success');	
		// parent.reloadAjax();
		// parent.atPageClose();
	}
	
	i++;
	sub_ans();
}
function sub_ans(){
	
	if(i<ans_len){
		ans[i]['bid'] = 3;
		// setTimeout(function(){
			submitDot(ans[i],"doSubmitWkXt","doCommonReturn");
			// i++;
			// sub_ans();
		// },100)
	}
	else{
		alert("答题完成");
	}
};
sub_ans();



//挂学习时间
//使用其他两部分前先挂好学习时间
//默认三节同时挂，每节挂7分钟，所以挂下来时间有点长
//部分章节学习时间超过7分钟，自行挂满，输入以下两行脚本后可不必停留在本页
window.onblur = null;
bookrunflag = 1;
//
//
var t1 = new Date();
var param=new Object();
param["bid"]=3;
var jids = [[3,4,7],[5,6,8],[92,93,94],[69,90,91],[116,118,119],[95,96,97],[98,99,100],[122,123,125],[126,101,102],[103,104,117],[120,121,105],[106,107,108],[109,110,111],[112,113,114,115]];
var j = 0;
var len = jids.length;
function sub(){
	var t2 = new Date();
	if((t2-t1)/1000/60 >7){
		if(j<len){
			j++;
			t1 = t2;
		}
		else{
			clearInterval(time);
			alrt('学习结束');
		}
	}
	for(var i =0;i<jids[j].length;i++){
		param['jid'] = jids[j][i];
		submitCommon(param,"getWkOnlineNum","doGetWkOnlineNum");
	}	
}
// jids = [3,4,7]
time = setInterval("sub()",15000);



//自动媒体评价
var start = 57;
var end = 505;
var i = start;
function doWkMediaPj(data){
	var flag=data["flag"];
	if(flag!==1){
	// 	location.reload();
	// 	parent.reloadAjax();
	// 	return;
	// }else{
		var msg=getCommonMsg(flag);
		// parent.atInfo(msg);
		console.log(msg);
		
	}
	else{
		console.log('success');
	}
	i++
	sub_med();		
}
function sub_med(){
	if(i < end){
		// setTimeout(function(){
			var param=new Object();
			param["id"]=i;
			param["type"]=3;
			submitDot(param,"doWkMediaPj","doWkMediaPj");
			// i++;
			// sub_med();
		// },100);
	}
	else{
		alert('评价完成')
	}
};
sub_med();


