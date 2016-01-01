function localtranscribe (direction, str) {
	
	if (direction == 'toIPA') { return oldEnglishToIPA(str) }
	if (direction == 'toGloss') { return transcribeforGlossary(str) }
	if (direction == 'fromNItON') { return transcribeFromNItON(str) }
	if (direction == 'toRunes') { return oldNorseToRune(str) }
	if (direction == 'toShortRunes') { return oldNorseToShortRune(str) }
	}





function oldEnglishToIPA (str) {
	// transcribes vowelled Old Norse text into a rough IPA transcription
	
	
	
	// add initial space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/\n/g,' ¶ ') 
	
	str = str.replace(/ ge| ġe/g,' JE') 
	
	str = str.replace(/cg/g,'ʤ') 
	str = str.replace(/sc/g,'ʃ') 
	str = str.replace(/sċ/g,'ʃ') 
	str = str.replace(/c([e|ē|i|ī])/g,'ʧ$1') 
	str = str.replace(/([ē|i|ī|œ̄])c /g,'$1ʧ ') 
	str = str.replace(/cc/g,'KK') 
	str = str.replace(/c/g,'K') 
	str = str.replace(/ċċ/g,'tʧ') 
	str = str.replace(/ċ/g,'ʧ') 
	
	str = str.replace(/nK/g,'ŋK') 
	str = str.replace(/ng/g,'ŋɡ') 
	
	str = str.replace(/ff/g,'FF') 
	str = str.replace(/([ | JE|t|K|f|s])f/g,'$1F') 
	str = str.replace(/f([ |t|K|f|s])/g,'F$1') 
	str = str.replace(/f/g,'V') 
	
	str = str.replace(/([ | JE|t|K|F|s])[þ|ð]/g,'$1θ') 
	str = str.replace(/[þ|ð]([ |t|K|F|s])/g,'θ$1') 
	str = str.replace(/[þ|ð]/g,'ð') 
	
	str = str.replace(/ss/g,'SS') 
	str = str.replace(/([ | JE|t|K|F])s/g,'$1S') 
	str = str.replace(/s([ |t|K|F])/g,'S$1') 
	str = str.replace(/s/g,'Z') 

	str = str.replace(/([a|o|u|ā|ō|ū])g/g,'$1ɣ') 
	str = str.replace(/g([e|ē|i|ī])/g,'J$1') 
	str = str.replace(/([e|i|æ|r|l])g /g,'$1J ') 
	str = str.replace(/([e|i])g/g,'$1J') 
	str = str.replace(/gg/g,'ɡɡ') 
	str = str.replace(/g/g,'ɡ') 
	str = str.replace(/ġġ/g,'ʤ') 
	str = str.replace(/ġ/g,'J') 
	
	str = str.replace(/hw/g,'ʍ') 
	str = str.replace(/hl/g,'l̥') 
	str = str.replace(/hn/g,'n̥') 
	str = str.replace(/hr/g,'r̥') 

	str = str.replace(/ h/g,' H') 
	str = str.replace(/JEh/g,' JEH') 
	str = str.replace(/([e|i])h/g,'$1Ç') 
	str = str.replace(/h/g,'X') 
	
	str = str.replace(/bb/g,'BB') 
	str = str.replace(/dd/g,'DD') 
	str = str.replace(/ll/g,'LL') 
	str = str.replace(/mm/g,'MM') 
	str = str.replace(/nn/g,'NN') 
	str = str.replace(/pp/g,'PP') 
	str = str.replace(/rr/g,'RR') 
	str = str.replace(/tt/g,'TT') 
	str = str.replace(/x/g,'KS') 
	
	str = str.replace(/ea/g,'æɑ') 
	str = str.replace(/ēa/g,'æ:ɑ') 
	str = str.replace(/eo/g,'eo') 
	str = str.replace(/ēo/g,'e:o') 
	str = str.replace(/ie/g,'Iə̯') 
	str = str.replace(/īe/g,'I:ə̯') 

	str = str.replace(/a/g,'ɑ') 
	str = str.replace(/ā/g,'ɑː') 
	str = str.replace(/ū/g,'uː') 
	str = str.replace(/ī/g,'iː') 
	str = str.replace(/ē/g,'eː') 
	str = str.replace(/ō/g,'oː')  
	str = str.replace(/ȳ/g,'yː') 
	str = str.replace(/ǣ/g,'æː')
	
	str = str.replace(/-/g,'')
	
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
	str = str.replace(/[,|.|-]/g,'')
	str = str.replace(/͡/g,'\u200D')

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



