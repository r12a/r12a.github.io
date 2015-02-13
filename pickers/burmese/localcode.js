var _showMesherTrans =  ''
var _showISOTrans = ''

var charData = {
"\u1021": { cp: "U+1021", name: "MYANMAR LETTER A", mark: false },
"\u1023": { cp: "U+1023", name: "MYANMAR LETTER I", mark: false },
"\u1024": { cp: "U+1024", name: "MYANMAR LETTER II", mark: false },
"\u1025": { cp: "U+1025", name: "MYANMAR LETTER U", mark: false },
"\u1026": { cp: "U+1026", name: "MYANMAR LETTER UU", mark: false },
"\u1027": { cp: "U+1027", name: "MYANMAR LETTER E", mark: false },
"\u1029": { cp: "U+1029", name: "MYANMAR LETTER O", mark: false },
"\u102A": { cp: "U+102A", name: "MYANMAR LETTER AU", mark: false },
"\u1000": { cp: "U+1000", name: "MYANMAR LETTER KA", mark: false },
"\u1001": { cp: "U+1001", name: "MYANMAR LETTER KHA", mark: false },
"\u1002": { cp: "U+1002", name: "MYANMAR LETTER GA", mark: false },
"\u1003": { cp: "U+1003", name: "MYANMAR LETTER GHA", mark: false },
"\u1004": { cp: "U+1004", name: "MYANMAR LETTER NGA", mark: false },
"\u1005": { cp: "U+1005", name: "MYANMAR LETTER CA", mark: false },
"\u1006": { cp: "U+1006", name: "MYANMAR LETTER CHA", mark: false },
"\u1007": { cp: "U+1007", name: "MYANMAR LETTER JA", mark: false },
"\u1008": { cp: "U+1008", name: "MYANMAR LETTER JHA", mark: false },
"\u100A": { cp: "U+100A", name: "MYANMAR LETTER NNYA", mark: false },
"\u1009": { cp: "U+1009", name: "MYANMAR LETTER NYA", mark: false },
"\u100B": { cp: "U+100B", name: "MYANMAR LETTER TTA", mark: false },
"\u100C": { cp: "U+100C", name: "MYANMAR LETTER TTHA", mark: false },
"\u100D": { cp: "U+100D", name: "MYANMAR LETTER DDA", mark: false },
"\u100E": { cp: "U+100E", name: "MYANMAR LETTER DDHA", mark: false },
"\u100F": { cp: "U+100F", name: "MYANMAR LETTER NNA", mark: false },
"\u1010": { cp: "U+1010", name: "MYANMAR LETTER TA", mark: false },
"\u1011": { cp: "U+1011", name: "MYANMAR LETTER THA", mark: false },
"\u1012": { cp: "U+1012", name: "MYANMAR LETTER DA", mark: false },
"\u1013": { cp: "U+1013", name: "MYANMAR LETTER DHA", mark: false },
"\u1014": { cp: "U+1014", name: "MYANMAR LETTER NA", mark: false },
"\u1015": { cp: "U+1015", name: "MYANMAR LETTER PA", mark: false },
"\u1016": { cp: "U+1016", name: "MYANMAR LETTER PHA", mark: false },
"\u1017": { cp: "U+1017", name: "MYANMAR LETTER BA", mark: false },
"\u1018": { cp: "U+1018", name: "MYANMAR LETTER BHA", mark: false },
"\u1019": { cp: "U+1019", name: "MYANMAR LETTER MA", mark: false },
"\u101A": { cp: "U+101A", name: "MYANMAR LETTER YA", mark: false },
"\u101B": { cp: "U+101B", name: "MYANMAR LETTER RA", mark: false },
"\u101C": { cp: "U+101C", name: "MYANMAR LETTER LA", mark: false },
"\u101D": { cp: "U+101D", name: "MYANMAR LETTER WA", mark: false },
"\u101E": { cp: "U+101E", name: "MYANMAR LETTER SA", mark: false },
"\u103F": { cp: "U+103F", name: "MYANMAR LETTER GREAT SA", mark: false },
"\u101F": { cp: "U+101F", name: "MYANMAR LETTER HA", mark: false },
"\u1004\u103A\u1039": { cp: "U+1004 U+103A U+1039", name: "MYANMAR LETTER NGA, MYANMAR SIGN ASAT, MYANMAR SIGN VIRAMA", mark: false },
"\u103A": { cp: "U+103A", name: "MYANMAR SIGN ASAT", mark: true },
"\u1039": { cp: "U+1039", name: "MYANMAR SIGN VIRAMA", mark: true },
"\u103B": { cp: "U+103B", name: "MYANMAR CONSONANT SIGN MEDIAL YA", mark: true },
"\u103C": { cp: "U+103C", name: "MYANMAR CONSONANT SIGN MEDIAL RA", mark: true },
"\u103D": { cp: "U+103D", name: "MYANMAR CONSONANT SIGN MEDIAL WA", mark: true },
"\u103E": { cp: "U+103E", name: "MYANMAR CONSONANT SIGN MEDIAL HA", mark: true },
"\u1039\u101C": { cp: "U+1039 U+101C", name: "MYANMAR SIGN VIRAMA, LETTER LA", mark: true },
"\u1031": { cp: "U+1031", name: "MYANMAR VOWEL SIGN E", mark: true },
"\u102D": { cp: "U+102D", name: "MYANMAR VOWEL SIGN I", mark: true },
"\u102E": { cp: "U+102E", name: "MYANMAR VOWEL SIGN II", mark: true },
"\u1032": { cp: "U+1032", name: "MYANMAR VOWEL SIGN AI", mark: true },
"\u1031\u102C": { cp: "U+1031 U+102C", name: "MYANMAR VOWEL SIGN E, VOWEL SIGN AA", mark: true },
"\u1031\u102C\u103A": { cp: "U+1031 U+102C U+103A", name: "MYANMAR VOWEL SIGN E, VOWEL SIGN AA, SIGN ASAT", mark: true },
"\u1031\u102B": { cp: "U+1031 U+102B", name: "MYANMAR VOWEL SIGN E, VOWEL SIGN TALL AA", mark: true },
"\u1031\u102B\u103A": { cp: "U+1031 U+102B U+103A", name: "MYANMAR VOWEL SIGN E, VOWEL SIGN TALL AA, SIGN ASAT", mark: true },
"\u102D\u102F": { cp: "U+102D U+102F", name: "MYANMAR VOWEL SIGN I, VOWEL SIGN U", mark: true },
"\u101A\u103A": { cp: "U+101A U+103A", name: "MYANMAR LETTER YA, SIGN ASAT", mark: false },
"\u102F": { cp: "U+102F", name: "MYANMAR VOWEL SIGN U", mark: true },
"\u1030": { cp: "U+1030", name: "MYANMAR VOWEL SIGN UU", mark: true },
"\u102C": { cp: "U+102C", name: "MYANMAR VOWEL SIGN AA", mark: true },
"\u102B": { cp: "U+102B", name: "MYANMAR VOWEL SIGN TALL AA", mark: true },
"\u1036": { cp: "U+1036", name: "MYANMAR SIGN ANUSVARA", mark: true },
"\u1037": { cp: "U+1037", name: "MYANMAR SIGN DOT BELOW", mark: true },
"\u1038": { cp: "U+1038", name: "MYANMAR SIGN VISARGA", mark: true },
"\u104C": { cp: "U+104C", name: "MYANMAR SYMBOL LOCATIVE", mark: false },
"\u104D": { cp: "U+104D", name: "MYANMAR SYMBOL COMPLETED", mark: false },
"\u104E": { cp: "U+104E", name: "MYANMAR SYMBOL AFOREMENTIONED", mark: false },
"\u104F": { cp: "U+104F", name: "MYANMAR SYMBOL GENITIVE", mark: false },
"\u104A": { cp: "U+104A", name: "MYANMAR SIGN LITTLE SECTION", mark: false },
"\u104B": { cp: "U+104B", name: "MYANMAR SIGN SECTION", mark: false },
"\u1040": { cp: "U+1040", name: "MYANMAR DIGIT ZERO", mark: false },
"\u1041": { cp: "U+1041", name: "MYANMAR DIGIT ONE", mark: false },
"\u1042": { cp: "U+1042", name: "MYANMAR DIGIT TWO", mark: false },
"\u1043": { cp: "U+1043", name: "MYANMAR DIGIT THREE", mark: false },
"\u1044": { cp: "U+1044", name: "MYANMAR DIGIT FOUR", mark: false },
"\u1045": { cp: "U+1045", name: "MYANMAR DIGIT FIVE", mark: false },
"\u1046": { cp: "U+1046", name: "MYANMAR DIGIT SIX", mark: false },
"\u1047": { cp: "U+1047", name: "MYANMAR DIGIT SEVEN", mark: false },
"\u1048": { cp: "U+1048", name: "MYANMAR DIGIT EIGHT", mark: false },
"\u1049": { cp: "U+1049", name: "MYANMAR DIGIT NINE", mark: false },
"\u1050": { cp: "U+1050", name: "MYANMAR LETTER SHA", mark: false },
"\u1051": { cp: "U+1051", name: "MYANMAR LETTER SSA", mark: false },
"\u1020": { cp: "U+1020", name: "MYANMAR LETTER LLA", mark: false },
"\u1056": { cp: "U+1056", name: "MYANMAR VOWEL SIGN VOCALIC R", mark: true },
"\u1057": { cp: "U+1057", name: "MYANMAR VOWEL SIGN VOCALIC RR", mark: true },
"\u1058": { cp: "U+1058", name: "MYANMAR VOWEL SIGN VOCALIC L", mark: true },
"\u1059": { cp: "U+1059", name: "MYANMAR VOWEL SIGN VOCALIC LL", mark: true },
"\u1052": { cp: "U+1052", name: "MYANMAR LETTER VOCALIC R", mark: false },
"\u1053": { cp: "U+1053", name: "MYANMAR LETTER VOCALIC RR", mark: false },
"\u1054": { cp: "U+1054", name: "MYANMAR LETTER VOCALIC L", mark: false },
"\u1055": { cp: "U+1055", name: "MYANMAR LETTER VOCALIC LL", mark: false },

"\u200C": { cp: "U+200C", name: "ZERO WIDTH NON JOINER", mark: false },
"\u200D": { cp: "U+200D", name: "ZERO WIDTH JOINER", mark: false },
"\u00A0": { cp: "U+00A0", name: "NO-BREAK SPACE", mark: false },
"\u0020": { cp: "U+0020", name: "SPACE", mark: false },
"\u200B": { cp: "U+200B", name: "ZERO WIDTH SPACE", mark: false },

end: {}
}


// define character to insert as a base for combining characters
var _combiningBase = '\u00A0'
var _combiningBase = '\u25CC'
var _combiningBase = '\u09AC'
var _combiningBase = ''


function localInitialise () {
	if (_local == true) {
		document.getElementById('makeExample').style.display = 'inline'
		document.getElementById('makeCharLink').style.display = 'inline'
		}
	}
	

var _h = {
'1021': ['1012', '1001'],
'1023': ['1000', '100F'],
'1024': ['1000'],
'1025': ['1026', '1009', '100D', '104C'],
'1026': ['1025', '1009', '100D', '104C'],
'1027': ['104F'],
'1029': ['103C', '101E', '102A'],
'102A': ['1029', '103C', '101E', '1031', '103A'],
'1000': ['1023', '100F'],
'1001': ['1006'],
'1002': ['1000'],
'1003': ['100E', '101A'],
'1004': ['103A', '1004103A1039'],
'1005': ['102E', '1008'],
'1006': ['1001', '101D'],
'1008': ['1005', '103B'],
'100A': ['1009'],
'1009': ['100A', '1025'],
'100B': ['100C', '1044','1020'],
'100C': ['100B', '1044'],
'100D': ['1025', '104C'],
'100E': ['1003', '1015'],
'100F': ['1000'],
'1010': ['101D', '1011', '102C'],
'1011': ['1010', '101D'],
'1012': ['1021'],
'1015': ['101A', '101F', '100E'],
'1018': ['1041', '102C', '101E'],
'1019': ['1013'],
'1013': ['1019'],
'101A': ['1003', '1015', '102C', '101F', '101A103A'],
'101D': ['1040', '102D', '103D', '1010', '1013'],
'101E': ['103F', '102C', '1018', '100A', '1029', '102A'],
'103F': ['101E', '1018', '102C', '102A'],
'101F': ['101A', '1015', '102C', '101A103A'],
'103A': ['1031102C103A','101A103A','104C'],
'103B': ['1008'],
'103C': ['1029', '102A'],
'103D': ['1037', '101D'],
'103E': ['102F'],
'1039101C': ['101C'],
'101C': ['1039101C'],
'1031': ['102A', '1031102C', '1031102B', '1031102C103A', '1031102B103A'],
'102D': ['1036', '102D102F'],
'1031102C': ['1031', '102C', '1031102C103A'],
'1031102B': ['1031', '102B', '1031102B103A'],
'1031102C103A': ['1031', '102C', '1031102C','103A'],
'1031102B103A': ['1031', '102B', '1031102B'],
'102D102F': ['102D', '102F'],
'101A103A': ['101A', '103A'],
'102F': ['103E', '1030', '104E'],
'1030': ['102F'],
'102C': ['102A', '1018', '1031102C'],
'102B': ['1031102B'],
'1036': ['102D', '102E'],
'1037': ['103D'],
'104C': ['100D', '103A'],
'101B': ['104D'],
'104D': ['101B'],
'104E': ['1044'],
'104F': ['1027'],
'1044': ['104E'],
'1041': ['101E'],
'1043': ['1025'],
'1051': ['1050', '1040'],
'1050': ['1051', '1040'],
'1040': ['101D', '1050', '1051'],
'1020': ['100B', '100C'],

end: {}
}




function findShape (shapelist, extrashapes, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')
	var extrashapesarray = extrashapes.split(',')

	clearHighlights()

	if (show) {
		for (var i=0;i<shapelistarray.length;i++) { //alert(document.getElementById(shapelistarray[i]).textContent)
			document.getElementById(shapelistarray[i]).style.backgroundColor = '#FFE6B2'
			}
		}
	else {
		for (var i=0;i<shapelistarray.length;i++) {
			document.getElementById(shapelistarray[i]).style.backgroundColor = 'transparent'
			}
		}
	
	var extras = ''
	for (i=0;i<extrashapesarray.length;i++) {
		extras += '<span class=c onclick="add(\''+extrashapesarray[i]+'\')">'+extrashapesarray[i]+'</span> '
		document.getElementById('extrashapes').style.fontFamily = document.getElementById('uiFont').value
		document.getElementById('extrashapes').style.fontSize = defaults.uisize+'px'
		}
	document.getElementById('extrashapes').innerHTML = extras
	}


function splitSyllables (str) {
	// str is myanmar text
	// produces a version of the string with spaces separating syllables except for conjuncts
	// conjuncts are separated by virama
	consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'','ဠ':'','ၐ':'','ၑ':'' }
	indvowels = { 'ဣ':'','ဤ':'','ဥ':'','ဦ':'','ဧ':'','ဩ':'','ဪ':'','၌':'','၍':'','၎':'','၏':'','၊':'','။':''}
	str = ' '+str+' '
	var out = ''
	for (p=0;p<str.length;p++) {
		if (str[p] in consonants || str[p] in indvowels) {
			if (str[p+1] != '\u103A' && str[p+1] != '\u1039' && str[p+1] != '\u1037') out += ' '+str[p]
			else out += str[p]
			}
		else out += str[p]
		}
	out = out.replace(/\u1039 /g,'\u1039')
	
	// split away non-Burmese or dandas
	return out.trim()
	}

function splitSyllables (str) {
	// str is myanmar text
	// produces a version of the string with spaces separating syllables except for conjuncts
	// conjuncts are separated by virama
	var consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'','ဠ':'','ၐ':'','ၑ':'' }
	var indvowels = { 'ဣ':'','ဤ':'','ဥ':'','ဦ':'','ဧ':'','ဩ':'','ဪ':'','၌':'','၍':'','၎':'','၏':'','၊':'','။':''}
	var str = ' '+str+' '
	var out = ''
	for (p=0;p<str.length;p++) {
		if (str[p] in consonants || str[p] in indvowels) {
			if (str[p+1] != '\u103A' && str[p+1] != '\u1039' && str[p+1] != '\u1037') out += ' '+str[p]
			else out += str[p]
			}
		else out += str[p]
		}
	out = ' '+out.replace(/\u1039 /g,'\u1039')
	
	// split away non-Burmese or dandas or numbers
	out2 = ''
	var reLetter = /[က-ဿ၌-ႏႚ-႟]/
	for (p=1;p<out.length;p++) { //console.log(out[p],out[p].match(reLetter))
		if (! out[p].match(reLetter) && out[p-1].match(reLetter) && out[p] != ' ') {
			out2 += ' '+out[p]
			}
		else out2 += out[p]
		}
	return out2.trim()
	}