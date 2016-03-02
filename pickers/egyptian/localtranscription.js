function localtranscribe (direction, str) {
	
	if (direction == 'mdcToUnicode') { return mdcToUnicode(str) }
	if (direction == 'mdcToHieroglyphs') { return mdcToHieroglyphs(str) }
	if (direction == 'fromNItON') { return transcribeFromNItON(str) }
	if (direction == 'toRunes') { return oldNorseToRune(str) }
	if (direction == 'toShortRunes') { return oldNorseToShortRune(str) }
	}




function mdcToUnicode (str) {
	// convert Manuel de Codage transcription to Unicode
	
	str = str.replace(/A([^1234567890])/g,'ꜣ$1') 
	str = str.replace(/i/g,'i̓') 
	str = str.replace(/a/g,'ꜥ') 
	str = str.replace(/H([^1234567890])/g,'ḥ$1') 
	str = str.replace(/x/g,'ḫ') 
	str = str.replace(/X([^1234567890])/g,'ẖ$1') 
	str = str.replace(/S([^1234567890])/g,'š$1') 
	str = str.replace(/q/g,'ḳ') 
	str = str.replace(/T([^1234567890])/g,'ṯ$1') 
	str = str.replace(/D([^1234567890])/g,'ḏ$1') 

	return str.trim()
	}





function mdcToHieroglyphs (str) {
	// converts Manuel de Codage transcriptions to hieroglyphs
	
	// collect a list of separators, in order
	var separatorSet = /\-|:|\*|\u000A|\(|\)/g
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
							console.log(char)
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





function oldNorseToShortRune (str) {
	// transcribes vowelled Old Norse text into a rough ST runic transcription
	
	
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/bb/g,'ᛓ') 
	str = str.replace(/b/g,'ᛓ') 
	str = str.replace(/dd/g,'ᛐ') 
	str = str.replace(/d/g,'ᛐ') 
	str = str.replace(/ð/g,'ᚦ') 
	str = str.replace(/ff/g,'ᚠ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/gg/g,'ᚴ') 
	str = str.replace(/g/g,'ᚴ') 
	str = str.replace(/h/g,'ᚽ') 
	str = str.replace(/j/g,'ᛁ') 
	str = str.replace(/kk/g,'ᚴ') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/ll/g,'ᛚ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/mm/g,'ᛙ') 
	str = str.replace(/m/g,'ᛙ') 
	str = str.replace(/nn/g,'ᚿ') 
	str = str.replace(/n/g,'ᚿ') 
	str = str.replace(/pp/g,'ᛓ') 
	str = str.replace(/p/g,'ᛓ') 
	str = str.replace(/rr/g,'ᚱ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/ʀ/g,'ᛧ') 
	str = str.replace(/ss/g,'ᛌ') 
	str = str.replace(/s/g,'ᛌ') 
	str = str.replace(/tt/g,'ᛐ') 
	str = str.replace(/t/g,'ᛐ') 
	str = str.replace(/v/g,'ᚢ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/v/g,'ᚢ') 
	str = str.replace(/z/g,'ts') 
	
	str = str.replace(/a/g,'ᛆ') 
	str = str.replace(/á/g,'ᛆ') 
	str = str.replace(/ei/g,'ᛆᛁ') 
	str = str.replace(/e/g,'ᛁ') 
	str = str.replace(/é/g,'ᛁ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ú/g,'ᚢ') 
	str = str.replace(/í/g,'ᛁ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/o/g,'ᚢ')  
	str = str.replace(/ó/g,'ᚢ')  
	str = str.replace(/y/g,'ᚢ') 
	str = str.replace(/ý/g,'ᚢ') 
	str = str.replace(/æ/g,'ᛆ')
	str = str.replace(/œ/g,'ᚢ')
	str = str.replace(/ø/g,'ᚢ')
	str = str.replace(/ǫ/g,'ᛆᚢ')
	str = str.replace(/ã/g,'ᚨ')
	

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.replace(/:/g,'᛬\u200B')
	str = str.replace(/[,|.|-]/g,'')
	str = str.replace(/͡/g,'\u200D')
	
	// remove duplicate runes in sequence
	var runes = str.split('')
	str = ''
	for (var r=1;r<runes.length;r++) {
		if (runes[r] != runes[r-1]) str += runes[r]
		}

	str = str.trim()
	str = str.replace(/ /g,'᛬\u200B')

	return str
	}





function transcribeforGlossary (chstring) {
	// creates a version of the string that will find results in Faulkes & Barnes glossary online			
	chstring = chstring.replace(/Þ/g,'fi'); 
	chstring = chstring.replace(/þ/g,'fl'); 
	chstring = chstring.replace(/ð/g,'›'); 
	chstring = chstring.replace(/ǫ/g,'ƒ'); 
	chstring = chstring.replace(/Ǫ/g,'ā'); 
	chstring = chstring.replace(/ý/g,'‡'); 
	chstring = chstring.replace(/R/g,'ʀ'); 

	return chstring;
	}



function transcribeFromNItON (chstring) {
	// creates a Unicode version of a string copied from Faulkes & Barnes online documents			
	chstring = chstring.replace(/fi/g,'Þ'); 
	chstring = chstring.replace(/fl/g,'þ'); 
	chstring = chstring.replace(/›/g,'ð'); 
	chstring = chstring.replace(/ƒ/g,'ǫ'); 
	chstring = chstring.replace(/ā/g,'Ǫ'); 
	chstring = chstring.replace(/‡/g,'ý'); 
	chstring = chstring.replace(/R/g,'ʀ'); 

	return chstring;
	}



function openGlossaryWindow (str) {
	var glossary = window.open('http://www.vsnrweb-publications.org.uk/Glossary%202011.pdf?s='+encodeURIComponent(str))
	glossary.focus()
	}




function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



