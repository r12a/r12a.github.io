function localtranscribe (direction, str) {
	
	if (direction == 'fromNItON') { return transcribeFromNItON(str) }
	if (direction == 'transliterateRunes') { return transliterateRunes(str) }
	if (direction == 'transliterateMedievalRunes') { return transliterateMedievalRunes(str) }
	if (direction == 'toNorwegian') { return toNorwegian(str) }
	if (direction == 'toLB') { return toLB(str) }
	if (direction == 'toST') { return toST(str) }
	if (direction == 'toMedieval') { return toMedieval(str) }
	}



var ONvowels = {'a':'a', 'á':'u', 'e':'e', 'é':'e', 'i':'i', 'í':'i', 'o':'o', 'ó':'o', 'u':'u', 'ú':'u', 'y':'y', 'ý':'y', 'æ':'a', 'œ':'u', 'ø':'u', 'ǫ':'o'}




function transliterateRunes (str) {
	// transliterates younger fuþark runes into Latin
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/ᚦ/g,'þ') 
	str = str.replace(/ᚧ/g,'þ̈') 
	str = str.replace(/[ᛧ|ᛦ]/g,'ʀ') 
	str = str.replace(/ᚱ/g,'r') 
	str = str.replace(/[ᛐ|ᛏ]/g,'t') 
	str = str.replace(/ᛑ/g,'ẗ') 
	str = str.replace(/ᛣ/g,'y') 
	str = str.replace(/ᚢ/g,'u') 
	str = str.replace(/ᚤ/g,'ü') 
	str = str.replace(/ᛁ/g,'i') 
	str = str.replace(/ᛂ/g,'ï') 
	str = str.replace(/ᚯ/g,'ǫ') 
	str = str.replace(/ᚮ/g,'b') 
	str = str.replace(/ᛕ/g,'p') 
	str = str.replace(/[ᛆ|ᛅ]/g,'a') 
	str = str.replace(/[ᛌ|ᛋ]/g,'s') 
	str = str.replace(/ᚠ/g,'f') 
	str = str.replace(/ᚠ/g,'f̈') 
	str = str.replace(/[ᚽ|ᚼ]/g,'h') 
	str = str.replace(/ᚴ/g,'k') 
	str = str.replace(/ᚵ/g,'k̈') 
	str = str.replace(/ᛚ/g,'l') 
	str = str.replace(/[ᚬ|ᚭ]/g,'ã') 
	str = str.replace(/ᛅ/g,'æ') 
	str = str.replace(/ᛋ/g,'z') 
	str = str.replace(/ᛍ/g,'c') 
	str = str.replace(/[ᛓ|ᛒ]/g,'b') 
	str = str.replace(/ᛔ/g,'b̈') 
	str = str.replace(/[ᚿ|ᚾ]/g,'n') 
	str = str.replace(/[ᛙ|ᛘ]/g,'m') 
	str = str.replace(/᛬​/g,' ') 
	str = str.replace(/᛫/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function transliterateMedievalRunes (str) {
	// transliterates Medieval runes into latin
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/ᚦ/g,'þ') 
	str = str.replace(/ᚧ/g,'þ̈') 
	str = str.replace(/ᛧ/g,'ʀ') 
	str = str.replace(/ᚱ/g,'r') 
	str = str.replace(/[ᛐ|ᛏ]/g,'t') 
	str = str.replace(/ᛑ/g,'ẗ') 
	str = str.replace(/ᛣ/g,'y') 
	str = str.replace(/ᚢ/g,'u') 
	str = str.replace(/ᚤ/g,'ü') 
	str = str.replace(/ᛁ/g,'i') 
	str = str.replace(/ᛂ/g,'ï') 
	str = str.replace(/ᚯ/g,'ǫ') 
	str = str.replace(/ᚮ/g,'o') 
	str = str.replace(/ᛕ/g,'p') 
	str = str.replace(/[ᛆ|ᛅ]/g,'a') 
	str = str.replace(/[ᛌ|ᛋ]/g,'s') 
	str = str.replace(/ᚠ/g,'f') 
	str = str.replace(/ᚠ/g,'f̈') 
	str = str.replace(/[ᚽ|ᚼ]/g,'h') 
	str = str.replace(/ᚴ/g,'k') 
	str = str.replace(/ᚵ/g,'k̈') 
	str = str.replace(/ᛚ/g,'l') 
	str = str.replace(/[ᚬ|ᚭ]/g,'ã') 
	str = str.replace(/ᛅ/g,'æ') 
	str = str.replace(/ᛋ/g,'z') 
	str = str.replace(/ᛍ/g,'c') 
	str = str.replace(/[ᛓ|ᛒ]/g,'b') 
	str = str.replace(/ᛔ/g,'b̈') 
	str = str.replace(/[ᚿ|ᚾ]/g,'n') 
	str = str.replace(/[ᛙ|ᛘ]/g,'m') 
	str = str.replace(/᛬​/g,' ') 
	str = str.replace(/᛫/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function toLB (str) {
	// transliterates all runic character (str) {
	// transcribes vowelled Old Norse text into a rough runic transcription
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/þ̈/g,'ᚧ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/ʀ/g,'ᛦ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/ẗ/g,'ᛑ') 
	str = str.replace(/t/g,'ᛏ') 
	str = str.replace(/y/g,'ᛣ') 
	str = str.replace(/ü/g,'ᚤ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ï/g,'ᛂ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/ǫ/g,'ᚯ') 
	str = str.replace(/o/g,'ᚮ') 
	str = str.replace(/p/g,'ᛕ') 
	str = str.replace(/a/g,'ᛅ') 
	str = str.replace(/s/g,'ᛋ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/f̈/g,'ᚠ') 
	str = str.replace(/h/g,'ᚼ') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/k̈/g,'ᚵ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ã/g,'ᚭ') 
	str = str.replace(/æ/g,'ᛅ') 
	str = str.replace(/z/g,'ᛋ') 
	str = str.replace(/c/g,'ᛍ') 
	str = str.replace(/b̈/g,'ᛔ') 
	str = str.replace(/b/g,'ᛒ') 
	str = str.replace(/n/g,'ᚾ') 
	str = str.replace(/m/g,'ᛘ') 
	str = str.replace(/᛬​/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function toST (str) {
	// converts Latin text into a short twig or medieval runic transcription
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/þ̈/g,'ᚧ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/ʀ/g,'ᛧ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/ẗ/g,'ᛑ') 
	str = str.replace(/t/g,'ᛐ') 
	str = str.replace(/y/g,'ᛣ') 
	str = str.replace(/ü/g,'ᚤ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ï/g,'ᛂ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/ǫ/g,'ᚯ') 
	str = str.replace(/o/g,'ᚮ') 
	str = str.replace(/p/g,'ᛕ') 
	str = str.replace(/a/g,'ᛆ') 
	str = str.replace(/s/g,'ᛌ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/f̈/g,'ᚠ') 
	str = str.replace(/h/g,'ᚽ') 
	str = str.replace(/k̈/g,'ᚵ') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ã/g,'ᚭ') 
	str = str.replace(/æ/g,'ᛅ') 
	str = str.replace(/z/g,'ᛋ') 
	str = str.replace(/c/g,'ᛍ') 
	str = str.replace(/b̈/g,'ᛔ') 
	str = str.replace(/b/g,'[ᛓ{ᚮ]') 
	str = str.replace(/n/g,'ᚿ') 
	str = str.replace(/m/g,'ᛙ') 
	str = str.replace(/᛬​/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function toMedieval (str) {
	// converts Latin text into a short twig or medieval runic transcription
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/þ̈/g,'ᚧ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/ʀ/g,'ᛧ') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/ẗ/g,'ᛑ') 
	str = str.replace(/t/g,'ᛐ') 
	str = str.replace(/y/g,'ᛣ') 
	str = str.replace(/ü/g,'ᚤ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ï/g,'ᛂ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/ǫ/g,'ᚯ') 
	str = str.replace(/o/g,'ᚮ') 
	str = str.replace(/p/g,'ᛕ') 
	str = str.replace(/a/g,'ᛆ') 
	str = str.replace(/s/g,'ᛌ') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/f̈/g,'ᚠ') 
	str = str.replace(/h/g,'ᚼ') 
	str = str.replace(/k̈/g,'ᚵ') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ã/g,'ᚭ') 
	str = str.replace(/æ/g,'ᛅ') 
	str = str.replace(/z/g,'ᛋ') 
	str = str.replace(/c/g,'ᛍ') 
	str = str.replace(/b̈/g,'ᛔ') 
	str = str.replace(/b/g,'ᛒ') 
	str = str.replace(/n/g,'ᚿ') 
	str = str.replace(/m/g,'ᛘ') 
	str = str.replace(/᛬​/g,' ') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

	return str
	}



function toNorwegian (str) {
	// transliterates all runic character (str) {
	// transcribes vowelled Old Norse text into a rough runic transcription
	
	// add space so that beginning of word rules work
	str = ' '+str.toLowerCase()+' '
	str = str.replace(/[\s]+/g,' ')
	
	str = str.replace(/þ̈/g,'ᚧ') 
	str = str.replace(/þ/g,'ᚦ') 
	str = str.replace(/ʀ/g,'[ᛧ{ᛦ]') 
	str = str.replace(/r/g,'ᚱ') 
	str = str.replace(/ẗ/g,'ᛑ') 
	str = str.replace(/t/g,'[ᛐ{ᛏ]') 
	str = str.replace(/y/g,'ᛣ') 
	str = str.replace(/ü/g,'ᚤ') 
	str = str.replace(/u/g,'ᚢ') 
	str = str.replace(/ï/g,'ᛂ') 
	str = str.replace(/i/g,'ᛁ') 
	str = str.replace(/ǫ/g,'ᚯ') 
	str = str.replace(/o/g,'ᚮ') 
	str = str.replace(/p/g,'ᛕ') 
	str = str.replace(/[ᛆ|ᛅ]/g,'a') 
	str = str.replace(/a/g,'[ᛆ{ᛅ]') 
	str = str.replace(/s/g,'[ᛌ{ᛋ]') 
	str = str.replace(/f/g,'ᚠ') 
	str = str.replace(/f̈/g,'ᚠ') 
	str = str.replace(/h/g,'[ᚽ{ᚼ]') 
	str = str.replace(/k/g,'ᚴ') 
	str = str.replace(/k̈/g,'ᚵ') 
	str = str.replace(/l/g,'ᛚ') 
	str = str.replace(/ã/g,'ᚭ') 
	str = str.replace(/æ/g,'ᛅ') 
	str = str.replace(/z/g,'ᛋ') 
	str = str.replace(/c/g,'ᛍ') 
	str = str.replace(/b̈/g,'ᛔ') 
	str = str.replace(/b/g,'[ᛓ{ᚮ{ᛒ]') 
	str = str.replace(/n/g,'[ᚿ{ᚾ]') 
	str = str.replace(/m/g,'[ᛙ{ᛘ]') 
	str = str.replace(/᛬​/g,' ') 
	str = str.replace(/ /g,'᛫') 

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')
	
	str = str.trim()

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



