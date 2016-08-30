var NONE = 0;
var CHECK = 1;
var FIND = 2;
var LOOKUP = 3;
var LANGUAGE = 4;
var EXTLANG = 5;
var SCRIPT = 6;
var REGION = 7;
var VARIANT = 8;
var GRAND = 9;
var REDUNDANT = 10;

var _searchtype = 'none';
var _searchtext = '';
var _searchtags = '';
var _errormsg = '';
var _warnings = '';
var _info = '';
var _extensionInfo = '' // collects x-, u- and t- information

var _languageList = '';
var _scriptList = '';
var _regionsList = '';
var _grandList = '';
var _variantList = '';
var _extlangList = '';
var _finalList = '';

var tagsInputByUser = new Array;  // one per subtag, listing posn, type and value: used for checking order


function find (str) {
	_languageList = ''; 
	_scriptList = ''; 
	_regionsList = ''; 
	_variantList = ''; 
	_grandList = ''; 
	_extlangList = ''; 
	_extensionInfo = ''; 
	document.getElementById('errors').innerHTML
	
	for (var i=0;i<languages.length;i++) {
		if (languages[i] && languages[i]['description'] && languages[i]['description'].toLowerCase().match(str)) {
			_languageList += makeListItem(languages[i], 'search');
			}
		}
	for (i=0;i<scripts.length;i++) {
		if (scripts[i] && scripts[i]['description'] && scripts[i]['description'].toLowerCase().match(str)) {
			_scriptList += makeListItem(scripts[i], 'search');
			}
		}
	for (i=0;i<regions.length;i++) {
		if (regions[i]['description'] && regions[i]['description'].toLowerCase().match(str)) {
			_regionsList += makeListItem(regions[i], 'search');
			}
		}
	for (i=0;i<variant.length;i++) {
		if (variant[i]['description'] && variant[i]['description'].toLowerCase().match(str)) {
			_variantList += makeListItem(variant[i], 'search');
			}
		}
	for (i=0;i<grandfathered.length;i++) {
		if (grandfathered[i]['description'] && grandfathered[i]['description'].toLowerCase().match(str)) {
			_grandList += makeListItem(grandfathered[i], 'search');
			}
		}
	for (i=0;i<extlang.length;i++) {
		if (extlang[i]['description'] && extlang[i]['description'].toLowerCase().match(str)) {
			_extlangList += makeListItem(extlang[i], 'search');
			}
		}
	for (i=0;i<variant.length;i++) {
		if (variant[i]['description'] && variant[i]['description'].toLowerCase().match(str)) {
			_variantList += makeListItem(variant[i], 'search');
			}
		}
	}




function lookup (str) {  
	// looks for one or more hyphen-separated subtags and fills up various global lists with items found
	_errormsg = ''
	_warnings = ''
	_info = ''
	_languageList = ''; 
	_scriptList = ''; 
	_regionsList = ''; 
	_variantList = ''; 
	_grandList = ''; 
	_extlangList = ''; 
	_extensionInfo = ''; 
	document.getElementById('errors').innerHTML = ''
	str = str.toLowerCase();
	str = str.replace(/;/g,'-')
	str = str.replace(/,/g,'-')
	str = str.replace(/ /g,'-')
	str = str.replace(/-[-]+/g,'-')
	str = removeExtensions(str)
	document.getElementById('lookupinput').value = str.replace('-', ', ')
	subtags = str.split('-');
	

	for (var s=0;s<subtags.length; s++) { 
		var found = false
		for (i=0;i<languages.length;i++) {
			if (languages[i]['subtag'] && languages[i]['subtag'].toLowerCase() == subtags[s]) {
				_languageList += makeListItem(languages[i], 'lookup');
				found = true
				}
			}
		for (i=0;i<scripts.length;i++) {
			if (scripts[i]['subtag'] && scripts[i]['subtag'].toLowerCase() == subtags[s]) {
				_scriptList += makeListItem(scripts[i], 'lookup');
				found = true
				}
			}
		for (i=0;i<regions.length;i++) {
			if (regions[i]['subtag'] && regions[i]['subtag'].toLowerCase() == subtags[s]) {
				_regionsList += makeListItem(regions[i], 'lookup');
				found = true
				}
			}
		for (i=0;i<variant.length;i++) {
			if (variant[i]['subtag'] && variant[i]['subtag'].toLowerCase() == subtags[s]) {
				_variantList += makeListItem(variant[i], 'lookup');
				found = true
				}
			}
		for (i=0;i<grandfathered.length;i++) {
			if (grandfathered[i]['tag'] && grandfathered[i]['tag'].toLowerCase() == subtags[s]) {
				_grandList += makeListItem(grandfathered[i], 'lookup');
				found = true
				}
			}
		for (i=0;i<extlang.length;i++) {
			if (extlang[i]['subtag'] && extlang[i]['subtag'].toLowerCase() == subtags[s]) {
				_extlangList += makeListItem(extlang[i], 'lookup');
				found = true
				}
			}
		if (! found) _errormsg += addtoerrmsg("The subtag <span class='stname'>"+subtags[s]+"</span> was not found.")
		}
	}


function generateFinalList (listtype) { 
	_finalList = '';
	
	if (_languageList != '') { 
		_finalList += "<h2>Language Codes "; if (listtype == 'list') { _finalList+=" ("+languages.length+" subtags)"; }
		_finalList += "</h2><div id='listLanguages'>"+ _languageList+"</div>";
		}
	if (_extlangList != '') { 
		_finalList += "<h2>Extlang "; if (listtype == 'list') { _finalList+=" ("+extlang.length+" subtags)"; }
		_finalList += "</h2><div id='listExtlang'>"+_extlangList+"</div>";
		}
	if (_scriptList != '') { 
		_finalList += "<h2>Script Codes "; if (listtype == 'list') { _finalList+=" ("+scripts.length+" subtags)"; }
		_finalList += "</h2><div id='listScripts'>"+_scriptList+"</div>";  
		}
	if (_regionsList != '') { 
		_finalList += "<h2>Geographic Regions "; if (listtype == 'list') { _finalList+=" ("+regions.length+" subtags)"; }
		_finalList += "</h2><div id='listRegions'>"+_regionsList+"</div>"; 
		}
	if (_grandList != '') { 
		_finalList += "<h2>Grandfathered "; if (listtype == 'list') { _finalList+=" ("+grandfathered.length+" subtags)"; }
		_finalList += "</h2><div id='listGrand'>"+_grandList+"</div>"; 
		}
	if (_variantList != '') { _finalList += "<h2>Variants "; if (listtype == 'list') { _finalList+=" ("+variant.length+" subtags)"; }
		_finalList += "</h2><div id='listVariant'>"+_variantList+"</div>"; 
		}
	if (_finalList == '') { _finalList = '<h2 style="border:0">No valid <acronym>IANA</acronym> subtags found</h2>'; }
 
	/*if (userdefined[0]) { 
		_finalList += "<h2>User-defined subtags</h2><div id='userDefined'><div class='registryItem'><h3>"+userdefined[0]+"</h3></div></div>"; 
		} */
	}




function displayResults (source) {
//console.log(_extensionInfo)
//console.log(source)
	generateFinalList(source); 
	document.getElementById('out').innerHTML = _finalList; 
	makeFriendly();
	
	document.getElementById('errors').innerHTML == ''
	// display big OK if parses ok, but add info about user-defined and extension tags
	if (source == 'check' && _errormsg == '') {
		var msg = "<p class='report' style='margin-bottom: 50px;'><span class='bigOK'>OK!</span>&nbsp; The language tag <span class='stname'>"+document.getElementById('checkinput').value+"</span> is well-formed and the subtags are valid IANA subtags"
		if (_warnings != '') msg += ", <strong>however</strong>, you should check the comments related to usage below"
		msg += ".</p>" + _warnings + _info + _extensionInfo
		document.getElementById('errors').innerHTML = msg
		//document.getElementById('errors').innerHTML = "<p class='registryItem' style='margin-bottom: 50px;'><span class='bigOK'>OK!</span>&nbsp; The language tag <span class='stname'>"+document.getElementById('checkinput').value+"</span> is well-formed and the subtags are valid IANA subtags.</p>" + _warnings + _info + _extensionInfo
		}
	else {
		document.getElementById('errors').innerHTML = _errormsg + _warnings + _info + _extensionInfo
		}
	}




function showList (list) {
	_languageList = ''; 
	_scriptList = ''; 
	_regionsList = ''; 
	_variantList = ''; 
	_grandList = ''; 
	_extlangList = ''; 
	_extensionInfo = ''; 

	var result = '';
	switch(list) {
		case 'language'	: for (i=0;i<languages.length;i++) { _languageList += makeListItem(languages[i], 'search');	} break;
		case 'scripts'	: for (i=0;i<scripts.length;i++) { _scriptList += makeListItem(scripts[i], 'search');	} break;
		case 'extlang'	: for (i=0;i<extlang.length;i++) { _extlangList += makeListItem(extlang[i], 'search');	} break;
		case 'regions'	: for (i=0;i<regions.length;i++) { _regionsList += makeListItem(regions[i], 'search');	} break;
		case 'grandfathered'	: for (i=0;i<grandfathered.length;i++) { _grandList += makeListItem(grandfathered[i], 'search');	} break;
		case 'variant'	: for (i=0;i<variant.length;i++) { _variantList += makeListItem(variant[i], 'search');	} break;
		}
	}




function addtoerrmsg (msg) {
	div =  "\n<p class='report'><img src='images/error.png' alt='Error:'>&nbsp; "+msg+"</p>"
	return div
	}




function removeExtensions (searchtext) {
	// remove private-use tags, but keep a copy
	var privateuseflag = searchtext.match(/-x-|^x-/)
	if (privateuseflag != null) {
		privateusestart = privateuseflag.index
		privateuse = searchtext.substr(privateusestart)
		if (privateuse[0] == '-') { privateuse = privateuse.substr(1) }
		searchtext = searchtext.substr(0,privateusestart)
		if (searchtext == '') {
		//console.log(searchtext, searchtext.length)
			_extensionInfo += "<p class='report'><img src='images/comment.png' alt='Warning:'>&nbsp; The language tag is just the <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>private-use</a> tag  <span class='stname'>"+privateuse+"</span>. Bear in mind that these subtags are not interoperable. Subtags following <span class='stname'>x-</span> are not checked against the IANA registry.</p>"
			}
		else { _extensionInfo += "<p class='report'><img src='images/comment.png' alt='Info:'>&nbsp; Subtags following <span class='stname'>x-</span> in the <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>private-use</a> tag,  <span class='stname'>"+privateuse+"</span> are not checked against the IANA registry.</p><p class=reportNote>Bear in mind that private-use subtags are not interoperable.</p>"
			}

		// check that no subtags are longer than 8 characters
		extensiontagarray = privateuse.split('-')
		for (i=0;i<extensiontagarray.length;i++) {
			if (extensiontagarray[i].length > 8) {
				//console.log(extensiontagarray[i])
				_errormsg += addtoerrmsg("The subtag <span class='stname'>"+extensiontagarray[i]+"</span>, after <span class='stname'>x-</span> is longer than 8 characters.")
				}
			}
		
		// check that there are not more than one x-
		var extraprivateuse = privateuse.match(/-x-/)
		if (extraprivateuse != null) {
			_errormsg += addtoerrmsg("There is more than one <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>private-use</a> subtag sequence in this language tag. Only one is allowed.")
			}
		}

	// remove extension tags, but keep a copy
	var extensionflag = searchtext.match(/-.-|^.-/)
	if (extensionflag != null) {
		extensiontagstart = extensionflag.index
		extensiontags = searchtext.substr(extensiontagstart)
		if (extensiontags[0] == '-') { extensiontags = extensiontags.substr(1) }
		searchtext = searchtext.substr(0,extensiontagstart)
		if (searchtext == '') {
			_errormsg += addtoerrmsg("The language tag started with the <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>extension</a> <span class='stname'>"+extensiontags+"</span>. Language tags must contain at least a language subtag before any extension.")
			}
		extensiontagstart = extensiontags[0]
		if (extensiontagstart != 'u' && extensiontagstart != 't') {
			_errormsg += addtoerrmsg("The singleton subtag <span class='stname'>"+extensiontagstart+"-</span> was not recognised.")
			}
		if (extensiontags.length <= 2) {
			_errormsg += addtoerrmsg("There are no subtags after <span class='stname'>"+extensiontagstart+"-</span>.")
			}
		//_extensionInfo += "<p class='registryItem'><img src='images/comment.png' alt='Error:'>&nbsp; The language tag contains the extension <span class='stname'>"+extensiontags+"</span>. Extension subtags are not checked against the IANA list.</p>"
		_extensionInfo += "<p class='report'><img src='images/comment.png' alt='Error:'>&nbsp; Subtags in the <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>extension</a> <span class='stname'>"+extensiontags+"</span> are not checked against the IANA list.</p>"
		// check that no subtags are longer than 8 characters
		extensiontagarray = extensiontags.split('-')
		for (i=0;i<extensiontagarray.length;i++) {
			if (extensiontagarray[i].length > 8) {
				_errormsg += addtoerrmsg("The subtag <span class='stname'>"+extensiontagarray[i]+"</span>, after <span class='stname'>"+extensiontagstart+"-</span> is longer than 8 characters.")
				}
			}
		}
	return searchtext
	}






function parseTag (searchtext) {
	// runs various tests on the language tag (used by Check), and adds recognised subtags to lists for display
	recognisedSubtags = new Array  // one item per *valid* subtag with a copy of the object found for that subtag in the external lists
	_errormsg = ''
	_warnings = ''
	_info = ''
	_languageList = ''; 
	_scriptList = ''; 
	_regionsList = ''; 
	_variantList = ''; 
	_grandList = ''; 
	_extlangList = ''; 
	_extensionInfo = ''; 
	searchtext = searchtext.toLowerCase();
	tagsInputByUser.length = 0
	
	searchtext = searchtext.trim()
	
	if (searchtext == '') return
	
	
	// check for empty subtags, if found temporarily fix and raise error msg
	if (searchtext.indexOf('--') > -1) { 
		searchtext = searchtext.replace(/-[-]+/,'-')
		_errormsg += addtoerrmsg("Language tag is not well-formed because it contains one or more empty subtags (ie. more than one contiguous hyphen).")
		}

	// check for internal spaces, if found temporarily fix and raise error msg
	if (searchtext.indexOf(' ') > -1) { 
		searchtext = searchtext.replace(/[ ]+/,'-')
		_errormsg += addtoerrmsg("Language tag is not well-formed because it contains one or more spaces.")
		}

	// check for disallowed separators, if found stop
	var result = searchtext.match(/[^a-zA-Z0-9-]/g)
	//console.log(result)
	if (result != null) { 
		var incorrect = ''
		for (i=0;i<result.length;i++) incorrect += result[i]+' '
		_errormsg += addtoerrmsg("Language tags can only contain A-Z, a-z, 0-9 and hyphens. This tag contains the following illegal characters: "+incorrect)
		return
		}

	
	// check for grandfathered tags and if found add to _grandList
	for (subtag in grandfathered) {  //console.log(searchtext)
		if (grandfathered[subtag]['tag'].toLowerCase() == searchtext) { _grandList += makeListItem(grandfathered[subtag]) }
		}
	if (_grandList != '') return   // don't look up grandfathered tags any further

	// remove extensions and private-use, and check whether there are any other tags
	searchtext = removeExtensions(searchtext)
	if (searchtext == '') {
		return
		}


	subtags = searchtext.split('-')    // array of subtag names supplied by the user
	tagsInputByUser[0] = new Object;
	tagsInputByUser[0]['posn'] = 0
	tagsInputByUser[0]['computedtype'] = LANGUAGE
	tagsInputByUser[0]['value'] = subtags[0]

	
	// deal with the language subtag and remove from subtags array to avoid looking up the same tag twice
	// if subtag is found, add object to the recognisedSubtags array
	//langtag = subtags.shift()
	langtag = subtags[0]
	
	found = false
	for (subtag in languages) {  
		if (languages[subtag]['subtag'] == langtag) { 
			_languageList += makeListItem(languages[subtag], 'check')
			found=true
			tagsInputByUser[0] = languages[subtag]
			tagsInputByUser[0]['posn'] = 0
			tagsInputByUser[0]['value'] = langtag
			tagsInputByUser[0]['computedtype'] = LANGUAGE
			break
			}
		}

	if (! found) { 
		if (langtag.substr(0,1) == 'q' && langtag.length == 3 && langtag.substr(1,2).toLowerCase() < 'u') {
			_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; <span class="stname">'+langtag+"</span> is not found in the IANA registry. It is reserved for private-use, and cannot be considered interoperable.</p>"
			}
		else if (langtag.length > 3 || langtag.length < 2) {
			_errormsg += addtoerrmsg("Language subtag <span class='stname'>"+langtag+"</span> not found. Check that you are not trying to start the language tag with a <a href='http://www.w3.org/International/articles/language-tags/#script' class=term>script</a>, <a href='http://www.w3.org/International/articles/language-tags/#variants' class=term>variant</a> or <a href='http://www.w3.org/International/articles/language-tags/#extension' class=term>extension</a> subtag instead of a primary language subtag. <span style='font-size: 85%'>(Hint, use <span class=kw>Look up</span> to check.)</span>")
			}
		else { 
			_errormsg += addtoerrmsg("Language subtag <span class='stname'>"+langtag+"</span> not found. Check that you are not trying to start the language tag with a <a href='http://www.w3.org/International/articles/language-tags/#region' class=term>region</a> subtag. <span style='font-size: 85%'>(Hint, use <span class=kw>Look up</span> to check.)</span>")
			}
		}
	
	
	
	// read remaining subtags into tagsInputByUser array and determine their type based on length and content
	// raise an error if there is more than one of any given type (other than variants) or two identical variants
	var extlangfound = false;
	var scriptfound = false;
	var regionfound = false;
	var variantfound = false;
	var variantlist = ''  // period separated list of variants found, used to detect duplicates
	for (i=1; i<subtags.length; i++) { 
		switch(subtags[i].length) {
			case 2:	tagsInputByUser[i] = new Object;
					tagsInputByUser[i]['posn'] = i
					tagsInputByUser[i]['computedtype'] = REGION
					tagsInputByUser[i]['value'] = subtags[i]
					if (regionfound) { _errormsg += addtoerrmsg("More than one <a href='http://www.w3.org/International/articles/language-tags/#region' class=term>region</a> subtag: <span class='stname'>"+subtags[i]+"</span>") }
					regionfound = true
					break
			case 3:	if (subtags[i].match(/[0-9]/)) {  // ie. it is a region
						tagsInputByUser[i] = new Object;
						tagsInputByUser[i]['posn'] = i
						tagsInputByUser[i]['computedtype'] = REGION
						tagsInputByUser[i]['value'] = subtags[i]
						if (regionfound) { _errormsg += addtoerrmsg("More than one <a href='http://www.w3.org/International/articles/language-tags/#region' class=term>region</a> subtag: <span class='stname'>"+subtags[i]+"</span>") }
						regionfound = true
						}
					else {
						tagsInputByUser[i] = new Object;
						tagsInputByUser[i]['posn'] = i
						tagsInputByUser[i]['computedtype'] = EXTLANG
						tagsInputByUser[i]['value'] = subtags[i]
						if (extlangfound) { _errormsg += addtoerrmsg("More than one extlang subtag: <span class='stname'>"+subtags[i]+"</span>") }
						extlangfound = true
						}
					break
			case 4:	if (subtags[i].match(/[0-9]/)) { // ie. it is a variant
						tagsInputByUser[i] = new Object;
						tagsInputByUser[i]['posn'] = i
						tagsInputByUser[i]['computedtype'] = VARIANT
						tagsInputByUser[i]['value'] = subtags[i]
						if(variantlist.indexOf(tagsInputByUser[i]['value']) > -1) { _errormsg += addtoerrmsg("Duplicate <a href='http://www.w3.org/International/articles/language-tags/#variants' class=term>variant</a> subtag: <span class='stname'>"+subtags[i]+"</span>") }
						else { variantlist += tagsInputByUser[i]['value']+'.' }
						}
					else {
						tagsInputByUser[i] = new Object;
						tagsInputByUser[i]['posn'] = i
						tagsInputByUser[i]['computedtype'] = SCRIPT
						tagsInputByUser[i]['value'] = subtags[i]
						if (scriptfound) { _errormsg += addtoerrmsg("More than one <a href='http://www.w3.org/International/articles/language-tags/#script' class=term>script</a> subtag: <span class='stname'>"+subtags[i]+"</span>") }
						scriptfound = true
						}
					break
			default:tagsInputByUser[i] = new Object;
					tagsInputByUser[i]['posn'] = i
					tagsInputByUser[i]['computedtype'] = VARIANT
					tagsInputByUser[i]['value'] = subtags[i]
					if(variantlist.indexOf(tagsInputByUser[i]['value']) > -1) { _errormsg += addtoerrmsg("Duplicate <a href='http://www.w3.org/International/articles/language-tags/#variants' class=term>variant</a> subtag: <span class='stname'>"+subtags[i]+"</span>") }
					else { variantlist += tagsInputByUser[i]['value']+'.' }
					break
			}
		}
		
		 
//for (i=0; i<tagsInputByUser.length; i++) { console.log('tagsInputByUser[',i,']',tagsInputByUser[i]) }


		// check that all subtags are meaningful
		// if they are, add them to recognisedSubtags so that we can generate a list of valid tags later
		for (i=1;i<tagsInputByUser.length;i++) {
			found = false
			switch (tagsInputByUser[i]['computedtype']) {
				case EXTLANG:	
					for (tag in extlang) {  
						if (extlang[tag]['subtag'].toLowerCase() == tagsInputByUser[i]['value']) { 
							_extlangList += makeListItem(extlang[tag],'check')
							found=true
							//recognisedSubtags[recognisedSubtags.length] = extlang[tag]
							for (var attrname in extlang[tag]) { tagsInputByUser[i][attrname] = extlang[tag][attrname] }
							continue; 
							}
						}
					if (! found) { 
						_errormsg += addtoerrmsg("Extlang subtag <span class='stname'>"+tagsInputByUser[i]['value']+"</span> not found.")
						}
					break
				case REGION:	
					for (tag in regions) {  
						if(regions[tag]['subtag'].toLowerCase() == tagsInputByUser[i]['value']) { 
							_regionsList += makeListItem(regions[tag],'check')
							found=true
							//recognisedSubtags[recognisedSubtags.length] = regions[tag];
							for (var attrname in regions[tag]) { tagsInputByUser[i][attrname] = regions[tag][attrname] }
							continue
							}
						}
					if (! found) { 
						_errormsg += addtoerrmsg("<a href='http://www.w3.org/International/articles/language-tags/#region' class=term>Region</a> subtag <span class='stname'>"+tagsInputByUser[i]['value']+"</span> not found.") 
						}
					break
				case SCRIPT:	
					for (tag in scripts) {  
						if(scripts[tag]['subtag'].toLowerCase() == tagsInputByUser[i]['value']) { _scriptList += makeListItem(scripts[tag],'check')
							found=true
							for (var attrname in scripts[tag]) { tagsInputByUser[i][attrname] = scripts[tag][attrname] }
							//recognisedSubtags[recognisedSubtags.length] = scripts[tag]
							continue 
							}
						}
					if (! found) { 
						_errormsg += addtoerrmsg("Script subtag <span class='stname'>"+tagsInputByUser[i]['value']+"</span> not found.") 
						}
					break
				case VARIANT:	
					for (tag in variant) {  
						if (variant[tag]['subtag'].toLowerCase() == tagsInputByUser[i]['value']) { 
							_variantList += makeListItem(variant[tag],'check')
							found=true
							//recognisedSubtags[recognisedSubtags.length] = variant[tag]
							for (var attrname in variant[tag]) { tagsInputByUser[i][attrname] = variant[tag][attrname] }
							continue
							}
						}
					if (! found) { 
						_errormsg += addtoerrmsg("<a href='http://www.w3.org/International/articles/language-tags/#variants' class=term>variant</a> subtag <span class='stname'>"+tagsInputByUser[i]['value']+"</span> not found.")
						}
					break
				}
			}
//for (i=0; i<recognisedSubtags.length; i++) { console.log(recognisedSubtags[i]) }
//for (i=0; i<tagsInputByUser.length; i++) { console.log(tagsInputByUser[i]) }



	// check that all subtags are correctly ordered
	var wrongorder = false
	for (i=0; i<tagsInputByUser.length-1; i++) { 
		if (tagsInputByUser[i]['computedtype'] > tagsInputByUser[i+1]['computedtype']) { // there's a problem...
			wrongorder = true
			}
		}
		
	if (wrongorder) { //console.log('problem with order')
		currentorder = ''
		for (i=0; i<tagsInputByUser.length; i++) { 
			switch (tagsInputByUser[i]['computedtype']) {
				case EXTLANG: currentorder += ' - extlang<sub>'+tagsInputByUser[i]['value']+'</sub>'; break
				case SCRIPT: currentorder += ' - <a href="http://www.w3.org/International/articles/language-tags/#script" class=term>script</a><sub>'+tagsInputByUser[i]['value']+'</sub>'; break
				case REGION: currentorder += ' - <a href="http://www.w3.org/International/articles/language-tags/#region" class=term>region</a><sub>'+tagsInputByUser[i]['value']+'</sub>'; break
				case VARIANT: currentorder += ' - <a href="http://www.w3.org/International/articles/language-tags/#variants" class=term>variant</a><sub>'+tagsInputByUser[i]['value']+'</sub>'; break
				}
			}
		expectedorder = ''
		exfnd=false
		scfnd=false
		refnd=false
		vafnd=false;
		for (i in tagsInputByUser) { if (tagsInputByUser[i]['computedtype']==EXTLANG  && !exfnd) { expectedorder += ' - extlang'; exfnd = true } }
		for (i in tagsInputByUser) { if (tagsInputByUser[i]['computedtype']==SCRIPT  && !scfnd) { expectedorder += ' - script'; scfnd = true } }
		for (i in tagsInputByUser) { if (tagsInputByUser[i]['computedtype']==REGION  && !refnd) { expectedorder += ' - region'; refnd = true } }
		for (i in tagsInputByUser) { if (tagsInputByUser[i]['computedtype']==VARIANT  && !vafnd) { expectedorder += ' - variant'; vafnd = true } }

		_errormsg += addtoerrmsg("Subtags incorrectly ordered. Current order:<br />&nbsp;&nbsp;language<sub>"+langtag+"</sub>"+currentorder+"<br />Expected order:<br />&nbsp;&nbsp;language "+expectedorder) 
		}		


													for (i=0;i<tagsInputByUser.length;i++) 	// console.log('tagsInputByUser[',i,']',tagsInputByUser[i])

	// check that variants are used correctly
	for (i=1; i<tagsInputByUser.length; i++) { 
		if (tagsInputByUser[i]['type'] == 'variant') { 
		
			// check that variants without prefixes follow those with
			if (typeof tagsInputByUser[i]['prefix'] == 'undefined') { 
													//console.log('***************************************')
													//console.log('checking',tagsInputByUser[i]['value'],'which has no prefix')
				for (t=i+1;t<tagsInputByUser.length;t++) {
					if (tagsInputByUser[t]['type'] == 'variant' && tagsInputByUser[t]['prefix']) {
						_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; The <a href="http://www.w3.org/International/articles/language-tags/#variants" class=term>variant</a> subtag <span class="stname">'+tagsInputByUser[i]['subtag']+"</span> should appear after any other variants with prefix requirements.</p>"
						break
						}
					}
				}
				
			else { 
													//console.log('***************************************')
													//console.log('checking',tagsInputByUser[i]['value'])
				// check what prefix tags are present
				var prefixlist = tagsInputByUser[i]['prefix'].split(', ') 
				
				// split the user input string where the variant tags start, excluding region (since these tags ressemble lang tags)
				var nonVariantsInInput = ''
				var variantsInInput = ''
				for (j=0;j<tagsInputByUser.length;j++) {
					if (tagsInputByUser[j]['type'] == 'variant') break
					if (tagsInputByUser[j]['type'] != 'region') nonVariantsInInput += tagsInputByUser[j]['value'].toLowerCase()+'-'
					}
				for (k=j;k<tagsInputByUser.length;k++) { variantsInInput += tagsInputByUser[k]['value']+'-' }
				variantsInInput = '^'+variantsInInput.substr(0, variantsInInput.length-1) // removes the last hyphen
													//console.log('input tags',searchtext)
													//console.log('non-variants in input',nonVariantsInInput)
													//console.log('variants in input',variantsInInput)
				
				
				
				for (p=0;p<prefixlist.length;p++) { 
													//console.log('number of prefixes',prefixlist.length)
													//console.log('no.',p+1, prefixlist[p])
					
					
					var sequencematch = true

					// separate other tags, eg. language, script, from variants, because we'll need to check the variant order and sequence more carefully
					variantsInPrefix = ''
					prefixTagArray = prefixlist[p].toLowerCase().split('-')
					for (e=0;e<prefixTagArray.length;e++) { 
						if (prefixTagArray[e].length < 5 && nonVariantsInInput.indexOf(prefixTagArray[e]) == -1) {
							 sequencematch = false; 
							 //console.log('fails here',prefixTagArray[e].length,prefixTagArray[e]) 
							 }
						else if (prefixTagArray[e].length >= 5) variantsInPrefix += prefixTagArray[e]+'-'
						}
					variantsInPrefix = '^'+variantsInPrefix + tagsInputByUser[i]['value'].toLowerCase()
													//console.log('non-variant tags we\'re looking for:',prefixTagArray.join('-'))
													//console.log('variant sequence we\'re looking for:',variantsInPrefix)
					
					if (variantsInInput.indexOf(variantsInPrefix) == -1) sequencematch = false
													//console.log(variantsInInput.indexOf(variantsInPrefix))
													//console.log('does it match?',sequencematch)
					if (sequencematch) break
					
					}

				if (! sequencematch) {
					var str = '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; The subtags preceding the <a href="http://www.w3.org/International/articles/language-tags/#variants" class=term>variant</a> subtag <span class="stname">'+tagsInputByUser[i]['subtag']+'</span> did not match '
					if (prefixlist.length == 1) str += 'the expected pattern: <span class="stname">'+prefixlist+'-'+tagsInputByUser[i]['value']+'</span>.'
					else {
						var prefixes = ''
						var temparray = tagsInputByUser[i]['prefix'].split(', ')
						for (j=0;j<temparray.length;j++) {
							if (j<temparray.length-1) prefixes += '<span class="stname">'+temparray[j]+'-'+tagsInputByUser[i]['value']+'</span>, '
							else prefixes += ' or <span class="stname">'+temparray[j]+'-'+tagsInputByUser[i]['value']+'</span>'
							}
						str += 'one of the following expected patterns: '+prefixes+'.'
						}
					str += '</p><p class=reportNote>Note that the language tag may include other non-variant tags, but any variant tags are expected to follow the order and sequence shown.</span></p>'
					_warnings += str
					}
				}
			}
		}

	}






function makeListItem (item, searchtype) {
	// GLOBAL  sil, scriptcodes, macrolanguages, macrospec, specmacro;
	//console.log('searchtype',searchtype)
	if (searchtype == 'check') { checkforwarnings(item); }
	if (searchtype == 'check' ) { checkforinfo(item); }

	var subtag = item['subtag'];
	var description = item['description'];
	
	if (item['deprecated']) {
		description += ' &nbsp;&nbsp;<span style="font-size: 70%;"><img src="images/deprecated.png" alt=" " /> deprecated, ';
		if (item['preferredvalue']) { description += 'use</span> '+item['preferredvalue']; }
		else { description += 'don\'t use.</span>'; }
		}

	var div =  '<div class="registryItem">\n<h3>';

	// add the link to the Ethnologue
	if (item['type'] == 'language') { 
		if (sil[subtag]) { siltag = sil[subtag]; }
		else { siltag = subtag; }					  
		div += "<span class='sil'><a target='_blank' href='http://www.ethnologue.com/show_language.asp?code="+siltag+"'><img src='images/ethn.png' title='Look up in the SIL Ethnologue.' alt='Look up in the SIL Ethnologue.' /></a></span>"; 
		}
	// add the link to UniView for script subtags
	if (item['type'] == 'script') { 
		if (scriptcodes[subtag]) { 
			univiewtag = scriptcodes[subtag]; 
			div += "<span class='sil'><a target='_blank' href='/uniview/?block="+univiewtag+"'><img src='images/univ.png' title='Look up in UniView.' alt='Look up in UniView.' /></a></span>"; 
			}
		}
	// add a link to Wikipedia search
	if (item['type'] == 'language' || item['type'] == 'script') { 
		div += "<span class='sil'><a target='_blank' href='https://en.wikipedia.org/w/index.php?search="+description+"'><img src='images/wikipedia.png' title='Look up in Wikipedia.' alt='Look up in Wikipedia.' /></a></span> &nbsp;"; 
		}

	div +=  '<span class="st">'+subtag+'</span>'+description+'</h3>';
	
	if (item['comments']) { 
		div += "<div class='comments' style='font-size:80%;'><img src='images/comments.png' alt='Comment.' /> &nbsp;&nbsp;Registry comment: "+item['comments']+"</div>"; 
		}

	// check for useful information if this is a search, rather than a check
	if (searchtype != 'check') { 
		if (item['scope'] && item['scope'] == 'macrolanguage') { 
			list = ''; comm = '';
			for (m=0;m<macrolanguages[item['subtag']].length;m++) { list += ' '+macrolanguages[item['subtag']][m]; }
			//list = '<a href="/rishida/utils/subtags/index.php?lookup='+list.replace('+', ' ')+'&amp;submit=Look+up">'+list+'</a>';
			list = '<span class="stname">'+list+'</span>';
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+"</span> is a <a href='http://www.w3.org/International/articles/language-tags/#extlang' class=term>macrolanguage</a> that encompasses the following more specific primary language subtags: "+list+". If it doesn't break legacy usage for your application, you should use one of these more specific language subtags instead."; 
			if (macrospec[item['subtag']]) {
			div += " On the other hand, <span class='stname'>"+item['subtag']+"</span> is often preferred by legacy applications rather than <span class='stname'>"+macrospec[item['subtag']]['code']+"</span> ("+macrospec[item['subtag']]['name']+")."; 
				}
			div += "</div>";
			}
		if (item['scope'] && item['scope'] == 'collection') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/comments.png" alt="Comment." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> represents a collection of languages. Although a collection subtag can be used in the absence of a more specific tag, you should check whether  a more specific language subtag is available. Unfortunately, the registry cannot offer any suggestions to assist with this because ISO 639-5 doesn\'t specify any mappings between collection subtags and individual languages.</div>'; 
			}
		if (item['type']=='language' && macrospec[item['subtag']]) {
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; In some legacy applications the <a href="http://www.w3.org/International/articles/language-tags/#extlang" class=term>macrolanguage</a> subtag <span class="stname">'+macrospec[item['subtag']]['code']+"</span> ("+macrospec[item['subtag']]['name']+") may be a better choice than <span class='stname'>"+item['subtag']+"</span> if you want your language tag to be recognised.</div>"; 
			}
		if (subtag == 'mul') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> should not be used when a list of languages or individual tags for each content element can be used instead.</div>'; 
			}
		if (subtag == 'und') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/comments.png" alt="Comment." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> identifies linguistic content whose language is not determined.</div>'; 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> should not be used unless a language tag is required and language information is not available or cannot be determined. Omitting the language tag (where permitted) is preferred. This subtag may also be useful when matching language tags in certain situations. Where xml:lang="" is allowed by the markup, it is better to use that rather than <span class="stname">und</span> (see a <a href="http://www.w3.org/International/questions/qa-no-language#undetermined">longer explanation</a>).</div>'; 
			}
		if (subtag == 'zxx') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/comments.png" alt="Comment." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> identifies non-linguistic content for which a language classification is inappropriate or does not apply, such as instrumental or electronic music, sound recordings consisting of non-verbal sounds, audiovisuals with no narration or dialog, or printed titles, or subtitles, machine-readable data files consisting of machine languages or character codes, programming source code, etc.</div>'; 
			}
		if (subtag == 'mis') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> identifies content whose language is known but which does not currently have a corresponding subtag. This subtag should not be used, since future developments may render it invalid.  It is always preferable to use  <span class="stname">und</span> or (with prior agreement) private use subtags.</div>'; 
			}
		if (subtag == 'i-default') { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; <span class="stname">'+item['subtag']+'</span> identifies the condition or content used where the language preferences of the user cannot be established. It should not be used except as a means of labelling the default content for applications or protocols that require default language content to be labeled with that specific tag.  It may also be used by an application or protocol to identify when the default language content is being returned. Learn more about i-default in <a href="http://www.ietf.org/rfc/rfc2277.txt">RFC 2277</a></div>'; 
			}
		if (item['prefix'] && item['type'] == 'variant') { 
			preflist = item['prefix'].replace('-', '+');
			preflist = preflist.replace(',', '</span> or <span class="stname">');
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; Should only be used in a language tag that already contains <span class="stname">'+preflist+'</span>.</div>';
			}
		if (item['type'] == 'variant' && ! item['prefix']) { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; Has no prefix requirements, and so should be used after any other <a href="http://www.w3.org/International/articles/language-tags/#variants" class=term>variant</a> subtag that do have prefix requirements.</div>'; 
			}
		if (item['type'] == 'extlang' && item['prefix']) { 
			div += '<div class="comments" style="font-size:80%;"><img src="images/warnings.png" alt="Note." /> &nbsp;&nbsp; For use with the <span class="stname">'+item['prefix']+'</span> primary language subtag, ie. as the sequence <span class="stname">'+item['prefix']+'-'+item['subtag']+'</span>. However it is usually preferable to replace that sequence with just the <span class="stname">'+item['preferredvalue']+'</span> primary language subtag.'; 
			if (macrospec[item['prefix']] && macrospec[item['prefix']]['code'] == item['subtag']) {
			div += " On the other hand, the primary language subtag <span class='stname'>"+item['prefix']+"</span> is often preferred by legacy applications for "+macrospec[item['prefix']]['name']+", rather than <span class='stname'>"+macrospec[item['prefix']]['code']+"</span> or <span class='stname'>"+item['prefix']+'-'+macrospec[item['prefix']]['code']+"</span>."; 
				}
			div += '</div>\n';
			}

		}
	//div += '</div>\n';
	
	addDetails = '';
	
	for (var key in item) {
		addDetails += "<li>"+key+": "+item[key]+"</li>";
		}

	div +=  "<ul>"+addDetails+"</ul></div>\n";
	
	
	return div;
}



function checkforwarnings (str) { //console.log('sstr',str)
	if (str['deprecated']) { //console.log('deprecated')
		var pf = ''
		var comm = ''
		if (str['preferred-value']) {
			pf = 'Use <span class="stname">'+str['preferred-value']+"</span> instead"
			}
		if (str['comments']) { 
			comm = 'The entry for this tag has the following comments: <em>'+str['comments']+'</em>'
			}
		_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; <span class="stname">'+str['subtag']+"</span> is deprecated. "+pf+comm+".</p>" 
		}
	if (str['type'] == 'script' && tagsInputByUser[0]['suppress-script'] && tagsInputByUser[0]['suppress-script'] == str['subtag']) { 
		_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; The <a href="http://www.w3.org/International/articles/language-tags/#script" class=term>script</a> tag <span class="stname">'+str['subtag']+"</span> shouldn't be used with the language subtag <span class='stname'>"+tagsInputByUser[0]['subtag']+"</span>.</p>"
		}
	if (str['type'] == 'extlang' && tagsInputByUser[0]['subtag'] != str['prefix']) { 
		_errormsg += '<p class="report"><img src="images/error.png" alt="Error:" />&nbsp; The extended language subtag <span class="stname">'+str['subtag']+"</span> must be used with the language subtag <span class='stname'>"+str['prefix']+"</span>. Note, however, that it is better to just use the <span class='stname'>"+str['subtag']+"</span> language subtag, rather than <span class='stname'>"+str['prefix']+'-'+str['subtag']+"</span>.</p>"
		}
	if (str['type'] == 'extlang' && tagsInputByUser[0]['Subtag'] == str['prefix']) { 
		_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; It is usually better to just use the <span class="stname">'+str['Subtag']+"</span> language subtag, rather than <span class='stname'>"+str['Prefix']+'-'+str['subtag']+"</span>." 
		switch ( str['subtag'] ) {
			case 'cmn': _warnings += " On the other hand, <span class='stname'>zh</span> is often preferred by legacy applications rather than <span class='stname'>cmn</span> (Mandarin Chinese)."; break
			case 'arb': _warnings += " On the other hand, <span class='stname'>ar</span> is often preferred by legacy applications rather than <span class='stname'>arb</span> (Standard Arabic)."; break
			}
		_warnings += "</p>"
		}
	if (str['type'] == 'script') { 
		//_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; The script subtag <span class="stname">'+str['subtag']+"</span> should not be used unless it adds some information that is needed to distinguish this language tag from another one. If you do use the script subtag, use it consistently in the context where the language tags are used.</p>" 
		_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; Check that the <a href="http://www.w3.org/International/articles/language-tags/#script" class=term>script</a> subtag <span class="stname">'+str['subtag']+"</span> contributes information needed to distinguish this language tag from another one, otherwise leave it out.</p>" 
		}
	if (str['type'] == 'region') { 
		_warnings += '<p class="report"><img src="images/warning.png" alt="Warning:" />&nbsp; Check that the <a href="http://www.w3.org/International/articles/language-tags/#region" class=term>region</a> subtag <span class="stname">'+str['subtag']+"</span> contributes information needed to distinguish this language tag from another one, otherwise leave it out.</p><p class=reportNote>For example, <span class='stname'>en-GB</span> can be useful for spell-checking, but the region subtag in <span class='stname'>ja-JP</span> is unlikely to be useful unless you are intentionally contrasting it with Japanese spoken in other parts of the world.</p>" 
		}
	}
	
	
function checkforinfo (str) {
	// info, tagsInputByUser, macrolanguages;
	
	if (str['scope'] && str['scope'] == 'macrolanguage') { 
		list = ''
		comm = ''
		for (m=0;m<macrolanguages[str['subtag']].length;m++) { 
			if (m == macrolanguages[str['subtag']].length-1) { list += 'and <span class="stname">'+macrolanguages[str['subtag']][m]+'</span>' }
			else { list += '<span class="stname">'+macrolanguages[str['subtag']][m]+'</span>, ' }
			}
		_warnings += '<p class="report"><img src="images/warning.png" alt="Information:" />&nbsp; <span class="stname">'+str['subtag']+"</span> is a <a href='http://www.w3.org/International/articles/language-tags/#extlang' class=term>macrolanguage</a> that encompasses the following more specific primary language subtags: "+list+'. If it doesn\'t break legacy usage for your application, you should use one of these more specific language subtags instead.</p><p class="reportNote">'
		switch ( str['subtag'] ) {
			case 'zh': _warnings += " On the other hand, <span class='stname'>"+str['subtag']+"</span> is often preferred by legacy applications rather than <span class='stname'>cmn</span> (Mandarin Chinese)."; break;
			case 'ar': _warnings += " On the other hand, <span class='stname'>"+str['subtag']+"</span> is often preferred by legacy applications rather than <span class='stname'>arb</span> (Standard Arabic)."; break;
			case 'ms': _warnings += " On the other hand, <span class='stname'>"+str['Ssubtag']+"</span> is often preferred by legacy applications rather than <span class='stname'>zsm</span> (Standard Malay)."; break;
			}
		_warnings += "</p>";
		}
	if ((str['scope']) && str['scope'] == 'collection') { 
		_info += '<p class="report"><img src="images/comment.png" alt="Information:" />&nbsp; <span class="stname">'+str['Subtag']+'</span> represents a collection of languages. Although a collection subtag can be used in the absence of a more specific tag, you should check whether there is a more specific language subtag. Unfortunately, the registry does not offer any suggestions to assist with this.</p>'; 
		}
	}


function makeFriendly() {
	// hides registry details
	var divs = document.getElementsByTagName('div');
 		
	for(var i=0; i < divs.length; i++) {
		if(divs[i].className == 'registryItem') {
			var itemHeader = divs[i].getElementsByTagName('h3');
 				
			itemHeader[0].onclick = function() {
				toggleRegistryDetails(this);
				}
 				
			itemHeader[0].style.cursor = 'pointer';
			itemHeader[0].title   = "Click to view or hide details";
 				
 				
			var itemDetails = divs[i].getElementsByTagName('ul');
 				
			itemDetails[0].style.display = 'none';
			}
		}
	}
 	
function toggleRegistryDetails(item) {
	var itemDetails = item.parentNode.getElementsByTagName('ul');
 				
	if(itemDetails[0].style.display == 'block') {
		itemDetails[0].style.display = 'none';
		}
	else { itemDetails[0].style.display = 'block'; }
	}

