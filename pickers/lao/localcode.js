var _showSimTrans = ''


function localInitialise () {
	}
	

var _h = {
'0E81': ['0E96', '0ED7'],
'0E82': ['0E8A'],
'0E84': ['0E94'],
'0E87': ['0EC6'],
'0EAA': ['0EA5'],
'0E8A': ['0E82'],
'0E8D': ['0EA2'],
'0E94': ['0E95', '0E84'],
'0E95': ['0ED8', '0E94'],
'0E96': ['0ED7', '0E81'],
'0E97': ['0EAB', '0EDC', '0EDD'],
'0E99': ['0EA1', '0E9A'],
'0E9A': ['0E9B', '0E99'],
'0E9B': ['0E9A', '0E99'],
'0E9C': ['0E9D', '0E9E', '0E9F', '0ED6'],
'0E9E': ['0E9D', '0E9C', '0E9F', '0ED6'],
'0E9D': ['0E9C', '0E9E', '0E9F', '0ED6'],
'0EA1': ['0E99', '0E9A'],
'0EA2': ['0E8D'],
'0EA5': ['0EAA'],
'0EAB': ['0EDC', '0EDD', '0E97'],
'0EAE': ['0EA3'],
'0EDC': ['0EDD', '0EAB', '0E97'],
'0EDD': ['0EDC', '0EAB', '0E97'],
'0EA3': ['0EAE'],
'0EB3': ['0EB2'],
'0EB2': ['0EB3'],
'0EC6': ['0EC60EA50EC6'],
'0EC60EA50EC6': ['0EC6'],
'0ED7': ['0E96', '0E81'],
'0ED8': ['0E95'],
'0ED9': ['0E97'],
'0ED6': ['0E9D', '0E9F', '0E9C', '0E9E'],
'0ED2': ['0ED5', '0ED4'],

end: {}
}






function sendVowelLeft (str) {
	lv = str.match(/ເ|ແ|ໂ|ໃ|ໄ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}