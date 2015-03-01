function localtranscribe (node, direction, str) {
	
	if (direction == 'toIPAN') { return transcribeToIPA(str,'n') }
	if (direction == 'toIPAS') { return transcribeToIPA(str,'s') }
	}



function transcribeToIPA (str, region) {
	// transcribes to a phonological level
	// str: the text to be transcribed
	// region: either 'n' or 's', representing north or south variants
	var temp = str;
	temp = temp.replace(/^ */, ''); // remove leading and trailing spaces
	temp = temp.replace(/¶/, ''); // remove these too
	temp = temp.replace(/ *$/, '');
	temp = nfd(temp);
	// reorder so that tone mark is last
	temp = temp.replace(/'\u0301\u0302'/,'\u0302\u0301');
	temp = temp.replace(/\u0300\u0302/,'\u0302\u0300');
	temp = temp.replace(/\u0309\u0302/,'\u0302\u0309');
	temp = temp.replace(/\u0303\u0302/,'\u0302\u0303');
	temp = temp.replace(/\u0323\u0302/,'\u0302\u0323');

	temp = temp.replace(/\u0301\u0306/,'\u0306\u0301');
	temp = temp.replace(/\u0300\u0306/,'\u0306\u0300');
	temp = temp.replace(/\u0309\u0306/,'\u0306\u0309');
	temp = temp.replace(/\u0303\u0306/,'\u0306\u0303');
	temp = temp.replace(/\u0323\u0306/,'\u0306\u0323');

	temp = temp.replace(/\u0301\u031B/,'\u031B\u0301');
	temp = temp.replace(/\u0300\u031B/,'\u031B\u0300');
	temp = temp.replace(/\u0309\u031B/,'\u031B\u0309');
	temp = temp.replace(/\u0303\u031B/,'\u031B\u0303');
	temp = temp.replace(/\u0323\u031B/,'\u031B\u0323');

	
	
	var syllables = temp.split(' '); //split into syllables
	var outstr = '';
	
	var breve = "\u0306";
	var circum = "\u0302";
	var horn = "\u031B";
	
	//alert(temp+' '+temp.length);

	for (a = 0; a<syllables.length; a++) {
		syllables[a] = syllables[a].toLowerCase();
		// create an array containing the initial and final consonants (and any other character not in the list below)
		syllables[a] = syllables[a].replace(/gi/, 'ʒ');
		k = syllables[a].match(/[^aeiouy\u0323\u0300-\u0303\u0306\u0309\u031B]+/g);
		// figure out whether there's an initial and final consonant
		initialC = ''; finalC = ''; C1=''; C2='';
		if (k) {
			if (syllables[a][0].match(/[aeiouy\u0323\u0300-\u0303\u0306\u0309\u031B]+/) ) { finalC = k[0]; }
			else { 
				initialC = k[0]; 
				if (k.length>1) { finalC = k[1]; }
				}
			}
		// find vowels
		vowels = syllables[a].match(/[aeiouy\u0323\u0300-\u0303\u0306\u0309\u031B]+/g);
		//vowels = syllables[a].match(/[aeiouăêôơưyãàáâèéìíĩòóõuúùûỳý\u1EA0-\u1EF9\u0306\u0302\u031B]+/g);
		//alert(vowels[0]);
		
		switch (initialC) {
			case 'c': C1 = 'k'; break;
			case 'ch': C1 = 'c'; break;
			case 'd': if (region == 'n') { C1 = 'z'; break; }
						else { C1 = 'j'; break; }
			case 'đ': C1 = 'd'; break;
			case 'g': C1 = 'ɣ'; 
					break; 
			case 'ʒ': if (region == 'n') { C1 = 'z'; }
						else { C1 = 'ʒ'; }
						break; 
			case 'gh': C1 = 'ɣ'; break;
			case 'kh': C1 = 'x'; break;
			case 'ng': C1 = 'ŋ'; break;
			case 'ngh': C1 = 'ŋ'; break;
			case 'nh': C1 = 'ɲ'; break;
			case 'ph': C1 = 'f'; break;
			case 'q': C1 = 'k'; break;
			case 'r': if (region == 'n') { C1 = 'z'; break; }
						else { C1 = 'r'; break; }
			case 's': if (region == 'n') { C1 = 's'; break; }
						else { C1 = 'ʃ'; break; }
			case 'th': C1 = 'tʰ'; break;
			case 'tr': if (region == 'n') { C1 = 'c'; break; }
						else { C1 = 'ʈ'; break; }
			case 'x': C1 = 's'; break;
			default: C1 = initialC;
			}
		
		if (vowels) { 
		decomposedV = vowels[0];  //alert('yes'); 
		//salert(decomposedV+' '+decomposedV.length);
		// find and store any tone mark, replacing with a marker
		tone = decomposedV.match(/[\u0300\u0301\u0303\u0309\u0323]/);
		if (tone) { decomposedV = decomposedV.replace(/[\u0300\u0301\u0303\u0309\u0323]/,'¶'); } 

		// remove initial i if syllable starts with gi
		if (C1 == 'ʒ' && decomposedV[0] == 'i') { decomposedV = decomposedV.slice(1); }
		
		V=vowels[0]; // fallback
		//alert(V+' '+V.length);
		//alert(decomposedV[0]);
		//if (decomposedV == 'ă') { alert('yes'); }
		
		//if(decomposedV[0].match(/^[a]/)) {
		if(decomposedV[0] == 'a') {
			switch (decomposedV) {
				case 'a': V = 'āː';  break;
				case 'au': V = 'āw'; break;
				case 'ao': V = 'āːw'; break;
				case 'ai': V = 'āːj'; break;
				case 'ay': V = 'āj'; break;
				case 'a¶': V = 'a¶ː'; break;
				case 'a¶u': V = 'a¶w'; break;
				case 'a¶o': V = 'a¶ːw'; break;
				case 'a¶i': V = 'a¶ːj'; break;
				case 'a¶y': V = 'a¶j'; break;
				case 'a\u0306': V = 'ā'; break; // ă
				case 'a\u0306¶': V = 'a¶'; break; // ă¶
				case 'a\u0302': V = 'ə̄'; break; // â
				case 'a\u0302u': V = 'ə̄w'; break; //âu
				case 'a\u0302i': V = 'ə̄j'; break; //âi
				case 'a\u0302y': V = 'ə̄j'; break; //ây
				case 'a\u0302¶': V = 'ə¶'; break; // â¶
				case 'a\u0302¶u': V = 'ə¶w'; break; //â¶u
				case 'a\u0302¶i': V = 'ə¶j'; break; //â¶i
				case 'a\u0302¶y': V = 'ə¶j'; break; // â¶y
				}
			}
		if(decomposedV[0].match(/^[e]/)) {
			switch (decomposedV) {
				case 'e': V = 'ɛ̄'; break;
				case 'eo': V = 'ɛ̄w'; break;
				case 'e\u0302': V = 'ē'; break; //ê
				case 'e\u0302u': V = 'ēw'; break; //êu
				case 'e¶': V = 'ɛ¶'; break; //e¶
				case 'e¶o': V = 'ɛ¶w'; break; //e¶o
				case 'e\u0302¶': V = 'e¶'; break; //ê¶
				case 'e\u0302¶u': V = 'e¶w'; break; //ê¶u
				}
			}
		if(decomposedV[0].match(/^[i]/)) {
			switch (decomposedV) {
				case 'i': V = 'ī'; break;
				case 'ia': V = 'īə'; break;
				case 'ie\u0302': V = 'īə'; break;  //iê
				case 'iu': V = 'īw'; break;
				case 'ie\u0302u': V = 'īəw'; break; //iêu
				case 'i¶': V = 'i¶'; break;
				case 'i¶a': V = 'i¶ə'; break;
				case 'ie\u0302¶': V = 'i¶ə'; break; //iê¶
				case 'i¶u': V = 'i¶w'; break;
				case 'ie\u0302¶u': V = 'i¶əw'; break; //iê¶u
				}
			}
		if(decomposedV[0].match(/^[y]/)) {
			switch (decomposedV) {
				case 'y': V = 'ī'; break;
				case 'ya': V = 'īə'; break;
				case 'ye\u0302': V = 'īə'; break;
				case 'yu': V = 'īw'; break;
				case 'ye\u0302u': V = 'īəw'; break;
				case 'y¶': V = 'i¶'; break;
				case 'y¶a': V = 'i¶ə'; break;
				case 'ye\u0302¶': V = 'i¶ə'; break;
				case 'y¶u': V = 'i¶w'; break;
				case 'ye\u0302¶u': V = 'i¶əw'; break;
				}
			}
		if(decomposedV[0].match(/^[o]/)) {
			switch (decomposedV) {
				case 'o': V = 'ɔ̄'; break;
				case 'oi': V = 'ɔ̄j'; break;
				case 'oa': V = 'wāː'; break;
				case 'oa\u0306': V = 'wā'; break;
				case 'oe': V = 'wɛ̄'; break;
				case 'o¶': V = 'ɔ¶'; break;
				case 'o¶i': V = 'ɔ¶i'; break;
				case 'oa¶': V = 'wa¶ː'; break;
				case 'o¶a': V = 'wa¶ː'; break;
				case 'oa\u0306¶': V = 'wa¶'; break; // oă
				case 'o¶a\u0306': V = 'wa¶'; break; // o¶ă
				case 'o¶e': V = 'wɛ¶'; break;
				case 'o\u0302': V = 'ō'; break;
				case 'o\u0302i': V = 'ōj'; break;
				case 'o\u0302¶': V = 'o¶'; break;
				case 'o\u0302¶i': V = 'o¶j'; break;
				case 'o\u031B': V = 'ə̄ː'; break; // ơ
				case 'o\u031Bi': V = 'ə̄ːj'; break;
				case 'o\u031Bu': V = 'ə̄ːw'; break;
				case 'o\u031B¶': V = 'ə¶ː'; break;
				case 'o\u031B¶i': V = 'ə¶ːj'; break;
				case 'o\u031B¶u': V = 'ə¶ːw'; break;
				}
			}
		if(decomposedV[0].match(/^[u]/)) {
			switch (decomposedV) {
				case 'u': V = 'ū'; break;
				case 'ua': V = 'ūə'; break;
				case 'uo\u0302': V = 'ūə'; break;
				case 'ui': V = 'ūi'; break; // some ambiguity here, so i chose ui rather than wi or uj
				case 'uy': V = 'ūi'; break;
				case 'uo\u0302i': V = 'ūəj'; break;
				case 'uye\u0302': V = 'u̯īə'; break;
				case 'ue\u0302': V = 'wē'; break;
				case 'ua\u0302': V = 'wə̄'; break;
				case 'uo\u031B': V = 'wə̄ː'; break;
				case 'ue': V = 'wɛ̄'; break;
				case 'uya': V = 'uiə'; break; // guessing here
				case 'uyu': V = 'uiu'; break; // guessing here
				case 'ua\u0302y': V = 'uəj'; break; // guessing here
				case 'u¶': V = 'u¶'; break;
				case 'u¶a': V = 'u¶ə'; break;
				case 'uo\u0302¶': V = 'u¶ə'; break;
				case 'u¶i': V = 'u¶i'; break;
				case 'ui¶': V = 'u¶i'; break;
				case 'uy¶': V = 'u¶i'; break;
				case 'u¶y': V = 'u¶i'; break;
				case 'uo\u0302¶i': V = 'u¶əj'; break;
				case 'uy¶e\u0302': V = 'u̯i¶ə'; break;
				case 'ue\u0302¶': V = 'we¶'; break;
				case 'ua\u0302¶': V = 'wə¶'; break;
				case 'uo\u031B¶': V = 'wə¶ː'; break;
				case 'ue¶': V = 'wɛ¶'; break;
				case 'uy¶a': V = 'ui¶ə'; break; // guessing here
				case 'uy¶u': V = 'ui¶u'; break; // guessing here
				case 'ua\u0302¶y': V = 'uə¶j'; break; // guessing here

				case 'u\u031B': V = 'ɯ̄'; break;
				case 'u\u031Ba': V = 'ɯ̄ə'; break;
				case 'u\u031Bo\u031B': V = 'ɯ̄ə'; break;
				case 'u\u031Bi': V = 'ɯ̄j'; break;
				case 'u\u031Bu': V = 'ɯ̄w'; break;
				case 'u\u031Bo\u031Bi': V = 'ɯ̄əj'; break;
				case 'u\u031B¶': V = 'ɯ¶'; break;
				case 'u\u031B¶a': V = 'ɯ¶ə'; break;
				case 'u\u031Bo\u031B¶': V = 'ɯ¶ə'; break;
				case 'u\u031B¶i': V = 'ɯ¶j'; break;
				case 'u\u031B¶u': V = 'ɯ¶w'; break;
				case 'u\u031Bo\u031B¶i': V = 'ɯ¶əj'; break;
				}
			}
		// put back any tones
		if (tone) {  
			switch (tone[0]) {
				case '\u0300': V = V.replace(/¶/, '\u0300'); break;
				case '\u0301': V = V.replace(/¶/, '\u0301'); break;
				case '\u0303': V = V.replace(/¶/, '\u0301ˀ'); break;
				case '\u0309': V = V.replace(/¶/, '\u030C'); break;
				case '\u0323': V = V.replace(/¶/, '\u0300ˀ'); break;
				}
			}
		}
		else { V = ''; }
			
		switch (finalC) {
			case 'c': 	if (vowels[0][vowels[0].length-1].match( /[oòóõỏọôồốỗổộùúũủụôu]/ )) { C2 = 'k͡p'; }
							else { C2 = 'k'; }
							break;
			case 'ch': 	if (vowels[0][vowels[0].length-1] .match(/[aáàãảạ]/)) { C2 = 'ik'; }
							else if (region == 'n') { C2 = 'c'; }
							else { C2 = 't'; }
							break;
			case 'n': 	if (region == 'n') { C2 = 'n';  }
							else { C2 = 'ŋ';  }
							break;
			case 'nh':	if (vowels[0][vowels[0].length-1] .match(/[aáàãảạ]/)) { C2 = 'iŋ'; }
							else if (region == 'n') { C2 = 'ɲ'; }
							else { C2 = 'n'; }
							break;
			case 'ng': 	if (vowels[0][vowels[0].length-1].match( /[oòóõỏọôồốỗổộùúũủụôu]/ )) { C2 = 'ŋ͡m'; }
							else { C2 = 'ŋ'; }
							break; 
			case 't': 		if (region == 'n') { C2 = 't'; }
							else { C2 = 'k'; }
							break; 
			default: C2 = finalC;
			}
		

		outstr += C1+V+C2+' ';
		}

	return outstr; 
	}