var _showAcadTrans = ''


function localInitialise () {
	}
	

var _h = {
'05D1': ['05E0', '05DB', '05D2'],
'05D2': ['05D1', '05E0'],
'05D3': ['05DA', '05D5', '05E8'],
'05D4': ['05D7', '05EA', '05DE'],
'05D5': ['05D6', '05DF', '05F0', '05F1','05C0'],
'05D7': ['05EA', '05D4', '05DE'],
'05D9': ['05F1', '05F2', '05F3', '05F4'],
'05DA': ['05D3', '05DF', '05E8', '05D5'],
'05DB': ['05D1'],
'05DD': ['05E1'],
'05DD': ['05E1', '05DE'],
'05DE': ['05DD'],
'05DF': ['05D5', '05F0', '05F1', '05D6', '05D3','05C0'],
'05E0': ['05D1', '05D2'],
'05E1': ['05DD', '05DE'],
'05E2': ['05E6', '05E5'],
'05E3': ['05DA'],
'05E4': ['05DB'],
'05E5': ['05E6', '05E2'],
'05E6': ['05E2', '05E5'],
'05E8': ['05D3', '05DA', '05D5'],
'05EA': ['05D4', '05D7', '05DE'],
'05F0': ['05F1', '05D5', '05DF'],
'05F1': ['05F2', '05F0', '05D5', '05DF', '05D9'],
'05F2': ['05D9'],
'05F3': ['05D9'],
'05F4': ['05F2'],
'05C2': ['05B9', '05BA'],
'05B4': ['05C5'],
'05C0': ['05DF','05D5'],

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