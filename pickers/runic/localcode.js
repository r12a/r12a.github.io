globals.showTranslitTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''

function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
'0627': ['06F1'],
'0622': ['06F1'],
'0623': ['06F1', '0654'],
'0625': ['06F1', '0655'],
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
'0654': ['0626', '0624', '0623'],
'0655': ['0625'],
'0626': ['0654'],
'0624': ['0654'],

end: {}
}





var keyboarddef = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
"ᚦ| |ᛧ,ᛦ|ᚱ|ᛐ,ᛏ| |ᚢ|ᛁ| | ",
"ᛆ,ᛅ|ᛌ,ᛋ| |ᚠ| |ᚽ,ᚼ| |ᚴ|ᛚ|ᚭ,ᚬ",
" | | | |ᛓ,ᛒ|ᚿ,ᚾ|ᛙ,ᛘ|᛫\u200B,᛬\u200B|?,[,]"
]

var medievalkbd = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
"ᚧ,ᚦ| | |ᚱ|ᛑ,ᛐ|ᛣ|ᚤ,ᚢ|ᛂ,ᛁ|ᚯ,ᚮ|ᛕ",
"ᛆ|ᛌ| |ᚡ,ᚠ| |ᚼ| |ᚵ,ᚴ|ᛚ|ᛅ",
"ᛋ| |ᛍ| |ᛔ,ᛒ|ᚿ|ᛘ|᛫\u200B,᛬\u200B|?,[,]"
]

var elderkbd = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
"ᚦ|ᚹ|ᛖ|ᚱ|ᛏ|ᛣ|ᚢ|ᛁ|ᛟ|ᛈ",
"ᚫ|ᛊ|ᛞ|ᚠ|ᚷ|ᚺ|ᛃ|ᚲ|ᛚ|ᛇ",
"ᛉ| |ᛍ| |ᛒ|ᛜ,ᚾ|ᛗ|᛫\u200B,᛬\u200B|?,[,]"
]

var anglosaxonkbd = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
"ᚦ|ᚹ|ᛠ,ᛖ|ᚱ|ᛏ|ᚣ|ᚢ|ᛇ,ᛁ|ᛟ,ᚩ|ᛈ",
"ᚫ,ᚪ|ᛋ|ᛞ|ᚠ|ᚸ,ᚷ|ᚻ|ᛡ|ᛤ,ᛣ|ᛚ​|ᛇ",
" |ᛉ|ᚳ| |ᛒ|ᛝ,ᚾ|ᛗ|᛫\u200B,᛬\u200B|?,[,]"
]


var latinkbd = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»|‘,̀",
"þ̈,þ|w|é,e|ʀ,r|ẗ,t|ý,y|ü,ú,u|ï,í,i|ø,o|ą,ǫ,ó|p",
"ã,á,a|s|ð,d|f̈,f|g̈,g|h|j|k̈,k|l|’|e͡a,æ,œ",
"z|x|c|v|b̈,b|ŋ,n|m|;|.,:"
]






var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=",
"q,w,e,r,t,y,u,i,o,p,[,],",
"a,s,d,f,g,h,j,k,l,;,',\\",
"z,x,c,v,b,n,m,,.,/,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']




function highlightEndings (caseList) {
	// makes the cells in the table of case endings light up
	// caseList: space-separated list of cell ids
	
	var cells = caseList.split(' ')
	for (var c=0;c<cells.length;c++) {
		var currentCell = document.getElementById(cells[c])
		if (currentCell.className == 'plural') currentCell.style.backgroundColor = 'green'
		else currentCell.style.backgroundColor = 'red'
		}
	}

function blankEndings () {
	var cells = document.getElementById('caseEndings').querySelectorAll('td')
	for (var c=0;c<cells.length;c++) cells[c].style.backgroundColor = 'white'
	}