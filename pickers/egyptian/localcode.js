globals.showLOCTrans = ''
globals.showAlphaTrans =  ''
globals.showLatinCapsTrans = ''
var _showISOTrans = ''


function event_mouseoverChar ()  {
	// display character information ADAPTED to retrieve description
	var span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	//charinfo = document.createTextNode( this.title );
	
	var charname = this.title
	if (charData[this.textContent] && charData[this.textContent].s) {
		charname += ' ( '+charData[this.textContent].s+' )'
		}
	var charinfo = document.createTextNode( charname )
	
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	
	// highlight similar characters
	if (globals.showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			}
		}
	}
	


function localInitialise () {
	//  SET MOUSEOVERS FOR GROUP SELECTORS
	// set mouseover/mouseout functions for all imgs in shapeSelect list
	var node = document.querySelectorAll( '.shapeSelect' ) 
	for (var j = 0; j < node.length; j++ ) { 
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		}

	}
	

	
function searchFor ( str, scriptname ) { 

	if (str == 'xxxxxx') {
		document.getElementById('searchResults').style.display = 'none'
		return
		}

	str = str.replace( /\:/g, '\\b' );
	var re = new RegExp(str, "i"); 
	var out = '' 
	
	for (var char in charData) {
		var hex = convertChar2CP(char)
		if (charData[char].n && charData[char].n.match(re)) {
			//console.log('matched',charData[char].n,' as ',char)
			out += '<span class="c" title="U+'+hex+' '+charData[char].n+'">'+char+'</span> '
			}
		}
	
	if (out == '') out = 'Not found'
	
	var resultsCell = document.getElementById('searchResults')
	resultsCell.style.display = 'block'
	resultsCell.innerHTML = out
	
	// set up mouseovers
	var node = document.querySelectorAll( '#searchResults span' ) 
	for (var j = 0; j < node.length; j++ ) { 
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		node[j].onclick = event_clickOnChar;
		}
	return false;
	}
	



function searchForKeywords ( str, usage ) { 
	// searches for a keyword
	// str, the keyword to search for
	// usage, true or false, indicates whether or not to include .u keywords

	if (str == 'xxxxxx') {
		document.getElementById('searchResults').style.display = 'none'
		return
		}

	str = str.replace( /\:/g, '\\b' );
	var re = new RegExp(str, "i"); 
	var out = '' 
	
	for (var char in charData) {
		var hex = convertChar2CP(char)
		if (charData[char].s && charData[char].s.match(re)) {
			//console.log('matched',charData[char].n,' as ',char)
			out += '<span class="c" title="U+'+hex+' '+charData[char].n+'">'+char+'</span> '
			}
		}
	
	if (out == '') out = 'Not found'
	
	var resultsCell = document.getElementById('searchResults')
	resultsCell.style.display = 'block'
	resultsCell.innerHTML = out
	
	// set up mouseovers
	var node = document.querySelectorAll( '#searchResults span' ) 
	for (var j = 0; j < node.length; j++ ) { 
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		node[j].onclick = event_clickOnChar;
		}
	return false;
	}
	


function searchForKeywords ( str, usage ) { 
	// searches for a keyword
	// str, the keyword to search for
	// usage, true or false, indicates whether or not to include .u keywords

	if (str == '') {
		document.getElementById('searchResults').style.display = 'none'
		return
		}

	str = str.replace( /\:/g, '\\b' )
	var re = new RegExp(str, "i")
	var out = '' 
	var found = false
	
	for (var char in charData) {
		var hex = convertChar2CP(char)
		if (charData[char].s && charData[char].s.match(re)) {
			out += '<span class="c" title="U+'+hex+' '+charData[char].n+'">'+char+'</span> '
			found = true
			}
		}
	
	if (! found && usage == true) {
		for (var char in charData) {
			var hex = convertChar2CP(char)
			if (charData[char].u && charData[char].u.match(re)) {
				out += '<span class="c" title="U+'+hex+' '+charData[char].n+'">'+char+'</span> '
				found = true
				}
			}
		}
	
	if (out == '') out = 'Not found'
	
	var resultsCell = document.getElementById('searchResults')
	resultsCell.style.display = 'block'
	resultsCell.innerHTML = out
	
	// set up mouseovers
	var node = document.querySelectorAll( '#searchResults span' ) 
	for (var j = 0; j < node.length; j++ ) { 
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		node[j].onclick = event_clickOnChar;
		}
	return false;
	}
	


function convertPhonemes (type) {
	searchForPhones(getHighlightedText(_output), '')
	_output.focus()
	}


function searchForPhones ( str, scriptname ) { 

	if (str == '') {
		document.getElementById('searchResults').style.display = 'none'
		return
		}

	var re = new RegExp(str, "i"); 
	var out = '' 
	var alternatives
	
	for (var char in charData) {
		var hex = convertChar2CP(char)
		if (charData[char].p) {
			alternatives = charData[char].p.split(',')
			for (c=0;c<alternatives.length;c++) {
				if (alternatives[c] == str) {
					out += '<span class="c" title="U+'+hex+' '+charData[char].n+'">'+char+'</span> '
					}
				}
			}
		}
	
	if (out == '') out = 'Not found'
	
	var resultsCell = document.getElementById('searchResults')
	resultsCell.style.display = 'block'
	resultsCell.innerHTML = out
	
	// set up mouseovers
	var node = document.querySelectorAll( '#searchResults span' ) 
	for (var j = 0; j < node.length; j++ ) { 
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		node[j].onclick = event_clickOnChar;
		}
	return false;
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

end: ''
}




