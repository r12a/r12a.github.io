function localtranscribe (direction, str) {
	
	if (direction == 'mdcToUnicode') { return mdcToUnicode(str) }
	if (direction == 'mdcToGerman') { return britishToGerman(mdcToUnicode(str)) }
	if (direction == 'britishToMdc') { return britishToMdc(str) }
	if (direction == 'germanToMdc') { return britishToMdc(germanToBritish(str)) }
	if (direction == 'britishToGerman') { return britishToGerman(str) }
	if (direction == 'germanToBritish') { return germanToBritish(str) }
	if (direction == 'mdcToHieroglyphs') { return mdcToHieroglyphs(str) }
	if (direction == 'hieroglyphsToMdC') { return hieroglyphsToMdC(str) }
	}




function mdcToUnicode (str) {
	// convert Manuel de Codage transcription to British Unicode
	
	str = ' '+str+' '
	str = str.replace(/A([^1234567890])/g,'ꜣ$1') 
	str = str.replace(/i/g,'i̓') 
	str = str.replace(/a/g,'ꜥ') 
	str = str.replace(/H([^1234567890])/g,'ḥ$1') 
	str = str.replace(/x/g,'ḫ') 
	str = str.replace(/X([^1234567890])/g,'ẖ$1') 
	str = str.replace(/S([^1234567890])/g,'š$1') 
	str = str.replace(/s/g,'ś') 
	str = str.replace(/q/g,'ḳ') 
	str = str.replace(/T([^1234567890])/g,'ṯ$1') 
	str = str.replace(/D([^1234567890])/g,'ḏ$1') 
	str = str.replace(/W([^1234567890])/g,'w$1') 
	str = str.replace(/M([^1234567890])/g,'m$1') 
	str = str.replace(/N([^1234567890])/g,'n$1') 
	str = str.replace(/z/g,'s') 

	return str.trim()
	}



function britishToMdc (str) {
	// convert British to Manuel de Codage transcription
	
	str = ' '+str+' '
	str = str.replace(/ꜣ/g,'A') 
	str = str.replace(/i̓/g,'i') 
	str = str.replace(/ꜥ/g,'a') 
	str = str.replace(/ḥ/g,'H') 
	str = str.replace(/ḫ/g,'x') 
	str = str.replace(/ẖ/g,'X') 
	str = str.replace(/š/g,'S') 
	str = str.replace(/ḳ/g,'q') 
	str = str.replace(/ṯ/g,'T') 
	str = str.replace(/ḏ/g,'D') 
	str = str.replace(/s/g,'z') 
	str = str.replace(/ś/g,'s') 

	return str.trim()
	}



function britishToGerman (str) {
	// convert British to German transcription
	
	str = ' '+str+' '
	str = str.replace(/i̓/g,'j') 
	str = str.replace(/s/g,'z') 
	str = str.replace(/ś/g,'s') 
	str = str.replace(/ḳ/g,'q') 

	return str.trim()
	}


function germanToBritish (str) {
	// convert German to British transcription
	
	str = ' '+str+' '
	str = str.replace(/j/g,'i̓') 
	str = str.replace(/s/g,'ś') 
	str = str.replace(/z/g,'s') 
	str = str.replace(/q/g,'ḳ') 

	return str.trim()
	}





function mdcToHieroglyphs (str) {
	// converts Manuel de Codage transcriptions to hieroglyphs
	
	str = str.trim()
	
	// collect a list of separators, in order
	var separatorSet = /\-|:|\*|\u000A|\(|\)| /g
	var separatorList = str.match(separatorSet)
	str = str.replace(separatorSet,' ')


	var catNumRe = /([A-Z]+)([0-9]+)([A-Z])*/
	var units = str.split(' ')
	var out = ''
	
	for (var u=0;u<units.length;u++) {
		var hg = units[u].match(catNumRe)
		if (hg) {  // this is a catalog number
			var catNum = ' '
			catNum += hg[1]
			while (hg[2].length < 3) hg[2] = '0' + hg[2]
			catNum += hg[2]
			if (hg[3]) catNum += hg[3]
			var found = false
			for (char in charData) {
				if (charData[char].n && charData[char].n.match(catNum)) {
					found = true
					break
					}
				}
			if (found) out += char+' '
			else out += '? '
			}
		else {
			found = ''
			for (char in charData) {
				if (charData[char].c) {
					var readings = charData[char].c.split(',')
					for (r=0;r<readings.length;r++) {
						if (readings[r] == units[u]) {
							found = char
							break
							}
						}
					}
				}
			if (found) out += found+' '
			else out += units[u]+' '
			}
		}

	// replace separators
	var ptr = 0
	var output = ''
	for (var c=0;c<out.length-1;c++) {
		if (out.charAt(c) == ' ') output += separatorList[ptr++]
		else output += out.charAt(c)
		}


	return output.trim()
	}





function hieroglyphsToMdC (str) {
	// converts hieroglyphs to Manuel de Codage transcriptions 
	
	str = str.trim()
	
	var catNumRe = /([A-Z]+)([0-9]+)([A-Z])*/
	var out = ''
	var chars = []
	convertStr2CharArray(str, chars)
	
	for (var i=0;i<chars.length;i++) {
		if (charData[chars[i]]) {
			if (charData[chars[i]].c) {
				var values = charData[chars[i]].c.split(',')
				if (values.length > 1) {
					out += '['+values[0]
					for (var v=1;v<values.length;v++) out += '{'+values[v]
					out += ']'
					}
				else out += values[0]
				}
			else if (charData[chars[i]].n.match('EGYPTIAN')) {
				var name = charData[chars[i]].n.match(catNumRe)
				var number = name[2]
				while (number.charAt(0) == '0') number = number.substr(1)
				out += name[1]+number
				if (name[3]) out += name[3]
				}
			else out += chars[i]
			}
		else out += chars[i]
		}

	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')

	return out.trim()
	}







function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



