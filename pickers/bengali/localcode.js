var _showRadiceTrans =  ''
var _showISOTrans = ''

var charData = {
"\u0980": { cp: "U+0980", name: "BENGALI ANJI", mark: false },
"\u0981": { cp: "U+0981", name: "BENGALI SIGN CANDRABINDU", mark: true },
"\u0982": { cp: "U+0982", name: "BENGALI SIGN ANUSVARA", mark: true },
"\u0983": { cp: "U+0983", name: "BENGALI SIGN VISARGA", mark: true },
"\u0985": { cp: "U+0985", name: "BENGALI LETTER A", mark: false },
"\u0986": { cp: "U+0986", name: "BENGALI LETTER AA", mark: false },
"\u0987": { cp: "U+0987", name: "BENGALI LETTER I", mark: false },
"\u0988": { cp: "U+0988", name: "BENGALI LETTER II", mark: false },
"\u0989": { cp: "U+0989", name: "BENGALI LETTER U", mark: false },
"\u098A": { cp: "U+098A", name: "BENGALI LETTER UU", mark: false },
"\u098B": { cp: "U+098B", name: "BENGALI LETTER VOCALIC R", mark: false },
"\u098C": { cp: "U+098C", name: "BENGALI LETTER VOCALIC L", mark: false },
"\u098F": { cp: "U+098F", name: "BENGALI LETTER E", mark: false },
"\u0990": { cp: "U+0990", name: "BENGALI LETTER AI", mark: false },
"\u0993": { cp: "U+0993", name: "BENGALI LETTER O", mark: false },
"\u0994": { cp: "U+0994", name: "BENGALI LETTER AU", mark: false },
"\u0995": { cp: "U+0995", name: "BENGALI LETTER KA", mark: false },
"\u0996": { cp: "U+0996", name: "BENGALI LETTER KHA", mark: false },
"\u0997": { cp: "U+0997", name: "BENGALI LETTER GA", mark: false },
"\u0998": { cp: "U+0998", name: "BENGALI LETTER GHA", mark: false },
"\u0999": { cp: "U+0999", name: "BENGALI LETTER NGA", mark: false },
"\u099A": { cp: "U+099A", name: "BENGALI LETTER CA", mark: false },
"\u099B": { cp: "U+099B", name: "BENGALI LETTER CHA", mark: false },
"\u099C": { cp: "U+099C", name: "BENGALI LETTER JA", mark: false },
"\u099D": { cp: "U+099D", name: "BENGALI LETTER JHA", mark: false },
"\u099E": { cp: "U+099E", name: "BENGALI LETTER NYA", mark: false },
"\u099F": { cp: "U+099F", name: "BENGALI LETTER TTA", mark: false },
"\u09A0": { cp: "U+09A0", name: "BENGALI LETTER TTHA", mark: false },
"\u09A1": { cp: "U+09A1", name: "BENGALI LETTER DDA", mark: false },
"\u09A2": { cp: "U+09A2", name: "BENGALI LETTER DDHA", mark: false },
"\u09A3": { cp: "U+09A3", name: "BENGALI LETTER NNA", mark: false },
"\u09A4": { cp: "U+09A4", name: "BENGALI LETTER TA", mark: false },
"\u09A5": { cp: "U+09A5", name: "BENGALI LETTER THA", mark: false },
"\u09A6": { cp: "U+09A6", name: "BENGALI LETTER DA", mark: false },
"\u09A7": { cp: "U+09A7", name: "BENGALI LETTER DHA", mark: false },
"\u09A8": { cp: "U+09A8", name: "BENGALI LETTER NA", mark: false },
"\u09AA": { cp: "U+09AA", name: "BENGALI LETTER PA", mark: false },
"\u09AB": { cp: "U+09AB", name: "BENGALI LETTER PHA", mark: false },
"\u09AC": { cp: "U+09AC", name: "BENGALI LETTER BA", mark: false },
"\u09AD": { cp: "U+09AD", name: "BENGALI LETTER BHA", mark: false },
"\u09AE": { cp: "U+09AE", name: "BENGALI LETTER MA", mark: false },
"\u09AF": { cp: "U+09AF", name: "BENGALI LETTER YA", mark: false },
"\u09B0": { cp: "U+09B0", name: "BENGALI LETTER RA", mark: false },
"\u09B2": { cp: "U+09B2", name: "BENGALI LETTER LA", mark: false },
"\u09B6": { cp: "U+09B6", name: "BENGALI LETTER SHA", mark: false },
"\u09B7": { cp: "U+09B7", name: "BENGALI LETTER SSA", mark: false },
"\u09B8": { cp: "U+09B8", name: "BENGALI LETTER SA", mark: false },
"\u09B9": { cp: "U+09B9", name: "BENGALI LETTER HA", mark: false },
"\u09BC": { cp: "U+09BC", name: "BENGALI SIGN NUKTA", mark: true },
"\u09BD": { cp: "U+09BD", name: "BENGALI SIGN AVAGRAHA", mark: false },
"\u09BE": { cp: "U+09BE", name: "BENGALI VOWEL SIGN AA", mark: true },
"\u09BF": { cp: "U+09BF", name: "BENGALI VOWEL SIGN I", mark: true },
"\u09C0": { cp: "U+09C0", name: "BENGALI VOWEL SIGN II", mark: true },
"\u09C1": { cp: "U+09C1", name: "BENGALI VOWEL SIGN U", mark: true },
"\u09C2": { cp: "U+09C2", name: "BENGALI VOWEL SIGN UU", mark: true },
"\u09C3": { cp: "U+09C3", name: "BENGALI VOWEL SIGN VOCALIC R", mark: true },
"\u09C4": { cp: "U+09C4", name: "BENGALI VOWEL SIGN VOCALIC RR", mark: true },
"\u09C7": { cp: "U+09C7", name: "BENGALI VOWEL SIGN E", mark: true },
"\u09C8": { cp: "U+09C8", name: "BENGALI VOWEL SIGN AI", mark: true },
"\u09CB": { cp: "U+09CB", name: "BENGALI VOWEL SIGN O", mark: true },
"\u09CC": { cp: "U+09CC", name: "BENGALI VOWEL SIGN AU", mark: true },
"\u09CD": { cp: "U+09CD", name: "BENGALI SIGN VIRAMA", mark: true },
"\u09CE": { cp: "U+09CE", name: "BENGALI LETTER KHANDA TA", mark: false },
"\u09D7": { cp: "U+09D7", name: "BENGALI AU LENGTH MARK", mark: true },
"\u09DC": { cp: "U+09DC", name: "BENGALI LETTER RRA", mark: false },
"\u09DD": { cp: "U+09DD", name: "BENGALI LETTER RHA", mark: false },
"\u09DF": { cp: "U+09DF", name: "BENGALI LETTER YYA", mark: false },
"\u09E0": { cp: "U+09E0", name: "BENGALI LETTER VOCALIC RR", mark: false },
"\u09E1": { cp: "U+09E1", name: "BENGALI LETTER VOCALIC LL", mark: false },
"\u09E2": { cp: "U+09E2", name: "BENGALI VOWEL SIGN VOCALIC L", mark: true },
"\u09E3": { cp: "U+09E3", name: "BENGALI VOWEL SIGN VOCALIC LL", mark: true },
"\u09E6": { cp: "U+09E6", name: "BENGALI DIGIT ZERO", mark: false },
"\u09E7": { cp: "U+09E7", name: "BENGALI DIGIT ONE", mark: false },
"\u09E8": { cp: "U+09E8", name: "BENGALI DIGIT TWO", mark: false },
"\u09E9": { cp: "U+09E9", name: "BENGALI DIGIT THREE", mark: false },
"\u09EA": { cp: "U+09EA", name: "BENGALI DIGIT FOUR", mark: false },
"\u09EB": { cp: "U+09EB", name: "BENGALI DIGIT FIVE", mark: false },
"\u09EC": { cp: "U+09EC", name: "BENGALI DIGIT SIX", mark: false },
"\u09ED": { cp: "U+09ED", name: "BENGALI DIGIT SEVEN", mark: false },
"\u09EE": { cp: "U+09EE", name: "BENGALI DIGIT EIGHT", mark: false },
"\u09EF": { cp: "U+09EF", name: "BENGALI DIGIT NINE", mark: false },
"\u09F0": { cp: "U+09F0", name: "BENGALI LETTER RA WITH MIDDLE DIAGONAL", mark: false },
"\u09F1": { cp: "U+09F1", name: "BENGALI LETTER RA WITH LOWER DIAGONAL", mark: false },
"\u09F2": { cp: "U+09F2", name: "BENGALI RUPEE MARK", mark: false },
"\u09F3": { cp: "U+09F3", name: "BENGALI RUPEE SIGN", mark: false },
"\u09F4": { cp: "U+09F4", name: "BENGALI CURRENCY NUMERATOR ONE", mark: false },
"\u09F5": { cp: "U+09F5", name: "BENGALI CURRENCY NUMERATOR TWO", mark: false },
"\u09F6": { cp: "U+09F6", name: "BENGALI CURRENCY NUMERATOR THREE", mark: false },
"\u09F7": { cp: "U+09F7", name: "BENGALI CURRENCY NUMERATOR FOUR", mark: false },
"\u09F8": { cp: "U+09F8", name: "BENGALI CURRENCY NUMERATOR ONE LESS THAN THE DENOMINATOR", mark: false },
"\u09F9": { cp: "U+09F9", name: "BENGALI CURRENCY DENOMINATOR SIXTEEN", mark: false },
"\u09FA": { cp: "U+09FA", name: "BENGALI ISSHAR", mark: false },
"\u09FB": { cp: "U+09FB", name: "BENGALI GANDA MARK", mark: false },
"\u0995\u09CD\u09B7": { cp: "U+0995 U+09CD U+09B7", name: "BENGALI LETTER KA, BENGALI SIGN VIRAMA, BENGALI LETTER SSA", mark: false },
"\u09A1\u09BC": { cp: "U+09A1 U+09BC", name: "BENGALI LETTER DDA, BENGALI SIGN NUKTA", mark: false },
"\u09A2\u09BC": { cp: "U+09A2 U+09BC", name: "BENGALI LETTER DDHA, BENGALI SIGN NUKTA", mark: false },
"\u09CD\u09AF": { cp: "U+09CD U+09AF", name: "BENGALI SIGN VIRAMA, BENGALI LETTER YA", mark: true },
"\u09AF\u09BC": { cp: "U+09AF U+09BC", name: "BENGALI LETTER YA, BENGALI SIGN NUKTA", mark: false },
"\u0964": { cp: "U+0964", name: "DEVANAGARI DANDA", mark: false },
"\u0965": { cp: "U+0965", name: "DEVANAGARI DOUBLE DANDA", mark: false },

end: {}
}


// define character to insert as a base for combining characters
var _combiningBase = '\u00A0'
var _combiningBase = '\u25CC'
var _combiningBase = '\u09AC'
var _combiningBase = ''


function localInitialise () {
	}
	

var _h = {
'995': ['9AC'],
'996': ['9A5', '9AC'],
'998': ['9AF', '9B7'],
'999': ['9EC', '9AD'],
'99A': ['9A2'],
'99D': ['9AC'],
'99E': ['98F', '990'],
'99F': ['9A2', '9A29BC'],
'9A1': ['9A19BC', '989', '98A', '9AD'],
'9A2': ['9A29BC', '99F'],
'9A4': ['985', '986', '9E9'],
'9A5': ['996', '98B'],
'9A8': ['9A3', '9B2'],
'9AB': ['9AF', '998'],
'9AC': ['9B0', '99D','9F1','9F0'],
'9AD': ['9A1', '989', '9EC'],
'9AE': ['9B8'],
'9AF': ['9AF9BC', '998', '9B7'],
'9B0': ['9AC', '99D'],
'9B2': ['9A8'],
'9B7': ['9AF', '998'],
'9B8': ['9AE'],
'9B9': ['987','9BD'],
'9BD': ['9B9'],
'9A19BC': ['9A1', '989', '98A'],
'9A29BC': ['9A2', '99F'],
'9AF9BC': ['9AF', '9B7', '998'],
'985': ['986', '9A4'],
'986': ['985', '9A4'],
'987': ['9B9'],
'989': ['98A', '9A1', '9AD'],
'98A': ['989', '9A1', '9AD'],
'98B': ['996','9E0'],
'98F': ['990', '99E'],
'990': ['98F', '99E'],
'993': ['994'],
'994': ['993'],
'9C7': ['9CB', '9CC', '9C8'],
'9C8': ['9C7'],
'9CB': ['9CC', '9C7'],
'9DC': ['9A19BC'],
'9DD': ['9A29BC'],
'9DF': ['9AF9BC'],
'9F1': ['9F0', '9AC', '9B0'],
'9F0': ['9F1', '9AC', '9B0'],
'9F6': ['9F5', '9EF'],
'9F5': ['9F6', '98C'],
'9F7': ['964'],
'964': ['9F7'],
'9C0': ['9D7'],
'9D7': ['9C0'],
'9FA': ['981'],
'981': ['9FA'],
'9E0': ['98B', '9C3'],
'9E1': ['9E2', '98C', '9F5'],
'9E2': ['9E1'],
'98C': ['9E1', '9F5'],
'9F8': ['9A6'],
'9A6': ['9F8'],

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


