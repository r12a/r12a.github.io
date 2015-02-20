var _showRadiceTrans =  ''
var _showISOTrans = ''


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


