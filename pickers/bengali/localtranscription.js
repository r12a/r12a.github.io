function localtranscribe (direction, str) {
	
	if (direction == 'rtoBeng') { return radiceToBengali(str) }
	if (direction == 'toBeng') { return isoToBengali(str) }
	if (direction == 'toISO') { return bengaliToISO(str) }
	if (direction == 'toRadice') { return bengaliToRadice(str) }
	}


function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}




function bengaliToRadice (str) { 

	var inherentvowelkillers = '\u09CD\u09BE\u09BF\u09C0\u09C1\u09C2\u09C3\u09C7\u09C8\u09CB\u09CC\u09C4\u09E2\u09E3'
	//var consonants = 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৰৱ'
	var consonants = { 'ক':'','খ':'','গ':'','ঘ':'','ঙ':'','চ':'','ছ':'','জ':'','ঝ':'','ঞ':'','ট':'','ঠ':'','ড':'','ঢ':'','ণ':'','ত':'','থ':'','দ':'','ধ':'','ন':'','প':'','ফ':'','ব':'','ভ':'','ম':'','য':'','র':'','ল':'','শ':'','ষ':'','স':'','হ':'','ড়':'','ঢ়':'','য়':'','ৰ':'','ৱ':'' }
	var aspiratedconsonants = 'খঘছঝঠঢথধফভ'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		inherent = false
		ambiguous = false
		ch = str.charAt(i)
		next = str.charAt(i+1)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u09CD' && inSet(aspiratedconsonants, next) && next == 'হ')  {
			ambiguous = true
			}
		if ((next == 'इ' || next == 'उ') && inSet(consonants, ch) )  {
			ambiguous = true
			}

		// absorb nuktas
		if (next == '\u09BC') { 
			ch += next
			i++
			next = str.charAt(i+1)
			}
		
		// add inherent vowel
		if (ch in consonants && ! (inSet(inherentvowelkillers, next))) { inherent = true }
		
		// deal with bo phola
		if (ch == 'ব' && str.charAt(i-1) == '\u09CD') { ch = '\u09CDব' }
		
		// yo phola
		if (ch == '\u09AF' && str.charAt(i-1) == '\u09CD') { 
			if (next == '\u09BE') { // before a
				ch = '[æ|ya{yæ]'
				i++
				}
			else if (next in consonants) {
				ch = 'y'
				inherent = false
				}
			}
		
		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, next)) { 
				ch = '̃'
				}
			else if (str.charAt(i) == '\u0902') {
				ch = '<span class=alts><span class=altfirst>&nbsp;̃</span><span class=alt>'
				if ('कखगघङ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṅ' }
				else if ('चछजझञ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ñ' }
				else if ('टठडढण'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṇ' }
				else if ('तथदधन'.indexOf(str.charAt(i+1)) > -1) { ch += 'n' }
				else if ('पफबभम'.indexOf(str.charAt(i+1)) > -1) { ch += 'm' }
				else { ch += 'ṁ' }	
				ch += '</span><span class=altlast>ṁ</span></span>'
				}
			}
		
		
		if (typeof mapToRadice[ch] != 'undefined') { out += mapToRadice[ch] }
		else { out += ch }
		if (inherent) {
			if (str.charAt(i-1) && str.charAt(i-1)=='\u09CD') out += 'ô'
			else if (next == ' ' || next=='/') out += '[ɔ|ô{∅]'
			else out += '[ɔ{ô]' 
			}
		if (ambiguous) { out += ':' }
		}

	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')
	out = out.replace(/¶/g,'')

	return out.replace(/ ¶/,'')
	}



var mapToRadice = {
'া':'a',
'আ':'a', 
'ে':'[e{æ]', 
'এ':'[e{æ]', 
'ি':'i', 
'ই':'i', 
'ী':'ī', 
'ঈ':'ī', 
'ো':'o', 
'ও':'o', 
'অ':'ô', 
'ৈ':'oĭ', 
'ঐ':'oĭ', 
'ৌ':'oŭ', 
'ঔ':'oŭ', 
'অ':'[ɔ{ô]', 
'ু':'u', 
'উ':'u', 
'ূ':'ū', 
'ঊ':'ū', 
'ৃ':'ṛ', 
'ঋ':'ṛ',  

'প':'p', 
'ত':'t', 
'ৎ':'ṯ', 
'ট':'ʈ', 
'চ':'c', 
'ক':'k', 
'\u09CDব':'[b{v]', 
'ব':'b', 
'দ':'d', 
'ড':'ɖ', 
'জ':'j', 
'গ':'g', 
'ফ':'ph', 
'থ':'th', 
'ঠ':'ʈh', 
'ছ':'ch', 
'খ':'kh', 
'ভ':'bh', 
'ধ':'dh', 
'ঢ':'ɖh', 
'ঝ':'jh', 
'ঘ':'gh', 

'স':'s', 
'শ':'ʃ', 
'ষ':'ʂ', 
'হ':'h', 
'ঃ':'ḥ', 
'ম':'m', 
'ং':'ɱ', 
'ন':'n', 
'ণ':'ɳ', 
'ঞ':'ñ', 
'ঙ':'ŋ', 
'ঁ':'\u0303',

'ড়':'ɽ', 
'\u09DC':'ɽ', 
'ঢ়':'ɽh', 
'\u09DD':'ɽh', 
'র':'r', 
'ল':'l', 
'য়':'y', 
'\u09DF':'y', 
'য':'y̌', 

'\u09CD':''

}






function bengaliToISO (str) { 

	var inherentvowelkillers = '\u09CD\u09BE\u09BF\u09C0\u09C1\u09C2\u09C3\u09C7\u09C8\u09CB\u09CC\u09C4\u09E2\u09E3'
	//var consonants = 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৰৱ'
	var consonants = { 'ক':'','খ':'','গ':'','ঘ':'','ঙ':'','চ':'','ছ':'','জ':'','ঝ':'','ঞ':'','ট':'','ঠ':'','ড':'','ঢ':'','ণ':'','ত':'','থ':'','দ':'','ধ':'','ন':'','প':'','ফ':'','ব':'','ভ':'','ম':'','য':'','র':'','ল':'','শ':'','ষ':'','স':'','হ':'','ড়':'','ঢ়':'','য়':'','ৰ':'','ৱ':'' }
	var aspiratedconsonants = 'খঘছঝঠঢথধফভ'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		inherent = false
		ambiguous = false
		ch = str.charAt(i)
		next = str.charAt(i+1)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u09CD' && inSet(aspiratedconsonants, next) && next == 'হ')  {
			ambiguous = true
			}
		if ((next == 'ই' || next == 'উ') && (ch in consonants) )  {
			ambiguous = true
			}

		// absorb nuktas
		if (next == '\u09BC') { 
			ch += next
			i++
			next = str.charAt(i+1)
			}
		
		// add inherent vowel
		if (ch in consonants && ! (inSet(inherentvowelkillers, next))) { inherent = true }
		
		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, next)) { 
				ch = '̃'
				}
			else if (str.charAt(i) == '\u0902') {
				ch = '<span class=alts><span class=altfirst>&nbsp;̃</span><span class=alt>'
				if ('कखगघङ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṅ' }
				else if ('चछजझञ'.indexOf(str.charAt(i+1)) > -1) { ch += 'ñ' }
				else if ('टठडढण'.indexOf(str.charAt(i+1)) > -1) { ch += 'ṇ' }
				else if ('तथदधन'.indexOf(str.charAt(i+1)) > -1) { ch += 'n' }
				else if ('पफबभम'.indexOf(str.charAt(i+1)) > -1) { ch += 'm' }
				else { ch += 'ṁ' }	
				ch += '</span><span class=altlast>ṁ</span></span>'
				}
			}
		
		
		if (typeof mapToISO[ch] != 'undefined') { out += mapToISO[ch] }
		else { out += ch }
		if (inherent) {
			if (next == ' ' || next=='/') out += '[a{∅]'
			else out += 'a' 
			}
		if (ambiguous) { out += ':' }
		}

	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')
	out = out.replace(/¶/g,'')

	return out.replace(/ ¶/,'')
	}



var mapToISO = {
'অ':'a', 
'া':'ā', 
'আ':'ā', 
'ৈ':'ai', 
'ঐ':'ai', 
'ৌ':'au', 
'ঔ':'au', 
'ে':'ē', 
'এ':'ē', 
'ি':'i', 
'ই':'i', 
'ী':'ī', 
'ঈ':'ī', 
'ো':'ō', 
'ও':'ō', 
'ু':'u', 
'উ':'u', 
'ূ':'ū', 
'ঊ':'ū', 
'ৃ':'r̥', 
'ঋ':'r̥',  
'ৄ':'r̥̄',
'ৠ':'r̥̄',
'ৢ':'l̥',
'ঌ':'l̥',
'ৣ':'l̥̄',
'ৡ':'l̥̄',


'প':'p', 
'ত':'t', 
'ৎ':'ṯ', 
'ট':'ṭ', 
'চ':'c', 
'ক':'k', 
'খ':'kh', 
'ব':'b', 
'দ':'d', 
'ড':'ḍ', 
'জ':'j', 
'গ':'g', 
'ফ':'ph', 
'থ':'th', 
'ঠ':'ṭh', 
'ছ':'ch', 
'ভ':'bh', 
'ধ':'dh', 
'ঢ':'ḍh', 
'ঝ':'jh', 
'ঘ':'gh', 

'স':'s', 
'শ':'ś', 
'ষ':'ṣ', 
'হ':'h', 
'ঃ':'ḥ', 
'ম':'m', 
'ং':'ṁ', 
'ন':'n', 
'ণ':'ṇ', 
'ঞ':'ñ', 
'ঙ':'ṅ', 
'ঁ':'mঁ',

'ড়':'ṛ', 
'ঢ়':'ṛh', 
'র':'r', 
'ল':'l', 
'য়':'ẏ', 
'য':'y', 

'ৱ':'v',
'ক়':'q',
'খ়':'k͟h',
'গ়':'ġ',
'জ়':'z',
'ফ়':'f',
'ব়':'w',

'ঽ':'\'',
'্':''

}



function isoToBengali (str) { 

	var canHaveAspiration = { 'p':'','t':'','ṭ':'','c':'','k':'', 
		'b':'', 'd':'', 'ḍ':'', 'j':'', 'g':'','ɽ':'' };
	var vowels = { 'a':'', 'ā':'', 'ai':'','au':'','ē':'', 'i':'', 'ī':'', 
		'o':'', 'ɔ':'', 'u':'', 'ū':'', 'Ṛ':'', 'Ṝ':'','Ḷ':'','Ḹ':'' };
	var consonants = { 'k':'','kh':'','g':'','gh':'','ṅ':'','c':'','ch':'','j':'','jh':'','ñ':'','ṭ':'','ṭh':'','ḍ':'','ḍh':'','ṇ':'','t':'','th':'','d':'','dh':'','n':'','p':'','ph':'','b':'','bh':'','m':'','y':'','r':'','l':'','ś':'','ṣ':'','s':'','h':'','ẏ':'','ৰ':'','v':'' }
    var output = '' 
	var ch = ''
	for (var i=0; i<str.length-1; i++) {
		var conjunct = false
		ch = str.charAt(i)
		next = str.charAt(i+1)
		
		// convert all vocalics to a single character
		str = str.replace(/r̥/g,'Ṛ')
		str = str.replace(/r̥̄/g,'Ṝ')
		str = str.replace(/l̥/g,'Ḷ')
		str = str.replace(/l̥̄/g,'Ḹ')
		str = str.replace(/mঁ/g,'M')
		
		// double independent vowels
		if (ch in vowels) {
			if (str.charAt(i-1) == ' ' || str.charAt(i-1) in vowels) {
				ch += ch    //.toUpperCase()
				}
			}
			
		// absorb h for aspiration
		if (ch in canHaveAspiration && next=='h') {
			ch += 'h'
			i++
			next = str.charAt(i+1)
			}
		
		// absorb whole diphthongs	
		if (ch=='a' && next=='i') {
			ch += 'i'
			i++
			next = str.charAt(i+1)
			}
		if (ch=='a' && next=='u') {
			ch += 'u'
			i++
			next = str.charAt(i+1)
			}
			
		if (ch=='̃') {
			ch = 'candrabindu'
			}
		if (ch=='͟') {
			ch = 'virama'
			}
		
		// check for conjuncts
		if (ch in consonants && next in consonants) 	conjunct = true
		//console.log('ch',ch,'next',next,'conjunct',conjunct)
			
		var out = isomap[ch]
		if (conjunct) out += '\u09CD'
		if (out) { if (out !='null') {output += out} }
		else { output += ch }
		}
	 
	return output.replace(/ ¶/,'')
	}


var isomap = {
a:'null',
aa:'অ', 
ā:'া', 
āā:'আ', 
ai:'ে', 
aai:'ঐ', 
au:'ৌ', 
aau:'ঔ', 
ē:'ে', 
ēē:'এ', 
i:'ি', 
ii:'ই', 
ī:'ী', 
īī:'ঈ', 
ō:'ো', 
ōō:'ও', 
ɔ:'null', 
u:'ু', 
uu:'উ', 
ū:'ূ', 
ūū:'ঊ', 
Ṛ:'ৃ', 
ṚṚ:'ঋ',  
Ṝ:'ৄ',
ṜṜ:'ৠ',
Ḷ:'ৢ',
ḶḶ:'ঌ',
Ḹ:'ৣ',
ḸḸ:'ৡ',


p:'প', 
t:'ত', 
ṯ:'ৎ', 
ṭ:'ট', 
c:'চ', 
k:'ক', 
kh:'খ', 
b:'ব', 
d:'দ', 
ḍ:'ড', 
j:'জ', 
g:'গ', 
ph:'ফ', 
th:'থ', 
ṭh:'ঠ', 
ch:'ছ', 
bh:'ভ', 
dh:'ধ', 
ḍh:'ঢ', 
jh:'ঝ', 
gh:'ঘ', 

s:'স', 
ś:'শ', 
ṣ:'ষ', 
h:'হ', 
ḥ:'ঃ', 
m:'ম', 
ṁ:'ং', 
n:'ন', 
ṇ:'ণ', 
ñ:'ঞ', 
ṅ:'ঙ', 
M:'ঁ',

ṛ:'ড়', 
ṛh:'ঢ়', 
r:'র', 
l:'ল', 
ẏ:'য়', 
y:'য', 

v:'ৱ',
q:'ক়',
'k͟h':'খ়',
ġ:'গ়',
z:'জ়',
f:'ফ়',
w:'ব়',

'\'':'ঽ',
virama:'্'

}


function radiceToBengali (chstring) { 

	// add an X to avoid breaking on lookahead; if no selection, try whole field; if still nothing, abort
	chstring = chstring.toLowerCase()+'X';
	if (chstring=='X') { chstring = node.value.toLowerCase()+'X'; }
	if (chstring=='X') { return; }

	var canHaveAspiration = { '\u0070':'','\u0074':'','\u0288':'','\u0063':'','\u006B':'', 
		'\u0062':'', '\u0064':'', '\u0256':'', '\u006A':'', '\u0067':'','ɽ':'' };
	var vowels = { 'a':'', 'æ':'', 'e':'', 'i':'', 'ī':'', 
		'o':'', 'ô':'', 'oĭ':'', 'oŭ':'', 'ɔ':'',
		'u':'', 'ū':'', 'ṛ':'', 'ĭ':'', 'ŭ':'' };
    var output = ''; var latin = '';
	for (var i=0; i<chstring.length-1; i++) {
		latin = chstring.charAt(i);
		if (chstring.charAt(i) in vowels) {
			if (i==0 || chstring.charAt(i-1) in vowels) {
				latin += latin;    //.toUpperCase();
				}
			}
		if (latin in canHaveAspiration && chstring.charAt(i+1)=='h') {
			latin += 'h';
			i++;
			}
		if ((latin=='o' || latin=='oo') && chstring.charAt(i+1)=='ĭ') {
			latin += 'ĭ';
			i++;
			}
		if ((latin=='o' || latin=='oo') && chstring.charAt(i+1)=='ŭ') {
			latin += 'ŭ';
			i++;
			}
		if (latin=='y' && chstring.charAt(i+1)=='\u030C') {
			latin += 'y̌';
			i++;
			}
		if (latin=='̃') {
			latin = 'candrabindu';
			}
		if (latin=='͟') {
			latin = 'virama';
			}
		
		var ch = map[latin];
		if (ch) { if (ch !='null') {output += ch;} }
		else { output += latin; }
		}
	//document.getElementById('latin').value = output;
	//node.value = node.value+' '+output;
	 
	return output.replace(/ ¶/,'')
	}




var map = {
'a':'া',
'aa':'আ', 
'æ':'ে', 
'ææ':'এ', 
'e':'ে', 
'ee':'এ', 
'i':'ি', 
'ii':'ই', 
'ī':'ী', 
'īī':'ঈ', 
'o':'ো', 
'oo':'ও', 
'ô':'null', 
'ôô':'অ', 
'oĭ':'ে', 
'ooĭ':'এ', 
'oŭ':'ৌ', 
'ooŭ':'ঔ', 
'ɔ':'null', 
'ɔɔ':'অ', 
'u':'ু', 
'uu':'উ', 
'ū':'ূ', 
'ūū':'ঊ', 
'ṛ':'ৃ', 
'ṛṛ':'ঋ',  

'p':'প', 
't':'ত', 
'ṯ':'ৎ', 
'ʈ':'ট', 
'c':'চ', 
'k':'ক', 
'b':'ব', 
'd':'দ', 
'ɖ':'ড', 
'j':'জ', 
'g':'গ', 
'ph':'ফ', 
'th':'থ', 
'ʈh':'ঠ', 
'ch':'ছ', 
'kh':'খ', 
'bh':'ভ', 
'dh':'ধ', 
'ɖh':'ঢ', 
'jh':'ঝ', 
'gh':'ঘ', 

'v':'ব', 
's':'স', 
'ʃ':'শ', 
'ʂ':'ষ', 
'h':'হ', 
'ḥ':'ঃ', 
'm':'ম', 
'ɱ':'ং', 
'n':'ন', 
'ɳ':'ণ', 
'ɲ':'ঞ', 
'ŋ':'ঙ', 
'candrabindu':'ঁ',

'ɽ':'ড়', 
'ɽh':'ঢ়', 
'r':'র', 
'l':'ল', 
'y':'য়', 
'y̌':'য', 

'virama':'্'

}

