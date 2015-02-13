// function-text.js
// this file contains the translatable text needed for UniView's functions.js file

function makeActive (button) {
	// highlights the last button clicked under Find
	// button: node, the last button clicked

	hexbutton.className = '';
	decbutton.className = '';
	charbutton.className = '';
	searchbutton.className = '';
	
	button.className = 'activebutton';
	}
	
function hideSearchParameters () {
	// hides the optional search paramater selections
	document.getElementById('searchParameters').style.display = 'none';
	document.getElementById('searchResultCount').style.display = 'none';
	}

function showSearchParameters () {
	// hides the optional search paramater selections
	document.getElementById('searchParameters').style.display = 'inline';
	document.getElementById('searchResultCount').innerHTML = '';
	document.getElementById('searchResultCount').style.display = 'block';
	}

function activateFind () {
	// makes the right thing happen if you click on the down arrow img to the right of Find
	
	if (document.getElementById('decbutton').className == 'activebutton') { 
		showCodepoint(document.getElementById('charNum').value, 'dec'); 
		_lastOperation = 'codepoint';
		} 
	else if (document.getElementById('hexbutton').className == 'activebutton')  { 
		showCodepoint(document.getElementById('charNum').value, 'hex');  
		_lastOperation = 'codepoint';
		} 
	else if (document.getElementById('charbutton').className == 'activebutton') { 
		showCharacterList(document.getElementById('charNum').value); 
		_lastOperation = 'codepoint'; } 
	else { 
		findString(document.getElementById('charNum').value); 
		}
	}

// text strings
var sNotAChar = "Not a character."; 
var sColon = ': \u00A0 '; // to separate character and description in a list
var sNoName = ' \u00A0 No name: '; // in a list description for han, etc.
var sSearching = 'Searching...'; // when searching for a string
var sNoMatch = 'No match found.'; // when no string is found in search
var sPrevChar = 'Previous character'; // alt and title of img at top of right panel
var sNextChar = 'Next character'; // alt and title of img at top of right panel
var sGeneralCat = 'General category:'; // Unicode property in right panel
var sCanonCombClass = 'Canonical combining class:';
var sBidiCat = 'Bidirectional category:';
var sMirrored = '\u00A0 \u00A0 [Mirrored]';
var sCharDecompMap = 'Character decomposition mapping:';
var sDecDigitValue = 'Decimal digit value:';
var sDigitValue = 'Digit value:';
var sNumValue = 'Numeric value:';
var sUnicode1Name = 'Unicode 1.0 name:';
var s10646Comment = '10646 comment field:';
var sUppercaseMap = 'Uppercase mapping:';
var sLowercaseMap = 'Lowercase mapping:';
var sTitlecaseMap = 'Titlecase mapping:';
var sScriptGroup = 'Unicode block: '; // title in right panel
var sDescription = 'Description: '; // title in right panel
var sNotesReadIn = 'Notes data read in, '; // alert when reading notes
var sDivs = ' divs'; // continuation of alert when reading notes
var sNoDescAvail = ': No description available.';
var sApplyFont = 'Apply font'; // appears in font selection box; this must match text in XHTML file!
var sReadingNotes = 'Reading notes file. Allow time for it to load...'; // alert when reading in
var sNotHex = 'This does not appear to be a hex number.'; // error msg when looking up by hex number

