
// test string abcáßçकखी國際𐎄𐎔𐎘
	 /*
	Copyright (C) 2007  Richard Ishida ishida@w3.org
	This program is free software; you can redistribute it and/or modify it under the terms 
	of the GNU General Public License as published by the Free Software Foundation; either 
	version 2 of the License, or (at your option) any later version as long as you point to 
	http://rishida.net/ in your code.

	This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
	without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  
	See the GNU General Public License for more details. http://www.gnu.org/licenses/gpl.html
	
	
	21 jun, added remaining entities to entities.js, and corrected emspace, rlm, etc.
	
	*/

function displayResults(str, src) {
	// convert the string of characters into various formats and send to UI
	// str: string, the string of characters
	// src: string, the id of the UI location that originated the request
	var preserve = 'none';
	var pad = true;
	var showinvisibles;
	var bidimarkup;
	var cstyle = false;
	if (src != 'chars') { chars.value = str; }
	if (src != 'codePoints') { 
		preserve = 'none';
		if (document.getElementById('hexcplatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('hexcpascii').checked) { preserve = 'ascii'; } 
		codePoints.value = convertCharStr2CP(str, preserve, true, 'hex'); 
		}
	if (src != 'decCodePoints') { 
		preserve = 'none';
		if (document.getElementById('deccplatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('deccpascii').checked) { preserve = 'ascii'; } 
		decCodePoints.value = convertCharStr2CP(str, preserve, true, 'dec'); 
		}
	if (src != 'XML') { 
		if (document.getElementById('xmlinvisibles').checked) { showinvisibles = true; } else { showinvisibles = false; }
		if (document.getElementById('xmlbidimarkup').checked) { bidimarkup = true; } else { bidimarkup = false; }
		XML.value = convertCharStr2XML(str, showinvisibles, bidimarkup); 
		}
	if (src != 'UTF8') { 
		UTF8.value = convertCharStr2UTF8( str );
		}
	if (src != 'UTF16') { 
		UTF16.value = convertCharStr2UTF16( str );
		}
	if (src != 'hexNCRs') { 
		preserve = 'none';
		if (document.getElementById('hexncrlatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('hexncrascii').checked) { preserve = 'ascii'; } 
		hexNCRs.value = convertCharStr2SelectiveCPs( str, preserve, true, '&#x', ';', 'hex' );
		}
	if (src != 'decNCRs') { 
		preserve = 'none';
		if (document.getElementById('decncrlatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('decncrascii').checked) { preserve = 'ascii'; } 
		decNCRs.value = convertCharStr2SelectiveCPs( str, preserve, false, '&#', ';', 'dec' );
		}
	if (src != 'pEsc') { 
		pEsc.value = convertCharStr2pEsc( str );
		}
	if (src != 'jEsc') { 
		if (document.getElementById('cstyleSC').checked) { cstyle = true; }
		else { cstyle = false; }
		jEsc.value = convertCharStr2jEsc( str, cstyle );
		}
	if (src != 'Unicode') { 
		preserve = 'none';
		if (document.getElementById('unicodelatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('unicodeascii').checked) { preserve = 'ascii'; } 
		Unicode.value = convertCharStr2CP(str, preserve, true, 'unicode');
		//Unicode.value = convertCharStr2Unicode( str, 'none', pad );
		//Unicode.value = convertCP2Unicode( convertCharStr2CP( str, preserve, pad ) ); 
		}
	if (src != 'zeroX') { 
		preserve = 'none';
		if (document.getElementById('zeroXlatin1').checked) { preserve = 'latin1'; }
		else if (document.getElementById('zeroXascii').checked) { preserve = 'ascii'; } 
		zeroX.value = convertCharStr2CP(str, preserve, false, 'zerox');
		}
	if (src != 'CSS') { 
		CSS.value = convertCharStr2CSS( str );
		}
	}


function hex2char ( hex ) {
	// converts a single hex number to a character
	// note that no checking is performed to ensure that this is just a hex number, eg. no spaces etc
	// hex: string, the hex codepoint to be converted
	var result = '';
	var n = parseInt(hex, 16);
    if (n <= 0xFFFF) { result += String.fromCharCode(n); } 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		result += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
    	} 
	else { result += 'hex2Char error: Code point out of range: '+dec2hex(n); }
	return result;
	}


function dec2char ( n ) {
	// converts a single string representing a decimal number to a character
	// note that no checking is performed to ensure that this is just a hex number, eg. no spaces etc
	// dec: string, the dec codepoint to be converted
	var result = '';
    if (n <= 0xFFFF) { result += String.fromCharCode(n); } 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		result += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
    	} 
	else { result += 'dec2char error: Code point out of range: '+dec2hex(n); }
	return result;
	}

function dec2hex ( textString ) {
	return (textString+0).toString(16).toUpperCase();
	}

function  dec2hex2 ( textString ) {
	var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
	return hexequiv[(textString >> 4) & 0xF] + hexequiv[textString & 0xF];
	}

function  dec2hex4 ( textString ) {
	var hexequiv = new Array ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
	return hexequiv[(textString >> 12) & 0xF] + hexequiv[(textString >> 8) & 0xF] 
		+ hexequiv[(textString >> 4) & 0xF] + hexequiv[textString & 0xF];
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




// ========================== Converting to characters ==============================================


function convertAllEscapes (str, numbers) {
	// converts all escapes in the text str to characters, and can interpret numbers as escapes too
	// str: string, the text to be converted
	// numbers: string enum [none, hex, dec, utf8, utf16], what to treat numbers as
	
	sle = document.getElementById('singleletterescapes').checked;
	str = convertUnicode2Char(str); //alert(str);
	str = convertZeroX2Char(str); //alert(str);
	str = convertHexNCR2Char(str); //alert(str);
	str = convertDecNCR2Char(str); //alert(str);
	if (sle) { str = convertjEsc2Char(str, true); }
	else { str = convertjEsc2Char(str, false); //alert(str);
	str = convertCSS2Char(str, false); } //alert(str);
	str = convertpEnc2Char(str);  //alert(str);
	str = convertEntities2Char(str); //alert(str);
	str = convertNumbers2Char(str, numbers); //alert(str);
	
	return str;
	}


function convertUnicode2Char ( str ) { 
	// converts a string containing U+... escapes to a string of characters
	// str: string, the input
	
	// first convert the 6 digit escapes to characters
	str = str.replace(/[Uu]\+10([A-Fa-f0-9]{4})/g, 
					function(matchstr, parens) {
						return hex2char('10'+parens);
						}
						); 
	// next convert up to 5 digit escapes to characters
	str = str.replace(/[Uu]\+([A-Fa-f0-9]{1,5})/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						); 
	return str;
	}

	
function oldconvertUnicode2Char ( str ) { 
	// converts a string containing U+... escapes to a string of characters
	// str: string, the input
	
	// first convert the 6 digit escapes to characters
	str = str.replace(/U\+10([A-Fa-f0-9]{4})/g, 
					function(matchstr, parens) {
						return hex2char('10'+parens);
						}
						); 
	// next convert up to 5 digit escapes to characters
	str = str.replace(/U\+([A-Fa-f0-9]{1,5})/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						); 
	return str;
	}

	
function convertHexNCR2Char ( str ) { 
	// converts a string containing &#x...; escapes to a string of characters
	// str: string, the input
	
	// convert up to 6 digit escapes to characters
	str = str.replace(/&#x([A-Fa-f0-9]{1,6});/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						); 
	return str;
	}

function convertDecNCR2Char ( str ) { 
	// converts a string containing &#...; escapes to a string of characters
	// str: string, the input
	
	// convert up to 6 digit escapes to characters
	str = str.replace(/&#([0-9]{1,7});/g, 
					function(matchstr, parens) {
						return dec2char(parens);
						}
						);
	return str;
	}

function convertZeroX2Char ( str ) { 
	// converts a string containing 0x... escapes to a string of characters
	// str: string, the input
	
	// convert up to 6 digit escapes to characters
	str = str.replace(/0x([A-Fa-f0-9]{1,6})/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						); 
	return str;
	}

function convertCSS2Char ( str, convertbackslash ) { 
	// converts a string containing CSS escapes to a string of characters
	// str: string, the input
	// convertbackslash: boolean, true if you want \x etc to become x or \a to be treated as 0xA
	
	// convert up to 6 digit escapes to characters & throw away any following whitespace
	if (convertbackslash) {	
		str = str.replace(/\\([A-Fa-f0-9]{1,6})(\s)?/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						);
	 	str = str.replace(/\\/g, ''); 
	 	}
	else {
		str = str.replace(/\\([A-Fa-f0-9]{2,6})(\s)?/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						);
		}
	return str;
	}


function convertjEsc2Char ( str, shortEscapes ) { 
	// converts a string containing JavaScript or Java escapes to a string of characters
	// str: string, the input
	// shortEscapes: boolean, if true the function will convert \b etc to characters
	
	// convert \U and 6 digit escapes to characters
	str = str.replace(/\\U([A-Fa-f0-9]{8})/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						);
	// convert \u and 6 digit escapes to characters
	str = str.replace(/\\u([A-Fa-f0-9]{4})/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						);
	// convert \b etc to characters, if flag set
	if (shortEscapes) {
		//str = str.replace(/\\0/g, '\0'); 
		str = str.replace(/\\b/g, '\b'); 
		str = str.replace(/\\t/g, '\t'); 
		str = str.replace(/\\n/g, '\n'); 
		str = str.replace(/\\v/g, '\v'); 
		str = str.replace(/\\f/g, '\f'); 
		str = str.replace(/\\r/g, '\r'); 
		str = str.replace(/\\\'/g, '\''); 
		str = str.replace(/\\\"/g, '\"'); 
		str = str.replace(/\\\\/g, '\\'); 
		}
	return str;
	}


function convertpEnc2Char ( str ) { 
	// converts a string containing precent encoded escapes to a string of characters
	// str: string, the input
	
	// find runs of hex numbers separated by % and send them for conversion
	str = str.replace(/((%[A-Fa-f0-9]{2})+)/g, 
					function(matchstr, parens) {
						//return convertpEsc2Char(parens.replace(/%/g,' ')); 
						return convertpEsc2Char(parens); 
						}
						); 
	return str;
	}


function convertEntities2Char ( str ) { 
	// converts a string containing HTML/XML character entities to a string of characters
	// str: string, the input
	
	str = str.replace(/&([A-Za-z0-9]+);/g, 
					function(matchstr, parens) { //alert(parens);
						if (parens in entities) { //alert(entities[parens]);
							return entities[parens];
							} 
						else { return matchstr; }						}
						);
	return str;
	}


function convertNumbers2Char ( str, type ) { 
	// converts a string containing HTML/XML character entities to a string of characters
	// str: string, the input
	// type: string enum [none, hex, dec, utf8, utf16], what to treat numbers as
	
	if (type == 'hex') {
		str = str.replace(/\s*,?\s*(\b[A-Fa-f0-9]{1,6}\b)\s*,?\s*/g, 
					function(matchstr, parens) {
						return hex2char(parens);
						}
						);
		}
	else if (type == 'dec') {
		str = str.replace(/\s*,?\s*(\b[0-9]+\b)\s*,?\s*/g, 
					function(matchstr, parens) {
						return dec2char(parens);
						}
						);
		}
	return str;
	}






function convertUTF82Char ( str ) {
	// converts to characters a sequence of space-separated hex numbers representing bytes in utf8
	// str: string, the sequence to be converted
	var outputString = "";
	var counter = 0;
	var n = 0;
	
	// remove leading and trailing spaces
	str = str.replace(/^\s+/, '');
	str = str.replace(/\s+$/,'');
	if (str.length == 0) { return ""; }
	str = str.replace(/\s+/g, ' ');
  
	var listArray = str.split(' ');
	for ( var i = 0; i < listArray.length; i++ ) {
		var b = parseInt(listArray[i], 16);  // alert('b:'+dec2hex(b));
		switch (counter) {
		case 0:
			if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
				outputString += dec2char(b); } 
			else if (0xC0 <= b && b <= 0xDF) {  // 110xxxxx
				counter = 1;
				n = b & 0x1F; }
			else if (0xE0 <= b && b <= 0xEF) {  // 1110xxxx
				counter = 2;
				n = b & 0xF; }
			else if (0xF0 <= b && b <= 0xF7) {  // 11110xxx
				counter = 3;
				n = b & 0x7; }
			else {
				outputString += 'convertUTF82Char: error1 ' + dec2hex(b) + '! ';
				}
			break;
		case 1:
			if (b < 0x80 || b > 0xBF) {
				outputString += 'convertUTF82Char: error2 ' + dec2hex(b) + '! ';
				}
			counter--;
			outputString += dec2char((n << 6) | (b-0x80));
			n = 0;
			break;
		case 2: case 3:
			if (b < 0x80 || b > 0xBF) {
				outputString += 'convertUTF82Char: error3 ' + dec2hex(b) + '! ';
				}
			n = (n << 6) | (b-0x80);
			counter--;
			break;
		}
		}
		return outputString.replace(/ $/, '');
	}



function convertUTF162Char ( str ) { 
	// Converts a string of UTF-16 code units to characters
	// str: sequence of UTF16 code units, separated by spaces
	var highsurrogate = 0;
	var suppCP;
	var n = 0;
	var outputString = '';
	
	// remove leading and multiple spaces
	str = str.replace(/^\s+/,'');
	str = str.replace(/\s+$/,'');
	if (str.length == 0){ return; }
	str = str.replace(/\s+/g,' '); 
	
	var listArray = str.split(' ');
	for (var i = 0; i < listArray.length; i++) {
		var b = parseInt(listArray[i], 16); //alert(listArray[i]+'='+b);
		if (b < 0 || b > 0xFFFF) {
			outputString += '!Error in convertUTF162Char: unexpected value, b=' + dec2hex(b) + '!';
			}
		if (highsurrogate != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				outputString += dec2char(0x10000 + ((highsurrogate - 0xD800) << 10) + (b - 0xDC00));
				highsurrogate = 0;
				continue;
				}
			else {
				outputString += 'Error in convertUTF162Char: low surrogate expected, b=' + dec2hex(b) + '!';
				highsurrogate = 0;
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) { // start of supplementary character
			highsurrogate = b;
			}
		else {
			outputString += dec2char(b);
			}
		}
	return outputString;
	}



function convertpEsc2Char ( str ) {
	// converts to characters a sequence of %-separated hex numbers representing bytes in utf8
	// str: string, the sequence to be converted

	var outputString = "";
	var counter = 0;
	var n = 0;
	
	var listArray = str.split('%');
	for ( var i = 1; i < listArray.length; i++ ) {
		var b = parseInt(listArray[i], 16);  // alert('b:'+dec2hex(b));
		switch (counter) {
		case 0:
			if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
				outputString += dec2char(b); } 
			else if (0xC0 <= b && b <= 0xDF) {  // 110xxxxx
				counter = 1;
				n = b & 0x1F; }
			else if (0xE0 <= b && b <= 0xEF) {  // 1110xxxx
				counter = 2;
				n = b & 0xF; }
			else if (0xF0 <= b && b <= 0xF7) {  // 11110xxx
				counter = 3;
				n = b & 0x7; }
			else {
				outputString += 'convertpEsc2Char: error ' + dec2hex(b) + '! ';
				}
			break;
		case 1:
			if (b < 0x80 || b > 0xBF) {
				outputString += 'convertpEsc2Char: error ' + dec2hex(b) + '! ';
				}
			counter--;
			outputString += dec2char((n << 6) | (b-0x80));
			n = 0;
			break;
		case 2: case 3:
			if (b < 0x80 || b > 0xBF) {
				outputString += 'convertpEsc2Char: error ' + dec2hex(b) + '! ';
				}
			n = (n << 6) | (b-0x80);
			counter--;
			break;
		}
		}
	return outputString;
	}



function convertXML2Char (str) {
	// converts XML or HTML text to characters by removing all character entities and ncrs
	// str: string, the sequence to be converted

	// remove various escaped forms
	str = convertHexNCR2Char(str);
	str = convertDecNCR2Char(str);
	str = convertEntities2Char(str);
	
	return str;
	}



// ============================== Convert to escapes ===============================================

function convertCharStr2XML ( str, convertinvisibles, bidimarkup ) {
	// replaces xml/html syntax-sensitive characters in a string with entities
	// also replaces invisible and ambiguous characters with escapes (list to be extended)
	// str: string, the input string
	// convertinvisibles: boolean, if true, invisible characters are converted to NCRs
	// bidimarkup: boolean, if true, bidi rle/lre/pdf characters are converted to markup
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	
	// replace invisible and ambiguous characters
	if (convertinvisibles) {
		str = str.replace(/\u202A/g, '&#x202A;');
		str = str.replace(/\u202B/g, '&#x202B;');
		str = str.replace(/\u202D/g, '&#x202D;');
		str = str.replace(/\u202E/g, '&#x202E;');
		str = str.replace(/\u202C/g, '&#x202C;');
		str = str.replace(/\u200E/g, '&#x200E;');
		str = str.replace(/\u200F/g, '&#x200F;');
		str = str.replace(/\uAO/g, '&#xAO;');
		//str = str.replace(/\u/g, '&#x;');
		}

	// convert lre/rle/pdf to markup
	if (bidimarkup) {
		str = str.replace(/\u202A/g, '&lt;span dir="ltr"&gt;');
		str = str.replace(/\u202B/g, '&lt;span dir="rtl"&gt;');
		str = str.replace(/\u202C/g, '&lt;/span&gt;');
		str = str.replace(/&#x202A;/g, '&lt;span dir="ltr"&gt;');
		str = str.replace(/&#x202B;/g, '&lt;span dir="rtl"&gt;');
		//str = str.replace(/\u202D/g, '&lt;bdo dir="ltr"&gt;');
		//str = str.replace(/\u202E/g, '&lt;bdo dir="rtl"&gt;');
		str = str.replace(/&#x202C;/g, '&lt;/span&gt;');
		}

	return str;
	}


function convertCharStr2SelectiveCPs ( str, preserve, pad, before, after, base ) { 
	// converts a string of characters to code points or code point based escapes
	// str: string, the string to convert
	// preserve: string enum [ascii, latin1], a set of characters to not convert
	// pad: boolean, if true, hex numbers lower than 1000 are padded with zeros
	// before: string, any characters to include before a code point (eg. &#x for NCRs)
	// after: string, any characters to include after (eg. ; for NCRs)
	// base: string enum [hex, dec], hex or decimal output
	var haut = 0; 
	var n = 0; var cp;
	var CPstring = '';
	for (var i = 0; i < str.length; i++) {
		var b = str.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertCharStr2SelectiveCPs: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				if (base == 'hex') {
					CPstring += before + dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + after;
					}
				else { cp = 0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00);
					CPstring += before + cp + after; 
					}
				haut = 0;
				continue;
				}
			else {
				CPstring += 'Error in convertCharStr2SelectiveCPs: surrogate out of range ' + dec2hex(haut) + '!';
				haut = 0;
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b;
			}
		else {
			if (preserve == 'ascii'&& b <= 127) { //  && b != 0x3E && b != 0x3C &&  b != 0x26) {
				CPstring += str.charAt(i);
				}
			else if (b <= 255 && preserve == 'latin1') { // && b != 0x3E && b != 0x3C &&  b != 0x26) {
				CPstring += str.charAt(i);
				}
			else { 
				if (base == 'hex') {
					cp = dec2hex(b); 
					if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
					}
				else { cp = b; }
				CPstring += before + cp + after; 
				}
			}
		}
	return CPstring;
	}
	
function convertCharStr2Unicode ( textString, preserve, pad ) { 
	// converts a string of characters to U+... notation, separated by space
	// textString: string, the string to convert
	// preserve: string enum [ascii, latin1], a set of characters to not convert
	// pad: boolean, if true, hex numbers lower than 1000 are padded with zeros
	var haut = 0;
	var n = 0;
	var CPstring = ''; pad=false;
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
			if (b <= 127 && preserve == 'ascii') {
				CPstring += textString.charAt(i)+' ';
				}
			else if (b <= 255 && preserve == 'latin1') {
				CPstring += textString.charAt(i)+' ';
				}
			else { 
				cp = dec2hex(b); 
				if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
				CPstring += 'U+' + cp + ' '; 
				}
			}
		}
	return CPstring.substring(0, CPstring.length-1);
	}


function convertCharStr2HexNCR ( textString ) {
  var outputString = "";
  textString = textString.replace(/^\s+/, '');
  if (textString.length == 0) { return ""; }
  textString = textString.replace(/\s+/g, ' ');
  var listArray = textString.split(' ');
  for ( var i = 0; i < listArray.length; i++ ) {
    var n = parseInt(listArray[i], 16);
    outputString += '&#x' + dec2hex(n) + ';';
  }
  return( outputString );
}




function convertCharStr2pEsc ( str ) {
	// str: sequence of Unicode characters
	var outputString = "";
	var CPstring = convertChar2CP(str);
	if (str.length == 0) { return ""; }
	// process each codepoint
	var listArray = CPstring.split(' ');
	for ( var i = 0; i < listArray.length; i++ ) {
		var n = parseInt(listArray[i], 16);
		//if (i > 0) { outputString += ' ';}
		if (n == 0x20) { outputString += '%20'; }
		else if (n >= 0x41 && n <= 0x5A) { outputString += String.fromCharCode(n); } // alpha
		else if (n >= 0x61 && n <= 0x7A) { outputString += String.fromCharCode(n); } // alpha
		else if (n >= 0x30 && n <= 0x39) { outputString += String.fromCharCode(n); } // digits
		else if (n == 0x2D || n == 0x2E || n == 0x5F || n == 0x7E) { outputString += String.fromCharCode(n); } // - . _ ~
		else if (n <= 0x7F) { outputString += '%'+dec2hex2(n); }
		else if (n <= 0x7FF) { outputString += '%'+dec2hex2(0xC0 | ((n>>6) & 0x1F)) + '%' + dec2hex2(0x80 | (n & 0x3F)); } 
		else if (n <= 0xFFFF) { outputString += '%'+dec2hex2(0xE0 | ((n>>12) & 0x0F)) + '%' + dec2hex2(0x80 | ((n>>6) & 0x3F)) + '%' + dec2hex2(0x80 | (n & 0x3F)); } 
		else if (n <= 0x10FFFF) {outputString += '%'+dec2hex2(0xF0 | ((n>>18) & 0x07)) + '%' + dec2hex2(0x80 | ((n>>12) & 0x3F)) + '%' + dec2hex2(0x80 | ((n>>6) & 0x3F)) + '%' + dec2hex2(0x80 | (n & 0x3F)); } 
		else { outputString += '!Error ' + dec2hex(n) +'!'; }
		}
	return( outputString );
	}



function convertCharStr2UTF8 ( str ) { 
	// Converts a string of characters to UTF-8 byte codes, separated by spaces
	// str: sequence of Unicode characters
	var highsurrogate = 0;
	var suppCP; // decimal code point value for a supp char
	var n = 0;
	var outputString = '';
	for (var i = 0; i < str.length; i++) {
		var cc = str.charCodeAt(i); 
		if (cc < 0 || cc > 0xFFFF) {
			outputString += '!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc=' + cc + '!';
			}
		if (highsurrogate != 0) {  
			if (0xDC00 <= cc && cc <= 0xDFFF) {
				suppCP = 0x10000 + ((highsurrogate - 0xD800) << 10) + (cc - 0xDC00); 
				outputString += ' '+dec2hex2(0xF0 | ((suppCP>>18) & 0x07)) + ' ' + dec2hex2(0x80 | ((suppCP>>12) & 0x3F)) + ' ' + dec2hex2(0x80 | ((suppCP>>6) & 0x3F)) + ' ' + dec2hex2(0x80 | (suppCP & 0x3F));
				highsurrogate = 0;
				continue;
				}
			else {
				outputString += 'Error in convertCharStr2UTF16: low surrogate expected, cc=' + cc + '!';
				highsurrogate = 0;
				}
			}
		if (0xD800 <= cc && cc <= 0xDBFF) { // high surrogate
			highsurrogate = cc;
			}
		else {
			if (cc <= 0x7F) { outputString += ' '+dec2hex2(cc); }
			else if (cc <= 0x7FF) { outputString += ' '+dec2hex2(0xC0 | ((cc>>6) & 0x1F)) + ' ' + dec2hex2(0x80 | (cc & 0x3F)); } 
			else if (cc <= 0xFFFF) { outputString += ' '+dec2hex2(0xE0 | ((cc>>12) & 0x0F)) + ' ' + dec2hex2(0x80 | ((cc>>6) & 0x3F)) + ' ' + dec2hex2(0x80 | (cc & 0x3F)); } 
			}
		}
	return outputString.substring(1);
	}



function convertCharStr2UTF16 ( str ) { 
	// Converts a string of characters to UTF-16 code units, separated by spaces
	// str: sequence of Unicode characters
	var highsurrogate = 0;
	var suppCP;
	var n = 0;
	var outputString = '';
	for (var i = 0; i < str.length; i++) {
		var cc = str.charCodeAt(i); 
		if (cc < 0 || cc > 0xFFFF) {
			outputString += '!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc=' + cc + '!';
			}
		if (highsurrogate != 0) {
			if (0xDC00 <= cc && cc <= 0xDFFF) {
				suppCP = 0x10000 + ((highsurrogate - 0xD800) << 10) + (cc - 0xDC00); 
				suppCP -= 0x10000; outputString += dec2hex4(0xD800 | (suppCP >> 10)) + ' ' + dec2hex4(0xDC00 | (suppCP & 0x3FF)) + ' ';
				highsurrogate = 0;
				continue;
				}
			else {
				outputString += 'Error in convertCharStr2UTF16: low surrogate expected, cc=' + cc + '!';
				highsurrogate = 0;
				}
			}
		if (0xD800 <= cc && cc <= 0xDBFF) { // start of supplementary character
			highsurrogate = cc;
			}
		else {
			outputString += dec2hex(cc) + ' ';
			}
		}
	return outputString.substring(0, outputString.length-1);
	}



function convertCharStr2jEsc ( str, cstyle ) { 
	// Converts a string of characters to JavaScript escapes
	// str: sequence of Unicode characters
	var highsurrogate = 0;
	var suppCP;
	var pad;
	var n = 0;
	var outputString = '';
	for (var i = 0; i < str.length; i++) {
		var cc = str.charCodeAt(i); 
		if (cc < 0 || cc > 0xFFFF) {
			outputString += '!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc=' + cc + '!';
			}
		if (highsurrogate != 0) { // this is a supp char, and cc contains the low surrogate
			if (0xDC00 <= cc && cc <= 0xDFFF) {
				suppCP = 0x10000 + ((highsurrogate - 0xD800) << 10) + (cc - 0xDC00); 
				if (cstyle) {
					pad = suppCP.toString(16);
					while (pad.length < 8) { pad = '0'+pad; }
					outputString += '\\U'+pad; 
					}
				else {
					suppCP -= 0x10000; 
					outputString += '\\u'+ dec2hex4(0xD800 | (suppCP >> 10)) +'\\u'+ dec2hex4(0xDC00 | (suppCP & 0x3FF));
					}
				highsurrogate = 0;
				continue;
				}
			else {
				outputString += 'Error in convertCharStr2UTF16: low surrogate expected, cc=' + cc + '!';
				highsurrogate = 0;
				}
			}
		if (0xD800 <= cc && cc <= 0xDBFF) { // start of supplementary character
			highsurrogate = cc;
			}
		else { // this is a BMP character
			//outputString += dec2hex(cc) + ' ';
			switch (cc) {
				case 0: outputString += '\\0'; break;
				case 8: outputString += '\\b'; break;
				case 9: outputString += '\\t'; break;
				case 10: outputString += '\\n'; break;
				case 13: outputString += '\\r'; break;
				case 11: outputString += '\\v'; break;
				case 12: outputString += '\\f'; break;
				case 34: outputString += '\\\"'; break;
				case 39: outputString += '\\\''; break;
				case 92: outputString += '\\\\'; break;
				default: 
					if (cc > 0x1f && cc < 0x7F) { outputString += String.fromCharCode(cc); }
					else { 
						pad = cc.toString(16).toUpperCase();
						while (pad.length < 4) { pad = '0'+pad; }
						outputString += '\\u'+pad; 
						}
				}
			}
		}
	return outputString;
	}



function convertCharStr2CSS ( str ) { 
	// Converts a string of characters to CSS escapes
	// str: sequence of Unicode characters
	var highsurrogate = 0;
	var suppCP;
	var pad;
	var outputString = '';
	for (var i = 0; i < str.length; i++) {
		var cc = str.charCodeAt(i); 
		if (cc < 0 || cc > 0xFFFF) {
			outputString += '!Error in convertCharStr2CSS: unexpected charCodeAt result, cc=' + cc + '!';
			}
		if (highsurrogate != 0) { // this is a supp char, and cc contains the low surrogate
			if (0xDC00 <= cc && cc <= 0xDFFF) {
				suppCP = 0x10000 + ((highsurrogate - 0xD800) << 10) + (cc - 0xDC00); 
				pad = suppCP.toString(16).toUpperCase();
				if (suppCP < 0x10000) { while (pad.length < 4) { pad = '0'+pad; } }
				else { while (pad.length < 6) { pad = '0'+pad; } }
				outputString += '\\'+pad+' '; 
				highsurrogate = 0;
				continue;
				}
			else {
				outputString += 'Error in convertCharStr2CSS: low surrogate expected, cc=' + cc + '!';
				highsurrogate = 0;
				}
			}
		if (0xD800 <= cc && cc <= 0xDBFF) { // start of supplementary character
			highsurrogate = cc;
			}
		else { // this is a BMP character
			if (cc == 0x5C) { outputString += '\\\\'; }
			else if (cc > 0x1f && cc < 0x7F) { outputString += String.fromCharCode(cc); }
			else if (cc == 0x9 || cc == 0xA || cc == 0xD) { outputString += String.fromCharCode(cc); }
			else /* if (cc > 0x7E) */ { 
				pad = cc.toString(16).toUpperCase();
				while (pad.length < 4) { pad = '0'+pad; }
				outputString += '\\'+pad+' '; 
				}
			}
		}
	return outputString;
	}



function convertCharStr2CP ( textString, preserve, pad, type ) { 
	// converts a string of characters to code points, separated by space
	// textString: string, the string to convert
	// preserve: string enum [ascii, latin1], a set of characters to not convert
	// pad: boolean, if true, hex numbers lower than 1000 are padded with zeros
	// type: string enum[hex, dec, unicode, zerox], whether output should be in hex or dec or unicode U+ form
	var haut = 0;
	var n = 0;
	var CPstring = '';
	var afterEscape = false;
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertChar2CP: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) { //alert('12345'.slice(-1).match(/[A-Fa-f0-9]/)+'<');
				//if (CPstring.slice(-1).match(/[A-Za-z0-9]/) != null) { CPstring += ' '; }
				if (afterEscape) { CPstring += ' '; }
				if (type == 'hex') { 
					CPstring += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)); 
					}
				else if (type == 'unicode') { 
					CPstring += 'U+'+dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)); 
					}
				else if (type == 'zerox') { 
					CPstring += '0x'+dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)); 
					}
				else { 
					CPstring += 0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00); 
					}
				haut = 0;
				continue;
				afterEscape = true;
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
			if (b <= 127 && preserve == 'ascii') {
				CPstring += textString.charAt(i);
				afterEscape = false;
				}
			else if (b <= 255 && preserve == 'latin1') {
				CPstring += textString.charAt(i);
				afterEscape = false;
				}
			else { 
				//if (CPstring.slice(-1).match(/[A-Za-z0-9]/) != null) { CPstring += ' '; }
				if (afterEscape) { CPstring += ' '; }
				if (type == 'hex') { 
					cp = dec2hex(b); 
					if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
					}
				else if (type == 'unicode') { 
					cp = dec2hex(b); 
					if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
					CPstring += 'U+'; 
					}
				else if (type == 'zerox') { 
					cp = dec2hex(b); 
					if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
					CPstring += '0x'; 
					}
				else { 
					cp = b;
					}
				CPstring += cp; 
				afterEscape = true;
				}
			}
		}
	//return CPstring.substring(0, CPstring.length-1);
	return CPstring;
	}
	
	
function convertCharStr2Unicode ( textString, preserve, pad ) { alert('here');
	// converts a string of characters to U+... notation, separated by space
	// textString: string, the string to convert
	// preserve: string enum [ascii, latin1], a set of characters to not convert
	// pad: boolean, if true, hex numbers lower than 1000 are padded with zeros
	var haut = 0;
	var n = 0;
	var CPstring = ''; pad=false;
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertChar2CP: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				CPstring += 'U+' + dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
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
			if (b <= 127 && preserve == 'ascii') {
				CPstring += textString.charAt(i)+' ';
				}
			else if (b <= 255 && preserve == 'latin1') {
				CPstring += textString.charAt(i)+' ';
				}
			else { 
				cp = dec2hex(b); 
				if (pad) { while (cp.length < 4) { cp = '0'+cp; } }
				CPstring += 'U+' + cp + ' '; 
				}
			}
		}
	return CPstring.substring(0, CPstring.length-1);
	}
	
	
