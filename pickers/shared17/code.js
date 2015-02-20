
function selectAll () {
	var output = document.getElementById('output')
	output.focus()
	output.select()
	}

function deleteAll () {
	var output = document.getElementById('output')
	output.value = ''
	}

function openEscapeWindow () {
	var converter = window.open('/apps/conversion/?q='+
			encodeURIComponent(document.getElementById('output').value), 'converter') 
	converter.focus()
	}


function toggleExtraControlsold () {
	var normalise = document.getElementById('normaliseControl')
	var uifont = document.getElementById('uiFontControl')
	//var shapehints = document.getElementById('shapehintControl')
	var toggle = document.getElementById('showMoreControls')
	if (normalise.style.display == 'none') { 
		normalise.style.display = 'block'
		uifont.style.display = 'block'
		//shapehints.style.display = 'block'
		toggle.textContent = '\u00A0 << hide'
		}
	else {  
		normalise.style.display = 'none' 
		uifont.style.display = 'none'
		//shapehints.style.display = 'none'
		toggle.textContent = 'more controls'
		}
	}


function toggleExtraControls () {
	var divs = document.getElementById('extracontrols').querySelectorAll('.control')
	var toggle = document.getElementById('showMoreControls')
	for (var i=0;i<divs.length;i++) {
		if (divs[i].style.display == 'none') {
			divs[i].style.display = 'block'
			toggle.textContent = '\u00A0 << hide'
			}
		else {
			divs[i].style.display = 'none'
			toggle.textContent = 'more controls'
			}	
		}
	}


function toggleNotes () {
	var notes = document.getElementById('detailednotes')
	var showNotes = document.getElementById('showNotes')
	if (notes.style.display=='block') {
		notes.style.display='none' 
		showNotes.textContent='show notes'
		} 
	else {
		notes.style.display='block'
		showNotes.textContent='hide notes'
		} 
	}



var _view = 'alphabet';
var _views = new Array; // holds the id values for each div containing a table of characters
var _n11n = 'nfc';
var _refocus = true;
var _showShapeHints = ''   // indicates whether or not to show shape hinting
var _showShapeLookup = ''   // indicates whether or not to show shape images for lookup
var _showLatinTrans = ''
var _showKeyboard = ''


function add(ch) { 
	// ch: string, the text to be added
	// _cluster: boolean, global variable, set if this is a consonant cluster (used for vowels that surround base)
	// _view: string, indicates which view is showing - this is important, since non-intelligent ordering is needed in the default view
	// NOTE: _combiningBase needs to be assigned in localcode.js
	
	// remove leading base characters if this is a combining character
	if (ch.length > 1) {
		while (ch.charAt(0) == _combiningBase) {
			ch = ch.substr(1)
			}
		}
	if (document.getElementById('output').style.display == 'none') { return; }

	
	var outputNode = document.getElementById( 'output' ); // points to the output textarea

	
	//IE support
	if (document.selection) { 
		outputNode.focus();
	    range = document.selection.createRange();
		
		range.text = ch; 
	    range.select(); 
		if (_refocus) { outputNode.focus(); }
		}
	// Mozilla and Safari support
	else if (outputNode.selectionStart || outputNode.selectionStart == '0') {
		var startPos = outputNode.selectionStart;
		var endPos = outputNode.selectionEnd;
		var cursorPos = startPos;
		var scrollTop = outputNode.scrollTop;
		var baselength = 0;
		
		outputNode.value = outputNode.value.substring(0, startPos)
              + ch
              + outputNode.value.substring(endPos, outputNode.value.length);
		cursorPos += ch.length;

		if (_refocus) { outputNode.focus();  }
		outputNode.selectionStart = cursorPos;
		outputNode.selectionEnd = cursorPos;
		//outputNode.scrollTop = scrollTop;
		if (! _refocus) { outputNode.blur();  }
		}
	else {
		outputNode.value += ch;
		if (_refocus) { outputNode.focus(); }
		}
		
	// normalize
	if (_n11n=='nfc') { outputNode.value = nfc(outputNode.value); }
	else if (_n11n=='nfd') { outputNode.value = nfd(outputNode.value);}
	}

	

	
	
function selectFont ( newFont ) {
	document.getElementById( 'output' ).style.fontFamily = newFont;
	document.querySelector('#panel #title').style.fontFamily = newFont;
	//for (i=0; i<_views.length; i++) {
		//document.getElementById(_views[i]).style.fontFamily = newFont;
		//}
	document.getElementById('fontName').value="";
	}
	
function customFont ( newFont ) { 
	document.getElementById( 'output' ).style.fontFamily = newFont;
	document.querySelector('#panel #title').style.fontFamily = newFont;
	//for (i=0; i<_views.length; i++) {
		//document.getElementById(_views[i]).style.fontFamily = newFont;
		//}
	document.getElementById('fontList').value='0';
	}
	
function changeFontSize ( newSize ) {
	document.getElementById( 'output' ).style.fontSize = newSize + 'px';
	}
	

function searchFor ( str, scriptname ) { 

	var str = str.replace( /\:/g, '\\b' );
	var re = new RegExp(str, "i"); 
	var characters = new Array; 
	
	borderwidth = '1px';
	characters = document.querySelectorAll( '.c, .f' )
	for (var i = 0; i < characters.length; i++ ) {
			characters[i].style.border = '0';
			titletext = characters[i].title.toLowerCase();
			titletext = titletext.replace(scriptname, '');
			if (titletext.search(re, 0) > -1 ) {
				characters[i].style.border = borderwidth+' solid red';
				}
		}

	return false;
	}
	




function convertCP2Char ( textString ) { 
  var outputString = '';
  textString = textString.replace(/[^a-fA-F0-9]/g, ' ');
  textString = textString.replace(/^\s+/, '');
  textString = textString.replace(/\s+$/, '');
  if (textString.length == 0) { return ""; }
        textString = textString.replace(/\s+/g, ' ');
  var listArray = textString.split(' ');
  for ( var i = 0; i < listArray.length; i++ ) {
    var n = parseInt(listArray[i], 16);
    if (n <= 0xFFFF) {
		outputString += String.fromCharCode(n);
		} 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		outputString += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
		} 
	else {
		outputString += 'convertCP2Char error: Code point out of range: '+textString;
		}
	}
  return( outputString );
  }
	

function dec2hex ( textString ) {
	return (textString+0).toString(16).toUpperCase();
	}


function convertChar2CP ( textString ) { 
	var haut = 0;
	var n = 0;
	var CPstring = '';
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertChar2CP: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				CPstring += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
				haut = 0;
				continue;
				}
			else {
				CPstring += 'Error in convertChar2CP: surrogate out of range ' + dec2hex(haut) + '!';
				haut = 0;
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b;
			}
		else {
			CPstring += dec2hex(b) + ' ';
			}
		}
	return CPstring.substring(0, CPstring.length-1);
	}

	

	
function switchView (toView) {
	// toView: string, id of the div surrounding the content to be viewed
	// _view: string, stores the name of the div id so that addchar() can act in a view sensitive way
	
	_view = toView;
	
	// hide all views 
	var views = document.getElementById('tables').childNodes;
	for (var i=0; i<views.length; i++) {
		if (views[i].nodeName == 'DIV') { views[i].style.display = 'none'; }
		}
	
	if (toView == 'shape') {
		document.getElementById('alphabet').style.display = 'block'
		document.getElementById('shapelist').style.display = 'block'
		}
	else { document.getElementById(toView).style.display = 'block'; }
	}
	



function findShape (shapelist, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')

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
	}


function choose () {
	var replacement = this.textContent
	if (replacement.charAt(0) == '\u00A0') { replacement = replacement.substr(1) }
	//document.createTextNode(replacement)
	replacement = replacement.replace(/∅/,'')
	this.parentNode.innerHTML = replacement
	}

function closeTranscription () {
	document.getElementById('transcriptionWrapper').style.display = 'none'
	}

function getHighlightedText (node) {
	// returns the highlighted text, or returns all the text, if no highlight
	var chstring
	
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.value }
	return chstring
	}

function transcribe (node, direction) {
	// node: the output element
	// direction: a string that the local routine will recognise to do the right transcription
	var chstring = getHighlightedText(node) // the text to be converted
	
	// add a ¶ to avoid breaking on lookahead; if no selection, try whole field; if still nothing, abort
	chstring = chstring.toLowerCase()+' ¶'
	//if (chstring==' ¶') { chstring = node.value.toLowerCase()+' ¶' }
	if (chstring==' ¶') { return }

	// for security, remmove angle brackets
	chstring = chstring.replace(/</g,'')
	chstring = chstring.replace(/>/g,'')
	
	//var close = "<div id='closeTranscription' title='Hide transcription'>x</div>"
	document.getElementById('transcription').innerHTML = localtranscribe(node, direction, chstring)//+close
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	alts = document.querySelectorAll('.altfirst, .altlast, .alt')
	for (i=0;i<alts.length;i++) {
		alts[i].onclick = choose
		}
	//var close = document.querySelector("#closeTranscription")
	//close.onclick = closeTranscription
	}

function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'transparent'
		}
	}
	
	

	

// INITIALISATION


function makeKeyboard () { 

	var keyboardguide = [
	"1,2,3,4,5,6,7,8,9,0,-,=",
	"q,w,e,r,t,y,u,i,o,p,[,]",
	"a,s,d,f,g,h,j,k,l,;,',\\",
	"`,z,x,c,v,b,n,m,,.,/"
	]

	if (typeof keyboarddef == 'undefined' || document.getElementById('keyboard') == null) 
		{ return }
		
	var theKeyboard = document.getElementById('keyboard')
	
	for (kr=0;kr<4;kr++) {
		keyrownode = document.createElement('div')
		keyrownode.className = 'keyboardrow'
		switch (kr) {
			case 0: keyrownode.style.paddingLeft = '5px'; break
			case 1: keyrownode.style.paddingLeft = '20px'; break
			case 2: keyrownode.style.paddingLeft = '30px'; break
			case 3: keyrownode.style.paddingLeft = '50px'; break
			}
			
		var keyrow = keyboarddef[kr].split(',')
		var keyrowguide = keyboardguide[kr].split(',')
		for (key=0;key<keyrow.length;key++) {
			chars = keyrow[key].split('|')
			keynode = document.createElement('div')
			keynode.className = 'key'
			
			var guide = document.createElement('span')
			guide.appendChild(document.createTextNode(keyrowguide[key]))
			guide.className = 'kg'
			keynode.appendChild(guide)
			
			shiftkey = document.createElement('span')
			shiftkey.className = 's'
			shiftkey.onmouseover = event_mouseoverChar
			shiftkey.onmouseout = event_mouseoutChar
			shiftkey.onclick = event_clickOnSpanChar
			shiftkey.appendChild(document.createTextNode(chars[0]))
			normalkey = document.createElement('span')
			normalkey.className = 'n'
			normalkey.onmouseover = event_mouseoverChar
			normalkey.onmouseout = event_mouseoutChar
			normalkey.onclick = event_clickOnSpanChar
			normalkey.appendChild(document.createTextNode(chars[1]))
			keynode.appendChild(shiftkey)
			keynode.appendChild(normalkey)
			
			keyrownode.appendChild(keynode)
			}
		theKeyboard.appendChild(keyrownode)
		}
	}
	
	
	
function event_mouseoverChar ()  {
	// display character information
	span = document.createElement( 'span' );
	span.setAttribute( 'id', 'charname' );
	charinfo = document.createTextNode( this.title );
	span.appendChild(charinfo);
	var chardata = document.getElementById('chardata');	
	chardata.replaceChild( span, chardata.firstChild );
	
	// highlight this character
	this.style.backgroundColor = '#CF9'
	this.style.backgroundColor = '#fc6'
	//this.style.backgroundColor = '#FC0'
	
	// highlight similar characters
	if (_showShapeHints && _h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#E6FFCD'
			document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE6B2'
			//document.getElementById(_h[ptr][i]).style.backgroundColor = '#FFE680'
			}
		}
	}
	
function event_mouseoutChar ()  {
	// unhighlight this character
	this.style.backgroundColor = 'transparent'
	
	// unhighlight similar characters
	if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = 'transparent'
			}
		}
	}
	
function event_clickOnChar () {
	clearHighlights()
	add(this.textContent)
	}
function event_clickOnTranscriptionChar () {
	str = this.textContent.replace(/\u00A0/g, '')
	add(str);
	}
function event_clickOnSpanChar () {
	add(this.firstChild.nodeValue);
	}
	
function titleSort (a, b) {
	return parseInt(a.title, 16)-parseInt(b.title, 16);
	}

	
function initialise() { 
	// _views: array, listing ids of all view divs
	// NOTE: _combiningBase needs to be assigned in localcode.js
	
	//document.getElementById('output').contentEditable = 'true';
	
	// set up a list of all views in global _views variable
	var viewnodes = document.getElementById('tables').childNodes;
	var count = 0;
	for (i=0; i<viewnodes.length; i++) {
		if (viewnodes[i].nodeName == 'DIV' || viewnodes[i].nodeName == 'div') { _views[count] = viewnodes[i].id; count++; }
		}
		
	// stop IE changing the focus when clicking on an img
	//if (document.all && document.getElementById('alphabet')) {  
	//	document.getElementById('alphabet').onselectstart = function () { return false };
	//	}
	

	// set ids to codepoint values of character sequence (with no leading zeros)
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		content = node[n].textContent
		id=''
		for (i=0;i<content.length;i++) {
			id += convertChar2CP(content[i])
			}
		node[n].id = id
		}
	
		

	//  SET MOUSEOVERS
	// set mouseover/mouseout functions for all imgs in all views except class:ph and class:noMouseover
	for (i=0; i<_views.length; i++) {
		var node = document.querySelectorAll( '.c' ); 
		for (var j = 0; j < node.length; j++ ) { 
			prop = node[j].textContent
			if (charData[prop]) { // temporary while we populate the thing
				var codepoint = ''
				for (c=0; c<prop.length; c++) { 
					cp = parseInt(prop.charCodeAt(c),10)
					cp = cp.toString(16).toUpperCase()
					while (cp.length < 4) cp = '0'+cp
					cp = 'U+'+cp
					if (c < prop.length-1) cp += ' '
					codepoint += cp
					}
				node[j].title = codepoint+': '+charData[prop].n
				//node[j].title = charData[prop].cp+': '+charData[prop].name
				}
			else console.log('failed to find data for codepoint',prop)
			node[j].onmouseover = event_mouseoverChar;
			node[j].onmouseout = event_mouseoutChar;
			}
		}

	// SET ONCLICKS
	for (i=0; i<_views.length; i++) {
		var node = document.querySelectorAll( '.c' ); 
		for (var j = 0; j < node.length; j++ ) { 
			prop = node[j].textContent
			if (charData[prop]) { // temporary while we populate the thing
				if(! node[j].className.match(/noOnclick/)) { 
					node[j].onclick = event_clickOnChar;
					}
				}
			}
		}
		
	// set onclicks for transcription characters	
	if (document.getElementById('phonemelist')) {
		var transcriptnodes = document.getElementById('phonemelist').querySelectorAll('span.p'); 
		for (var n = 0; n < transcriptnodes.length; n++ ) {
			transcriptnodes[n].onclick = event_clickOnTranscriptionChar; 
			} 
		}
	

	// add _combiningBase to combining characters
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		prop = node[n].textContent
		if (charData[prop].m) { 
			node[n].textContent = _combiningBase+node[n].textContent
			}
		}

	makeKeyboard()
	}




window.onload = function() { 
	initialise(); 
	localInitialise(); 
	if (defaults.font) { 
		document.getElementById( 'fontName' ).value = defaults.font;  
		document.getElementById( 'output' ).style.fontFamily = defaults.font;
		document.querySelector('#panel #title').style.fontFamily = defaults.font;
		}
	if (defaults.size) { 
		document.getElementById( 'fontSize' ).value = defaults.size;  
		document.getElementById( 'output' ).style.fontSize = defaults.size+'px';
		}
	if (defaults.uifont) { 
		document.getElementById( 'uiFont' ).value = defaults.uifont;  
		setUIFont(defaults.uifont);
		}
	if (defaults.size) { 
		document.getElementById( 'uiFontSize' ).value = defaults.uisize;  
		setUIFontSize(defaults.uisize);
		}
	if (defaults.lineHeight) { 
		document.getElementById( 'lineHeight' ).value = defaults.lineHeight;  
		document.getElementById( 'output' ).style.lineHeight = defaults.lineHeight;
		}
	if (defaults.rows) { 
		document.getElementById( 'rows' ).value = defaults.rows; 
		document.getElementById( 'output' ).style.height = (defaults.rows*100)+'px';
		}
	if (defaults.view) { switchView(defaults.view); }


	// check for parameters and take appropriate action
	parameters = location.search.split('&');
	parameters[0] = parameters[0].substring(1);
	for (var p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=');
		if (pairs[0] == 'uifont') { if (pairs[1]) { document.getElementById('uiFont').value = decodeURI(pairs[1]); setUIFont(decodeURI(pairs[1])) } }
		if (pairs[0] == 'ccbase') { if (pairs[1]) { if (pairs[1]=='none'){pairs[1]=''}; selectCCBase(decodeURI(pairs[1])) } }
		}


	//document.location = "#main"
	};



function setUIFont (font) {
	chars = document.querySelectorAll('.c')
	for (i=0;i<chars.length;i++) {
		chars[i].style.fontFamily = font
		}
	}
	
function setUIFontSize (size) {
	chars = document.querySelectorAll('.c')
	for (i=0;i<chars.length;i++) {
		chars[i].style.fontSize = size+'px'
		}
	}
	


function makeExample (str, lang, dir) {
	parts = str.split('/')
	var out = ''
	out += '<span class="ex" lang="'+lang+'"'
	if (dir=='rtl') { out += ' dir="rtl"' }
	out += '>'+parts[0]+'</span> '
	if (parts[1]) {
		out += '<span class="ipa">'+parts[1]+'</span> '
		}
	if (parts[2]) {
		out += '<span class="trans">'+parts[2]+'</span> '
		}
	if (parts[3]) {
		out += '<span class="meaning">'+parts[3]+'</span> '
		}
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = out.trim()
	}


function closeTranscriptionChoice () {
	document.getElementById('transcriptionChoice').style.display = 'none'
	}
	
function moveTranscription () {
	add(document.getElementById('transcription').textContent)
	}
	


function dotrans (altlist) { 
	inserts = altlist.split(',')
	if (inserts.length == 1 && inserts[0] != '-') add(inserts[0])
	else {
		insert = ''
		for (i=0;i<inserts.length;i++) {
			if (inserts[i] == '+' || inserts[i] == '-') insert += '<bdi style="color:red">'+inserts[i]+'</bdi>'
			else { 
				if (charData[inserts[i][0]].m) { inserts[i] = _combiningBase+inserts[i] }
				insert += "<bdi class=c onclick='add(\""+inserts[i]+"\"); closeTranscriptionChoice();'>"+inserts[i]+"</bdi> "
				}
			}
		insert += "<bdi style='font-size: 28px;color: #ccc;cursor:pointer;' onclick='closeTranscriptionChoice()'>X</bdi>"
		document.getElementById('transcriptionChoice').innerHTML = insert
		document.getElementById('transcriptionChoice').style.display = 'block'
		
		}
	}



function selectCCBase (base) {
	if (base == '0') return
	
	//var formerbase = _combiningBase
	//_combiningBase = base
	

	// add _combiningBase to combining characters
	nodes = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < nodes.length; n++ ) { 
		// remove leading base characters if this is a combining character
		if (nodes[n].textContent.length > 1 && _combiningBase != '') {
			while (nodes[n].textContent.charAt(0) == _combiningBase) {
				nodes[n].textContent = nodes[n].textContent.substr(1)
				}
			}
		if (charData[nodes[n].textContent].m && base != '') nodes[n].textContent = base + nodes[n].textContent
		}
	_combiningBase = base
	}