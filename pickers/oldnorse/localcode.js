var _showLOCTrans = ''
var _showIPATrans = ''
var _showCaseEndings = ''

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
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»|‘,̀",
"œ,q|w|é,e|ʀ,r|þ,t|ý,y|ú,u|í,i|ø,o|ǫ,ó|p",
"á,a|s|ð,d|f|g|h|j|k|l|’|æ",
"z|x|c|v|b|n|m|;|.,:|\u0361"
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=",
"q,w,e,r,t,y,u,i,o,,p,[,],",
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