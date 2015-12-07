var _showLOCTrans = ''
var _showIPATrans = ''

function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
'0627': ['06F1'],
'0622': ['06F1'],
'0623': ['06F1'],
'0625': ['06F1'],
'0671': ['06F1'],
'06F1': ['0671', '0625', '0623', '0622', '0627'],
'0639': ['060F'],
'063A': ['060F'],
'060F': ['0639', '063A'],
'0657': ['064F'],
'0602': ['060E'],
'060E': ['0602'],
'066B': ['0631'],
'0631': ['066B'],

end: {}
}





function makeCharacterLink (cp, block, lang, direction) { 
	// returns markup with information about cp
	// cp: a unicode character, or sequence of unicode characters
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr
	var chars = cp.split('')

	var out = ''
	for (var i=0;i<chars.length;i++) {
		var hex = convertChar2CP(chars[i])
		var name = charData[chars[i]]['n']
		var mark = charData[chars[i]]['m']
		var cbase = ''
		if (defaults.ccbase != '') cbase = '&amp;#x'+convertChar2CP(defaults.ccbase)+';'
	
		out +=  '<a href="/scripts/'+block+'/block#char'+hex+'"><span class="uname">U+'+hex+' '+name+'</span> (<span lang="'+lang+'"'
		if (direction == 'rtl') { out += ' dir="rtl"' }
		out += '>'
		if (mark) { out += cbase }
		out += '&#x'+hex+';</span>)</a> '
		}
		
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = out.trim()
	}

