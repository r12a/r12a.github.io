function localtranscribe (node, direction, str) {
	
	if (direction == 'toIPA') { return transcribeToIPA(str) }
	}
		
		
function convertToIPA ( syllable ) {
	var outstr = '';
	var series = 1;
	var labials = { '\u1794':'', '\u1795':'', '\u1796':'', '\u1797':'', '\u1798':'' };
	var velars = { '\u1780':'', '\u1781':'', '\u1782':'', '\u1783':'', '\u1784':'' };
	var nasals = {  '\u1798':'', '\u1793':'', '\u1789':'', '\u1784':'', '\u178E':'' };

	if (syllable.robat) { outstr += 'rə'; }
	switch (syllable.initialcons.charAt(0) ) { // Initial consonant
		case 'ក':  // ka
			outstr += 'k'; 
				if (syllable.initialcons.length > 1 && (syllable.initialcons[1] == '\u1793'  || syllable.initialcons[1]  == '\u1798' )) { outstr += 'ʰ'; }
			series = 1;
			break;
		case 'ខ':  // kha
			outstr += 'k'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case 'គ':  // ko
			outstr += 'k'; 
			if (syllable.initialcons.length > 1 && (syllable.initialcons[1] == '\u1793'  || syllable.initialcons[1]  == '\u1798' )) { outstr += 'ʰ'; }
			series = 2;
			break;
		case 'ឃ':  // kho
			outstr += 'k'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			series = 1;
			break;
		case '\u1786':  // cha
			outstr += 'c'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1787':  // co
			outstr += 'c'; 
			series = 2;
			break;
		case '\u1788':  // cho
			outstr += 'c'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u178a':  // da
			outstr += 'ɗ'; 
			series = 1;
			break;
		case '\u178b':  // tha
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u178c':  // do
			outstr += 'ɗ'; 
			series = 2;
			break;
		case '\u178d':  // ttho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u178f':  // ta
			if (syllable.presyllable && syllable.finalcons[0] in nasals) { outstr += 'ɗ'; }
			else { outstr += 't';  }
			series = 1;
			break;
		case '\u1790':  // tha
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1791':  // to
			outstr += 't'; 
			series = 2;
			break;
		case '\u1792':  // tho
			outstr += 't'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1794':  // ba
			if (syllable.muusikoatan || syllable.initialcons.length > 1) {
				outstr += 'p';
				}
			else outstr += 'ɓ'; 
			series = 1;
			break;
		case '\u1795':  // pha
			outstr += 'p'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 1;
			break;
		case '\u1796':  // po
			outstr += 'p'; 
			series = 2;
			break;
		case '\u1797':  // pho
			outstr += 'p'; 
			if (syllable.initialcons.length == 1 ) { outstr += 'ʰ'; }
			series = 2;
			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179a':  // ro
			outstr += 'r'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179c':  // vo
			outstr += 'ʋ'; 
			if (!vowelHarmony) { series = 2; }
			else { series = vowelHarmony; }
			break;
		case '\u179f':  // sa
			outstr += 's'; 
			series = 1;
			break;
		case '\u17a0':  // ha
			if (syllable.initialcons.length == 1) {
				outstr += 'h'; 
				}
			series = 1;
			break;
		case '\u17a1':  // la
			outstr += 'l'; 
			if (!vowelHarmony) { series = 1; }
			else { series = vowelHarmony; }
			break;
		case '\u17a2':  // qa
			outstr += 'ʔ'; 
			series = 1;
			break;
		outstr += character;
		}

	switch (syllable.initialcons.charAt(1) ) { // Initial subscript consonant
		case 'ក':  // ka
			outstr += 'k'; 
			series = 1;
			break;
		case 'ខ':  // kha
			outstr += 'kʰ'; 
			series = 1;
			break;
		case 'គ':  // ko
			outstr += 'k'; 
			series = 2;
			break;
		case 'ឃ':  // kho
			outstr += 'kʰ'; 
			series = 2;
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			series = 2;
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			series = 1;
		case '\u1786':  // cha
			outstr += 'c'; 
			series = 1;
		case '\u1787':  // co
			outstr += 'c'; 
			series = 2;
		case '\u1788':  // cho
			outstr += 'c'; 
			series = 2;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			break;
		case '\u178a':  // da
			outstr += 'ɗ'; 
			series = 1;
			break;
		case '\u178b':  // tha
			outstr += 'tʰ'; 
			series = 1;
			break;
		case '\u178c':  // do
			outstr += 'ɗ'; 
			series = 2;
			break;
		case '\u178d':  // ttho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			series = 2;
			break;
		case '\u178f':  // ta
			outstr += 't'; 
			series = 1;
			break;
		case '\u1790':  // tha
			outstr += 'tʰ'; 
			series = 1;
			break;
		case '\u1791':  // to
			outstr += 't'; 
			series = 2;
			break;
		case '\u1792':  // tho
			outstr += 'tʰ'; 
			series = 2;
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			break;
		case '\u1794':  // ba
			if (syllable.muusikoatan) {
				outstr += 'p';
				}
			else outstr += 'ɓ'; 
			series = 1;
			break;
		case '\u1795':  // pha
			outstr += 'pʰ'; 
			series = 1;
			break;
		case '\u1796':  // po
			outstr += 'p'; 
			series = 2;
			break;
		case '\u1797':  // pho
			outstr += 'pʰ'; 
			series = 2;
			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			break;
		case '\u179a':  // ro
			outstr += 'r'; 
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			break;
		case '\u179c':  // vo
			if (syllable.initialcons[0] == '\u17a0') { outstr += 'f'; } // preceded by h
			else { outstr += 'ʋ';  }
			break;
		case '\u179f':  // sa
			outstr += 's'; 
			series = 1;
			break;
		case '\u17a0':  // ha
			if (syllable.initialcons.length == 1) {
				outstr += 'h'; 
				}
			series = 1;
			break;
		case '\u17a1':  // la
			outstr += 'l'; 
			series = 1;
			break;
		case '\u17a2':  // qa
			outstr += 'aʔ'; 
			series = 1;
			break;
		outstr += character;
		}
		

		// ==================================== Triple clusters  ===================================
		// ==================================== Triple clusters  ===================================
		// ==================================== Triple clusters  ===================================

		if (syllable.initialcons[2]) {
					switch (syllable.initialcons[2]) {  // this is either r in sanskrit or sahstraakaa, or l in ankleeh
					case '\u179a':  // ro
						outstr += 'r';
						break;
					case '\u179b': // la
						outstr += 'l';
						break;
					}
			}
		
		
		// ==================================== Vowels ===================================
		// ==================================== Vowels ===================================
		// ==================================== Vowels ===================================

		var shortvowels = { 'i':'', 'e':'', 'ɨ':'ə', 'a':'', 'ɑ':'', 'u':'', 'o':'' };

		if (syllable.muusikoatan) { series = 1; }
		if (syllable.triisap) { series = 2; }
		switch (syllable.vowel) { 
		case '':  // no vowel
			if (syllable.nikahit) { 
				if ( series == 1)  { vowelsound = 'ɑm'; }
				else { vowelsound = 'um'; }
				}
			else if (syllable.reahmuk) { 
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else { vowelsound = 'eə̆'; }
				}
			else if (syllable.bantok) {
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else if (syllable.finalcons && syllable.finalcons[0] in labials) { vowelsound = 'u'; }
				else { vowelsound = 'uə̆'; }
				}
			else if (syllable.yuukaleapintu) {
				if ( series == 1)  { vowelsound = 'aʔ'; }
				else { vowelsound = 'eə̆ʔ'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ɑː'; }
				else { vowelsound = 'ɔː'; }
				}
			break;
		case '\u17d0':  // samyok sannya
			if (syllable.finalcons && syllable.finalcons[0]  == '\u1799') { // followed by yo
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'ɨ'; }
				}
			else if (syllable.finalcons && syllable.finalcons[0]  == '\u179a') { // followed by ro
				vowelsound = 'ɔə';
				}
			else if (syllable.finalcons && syllable.finalcons[0]  == '\u1784') { // followed by ng
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'eə̆'; }
				}
			else {  
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'oə̆'; }
				}
			break;
		case '\u17b6':  // aa
			if (syllable.nikahit && syllable.finalcons == 'ង') { // nik & ng
				if ( series == 1)  { vowelsound = 'a'; }
				else { vowelsound = 'eə̆'; }
				}
			else if (syllable.nikahit) { // nik 
				if ( series == 1)  { vowelsound = 'am'; }
				else { vowelsound = 'oə̆m'; }
				}
			else if (syllable.bantok) {  
				if ( series == 1)  { vowelsound = 'a'; }
				else if (syllable.finalcons && syllable.finalcons[0] in velars) { vowelsound = 'eə̆'; }
				else { vowelsound = 'oə̆'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'aː'; }
				else { vowelsound = 'iə'; }
				}
			break;
		case '\u17b7':  // i
			if ( series == 1)  { 
				if (syllable.initialcons == '\u17a2') { vowelsound = 'ə'; } // independent vowel
				else { vowelsound = 'e'; }
				}
			else { vowelsound = 'i'; }
			break;
		case '\u17b8':  // ii
			if ( series == 1)  { vowelsound = 'əj'; }
			else { vowelsound = 'iː'; }
			break;
		case '\u17b9':  // y
			if ( series == 1)  { vowelsound = 'ə'; }
			else { vowelsound = 'ɨ'; }
			break;
		case '\u17ba':  // yy
			if ( series == 1)  { vowelsound = 'əɨ'; }
			else { vowelsound = 'ɨː'; }
			break;
		case '\u17bb':  // u
			if (syllable.nikahit) { // with nik 
				if ( series == 1)  { vowelsound = 'om'; }
				else { vowelsound = 'um'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'o'; }
				else { vowelsound = 'u'; }
				}
			break;
		case '\u17bc':  // uu
			if ( series == 1)  { 
				if (syllable.finalcons[0] == '\u179c') { vowelsound = 'ə'; } // followed by vo
				else { vowelsound = 'ou'; }
				}
			else { vowelsound = 'uː'; }
			break;
		case '\u17bd':  // ua
			vowelsound = 'uə'; 
			break;
		case '\u17c1':  // e
			if (syllable.reahmuk) { // with reahmuk 
				if ( series == 1)  { vowelsound = 'e'; }
				else { vowelsound = 'i'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ei'; }
				else { vowelsound = 'eː'; }
				}
			break;
		case '\u17c2':  // ae
			if (syllable.reahmuk && series == 1) { // with reahmuk 
				vowelsound = 'e';
				}
			else {
				if ( series == 1)  { vowelsound = 'ae'; }
				else { vowelsound = 'ɛː'; }
				}
			break;
		case '\u17c3':  // ai
			if ( series == 1)  { vowelsound = 'aj'; }
			else { vowelsound = 'ɨj'; }
			break;
		case '\u17c4':  // oo
			if (syllable.reahmuk) { // with reahmuk 
				if ( series == 1)  { vowelsound = 'ɑ'; }
				else { vowelsound = 'uə̆'; }
				}
			else {
				if ( series == 1)  { vowelsound = 'ao'; }
				else { vowelsound = 'oː'; }
				}
			break;
		case '\u17c5':  // au
			if ( series == 1)  { 
				if (syllable.initialcons == '\u17a2') { vowelsound = 'aw'; } // independent vowel
				else { vowelsound = 'aə'; }
				}
			else { vowelsound = 'ɨw'; }
			break;
		case '\u17be':  // oe
			if (syllable.reahmuk && series == 1) { // with reahmuk 
				vowelsound = 'ə';
				}
			else if ( series == 1)  { vowelsound = 'aw'; }
			else { vowelsound = 'əː'; }
			break;
		case '\u17bf':  // ya
			vowelsound = 'ɨə'; 
			break;
		case '\u17c0':  // ie
			vowelsound = 'iə'; 
			break;
		vowelsound = character;
		
		// Independent vowels
		
		case '\u17A5':  // qi
			vowelsound = 'ʔə'; 
			break;
		case '\u17A6':  // qii
			vowelsound = 'ʔəj'; 
			break;
		case '\u17A7':  // qu
			vowelsound = 'ʔo'; 
			break;
		case '\u17A9':  // quu
			vowelsound = 'ʔou'; 
			break;
		case '\u17AA':  // quuv
			vowelsound = 'ʔəw'; 
			break;
		case '\u17AF':  // qe
			vowelsound = 'ʔae'; 
			break;
		case '\u17b0':  // qai
			vowelsound = 'ʔaj'; 
			break;
		case '\u17b1':  // qoo
			vowelsound = 'ʔao'; 
			break;
		case '\u17b2':  // qoo type 2
			vowelsound = 'ʔao'; 
			break;
		case '\u17b3':  // qau
			vowelsound = 'ʔaw'; 
			break;
		case '\u17AB':  // ry
			vowelsound = 'rɨ'; 
			break;
		case '\u17Ac':  // ryy
			vowelsound = 'rɨː'; 
			break;
		case '\u17Ad':  // ly
			vowelsound = 'lɨ'; 
			break;
		case '\u17Ae':  // lyy
			vowelsound = 'lɨː'; 
			break;
		
		}
		
	if (syllable.presyllable && !(vowelsound in shortvowels) && !syllable.nikahit && !syllable.reahmuk) {
		if ( series == 1)  { vowelsound = 'ɑ'; }
		else { vowelsound = 'ɔ'; }
		}	
	
	outstr += vowelsound;
	
	
	// =============================== Final consonant =================================
	// =============================== Final consonant =================================
	// =============================== Final consonant =================================
	
	var glottalstopproducers = { 'a':'', 'aː':'', 'ɑ':'', 'ɑː':'', 'eə̆':'', 'uə̆':'', 'iə':'', 'ɨə':'', 'uə':''  };
	
	if (syllable.reahmuk) { outstr += 'h' ; }
	
	if (syllable.finalcons == '' && vowelsound in shortvowels && !syllable.presyllable && !syllable.reahmuk && !syllable.nikahit) { outstr += 'ʔ'; }

	
	switch (syllable.finalcons.charAt(0) ) { 
		case 'ក':  // ka
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ខ':  // kha
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'គ':  // ko
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ឃ':  // kho
			if (vowelsound in glottalstopproducers) { outstr += 'ʔ'; }
			else { outstr += 'k'; }
			break;
		case 'ង':  // ngo
			outstr += 'ŋ'; 
			break;
		case '\u1785':  // ca
			outstr += 'c'; 
			break;
		case '\u1787':  // co
			outstr += 'c'; break;
		case '\u1789':  // nyo
			outstr += 'ɲ'; 
			break;
		case '\u178a':  // da
			outstr += 't'; 
			break;
		case '\u178b':  // tha
			outstr += 't'; 
			break;
		case '\u178c':  // do
			outstr += 't'; 
			break;
		case '\u178d':  // ttho
			outstr += 't'; 
			break;
		case '\u178e':  // nno
			outstr += 'n'; 
			break;
		case '\u178f':  // ta
			outstr += 't'; 
			break;
		case '\u1790':  // tha
			outstr += 't'; 
			break;
		case '\u1791':  // to
			outstr += 't'; 
			break;
		case '\u1792':  // tho
			outstr += 't'; 
			break;
		case '\u1793':  // no
			outstr += 'n'; 
			break;
		case '\u1794':  // ba
		 outstr += 'p'; 
			break;
		case '\u1795':  // pha
			outstr += 'p'; 
			break;
		case '\u1796':  // po
			outstr += 'p'; 
 			break;
		case '\u1797':  // pho
			outstr += 'p'; 
 			break;
		case '\u1798':  // mo
			outstr += 'm'; 
			break;
		case '\u1799':  // yo
			outstr += 'j'; 
			break;
		case '\u179a':  // ro
			outstr += ''; 
			break;
		case '\u179b':  // lo
			outstr += 'l'; 
			break;
		case '\u179c':  // vo
			outstr += 'w'; 
			break;
		case '\u179f':  // sa
			outstr += 'h'; 
			break;
		case '\u17a0':  // special rule for brahmin
			if (syllable.finalcons.charAt(1)== '\u1798') { outstr += 'm' }; 
			break;
		outstr += character;
		}
		
	return [outstr, series];
	}
	
	
function transcribeToIPA (temp) {
	temp = temp.replace(/ ¶/, ''); // remove leading and trailing spaces
	temp = temp.replace(/^ */, ''); // remove leading and trailing spaces
	temp = temp.replace(/ *$/, '');
	temp = temp.replace(/\u200B/g, ' '); // convert zwsp to space
	temp = temp.replace(/-/g, '- '); // convert hyphens to hyphen + space
	var syllables = temp.split(' ');
	var outstr = '';
	var vowels = { "\u17B6":'', "\u17B7":'', "\u17B8":'', "\u17B9":'', "\u17BA":'', "\u17BB":'', "\u17BC":'', "\u17BD":'', "\u17C1":'', "\u17C2":'', "\u17C3":'', "\u17C4":'', "\u17C5":'', "\u17BE":'', "\u17BF":'', "\u17C0":'', "\u17d0":''  };
	var independentvowels = { "\u17A5":'', "\u17A6":'', "\u17A7":'', "\u17A9":'', "\u17AA":'', "\u17AF":'', "\u17B0":'', "\u17B1":'', "\u17B2":'', "\u17B3":'', "\u17AB":'', "\u17AC":'', "\u17AD":'', "\u17AE":'' };
	var consonants = { "\u1780":'', "\u1782":'', "\u1781":'', "\u1783":'', "\u1784":'', "\u1785":'', "\u1787":'', "\u1786":'', "\u1788":'', "\u1789":'', "\u178A":'', "\u178C":'', "\u178B":'', "\u178D":'', "\u178E":'', "\u178F":'', "\u1791":'', "\u1790":'', "\u1792":'', "\u1793":'', "\u1794":'', "\u1796":'', "\u1795":'', "\u1797":'', "\u1798":'', "\u1799":'', "\u17A1":'', "\u179B":'', "\u179A":'', "\u179F":'', "\u17A0":'', "\u179C":'', '\u17a2':''};
	var irregularwords = { 'ព្រហ្មណ៍':'prum', 'ព្រាហ្មណ៍':'priəm'  };
	var series = 1;
	var bantok = '\u17cb';
	var robat = '\u17cc';
	var muusikoatan = '\u17c9';
	var triisap = '\u17ca';
	var nikahit = '\u17c6';
	var reahmuk = '\u17c7';
	var coeng = '\u17d2';
	var yuukaleapintu = '\u17c8';
	var virama = '\u17d1';
	var kakabat = '\u17ce';
	var toandakhiat = '\u17cd';
	var ahsda  = '\u17cf';
	vowelHarmony = '';
		
	for (a = 0; a<syllables.length; a++) {
		glyphs = syllables[a];  //alert('>'+glyphs+'<');
		if (glyphs == '') { outstr += ' '; continue; }
	
		// parse syllable constituents
		var vowelposn = 0;
		var infinal = false;
		var syllable = { initialcons: '', vowel:'', vowelposn: 0, robat: false, muusikatoan:false, triisap:false, 
								finalcons:'' , nikahit:false, reahmuk:false , finalcons: '', bantok:false, presyllable:false,
								yuukaleapintu: false, toandakhiat: false  };

		for (var i=0; i<glyphs.length; i++) {
			character = glyphs[i]; //alert(character.charCodeAt(0).toString(16));
			if (character in consonants) {
				//if ( i== 0  || (vowelposn == 0 && coengfound == true)) { syllable.initialcons += character; }
				if ( i== 0  || (infinal == false && glyphs[i-1] == coeng)) { syllable.initialcons += character; }
				else { syllable.finalcons += character; infinal = true; }
				}
			else if (character in vowels) {
				syllable.vowel = character;
				vowelposn = i;
				}
			else if (character in independentvowels) {
				syllable.vowel = character;
				vowelposn = i;
				}
			else if (character == robat) { 
				if (infinal) { syllable.finalcons = ''; }
				else { syllable.robat = true;  }
				}
			else if (character == muusikoatan) { syllable.muusikoatan = true;  }
			else if (character == triisap) { syllable.triisap = true;  }
			else if (character == nikahit) { syllable.nikahit = true;  }
			else if (character == reahmuk) { syllable.reahmuk = true;  }
			else if (character == bantok) { syllable.bantok = true;  }
			else if (character == yuukaleapintu) { syllable.yuukaleapintu = true;  }
			else if (character == toandakhiat) { syllable.toandakhiat = true;  }
			else if (character == '-') { syllable.presyllable = true;  }
			else if (character == coeng) { coengfound = true;   }// alert('coeng found');
			else if (character == virama || character == kakabat || character == toandakhiat || character == ahsda) {  } // do nothing
			else { alert(i+' Unknown character'+character+' '+character.charCodeAt(0).toString(16)); }
			}
		//document.getElementById('latin').value =syllable.initialcons+":"+syllable.finalcons+":"+syllable.vowel;
		//alert(1);
			
		if (!syllable.toandakhiat) { 
			result = convertToIPA(syllable); 
			outstr += result[0]; 
			}
		//alert( 'series'+result[1]);
		
		// record the series for the next syllable if this is the first part of a disyllable
		// this will be used for second syllables starting with liquids to determine the series of that syllable
		// a null string signifies that this is not a presyllable
		if (syllable.presyllable) { vowelHarmony = result[1]; } 
		else { vowelHarmony = ''; }
		// if (! syllable.presyllable) { outstr += ' '; }
		}

	return outstr 
	}
		
	






