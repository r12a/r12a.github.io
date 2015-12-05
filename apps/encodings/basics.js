function encode ( stream ) {
	spans = document.getElementById('encodingcolumn').querySelectorAll('span')
	for (s=0;s<spans.length;s++) spans[s].textContent = ''
	if (live.utf8) document.getElementById('utf8encResult').textContent = utf8Encoder(stream)
	if (live.big5) document.getElementById('big5encResult').textContent = big5Encoder(stream)
	if (live.eucjp) document.getElementById('eucjpencResult').textContent = eucjpEncoder(stream)
	if (live.iso2022jp) document.getElementById('iso2022jpencResult').textContent = iso2022jpEncoder(stream)
	if (live.shiftjis) document.getElementById('sjisencResult').textContent = sjisEncoder(stream)
	if (live.euckr) document.getElementById('euckrencResult').textContent = euckrEncoder(stream)
	if (live.gb18030) document.getElementById('gb18030encResult').textContent = gbEncoder(stream, false)
	if (live.gbk) document.getElementById('gbkencResult').textContent = gbEncoder(stream, true)
	if (live.koi8r) document.getElementById('koi8rencResult').textContent = sbEncoder(stream, indexes.koi8r)
	if (live.koi8u) document.getElementById('koi8uencResult').textContent = sbEncoder(stream, indexes.koi8u)
	if (live.windows1250) document.getElementById('win1250encResult').textContent = sbEncoder(stream, indexes.windows1250)
	if (live.windows1251) document.getElementById('win1251encResult').textContent = sbEncoder(stream, indexes.windows1251)
	if (live.windows1252) document.getElementById('win1252encResult').textContent = sbEncoder(stream, indexes.windows1252)
	if (live.windows1253) document.getElementById('win1253encResult').textContent = sbEncoder(stream, indexes.windows1253)
	if (live.windows1254) document.getElementById('win1254encResult').textContent = sbEncoder(stream, indexes.windows1254)
	if (live.windows1255) document.getElementById('win1255encResult').textContent = sbEncoder(stream, indexes.windows1255)
	if (live.windows1256) document.getElementById('win1256encResult').textContent = sbEncoder(stream, indexes.windows1256)
	if (live.windows1257) document.getElementById('win1257encResult').textContent = sbEncoder(stream, indexes.windows1257)
	if (live.windows1258) document.getElementById('win1258encResult').textContent = sbEncoder(stream, indexes.windows1258)
	if (live.windows874) document.getElementById('win874encResult').textContent = sbEncoder(stream, indexes.windows874)
	if (live.macintosh) document.getElementById('macintoshencResult').textContent = sbEncoder(stream, indexes.macintosh)
	if (live.ibm866) document.getElementById('ibm866encResult').textContent = sbEncoder(stream, indexes.ibm866)
	if (live.xmaccyrillic) document.getElementById('xmaccyrillicencResult').textContent = sbEncoder(stream, indexes.xmaccyrillic)
	if (live.iso88592) document.getElementById('iso88592encResult').textContent = sbEncoder(stream, indexes.iso88592)
	if (live.iso88593) document.getElementById('iso88593encResult').textContent = sbEncoder(stream, indexes.iso88593)
	if (live.iso88594) document.getElementById('iso88594encResult').textContent = sbEncoder(stream, indexes.iso88594)
	if (live.iso88595) document.getElementById('iso88595encResult').textContent = sbEncoder(stream, indexes.iso88595)
	if (live.iso88596) document.getElementById('iso88596encResult').textContent = sbEncoder(stream, indexes.iso88596)
	if (live.iso88597) document.getElementById('iso88597encResult').textContent = sbEncoder(stream, indexes.iso88597)
	if (live.iso88598) document.getElementById('iso88598encResult').textContent = sbEncoder(stream, indexes.iso88598)
	if (live.iso88598i) document.getElementById('iso88598iencResult').textContent = sbEncoder(stream, indexes.iso88598)
	if (live.iso885910) document.getElementById('iso885910encResult').textContent = sbEncoder(stream, indexes.iso885910)
	if (live.iso885913) document.getElementById('iso885913encResult').textContent = sbEncoder(stream, indexes.iso885913)
	if (live.iso885914) document.getElementById('iso885914encResult').textContent = sbEncoder(stream, indexes.iso885914)
	if (live.iso885915) document.getElementById('iso885915encResult').textContent = sbEncoder(stream, indexes.iso885915)
	if (live.iso885916) document.getElementById('iso885916encResult').textContent = sbEncoder(stream, indexes.iso885916)
	
	tests = document.getElementById('encodingcolumn').querySelectorAll('.output')
	for (var t=0;t<tests.length;t++) {
		if (tests[t].textContent.match('&')) tests[t].className = 'output'
		else if (tests[t].childNodes[2].textContent != '') tests[t].className = 'output yes'
		}
	}

function decode ( stream ) {
	spans = document.getElementById('decodingcolumn').querySelectorAll('span')
	for (s=0;s<spans.length;s++) spans[s].textContent = ''
	if (live.utf8) document.getElementById('utf8decResult').textContent = utf8Decoder(stream)
	if (live.big5) document.getElementById('big5decResult').textContent = big5Decoder(stream)
	if (live.eucjp) document.getElementById('eucjpdecResult').textContent = eucjpDecoder(stream)
	if (live.iso2022jp) document.getElementById('iso2022jpdecResult').textContent = iso2022jpDecoder(stream)
	if (live.shiftjis) document.getElementById('sjisdecResult').textContent = sjisDecoder(stream)
	if (live.euckr) document.getElementById('euckrdecResult').textContent = euckrDecoder(stream)
	if (live.gb18030) document.getElementById('gb18030decResult').textContent = gbDecoder(stream)
	if (live.gbk) document.getElementById('gbkdecResult').textContent = gbDecoder(stream)
	if (live.koi8r) document.getElementById('koi8rdecResult').textContent = sbDecoder(stream, indexes.koi8r)
	if (live.koi8u) document.getElementById('koi8udecResult').textContent = sbDecoder(stream, indexes.koi8u)
	if (live.windows1250) document.getElementById('win1250decResult').textContent = sbDecoder(stream, indexes.windows1250)
	if (live.windows1251) document.getElementById('win1251decResult').textContent = sbDecoder(stream, indexes.windows1251)
	if (live.windows1252) document.getElementById('win1252decResult').textContent = sbDecoder(stream, indexes.windows1252)
	if (live.windows1253) document.getElementById('win1253decResult').textContent = sbDecoder(stream, indexes.windows1253)
	if (live.windows1254) document.getElementById('win1254decResult').textContent = sbDecoder(stream, indexes.windows1254)
	if (live.windows1255) document.getElementById('win1255decResult').textContent = sbDecoder(stream, indexes.windows1255)
	if (live.windows1256) document.getElementById('win1256decResult').textContent = sbDecoder(stream, indexes.windows1256)
	if (live.windows1257) document.getElementById('win1257decResult').textContent = sbDecoder(stream, indexes.windows1257)
	if (live.windows1258) document.getElementById('win1258decResult').textContent = sbDecoder(stream, indexes.windows1258)
	if (live.windows874) document.getElementById('win874decResult').textContent = sbDecoder(stream, indexes.windows874)
	if (live.macintosh) document.getElementById('macintoshdecResult').textContent = sbDecoder(stream, indexes.macintosh)
	if (live.ibm866) document.getElementById('ibm866decResult').textContent = sbDecoder(stream, indexes.ibm866)
	if (live.xmaccyrillic) document.getElementById('xmaccyrillicdecResult').textContent = sbDecoder(stream, indexes.xmaccyrillic)
	if (live.iso88592) document.getElementById('iso88592decResult').textContent = sbDecoder(stream, indexes.iso88592)
	if (live.iso88593) document.getElementById('iso88593decResult').textContent = sbDecoder(stream, indexes.iso88593)
	if (live.iso88594) document.getElementById('iso88594decResult').textContent = sbDecoder(stream, indexes.iso88594)
	if (live.iso88595) document.getElementById('iso88595decResult').textContent = sbDecoder(stream, indexes.iso88595)
	if (live.iso88596) document.getElementById('iso88596decResult').textContent = sbDecoder(stream, indexes.iso88596)
	if (live.iso88597) document.getElementById('iso88597decResult').textContent = sbDecoder(stream, indexes.iso88597)
	if (live.iso88598) document.getElementById('iso88598decResult').textContent = sbDecoder(stream, indexes.iso88598)
	if (live.iso88598i) document.getElementById('iso88598idecResult').textContent = sbDecoder(stream, indexes.iso88598)
	if (live.iso885910) document.getElementById('iso885910decResult').textContent = sbDecoder(stream, indexes.iso885910)
	if (live.iso885913) document.getElementById('iso885913decResult').textContent = sbDecoder(stream, indexes.iso885913)
	if (live.iso885914) document.getElementById('iso885914decResult').textContent = sbDecoder(stream, indexes.iso885914)
	if (live.iso885915) document.getElementById('iso885915decResult').textContent = sbDecoder(stream, indexes.iso885915)
	if (live.iso885916) document.getElementById('iso885916decResult').textContent = sbDecoder(stream, indexes.iso885916)

	tests = document.getElementById('decodingcolumn').querySelectorAll('.output')
	for (var t=0;t<tests.length;t++) {
		if (tests[t].textContent.match('�')) tests[t].className = 'output'
		else if (tests[t].childNodes[2].textContent != '') tests[t].className = 'output yes'
		}
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
					out += '�'
					}
				break;
			case 1:
				if (b < 0x80 || b > 0xBF) {
					out += '�'
					}
				counter--
				out += dec2char((n << 6) | (b-0x80))
				n = 0
				break
			case 2: case 3:
				if (b < 0x80 || b > 0xBF) {
					out += '�'
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


function getIndexPtr (cp, index) {
	 for (p=0;p<index.length;p++) {
		if (index[p] == cp) {
			return p
			}
		}
	return null
	}


var live = { utf8: true, big5: true, eucjp:true, iso2022jp:true, shiftjis:true, euckr: true, gb18030:true, gbk:true, koi8r:false, windows1250:false, windows1251:false, windows1252:true, windows1253:false, windows1254:false, windows1255:false, windows1256:false, windows1257:false, windows1258:false, windows874:false, macintosh:false, ibm866:false, xmaccyrillic:false, iso88592:false, iso88593:false, iso88594:false, iso88595:false, iso88596:false, iso88597:false, iso88598:false, iso88598i:false, iso885910:false, iso885913:false, iso885914:false, iso885915:false, iso885916:false }

function toggleEnc (enc) {
	var encnode = document.getElementById(enc+'enc')
	var decnode = document.getElementById(enc+'dec')
	if (encnode.style.display == 'none') {
		encnode.style.display = 'block'
		decnode.style.display = 'block'
		live[enc] = true
		}
	else {
		encnode.style.display = 'none'
		decnode.style.display = 'none'
		live[enc] = false
		}
	}

function closeEnc (enc) {
	var encnode = document.getElementById(enc+'enc')
	var decnode = document.getElementById(enc+'dec')
	if (encnode) encnode.style.display = 'none'
	if (decnode) decnode.style.display = 'none'
	document.getElementById(enc).checked = false
	live[enc] = false
	}

function openEnc (enc) {
	var encnode = document.getElementById(enc+'enc')
	var decnode = document.getElementById(enc+'dec')
	if (encnode) encnode.style.display = 'block'
	if (decnode) decnode.style.display = 'block'
	document.getElementById(enc).checked = true
	live[enc] = true
	}

function closeAll () {
	tds = document.getElementById('customsettings').querySelectorAll('input')
	for (e=0;e<tds.length;e++) {
		if (tds[e].id != 'utf8') closeEnc(tds[e].id)
		}
	}

function selectAll () {
	tds = document.getElementById('customsettings').querySelectorAll('input')
	for (e=0;e<tds.length;e++) {
		if (tds[e].id != 'utf8') openEnc(tds[e].id)
		}
	}

function toggleCustomList () {
	node = document.getElementById('customsettings')
	if (node.style.display == 'none') node.style.display = 'block'
	else node.style.display = 'none'
	}


function toggleNotes () {
	var notes = document.getElementById('detailednotes')
	var showNotes = document.getElementById('showNotes')
	if (notes.style.display=='block') {
		notes.style.display='none' 
		showNotes.querySelector('span').textContent='show notes'
		} 
	else {
		notes.style.display='block'
		showNotes.querySelector('span').textContent='hide notes'
		} 
	}

