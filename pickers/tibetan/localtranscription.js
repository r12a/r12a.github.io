function localtranscribe (node, direction, str) {
	
	if (direction == 'toWylie') { return toWylie(node, direction, str) }
	if (direction == 'toDeva') { return toDeva(node, direction, str) }
	}
		
		
function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function toWylie (node, direction, str) {
	var consonants = 'ཀྐཁྑགྒངྔཅྕཆྖཇྗཉྙཏྟཐྠདྡནྣཔྤཕྥབྦམྨཙྩཚྪཛྫཝྭཞྮཟྯཡྱརྲལླཤྴསྶཧྷཊྚཋྛཌྜཌྷྜྷཎྞཥྵའꓝꓯ'
	var subscripts = 'ྐྑྒྔྕྖྗྙྟྠྡྣྤྥྦྨྩྪྫྭྮྯྰྱྲླྴྶྷྚྛྜྷྜྷྞྵ'
	var vowels = 'ཱིེོུ\u0F73\u0F75\u0F7B\u0F7D\u0F78\u0F81\u0F76\u0F80'

	var out=''
	
	// substitute ¶ for syllable boundaries
	str = str.replace(/་/g,' ¶')
	str = str.replace(/།/g,'/ ¶')
	str = str.replace(/༎/g,'// ¶')
	str = str.replace(/ /g,'¶')
	// convert combination vowels to single code point
	str = str.replace(/\u0F71\u0F72/g,'\u0F73')
	str = str.replace(/\u0F71\u0F74/g,'\u0F75')
	str = str.replace(/\u0FB3\u0F80/g,'\u0F78')
	str = str.replace(/\u0F71\u0F80/g,'\u0F81')
	str = str.replace(/\u0FB2\u0F80/g,'\u0F76')
	str = str.replace(/\u0F55\u0F39/g,'ꓝ')
	str = str.replace(/\u0F56\u0F39/g,'ꓯ')
	str = str.replace(/ཕ(.)༹/g,'ꓯ$1')  // this hack needs to be generalised
	str = str.replace(/བ(.)༹/g,'ꓝ$1')  // this hack needs to be generalised
	
	//for (x=0;x<str.length;x++) { alert(str[x]) }

	// split into syllables
	syllables = str.split('¶')
	
	// for each syllable
	for (syll=0;syll<syllables.length; syll++) {
		
		var	syllable = syllables[syll]
		var vowelPresent = false
		var subscriptPresent = false
		var inherentConsonant = -1
//alert(syllable)
		// check for a vowel, if present and not over a-chung, set vowelPresent to true
		for (var c=0; c<syllable.length; c++) {
			if (inSet(vowels, syllable[c]) && syllable[c-1] != 'འ') {
				vowelPresent = true
				inherentConsonant = -1
//alert('vowelPresent')
				}
			}
		
		// otherwise check for a stack, if found set subscriptPresent to true
		if (! vowelPresent) { 
//alert('no vowel')
			// check for a stack
			for (var c=0; c<syllable.length; c++) {
				if (inSet(subscripts, syllable[c])) {
					subscriptPresent = true
					inherentConsonant = -1
//alert('subscriptPresent')
					}
				}
			}
		
		// if no vowel or stack, work out how many consonants in syllable
		// use rules to establish which consonant carries inherent character
		if (! vowelPresent && ! subscriptPresent) { 
//alert('syll len '+syllable.length)
			var consonantList = new Array; // stores the positions of each consonant
			for (var c=0; c<syllable.length; c++) {
				if (inSet(consonants, syllable[c]) ) { 
					consonantList[consonantList.length] = c
					}
				}
			
			switch (consonantList.length) {
				case 1: inherentConsonant = consonantList[0]; break;
				case 2: inherentConsonant = consonantList[0]; break;
				case 3: if (syllable[consonantList[2]] == 'ས' || syllable[consonantList[1]] == 'འ') { inherentConsonant = consonantList[0] } 
						else { inherentConsonant = consonantList[1] } 
						break;
				case 4: inherentConsonant = consonantList[1]; break;
				}
			} 
//alert('clistlen '+consonantList.length)
//alert('icons '+inherentConsonant)

		var consonantPosn = -1
		for (var i=0; i<syllable.length; i++) {
			ch = syllable[i]
			next = syllable[i+1]
			
			//consonantPos = -1
			//if (inSet(consonants, ch)) { consonantPosn = i }
			
			// a-chen
			if (ch == 'ཨ' && inSet(vowels, next)) {
				ch = ''
				}
			else if (ch == 'ཨ' && consonantPosn > -1) {
				ch = '.a'
				}
			

			if (typeof mapToLatn[ch] != 'undefined') { out += mapToLatn[ch] }
			else { out += ch }
//alert(ch)
			
			// add inherent vowel
			//if (consonantPosn > -1 && consonantPosn == inherentConsonant && ! inSet(vowels, next)) { out += 'a' }
			if (i == inherentConsonant) { out += 'a' }
			else if ( subscriptPresent && inSet(subscripts, ch) && ! inSet(subscripts, next) ) { out += 'a' }			
			// add dot if y and not in stack
			if (next == 'ཡ') { out += '.' }
			}
		out += ' '
		}
	return out
	}


var mapToLatn = {
'ༀ': 'oṁ',
'༁': '༁',
'༂': '༂',
'༃': '༃',
'༄': '༄',
'༅': '༅',
'༆': '༆',
'༇': '༇',
'༈': '!',
'༉': '༉',
'༊': '༊',
'་': ' ',
'༌': '*',
'།': '།',
'༎': '༎',
'༏': ';',
'༐': '༐',
'༑': '|',
'༒': '༒',
'༓': '༓',
'༔': ':',
'༕': '༕',
'༖': '༖',
'༗': '༗',
'\u0F18': '\u0F18',
'\u0F19': '\u0F19',
'༚': '༚',
'༛': '༛',
'༜': '༜',
'༝': '༝',
'༞': '༞',
'༟': '༟',
'༠': '0',
'༡': '1',
'༢': '2',
'༣': '3',
'༤': '4',
'༥': '5',
'༦': '6',
'༧': '7',
'༨': '8',
'༩': '9',
'༪': '༪',
'༫': '༫',
'༬': '༬',
'༭': '༭',
'༮': '༮',
'༯': '༯',
'༰': '༰',
'༱': '༱',
'༲': '༲',
'༳': '༳',
'༴': '༴',
'\u0F35': '\u0F35',
'༶': '༶',
'\u0F37': '\u0F37',
'༸': '༸',
'\u0F39': '\u0F39',
'༺': '༺',
'༻': '༻',
'༼': '༼',
'༽': '༽',
'\u0F3E': '\u0F3E',
'\u0F3F': '\u0F3F',
'ཀ': 'k',
'ཁ': 'kh',
'ག': 'g',
'གྷ': 'གྷ',
'ང': 'ng',
'ཅ': 'c',
'ཆ': 'ch',
'ཇ': 'j',
'ཉ': 'ny',
'ཊ': 'ṭ',
'ཋ': 'ṭh',
'ཌ': 'ḍ',
'ཌྷ': 'ḍh',
'ཎ': 'ṇ',
'ཏ': 't',
'ཐ': 'th',
'ད': 'd',
'དྷ': 'དྷ',
'ན': 'n',
'པ': 'p',
'ཕ': 'ph',
'ꓝ': 'f',
'བ': 'b',
'ꓯ': 'v',
'བྷ': 'བྷ',
'མ': 'm',
'ཙ': 'ts',
'ཚ': 'tsh',
'ཛ': 'dz',
'ཛྷ': 'ཛྷ',
'ཝ': 'w',
'ཞ': 'zh',
'ཟ': 'z',
'འ': '\'',
'ཡ': 'y',
'ར': 'r',
'ལ': 'l',
'ཤ': 'sh',
'ཥ': 'ṣ',
'ས': 's',
'ཧ': 'h',
'ཨ': 'a',
'ཀྵ': 'ཀྵ',
'ཪ': 'R+',
'ཫ': 'ཫ',
'ཬ': 'ཬ',
'\u0F71': 'ā',
'\u0F72': 'i',
'\u0F73': 'ī',
'\u0F74': 'u',
'\u0F75': 'ū',
'\u0F76': 'r-i',
'\u0F77': '\u0F77',
'\u0F78': 'l-i',
'\u0F79': '\u0F79',
'\u0F7A': 'e',
'\u0F7B': 'ai',
'\u0F7C': 'o',
'\u0F7D': 'au',
'\u0F7E': 'ṁ',
'\u0F7F': 'ḥ',
'\u0F80': '-i',
'\u0F81': '-ī',
'\u0F82': '~ṁ`',
'\u0F83': '~ṁ',
'\u0F84': '?',
'྅': '&',
'\u0F86': '\u0F86',
'\u0F87': '\u0F87',
'ྈ': 'ྈ',
'ྉ': 'ྉ',
'ྊ': 'ྊ',
'ྋ': 'ྋ',
'ྌ': 'ྌ',
'\u0F8D': '\u0F8D',
'\u0F8E': '\u0F8E',
'\u0F8F': '\u0F8F',
'\u0F90': 'k',
'\u0F91': 'kh',
'\u0F92': 'g',
'\u0F93': '\u0F93',
'\u0F94': 'ng',
'\u0F95': 'c',
'\u0F96': 'ch',
'\u0F97': 'j',
'\u0F99': 'ny',
'\u0F9A': 'ṭ',
'\u0F9B': 'ṭh',
'\u0F9C': 'ḍ',
'\u0F9D': '\u0F9D',
'\u0F9E': 'ṇ',
'\u0F9F': 't',
'\u0FA0': 'th',
'\u0FA1': 'd',
'\u0FA2': '\u0FA2',
'\u0FA3': 'n',
'\u0FA4': 'p',
'\u0FA5': 'ph',
'\u0FA6': 'b',
'\u0FA7': '\u0FA7',
'\u0FA8': 'm',
'\u0FA9': 'ts',
'\u0FAA': 'tsh',
'\u0FAB': 'dz',
'\u0FAC': '\u0FAC',
'\u0FAD': 'w',
'\u0FAE': 'zh',
'\u0FAF': 'z',
'\u0FB0': '\'a',
'\u0FB1': 'y',
'\u0FB2': 'r',
'\u0FB3': 'l',
'\u0FB4': 'sh',
'\u0FB5': 'ṣ',
'\u0FB6': 's',
'\u0FB7': '+h',
'\u0FB8': '+a',
'\u0FB9': '\u0FB9',
'\u0FBA': '+W',
'\u0FBB': '+Y',
'\u0FBC': '+R',
'྾': '྾',
'྿': '྿',
'࿀': '࿀',
'࿁': '࿁',
'࿂': '࿂',
'࿃': '࿃',
'࿄': '࿄',
'࿅': '࿅',
'\u0FC6': '\u0FC6',
'࿇': '࿇',
'࿈': '࿈',
'࿉': '࿉',
'࿊': '࿊',
'࿋': '࿋',
'࿌': '࿌',
'࿎': '࿎',
'࿏': '࿏',
'࿐': '࿐',
'࿑': '࿑',
'࿒': '࿒',
'࿓': '࿓',
'࿔': '࿔',
'࿕': '࿕',
'࿖': '࿖',
'࿗': '࿗',
'࿘': '࿘',
'࿙': '࿙',
'࿚': '࿚',

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
