function encode ( stream ) {
	document.getElementById('u2big5Result').textContent = big5Encoder(stream)
	
	document.getElementById('u2utf8Result').textContent = utf8Encoder(stream)
	}

function decode ( stream ) {
	document.getElementById('big52uResult').textContent = big5Decoder(stream)

	document.getElementById('utf82uResult').textContent = utf8Decoder(stream)
	document.getElementById('myutf82uResult').textContent = myutf8Decoder(stream)
	}


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


function chars2cps ( chars ) { 
	// converts a sequence of characters to hex code point values
	// this is needed because of javascript's handling of supplementary characters
	// char: a string of unicode characters
	// returns a space separated list of decimal code point values
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



// INITIALISE INDEX DATA

 var big5CPs = []  // index is unicode cp, value is pointer
 for (p=5024;p<indexes.big5.length;p++) { // "Let index be index jis0208 excluding all pointers in the range 8272 to 8835, inclusive."
	if (indexes.big5[p] != null && big5CPs[indexes.big5[p]] == null) {
		big5CPs[indexes.big5[p]] = p
		}
	}
//  If code point is U+2550, U+255E, U+2561, U+256A, U+5341, or U+5345, return the last pointer corresponding to code point in index.
big5CPs[0x2550] = 18991
big5CPs[0x255E] = 18975
big5CPs[0x2561] = 18977
big5CPs[0x256A] = 18976
big5CPs[0x5341] = 5512
big5CPs[0x5345] = 5599

// 	END OF DATA INITIALISATION



function big5Encoder (stream) {
	var cps = stream.split('')
	for (i=0;i<cps.length;i++) cps[i] = cps[i].charCodeAt(0)
	var out = ''
	for (cp of cps) {
		if (cp > -1 && cp < 0x80) {  // ASCII
			out +=  normalizeStr(String.fromCodePoint(cp))
			continue
			}
		var ptr = big5CPs[cp]
		if (ptr == null) {
			out += '&#x'+cp.toString(16).toUpperCase()+';'
			continue
			}
		var lead = Math.floor(ptr/157) + 0x81
		var trail = ptr % 157
		var offset
		if (trail < 0x3F) offset = 0x40
		else { offset = 0x62 }
		var end = trail+offset
		out += ' '+lead.toString(16).toUpperCase()+' '+end.toString(16).toUpperCase()
		}
	return out
	}

function big5Decoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, offset, ptr, cp
	var big5lead = 0x00
	for (byte of bytes) {
		if (big5lead != 0x00) {
			lead = big5lead
			ptr = null
			big5lead = 0x00
			if (byte < 0x7F) offset = 0x40
			else offset = 0x62
			
			if ((byte >= 0x40 && byte <= 0x7E) || (byte >= 0xA1 && byte <= 0xFE)) ptr = (lead - 0x81) * 157 + (byte - offset)
			// "If there is a row in the table below whose first column is pointer, return the two code points listed in its second column"
			switch (ptr) {
				case '1133': out += 'Ê̄'; continue
				case '1135': out += 'Ê̌'; continue
				case '1164': out += 'ê̄'; continue
				case '1166': out += 'ê̌'; continue
				}
			if (ptr == null) cp = null
			else cp = indexes.big5[ptr]
			if (cp == null && byte > -1 && byte < 0x80) { out += String.fromCodePoint(cp); continue }
			if (cp == null) { out += '�'; continue }
			out += String.fromCodePoint(cp)
			}
		else if (byte > -1 && byte < 0x80) out += String.fromCodePoint(byte)
		else if (byte > 0x80 && byte < 0xFF) big5lead = byte
		else out += '�'
		}
	if (big5lead != 0x00) out += '�'
	return out
	}
	
function utf8Encoder (stream) {
	stream = chars2cps(stream)
	var cps = stream.split(' ')
	//for (i=0;i<cps.length;i++) cps[i] = convertChar2CP(cps[i])
	console.log(cps)
	var out = ''
	var count, offset
	while (cps.length > 0) {
		cp = cps.shift()
		console.log(cp)
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			continue
			}
		if (cp >= 0x80 && cp <= 0x7FF) { count = 1; offset = 0xC0; }
		else if (cp >= 0x800 && cp <= 0xFFFF) { count = 2; offset = 0xE0; }
		else { count = 3; offset = 0xF0; }
		console.log('count',count,'offset',offset)
		var bytes = []
		bytes[0] = (cp >> (6 * count)) + offset
		while (count > 0) {
			var temp = cp >> (6 * (count-1))
			bytes.push(0x80|(temp & 0x3F))
			count--
			}
		for (c=0;c<bytes.length;c++) {
			out += ' '+bytes[c].toString(16)
			}
		}
	return out
	}


function utf8Decoder (stream) {
	// stream: a string of space/percent separated, 2-digit hex byte codes
	stream = stream.replace(/%/g,' ')
	stream = stream.trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)

	var out = ''
	var u8cp = 0
	var bytesseen = 0
	var bytesneeded = 0
	var lowerbound = 0x80
	var upperbound = 0xBF
	
	console.log(bytes)
	while (bytes.length > 0) {
		byte = bytes.shift()
		console.log('BYTE: ',byte.toString(16),byte)
		if (bytesneeded == 0) {
			if (byte >= 0x00 && byte <= 0x7F) { 
				out += dec2char(cp); 
				continue 
				}
			else if (byte >= 0xC2 && byte <= 0xDF) { 
				bytesneeded = 1; 
				u8cp = byte - 0xC0 
				}
			else if (byte >= 0xE0 && byte <= 0xEF) { 
				if (byte == 0xE0) lowerbound = 0xA0
				if (byte == 0xED) upperbound = 0x9F
				bytesneeded = 2; u8cp = byte - 0xE0 
				}
			else if (byte >= 0xF0 && byte <= 0xF4) { 
				if (byte == 0xF0) lowerbound = 0x90
				if (byte == 0xF4) upperbound = 0x8F
				bytesneeded = 3; u8cp = byte - 0xF0 
				}
			else { out += '�'; continue }
			u8cp = u8cp << (6 * bytesneeded)
			console.log('step3: u8cp',u8cp,'bytesseen',bytesseen,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
			continue
			}
		
		if (byte < lowerbound || byte > upperbound) {
			u8cp = 0
			bytesneeded = 0
			bytesseen = 0
			lowerbound = 0x80
			upperbound = 0xBF
			bytes.unshift(byte)
			out += '�'
			console.log('step4: u8cp',u8cp,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
			continue
			}
		
		lowerbound = 0x80
		upperbound = 0xBF
		bytesseen++
		u8cp = u8cp + (byte - 0x80) << (6 * (bytesneeded - bytesseen))
		console.log('step7: u8cp',u8cp,'bytesseen',bytesseen,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
		if (bytesseen != bytesneeded) continue
		
		cp = u8cp
		u8cp = 0
		bytesneeded = 0
		bytesseen = 0
		out += dec2char(cp)
		console.log('step10: cp',cp,'u8cp',u8cp,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
		}
	if (bytesneeded != 0x00) out += '�'
	return out
	}
	

function myutf8Decoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)

	var out = ''
	var counter = 0
	var n = 0
	
	console.log(bytes)
	while (bytes.length > 0) {
		b = bytes.shift()
		console.log('BYTE: ',b.toString(16),b)
		switch (counter) {
			case 0:
				if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
					out += String.fromCodePoint(b); } 
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
					out += 'convertUTF82Char: error1 ' + b.toString(16) + '! ';
					}
				break;
			case 1:
				if (b < 0x80 || b > 0xBF) {
					out += 'convertUTF82Char: error2 ' + b.toString(16) + '! ';
					}
				counter--;
				out += String.fromCodePoint((n << 6) | (b-0x80));
				n = 0;
				break;
			case 2: case 3:
				if (b < 0x80 || b > 0xBF) {
					out += 'convertUTF82Char: error3 ' + b.toString(16) + '! ';
					}
				n = (n << 6) | (b-0x80);
				counter--;
				break;
			}
		}
	return out
	}
	
