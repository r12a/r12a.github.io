// round information tables
var roundInfo = new Object();
var roundData = new Object();
var handicapscores = new Object();


// Portsmouth
roundData.p = new Array();
roundData.plb = new Array();
roundData.pbb = new Array();

roundInfo.p = new Object();
roundInfo.p.name = "p";
roundInfo.p.hcTable = "p";
roundInfo.p.fullname = "Portsmouth (recurve)";
roundInfo.p.rounds = 1;
roundInfo.p.description = 'm;5,18.288,60';
roundInfo.p.array = roundData.p;
roundInfo.p.type = 'irc';
roundInfo.p.classifications = [];
roundInfo.p.eqclass = [432,484,514,545,569]; // gents
//roundInfo.p.eqclass = [370,439,484,527,554]; // ladies

roundInfo.plb = new Object();
roundInfo.plb.name = "plb";
roundInfo.plb.hcTable = "p";
roundInfo.plb.fullname = "Portsmouth (longbow)";
roundInfo.plb.rounds = 1;
roundInfo.plb.description = 'm;5,18.288,60';
roundInfo.plb.array = roundData.plb;
roundInfo.plb.type = 'ilb';
roundInfo.plb.classifications = [];
roundInfo.plb.eqclass = [268,327,370,416,453]; // gents
//roundInfo.p.eqclass = [172,,280,315,370,398]; // ladies


roundInfo.pbb = new Object();
roundInfo.pbb.name = "pbb";
roundInfo.pbb.hcTable = "p";
roundInfo.pbb.fullname = "Portsmouth (barebow)";
roundInfo.pbb.rounds = 1;
roundInfo.pbb.description = 'm;5,18.288,60';
roundInfo.pbb.array = roundData.pbb;
roundInfo.pbb.type = 'ibb';
roundInfo.pbb.classifications = [];
roundInfo.pbb.eqclass = [304,380,446,490,510]; // gents
//roundInfo.p.eqclass = [219,304,380,439,479]; // ladies

handicapscores.p = new Array(); 


// Frostbite
roundData.f = new Array();
roundData.flb = new Array();
roundData.fbb = new Array();

roundInfo.f = new Object();
roundInfo.f.name = "f";
roundInfo.f.hcTable = "f";
roundInfo.f.fullname = "Frostbite (recurve)";
roundInfo.f.rounds = 1;
roundInfo.f.description = 'm;3,30,80';
roundInfo.f.array = roundData.f;
roundInfo.f.type = 'irc';
roundInfo.f.classifications = [];
roundInfo.f.eqclass = [222,265,289,312,331]; // gents
//roundInfo.f.eqclass = [172,228,265,298,319]; // ladies

roundInfo.flb = new Object();
roundInfo.flb.name = "flb";
roundInfo.flb.hcTable = "f";
roundInfo.flb.fullname = "Frostbite (longbow)";
roundInfo.flb.rounds = 1;
roundInfo.flb.description = 'm;3,30,80';
roundInfo.flb.array = roundData.flb;
roundInfo.flb.type = 'ilb';
roundInfo.flb.classifications = [];
roundInfo.flb.eqclass = [102,141,172,209,240]; // gents
//roundInfo.flb.eqclass = [52,110,133,172,195]; // ladies

roundInfo.fbb = new Object();
roundInfo.fbb.name = "fbb";
roundInfo.fbb.hcTable = "f";
roundInfo.fbb.fullname = "Frostbite (barebow)";
roundInfo.fbb.rounds = 1;
roundInfo.fbb.description = 'm;3,30,80';
roundInfo.fbb.array = roundData.fbb;
roundInfo.fbb.type = 'ibb';
roundInfo.fbb.classifications = [];
roundInfo.fbb.eqclass = [125,180,234,269,285]; // gents
//roundInfo.fbb.eqclass = [75,125,180,228,260]; // ladies

handicapscores.f = new Array(); 


// 252
roundData.tft = new Array();
roundData.tftlb = new Array();
roundData.tftbb = new Array();

roundInfo.tft = new Object();
roundInfo.tft.name = "tft";
roundInfo.tft.hcTable = "tft";
roundInfo.tft.fullname = "252 (recurve)";
roundInfo.tft.rounds = 1;
roundInfo.tft.description = 'i;3,0,122';
roundInfo.tft.array = roundData.tft;
roundInfo.tft.type = 'irc';
roundInfo.tft.classifications = [];
roundInfo.tft.eqclass = [252,252,252,252,252]; // gents
//roundInfo.tft.eqclass = [172,228,265,298,319]; // ladies

roundInfo.tftlb = new Object();
roundInfo.tftlb.name = "tftlb";
roundInfo.tftlb.hcTable = "tft";
roundInfo.tftlb.fullname = "252 (longbow)";
roundInfo.tftlb.rounds = 1;
roundInfo.tftlb.description = 'i;3,0,122';
roundInfo.tftlb.array = roundData.tftlb;
roundInfo.tftlb.type = 'ilb';
roundInfo.tftlb.classifications = [];
roundInfo.tftlb.eqclass = [160,160,160,160,160]; // gents
//roundInfo.tftlb.eqclass = [52,110,133,172,195]; // ladies

roundInfo.tftbb = new Object();
roundInfo.tftbb.name = "tftbb";
roundInfo.tftbb.hcTable = "tft";
roundInfo.tftbb.fullname = "252 (barebow)";
roundInfo.tftbb.rounds = 1;
roundInfo.tftbb.description = 'i;3,0,122';
roundInfo.tftbb.array = roundData.tftbb;
roundInfo.tftbb.type = 'ibb';
roundInfo.tftbb.classifications = [];
roundInfo.tftbb.eqclass = [182,182,182,182,182]; // gents
//roundInfo.tftbb.eqclass = [75,125,180,228,260]; // ladies

handicapscores.tft = new Array(); 


// Short metric
roundData.sm = new Array();
roundData.smlb = new Array();
roundData.smbb = new Array();

roundInfo.sm = new Object();
roundInfo.sm.name = "sm";
roundInfo.sm.hcTable = "sm";
roundInfo.sm.fullname = "Short Metric (recurve)";
roundInfo.sm.rounds = 2;
roundInfo.sm.description = 'm;3,50,80;3,30,80';
roundInfo.sm.array = roundData.sm;
roundInfo.sm.type = 'orc';
roundInfo.sm.classifications = [334];
// roundInfo.sm.classifications = [237,348]; // ladies
roundInfo.sm.eqclass = [334,441,507,575,628]; // gents
//roundInfo.sm.eqclass = [237,348,441,535,595]; // ladies


roundInfo.smlb = new Object();
roundInfo.smlb.name = "smlb";
roundInfo.smlb.hcTable = "sm";
roundInfo.smlb.fullname = "Short Metric (longbow)";
roundInfo.smlb.rounds = 2;
roundInfo.smlb.description = 'm;3,50,80;3,30,80';
roundInfo.smlb.array = roundData.smlb;
roundInfo.smlb.type = 'olb';
roundInfo.smlb.classifications = [127];
// roundInfo.smlb.classifications = [60,138]; // ladies
roundInfo.smlb.eqclass = [127,184,237,306,376]; // gents
//roundInfo.smlb.eqclass = [60,138,172,237,278]; // ladies


roundInfo.smbb = new Object();
roundInfo.smbb.name = "smbb";
roundInfo.smbb.hcTable = "sm";
roundInfo.smbb.fullname = "Short Metric (barebow)";
roundInfo.smbb.rounds = 2;
roundInfo.smbb.description = 'm;3,50,80;3,30,80';
roundInfo.smbb.array = roundData.smbb;
roundInfo.smbb.type = 'obb';
roundInfo.smbb.classifications = [127];
// roundInfo.smbb.classifications = [90,160]; // ladies
roundInfo.smbb.eqclass = [160,250,362,453,497]; // gents
//roundInfo.smbb.eqclass = [90,160,250,348,428]; // ladies

handicapscores.sm = new Array(); 


// Fita70
roundData.fita70 = new Array();
roundData.fita70lb = new Array();
roundData.fita70bb = new Array();

roundInfo.fita70 = new Object();
roundInfo.fita70.name = "fita70";
roundInfo.fita70.hcTable = "fita70";
roundInfo.fita70.fullname = "Fita70 (recurve)";
roundInfo.fita70.rounds = 1;
roundInfo.fita70.description = 'm;6,70,122';
roundInfo.fita70.array = roundData.fita70;
roundInfo.fita70.type = 'orc';
roundInfo.fita70.classifications = [197,340,437];
// roundInfo.fita70.classifications = [98,214,340,477]; // ladies
roundInfo.fita70.eqclass = [197,340,437,532,601]; // gents
//roundInfo.fita70.eqclass = [98,214,340,477,558]; // ladies


roundInfo.fita70lb = new Object();
roundInfo.fita70lb.name = "fita70lb";
roundInfo.fita70lb.hcTable = "fita70";
roundInfo.fita70lb.fullname = "Fita70 (longbow)";
roundInfo.fita70lb.rounds = 1;
roundInfo.fita70lb.description = 'm;6,70,122';
roundInfo.fita70lb.array = roundData.fita70lb;
roundInfo.fita70lb.type = 'olb';
roundInfo.fita70lb.classifications = [31,61,98];
// roundInfo.fita70lb.classifications = [9,35,53,98]; // ladies
roundInfo.fita70lb.eqclass = [31,61,98,165,249]; // gents
//roundInfo.fita70lb.eqclass = [9,35,53,98,136]; // ladies


roundInfo.fita70bb = new Object();
roundInfo.fita70bb.name = "fita70bb";
roundInfo.fita70bb.hcTable = "fita70";
roundInfo.fita70bb.fullname = "Fita70 (barebow)";
roundInfo.fita70bb.rounds = 1;
roundInfo.fita70bb.description = 'm;6,70,122';
roundInfo.fita70bb.array = roundData.fita70bb;
roundInfo.fita70bb.type = 'obb';
roundInfo.fita70bb.classifications = [47,110,232];
// roundInfo.fita70bb.classifications = [14,47,110,214]; // ladies
roundInfo.fita70bb.eqclass = [47,110,232,357,422]; // gents
//roundInfo.fita70bb.eqclass = [14,47,110,214,322]; // ladies

handicapscores.fita70 = new Array(); 


// Albion
roundData.albion = new Array();
roundData.albionlb = new Array();
roundData.albionbb = new Array();

roundInfo.albion = new Object();
roundInfo.albion.name = "albion";
roundInfo.albion.hcTable = "albion";
roundInfo.albion.fullname = "Albion (recurve)";
roundInfo.albion.rounds = 3;
roundInfo.albion.description = 'i;3,73.152,122;3,54.864,122;3,45.72,122';
roundInfo.albion.array = roundData.albion;
roundInfo.albion.type = 'orc';
roundInfo.albion.classifications = [412,590,700];
// roundInfo.albion.classifications = [257,435,590,746]; // ladies
roundInfo.albion.eqclass = [412,590,700,809,890]; // gents
//roundInfo.albion.eqclass = [257,435,590,746,840]; // ladies


roundInfo.albionlb = new Object();
roundInfo.albionlb.name = "albionlb";
roundInfo.albionlb.hcTable = "albion";
roundInfo.albionlb.fullname = "Albion (longbow)";
roundInfo.albionlb.rounds = 3;
roundInfo.albionlb.description = 'i;3,73.152,122;3,54.864,122;3,45.72,122';
roundInfo.albionlb.array = roundData.albionlb;
roundInfo.albionlb.type = 'olb';
roundInfo.albionlb.classifications = [108,181,257];
// roundInfo.albion.classifications = [40,121,165,257]; // ladies
roundInfo.albionlb.eqclass = [108,181,257,366,481]; // gents
//roundInfo.albionlb.eqclass = [40,121,165,257,321]; // ladies


roundInfo.albionbb = new Object();
roundInfo.albionbb.name = "albionbb";
roundInfo.albionbb.hcTable = "albion";
roundInfo.albionbb.fullname = "Albion (barebow)";
roundInfo.albionbb.rounds = 3;
roundInfo.albionbb.description = 'i;3,73.152,122;3,54.864,122;3,45.72,122';
roundInfo.albionbb.array = roundData.albionbb;
roundInfo.albionbb.type = 'obb';
roundInfo.albionbb.classifications = [149,278,458];
// roundInfo.albion.classifications = [67,149,278,435]; // ladies
roundInfo.albionbb.eqclass = [149,278,458,610,683]; // gents
//roundInfo.albionbb.eqclass = [67,149,278,435,569]; // ladies

handicapscores.albion = new Array(); 


// Long National
roundData.longnat = new Array();
roundData.longnatlb = new Array();
roundData.longnatbb = new Array();

roundInfo.longnat = new Object();
roundInfo.longnat.name = "longnat";
roundInfo.longnat.hcTable = "longnat";
roundInfo.longnat.fullname = "Long National (recurve)";
roundInfo.longnat.rounds = 2;
roundInfo.longnat.description = 'i;4,73.152,122;2,54.864,122';
roundInfo.longnat.array = roundData.longnat;
roundInfo.longnat.type = 'orc';
roundInfo.longnat.classifications = [202,330,418];
// roundInfo.longnat.classifications = [109,218,330,455]; // ladies
roundInfo.longnat.eqclass = [202,330,418,506,572]; // gents
//roundInfo.longnat.eqclass = [109,218,330,455,531]; // ladies


roundInfo.longnatlb = new Object();
roundInfo.longnatlb.name = "longnatlb";
roundInfo.longnatlb.hcTable = "longnat";
roundInfo.longnatlb.fullname = "Long National (longbow)";
roundInfo.longnatlb.rounds = 2;
roundInfo.longnatlb.description = 'i;4,73.152,122;2,54.864,122';
roundInfo.longnatlb.array = roundData.longnatlb;
roundInfo.longnatlb.type = 'olb';
roundInfo.longnatlb.classifications = [38,71,109];
// roundInfo.longnatlb.classifications = [12,43,63,109]; // ladies
roundInfo.longnatlb.eqclass = [38,71,109,173,234]; // gents
//roundInfo.longnatlb.eqclass = [12,43,63,109,145]; // ladies


roundInfo.longnatbb = new Object();
roundInfo.longnatbb.name = "longnatbb";
roundInfo.longnatbb.hcTable = "longnat";
roundInfo.longnatbb.fullname = "Long National (barebow)";
roundInfo.longnatbb.rounds = 2;
roundInfo.longnatbb.description = 'i;4,73.152,122;2,54.864,122';
roundInfo.longnatbb.array = roundData.longnatbb;
roundInfo.longnatbb.type = 'obb';
roundInfo.longnatbb.classifications = [56,121,234];
// roundInfo.longnatbb.classifications = [22,56,121,218]; // ladies
roundInfo.longnatbb.eqclass = [56,121,234,346,390]; // gents
//roundInfo.longnatbb.eqclass = [22,56,121,218,314]; // ladies

handicapscores.longnat = new Array(); 


// Windsor
roundData.windsor = new Array();
roundData.windsorlb = new Array();
roundData.windsorbb = new Array();

roundInfo.windsor = new Object();
roundInfo.windsor.name = "windsor";
roundInfo.windsor.hcTable = "windsor";
roundInfo.windsor.fullname = "Windsor (recurve)";
roundInfo.windsor.rounds = 3;
roundInfo.windsor.description = 'i;3,54.864,122;3,45.72,122;3,36.576,122';
roundInfo.windsor.array = roundData.windsor;
roundInfo.windsor.type = 'orc';
roundInfo.windsor.classifications = [563,713];
// roundInfo.windsor.classifications = [402,584,713]; // ladies
roundInfo.windsor.eqclass = [563,713,795,873,931]; // gents
//roundInfo.windsor.eqclass = [402,584,713,828,895]; // ladies


roundInfo.windsorlb = new Object();
roundInfo.windsorlb.name = "windsorlb";
roundInfo.windsorlb.hcTable = "windsor";
roundInfo.windsorlb.fullname = "Windsor (longbow)";
roundInfo.windsorlb.rounds = 3;
roundInfo.windsorlb.description = 'i;3,54.864,122;3,45.72,122;3,36.576,122';
roundInfo.windsorlb.array = roundData.windsorlb;
roundInfo.windsorlb.type = 'olb';
roundInfo.windsorlb.classifications = [206,310];
// roundInfo.windsorlb.classifications = [89,225,287]; // ladies
roundInfo.windsorlb.eqclass = [206,310,402,519,625]; // gents
//roundInfo.windsorlb.eqclass = [89,225,287,402,473]; // ladies


roundInfo.windsorbb = new Object();
roundInfo.windsorbb.name = "windsorbb";
roundInfo.windsorbb.hcTable = "windsor";
roundInfo.windsorbb.fullname = "Windsor (barebow)";
roundInfo.windsorbb.rounds = 3;
roundInfo.windsorbb.description = 'i;3,54.864,122;3,45.72,122;3,36.576,122';
roundInfo.windsorbb.array = roundData.windsorbb;
roundInfo.windsorbb.type = 'obb';
roundInfo.windsorbb.classifications = [266,426];
// roundInfo.windsorbb.classifications = [140,266,426]; // ladies
roundInfo.windsorbb.eqclass = [266,426,605,728,783]; // gents
//roundInfo.windsorbb.eqclass = [140,266,426,584,697]; // ladies

handicapscores.windsor = new Array(); 


// National
roundData.nat = new Array();
roundData.natlb = new Array();
roundData.natbb = new Array();

roundInfo.nat = new Object();
roundInfo.nat.name = "nat";
roundInfo.nat.hcTable = "nat";
roundInfo.nat.fullname = "National (recurve)";
roundInfo.nat.rounds = 2;
roundInfo.nat.description = 'i;4,54.864,122;2,45.72,122';
roundInfo.nat.array = roundData.nat;
roundInfo.nat.type = 'orc';
roundInfo.nat.classifications = [319,436];
// roundInfo.nat.classifications = [205,336,436]; // ladies
roundInfo.nat.eqclass = [319,436,500,562,608]; // gents
//roundInfo.nat.eqclass = [205,336,436,526,579]; // ladies


roundInfo.natlb = new Object();
roundInfo.natlb.name = "natlb";
roundInfo.natlb.hcTable = "natlb";
roundInfo.natlb.fullname = "National (longbow)";
roundInfo.natlb.rounds = 2;
roundInfo.natlb.description = 'i;4,54.864,122;2,45.72,122';
roundInfo.natlb.array = roundData.natlb;
roundInfo.natlb.type = 'olb';
roundInfo.natlb.classifications = [88,146];
// roundInfo.natlb.classifications = [32,98,133]; // ladies
roundInfo.natlb.eqclass = [88,146,205,287,367]; // gents
//roundInfo.natlb.eqclass = [32,98,133,205,254]; // ladies


roundInfo.natbb = new Object();
roundInfo.natbb.name = "natbb";
roundInfo.natbb.hcTable = "natbb";
roundInfo.natbb.fullname = "National (barebow)";
roundInfo.natbb.rounds = 2;
roundInfo.natbb.description = 'i;4,54.864,122;2,45.72,122';
roundInfo.natbb.array = roundData.natbb;
roundInfo.natbb.type = 'obb';
roundInfo.natbb.classifications = [319,436];
// roundInfo.natbb.classifications = [55,121,221]; // ladies
roundInfo.natbb.eqclass = [121,221,351,448,491]; // gents
//roundInfo.natbb.eqclass = [55,121,221,336,423]; // ladies

handicapscores.nat = new Array(); 


// St George
roundData.stg = new Array();
roundData.stglb = new Array();
roundData.stgbb = new Array();

roundInfo.stg = new Object();
roundInfo.stg.name = "stg";
roundInfo.stg.hcTable = "stg";
roundInfo.stg.fullname = "St George (recurve)";
roundInfo.stg.rounds = 3;
roundInfo.stg.description = 'i;3,91.44,122;3,73.152,122;3,54.864,122';
roundInfo.stg.array = roundData.stg;
roundInfo.stg.type = 'orc';
roundInfo.stg.classifications = [265,442,575,721];
// roundInfo.stg.classifications = [142,286,442,635]; // ladies
roundInfo.stg.eqclass = [265,442,575,721,833]; // gents
//roundInfo.stg.eqclass = [142,286,442,635,764]; // ladies


roundInfo.stglb = new Object();
roundInfo.stglb.name = "stglb";
roundInfo.stglb.hcTable = "stg";
roundInfo.stglb.fullname = "St George (longbow)";
roundInfo.stglb.rounds = 3;
roundInfo.stglb.description = 'i;3,91.44,122;3,73.152,122;3,54.864,122';
roundInfo.stglb.array = roundData.stglb;
roundInfo.stglb.type = 'olb';
roundInfo.stglb.classifications = [50,92,142,226];
// roundInfo.stglb.classifications = [16,57,103,157]; // ladies
roundInfo.stglb.eqclass = [50,92,142,226,329]; // gents
//roundInfo.stglb.eqclass = [16,57,103,157,190]; // ladies


roundInfo.stgbb = new Object();
roundInfo.stgbb.name = "stgbb";
roundInfo.stgbb.hcTable = "stg";
roundInfo.stgbb.fullname = "St George (barebow)";
roundInfo.stgbb.rounds = 3;
roundInfo.stgbb.description = 'i;3,91.44,122;3,73.152,122;3,54.864,122';
roundInfo.stgbb.array = roundData.stgbb;
roundInfo.stgbb.type = 'obb';
roundInfo.stgbb.classifications = [73,157,307,456];
// roundInfo.stgbb.classifications = [29,73,157,286]; // ladies
roundInfo.stgbb.eqclass = [73,157,307,456,554]; // gents
//roundInfo.stgbb.eqclass = [29,73,157,286,419]; // ladies

handicapscores.stg = new Array(); 



// New Western
roundData.neww = new Array();
roundData.newwlb = new Array();
roundData.newwbb = new Array();

roundInfo.neww = new Object();
roundInfo.neww.name = "neww";
roundInfo.neww.hcTable = "neww";
roundInfo.neww.fullname = "New Western (recurve)";
roundInfo.neww.rounds = 2;
roundInfo.neww.description = 'i;4,91.44,122;4,73.152,122';
roundInfo.neww.array = roundData.neww;
roundInfo.neww.type = 'orc';
roundInfo.neww.classifications = [159,313,443,593];
// roundInfo.neww.classifications = [72,175,313,504]; // ladies
roundInfo.neww.eqclass = [159,313,443,593,710]; // gents
//roundInfo.neww.eqclass = [72,175,313,504,638]; // ladies


roundInfo.newwlb = new Object();
roundInfo.newwlb.name = "newwlb";
roundInfo.newwlb.hcTable = "neww";
roundInfo.newwlb.fullname = "New Western (longbow)";
roundInfo.newwlb.rounds = 2;
roundInfo.newwlb.description = 'i;4,91.44,122;4,73.152,122';
roundInfo.newwlb.array = roundData.newwlb;
roundInfo.newwlb.type = 'olb';
roundInfo.newwlb.classifications = [20,42,72,129];
// roundInfo.newwlb.classifications = [6,24,37,72]; // ladies
roundInfo.newwlb.eqclass = [20,42,72,129,211]; // gents
//roundInfo.newwlb.eqclass = [6,24,37,72,103]; // ladies


roundInfo.newwbb = new Object();
roundInfo.newwbb.name = "newwbb";
roundInfo.newwbb.hcTable = "neww";
roundInfo.newwbb.fullname = "New Western (barebow)";
roundInfo.newwbb.rounds = 2;
roundInfo.newwbb.description = 'i;4,91.44,122;4,73.152,122';
roundInfo.newwbb.array = roundData.newwbb;
roundInfo.newwbb.type = 'obb';
roundInfo.newwbb.classifications = [32,81,193,334];
// roundInfo.newwbb.classifications = [11,32,81,175]; // ladies
roundInfo.newwbb.eqclass = [32,81,193,334,422]; // gents
//roundInfo.newwbb.eqclass = [29,73,157,286,291]; // ladies

handicapscores.neww = new Array(); 



// New National
roundData.newn = new Array();
roundData.newnlb = new Array();
roundData.newnbb = new Array();

roundInfo.newn = new Object();
roundInfo.newn.name = "newn";
roundInfo.newn.hcTable = "newn";
roundInfo.newn.fullname = "New National (recurve)";
roundInfo.newn.rounds = 2;
roundInfo.newn.description = 'i;4,91.44,122;2,73.152,122';
roundInfo.newn.array = roundData.newn;
roundInfo.newn.type = 'orc';
roundInfo.newn.classifications = [106,217,315,432];
// roundInfo.newn.classifications = [47,118,217,362]; // ladies
roundInfo.newn.eqclass = [106,217,315,432,525]; // gents
//roundInfo.newn.eqclass = [47,118,217,362,468]; // ladies


roundInfo.newnlb = new Object();
roundInfo.newnlb.name = "newnlb";
roundInfo.newnlb.hcTable = "newn";
roundInfo.newnlb.fullname = "New National (longbow)";
roundInfo.newnlb.rounds = 2;
roundInfo.newnlb.description = 'i;4,91.44,122;2,73.152,122';
roundInfo.newnlb.array = roundData.newnlb;
roundInfo.newnlb.type = 'olb';
roundInfo.newnlb.classifications = [13,27,47,86];
// roundInfo.newnlb.classifications = [3,15,24,47]; // ladies
roundInfo.newnlb.eqclass = [13,27,47,86,171]; // gents
//roundInfo.newnlb.eqclass = [3,15,24,47,68]; // ladies


roundInfo.newnbb = new Object();
roundInfo.newnbb.name = "newnbb";
roundInfo.newnbb.hcTable = "newn";
roundInfo.newnbb.fullname = "New National (barebow)";
roundInfo.newnbb.rounds = 2;
roundInfo.newnbb.description = 'i;4,91.44,122;2,73.152,122';
roundInfo.newnbb.array = roundData.newnbb;
roundInfo.newnbb.type = 'obb';
roundInfo.newnbb.classifications = [20,53,130,233];
// roundInfo.newnbb.classifications = [7,20,53,118]; // ladies
roundInfo.newnbb.eqclass = [20,53,130,233,299]; // gents
//roundInfo.newnbb.eqclass = [7,20,53,118,201]; // ladies

handicapscores.newn = new Array(); 
/*
handicap thresholds for classifications

Gents
roundInfo.rctemplate.eqclass = [58,50,44,36,27];
roundInfo.lbtemplate.eqclass = [74,69,65,60,55];
roundInfo.bbtemplate.eqclass = [71,64,56,49,45];

Ladies
roundInfo.rctemplate.eqclass = [65,57,50,41,33];
roundInfo.lbtemplate.eqclass = [82,73,70,65,62];
roundInfo.bbtemplate.eqclass = [78,71,64,57,51];

*/



// Long Metric  THE OFFICIAL CLASSIFICATION LEVELS SEEM ODD AND NEED CHECKING
roundData.lmg = new Array();
roundData.lmglb = new Array();
roundData.lmgbb = new Array();

roundInfo.lmg = new Object();
roundInfo.lmg.name = "lmg";
roundInfo.lmg.hcTable = "lmg";
roundInfo.lmg.fullname = "Long Metric, gents (recurve)";
roundInfo.lmg.rounds = 2;
roundInfo.lmg.description = 'i;3,90,122;3,70,122';
roundInfo.lmg.array = roundData.lmg;
roundInfo.lmg.type = 'orc';
roundInfo.lmg.classifications = [146,275,378,490];
// roundInfo.lmg.classifications = [69,161,275,424]; // ladies
roundInfo.lmg.eqclass = [131,249,345,454,539]; // gents
//roundInfo.lmg.eqclass = [61,144,249,390,487]; // ladies


roundInfo.lmglb = new Object();
roundInfo.lmglb.name = "lmglb";
roundInfo.lmglb.hcTable = "lmg";
roundInfo.lmglb.fullname = "Long Metric, gents (longbow)";
roundInfo.lmglb.rounds = 2;
roundInfo.lmglb.description = 'i;3,90,122;3,70,122';
roundInfo.lmglb.array = roundData.lmglb;
roundInfo.lmglb.type = 'olb';
roundInfo.lmglb.classifications = [20,41,69,120];
// roundInfo.lmglb.classifications = [6,24,36,69]; // ladies
roundInfo.lmglb.eqclass = [18,37,61,107,171]; // gents
//roundInfo.lmglb.eqclass = [5,21,32,61,86]; // ladies


roundInfo.lmgbb = new Object();
roundInfo.lmgbb.name = "lmgbb";
roundInfo.lmgbb.hcTable = "lmg";
roundInfo.lmgbb.fullname = "Long Metric, gents (barebow)";
roundInfo.lmgbb.rounds = 2;
roundInfo.lmgbb.description = 'i;3,90,122;3,70,122';
roundInfo.lmgbb.array = roundData.lmgbb;
roundInfo.lmgbb.type = 'obb';
roundInfo.lmgbb.classifications = [31,77,175,293];
// roundInfo.lmgbb.classifications = [11,31,77,161]; // ladies
roundInfo.lmgbb.eqclass = [28,69,157,265,329]; // gents
//roundInfo.lmgbb.eqclass = [10,28,69,144,232]; // ladies

handicapscores.lmg = new Array(); 



var roundNames = ['p','tft','f','sm','fita70','albion','longnat','newn','nat','windsor','stg','neww','lmg'];

function concatenateRounds (roundType) {
	// this function groups various types of round for handicap calculations and ranking lists
	// each time you add a new round above, you need to add the necessary here
	var emptyArray = new Array(); 
	switch (roundType) {
		case 'olb': return emptyArray.concat(roundData.smlb, roundData.fita70lb, roundData.albionlb, roundData.longnatlb, roundData.newnlb, roundData.natlb, roundData.windsorlb, roundData.stglb, roundData.newwlb, roundData.lmglb, roundData.tftlb); break;
		case 'orc': return emptyArray.concat(roundData.sm, roundData.fita70, roundData.albion, roundData.longnat, roundData.newn, roundData.nat, roundData.windsor, roundData.stg, roundData.neww, roundData.lmg, roundData.tft); break;
		case 'obb': return emptyArray.concat(roundData.smbb, roundData.fita70bb, roundData.albionbb, roundData.longnatbb, roundData.newnbb, roundData.natbb, roundData.windsorbb, roundData.stgbb, roundData.newwbb, roundData.lmgbb, roundData.tftbb); break;
		case 'ilb': return emptyArray.concat(roundData.plb, roundData.flb); break;
		case 'irc': return emptyArray.concat(roundData.p, roundData.f); break;
		case 'ibb': return emptyArray.concat(roundData.pbb, roundData.fbb);
		}	
	}



