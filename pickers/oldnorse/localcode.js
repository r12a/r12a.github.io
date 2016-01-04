globals.showLOCTrans = ''
globals.showIPATrans = ''
globals.showCaseEndings = ''

function localInitialise () {

	}



var _h = {

end: {}
}



var keyboarddef = [
"1|2|3|4|5|6|7|8|‹,9|›,0|«,»",
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