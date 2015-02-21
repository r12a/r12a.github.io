var _showBeckerTrans =  ''
var _showISO2Trans = ''

function localInitialise () {

	}



var _h = {
'0E01': ['0E20', '0E24', '0E20'],
'0E02': ['0E0A', '0E0B', '0E03'],
'0E04': ['0E14', '0E28', '0E15', '0E05'],
'0E06': ['0E11', '0E21'],
'0E08': ['0E27', '0E25'],
'0E0A': ['0E02', '0E0B', '0E03'],
'0E0C': ['0E13', '0E0D'],
'0E15': ['0E05', '0E04', '0E14'],
'0E0F': ['0E0E'],
'0E10': ['0E23', '0E18'],
'0E11': ['0E06'],
'0E16': ['0E24', '0E20', '0E01', '0E26'],
'0E17': ['0E11'],
'0E18': ['0E23', '0E10'],
'0E1B': ['0E1A', '0E29'],
'0E1C': ['0E1E', '0E1D', '0E1F', '0E2C'],
'0E1E': ['0E1C', '0E1D', '0E1F', '0E2C'],
'0E20': ['0E16', '0E24', '0E01', '0E26'],
'0E1A': ['0E1B', '0E29'],
'0E0E': ['0E0F', '0E24', '0E26'],
'0E14': ['0E04', '0E28', '0E15'],
'0E0B': ['0E0A', '0E02', '0E03'],
'0E28': ['0E04', '0E14', '0E15'],
'0E29': ['0E1A'],
'0E2A': ['0E25', '0E09'],
'0E1F': ['0E1D', '0E1C', '0E1E', '0E2C'],
'0E1D': ['0E1F', '0E1C', '0E1E', '0E2C'],
'0E2B': ['0E17', '0E19'],
'0E2E': ['0E2D'],
'0E25': ['0E2A', '0E2F0E250E2F'],
'0E2C': ['0E1D', '0E1F', '0E1C', '0E1E'],
'0E23': ['0E18', '0E10'],
'0E0D': ['0E13', '0E0C'],
'0E27': ['0E08', '0E07'],
'0E2D': ['0E2E'],
'0E19': ['0E21', '0E2B'],
'0E13': ['0E0C', '0E0D'],
'0E21': ['0E19', '0E17', '0E2B'],
'0E07': ['0E27'],
'0E24': ['0E26', '0E20', '0E16', '0E01'],
'0E2F': ['0E5A'],
'0E5A': ['0E2F'],
'0E32': ['0E45', '0E33'],
'0E45': ['0E32', '0E33'],
'0E33': ['0E32', '0E45', '0E4D'],
'0E4D': ['0E33'],
'0E2F0E250E2F': ['0E2A', '0E25'],
'0E05': ['0E15'],
'0E03': ['0E02', '0E0B', '0E0A'],
'0E26': ['0E24', '0E20', '0E01', '0E16'],

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