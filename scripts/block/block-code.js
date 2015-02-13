function initialiseShowNames (base, target) {
// add function to all images with class ex
// function will display character by character names for example in the panel
// base (string), path for link to character detail

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined') { base = ''; }
	if(typeof target === 'undefined') { target = ''; } 
	
	var examples = document.querySelectorAll('.ex')
	for (e=0;e<examples.length;e++) {
		if (examples[e].nodeName.toLowerCase() == 'img') {
			shownames_setImgOnclick(examples[e], base, target)
			}
		else { shownames_setOnclick(examples[e], base, target) }
		}

	/*
	var examples = document.querySelectorAll('img') 
	var total = examples.length
	for (i=0;i<total;i++) { 
		if (examples[i].className.match(/ex/)) {
			shownames_setImgOnclick(examples[i], base, target)
			}
		}
		
		
	var examples = document.querySelectorAll('.ex') 
	total = examples.length;
	for (i=0;i<total;i++) { 
		if (examples[i].className == 'ex') {
			shownames_setOnclick(examples[i], base, target)
			}
		}
		*/
	}


function shownames_setImgOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.alt, node.lang, base, target ) }
	}

function shownames_setOnclick ( node, base, target ) {
	node.onclick = function(){ showNameDetails(node.firstChild.data, node.lang, base, target) }
	}

function shownames_setClose ( node ) {
	node.onclick = function(){ document.getElementById('panel').style.display = 'none' }
	}


function showNameDetails (chars, clang, base, target) { 
// get the list of characters for an example and display their names
// chars (string), alt text of example
// clang (string), lang attribute value of example img
// base (string), path for link to character detail
// target (string), name of the window to display results in, usually 'c' or ''; given the latter, link goes to same window

	// check whether the calling page has set a base and target window
	if(typeof base === 'undefined' || base == '') { base = '/uniview/?char=' }
	if(typeof target === 'undefined') { target = '' }
	
	 chars = chars
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
	  
	document.getElementById('panel').innerHTML = ''
	var panel = document.getElementById('panel')
	panel.style.display = 'block'
	
	// add the example to the panel as a title
	var replacement = document.createElement('div')
	var str = document.createElement('div')
	str.appendChild(document.createTextNode(chars))
	str.className='ex'
	str.lang = clang
	str.id = 'title'
	replacement.appendChild(str)
	
	// create a list of characters
	for (c=0; c<chars.length; c++) {
		if (names[chars.charCodeAt(c)]) {
			var hex = chars.charCodeAt(c).toString(16)
			while (hex.length < 4) { hex = '0'+hex }
			hex = hex.toUpperCase()
			chardiv = document.createElement('div')
			charimg = document.createElement('img')
			charimg.src = '/c/'+names[chars.charCodeAt(c)][1]+"/"+hex+'.png'
			charimg.alt = 'U+'+hex
			chardiv.appendChild(charimg)
			thelink = document.createElement('a');
			if (base == '/uniview/?char=') { thelink.href = base+hex }
			else { thelink.href = base+'#char'+hex }
			thelink.target = target
			thelink.appendChild(charimg)
			thelink.appendChild(document.createTextNode(' U+'+hex));
			thename = document.createTextNode(' '+names[chars.charCodeAt(c)][0])
			chardiv.appendChild(thelink)
			chardiv.appendChild(thename)

			replacement.appendChild(chardiv);
			}
		else {
			var hex = chars.charCodeAt(c).toString(16)
			while (hex.length < 4) { hex = '0'+hex }
			hex = hex.toUpperCase()
			chardiv = document.createElement('div')
			charimg = document.createElement('img')
			charimg.src = '/c/Basic Latin/005F.png'
			charimg.alt = 'U+'+hex
			chardiv.appendChild(charimg)
			thename = document.createTextNode(' U+'+hex+' No data for this character')
			chardiv.appendChild(thename)
			
			replacement.appendChild(chardiv)
			}
		}
	
	
	//add the new data to the panel
	panel.appendChild(replacement)
	
	// add a close button
	var p = document.createElement('p')
	p.style.textAlign = 'right'
	img = document.createElement('img')
	img.src = '/code/showcharacters/close.png'
	img.alt = 'Close'
	shownames_setClose(img)
	p.appendChild(img)	
	panel.appendChild(p)
	}


function setShowNamesFont (fontname, size, language) {
	var examples = document.querySelectorAll('.ex')
	for (var e=0;e<examples.length;e++) {  
		if (examples[e].lang == language) {
			examples[e].style.fontFamily = fontname
			examples[e].style.fontSize = size
			}
		}
	}


function setGeneralFont (fontname, size, language) {
	var examples = document.querySelectorAll('*[lang ="'+language+'"]')
	for (var e=0;e<examples.length;e++) {  
		if (examples[e].lang == language) {
			examples[e].style.fontFamily = fontname
			examples[e].style.fontSize = size
			}
		}
	}


function setIndexFont (fontname, size, language) {
	// change the size and font of the index table characters
	var examples = document.querySelectorAll('#index td a')
	for (var e=0;e<examples.length;e++) {  
		examples[e].style.fontFamily = fontname
		examples[e].style.fontSize = size
		}
		
	// change the font of the large characters in the block pages
	// but don't change the size
	var pictures = document.querySelectorAll('.charimg')
	for (var p=0;p<pictures.length;p++) {  
		pictures[p].style.fontFamily = fontname
		}
	}




function charInfoPointer (codepoint) {
	// find the name of the file in /block/, if one exists,
	// for the character in codepoint
	// codepoint: hex codepoint value
	// returns: the filename, if successful
	//          otherwise ''
	
	charNum = parseInt(codepoint,16) 
	if (charNum < 128) { return scriptGroups[0][3] }
	var i=1
	while ( i<scriptGroups.length && charNum > scriptGroups[i][1] ) { i++ } 
	if ( i == scriptGroups.length ) { return '' }
	else { 
		if (foundInList(charNum, scriptGroups[i][4])) {	return( scriptGroups[i][3] ) }
		else { return '' }
		}
	}


function foundInList (ch, range) { 
	// takes a list of decimal numbers, with ranges represented as xxx:yyy
	// and a decimal code point, and returns true if the codepoint is in the list
	// ch: the codepoint to search for
	// range: the list of codepoints, with ranges separated by spaces
	
	var runs = range.split(' ')
	ch = parseInt(ch)
	for (i=0;i<runs.length;i++) {
		var startEnd = runs[i].split(":")
		//alert(i+'--'+startEnd[0]+' '+startEnd[1])
		if (startEnd.length == 1 && ch == parseInt(startEnd[0])) { return true } 
		else if (startEnd.length > 1 && (ch >= parseInt(startEnd[0]) && ch <= parseInt(startEnd[1]))) { return true }
		}
	return false
	}


function highlightIndexChars () {
	charlist = document.querySelectorAll('#index td a')
	for (var i=0;i<charlist.length;i++) {
		path = charlist[i].href.split('#')
		if (charInfoPointer(path[1].substr(4))) {
			//charlist[i].style.color = 'red'
			charlist[i].style.borderBottom = '1px dotted red'
			}
		}
	}
	

function addFontToLists (fontname, selectionlists) {
	// adds a font to the selection lists
	
	if (fontname == '' || fontname == null) { return }
	
	test = fontname.match(/[^a-zA-Z0-9-_\s]/)
	if (test) { 
		alert("Bad font name.") 
		return
		}
		
	selectionelements = selectionlists.split(',')
	
	for (var i=0;i<selectionelements.length;i++) {
		var option = document.createElement('option')
		option.textContent = fontname
		option.value = fontname
		
		selectlist = document.getElementById(selectionelements[i])
		selectlist.appendChild(option)
		}
		
	alert('The font '+fontname+' has been added to the selection list(s).')
	}


