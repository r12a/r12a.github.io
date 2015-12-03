function normalizeStr ( str ) { 
	var out = ''
	for (var c=0;c<str.length;c++) {
		if (str.charAt(c) == ' ') {
			out += String.fromCodePoint(parseInt(str.charAt(c+1)+str.charAt(c+2),16))
			c += 2
			}
		else out += str.charAt(c)
		}
	var result = ''
	for (var o=0;o<out.length;o++) {
		result += ' '+out.charCodeAt(o).toString(16).toUpperCase()
		}
	return result
	}


function chars2cpsOLD ( chars ) { 
	// this is needed because of javascript's handling of supplementary characters
	// char: a string of unicode characters
	// returns a space separated list of decimal code point values as a string
	var haut = 0
	var n = 0
	var out = ''
	for (var i = 0; i < chars.length; i++) {
		var b = chars.charCodeAt(i)
		if (b < 0 || b > 0xFFFF) {
			out += 'Error in convertChar2CP: byte out of range ' + b.toString(16) + '!'
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				var temp = 0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)
				out += temp + ' '
				haut = 0
				continue
				}
			else {
				out += 'Error in convertChar2CP: surrogate out of range ' + haut.toString(16) + '!'
				haut = 0
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b
			}
		else {
			out += b + ' '
			}
		}
	return out.trim()
	}

function chars2cps ( chars ) { 
	// this is needed because of javascript's handling of supplementary characters
	// char: a string of unicode characters
	// returns an array of decimal code point values
	var haut = 0
	var n = 0
	var out = []
	for (var i = 0; i < chars.length; i++) {
		var b = chars.charCodeAt(i)
		if (b < 0 || b > 0xFFFF) {
			alert( 'Error in chars2cps: byte out of range ' + b.toString(16) + '!' )
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				out.push(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00))
				haut = 0
				continue
				}
			else {
				alert( 'Error in chars2cps: surrogate out of range ' + haut.toString(16) + '!' )
				haut = 0
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b
			}
		else {
			out.push( b )
			}
		}
	return out
	}

function cps2chars ( str ) {
	// converts to characters a sequence of space-separated hex numbers representing bytes in utf8
	// str: string, the sequence to be converted
	var out = ""
	var counter = 0
	var n = 0
	
	// remove leading and trailing spaces
	str = str.replace(/^\s+/, '')
	str = str.replace(/\s+$/,'')
	if (str.length == 0) { return "" }
	str = str.replace(/\s+/g, ' ')
  
	var listArray = str.split(' ')
	for ( var i = 0; i < listArray.length; i++ ) {
		var b = parseInt(listArray[i], 16)  // console.log('b:'+dec2hex(b));
		switch (counter) {
			case 0:
				if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
					out += dec2char(b) } 
				else if (0xC0 <= b && b <= 0xDF) {  // 110xxxxx
					counter = 1
					n = b & 0x1F }
				else if (0xE0 <= b && b <= 0xEF) {  // 1110xxxx
					counter = 2
					n = b & 0xF }
				else if (0xF0 <= b && b <= 0xF7) {  // 11110xxx
					counter = 3
					n = b & 0x7 }
				else {
					out += 'convertUTF82Char: error1 ' + dec2hex(b) + '! '
					}
				break;
			case 1:
				if (b < 0x80 || b > 0xBF) {
					out += 'convertUTF82Char: error2 ' + dec2hex(b) + '! '
					}
				counter--
				out += dec2char((n << 6) | (b-0x80))
				n = 0
				break
			case 2: case 3:
				if (b < 0x80 || b > 0xBF) {
					out += 'convertUTF82Char: error3 ' + dec2hex(b) + '! '
					}
				n = (n << 6) | (b-0x80)
				counter--
				break
			}
		}
		return out.trim()
	}

function dec2char ( n ) {
	// converts a decimal number to a Unicode character
	// n: the dec codepoint value to be converted
    if (n <= 0xFFFF) { out = String.fromCharCode(n) } 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		out = String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF))
    	} 
	else out = 'dec2char error: Code point out of range: '+n
	return out
	}


