function localtranscribe (direction, str) {
	
	if (direction == 'toIPA') { return oldNorseToIPA(str) }
	if (direction == 'toGloss') { return transcribeforGlossary(str) }
	if (direction == 'fromNItON') { return transcribeFromNItON(str) }
	if (direction == 'toRunes') { return oldNorseToRune(str) }
	if (direction == 'toShortRunes') { return oldNorseToShortRune(str) }
	}



var ONvowels = {'a':'a', 'á':'u', 'e':'e', 'é':'e', 'i':'i', 'í':'i', 'o':'o', 'ó':'o', 'u':'u', 'ú':'u', 'y':'y', 'ý':'y', 'æ':'a', 'œ':'u', 'ø':'u', 'ǫ':'o'}


function oldNorseToIPA (str) {
	// transcribes vowelled Old Norse text into a rough IPA transcription
	
	
	
	// add initial space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	
	str = str.replace(/bb/g,'Bː') 
	str = str.replace(/b/g,'B') 
	str = str.replace(/dd/g,'Dː') 
	str = str.replace(/d/g,'D') 
	str = str.replace(/ff/g,'Fː') 
	str = str.replace(/([ |<|\n])f/g,'$1F') 
	str = str.replace(/f/g,'V') 
	str = str.replace(/gg([s|t])/g,'Gː$1') 
	str = str.replace(/gg/g,'Xː') 
	str = str.replace(/([ |<|\n|n])g/g,'$1G') 
	str = str.replace(/g([s|t])/g,'X$1') 
	str = str.replace(/g/g,'ɣ') 
	str = str.replace(/kk/g,'kː') 
	str = str.replace(/ll/g,'lː') 
	str = str.replace(/mm/g,'mː') 
	str = str.replace(/nn/g,'Nː') 
	str = str.replace(/n([g|k])/g,'ŋ$1') 
	str = str.replace(/pp([s|t])/g,'F$1') 
	str = str.replace(/pp/g,'Pː') 
	str = str.replace(/p([s|t])/g,'F$1') 
	str = str.replace(/rr/g,'Rː') 
	str = str.replace(/ss/g,'Sː') 
	str = str.replace(/tt/g,'Tː') 
	str = str.replace(/v/g,'W') 
	str = str.replace(/þ/g,'θ') 
	str = str.replace(/z/g,'ts') 
	
	str = str.replace(/á/g,'aː') 
	str = str.replace(/au/g,'aw') 
	str = str.replace(/ú/g,'uː') 
	str = str.replace(/ei/g,'ej') 
	str = str.replace(/í/g,'iː') 
	str = str.replace(/é/g,'eː') 
	str = str.replace(/ó/g,'oː')  
	str = str.replace(/ý/g,'yː') 
	str = str.replace(/æ/g,'æː')
	str = str.replace(/œ/g,'œː')
	str = str.replace(/ø/g,'œ')
	str = str.replace(/ǫ/g,'ɔ')
	
	// remove lengthening for non-stressed vowels
	var words = str.split(' ')
	var char = ''
	var remainder = ''
	for (var w=0;w<words.length;w++) {
		// get up to the end of the first vowel, plus optional lengthener
		var firstSyll = ''
		for (var c=0;c<words[w].length;c++) {
			char = words[w].charAt(c)
			firstSyll += char
			if (char in ONvowels) break
			}
		if (words[w].charAt(c+1) === 'ː') {
			firstSyll += 'ː'
			c++
			}
			
		// remove lengthener from rest of word if preceded by vowel
		remainder = words[w].substr(c+1)
		remainder = remainder.replace(/([a|e|i|o|u|y|æ|œ|ø|ɔ])ː/g,'$1')
			
		/*if (c < words[w].length) {
			for (c=c+1;c<words[w].length;c++) {
				char = words[w].charAt(c)
				if (char !== 'ː') newword += char
				}
			}*/
		words[w] = firstSyll + remainder
		}
	str = words.join(' ')
	 
	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')


	return str.trim().toLowerCase()
	}





function oldNorseToRune (str) {
	// transcribes vowelled Old Norse text into a rough LB runic transcription
	
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/bb/g,'ᛒ') 
	str = str.replace(/dd/g,'ᛏ') 
	str = str.replace(/b/g,'ᛒ') 
	str = str.replace(/d/g,'ᛏ') 
	str = str.replace(/ð/g,'ᚦ') 
	str = str.replace(/ff/g,'ᚠ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/gg/g,'ᚴ') 
	str = str.replace(/g/g,'ᚴ') 
	str = str.replace(/h/g,'ᚼ') 
	str = str.replace(/j/g,'ᛁ') 
	str = str.replace(/kk/g,'ᚴ') 
	str = str.replace(/ll/g,'ᛚ') 
	str = str.replace(/mm/g,'ᛘ') 
	str = str.replace(/nn/g,'ᚾ') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/m/g,'ᛘ') 
	str = str.replace(/n/g,'ᚾ') 
	str = str.replace(/pp/g,'ᛒ') 
	str = str.replace(/rr/g,'ᚱ') 
	str = str.replace(/ʀ/g,'ᛦ') 
	str = str.replace(/ss/g,'ᛋ') 
	str = str.replace(/tt/g,'ᛏ') 
	str = str.replace(/p/g,'ᛒ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/s/g,'ᛋ') 
	str = str.replace(/t/g,'ᛏ') 
	str = str.replace(/v/g,'ᚢ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/v/g,'ᚢ') 
	str = str.replace(/z/g,'ts') 
	
	str = str.replace(/a/g,'ᛅ') 
	str = str.replace(/á/g,'ᛅ') 
	str = str.replace(/ei/g,'ᛅᛁ') 
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
	str = str.replace(/æ/g,'ᛅ')
	str = str.replace(/œ/g,'ᚢ')
	str = str.replace(/ø/g,'ᚢ')
	str = str.replace(/ǫ/g,'ᛅᚢ')
	str = str.replace(/ã/g,'ᚨ')
	
	str = str.replace(/:/g,'᛬\u200B')
	str = str.replace(/[͡|,|.|-]/g,'')

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
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
	str = str.replace(/[͡|,|.|-]/g,'')
	
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



