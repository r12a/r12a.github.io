function encode ( stream ) {
	document.getElementById('u2utf8Result').textContent = utf8Encoder(stream)
	document.getElementById('u2big5Result').textContent = big5Encoder(stream)
	document.getElementById('u2eucjpResult').textContent = eucjpEncoder(stream)
	document.getElementById('u2iso2022jpResult').textContent = iso2022jpEncoder(stream)
	}

function decode ( stream ) {
	document.getElementById('utf82uResult').textContent = utf8Decoder(stream)
	document.getElementById('myutf82uResult').textContent = myutf8Decoder(stream)
	document.getElementById('big52uResult').textContent = big5Decoder(stream)
	document.getElementById('eucjp2uResult').textContent = eucjpDecoder(stream)

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


var jis0208CPs = []  // index is unicode cp, value is pointer
 for (p=0;p<indexes.jis0208.length;p++) {
	if (indexes.jis0208[p] != null && jis0208CPs[indexes.jis0208[p]] == null) {
		jis0208CPs[indexes.jis0208[p]] = p
		}
	}

// 	END OF DATA INITIALISATION



function big5Encoder (stream) {
	cps = chars2cps(stream)
	//console.log(cps)
	var out = ''
	while (cps.length > 0) {
		cp = cps.shift()
		//console.log('CODE POINT:',cp, cp.toString(16))
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			//console.log('out is ascii',cp, cp.toString(16))
			continue
			}
		var ptr = big5CPs[cp]
		if (ptr == null) {
			out += ' &#'+cp+';'
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
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, offset, ptr, cp
	var big5lead = 0x00
	while (bytes.length > 0) {
		console.log(bytes)
		byte = bytes.shift()														
		console.log('BYTE: ',byte.toString(16),byte)
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
			if (cp == null && byte >= 0x00 && byte < 0x7F) { bytes.unshift(byte); continue } 			
			if (cp == null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			}
		else if (byte >= 0x00 && byte < 0x7F) out += dec2char(byte)
		else if (byte >= 0x81 && byte <= 0xFE) big5lead = byte
		else out += '�'
		}
	if (big5lead != 0x00) out += '�'
	return out
	}



function utf8Encoder (stream) {
	// stream: a string of unicode characters
	cps = chars2cps(stream)
	//console.log(cps)
	var out = ''
	var count, offset
	while (cps.length > 0) {
		cp = cps.shift()
		//console.log('CODE POINT:',cp, cp.toString(16))
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			//console.log('out is ascii',cp, cp.toString(16))
			continue
			}
		if (cp >= 0x80 && cp <= 0x7FF) { count = 1; offset = 0xC0; }
		else if (cp >= 0x800 && cp <= 0xFFFF) { count = 2; offset = 0xE0; }
		else { count = 3; offset = 0xF0; }
		//console.log('count',count,'offset',offset)
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
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)

	var out = ''
	var u8cp = 0
	var bytesseen = 0
	var bytesneeded = 0
	var lowerbound = 0x80
	var upperbound = 0xBF
	
	//console.log(bytes)
	while (bytes.length > 0) {
		byte = bytes.shift()
		//console.log('BYTE: ',byte.toString(16),byte)
		if (bytesneeded == 0) {
			if (byte >= 0x00 && byte <= 0x7F) { 
				out += dec2char(byte)
				//console.log('ascii output',byte)
				continue 
				}
			else if (byte >= 0xC2 && byte <= 0xDF) { 
				bytesneeded = 1
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
			//console.log('step3: u8cp',u8cp,'bytesseen',bytesseen,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
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
			//console.log('step4: u8cp',u8cp,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
			continue
			}
		
		lowerbound = 0x80
		upperbound = 0xBF
		bytesseen++
		u8cp = u8cp + (byte - 0x80) << (6 * (bytesneeded - bytesseen))
		//console.log('step7: u8cp',u8cp,'bytesseen',bytesseen,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
		if (bytesseen != bytesneeded) continue
		
		cp = u8cp
		u8cp = 0
		bytesneeded = 0
		bytesseen = 0
		out += dec2char(cp)
		//console.log('step10: cp',cp,'u8cp',u8cp,'bytesneeded',bytesneeded,'lowerb',lowerbound,'upperb',upperbound)
		}
	if (bytesneeded != 0x00) out += '�'
	return out
	}
	

function myutf8Decoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)

	var out = ''
	var counter = 0
	var n = 0
	
	//console.log(bytes)
	while (bytes.length > 0) {
		b = bytes.shift()
		//console.log('BYTE: ',b.toString(16),b)
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



function eucjpEncoder (stream) {
	cps = chars2cps(stream)
	//console.log(cps)
	var out = ''
	while (cps.length > 0) {
		cp = cps.shift()
		console.log('CODE POINT:',cp, cp.toString(16))
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			//console.log('out is ascii',cp, cp.toString(16))
			continue
			}
		if (cp == 0xA5) { out += ' 5C'; continue }
		if (cp == 0x203E) { out += ' 7E'; continue }
		if (cp >= 0xFF61 && cp <= 0xFF9F) {
			temp = cp - 0xFF61 + 0xA1
			out += ' 8E ' + temp.toString(16)
			continue
			}
		if (cp == 0x2022) { cp = 0xFF0D }
		var ptr = jis0208CPs[cp]
		if (ptr == null) {
			out += ' &#'+cp+';'
			continue
			}
		var lead = Math.floor(ptr/94) + 0xA1
		var trail = (ptr % 94) + 0xA1
		out += ' '+lead.toString(16).toUpperCase()+' '+trail.toString(16).toUpperCase()
		}
	return out
	}

function eucjpDecoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, offset, ptr, cp
	var jis0212flag = false
	var eucjpLead = 0x00
	while (bytes.length > 0) {
		console.log(bytes)
		byte = bytes.shift()														
		console.log('BYTE: ',byte.toString(16),byte)
		if (eucjpLead === 0x8E && byte >= 0xA1 && byte <= 0xDF) {	
			temp = 0xFF61 + byte - 0xA1
			out += dec2char(temp)
			continue
			}
		if (eucjpLead === 0x8F && byte >= 0xA1 && byte <= 0xFE) {	
			jis0212flag = true
			eucjpLead = byte
			continue
			}
		if (eucjpLead != 0x00) {	
			lead = eucjpLead
			eucjpLead = 0x00
			cp = null
	
			if ((lead >= 0xA1 && lead <= 0xFE) && (byte >= 0xA1 && byte <= 0xFE)) {
				ptr = (lead - 0xA1) * 94 + byte - 0xA1
				if (jis0212flag) cp = indexes.jis0212[ptr]
				else cp = indexes.jis0208[ptr]
				jis0212flag = false
				}
			if (byte < 0xA1 || byte > 0xFE) bytes.unshift(byte)
			if (cp === null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			}
		else if (byte >= 0x00 && byte < 0x7F) out += dec2char(byte)
		else if (byte === 0x8E || byte === 0x8F || (byte >= 0x81 && byte <= 0xFE)) eucjpLead = byte
		else out += '�'
		}
	if (eucjpLead != 0x00) out += '�'
	return out
	}


function iso2022jpEncoder (stream) {
	cps = chars2cps(stream)
	var out = ''
	var encState = 'ascii'
	var finished = false
	while (!finished) {
		console.log(cps)
		if (cps.length === 0 && encState != 'ascii') { 
			encState = 'ascii'
			out += ' 1B 28 42'
			continue
			}
		if (cps.length === 0 && encState == 'ascii') { 
			finished = true
			break 
			}
		cp = cps.shift()
		console.log('CODE POINT:',cp, cp.toString(16),'encState',encState)
		if (encState == 'ascii' && cp >= 0x00 && cp <= 0x7F) {  
			out +=  ' '+cp.toString(16)
			//console.log('out is ascii',cp, cp.toString(16))
			continue
			}
		if (encState == 'roman' && ((cp >= 0x00 && cp <= 0x7F && cp !== 0x5C && cp !== 0x7E) || cp === 0xA5 || cp === 0x203E)) { 
			if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
				out +=  ' '+cp.toString(16)
				//console.log('out is ascii',cp, cp.toString(16))
				continue
				}
			if (cp === 0xA5) { out += ' 5C'; continue }
			if (cp === 0x203E) { out += ' 7E'; continue }
			}
		if (encState != 'ascii' && cp >= 0x00 && cp <= 0x7F) {
			cps.unshift(cp)
			encState = 'ascii'
			out += ' 1B 28 42'
			continue
			}
		if ((cp === 0xA5 || cp === 0x203E) && encState != 'roman') { 
			cps.unshift(cp)
			encState = 'roman'
			out += ' 1B 28 4A'
			continue
			}
		if (cp === 0x2022) cp = 0xFF0D
		ptr = jis0208CPs[cp]
		if (ptr == null) {
			out += ' &#'+cp+';'
			continue
			}
		if (encState != 'jis0208') { 
			cps.unshift(cp)
			encState = 'jis0208'
			out += ' 1B 24 42'
			continue
			}
		var lead = Math.floor(ptr/94) + 0x21
		var trail = (ptr % 94) + 0x21
		out += ' '+lead.toString(16).toUpperCase()+' '+trail.toString(16).toUpperCase()
		}
	return out.trim()
	}

