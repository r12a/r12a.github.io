function localtranscribe (direction, str) {
	
	if (direction == 'toIPA') { return oldEnglishToIPA(str) }
	if (direction == 'oldEnglishToRune') { return oldEnglishToRune(str) }
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





function oldEnglishToRune (str) {
	// transcribes vowelled Old Norse text into a rough LB runic transcription
	
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')

	str = str.replace(/ff/g,'ᚠ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/ð/g,'ᚦ') 
	str = str.replace(/rr/g,'ᚱ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/cc/g,'ᚳ') 
	str = str.replace(/c/g,'ᚳ') 
	str = str.replace(/gg/g,'ᚷ') 
	str = str.replace(/g/g,'ᚷ') 
	str = str.replace(/w/g,'ᚹ') 
	str = str.replace(/h/g,'ᚻ') 
	str = str.replace(/nn/g,'ᚾ') 
	str = str.replace(/n/g,'ᚾ') 
	str = str.replace(/j/g,'ᛡ') 
	str = str.replace(/pp/g,'ᛈ') 
	str = str.replace(/p/g,'ᛈ') 
	str = str.replace(/x/g,'ᛉ') 
	str = str.replace(/ss/g,'ᛋ') 
	str = str.replace(/s/g,'ᛋ') 
	str = str.replace(/tt/g,'ᛏ') 
	str = str.replace(/t/g,'ᛏ') 
	str = str.replace(/bb/g,'ᛒ') 
	str = str.replace(/b/g,'ᛒ') 
	str = str.replace(/mm/g,'ᛗ') 
	str = str.replace(/m/g,'ᛗ') 
	str = str.replace(/ll/g,'ᛚ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ŋ/g,'ᛝ') 
	str = str.replace(/dd/g,'ᛞ') 
	str = str.replace(/d/g,'ᛞ') 
	str = str.replace(/ġ/g,'ᚸ') 
	str = str.replace(/g̈/g,'ᚸ') 
	str = str.replace(/kk/g,'ᛣ') 
	str = str.replace(/k/g,'ᛣ') 
	str = str.replace(/ċċ/g,'ᛤ') 
	str = str.replace(/ċ/g,'ᛤ') 
	str = str.replace(/k̈k̈/g,'ᛤ') 
	str = str.replace(/k̈/g,'ᛤ') 

	str = str.replace(/ea/g,'ᛠ') 
	str = str.replace(/ēa/g,'ᛠ') 
	str = str.replace(/a/g,'ᚪ') 
	str = str.replace(/ā/g,'ᚪ') 
	str = str.replace(/e/g,'ᛖ') 
	str = str.replace(/ē/g,'ᛖ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ū/g,'ᚢ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/ī/g,'ᛁ') 
	str = str.replace(/o/g,'ᚩ')  
	str = str.replace(/ō/g,'ᚩ')  
	str = str.replace(/y/g,'ᚣ') 
	str = str.replace(/ȳ/g,'ᚣ') 
	str = str.replace(/æ/g,'ᚫ')
	str = str.replace(/ǣ/g,'ᚫ')
	str = str.replace(/œ/g,'ᛟ')
	str = str.replace(/ɨ/g,'ᛇ')
	
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





function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



