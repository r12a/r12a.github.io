function localtranscribe (node, direction, str) {
	
	if (direction == 'toISO') { return dotranscription(str, 'tolatin') }
	if (direction == 'fromISO') { return dotranscription(str, 'fromlatin') }
	}


function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function dotranscription (chstring, direction) {
	if (direction == 'tolatin') {
		output = maptolatn(chstring);
		}
//	else if (direction == 'toipa') {
//		output = maptoipa(chstring);
//		}
	else { 
		chstring = normalise(chstring); 

		// build the output from the map array
    	var output = ''; var latin = ''; var ch;
		for (var i=0; i<chstring.length-1; i++) {
			latin = chstring.charAt(i);
		
			ch = map[latin];
			if (ch) { if (ch !='null') {output += ch;} }
			else { output += latin; }
			}
		}
	return output;
	} 
	
	
var map = {
a:'null',
A:'அ', 
ā:'ா', 
Ā:'ஆ', 
ï:'ை', 
Ï:'ஐ', 
ü:'ௌ', 
Ü:'ஔ', 
e:'ெ', 
E:'எ', 
ē:'ே',
Ē:'ஏ',
i:'ி', 
I:'இ', 
ī:'ீ', 
Ī:'ஈ', 
o:'ொ', 
O:'ஒ', 
ō:'ோ', 
Ō:'ஓ', 
u:'ு', 
U:'உ', 
ū:'ூ', 
Ū:'ஊ', 

c:'ச',
f:'ஃப',
h:'ஹ', 
j:'ஜ', 
k:'க',
l:'ல',
ḷ:'ள',
ḻ:'ழ',
m:'ம', 
n:'ந', 
ṉ:'ன', 
ṇ:'ண', 
ñ:'ஞ', 
ṅ:'ங', 
p:'ப', 
r:'ர', 
ṟ:'ற',  // r uscore
s:'ஸ', 
ś:'ஶ', 
ṣ:'ஷ', 
t:'த', 
ṭ:'ட', 
v:'வ', 
y:'ய', 
z:'ஃஜ',


//candrabindu: 'ँ',
//µ:'null', // was colon separator for disambiguation
//virama:'്'

}

function normalise (chstring) {
	// converts two or more letters per transcription unit into single units corresponding
	// to the map list above; converts t units to independent vowels
	
	// replace all two character sequences
	chstring = chstring.replace(/ai/g,'ï');
	chstring = chstring.replace(/au/g,'ü');

	// check for and convert independent vowels
	var vowels = { 'a':'', 'ā':'', 'e':'', 'ē':'', 'i':'',
		'ī':'', 'o':'', 'ō':'', 'ï':'', 'ü':'', 'ŭ':'',
		'u':'', 'ū':'', 'ŗ':'' };

	var output = '';
	for (i=0; i<chstring.length; i++) {
		if (chstring.charAt(i) in vowels) {
			if (i==0 || chstring.charAt(i-1) in vowels || chstring.charAt(i-1) == ' ' ) {
				output += chstring.charAt(i).toUpperCase();   
				}
			else { output += chstring.charAt(i); }
			}
		else { output += chstring.charAt(i); }
		}
		
	// handle conjuncts by putting a virama between them
	var consonants = { 
	'p':'', 't':'', 'ṭ':'', 'c':'', 'k':'', 'q':'',
	'b':'', 'd':'', 'ḍ':'', 'j':'', 'g':'', 'ṯ':'', 
	'P':'', 'T':'', 'Ṭ':'', 'C':'', 'K':'', 
	'B':'', 'D':'', 'Ḍ':'', 'J':'', 'G':'', 
	'v':'', 's':'', 'z':'', 'f':'', 'Ḵ':'', 'ǥ':'',
	'ś':'', 'ṣ':'', 'ḷ':'', 'h':'', 
	'm':'', 'ṃ':'', 'n':'', 'ṉ':'', 'ṇ':'', 'ñ':'',
	'ṅ':'', 'r':'', 'Ṛ':'', 'ṛ':'', 'ṟ':'', 'l':'', 
	'ḷ':'', 'ḻ':'', 'y':'' 
	};

	var withConjuncts = ''; var ch='';
	for (var i=0; i<output.length; i++) {
		ch = output.charAt(i);
		if (i>0 && ch in consonants && (output.charAt(i+1) in consonants || output.charAt(i+1) == ' ')) {
			withConjuncts += ch+'்';
			}
		else { withConjuncts += ch; }
		}
	
	return withConjuncts;
	}


function maptolatn (chstring) {
					
	var consonants = { 
	'க':'', 'ங':'', 'ச':'', 'ஞ':'', 'ட':'', 'ண':'',
	'த':'', 'ந':'', 'ப':'', 'ம':'', 'ய':'', 'ர':'', 
	'ல':'', 'வ':'', 'ழ':'', 'ள':'', 'ற':'', 
	'ன':'', 'ஶ':'', 'ஜ':'', 'ஷ':'', 'ஸ':'', 
	'ஹ':''
	}; 
	var indvowels = { 
	'அ':'', 'ஆ':'', 'இ':'', 'ஈ':'', 'உ':'', 'ஊ':'',
	'எ':'', 'ஏ':'', 'ஐ':'', 'ஒ':'', 'ஓ':'', 'ஔ':'' 
	}; 
	
	// add inherent vowels
	var withConjuncts = ''; var ch='';
	for (var i=0; i<chstring.length-1; i++) {
		ch = chstring.charAt(i);
		if (i<chstring.length-1 && chstring.charAt(i) in consonants && (chstring.charAt(i+1) in consonants || chstring.charAt(i+1) in indvowels)) {
			withConjuncts += ch+'a';
			}
		else { withConjuncts += ch; }
		}

	chstring = withConjuncts;
	chstring = chstring.replace(/ஃப/g,'f'); 
	chstring = chstring.replace(/ஃஜ/g,'z'); 
	chstring = chstring.replace(/அ/g,'a'); 
	chstring = chstring.replace(/ா/g,'ā'); 
	chstring = chstring.replace(/ആ/g,'ā'); 
	chstring = chstring.replace(/ை/g,'ai'); 
	chstring = chstring.replace(/ஐ/g,'ai'); 
	chstring = chstring.replace(/ௌ/g,'au'); 
	chstring = chstring.replace(/ஔ/g,'au'); 
	chstring = chstring.replace(/ெ/g,'e'); 
	chstring = chstring.replace(/எ/g,'e'); 
	chstring = chstring.replace(/ே/g,'ē');
	chstring = chstring.replace(/ஏ/g,'ē');
	chstring = chstring.replace(/ி/g,'i'); 
	chstring = chstring.replace(/இ/g,'i'); 
	chstring = chstring.replace(/ீ/g,'ī'); 
	chstring = chstring.replace(/ஈ/g,'ī'); 
	chstring = chstring.replace(/ொ/g,'o'); 
	chstring = chstring.replace(/ஒ/g,'o'); 
	chstring = chstring.replace(/ோ/g,'ō'); 
	chstring = chstring.replace(/ஓ/g,'ō'); 
	chstring = chstring.replace(/ு/g,'u'); 
	chstring = chstring.replace(/உ/g,'u'); 
	chstring = chstring.replace(/ூ/g,'ū'); 
	chstring = chstring.replace(/ஊ/g,'ū'); 

	chstring = chstring.replace(/ச/g,'c'); 
	chstring = chstring.replace(/ஹ/g,'h'); 
	chstring = chstring.replace(/ஜ/g,'j'); 
	chstring = chstring.replace(/க/g,'k');
	chstring = chstring.replace(/ல/g,'l');
	chstring = chstring.replace(/ள/g,'ḷ');
	chstring = chstring.replace(/ழ/g,'ḻ');
	chstring = chstring.replace(/ம/g,'m'); 
	chstring = chstring.replace(/ந/g,'n'); 
	chstring = chstring.replace(/ன/g,'ṉ'); 
	chstring = chstring.replace(/ண/g,'ṇ'); 
	chstring = chstring.replace(/ஞ/g,'ñ'); 
	chstring = chstring.replace(/ங/g,'ṅ'); 
	chstring = chstring.replace(/ப/g,'p'); 
	chstring = chstring.replace(/ர/g,'r'); 
	chstring = chstring.replace(/ற/g,'ṟ');  // r uscore
	chstring = chstring.replace(/ஸ/g,'s'); 
	chstring = chstring.replace(/ஶ/g,'ś'); 
	chstring = chstring.replace(/ஷ/g,'ṣ'); 
	chstring = chstring.replace(/த/g,'t'); 
	chstring = chstring.replace(/ட/g,'ṭ'); 
	chstring = chstring.replace(/வ/g,'v'); 
	chstring = chstring.replace(/ய/g,'y'); 

	chstring = chstring.replace(/௦/g,'0');
	chstring = chstring.replace(/௧/g,'1');
	chstring = chstring.replace(/௨/g,'2');
	chstring = chstring.replace(/௩/g,'3');
	chstring = chstring.replace(/௪/g,'4');
	chstring = chstring.replace(/௫/g,'5');
	chstring = chstring.replace(/௬/g,'6');
	chstring = chstring.replace(/௭/g,'7');
	chstring = chstring.replace(/௮/g,'8');
	chstring = chstring.replace(/௯/g,'9');

	chstring = chstring.replace(/௰/g,'(x10)');
	chstring = chstring.replace(/௱/g,'(x100)');
	chstring = chstring.replace(/௲/g,'(x1000)');
	chstring = chstring.replace(/௺/g,'<number sign>');
	chstring = chstring.replace(/௹/g,'<rupee sign>');
	chstring = chstring.replace(/௳/g,'<day sign>');
	chstring = chstring.replace(/௴/g,'<month sign>');
	chstring = chstring.replace(/௵/g,'<year sign>');


candrabindu = 'ँ',
chstring = chstring.replace(/null/g,'µ'); // was colon separator for disambiguation
virama:'്';

	// remove the viramas
	chstring = chstring.replace(/்/g,'');


	return chstring;
	}
