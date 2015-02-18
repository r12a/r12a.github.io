var _showBeckerTrans =  ''
var _showISO2Trans = ''

var charData = {
"\u0E01": { cp: "U+0E01", name: "THAI CHARACTER KO KAI", mark: false },
"\u0E02": { cp: "U+0E02", name: "THAI CHARACTER KHO KHAI", mark: false },
"\u0E03": { cp: "U+0E03", name: "THAI CHARACTER KHO KHUAT", mark: false },
"\u0E04": { cp: "U+0E04", name: "THAI CHARACTER KHO KHWAI", mark: false },
"\u0E05": { cp: "U+0E05", name: "THAI CHARACTER KHO KHON", mark: false },
"\u0E06": { cp: "U+0E06", name: "THAI CHARACTER KHO RAKHANG", mark: false },
"\u0E07": { cp: "U+0E07", name: "THAI CHARACTER NGO NGU", mark: false },
"\u0E08": { cp: "U+0E08", name: "THAI CHARACTER CHO CHAN", mark: false },
"\u0E09": { cp: "U+0E09", name: "THAI CHARACTER CHO CHING", mark: false },
"\u0E0A": { cp: "U+0E0A", name: "THAI CHARACTER CHO CHANG", mark: false },
"\u0E0B": { cp: "U+0E0B", name: "THAI CHARACTER SO SO", mark: false },
"\u0E0C": { cp: "U+0E0C", name: "THAI CHARACTER CHO CHOE", mark: false },
"\u0E0D": { cp: "U+0E0D", name: "THAI CHARACTER YO YING", mark: false },
"\u0E0E": { cp: "U+0E0E", name: "THAI CHARACTER DO CHADA", mark: false },
"\u0E0F": { cp: "U+0E0F", name: "THAI CHARACTER TO PATAK", mark: false },
"\u0E10": { cp: "U+0E10", name: "THAI CHARACTER THO THAN", mark: false },
"\u0E11": { cp: "U+0E11", name: "THAI CHARACTER THO NANGMONTHO", mark: false },
"\u0E12": { cp: "U+0E12", name: "THAI CHARACTER THO PHUTHAO", mark: false },
"\u0E13": { cp: "U+0E13", name: "THAI CHARACTER NO NEN", mark: false },
"\u0E14": { cp: "U+0E14", name: "THAI CHARACTER DO DEK", mark: false },
"\u0E15": { cp: "U+0E15", name: "THAI CHARACTER TO TAO", mark: false },
"\u0E16": { cp: "U+0E16", name: "THAI CHARACTER THO THUNG", mark: false },
"\u0E17": { cp: "U+0E17", name: "THAI CHARACTER THO THAHAN", mark: false },
"\u0E18": { cp: "U+0E18", name: "THAI CHARACTER THO THONG", mark: false },
"\u0E19": { cp: "U+0E19", name: "THAI CHARACTER NO NU", mark: false },
"\u0E1A": { cp: "U+0E1A", name: "THAI CHARACTER BO BAIMAI", mark: false },
"\u0E1B": { cp: "U+0E1B", name: "THAI CHARACTER PO PLA", mark: false },
"\u0E1C": { cp: "U+0E1C", name: "THAI CHARACTER PHO PHUNG", mark: false },
"\u0E1D": { cp: "U+0E1D", name: "THAI CHARACTER FO FA", mark: false },
"\u0E1E": { cp: "U+0E1E", name: "THAI CHARACTER PHO PHAN", mark: false },
"\u0E1F": { cp: "U+0E1F", name: "THAI CHARACTER FO FAN", mark: false },
"\u0E20": { cp: "U+0E20", name: "THAI CHARACTER PHO SAMPHAO", mark: false },
"\u0E21": { cp: "U+0E21", name: "THAI CHARACTER MO MA", mark: false },
"\u0E22": { cp: "U+0E22", name: "THAI CHARACTER YO YAK", mark: false },
"\u0E23": { cp: "U+0E23", name: "THAI CHARACTER RO RUA", mark: false },
"\u0E24": { cp: "U+0E24", name: "THAI CHARACTER RU", mark: false },
"\u0E25": { cp: "U+0E25", name: "THAI CHARACTER LO LING", mark: false },
"\u0E26": { cp: "U+0E26", name: "THAI CHARACTER LU", mark: false },
"\u0E27": { cp: "U+0E27", name: "THAI CHARACTER WO WAEN", mark: false },
"\u0E28": { cp: "U+0E28", name: "THAI CHARACTER SO SALA", mark: false },
"\u0E29": { cp: "U+0E29", name: "THAI CHARACTER SO RUSI", mark: false },
"\u0E2A": { cp: "U+0E2A", name: "THAI CHARACTER SO SUA", mark: false },
"\u0E2B": { cp: "U+0E2B", name: "THAI CHARACTER HO HIP", mark: false },
"\u0E2C": { cp: "U+0E2C", name: "THAI CHARACTER LO CHULA", mark: false },
"\u0E2D": { cp: "U+0E2D", name: "THAI CHARACTER O ANG", mark: false },
"\u0E2E": { cp: "U+0E2E", name: "THAI CHARACTER HO NOKHUK", mark: false },
"\u0E2F": { cp: "U+0E2F", name: "THAI CHARACTER PAIYANNOI", mark: false },
"\u0E2F\u0E25\u0E2F": { cp: "U+0E2F U+0E25 U+0E2F", name: "THAI CHARACTER PAIYANNOI, LO LING, PAIYANNOI", mark: false },
"\u0E30": { cp: "U+0E30", name: "THAI CHARACTER SARA A", mark: false },
"\u0E31": { cp: "U+0E31", name: "THAI CHARACTER MAI HAN-AKAT", mark: true },
"\u0E32": { cp: "U+0E32", name: "THAI CHARACTER SARA AA", mark: false },
"\u0E33": { cp: "U+0E33", name: "THAI CHARACTER SARA AM", mark: false },
"\u0E34": { cp: "U+0E34", name: "THAI CHARACTER SARA I", mark: true },
"\u0E35": { cp: "U+0E35", name: "THAI CHARACTER SARA II", mark: true },
"\u0E36": { cp: "U+0E36", name: "THAI CHARACTER SARA UE", mark: true },
"\u0E37": { cp: "U+0E37", name: "THAI CHARACTER SARA UEE", mark: true },
"\u0E38": { cp: "U+0E38", name: "THAI CHARACTER SARA U", mark: true },
"\u0E39": { cp: "U+0E39", name: "THAI CHARACTER SARA UU", mark: true },
"\u0E3A": { cp: "U+0E3A", name: "THAI CHARACTER PHINTHU", mark: true },
"\u0E3F": { cp: "U+0E3F", name: "THAI CURRENCY SYMBOL BAHT", mark: false },
"\u0E40": { cp: "U+0E40", name: "THAI CHARACTER SARA E", mark: false },
"\u0E41": { cp: "U+0E41", name: "THAI CHARACTER SARA AE", mark: false },
"\u0E42": { cp: "U+0E42", name: "THAI CHARACTER SARA O", mark: false },
"\u0E43": { cp: "U+0E43", name: "THAI CHARACTER SARA AI MAIMUAN", mark: false },
"\u0E44": { cp: "U+0E44", name: "THAI CHARACTER SARA AI MAIMALAI", mark: false },
"\u0E45": { cp: "U+0E45", name: "THAI CHARACTER LAKKHANGYAO", mark: false },
"\u0E46": { cp: "U+0E46", name: "THAI CHARACTER MAIYAMOK", mark: false },
"\u0E47": { cp: "U+0E47", name: "THAI CHARACTER MAITAIKHU", mark: true },
"\u0E48": { cp: "U+0E48", name: "THAI CHARACTER MAI EK", mark: true },
"\u0E49": { cp: "U+0E49", name: "THAI CHARACTER MAI THO", mark: true },
"\u0E4A": { cp: "U+0E4A", name: "THAI CHARACTER MAI TRI", mark: true },
"\u0E4B": { cp: "U+0E4B", name: "THAI CHARACTER MAI CHATTAWA", mark: true },
"\u0E4C": { cp: "U+0E4C", name: "THAI CHARACTER THANTHAKHAT", mark: true },
"\u0E4D": { cp: "U+0E4D", name: "THAI CHARACTER NIKHAHIT", mark: true },
"\u0E4E": { cp: "U+0E4E", name: "THAI CHARACTER YAMAKKAN", mark: true },
"\u0E4F": { cp: "U+0E4F", name: "THAI CHARACTER FONGMAN", mark: false },
"\u0E50": { cp: "U+0E50", name: "THAI DIGIT ZERO", mark: false },
"\u0E51": { cp: "U+0E51", name: "THAI DIGIT ONE", mark: false },
"\u0E52": { cp: "U+0E52", name: "THAI DIGIT TWO", mark: false },
"\u0E53": { cp: "U+0E53", name: "THAI DIGIT THREE", mark: false },
"\u0E54": { cp: "U+0E54", name: "THAI DIGIT FOUR", mark: false },
"\u0E55": { cp: "U+0E55", name: "THAI DIGIT FIVE", mark: false },
"\u0E56": { cp: "U+0E56", name: "THAI DIGIT SIX", mark: false },
"\u0E57": { cp: "U+0E57", name: "THAI DIGIT SEVEN", mark: false },
"\u0E58": { cp: "U+0E58", name: "THAI DIGIT EIGHT", mark: false },
"\u0E59": { cp: "U+0E59", name: "THAI DIGIT NINE", mark: false },
"\u0E5A": { cp: "U+0E5A", name: "THAI CHARACTER ANGKHANKHU", mark: false },
"\u0E5B": { cp: "U+0E5B", name: "THAI CHARACTER KHOMUT", mark: false },
end: {}
}

// define character to insert as a base for combining characters
//var _combiningBase = '\u00A0'
var _combiningBase = '\u00A0'
var _combiningBase = ''



function localInitialise () {

	}



var _h = {
'E01': ['E20', 'E24', 'E20'],
'E02': ['E0A', 'E0B', 'E03'],
'E04': ['E14', 'E28', 'E15', 'E05'],
'E06': ['E11', 'E21'],
'E08': ['E27', 'E25'],
'E0A': ['E02', 'E0B', 'E03'],
'E0C': ['E13', 'E0D'],
'E15': ['E05', 'E04', 'E14'],
'E0F': ['E0E'],
'E10': ['E23', 'E18'],
'E11': ['E06'],
'E16': ['E24', 'E20', 'E01', 'E26'],
'E17': ['E11'],
'E18': ['E23', 'E10'],
'E1B': ['E1A', 'E29'],
'E1C': ['E1E', 'E1D', 'E1F', 'E2C'],
'E1E': ['E1C', 'E1D', 'E1F', 'E2C'],
'E20': ['E16', 'E24', 'E01', 'E26'],
'E1A': ['E1B', 'E29'],
'E0E': ['E0F', 'E24', 'E26'],
'E14': ['E04', 'E28', 'E15'],
'E0B': ['E0A', 'E02', 'E03'],
'E28': ['E04', 'E14', 'E15'],
'E29': ['E1A'],
'E2A': ['E25', 'E09'],
'E1F': ['E1D', 'E1C', 'E1E', 'E2C'],
'E1D': ['E1F', 'E1C', 'E1E', 'E2C'],
'E2B': ['E17', 'E19'],
'E2E': ['E2D'],
'E25': ['E2A', 'E2FE25E2F'],
'E2C': ['E1D', 'E1F', 'E1C', 'E1E'],
'E23': ['E18', 'E10'],
'E0D': ['E13', 'E0C'],
'E27': ['E08', 'E07'],
'E2D': ['E2E'],
'E19': ['E21', 'E2B'],
'E13': ['E0C', 'E0D'],
'E21': ['E19', 'E17', 'E2B'],
'E07': ['E27'],
'E24': ['E26', 'E20', 'E16', 'E01'],
'E2F': ['E5A'],
'E5A': ['E2F'],
'E32': ['E45', 'E33'],
'E45': ['E32', 'E33'],
'E33': ['E32', 'E45', 'E4D'],
'E4D': ['E33'],
'E2FE25E2F': ['E2A', 'E25'],
'E05': ['E15'],
'E03': ['E02', 'E0B', 'E0A'],
'E26': ['E24', 'E20', 'E01', 'E16'],

end: {}
}


/*
ก ภ ฤ ภ
ข ช ซ ฃ
ค ด ศ ต ฅ
ฆ ฑ ม
จ ว ล
ช ข ซ ฃ
ฌ ณ ญ
ต ฅ ค ด
ฏ ฎ
ฐ ร ธ
ฑ ฆ
ถ ฤ ภ ก ฦ
ท ฑ
ธ ร ฐ
ป บ ษ
ผ พ ฝ ฟ ฬ
พ ผ ฝ ฟ ฬ
ภ ถ ฤ ก ฦ
บ ป ษ
ฎ ฏ ฤ ฦ
ด ค ศ ต
ซ ช ข ฃ
ศ ค ด ต
ษ บ
ส ล ฉ
ฟ ฝ ผ พ ฬ
ฝ ฟ ผ พ ฬ
ห ท น
ฮ อ
ล ส ฯลฯ
ฬ ฝ ฟ ผ พ
ร ธ ฐ
ญ ณ ฌ
ว จ ง
อ ฮ
น ม ห
ณ ฌ ญ
ม น ท ห
ง ว
ฤ ฦ ภ ถ ก
ฯ ๚
๚ ฯ
า ๅ ำ
ๅ า ำ
ำ า ๅ ํ
ํ ำ

*/

var keyboarddef = [
"१|ऍ,२|ॅ,३|्र,४|र्,५|ज्ञ,६|त्र,७|क्ष,८|श्र,९|(,०|),-|ः,ृ|ऋ",
"|औ,ै|ऐ,ा|आ,ी|ई,ू|ऊ,ब|भ,ह|ङ,ग|घ,द|ध,ज|झ,ड|ढ,ड|ञ",
"|ओ,े|ए,्|अ,ि|इ,ु|उ,प|फ,र|ऱ,क|ख,त|थ,च|छ,ट|ठ,ॉ|ऑ",
"ॊ|ऒ,ॆ|ऎ,ं|ँ,म|ण,न|ऩ,व|ऴ,ल|ळ,स|श, |ष,.|।,य|य़"
]


function condense (str) {
	// removes spaces and hyphens from a string

	// if text isn't highlighted, highlight whole thing (to avoid duplication)
	var node = document.getElementById('output')
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.select() }

	// do the replacement
	str = str.replace(/ /g, '')
	str = str.replace(/-/g, '')

	return str
	}



function sendVowelLeft (str) {
	lv = str.match(/เ|แ|ไ|โ|ใ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}