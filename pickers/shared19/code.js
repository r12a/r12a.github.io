// GLOBAL VARIABLES

var globals = {}
globals.view = 'alphabet';
globals.n11n = 'nfc';
globals.refocus = true;
globals.showShapeHints = ''   // indicates whether or not to show shape hinting
globals.showShapeLookup = ''   // indicates whether or not to show shape images for lookup
globals.showLatinTrans = ''
globals.showKeyboard = ''
var _output




// ACTION ROUTINES

function selectAll () {
	var output = document.getElementById('output')
	output.focus()
	output.select()
	}


function copyToClipboard () {
	// this doesn't work on Safari because S doesn't support execCommand('copy')
	var output = document.getElementById('output')
	var copybuffer = document.getElementById('copybuffer')
	copybuffer.style.display = 'block'
	document.getElementById('output').focus()
	copybuffer.value = getHighlightedText(output)
	copybuffer.focus()
	copybuffer.select()
	document.execCommand('copy')
	output.focus()
	copybuffer.style.display = 'none'
	}
	
function deleteAll () {
	var output = document.getElementById('output')
	output.value = ''
	output.focus()
	}

function showCodepoints () {
	var output = document.getElementById('output')
	showNameDetails(getHighlightedText(output), defaults.language, defaults.blocklocation, 'c' )
	document.querySelector('#panel #title').style.fontFamily = output.style.fontFamily
	output.focus()
	}

function openEscapeWindow () {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	var converter = window.open('/apps/conversion/?q='+	encodeURIComponent(chars), 'converter') 
	output.focus()
	converter.focus()
	}

function doTranscription (type) {
	transcribe(getHighlightedText(_output), type)
	_output.focus()
	}

function makeExample (lang, dir) {
	var output = document.getElementById('output')
	var chars = getHighlightedText(output)
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = getExample(chars, lang, dir)
	output.focus()
	}

function makeCharLink (script, lang, dir) {
	var output = document.getElementById('output')
	document.getElementById('transcriptionWrapper').style.display='block'
	document.getElementById('transcription').style.display = 'block'
	document.getElementById('transcription').textContent = makeCharacterLink(getHighlightedText(output), script, lang, dir)
	}


function switchAutofocus (desiredState) {
	if (desiredState == 'on') {
		document.getElementById('afon').className='on' 
		document.getElementById('afoff').className='off'
		globals.refocus=true
		}
	else {
		document.getElementById('afon').className='off' 
		document.getElementById('afoff').className='on'
		globals.refocus=false;
		}
	document.getElementById( 'output' ).focus()
	}


function toggleSideBarOption (node, fullTitle, variable, id) {
	if (globals[variable]) {
		globals[variable] = ''
		node.textContent = fullTitle
		node.style.color='white'
		if (id != '') document.getElementById(id).style.display = 'none'
		} 
	else {
		globals[variable] = ' ✓'
		node.textContent=fullTitle+globals[variable]
		node.style.color='orange'
		if (id != '') document.getElementById(id).style.display = 'block'
		} 
	return false
	}


function toggleKbdShift (node) {
	if (node.className =='unshifted') {
		makeKbdUpperCase()
		node.className = 'shifted'
		} 
	else {
		makeKbdLowerCase()
		node.className = 'unshifted'
		}
	}

function setSidebarDefaults (node) {
	menuitems = node.parentNode.querySelectorAll('div'); 
    for (i=1;i<menuitems.length;i++) { 
    	menuitems[i].textContent = menuitems[i].dataset.shorttitle
		menuitems[i].style.color='white'
        toggleSideBarOption(menuitems[i], menuitems[i].title, menuitems[i].dataset.var, menuitems[i].dataset.locn)
		globals[menuitems[i].dataset.var] = ''
		menuitems[i].textContent = menuitems[i].dataset.shorttitle
		menuitems[i].style.color='white'
		if (menuitems[i].dataset.locn != '') document.getElementById(menuitems[i].dataset.locn).style.display = 'none'
        }
	}




// REGULAR FUNCTIONS

function getSelectionText() {
	// can't get this to work - thought it might be an alternative to getHighlightedText
    var text = "";
    if (window.getSelection) {
		var selObj = window.getSelection()
        text = selObj.toString();
    } else if (window.selection && window.selection.type != "Control") {
        text = window.selection.createRange().text;
    }
    return text;
}

function getHighlightedText (node) {
	// returns the highlighted text, or returns all the text, if no highlight
	var chstring
	
	//older IE support
	if (document.selection) chstring = document.selection.createRange()

	// modern browser support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.value }
	return chstring
	}


function paste () {
	document.execCommand('paste')
	}


function getExample (str, lang, dir) {
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
	return out.trim()
	}


function toggleExtraControls () {
	var divs = document.getElementById('extracontrols').querySelectorAll('.control')
	var toggle = document.getElementById('showMoreControls')
	for (var i=0;i<divs.length;i++) {
		if (divs[i].style.display == 'none') {
			divs[i].style.display = 'block'
			toggle.innerHTML = '<span class="optionTrigger">\u00A0 << hide</span>'
			}
		else {
			divs[i].style.display = 'none'
			toggle.innerHTML = '<span class="optionTrigger">more controls</span>'
			}	
		}
	}


function toggleNotes () {
	var notes = document.getElementById('detailednotes')
	var showNotes = document.getElementById('showNotes')
	if (notes.style.display=='block') {
		notes.style.display='none' 
		showNotes.innerHTML = '<span class="optionTrigger">show notes</span>'
		} 
	else {
		notes.style.display='block'
		showNotes.innerHTML = '<span class="optionTrigger">hide notes</span>'
		} 
	}



function add(ch) { 
	// ch: string, the text to be added
	// _cluster: boolean, global variable, set if this is a consonant cluster (used for vowels that surround base)
	// globals.view: string, indicates which view is showing - this is important, since non-intelligent ordering is needed in the default view
	
	// remove leading base characters if this is a combining character
	if (ch.length > 1) {
		while (ch.charAt(0) == defaults.ccbase) {
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
		if (globals.refocus) { outputNode.focus(); }
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

		if (globals.refocus) { outputNode.focus();  }
		outputNode.selectionStart = cursorPos;
		outputNode.selectionEnd = cursorPos;
		//outputNode.scrollTop = scrollTop;
		if (! globals.refocus) { outputNode.blur();  }
		}
	else {
		outputNode.value += ch;
		if (globals.refocus) { outputNode.focus(); }
		}
		
	// normalize
	if (globals.n11n=='nfc') { outputNode.value = nfc(outputNode.value); }
	else if (globals.n11n=='nfd') { outputNode.value = nfd(outputNode.value);}
	}

	

	
	
function selectFont ( newFont ) {
	newFont = '"'+newFont+'", "Doulos SIL"'
	document.getElementById( 'output' ).style.fontFamily = newFont;
	document.querySelector('#panel #title').style.fontFamily = newFont;
	document.getElementById('fontName').value="";
	}
	
function customFont ( newFont ) { 
	var temp = newFont
	newFont = '"'+newFont+'", "Doulos SIL"'
	document.getElementById( 'output' ).style.fontFamily = newFont;
	document.querySelector('#panel #title').style.fontFamily = newFont;
	document.getElementById('fontList').value='0';
	addFontToLists(temp, 'fontList,uiFont');
	}

function changeFontSize ( newSize ) {
	document.getElementById( 'output' ).style.fontSize = newSize + 'px';
	}


function setUIFont (font) {
	chars = document.querySelectorAll('.c,.k1,.k2,.k3,.shapeSelect')
	for (i=0;i<chars.length;i++) {
		chars[i].style.fontFamily = font
		}
	document.querySelector('#extrashapes').style.fontFamily = font;
	document.querySelector('#transcriptionChoice').style.fontFamily = font;
	}
	
function setUIFontSize (size) {
	chars = document.querySelectorAll('.c')
	for (i=0;i<chars.length;i++) {
		chars[i].style.fontSize = size+'px'
		}
	document.querySelector('#extrashapes').style.fontSize = size+'px';
	}
	




function searchFor ( str, scriptname ) { 

	str = str.replace( /\:/g, '\\b' );
	var re = new RegExp(str, "i"); 
	var characters = [] 
	
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
	// globals.view: string, stores the name of the div id so that addchar() can act in a view sensitive way
	
	globals.view = toView;
	
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
	



function findShape (shapelist, extrashapes, show) { 
	// highlights characters that contain a given shape
	// shapelist: string, comma-separated list of ids
	// extrashapes: string, comma-separated list of characters to display below 
	//						typically multiples, characters not in chart, or lookups for ethiopic, latin, etc
	// status: boolean, indicates whether to highlight or remove highlighting

	var shapelistarray = shapelist.split(',')
	var extrashapesarray = extrashapes.split(',')

	clearHighlights()

	if (shapelist != '') {
		if (show) {
			for (var i=0;i<shapelistarray.length;i++) { 
				document.getElementById(shapelistarray[i]).style.backgroundColor = '#FFE6B2'
				}
			}
		else {
			for (var i=0;i<shapelistarray.length;i++) {
				document.getElementById(shapelistarray[i]).style.backgroundColor = 'transparent'
				}
			}
		}
	
	if (extrashapesarray.length > 0) {
		document.getElementById('extrashapes').textContent = ''
		for (i=0;i<extrashapesarray.length;i++) {
			span = document.createElement('span')
			
			
			
			
			prop = extrashapesarray[i]
			var chars = []
			convertStr2DecArray(prop, chars)
			var codepoint = ''
				for (c=0; c<chars.length; c++) { 
					cp = chars[c].toString(16).toUpperCase()
					while (cp.length < 4) cp = '0'+cp
					cp = 'U+'+cp
					if (c < prop.length-1) cp += ' '
					codepoint += cp
					}
			
			/*
			prop = extrashapesarray[i]
				var codepoint = ''
				for (c=0; c<prop.length; c++) { 
					cp = parseInt(prop.charCodeAt(c),10)
					cp = cp.toString(16).toUpperCase()
					while (cp.length < 4) cp = '0'+cp
					cp = 'U+'+cp
					if (c < prop.length-1) cp += ' '
					codepoint += cp
					}
					*/
			if (charData[prop]) span.title = codepoint+': '+charData[prop].n
			else span.title = codepoint
				
			span.onmouseover = event_mouseoverChar
			span.onmouseout = event_mouseoutChar
			span.onclick = event_clickOnChar
			if (charData[extrashapesarray[i]] && charData[extrashapesarray[i]].m) span.textContent  = defaults.ccbase + extrashapesarray[i]
			else span.textContent = extrashapesarray[i]
			document.getElementById('extrashapes').appendChild(span)
			document.getElementById('extrashapes').appendChild(document.createTextNode(' '))
			}
		document.getElementById('extrashapes').style.fontFamily = document.getElementById('uiFont').value
		document.getElementById('extrashapes').style.fontSize =  document.getElementById('uiFontSize').value+'px'
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


function transcribe (chstring, direction) {
	// node: the output element
	// direction: a string that the local routine will recognise to do the right transcription
	if (chstring=='') { return }

	// for security, remmove angle brackets
	chstring = chstring.replace(/</g,'')
	chstring = chstring.replace(/>/g,'')
	
	var transcription = localtranscribe(direction, chstring)
	//var transcription = localtranscribe(direction, chstring)
	document.getElementById('transcription').innerHTML = transcription
	document.getElementById('transcriptionWrapper').style.display = 'block' 
	alts = document.querySelectorAll('.altfirst, .altlast, .alt')
	for (i=0;i<alts.length;i++) {
		alts[i].onclick = choose
		}
	return transcription
	}

function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'transparent'
		}
	}
	
	

	

// INITIALISATION

function getTitle (textcontent) {
		if (charData[textcontent]) { 
			var codepoint = ''
			for (c=0; c<textcontent.length; c++) { 
				cp = parseInt(textcontent.charCodeAt(c),10)
				cp = cp.toString(16).toUpperCase()
				while (cp.length < 4) cp = '0'+cp
				cp = 'U+'+cp
				if (c < textcontent.length-1) cp += ' '
				codepoint += cp
				}
			return codepoint+': '+charData[textcontent].n
			}
	}
	
	


function makeKeyboard (chosenKbd) { 

	if (typeof keyboarddef === 'undefined' || document.getElementById('keyboard') == null) 
		{ return }
		
	var theKeyboard = document.getElementById('keyboard')
	theKeyboard.innerHTML = ''
	
	for (kr=0;kr<chosenKbd.length;kr++) {
		keyrownode = document.createElement('div')
		keyrownode.className = 'keyboardrow'
		keyrownode.style.paddingLeft = keyboardRowOffset[kr]
			
		var keyrow = chosenKbd[kr].split('|')
		var keyrowguide = keyboardguide[kr].split(',')
		for (key=0;key<keyrow.length;key++) {
			chars = keyrow[key].split(',')
			keynode = document.createElement('div')
			keynode.className = 'key'
			
			var guide = document.createElement('span')
			guide.appendChild(document.createTextNode(keyrowguide[key]))
			guide.className = 'kg'
			keynode.appendChild(guide)
			
			if (chars.length == 1) {
				normalkey = document.createElement('span')
				normalkey.className = 'k1'
				normalkey.onmouseover = event_mouseoverChar
				normalkey.onmouseout = event_mouseoutChar
				normalkey.onclick = event_clickOnSpanChar
				normalkey.title = getTitle(chars[0])
				normalkey.appendChild(document.createTextNode(chars[0]))
				
				keynode.appendChild(normalkey)
				}
			else if (chars.length == 2) {
				shiftkey = document.createElement('span')
				shiftkey.className = 'k2'
				shiftkey.onmouseover = event_mouseoverChar
				shiftkey.onmouseout = event_mouseoutChar
				shiftkey.onclick = event_clickOnSpanChar
				shiftkey.title = getTitle(chars[0])
				shiftkey.appendChild(document.createTextNode(chars[0]))
				
				normalkey = document.createElement('span')
				normalkey.className = 'k2'
				normalkey.onmouseover = event_mouseoverChar
				normalkey.onmouseout = event_mouseoutChar
				normalkey.onclick = event_clickOnSpanChar
				normalkey.title = getTitle(chars[1])
				normalkey.appendChild(document.createTextNode(chars[1]))
				
				keynode.appendChild(shiftkey)
				keynode.appendChild(normalkey)
				}
			
			else if (chars.length == 3) {
				thirdkey = document.createElement('span')
				thirdkey.className = 'k3'
				thirdkey.onmouseover = event_mouseoverChar
				thirdkey.onmouseout = event_mouseoutChar
				thirdkey.onclick = event_clickOnSpanChar
				thirdkey.title = getTitle(chars[0])
				thirdkey.appendChild(document.createTextNode(chars[0]))

				shiftkey = document.createElement('span')
				shiftkey.className = 'k3'
				shiftkey.onmouseover = event_mouseoverChar
				shiftkey.onmouseout = event_mouseoutChar
				shiftkey.onclick = event_clickOnSpanChar
				shiftkey.title = getTitle(chars[1])
				shiftkey.appendChild(document.createTextNode(chars[1]))
				
				normalkey = document.createElement('span')
				normalkey.className = 'k3'
				normalkey.onmouseover = event_mouseoverChar
				normalkey.onmouseout = event_mouseoutChar
				normalkey.onclick = event_clickOnSpanChar
				normalkey.title = getTitle(chars[2])
				normalkey.appendChild(document.createTextNode(chars[2]))

				keynode.appendChild(thirdkey)
				keynode.appendChild(shiftkey)
				keynode.appendChild(normalkey)
				}
			
			keyrownode.appendChild(keynode)
			}
		theKeyboard.appendChild(keyrownode)
		}
	// add base for combining characters
	node = theKeyboard.querySelectorAll( '.s, .n, .a' ); 
	for (var n = 0; n < node.length; n++ ) { 
		prop = node[n].textContent
		if (charData[prop] && charData[prop].m) { 
			node[n].textContent = defaults.ccbase+node[n].textContent
			}
		}
	}
	

function makeKbdUpperCase () {
	var theKeyboard = document.getElementById('keyboard')
	node = theKeyboard.querySelectorAll( '.k1, .k2, .k3' ); 
	for (var n = 0; n < node.length; n++ ) { 
		node[n].textContent = node[n].textContent.toUpperCase()
		}
	}
	
function makeKbdLowerCase () {
	var theKeyboard = document.getElementById('keyboard')
	node = theKeyboard.querySelectorAll( '.k1, .k2, .k3' ); 
	for (var n = 0; n < node.length; n++ ) { 
		node[n].textContent = node[n].textContent.toLowerCase()
		}
	}
	
function unshiftAll (kbdList) {
	// puts keyboard buttons into off state
	// kbdList: space separated list of keyboard buttons
	var kbds = kbdList.split(' ')
	for (var i=0;i<kbds.length;i++) document.getElementById(kbds[i]).className = 'unshifted'
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
	if (globals.showShapeHints && _h[this.id]) {
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
	var node = document.querySelectorAll( '.c' ); 
	for (var j = 0; j < node.length; j++ ) { 
		prop = node[j].textContent
		var chars = []
		convertStr2DecArray(prop, chars)
		previoustitle = ''
		if (node[j].title) previoustitle = node[j].title // pick up any title information available
		if (charData[prop]) { // temporary while we populate the thing
			var codepoint = ''
			for (c=0; c<chars.length; c++) { 
				cp = chars[c].toString(16).toUpperCase()
				while (cp.length < 4) cp = '0'+cp
				cp = 'U+'+cp
				if (c < prop.length-1) cp += ' '
				codepoint += cp
				}
			node[j].title = codepoint+': '+charData[prop].n
			//node[j].title = charData[prop].cp+': '+charData[prop].name
			if (previoustitle) node[j].title += ', '+previoustitle

			
			
			/*
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
			if (previoustitle) node[j].title += ', '+previoustitle
			*/
			}
		else console.log('failed to find data for codepoint',prop)
		node[j].onmouseover = event_mouseoverChar;
		node[j].onmouseout = event_mouseoutChar;
		}

	// SET ONCLICKS
	var node = document.querySelectorAll( '.c' ); 
	for (var j = 0; j < node.length; j++ ) { 
		prop = node[j].textContent
		if (charData[prop]) { // temporary while we populate the thing
			if(! node[j].className.match(/noOnclick/)) { 
				node[j].onclick = event_clickOnChar;
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
	

	// add defaults.ccbase to combining characters
	node = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < node.length; n++ ) { 
		prop = node[n].textContent
		if (charData[prop].m) { 
			node[n].textContent = defaults.ccbase+node[n].textContent
			}
		}

	if (typeof keyboarddef !== 'undefined' && document.getElementById('keyboard') != null) 
		makeKeyboard(keyboarddef)
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
		document.getElementById('extrashapes').style.fontFamily = defaults.uifont;
		document.querySelector('#transcriptionChoice').style.fontFamily = defaults.uifont;
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


	// create an element to serve as a buffer from which to copy selections to the clipboard
	// assumes existence of element with id tables
	buffer = document.createElement('textarea')
	buffer.id = 'copybuffer'
	buffer.style.display = 'none'
	buffer.style.position = 'absolute'
	buffer.textContent = ''
	document.getElementById('tables').appendChild(buffer)
	

	// check for parameters and take appropriate action
	parameters = location.search.split('&');
	parameters[0] = parameters[0].substring(1);
	for (var p=0;p<parameters.length;p++) {  
		pairs = parameters[p].split('=');
		if (pairs[0] == 'uifont') { if (pairs[1]) { document.getElementById('uiFont').value = decodeURI(pairs[1]); setUIFont(decodeURI(pairs[1])) } }
		if (pairs[0] == 'ccbase') { if (pairs[1]) { if (pairs[1]=='none'){pairs[1]=''}; selectCCBase(decodeURI(pairs[1])) } }
		}

	_output = document.getElementById('output')
	};



function closeTranscriptionChoice () {
	document.getElementById('transcriptionChoice').style.display = 'none'
	}
	
function moveTranscription () {
	add(document.getElementById('transcription').textContent)
	}
	
function copyTranscription () {
	var output = document.getElementById('transcription')
	//output.contentEditable = true
	output.focus()
	document.execCommand('selectAll')
	document.execCommand('copy')
	//output.contentEditable = false
	}



function dotrans (altlist) { 
	inserts = altlist.split(',')
	if (inserts.length == 1 && inserts[0] != '-') add(inserts[0])
	else {
		insert = ''
		for (i=0;i<inserts.length;i++) {
			if (inserts[i] == '+' || inserts[i] == '-') insert += '<bdi style="color:red">'+inserts[i]+'</bdi>'
			else { 
				if (charData[inserts[i][0]].m) { inserts[i] = defaults.ccbase+inserts[i] }
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
	
	//var formerbase = defaults.ccbase
	//defaults.ccbase = base
	

	// add defaults.ccbase to combining characters
	nodes = document.querySelectorAll( '.c' ); 
	for (var n = 0; n < nodes.length; n++ ) { 
		// remove leading base characters if this is a combining character
		if (nodes[n].textContent.length > 1 && defaults.ccbase != '') {
			while (nodes[n].textContent.charAt(0) == defaults.ccbase) {
				nodes[n].textContent = nodes[n].textContent.substr(1)
				}
			}
		if (charData[nodes[n].textContent].m && base != '') nodes[n].textContent = base + nodes[n].textContent
		}
	defaults.ccbase = base
	}


function makeCharacterLink (cp, block, lang, direction) { 
	// returns markup with information about cp
	// only wraps in a link if not on r12a.github.io
	// cp: a unicode character, or sequence of unicode characters
	// block: 
	// lang: the BCP47 language tag for the context
	// direction: either rtl or ltr or ''
	//var chars = cp.split('')
	var chars = []
	convertStr2DecArray(cp, chars)
	

	var out = ''
	var charstr = ''
	for (var i=0;i<chars.length;i++) {
		//var hex = convertChar2CP(chars[i])
		charstr = String.fromCodePoint(chars[i])
		if (charData[charstr]) {
			var hex = chars[i].toString(16).toUpperCase()
			var name = charData[charstr]['n']
			var mark = charData[charstr]['m']
			var cbase = ''
			if (defaults.ccbase != '') cbase = '&amp;#x'+convertChar2CP(defaults.ccbase)+';'
			}
	
		if (! window.location.href.match('r12a.github.io')) out +=  '<a href="/scripts/'+block+'/block#char'+hex+'">'
		out +=  '<span class="uname">U+'+hex+' '+name+'</span> (<span lang="'+lang+'"'
		if (direction == 'rtl') { out += ' dir="rtl"' }
		out += '>'
		if (mark) { out += cbase }
		out += '&#x'+hex+';</span>)'
		if (! window.location.href.match('r12a.github.io')) out +=  '</a>'
		out += ' '
		}
	
	return out.trim()
	}

