
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

 var sjisCPs = []  // index is unicode cp, value is pointer
 for (p=0;p<8272;p++) {
	if (indexes.jis0208[p] != null  && sjisCPs[indexes.jis0208[p]] == null) {
		sjisCPs[indexes.jis0208[p]] = p
	 	}
 	}
 for (p=8836;p<indexes.jis0208.length;p++) {
	if (indexes.jis0208[p] != null  && sjisCPs[indexes.jis0208[p]] == null) {
		sjisCPs[indexes.jis0208[p]] = p
	 	}
 	}

 var euckrCPs = []  // index is unicode cp, value is pointer
	 for (p=0;p<indexes.euckr.length;p++) {
		if (indexes.euckr[p] != null && euckrCPs[indexes.euckr[p]] == null) {
			euckrCPs[indexes.euckr[p]] = p
			}
 	}

var gb18030Ranges = [[0,128],[36,165],[38,169],[45,178],[50,184],[81,216],[89,226],[95,235],[96,238],[100,244],[103,248],[104,251],[105,253],[109,258],[126,276],[133,284],[148,300],[172,325],[175,329],[179,334],[208,364],[306,463],[307,465],[308,467],[309,469],[310,471],[311,473],[312,475],[313,477],[341,506],[428,594],[443,610],[544,712],[545,716],[558,730],[741,930],[742,938],[749,962],[750,970],[805,1026],[819,1104],[820,1106],[7922,8209],[7924,8215],[7925,8218],[7927,8222],[7934,8231],[7943,8241],[7944,8244],[7945,8246],[7950,8252],[8062,8365],[8148,8452],[8149,8454],[8152,8458],[8164,8471],[8174,8482],[8236,8556],[8240,8570],[8262,8596],[8264,8602],[8374,8713],[8380,8720],[8381,8722],[8384,8726],[8388,8731],[8390,8737],[8392,8740],[8393,8742],[8394,8748],[8396,8751],[8401,8760],[8406,8766],[8416,8777],[8419,8781],[8424,8787],[8437,8802],[8439,8808],[8445,8816],[8482,8854],[8485,8858],[8496,8870],[8521,8896],[8603,8979],[8936,9322],[8946,9372],[9046,9548],[9050,9588],[9063,9616],[9066,9622],[9076,9634],[9092,9652],[9100,9662],[9108,9672],[9111,9676],[9113,9680],[9131,9702],[9162,9735],[9164,9738],[9218,9793],[9219,9795],[11329,11906],[11331,11909],[11334,11913],[11336,11917],[11346,11928],[11361,11944],[11363,11947],[11366,11951],[11370,11956],[11372,11960],[11375,11964],[11389,11979],[11682,12284],[11686,12292],[11687,12312],[11692,12319],[11694,12330],[11714,12351],[11716,12436],[11723,12447],[11725,12535],[11730,12543],[11736,12586],[11982,12842],[11989,12850],[12102,12964],[12336,13200],[12348,13215],[12350,13218],[12384,13253],[12393,13263],[12395,13267],[12397,13270],[12510,13384],[12553,13428],[12851,13727],[12962,13839],[12973,13851],[13738,14617],[13823,14703],[13919,14801],[13933,14816],[14080,14964],[14298,15183],[14585,15471],[14698,15585],[15583,16471],[15847,16736],[16318,17208],[16434,17325],[16438,17330],[16481,17374],[16729,17623],[17102,17997],[17122,18018],[17315,18212],[17320,18218],[17402,18301],[17418,18318],[17859,18760],[17909,18811],[17911,18814],[17915,18820],[17916,18823],[17936,18844],[17939,18848],[17961,18872],[18664,19576],[18703,19620],[18814,19738],[18962,19887],[19043,40870],[33469,59244],[33470,59336],[33471,59367],[33484,59413],[33485,59417],[33490,59423],[33497,59431],[33501,59437],[33505,59443],[33513,59452],[33520,59460],[33536,59478],[33550,59493],[37845,63789],[37921,63866],[37948,63894],[38029,63976],[38038,63986],[38064,64016],[38065,64018],[38066,64021],[38069,64025],[38075,64034],[38076,64037],[38078,64042],[39108,65074],[39109,65093],[39113,65107],[39114,65112],[39115,65127],[39116,65132],[39265,65375],[39394,65510],[189000,65536],[2000000,2000000]]


function getRangePtr (cp) {
	var offset = 128
	var ptrOffset = 0
	for (var i=0;i<gb18030Ranges.length;i++) {
		if (gb18030Ranges[i][1] > cp) {
			offset = gb18030Ranges[i-1][1]
			ptrOffset = gb18030Ranges[i-1][0]
			break
			}
		}
	return ptrOffset + cp - offset
	}

 var gbCPs = []  // index is unicode cp, value is pointer
	 for (p=0;p<indexes.gb18030.length;p++) {
		if (indexes.gb18030[p] != null && gbCPs[indexes.gb18030[p]] == null) {
			gbCPs[indexes.gb18030[p]] = p
			}
 	}

function getRangeCP (ptr) {
	if ((ptr > 39419 && ptr < 189000) || ptr > 1237575) return null
	var offset
	var cpOffset
	for (var i=0;i<gb18030Ranges.length;i++) {
		if (gb18030Ranges[i][0] > ptr) {
			offset = gb18030Ranges[i-1][0]
			cpOffset = gb18030Ranges[i-1][1]
			break
			}
		}
	return cpOffset + ptr - offset
	}

 var gbCPs = []  // index is unicode cp, value is pointer
	 for (p=0;p<indexes.gb18030.length;p++) {
		if (indexes.gb18030[p] != null && gbCPs[indexes.gb18030[p]] == null) {
			gbCPs[indexes.gb18030[p]] = p
			}
 	}


// 	END OF DATA INITIALISATION



function big5Encoder (stream) {
	var cps = chars2cps(stream)
	var out = ''
	while (cps.length > 0) {
		var cp = cps.shift()
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
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
		byte = bytes.shift()														
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
	var out = ''
	var count, offset
	while (cps.length > 0) {
		cp = cps.shift()
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			continue
			}
		if (cp >= 0x80 && cp <= 0x7FF) { count = 1; offset = 0xC0; }
		else if (cp >= 0x800 && cp <= 0xFFFF) { count = 2; offset = 0xE0; }
		else { count = 3; offset = 0xF0; }
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
	
	while (bytes.length > 0) {
		var byte = bytes.shift()
		if (bytesneeded == 0) {
			if (byte >= 0x00 && byte <= 0x7F) { 
				out += dec2char(byte)
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
			continue
			}
		
		lowerbound = 0x80
		upperbound = 0xBF
		bytesseen++
		u8cp = u8cp + ((byte - 0x80) << (6 * (bytesneeded - bytesseen)))
		if (bytesseen != bytesneeded) continue
		
		cp = u8cp
		u8cp = 0
		bytesneeded = 0
		bytesseen = 0
		out += dec2char(cp)
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
	
	while (bytes.length > 0) {
		b = bytes.shift()
		switch (counter) {
			case 0:
				if (0 <= b && b <= 0x7F) {  // 0xxxxxxx
					out += dec2char(b); } 
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
					out += '�';
					}
				break;
			case 1:
				if (b < 0x80 || b > 0xBF) {
					out += '�';
					}
				counter--;
				out += dec2char((n << 6) | (b-0x80));
				n = 0;
				break;
			case 2: case 3:
				if (b < 0x80 || b > 0xBF) {
					out += '�';
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
	var out = ''
	while (cps.length > 0) {
		cp = cps.shift()
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			continue
			}
		if (cp == 0xA5) { out += ' 5C'; continue }
		if (cp == 0x203E) { out += ' 7E'; continue }
		if (cp >= 0xFF61 && cp <= 0xFF9F) {
			temp = cp - 0xFF61 + 0xA1
			out += ' 8E ' + temp.toString(16).toUpperCase()
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
		byte = bytes.shift()														
		if (eucjpLead == 0x8E && byte >= 0xA1 && byte <= 0xDF) {	
			temp = 0xFF61 + byte - 0xA1
			out += dec2char(temp)
			continue
			}
		if (eucjpLead == 0x8F && byte >= 0xA1 && byte <= 0xFE) {	
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
			if (cp == null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			}
		else if (byte >= 0x00 && byte < 0x7F) out += dec2char(byte)
		else if (byte == 0x8E || byte == 0x8F || (byte >= 0x81 && byte <= 0xFE)) eucjpLead = byte
		else out += '�'
		}
	if (eucjpLead != 0x00) out += '�'
	return out
	}


function iso2022jpEncoder (stream) {
	var cps = chars2cps(stream)
	var endofstream = 2000000
	cps.push(endofstream)
	var out = ''
	var encState = 'ascii'
	var finished = false
	while (!finished) {
		var cp = cps.shift()
		if (cp == endofstream && encState != 'ascii') { 
			cps.unshift(cp)
			encState = 'ascii'
			out += ' 1B 28 42'
			continue
			}
		if (cp == endofstream && encState == 'ascii') { 
			finished = true
			break 
			}
		if (encState == 'ascii' && cp >= 0x00 && cp <= 0x7F) {  
			out +=  ' '+cp.toString(16).toUpperCase()
			continue
			}
		if (encState == 'roman' && ((cp >= 0x00 && cp <= 0x7F && cp !== 0x5C && cp !== 0x7E) || cp == 0xA5 || cp == 0x203E)) { 
			if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
				out +=  ' '+cp.toString(16).toUpperCase()
				continue
				}
			if (cp == 0xA5) { out += ' 5C'; continue }
			if (cp == 0x203E) { out += ' 7E'; continue }
			}
		if (encState != 'ascii' && cp >= 0x00 && cp <= 0x7F) {
			cps.unshift(cp)
			encState = 'ascii'
			out += ' 1B 28 42'
			continue
			}
		if ((cp == 0xA5 || cp == 0x203E) && encState != 'roman') { 
			cps.unshift(cp)
			encState = 'roman'
			out += ' 1B 28 4A'
			continue
			}
		if (cp == 0x2022) cp = 0xFF0D
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

function iso2022jpDecoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var endofstream = 2000000
	//bytes.push(endofstream)
	var out = ''
	var decState = 'ascii'
	var outState = 'ascii'
	var isoLead = 0x00
	var outFlag = false
	var cp, ptr
	
	var finished = false
	while (!finished) {
		if (bytes.length == 0) byte = endofstream
		else var byte = bytes.shift()
		//byte = bytes.shift()														

		switch (decState) {
			case 'ascii':  if (byte == 0x1B) { decState = 'escStart'; continue }
							else if (byte >= 0x00 && byte <= 0x7F && byte !== 0x0E && byte !== 0x0F && byte !== 0x1B) {
								outFlag = false;
								out += dec2char(byte)
								continue
								}
							else if ( byte == endofstream) { finished = true; continue }
							else { outFlag = false; out += '�'; continue }
							break
			case 'roman':	if (byte == 0x1B) { decState = 'escStart'; continue }
							else if (byte == 0x5C) {
								outFlag = false;
								out += dec2char(0xA5)
								continue
								}
							else if (byte == 0x7E) {
								outFlag = false;
								out += dec2char(0x203E)
								continue
								}
							else if (byte >= 0x00 && byte <= 0x7F && byte !== 0x0E && byte !== 0x0F && byte !== 0x1B && byte !== 0x5C && byte !== 0x7E) {
								outFlag = false;
								out += dec2char(byte)
								continue
								}
							else if ( byte == endofstream) { finished = true; continue }
							else { outFlag = false; out += '�'; continue }
							break
			case 'katakana': if (byte == 0x1B) { decState = 'escStart'; continue }
							else if (byte >= 0x21 && byte <= 0x5F) {
								outFlag = false;
								out += dec2char(0xFF61+byte-0x21)
								continue
								}
							else if ( byte == endofstream) { finished = true; continue }
							else { outFlag = false; out += '�'; continue }
							break
			case 'leadbyte': if (byte == 0x1B) { decState = 'escStart'; continue }
							else if (byte >= 0x21 && byte <= 0x7E) {
								outFlag = false;
								isoLead = byte
								decState = 'trailbyte'
								continue
								}
							else if ( byte == endofstream) { finished = true; continue }
							else { outFlag = false; out += '�'; continue }
							break
			case 'trailbyte': if (byte == 0x1B) { decState = 'escStart'; out += '�'; continue }
							else if (byte >= 0x21 && byte <= 0x7E) {
								decState = 'leadbyte'
								ptr = (isoLead - 0x21) * 94 + byte - 0x21
								cp = indexes.jis0208[ptr]
								if (cp == null) { 
									out += '�'
									continue
									}
								out += dec2char(cp)
								continue
								}
							else if ( byte == endofstream) { decState = 'leadbyte'; bytes.unshift(byte); out += '�'; continue }
							else { decState = 'leadbyte'; out += '�'; continue }
							break
			case 'escStart': if (byte == 0x24 || byte == 0x28) { 
								isoLead = byte
								decState = 'escape'
								continue
								}
							else {
								bytes.unshift(byte)
								outFlag = false
								decState = outState
								out += '�'
								continue
								 }
							break
			case 'escape': 	lead = isoLead
							isoLead = 0x00
							var state = null
							if (lead == 0x28 && byte == 0x42) state = 'ascii'
							if (lead == 0x28 && byte == 0x4A) state = 'roman'
							if (lead == 0x28 && byte == 0x49) state = 'katakana'
							if (lead == 0x24 && (byte == 0x40 || byte == 0x42)) state = 'leadbyte'
							if (state != null) {
								decState = state
								outState = state
								var outputflag = false
								outputflag = outFlag
								outFlag = true
								if (outputflag == false) continue
								else { out += '�'; continue }
								}
							bytes.unshift(lead)
							bytes.unshift(byte)
							outFlag = false
							decState = outState
							out += '�'
							continue
							break
			}
		}
	return out
	}




function sjisEncoder (stream) {
	cps = chars2cps(stream)
	var out = ''
	while (cps.length > 0) {
		cp = cps.shift()
		if ((cp >= 0x00 && cp <= 0x7F) || cp == 0x80) {  
			out +=  ' '+cp.toString(16)
			continue
			}
		if (cp == 0xA5) { out += ' 5C'; continue }
		if (cp == 0x203E) { out += ' 7E'; continue }
		if (cp >= 0xFF61 && cp <= 0xFF9F) {
			temp = cp - 0xFF61 + 0xA1
			out += temp.toString(16)
			continue
			}
		if (cp == 0x2022) { cp = 0xFF0D }
		var ptr = sjisCPs[cp]
		if (ptr == null) {
			out += ' &#'+cp+';'
			continue
			}
		var lead = Math.floor(ptr/188)
		if (lead < 0x1F) leadoffset = 0x81
		else leadoffset = 0xC1
		var trail = (ptr % 188)
		first = lead + leadoffset
		if (trail < 0x3F) offset = 0x40
		else offset = 0x41
		second = trail + offset
		out += ' '+first.toString(16).toUpperCase()+' '+second.toString(16).toUpperCase()
		}
	return out
	}

function sjisDecoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, leadoffset, offset, ptr, cp
	var sjisLead = 0x00
	
	while (bytes.length > 0) {
		byte = bytes.shift()														
		if (sjisLead != 0x00) {	
			lead = sjisLead
			ptr = null
			sjisLead = 0x00
			if (byte < 0x7F) offset = 0x40
			else offset = 0x41
			if (lead < 0xA0) leadoffset = 0x81
			else leadoffset = 0xC1
			if ((byte >= 0x40 && byte <= 0x7E) || (byte >= 0x80 && byte <= 0xFC)) ptr = (lead - leadoffset) * 188 + byte - offset
			if (ptr == null) cp = null
			else cp = indexes.jis0208[ptr]
			if (cp == null && ptr >= 8836 && ptr <= 10528) {
				temp = 0xE000 + ptr - 8836
				out += dec2char(temp)
				continue
				}
			if (cp == null && byte >= 0x00 && byte <= 0x7F) {
				bytes.unshift(byte)
				}
			if (cp == null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			continue
			}
		if ((byte >= 0x00 && byte <= 0x7F) || byte == 0x80) {
			out += dec2char(byte)
			continue
			}
		if (byte >= 0xA1 && byte <= 0xDF) {
			temp = 0xFF61 + byte - 0xA1
			out += dec2char(temp)
			continue
			}
		if ((byte >= 0x81 && byte <= 0x9F) || (byte >= 0xE0 && byte <= 0xFC)) {
			sjisLead = byte
			continue
			}
		out += '�'
		}
	if (sjisLead != 0x00) out += '�'
	return out
	}




function euckrEncoder (stream) {
	cps = chars2cps(stream)
	var out = ''
	while (cps.length > 0) {
		cp = cps.shift()
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16)
			continue
			}
		var ptr = euckrCPs[cp]
		if (ptr == null) {
			out += ' &#'+cp+';'
			continue
			}
		var lead = Math.floor(ptr/190) + 0x81
		var trail = (ptr % 190) + 0x41
		out += ' '+lead.toString(16).toUpperCase()+' '+trail.toString(16).toUpperCase()
		}
	return out
	}

function euckrDecoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, offset, ptr, cp
	var euckrLead = 0x00
	
	while (bytes.length > 0) {
		byte = bytes.shift()														
		if (euckrLead != 0x00) {	
			lead = euckrLead
			ptr = null
			euckrLead = 0x00
			if (byte >= 0x41 || byte <= 0xFE) ptr = (lead - 0x81) * 190 + (byte - 0x41)
			if (ptr == null) cp = null
			else cp = indexes.euckr[ptr]
			if (cp == null && byte >= 0x00 && byte <= 0x7F) bytes.unshift(byte)
			if (cp == null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			continue
			}
		if (byte >= 0x00 && byte <= 0x7F) {
			out += dec2char(byte)
			continue
			}
		else if (byte >= 0x81 && byte <= 0xFE) {
			euckrLead = byte
			continue
			}
		out += '�'
		}
	if (euckrLead != 0x00) out += '�'
	return out
	}






function gbEncoder (stream, gbk) {
	var cps = chars2cps(stream)
	var out = ''
	var lead, trail, ptr, offset, end
	
	while (cps.length > 0) {
		var cp = cps.shift()
		if (cp >= 0x00 && cp <= 0x7F) {  // ASCII
			out +=  ' '+cp.toString(16).toUpperCase()
			continue
			}
		if (gbk && cp == 0x20AC) {
			out += ' 80'
			continue
			}
		var ptr = gbCPs[cp]
		if (ptr != null) {
			lead = Math.floor(ptr/190) + 0x81
			trail = (ptr % 190)
			if (trail < 0x3F) offset = 0x40
			else offset = 0x41
			end = trail + offset
			out += ' '+lead.toString(16).toUpperCase()+' '+end.toString(16).toUpperCase()
			continue
			}
		if (gbk) {
			out += ' &#'+cp+';'
			continue
			}
		ptr = getRangePtr(cp)
		byte1 = Math.floor(ptr / 10 /126 /10)
		ptr = ptr - byte1 * 10 * 126 * 10
		byte2 = Math.floor(ptr / 10 /126)
		ptr = ptr - byte2 * 10 * 126
		byte3 = Math.floor(ptr / 10)
		byte4 = ptr - byte3 * 10
		byte1 += 0x81
		byte2 += 0x30
		byte3 += 0x81
		byte4 += 0x30
		out += ' '+byte1.toString(16).toUpperCase()+' '+byte2.toString(16).toUpperCase()+' '+byte3.toString(16).toUpperCase()+' '+byte4.toString(16).toUpperCase()
		}
	return out
	}

function gbDecoder (stream) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	var lead, byte, offset, ptr, cp
	var first = 0x00
	var second = 0x00
	var third = 0x00
	var endofstream = 2000000
	//bytes.push(endofstream)
	finished = false
	
	while (!finished) {
		if (bytes.length == 0) byte = endofstream
		else var byte = bytes.shift()
		if (byte == endofstream && first == 0x00 && second == 0x00 && third == 0x00) {
			finished = true
			break
			}
		if (byte == endofstream && (first != 0x00 || second != 0x00 || third != 0x00)) {
			first = 0x00
			second = 0x00
			third = 0x00
			out += '�'
			continue
			}
		if (third != 0x00) {	
			cp = null
			if (byte >= 0x30 && byte <= 0x39) {
				cp = getRangeCP((((first - 0x81) * 10 + second - 0x30) * 126 + third - 0x81) *10 + byte - 0x30)
				}
			buffer = [second, third, byte]
			first = 0x00
			second = 0x00
			third = 0x00
			if (cp == null) {
				bytes.unshift(buffer[2])
				bytes.unshift(buffer[1])
				bytes.unshift(buffer[0])
				out += '�'
				continue
				}
			out += dec2char(cp)
			continue
			}
		if (second != 0x00) {	
			if (byte >= 0x81 && byte <= 0xFE) {
				third = byte
				continue
				}
			bytes.unshift(byte)
			bytes.unshift(second)
			first = 0x00
			second = 0x00
			out += '�'
			continue
			}
		if (first != 0x00) {
			if (byte >= 0x30 && byte <= 0x39) {
				second = byte
				continue
				}
			lead = first
			ptr = null
			first = 0x00
			if (byte < 0x7F) offset = 0x40
			else offset = 0x41
			if ((byte >= 0x40 && byte <= 0x7E) || (byte >= 0x80 && byte <= 0xFE)) ptr = (lead - 0x81) * 190 + (byte - offset)
			if (ptr == null) cp = null
			else cp = indexes.gb18030[ptr]
			if (cp == null && byte >= 0x00 && byte <= 0x7F) bytes.unshift(byte)
			if (cp == null) { 
				out += '�'
				continue
				}
			out += dec2char(cp)
			continue
			}
		if (byte >= 0x00 && byte <= 0x7F) {
			out += dec2char(byte)
			continue
			}
		if (byte == 0x80) {
			out += dec2char(0x20AC)
			continue
			}
		if (byte >= 0x81 && byte <= 0xFE) {
			first = byte
			continue
			}
		out += '�'
		}
	return out
	}



function sbEncoder (stream, index) {
	var cps = chars2cps(stream)
	var out = ''
	
	while (cps.length > 0) {
		var cp = cps.shift()
		
		if (cp >= 0x00 && cp <= 0x7F) { 
			out +=  ' '+cp.toString(16).toUpperCase()
			continue
			}
		var ptr = getIndexPtr(cp, index)
		if (ptr == null) {
			out += ' &#'+cp+';'
			continue
			}
		cp = ptr + 0x80
		out += ' '+cp.toString(16).toUpperCase()
		}
	return out
	}

function sbDecoder (stream, index) {
	stream = stream.replace(/%/g,' ')
	stream = stream.replace(/[\s]+/g,' ').trim()
	var bytes = stream.split(' ')
	for (i=0;i<bytes.length;i++) bytes[i] = parseInt(bytes[i],16)
	var out = ''
	
	while (bytes.length > 0) {
		var byte = bytes.shift()														

		if (byte >= 0x00 && byte <= 0x7F) {
			out += dec2char(byte)
			continue
			}
		var cp = index[byte - 0x80]
		if (cp == null) {
			out += '�'
			continue
			}
		out += dec2char(cp)
		}
	return out
	}
