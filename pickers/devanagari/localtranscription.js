function localtranscribe (node, direction, str) {
	
	if (direction == 'toISO15919') { return toISO15919(node, direction, str) }
	if (direction == 'toDeva') { return toDeva(node, direction, str) }
	}
		
		
function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toISO15919 (node, direction, str) {
	var inherentvowelkillers = '\u093E\u093F\u0940\u0941\u0942\u0956\u0957\u0943\u0944\u0962\u0963\u0945\u0946\u0947\u0948\u0949\u094A\u094B\u094C\u094F\u093A\u093B\u094E\u094D\u0955 X\u093C'
	var consonants = 'कखगघङक़ख़चछजझञग़ऩटठडढणड़ढ़तथदधनऱय़पफबभमळऴयरलवफ़ज़शषसहॹॺॻॼॾॿ\u093C'
	var aspiratedconsonants = 'कचटतपयशगजडदबलसड़'
	var punctuation = ',.?\'" ।॥॰'

	var out=''
	for (var i=0; i<str.length-2; i++) {
		inherent = false
		ambiguous = false
		ch = str.charAt(i)
		
		// check for ambiguity, eg. b+h, or a+i
		if (ch == '\u094D' && inSet(aspiratedconsonants, str.charAt(i-1)) && str.charAt(i+1) == 'ह')  {
			ambiguous = true
			}
		if ((str.charAt(i+1) == 'इ' || str.charAt(i+1) == 'उ') && inSet(consonants, ch) )  {
			ambiguous = true
			}
		
		// add inherent vowel
		if ((inSet(consonants, ch)) && ! (inSet(inherentvowelkillers, str.charAt(i+1)))) { inherent = true }
		
		// absorb nuktas
		if (str.charAt(i+1) == '\u093C') { 
			ch += str.charAt(i+1)
			i++
			}

		// anusvara
		if (ch == '\u0902') {
			if (inSet(punctuation, str.charAt(i+1))) { 
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
		if (inherent) { out += 'a' }
		if (ambiguous) { out += ':' }
		}

	return out
	}


var mapToISO = {
'\u0915':'k', 
'\u0916':'kh', 
'\u0917':'g', 
'\u0918':'gh', 
'\u0919':'ṅ', 
'\u0915\u093C':'q', 
'\u0916\u093C':'k͟h', 
'\u091A':'c', 
'\u091B':'ch', 
'\u091C':'j', 
'\u091D':'jh', 
'\u091E':'ñ', 
'\u0917\u093C':'ġ', 
'\u0929':'ṉ', 
'\u091F':'ṭ', 
'\u0920':'ṭh', 
'\u0921':'ḍ', 
'\u0922':'ḍh', 
'\u0923':'ṇ', 
'\u0921\u093C':'ṛ', 
'\u0922\u093C':'ṛh', 
'\u0924':'t', 
'\u0925':'th', 
'\u0926':'d', 
'\u0927':'dh', 
'\u0928':'n', 
'\u0931':'ṟ', 
'\u092F\u093C':'ẏ', 
'\u092A':'p', 
'\u092B':'ph', 
'\u092C':'b', 
'\u092D':'bh', 
'\u092E':'m', 
'\u0933':'ḷ', 
'\u0934':'ḻ', 
'\u092F':'y', 
'\u0930':'r', 
'\u0932':'l', 
'\u0935':'v', 
'\u092B\u093C':'f', 
'\u091C\u093C':'z', 
'\u0936':'ś', 
'\u0937':'ṣ', 
'\u0938':'s', 
'\u0939':'h', 
'\u0979':'', '\u097A':'', 
'\u097B':'ɠ', 
'\u097C':'ʄ', 
'\u097E':'ɗ', 
'\u097F':'ɓ',

// vowel signs
'\u093E':'ā', 
'\u093F':'i', 
'\u0940':'ī', 
'\u0941':'u', 
'\u0942':'ū', 
'\u0956':'?', 
'\u0957':'?', 
'\u0943':'r̥', 
'\u0944':'r̥', 
'\u0962':'r̥̄', 
'\u0963':'l̥', 
'\u0945':'ê', 
'\u0946':'e', 
'\u0947':'ē', 
'\u0948':'ai', 
'\u0949':'ô', 
'\u094A':'o', 
'\u094B':'ō', 
'\u094C':'au', 
'\u094F':'?', '\u093A':'?', '\u093B':'?', '\u094E':'?', 

// independent vowels
'ऄ':'?', 
'अ':'a', 
'आ':'ā', 
'इ':'i', 
'ई':'ī', 
'उ':'u', 
'ऊ':'ū', 
'ॶ':'?', 'ॷ':'?', 
'ऋ':'r̥', 
'ॠ':'r̥̄', 
'ऌ':'l̥', 
'ॡ':'l̥̄', 
'ॲ':'â', 
'ऍ':'ê', 
'ऎ':'e', 
'ए':'ē', 
'ऐ':'ai', 
'ऑ':'ô', 
'ऒ':'o', 
'ओ':'ō', 
'औ':'au', 
'ॵ':'?', 'ॳ':'?', 'ॴ':'?',

//virama
'\u094D':'',

// candrabindu
'\u0901':'\u0303',

// punctuation
'।':'.',
'\u093D':'\'' ,
'\u0903':'ḥ',

// numbers
'०': '0',
'१': '1', 
'२': '2', 
'३': '3', 
'४': '4', 
'५': '5', 
'६': '6', 
'७': '7', 
'८': '8', 
'९': '9' 

}


function toDeva (node, direction, str) {

	var consonants = 'kgṉcjñṭḍtdnṇpqbmyrvśṣshlXṛṚṟẏḷḻfzɠʄɗɓġ'
	var aspiratedconsonants = 'kgcjṭḍtdpbṛ'
	var vowels = 'aāiīuūeēoōɛʊȓřɫḹ'
	var highvowels = 'īɛoōuॕeēoōʊ'
	var nasals = 'ṉñnmṅ'
	
	var out=''
	str = ' '+str
	str = str.replace(/ã/g,'a\u0303')
	str = str.replace(/ĩ/g,'i\u0303')
	str = str.replace(/ũ/g,'u\u0303')
	str = str.replace(/ẽ/g,'e\u0303')
	str = str.replace(/õ/g,'o\u0303')
	str = str.replace(/aĩ/g,'ai\u0303')
	str = str.replace(/aũ/g,'au\u0303')
	str = str.replace(/ai/g,'ɛ')
	str = str.replace(/au/g,'ʊ')
	str = str.replace(/k͟h/g,'X')
	str = str.replace(/r̥̄/g,'ř')
	str = str.replace(/r̥/g,'ȓ')
	str = str.replace(/l̥̄/g,'ḹ')
	str = str.replace(/l̥/g,'ɫ')
	
	for (var i=1; i<str.length-2; i++) {
		ch = str.charAt(i)
		conjunct = false
		skipOne = false
		
		// conjuncts
		//if (consonants.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i+1)) > -1  && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && inSet(consonants, str.charAt(i+1)) && str.charAt(i+1) != 'h') { conjunct = true }
		if (inSet(consonants, ch) && str.charAt(i+1) == ':') { conjunct = true }
		
		// aspirated consonants
		if (aspiratedconsonants.indexOf(ch) > -1 && str.charAt(i+1) == 'h') { 
			ch = ch.toUpperCase() 
			skipOne = true
			}
		
		// upper case vowel signs, lowercase independent vowels
		if (inSet(vowels, ch) && inSet(consonants, str.charAt(i-1)) ) { 
			ch = ch.toUpperCase()
			}
		
		// candrabindu vs anusvara
		if (str.charAt(i) == '\u0303' && highvowels.indexOf(str.charAt(i-1)) > -1) {
			ch = '\u0902'
			}
		else if (str.charAt(i) == '\u0303') { ch = '\u0901' }
		
		// anusvara before conjunct
		if (nasals.indexOf(ch) > -1 && consonants.indexOf(str.charAt(i-1)) == -1 && consonants.indexOf(str.charAt(i+1)) > -1 ) {
			switch (ch) {
				case 'ṅ': ch = 'ङ\u094D'; break
				case 'ñ': ch = 'ञ\u094D'; break
				case 'ṇ': ch = 'ण\u094D'; break
				case 'n': ch = 'न\u094D'; break
				case 'm': ch = 'म\u094D'; break
				}
			ch = '<span class=alts><span class=altfirst>&nbsp;\u0902</span><span class=altlast>'+ch+'</span></span>'
			conjunct = false
			}
		
		if (typeof mapToDeva[ch] != 'undefined') { out += mapToDeva[ch] }
		else { out += ch }
		if (conjunct) { out += '\u094D' }
		if (skipOne) { i++ }
		}

	return out
	}


var mapToDeva = {
'k': '\u0915', 
'K': '\u0916', 
'g': '\u0917', 
'G': '\u0918', 
'ṅ': '\u0919', 
'q': '\u0915\u093C', 
'X': '\u0916\u093C', 
'c': '\u091A', 
'C': '\u091B', 
'j': '\u091C', 
'J': '\u091D', 
'ñ': '\u091E', 
'ġ': '\u0917\u093C', 
'ṉ': '\u0929', 
'ṭ': '\u091F', 
'Ṭ': '\u0920', 
'ḍ': '\u0921', 
'Ḍ': '\u0922', 
'ṇ': '\u0923', 
'ṛ': '\u0921\u093C', 
'Ṛ': '\u0922\u093C', 
't': '\u0924', 
'T': '\u0925', 
'd': '\u0926', 
'D': '\u0927', 
'n': '\u0928', 
'ṟ': '\u0931', 
'ẏ': '\u092F\u093C', 
'p': '\u092A', 
'P': '\u092B', 
'b': '\u092C', 
'B': '\u092D', 
'm': '\u092E', 
'ḷ': '\u0933', 
'ḻ': '\u0934', 
'y': '\u092F', 
'r': '\u0930', 
'l': '\u0932', 
'v': '\u0935', 
'f': '\u092B\u093C', 
'z': '\u091C\u093C', 
'ś': '\u0936', 
'ṣ': '\u0937', 
's': '\u0938', 
'h': '\u0939', 
'?': '\u0979', '?': '\u097A', 
'ɠ': '\u097B', 
'ʄ': '\u097C', 
'ɗ': '\u097E', 
'ɓ': '\u097F',


'A': '',
'Ā': '\u093E',
'I': '\u093F',
'Ī': '\u0940',
'U': '\u0941',
'Ū': '\u0942',
'?': '\u0956',
'?': '\u0957',
'Ȓ': '\u0943',
'Ř': '\u0944',
'Ɫ': '\u0962',
'Ḹ': '\u0963',
'ê': '\u0945',
'E': '\u0946',
'Ē': '\u0947',
'Ɛ': '\u0948',
'Ô': '\u0949',
'O': '\u094A',
'Ō': '\u094B',
'Ʊ': '\u094C',
'?': '\u094F',
'?': '\u093A',
'?': '\u093B',
'?': '\u094E',



// independent vowels
'x': 'ऄ',
'a': 'अ', 
'ā': 'आ', 
'i': 'इ', 
'ī': 'ई', 
'u': 'उ', 
'ū': 'ऊ', 
'?': 'ॶ', '?': 'ॷ', 
'ȓ': 'ऋ', 
'ř': 'ॠ', 
'ɫ': 'ऌ', 
'ḹ': 'ॡ', 
'â': 'ॲ', 
'ê': 'ऍ', 
'e': 'ऎ', 
'ē': 'ए', 
'ɛ': 'ऐ', 
'x': 'ऑ', 
'o': 'ऒ', 
'ō': 'ओ', 
'ô': 'ऑ', 
'ʊ': 'औ', 
'?': 'ॵ', '?': 'ॳ', '?': 'ॴ',

//virama
'\u094D':'',

// candrabindu
'\u0303': '\u0901',

// punctuation
'.': ' ।',
'\'': '\u093D',
'ḥ': '\u0903',
':': '',

// numbers
'0': '०',
'1': '१', 
'2': '२', 
'3': '३', 
'4': '४', 
'5': '५', 
'6': '६', 
'7': '७', 
'8': '८', 
'9': '९' 

}
