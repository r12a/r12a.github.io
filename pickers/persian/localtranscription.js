function localtranscribe (direction, str) {
	
	if (direction == 'toISO') { return transcribetoISO(str) }
	if (direction == 'toUN') { return transcribetoUN(str) }
	}



var vowels = {'\u064E':'a', '\u064F':'u', '\u0650':'i', '\u0652':'sukun', 	'\u064B':'an', '\u064C':'un', '\u064D':'in'}


function transcribetoUN (str) {
	// transcribes vowelled arabic text into an LOC transcription
	
	
	// check that there are vowels
	var found = false
	for (var i=0;i<str.length;i++) {
		if (vowels[str.charAt(i)]) { found=true; break }
		}
	if (!found) alert('This transcription method expects to start with vowelled text.')
	
	// add initial space so that beginning of word rules work
	str = ' '+str
	
	str = str.replace(/اللّٰه/g,'Allāh') 

	// handle shadda
	var re = /(.)([\u064E|\u064F|\u0650|\u0652|\u064B|\u064C|\u064D]?)\u0651/g
	str = str.replace(re,'$1$1$2')  // shadda
	
	//str = str.replace(/ ال/g,' al-') // definite article
	
	str = str.replace(/\u200C([^ ])/g,'ʹ$1')  // zwnj creating final form in middle of word

	str = str.replace(/\u064Aي/g,'ey') 
	str = str.replace(/ي/g,'i') 
	str = str.replace(/\u0650/g,'e') 
	str = str.replace(/\u0650/g,'e') 
	str = str.replace(/\u064E/g,'a') 
	str = str.replace(/\u064F/g,'o') 
	str = str.replace(/ا/g,'ā') 
	str = str.replace(/\u064Fو/g,'ā') 

	// unclear items
	// final heh can be h or e
	// yeh can be y or i
	// waw can be v or u
	// is final heh in middle of word always e? eg. محله‌ي بالا

	/*
	str = str.replace(/\u064E[\u0651]?ا/g,'ā') 
	str = str.replace(/\u064E[\u0651]?ى/g,'á') 
	str = str.replace(/\u064F[\u0651]?و/g,'ū') 
	str = str.replace(/\u0650[\u0651]?ى/g,'ī') 
	str = str.replace(/\u0650[\u0651]?ي/g,'ī') 
	str = str.replace(/\u064E[\u0651]?و\u0652/g,'aw') 
	str = str.replace(/\u064E[\u0651]?ى\u0652/g,'ay') 
	*/
	
	
	str = str.replace(/ئ/g,'’') 
	str = str.replace(/أ/g,'’') 
	str = str.replace(/ء/g,'’') 
	str = str.replace(/ؤ/g,'’') 
	str = str.replace(/آ/g,'ā') 
	str = str.replace(/ب/g,'b') 
	str = str.replace(/ت/g,'t') 
	str = str.replace(/ث/g,'s')  
	str = str.replace(/ج/g,'j') 
	str = str.replace(/چ/g,'č') // ...
	str = str.replace(/ح/g,'h')
	str = str.replace(/خ/g,'x')
	str = str.replace(/د/g,'d') 
	str = str.replace(/ذ/g,'z') 
	str = str.replace(/ر/g,'r') 
	str = str.replace(/ز/g,'z') 
	str = str.replace(/ژ/g,'ž') 
	str = str.replace(/س/g,'s') 
	str = str.replace(/ش/g,'š') 
	str = str.replace(/ص/g,'s') 
	str = str.replace(/ض/g,'z') 
	str = str.replace(/ط/g,'t') 
	str = str.replace(/ظ/g,'z') 
	str = str.replace(/ ع/g,'') 
	str = str.replace(/ع/g,'’') 
	str = str.replace(/غ/g,'q') 
	str = str.replace(/ف/g,'f') 
	str = str.replace(/ق/g,'q') 
	str = str.replace(/ك/g,'k') 
	str = str.replace(/گ/g,'[ɟ{ɡ]') 
	str = str.replace(/ل/g,'l')
	str = str.replace(/م/g,'m')
	str = str.replace(/ن/g,'n')
	str = str.replace(/و/g,'[v{u]') 
	str = str.replace(/ه /g,'[h{e]')
	str = str.replace(/ه/g,'h')
	str = str.replace(/ي/g,'y') 
	

	/*
	str = str.replace(/م/g,'m') 
	str = str.replace(/\bا/g,'ʾa') 
	str = str.replace(/ا/g,'') 
	str = str.replace(/آ/g,'[’ā{ā]') 
	str = str.replace(/ أ/g,'') 
	str = str.replace(/أ/g,'’') 
	str = str.replace(/ إ/g,'') 
	str = str.replace(/إ/g,'’') 
	str = str.replace(/ٱ/g,'') 
	str = str.replace(/ؤ/g,'’') 
	str = str.replace(/ئ/g,'’') 
	str = str.replace(/ة/g,'[h{t]') 
	str = str.replace(/ى/g,'ỳ') 
	*/
	
	/*
	str = str.replace(/\u064E/g,'a') 
	str = str.replace(/\u064F/g,'u') 
	str = str.replace(/\u0650/g,'i') 
	str = str.replace(/\u0652/g,'') 
	str = str.replace(/\u064B/g,'an')  
	str = str.replace(/\u064C/g,'un') 
	str = str.replace(/\u064D/g,'in')
	*/
	 
	str = str.replace(/۱/g,'1') 
	str = str.replace(/۲/g,'2') 
	str = str.replace(/۳/g,'3') 
	str = str.replace(/۴/g,'4') 
	str = str.replace(/۵/g,'5') 
	str = str.replace(/۶/g,'6')
	str = str.replace(/۷/g,'7')
	str = str.replace(/۸/g,'8')
	str = str.replace(/۹/g,'9')
	str = str.replace(/۰/g,'0')
	
	str = str.replace(/٪/g,'%')
	str = str.replace(/؟/g,'?')
	str = str.replace(/؛/g,'\u002C')
	str = str.replace(/،/g,',')
	str = str.replace(/؛/g,';')
	str = str.replace(/۔/g,'.')
	str = str.replace(/ـ/g,'')

	
	/*
	str = str.replace(/௰/g,'(x10)')
	str = str.replace(/௱/g,'(x100)')
	str = str.replace(/௲/g,'(x1000)')
	str = str.replace(/௺/g,'<number sign>')
	str = str.replace(/௹/g,'<rupee sign>')
	str = str.replace(/௳/g,'<day sign>')
	str = str.replace(/௴/g,'<month sign>')
	str = str.replace(/௵/g,'<year sign>')
*/

	// add markup for ambiguous cases
	str = str.replace(/\[/g,'<span class=alts><span class=altfirst>')
	str = str.replace(/\|/g,'</span><span class=alt>')
	str = str.replace(/\{/g,'</span><span class=altlast>')
	str = str.replace(/\]/g,'</span></span>')
	str = str.replace(/¶/g,'')


	return str.trim()
	}





function transcribetoISO (chstring) {
					
	chstring = chstring.replace(/ال/g,' al-'); // lam alif
	
	chstring = chstring.replace(/ء/g,'ˈ'); 
	chstring = chstring.replace(/م/g,'m'); 
	chstring = chstring.replace(/\bا/g,'ʾa'); 
	chstring = chstring.replace(/ا/g,'ā'); 
	chstring = chstring.replace(/آ/g,'ʾâ'); 
	chstring = chstring.replace(/أ/g,'a'); 
	chstring = chstring.replace(/إ/g,'i'); 
	chstring = chstring.replace(/ٱ/g,'u'); 
	chstring = chstring.replace(/ب/g,'b'); 
	chstring = chstring.replace(/ت/g,'t'); 
	chstring = chstring.replace(/ث/g,'ṯ'); 
	chstring = chstring.replace(/ج/g,'ǧ'); 
	chstring = chstring.replace(/ح/g,'ḥ');
	chstring = chstring.replace(/خ/g,'ẖ');
	chstring = chstring.replace(/د/g,'d'); 
	chstring = chstring.replace(/ذ/g,'ḏ'); 
	chstring = chstring.replace(/ر/g,'r'); 
	chstring = chstring.replace(/ز/g,'z'); 
	chstring = chstring.replace(/س/g,'s'); 
	chstring = chstring.replace(/ش/g,'š'); 
	chstring = chstring.replace(/ص/g,'ṣ'); 
	chstring = chstring.replace(/ض/g,'ḍ'); 
	chstring = chstring.replace(/ط/g,'ṭ'); 
	chstring = chstring.replace(/ظ/g,'ẓ'); 
	chstring = chstring.replace(/ع/g,'ʿ'); 
	chstring = chstring.replace(/غ/g,'ġ'); 
	chstring = chstring.replace(/ف/g,'f'); 
	chstring = chstring.replace(/ق/g,'q'); 
	chstring = chstring.replace(/ك/g,'k'); 
	chstring = chstring.replace(/ل/g,'l');
	chstring = chstring.replace(/م/g,'m');
	chstring = chstring.replace(/ن/g,'n');
	chstring = chstring.replace(/ه/g,'h');
	chstring = chstring.replace(/و/g,'[w{ū]'); 
	chstring = chstring.replace(/ي/g,'[y{ī]'); 
	chstring = chstring.replace(/ة/g,'ẗ'); 
	chstring = chstring.replace(/ى/g,'ỳ'); 
	
	chstring = chstring.replace(/\u064E/g,'a'); 
	chstring = chstring.replace(/\u064F/g,'u'); 
	chstring = chstring.replace(/\u0650/g,'i'); 
	chstring = chstring.replace(/\u0652/g,''); 
	chstring = chstring.replace(/\u064B/g,'an');  
	chstring = chstring.replace(/\u064C/g,'un'); 
	chstring = chstring.replace(/\u064D/g,'in');
	 
	chstring = chstring.replace(/۱/g,'1'); 
	chstring = chstring.replace(/۲/g,'2'); 
	chstring = chstring.replace(/۳/g,'3'); 
	chstring = chstring.replace(/۴/g,'4'); 
	chstring = chstring.replace(/۵/g,'5'); 
	chstring = chstring.replace(/۶/g,'6');
	chstring = chstring.replace(/۷/g,'7');
	chstring = chstring.replace(/۸/g,'8');
	chstring = chstring.replace(/۹/g,'9');
	chstring = chstring.replace(/۰/g,'0');
	
	chstring = chstring.replace(/٪/g,'%');
	chstring = chstring.replace(/؟/g,'?');
	chstring = chstring.replace(/؛/g,'\u002C');
	chstring = chstring.replace(/،/g,';');

	var re = /(.)\u0651/g
	chstring = chstring.replace(re,'$1$1');  // shadda
	
	
	chstring = chstring.replace(/௰/g,'(x10)');
	chstring = chstring.replace(/௱/g,'(x100)');
	chstring = chstring.replace(/௲/g,'(x1000)');
	chstring = chstring.replace(/௺/g,'<number sign>');
	chstring = chstring.replace(/௹/g,'<rupee sign>');
	chstring = chstring.replace(/௳/g,'<day sign>');
	chstring = chstring.replace(/௴/g,'<month sign>');
	chstring = chstring.replace(/௵/g,'<year sign>');


	// add markup for ambiguous cases
	chstring = chstring.replace(/\[/g,'<span class=alts><span class=altfirst>')
	chstring = chstring.replace(/\|/g,'</span><span class=alt>')
	chstring = chstring.replace(/\{/g,'</span><span class=altlast>')
	chstring = chstring.replace(/\]/g,'</span></span>')
	chstring = chstring.replace(/¶/g,'')


	return chstring;
	}






function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



