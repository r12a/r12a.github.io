function localtranscribe (node, direction, str) {
	
	if (direction == 'toMLC') { return transcribetomlc(str) }
	if (direction == 'toIPA') { return transcribetoipa(str) }
	}


function inSet (group, ch) {
	if (group.indexOf(ch) > -1) return true
	else { return false }
	}



function transcribetomlc (str) {
	
	str = str.replace(/¶/g,'')
	
	var vowelkillers = { 'ျ':'','ြ':'','ွ':'','ှ':'','္လ':'','ေ':'','ိ':'','ီ':'','ဲ':'','ော':'','ေါ':'','ယ်':'','ု':'','ူ':'','ာ':'','ါ':'','်':'','္':'','့':'','း':'','a':'','u':'','i':'' }
	var consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'', 'b':'','c':'','d':'','f':'','g':'','h':'','j':'','k':'','l':'','m':'','n':'','p':'','q':'','r':'','s':'','t':'','v':'','w':'','x':'','y':'','z':'','ျ':'','ြ':'','ွ':'','ှ':'' }
	
	str = splitSyllables(str)

	// deal with stacked consonants
	str = str.replace(/က္က/g,'k္k')
	str = str.replace(/က္ခ/g,'k္h္k')
	str = str.replace(/ဂ္ဂ/g,'g္g')
	str = str.replace(/ဂ္ဃ/g,'g္g္h')
	str = str.replace(/င်္ဂ/g,'n္g္ g')
	str = str.replace(/စ္စ/g,'c္c')
	str = str.replace(/စ္ဆ/g,'c္h္c')
	str = str.replace(/ဇ္ဇ/g,'j္j')
	str = str.replace(/ဇ္ဈ/g,'j္j္h')
	str = str.replace(/ဉ္စ/g,'n္y္c')
	str = str.replace(/ဉ္ဇ/g,'n္y္j')
	str = str.replace(/ဋ္ဋ/g,'t္t')
	str = str.replace(/ဋ္ဌ/g,'t္h္t')
	str = str.replace(/ဍ္ဍ/g,'d္d')
	str = str.replace(/ဍ္ဎ/g,'d္d္h')
	str = str.replace(/ဏ္ဍ/g,'n္d')
	str = str.replace(/တ္တ/g,'t္t')
	str = str.replace(/ထ္ထ/g,'h္t္h္t')
	str = str.replace(/ဒ္ဒ/g,'d္d')
	str = str.replace(/န္တ/g,'n္t')
	str = str.replace(/န္ထ/g,'n္h္t')
	str = str.replace(/န္ဒ/g,'n္d')
	str = str.replace(/န္ဓ/g,'n္d္h')
	str = str.replace(/န္န/g,'n္n')
	str = str.replace(/ပ္ပ/g,'p္p')
	str = str.replace(/ဗ္ဗ/g,'b္b')
	str = str.replace(/ဗ္ဘ/g,'b္b္h')
	str = str.replace(/မ္ပ/g,'m္p')
	str = str.replace(/မ္ဗ/g,'m္b')
	str = str.replace(/မ္ဘ/g,'m္b္h')
	str = str.replace(/မ္မ/g,'m္m')
	str = str.replace(/ဿ/g,'s္s')
	str = str.replace(/လ္လ/g,'l္l')

	// deal with compound vowels
	str = str.replace(/ေါ်/g,'au')
	str = str.replace(/ော်/g,'au')
	str = str.replace(/ော့/g,'au.')
	str = str.replace(/ေါ့/g,'au.')
	str = str.replace(/ော /g,'au:')
	str = str.replace(/ေါ /g,'au:')
	str = str.replace(/ော/g,'au')
	str = str.replace(/ေါ/g,'au')
	str = str.replace(/ို/g,'ui')
	str = str.replace(/ယ်/g,'ai')
	str = str.replace(/ဲ့/g,'ai.')
	
	// deal with open vowels that need tone info
	str = str.replace(/ိ /g,'i.')
	str = str.replace(/ု /g,'u.')
	
	
		
	var out = ''
	var ch = ''
	for (var i=0; i<str.length; i++) {
		if (str[i] == ' ' && str[i-1] == ' ') { out += '\u00A0&bull;\u00A0'; continue }
		var ch = str[i]
		var next = str[i+1]
		var inherent = false
		//console.log('ch',ch,'next',next)
		// detect inherent vowel
		if (ch in consonants && ! (next in vowelkillers)) { inherent = true }

		var ch = maptomlc[str.charCodeAt(i)];
		if (ch) { out += ch; }
		else { out += str.charAt(i); }
	
		if (inherent) { 
			if (next == ' ' )  out += 'a.'
			else out += 'a' 
			}
		}
	
	out = out.replace(/\u0351/g,'')
	out = out.replace(/\u0338/g,'')
	out = out.trim()
	
	// move H to start of syllable
	syllables = out.split(' ')
	for (s=0;s<syllables.length;s++) {
		if (syllables[s].match('H')) {
			syllables[s] = syllables[s].replace('H','')
			syllables[s] = 'h'+syllables[s]
			}
		}
	
	return syllables.join(' ')
	}
	
	
	
var maptomlc = new Array();
maptomlc[32]=' '; // 20: SPACE
maptomlc[8204]='ˣʲ'; // 200C: ZERO WIDTH NON JOINER
maptomlc[8205]='ʲ'; // 20OD: ZERO WIDTH JOINER
maptomlc[8288]='ʷʲ'; // 2060: WORD JOINER
maptomlc[4096]='k'; //1000:   က  MYANMAR LETTER KA
maptomlc[4097]="hk"; //1001:   ခ  MYANMAR LETTER KHA
maptomlc[4098]="g"; //1002:   ဂ  MYANMAR LETTER GA
maptomlc[4099]="gh"; //1003:   ဃ  MYANMAR LETTER GHA
maptomlc[4100]="ng"; //004:   င  MYANMAR LETTER NGA
maptomlc[4101]="c"; //005:   စ  MYANMAR LETTER CA
maptomlc[4102]="hc"; //006:   ဆ  MYANMAR LETTER CHA
maptomlc[4103]="j"; //007:   ဇ  MYANMAR LETTER JA
maptomlc[4104]="jh"; //008:   ဈ  MYANMAR LETTER JHA
maptomlc[4105]="ny"; //009:   ဉ  MYANMAR LETTER NYA
maptomlc[4106]="ny"; //00A:   ည  MYANMAR LETTER NNYA
maptomlc[4107]="ṭ"; //00B:   ဋ  MYANMAR LETTER TTA
maptomlc[4108]="hṭ"; //00C:   ဌ  MYANMAR LETTER TTHA
maptomlc[4109]="ḍ"; //00D:   ဍ  MYANMAR LETTER DDA
maptomlc[4110]="ḍh"; //00E:   ဎ  MYANMAR LETTER DDHA
maptomlc[4111]="ṇ"; //00F:   ဏ  MYANMAR LETTER NNA
maptomlc[4112]="t"; //010:   တ  MYANMAR LETTER TA
maptomlc[4113]="ht"; //011:   ထ  MYANMAR LETTER THA
maptomlc[4114]="d"; //012:   ဒ  MYANMAR LETTER DA
maptomlc[4115]="dh"; //013:   ဓ  MYANMAR LETTER DHA
maptomlc[4116]="n"; //014:   န  MYANMAR LETTER NA
maptomlc[4117]="p"; //015:   ပ  MYANMAR LETTER PA
maptomlc[4118]="hp"; //016:   ဖ  MYANMAR LETTER PHA
maptomlc[4119]="b"; //017:   ဗ  MYANMAR LETTER BA
maptomlc[4120]="bh"; //018:   ဘ  MYANMAR LETTER BHA
maptomlc[4121]="m"; //019:   မ  MYANMAR LETTER MA
maptomlc[4122]="y"; //01A:   ယ  MYANMAR LETTER YA
maptomlc[4123]="r"; //01B:   ရ  MYANMAR LETTER RA
maptomlc[4124]="l"; //01C:   လ  MYANMAR LETTER LA
maptomlc[4125]="w"; //01D:   ဝ  MYANMAR LETTER WA
maptomlc[4126]="s"; //01E:   သ  MYANMAR LETTER SA
maptomlc[4127]="h"; //01F:   ဟ  MYANMAR LETTER HA
maptomlc[4128]="ḷ"; //020:   ဠ  MYANMAR LETTER LLA
maptomlc[4129]=" "; //021:   အ  MYANMAR LETTER A
maptomlc[4131]="i."; //023:   ဣ  MYANMAR LETTER I
maptomlc[4132]="i:"; //024:   ဤ  MYANMAR LETTER II
maptomlc[4133]="u."; //025:   ဥ  MYANMAR LETTER U
maptomlc[4134]="u"; //026:   ဦ  MYANMAR LETTER UU
maptomlc[4135]="ei:"; //027:   ဧ  MYANMAR LETTER E
maptomlc[4137]="au:"; //029:   ဩ  MYANMAR LETTER O
maptomlc[4138]="au"; //02A:   ဪ  MYANMAR LETTER AU
maptomlc[4140]="a"; //02C:   ာ  MYANMAR VOWEL SIGN AA
maptomlc[4141]="i"; //02D:   ိ  MYANMAR VOWEL SIGN I
maptomlc[4142]="i"; //02E:   ီ  MYANMAR VOWEL SIGN II
maptomlc[4143]="u"; //02F:   ု  MYANMAR VOWEL SIGN U
maptomlc[4144]="u"; //030:   ူ  MYANMAR VOWEL SIGN UU
maptomlc[4145]="e"; //031:   ေ  MYANMAR VOWEL SIGN E
maptomlc[4146]="ai:"; //032:   ဲ  MYANMAR VOWEL SIGN AI
maptomlc[4150]="°"; //036:   ံ  MYANMAR SIGN ANUSVARA
maptomlc[4151]="."; //037:   ့  MYANMAR SIGN DOT BELOW
maptomlc[4152]=":"; //038:   း  MYANMAR SIGN VISARGA
maptomlc[4153]="\u0338"; //039:   ္  MYANMAR SIGN VIRAMA
maptomlc[4154]="\u0351"; //03A:   ္  MYANMAR SIGN ASAT
maptomlc[4155]="y"; //03B:   ၀  MYANMAR CONSONANT SIGN MEDIAL YA
maptomlc[4156]="r"; //03C:   ၀  MYANMAR CONSONANT SIGN MEDIAL RA
maptomlc[4157]="w"; //03D:   ၀  MYANMAR CONSONANT SIGN MEDIAL WA
maptomlc[4158]="H"; //03E:   ၀  MYANMAR CONSONANT SIGN MEDIAL HA
maptomlc[4159]="S"; //03F:   ၀  MYANMAR GREAT SA
maptomlc[4160]="0"; //040:   ၀  MYANMAR DIGIT ZERO
maptomlc[4161]="1"; //041:   ၁  MYANMAR DIGIT ONE
maptomlc[4162]="2"; //042:   ၂  MYANMAR DIGIT TWO
maptomlc[4163]="3"; //043:   ၃  MYANMAR DIGIT THREE
maptomlc[4164]="4"; //044:   ၄  MYANMAR DIGIT FOUR
maptomlc[4165]="5"; //045:   ၅  MYANMAR DIGIT FIVE
maptomlc[4166]="6"; //046:   ၆  MYANMAR DIGIT SIX
maptomlc[4167]="7"; //047:   ၇  MYANMAR DIGIT SEVEN
maptomlc[4168]="8"; //048:   ၈  MYANMAR DIGIT EIGHT
maptomlc[4169]="9"; //049:   ၉  MYANMAR DIGIT NINE
maptomlc[4170]="၊"; //04A:   ၊  MYANMAR SIGN LITTLE SECTION
maptomlc[4171]="။"; //04B:   ။  MYANMAR SIGN SECTION
maptomlc[4172]="hnai."; //04C:   ၌  MYANMAR SYMBOL LOCATIVE
maptomlc[4173]="rwe"; //04D:   ၍  MYANMAR SYMBOL COMPLETED
maptomlc[4174]="la. kaung"; //04E:   ၎  MYANMAR SYMBOL AFOREMENTIONED
maptomlc[4175]="e"; //04F:   ၏  MYANMAR SYMBOL GENITIVE
maptomlc[4176]="ʃ"; //050:   ၐ  MYANMAR LETTER SHA
maptomlc[4177]="ʃʃ"; //051:   ၑ  MYANMAR LETTER SSA
maptomlc[4178]="r̥"; //052:   ၒ  MYANMAR LETTER VOCALIC R
maptomlc[4179]=""; //053:   ၓ  MYANMAR LETTER VOCALIC RR
maptomlc[4180]="l̥"; //054:   ၔ  MYANMAR LETTER VOCALIC L
maptomlc[4181]=""; //055:   ၕ  MYANMAR LETTER VOCALIC LL
maptomlc[4182]="r̥"; //056:   ၖ  MYANMAR VOWEL SIGN VOCALIC R
maptomlc[4183]=""; //057:   ၗ  MYANMAR VOWEL SIGN VOCALIC RR
maptomlc[4284]="l̥"; //058:   ၘ  MYANMAR VOWEL SIGN VOCALIC L
maptomlc[4185]=""; //059:   ၙ  MYANMAR VOWEL SIGN VOCALIC LL
maptomlc[0x104D]="rwe"; 
maptomlc[0x1036]="m"; 
maptomlc[0x102B]="a"; 


function transcribetoipa (str) {
	
	str = str.replace(/¶/g,'')
	
	var consonants = {'အ':'','က':'','ခ':'','ဂ':'','ဃ':'','င':'','စ':'','ဆ':'','ဇ':'','ဈ':'','ည':'','ဉ':'','ဋ':'','ဌ':'','ဍ':'','ဎ':'','ဏ':'','တ':'','ထ':'','ဒ':'','ဓ':'','န':'','ပ':'','ဖ':'','ဗ':'','ဘ':'','မ':'','ယ':'','ရ':'','လ':'','ဝ':'','သ':'','ဿ':'','ဟ':'', 'b':'','c':'','d':'','f':'','g':'','h':'','j':'','k':'','l':'','m':'','n':'','p':'','q':'','r':'','s':'','t':'','v':'','w':'','x':'','y':'','z':'','ျ':'','ြ':'','ွ':'','ှ':'','၌':'','၍':'','၎':'','၏':'','ဣ':'','ဤ':'','ဥ':'','ဦ':'','ဧ':'','ဩ':'','ဪ':'','ဠ':'' }
	var medials = { 'ျ':'j','ြ':'j','ွ':'w','ှ':'̥','္လ':'l' } // w not included, added to rhyme
	var symbols = {'၌':'','၍':'','၎':'','၏':'','၊':'','။':'','jwé':'','n̥aiʔ':'','la̰-ɡàuɴ':'','ḭ':'','ʔḭ':'','ʔì':'','ʔṵ':'','ʔù':'','ʔè':'','ʔɔ́':'','ʔɔ':'̀' }

	var nasals = {'င':'','ည':'','ဉ':'','ဏ':'','န':'','မ':''}
	
	str = splitSyllables(str)
	str = str.replace(/\u1039/g,'\u1039 ')
	str = str.replace('ါ','ာ')

	var out = ''
	syllables = str.split(' ')
	
	for (s=0; s<syllables.length;s++) {
		if (syllables[s] == '') { out += ' &bull; '; continue }
		var onset = ''
		var rhyme = ''
		
		//get the initial consonant and medials (ie. the onset)
		if (syllables[s][0] in consonants) {
			onset = syllables[s][0]
			p = 1
			while (p < syllables[s].length && syllables[s][p] in medials) {
				onset += syllables[s][p++]
				}
			}
		// if doesn't start with consonant, not a syllable, set onset=''
		else { 
			rhyme = syllables[s]
			onset = ''
			}
			
		//get the rhyme
		if (rhyme == '') {
			var rhyme = syllables[s].replace(onset,'')
			if (typeof rhyme == 'undefined') rhyme = ''
			}

		//console.log(s)
		//console.log('syllable',syllables[s])
		//console.log('onset/rhyme:','onset',onset,'rhyme',rhyme)
		
		//correct for w at end of onset (since influences sound of rhyme)
		//note that this has no effect if the w is followed by medial h - not sure of the rules there
		if (onset.charAt(onset.length-1) == 'ွ' && rhyme[0] in consonants) { 
			rhyme = 'ွ'+rhyme
			onset = onset.substr(0,onset.length-1)
			//console.log('corrected for w:',syllables[s],'onset',onset,'rhyme',rhyme)
			}
		
		
		// convert the onset
		if (maptoipa[onset])   onset = maptoipa[onset]
		else { 
			newonset = ''
			for (var p=0;p<onset.length;p++) { 
				if (maptoipa[onset.charAt(p)]) newonset += maptoipa[onset.charAt(p)]
				else newonset += onset.charAt(p)
				}
			onset = newonset
			}
		
		//console.log('converted onset',onset)
		
		if (onset) {
			if (rhyme) {
				// convert the rhyme
				lookup = rhyme.replace('\u1039','\u103A')  // look up converts virama to asat
				if (rhymes[lookup])   rhyme = rhymes[lookup]
				else { 
					// this is not a standard burmese rhyme
					
					// assume that this is always a syllable ending in a stop or nasal consonant
					// find whether the consonant is a nasal or stop, and substitute something that will create the right effect
					var rhymeconsonant = ''
					for (var r=0;r<rhyme.length;r++) {
						if (rhyme[r] in consonants) {
							rhymeconsonant = rhyme[r]
							break
							}
						}
					//console.log('non-standard rhyme detected with consonant',rhymeconsonant)
							
					if (rhymeconsonant in nasals) rhyme = rhyme.replace(rhymeconsonant,'မ')
					else rhyme = rhyme.replace(rhymeconsonant,'ပ')
					//console.log('new rhyme:',rhyme)
					
					rhyme = rhymes[rhyme.replace('\u1039','\u103A')]  // look up converts virama to asat
					//console.log('result of looking up new rhyme:',rhyme)
					}
				
				//console.log('converted rhyme',rhyme)
				}
			else {
				//console.log('no rhyme')
				if (onset in symbols) {  } // don't add a rhyme
				else rhyme = 'a̰'
				}
			//out += onset+rhyme+' '
			out += onset+rhyme
			//console.log("add to out:",onset+rhyme)
			}
		else {
			//console.log('this is not a syllable',rhyme)
			//out += rhyme+' '
			out += rhyme
			}
		}
		//console.log('out',out)
		
	// add markup for ambiguous cases
	out = out.replace(/\[/g,'<span class=alts><span class=altfirst>')
	out = out.replace(/\|/g,'</span><span class=alt>')
	out = out.replace(/\{/g,'</span><span class=altlast>')
	out = out.replace(/\]/g,'</span></span>')

	return out.trim()
	}


var mapmedialtoipa = new Array();
mapmedialtoipa[32]=' '; // 20: SPACE


var maptoipa = new Array();
maptoipa['\u0020']=' '; // SPACE
maptoipa['\u200C']='ˣʲ'; // ZERO WIDTH NON JOINER
maptoipa['\u200D']='ʲ'; // ZERO WIDTH JOINER
maptoipa['\u2060']='ʷʲ'; // WORD JOINER
maptoipa['\u1000']='k'; //   က  MYANMAR LETTER KA
maptoipa['\u1001']='kʰ'; //   ခ  MYANMAR LETTER KHA
maptoipa['\u1002']='g'; //   ဂ  MYANMAR LETTER GA
maptoipa['\u1003']='g'; //   ဃ  MYANMAR LETTER GHA
maptoipa['\u1004']='ŋ'; //   င  MYANMAR LETTER NGA
maptoipa['\u1005']='s'; //   စ  MYANMAR LETTER CA
maptoipa['\u1006']='sʰ'; //   ဆ  MYANMAR LETTER CHA
maptoipa['\u1007']='z'; //   ဇ  MYANMAR LETTER JA
maptoipa['\u1008']='z'; //   ဈ  MYANMAR LETTER JHA
maptoipa['\u1009']='ɲ'; //   ဉ  MYANMAR LETTER NYA
maptoipa['\u100A']='ɲ'; //   ည  MYANMAR LETTER NNYA
maptoipa['\u100B']='t'; //   ဋ  MYANMAR LETTER TTA
maptoipa['\u100C']='tʰ'; //   ဌ  MYANMAR LETTER TTHA
maptoipa['\u100D']='d'; //   ဍ  MYANMAR LETTER DDA
maptoipa['\u100E']='d'; //   ဎ  MYANMAR LETTER DDHA
maptoipa['\u100F']='n'; //   ဏ  MYANMAR LETTER NNA
maptoipa['\u1010']='t'; //   တ  MYANMAR LETTER TA
maptoipa['\u1011']='tʰ'; //   ထ  MYANMAR LETTER THA
maptoipa['\u1012']='d'; //   ဒ  MYANMAR LETTER DA
maptoipa['\u1013']='d'; //   ဓ  MYANMAR LETTER DHA
maptoipa['\u1014']='n'; //   န  MYANMAR LETTER NA
maptoipa['\u1015']='p'; //   ပ  MYANMAR LETTER PA
maptoipa['\u1016']='pʰ'; //   ဖ  MYANMAR LETTER PHA
maptoipa['\u1017']='b'; //   ဗ  MYANMAR LETTER BA
maptoipa['\u1018']='b'; //   ဘ  MYANMAR LETTER BHA
maptoipa['\u1019']='m'; //   မ  MYANMAR LETTER MA
maptoipa['\u101A']='j'; //   ယ  MYANMAR LETTER YA
maptoipa['\u101B']='j'; //   ရ  MYANMAR LETTER RA
maptoipa['\u101C']='l'; //   လ  MYANMAR LETTER LA
maptoipa['\u101D']='w'; //   ဝ  MYANMAR LETTER WA
maptoipa['\u101E']='θ'; //   သ  MYANMAR LETTER SA
maptoipa['\u101F']='h'; //   ဟ  MYANMAR LETTER HA
maptoipa['\u1020']='l'; //   ဠ  MYANMAR LETTER LLA
maptoipa['\u1021']='ʔ'; //   အ  MYANMAR LETTER A
maptoipa['\u1023']='ʔḭ'; //   ဣ  MYANMAR LETTER I
maptoipa['\u1024']='ʔì'; //   ဤ  MYANMAR LETTER II
maptoipa['\u1025']='ʔṵ'; //   ဥ  MYANMAR LETTER U
maptoipa['\u1026']='ʔù'; //   ဦ  MYANMAR LETTER UU
maptoipa['\u1027']='ʔè'; //   ဧ  MYANMAR LETTER E
maptoipa['\u1029']='ʔɔ́'; //   ဩ  MYANMAR LETTER O
maptoipa['\u102A']='ʔɔ̀'; //   ဪ  MYANMAR LETTER AU
maptoipa['\u102C']='a'; //   ာ  MYANMAR VOWEL SIGN AA
maptoipa['\u102D']='i'; //   ိ  MYANMAR VOWEL SIGN I
maptoipa['\u102E']='i'; //   ီ  MYANMAR VOWEL SIGN II
maptoipa['\u102F']='u'; //   ု  MYANMAR VOWEL SIGN U
maptoipa['\u1030']='u'; //   ူ  MYANMAR VOWEL SIGN UU
maptoipa['\u1031']='e'; //   ေ  MYANMAR VOWEL SIGN E
maptoipa['\u1032']='ai:'; //   ဲ  MYANMAR VOWEL SIGN AI
maptoipa['\u1036']='°'; //   ံ  MYANMAR SIGN ANUSVARA
maptoipa['\u1037']='.'; //   ့  MYANMAR SIGN DOT BELOW
maptoipa['\u1038']=':'; //   း  MYANMAR SIGN VISARGA
maptoipa['\u1039']='\u0338'; //   ္  MYANMAR SIGN VIRAMA
maptoipa['\u103A']='\u0351'; //   ္  MYANMAR SIGN ASAT
maptoipa['\u103B']='j'; //   ၀  MYANMAR CONSONANT SIGN MEDIAL YA
maptoipa['\u103C']='j'; //   ၀  MYANMAR CONSONANT SIGN MEDIAL RA
maptoipa['\u103D']='w'; //   ၀  MYANMAR CONSONANT SIGN MEDIAL WA
maptoipa['\u103E']='̥'; //   ၀  MYANMAR CONSONANT SIGN MEDIAL HA
maptoipa['\u103F']='θ'; //   ၀  MYANMAR GREAT SA
maptoipa['\u1040']='0'; //   ၀  MYANMAR DIGIT ZERO
maptoipa['\u1041']='1'; //   ၁  MYANMAR DIGIT ONE
maptoipa['\u1042']='2'; //   ၂  MYANMAR DIGIT TWO
maptoipa['\u1043']='3'; //   ၃  MYANMAR DIGIT THREE
maptoipa['\u1044']='4'; //   ၄  MYANMAR DIGIT FOUR
maptoipa['\u1045']='5'; //   ၅  MYANMAR DIGIT FIVE
maptoipa['\u1046']='6'; //   ၆  MYANMAR DIGIT SIX
maptoipa['\u1047']='7'; //   ၇  MYANMAR DIGIT SEVEN
maptoipa['\u1048']='8'; //   ၈  MYANMAR DIGIT EIGHT
maptoipa['\u1049']='9'; //   ၉  MYANMAR DIGIT NINE
maptoipa['\u104A']='၊'; //   ၊  MYANMAR SIGN LITTLE SECTION
maptoipa['\u104B']='။'; //   ။  MYANMAR SIGN SECTION
maptoipa['\u104C']='n̥aiʔ'; //   ၌  MYANMAR SYMBOL LOCATIVE
maptoipa['\u104D']="jwé"; //   ၍  MYANMAR SYMBOL COMPLETED
maptoipa['\u104E']='la̰-ɡàuɴ'; //   ၎  MYANMAR SYMBOL AFOREMENTIONED
maptoipa['\u104F']='ḭ'; //   ၏  MYANMAR SYMBOL GENITIVE
maptoipa['\u1050']='ʃ'; //   ၐ  MYANMAR LETTER SHA
maptoipa['\u1051']='ʃʃ'; //   ၑ  MYANMAR LETTER SSA
maptoipa['\u1052']='r̥'; //   ၒ  MYANMAR LETTER VOCALIC R
maptoipa['\u4179']=""; //053:   ၓ  MYANMAR LETTER VOCALIC RR
maptoipa['\u1054']='l̥'; //   ၔ  MYANMAR LETTER VOCALIC L
maptoipa['\u4181']=""; //055:   ၕ  MYANMAR LETTER VOCALIC LL
maptoipa['\u1056']='r̥'; //   ၖ  MYANMAR VOWEL SIGN VOCALIC R
maptoipa['\u4183']=""; //057:   ၗ  MYANMAR VOWEL SIGN VOCALIC RR
maptoipa['\u1058']='l̥'; //   ၘ  MYANMAR VOWEL SIGN VOCALIC L
maptoipa['\u4185']=""; //059:   ၙ  MYANMAR VOWEL SIGN VOCALIC LL
maptoipa['\u1036']="m"; 
maptoipa['\u102B']="a"; 

// medial clusters
maptoipa['ကျ']="tɕ"; 
maptoipa['ချ']="tɕʰ"; 
maptoipa['ဂျ']="dʑ"; 
maptoipa['သျှ']="ʃ"; 
maptoipa['လျှ']="ʃ"; 
maptoipa['ကြ']="tɕ"; 
maptoipa['ခြ']="tɕʰ"; 
maptoipa['ဂြ']="dʑ"; 
maptoipa['ငြ']="ɲ"; 
maptoipa['ယှ']="ʃ"; 
maptoipa['ရှ']="ʃ"; 




var rhymes = { 
'ာ':'à','ား':'á','က်':'ɛʔ','င်':'ɪ̀ɴ','င့်':'ɪ̰ɴ','င်း':'ɪ́ɴ','စ်':'ɪʔ','ည်':'[ì|è{ɛ̀]','ဉ်':'ɪ̀ɴ','ည့်':'[ḭ|ḛ{ɛ̰]','ဉ့်':'ɪ̰ɴ','ည်း':'[í|é{ɛ́]','ဉ်း':'ɪ́ɴ',

// the next line are for unusual rhymes such as conjuncts
'င််':'ɪ̀ɴ','ာပ်':'aʔ','ာမ်':'aɴ','ေပ်':'eʔ',

'တ်':'aʔ','န်':'àɴ','န့်':'a̰ɴ','န်း':'áɴ','ပ်':'aʔ','မ်':'àɴ','မ့်':'a̰ɴ','မ်း':'áɴ','ယ်':'ɛ̀','ံ':'àɴ','ံ့':'a̰ɴ','ံး':'áɴ',

'ိ':'ḭ','ိတ်':'eɪʔ','ိန်':'èɪɴ','ိန့်':'ḛɪɴ','ိန်း':'éɪɴ','ိပ်':'eɪʔ',

'ိမ်':'èɪɴ','ိမ့်':'ḛɪɴ','ိမ်း':'éɪɴ','ိံ':'èɪɴ','ိံ့':'ḛɪɴ','ိံး':'éɪɴ','ီ':'ì','ီး':'í',

'ု':'ṵ','ုတ်':'oʊʔ','ုန်':'òʊɴ','ုန့်':'o̰ʊɴ','ုန်း':'óʊɴ','ုပ်':'oʊʔ','ုမ်':'òʊɴ','ုမ့်':'o̰ʊɴ','ုမ်း':'óʊɴ','ုံ':'òʊɴ','ုံ့':'o̰ʊɴ','ုံး':'óʊɴ','ူ':'ù','ူး':'ú',

'ေ':'è','ေ့':'ḛ','ေး':'é','ဲ':'ɛ́','ဲ့':'ɛ̰',

'ော':'ɔ́','ောက်':'aʊʔ','ောင်':'àʊɴ','ောင့်':'a̰ʊɴ','ောင်း':'áʊɴ','ော့':'ɔ̰','ော်':'ɔ̀',

'ို':'ò','ိုက်':'aɪʔ','ိုင်':'àɪɴ','ိုင့်':'a̰ɪɴ','ိုင်း':'áɪɴ','ို့':'o̰','ိုး':'ó',

'ွတ်':'ʊʔ','ွန်':'ʊ̀ɴ','ွန့်':'ʊ̰ɴ','ွန်း':'ʊ́ɴ','ွပ်':'ʊʔ','ွမ်':'ʊ̀ɴ','ွမ့်':'ʊ̰ɴ','ွမ်း':'ʊ́ɴ'

}
