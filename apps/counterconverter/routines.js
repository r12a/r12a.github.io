		function selectstyle () {
			var output = document.getElementById('output');
        	var selection = document.getElementById('system');
            var numbers = document.getElementById('numbers');
			//numbers.value = numbers.value.replace(/[\s]+/g, ' '); 
			
			// security check: integers only please
			numberlist = numbers.value.replace(/[^ 0-9]+/g, '');
			numberlist = numberlist.replace(/[\s]+/g, ' ');
			numberlist = numberlist.replace(/ $/g, '');
			numberlist = numberlist.replace(/^ /g, '');
			
			numbers.value = numbers.value.replace(/[,]+/g, ' '); 
        	switch (selection.value) {
            	case 'armenian': displayResult(numberlist, armenian(numberlist)); break;
            	case 'japanese-informal': displayResult(numberlist, japaneseinformal(numberlist)); break;
            	case 'japanese-formal': displayResult(numberlist, japaneseformal(numberlist)); break;
            	case 'georgian': displayResult(numberlist, georgian(numberlist)); break;
            	case 'hebrew': displayResult(numberlist, hebrew(numberlist)); break;
            	case 'hebrew-extended': displayResult(numberlist, hebrewextended(numberlist)); break;
            	case 'korean-hangul-formal': displayResult(numberlist, koreanhangulformal(numberlist)); break;
            	case 'korean-hanja-informal': displayResult(numberlist, koreanhanjainformal(numberlist)); break;
            	case 'korean-hanja-formal': displayResult(numberlist, koreanhanjaformal(numberlist)); break;
            	case 'simp-chinese-formal': displayResult(numberlist, simpchineseformal(numberlist)); break;
            	case 'simp-chinese-informal': displayResult(numberlist, simpchineseinformal(numberlist)); break;
            	case 'trad-chinese-formal': displayResult(numberlist, tradchineseformal(numberlist)); break;
            	case 'trad-chinese-informal': displayResult(numberlist, tradchineseinformal(numberlist)); break;
            	case 'lower-greek': displayResult(numberlist, lowergreek(numberlist)); break;
            	case 'lower-roman': displayResult(numberlist, lowerroman(numberlist)); break;
            	case 'upper-roman': displayResult(numberlist, upperroman(numberlist)); break;
            	case 'hiragana': displayResult(numberlist, hiragana(numberlist)); break;
            	case 'hiragana-iroha': displayResult(numberlist, hiraganairoha(numberlist)); break;
            	case 'katakana': displayResult(numberlist, katakana(numberlist)); break;
            	case 'katakana-iroha': displayResult(numberlist, katakanairoha(numberlist)); break;
            	case 'ethiopic-numeric': displayResult(numberlist, ethiopicnumeric(numberlist)); break;
            	case 'cjk-decimal': displayResult(numberlist, cjkdecimal(numberlist)); break;
            	case 'arabic-indic': displayResult(numberlist, arabicindic(numberlist)); break;
            	case 'persian': displayResult(numberlist, persian(numberlist)); break;
            	case 'thai': displayResult(numberlist, thai(numberlist)); break;
            	case 'cambodian-khmer': displayResult(numberlist, cambodiankhmer(numberlist)); break;
            	case 'lao': displayResult(numberlist, lao(numberlist)); break;
            	case 'myanmar': displayResult(numberlist, myanmar(numberlist)); break;
            	case 'shan': displayResult(numberlist, shan(numberlist)); break;
            	case 'devanagari': displayResult(numberlist, devanagari(numberlist)); break;
            	case 'bengali': displayResult(numberlist, bengali(numberlist)); break;
            	case 'gujarati': displayResult(numberlist, gujarati(numberlist)); break;
            	case 'persianabjad': displayResult(numberlist, persianabjad(numberlist)); break;
            	case 'persianalphabetic': displayResult(numberlist, persianalphabetic(numberlist)); break;
            	case 'lowerarmenian': displayResult(numberlist, lowerarmenian(numberlist)); break;
            	case 'upperarmenian': displayResult(numberlist, upperarmenian(numberlist)); break;
            	case 'lowerbelorussian': displayResult(numberlist, lowerbelorussian(numberlist)); break;
            	case 'upperbelorussian': displayResult(numberlist, upperbelorussian(numberlist)); break;
            	case 'lowerbulgarian': displayResult(numberlist, lowerbulgarian(numberlist)); break;
            	case 'upperbulgarian': displayResult(numberlist, upperbulgarian(numberlist)); break;
            	case 'lowermacedonian': displayResult(numberlist, lowermacedonian(numberlist)); break;
            	case 'uppermacedonian': displayResult(numberlist, uppermacedonian(numberlist)); break;
            	case 'lowerrussian': displayResult(numberlist, lowerrussian(numberlist)); break;
            	case 'upperrussian': displayResult(numberlist, upperrussian(numberlist)); break;
            	case 'lowerrussianfull': displayResult(numberlist, lowerrussianfull(numberlist)); break;
            	case 'upperrussianfull': displayResult(numberlist, upperrussianfull(numberlist)); break;
            	case 'lowerserbocroatian': displayResult(numberlist, lowerserbocroatian(numberlist)); break;
            	case 'upperserbocroatian': displayResult(numberlist, upperserbocroatian(numberlist)); break;
            	case 'lowerukrainian': displayResult(numberlist, lowerukrainian(numberlist)); break;
            	case 'upperukrainian': displayResult(numberlist, upperukrainian(numberlist)); break;
            	case 'lowerukrainianfull': displayResult(numberlist, lowerukrainianfull(numberlist)); break;
            	case 'upperukrainianfull': displayResult(numberlist, upperukrainianfull(numberlist)); break;
            	case 'hindi': displayResult(numberlist, hindi(numberlist)); break;
            	case 'greek': displayResult(numberlist, greek(numberlist)); break;
            	case 'gurmukhi': displayResult(numberlist, gurmukhi(numberlist)); break;
            	case 'cjkearthlybranch': displayResult(numberlist, cjkearthlybranch(numberlist)); break;
            	case 'cjkheavenlystem': displayResult(numberlist, cjkheavenlystem(numberlist)); break;
            	case 'kannada': displayResult(numberlist, kannada(numberlist)); break;
            	case 'khmerconsonant': displayResult(numberlist, khmerconsonant(numberlist)); break;
            	case 'lepcha': displayResult(numberlist, lepcha(numberlist)); break;
            	case 'malayalam': displayResult(numberlist, malayalam(numberlist)); break;
            	case 'mongolian': displayResult(numberlist, mongolian(numberlist)); break;
            	case 'oriya': displayResult(numberlist, oriya(numberlist)); break;
            	case 'tamil': displayResult(numberlist, tamil(numberlist)); break;
            	case 'ancienttamil': displayResult(numberlist, ancienttamil(numberlist)); break;
            	case 'thaialphabetic': displayResult(numberlist, thaialphabetic(numberlist)); break;
            	case 'tibetan': displayResult(numberlist, tibetan(numberlist)); break;
            	case 'circledkoreanconsonant': displayResult(numberlist, circledkoreanconsonant(numberlist)); break;
            	case 'circledkoreansyllable': displayResult(numberlist, circledkoreansyllable(numberlist)); break;
            	case 'koreanconsonant': displayResult(numberlist, koreanconsonant(numberlist)); break;
            	case 'koreansyllable': displayResult(numberlist, koreansyllable(numberlist)); break;
            	case 'parenthesizedhangulconsonant': displayResult(numberlist, parenthesizedhangulconsonant(numberlist)); break;
            	case 'parenthesizedhangulsyllable': displayResult(numberlist, parenthesizedhangulsyllable(numberlist)); break;
            	case 'telugu': displayResult(numberlist, telugu(numberlist)); break;
        		}

			}


function displayResult (numberlist, result) {
	// takes the result and outputs to the page
	// the original ASCII numbers input by the user
	// result, space-separated string of numbers in native format
	
	var numbers = numberlist.split(' ');
	var results = result.split(' ');
	
	var out = '<table id="resultTable"><tbody>';
	
	for (var n=0;n<numbers.length;n++) {
		out += '<tr><td class="originalNumber">'+numbers[n]+'&#xA0;⇨</td><td class="nativeNumber" dir="auto">'+results[n]+'</td></tr>';
		}
		
	out += '</tbody></table>';
	
	document.getElementById('output').innerHTML = out;
	}

function debug (location, value) {
	document.getElementById('output').innerHTML += location+': '+value+'<br/>';
	}
function stop () {
	alert('Hit return to continue.');
	}
	
//  ============ FIXED ========================

function returnFixed (value, digits) {
	// fall back if value outside range
	if (value > digits.length-1 || value < 1) { return value; }

	// otherwise, replace the digits with the appropriate character
	return digits[value-1];
	}

function makeFixed (postfix, digits, numbers) {
	var str = '';
	for (i=0;i<numbers.length; i++) {
		//str += '<span title="'+numbers[i]+'">'+returnFixed(numbers[i], digits)+'</span>';
		//if (i < numbers.length-1) { str += ' &nbsp; '; }
		str += returnFixed(numbers[i], digits);
		if (i < numbers.length-1) { str += ' '; }
		}
	return str;
	}

function persianabjad  (numbers) {
	var str = makeFixed('.',
				new Array('ا', 'ب', 'ج', 'د', 'ه‍', 'و', 'ز', 'ح', 'ط', 'ی', 'ک', 'ل', 'م', 'ن', 'س', 'ع', 'ف', 'ص', 'ق', 'ر', 'ش', 'ت', 'ث', 'خ', 'ذ', 'ض', 'ظ', 'غ'),
				numbers.split(' ')
				);
	return str;
	}

function persianalphabetic  (numbers) {
	var str = makeFixed('.',
				new Array('ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه‍', 'ی'),
				numbers.split(' ')
				);
	return str;
	}

function circledkoreanconsonant  (numbers) {
	var str = makeFixed('.',
				new Array('㉠', '㉡', '㉢', '㉣', '㉤', '㉥', '㉦', '㉧', '㉨', '㉩', '㉪', '㉫', '㉬', '㉭'),
				numbers.split(' ')
				);
	return str;
	}

function circledkoreansyllable  (numbers) {
	var str = makeFixed('.',
				new Array('㉮', '㉯', '㉰', '㉱', '㉲', '㉳', '㉴', '㉵', '㉶', '㉷', '㉸', '㉹', '㉺', '㉻'),
				numbers.split(' ')
				);
	return str;
	}

function parenthesizedhangulconsonant  (numbers) {
	var str = makeFixed('.',
				new Array('㈀', '㈁', '㈂', '㈃', '㈄', '㈅', '㈆', '㈇', '㈈', '㈉', '㈊', '㈋', '㈌', '㈍'),
				numbers.split(' ')
				);
	return str;
	}

function parenthesizedhangulsyllable  (numbers) {
	var str = makeFixed('.',
				new Array('㈎', '㈏', '㈐', '㈑', '㈒', '㈓', '㈔', '㈕', '㈖', '㈗', '㈘', '㈙', '㈚'),
				numbers.split(' ')
				);
	return str;
	}




//  ============ NUMERIC ========================

function returnNumeric (value, digits) {
	// replace the digits 0-9 with the appropriate character
	var result = '';
	for (var p=0;p<value.length;p++) {
		switch (value[p]) {
			case '0': result += digits[0]; break;
			case '1': result += digits[1]; break;
			case '2': result += digits[2]; break;
			case '3': result += digits[3]; break;
			case '4': result += digits[4]; break;
			case '5': result += digits[5]; break;
			case '6': result += digits[6]; break;
			case '7': result += digits[7]; break; 
			case '8': result += digits[8]; break;
			case '9': result += digits[9]; break;
			default: result += value[p];
			}
		}
	return result;
	}

function makeNumeric (postfix, digits, numbers) {
	var str = '';
	for (i=0;i<numbers.length; i++) {
		//str += '<span title="'+numbers[i]+'">'+returnNumeric(numbers[i], digits)+'</span>';
		//if (i < numbers.length-1) { str += ' &nbsp; '; }
		str += returnNumeric(numbers[i], digits);
		if (i < numbers.length-1) { str += ' '; }
		}
	return str;
	}


function arabicindic (numbers) {
	var str = makeNumeric('.',
				new Array('٠','١','٢','٣','٤','٥','٦','٧','٨','٩'),
				numbers.split(' ')
				);
	return str;
	}

function cjkdecimal (numbers) {
	var str = makeNumeric('、',
				new Array('〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'),
				numbers.split(' ')
				);
	return str;
	}

function persian (numbers) {
	var str = makeNumeric('.',
				new Array('۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'),
				numbers.split(' ')
				);
	return str;
	}

function thai (numbers) {
	var str = makeNumeric('.',
				new Array('๐','๑','๒','๓','๔','๕','๖','๗','๘','๙'),
				numbers.split(' ')
				);
	return str;
	}

function cambodiankhmer (numbers) {
	var str = makeNumeric('.',
				new Array('០','១','២','៣','៤','៥','៦','៧','៨','៩'),
				numbers.split(' ')
				);
	return str;
	}

function lao (numbers) {
	var str = makeNumeric('.',
				new Array('໐','໑','໒','໓','໔','໕','໖','໗','໘','໙'),
				numbers.split(' ')
				);
	return str;
	}

function myanmar (numbers) {
	var str = makeNumeric('.',
				new Array('၀','၁','၂','၃','၄','၅','၆','၇','၈','၉'),
				numbers.split(' ')
				);
	return str;
	}

function shan (numbers) {
	var str = makeNumeric('.',
				new Array('႐','႑','႒','႓','႔','႕','႖','႗','႘','႙'),
				numbers.split(' ')
				);
	return str;
	}

function devanagari (numbers) {
	var str = makeNumeric('.',
				new Array('०','१','२','३','४','५','६','७','८','९'),
				numbers.split(' ')
				);
	return str;
	}

function bengali (numbers) {
	var str = makeNumeric('.',
				new Array('০','১','২','৩','৪','৫','৬','৭','৮','৯'),
				numbers.split(' ')
				);
	return str;
	}

function gujarati (numbers) {
	var str = makeNumeric('.',
				new Array('૦','૧','૨','૩','૪','૫','૬','૭','૮','૯'),
				numbers.split(' ')
				);
	return str;
	}

function gurmukhi (numbers) {
	var str = makeNumeric('.',
				new Array('੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯'),
				numbers.split(' ')
				);
	return str;
	}

function kannada (numbers) {
	var str = makeNumeric('.',
				new Array('೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'),
				numbers.split(' ')
				);
	return str;
	}

function lepcha (numbers) {
	var str = makeNumeric('.',
				new Array('᱀', '᱁', '᱂', '᱃', '᱄', '᱅', '᱆', '᱇', '᱈', '᱉'),
				numbers.split(' ')
				);
	return str;
	}

function malayalam (numbers) {
	var str = makeNumeric('.',
				new Array('൦', '൧', '൨', '൩', '൪', '൫', '൬', '൭', '൮', '൯'),
				numbers.split(' ')
				);
	return str;
	}

function mongolian (numbers) {
	var str = makeNumeric('.',
				new Array('᠐', '᠑', '᠒', '᠓', '᠔', '᠕', '᠖', '᠗', '᠘', '᠙'),
				numbers.split(' ')
				);
	return str;
	}

function oriya (numbers) {
	var str = makeNumeric('.',
				new Array('୦', '୧', '୨', '୩', '୪', '୫', '୬', '୭', '୮', '୯'),
				numbers.split(' ')
				);
	return str;
	}

function tamil (numbers) {
	var str = makeNumeric('.',
				new Array('௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'),
				numbers.split(' ')
				);
	return str;
	}

function telugu (numbers) {
	var str = makeNumeric('.',
				new Array('౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'),
				numbers.split(' ')
				);
	return str;
	}

function tibetan (numbers) {
	var str = makeNumeric('.',
				new Array('༠', '༡', '༢', '༣', '༤', '༥', '༦', '༧', '༨', '༩'),
				numbers.split(' ')
				);
	return str;
	}



//  ============ CHINESE ========================

function returnChinese (value, limit, digits, markers, informal) {
	if (value == 0) { return digits[0]; }
	if (value > limit) { return value; }
	var valuearray = new Array;
	for (var i=0;i<value.length;i++) {
		valuearray[i] = value[i];
		}
	
	// for each digit that is not 0, append the appropriate digit marker
	for (var j=valuearray.length-2;j>-1;j--) {
		if (valuearray[j] != '0') { valuearray[j] += markers[4-valuearray.length+j]; }
		}
	var str = '';
	for (var k=0; k<valuearray.length; k++) {
		str += valuearray[k];
		}

	// trim trailing zeros
	while (str.length >1 && str[str.length-1] == '0') {
		str = str.slice(0,-1);
		}
	
	// replace the digits 0-9 with the appropriate character
	var result = '';
	for (var p=0;p<str.length;p++) {
		
		switch (str[p]) {
			case '0': result += digits[0]; break;
			case '1': result += digits[1]; break;
			case '2': result += digits[2]; break;
			case '3': result += digits[3]; break;
			case '4': result += digits[4]; break;
			case '5': result += digits[5]; break;
			case '6': result += digits[6]; break;
			case '7': result += digits[7]; break; 
			case '8': result += digits[8]; break;
			case '9': result += digits[9]; break;
			default: result += str[p];
			}
		}

	// collapse remaining zeros into a single zero digit
	result = result.replace(/[零]+/g, '零');
	
	// for informal styles, if value is between 10 and 19 remove the tens digit but leave the marker
	if (informal && value > 9 && value < 20) { 
		result = result.replace(/一/, '');
		}
	return result;
	}

function makeChinese (postfix, limit, digits, markers, numbers, informal) {
	var str = '';
	for (i=0;i<numbers.length; i++) {
		//str += '<span title="'+numbers[i]+'">'+returnChinese(numbers[i], limit, digits, markers, informal)+'</span>';
		//if (i < numbers.length-1) { str += ' &nbsp; '; }
		str += returnChinese(numbers[i], limit, digits, markers, informal);
		if (i < numbers.length-1) { str += ' '; }
		}
	return str;
	}



function simpchineseformal (numbers) {
	var str = makeChinese('、',
				9999, 
				new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'),
				new Array('仟','佰','拾'),
				numbers.split(' '),
				false
				);
	str = str.replace(/[零]+/g, '零');
	return str;
	}

function simpchineseinformal (numbers) {
	var str = makeChinese('、',
				9999, 
				new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九'),
				new Array('千','百','十'),
				numbers.split(' '),
				true
				);
	return str;
	}

function tradchineseformal (numbers) {
	var str = makeChinese('、',
				9999, 
				new Array('零', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖'),
				new Array('仟','佰','拾'),
				numbers.split(' '),
				false
				);
	str = str.replace(/[零]+/g, '零');
	return str;
	}

function tradchineseinformal (numbers) {
	var str = makeChinese('、',
				9999, 
				new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九'),
				new Array('千','百','十'),
				numbers.split(' '),
				true
				);
	return str;
	}




//  ============ ADDITIVE ========================


function returnAdd (value, limit, tuples) {
	if (value == 0 && tuples[tuples.length-1]['n'] == 0) { return tuples[tuples.length-1]['c']; }
	if (value > limit) { return value; }
	var ptr = 0; var str = '';
	//debug('returnAdd, tuples.length', tuples.length);
	while (value > 0 && ptr < tuples.length) {
		//debug('returnAdd, ptr', ptr);
		//debug('returnAdd, tuples[ptr][n]', tuples[ptr]['n']);
		add = Math.floor(value/tuples[ptr]['n']);
		if (add != 0) { 
			//echo add.' '.tuples[ptr]['c'].'; ';
			for (var j=0; j<add; j++) {
				str += tuples[ptr]['c']; 
				value = value - tuples[ptr]['n']; 
				}
			}
		ptr++;
		}
	return str;
	}


function makeAdditive (postfix, limit, alphabet, numbers) {
	var tuples = new Array;
	//debug('makeAdditive, alphabet.length',alphabet.length);
	var ptr = 0;
	for (i=0; i<alphabet.length; i++) {
		tuples[ptr] = new Object;
		tuples[ptr]['n'] = alphabet[i];
		tuples[ptr]['c'] = alphabet[++i];
		ptr = tuples.length;
		}
	var str = '';
	for (i=0;i<numbers.length; i++) {
		//str += '<span title="'+numbers[i]+'">'+returnAdd(numbers[i], limit, tuples)+'</span>';
		str += returnAdd(numbers[i], limit, tuples);
		//if (i < numbers.length-1) { str += ' &nbsp; '; }
		if (i < numbers.length-1) { str += ' '; }
		}
	return str;
	}


function armenian (numbers) {
	var str = makeAdditive('.',
				9999, 
				new Array(9000,'Ք', 8000,'Փ', 7000,'Ւ', 6000,'Ց', 5000,'Ր', 4000,'Տ', 3000,'Վ', 2000,'Ս', 1000,'Ռ', 900,'Ջ', 800,'Պ', 700,'Չ', 600,'Ո', 500,'Շ', 400,'Ն', 300,'Յ', 200,'Մ', 100,'Ճ', 90,'Ղ', 80,'Ձ', 70,'Հ', 60,'Կ', 50,'Ծ', 40,'Խ', 30,'Լ', 20,'Ի', 10,'Ժ', 9,'Թ', 8,'Ը', 7,'Է', 6,'Զ', 5,'Ե', 4,'Դ', 3,'Գ', 2,'Բ', 1,'Ա'),
				numbers.split(' ')
				);
	return str;
	}

function lowerarmenian (numbers) {
	var str = makeAdditive('.',
				9999, 
				new Array(9000, 'ք', 8000, 'փ', 7000, 'ւ', 6000, 'ց', 5000, 'ր', 4000, 'տ', 3000, 'վ', 2000, 'ս', 1000, 'ռ', 900, 'ջ', 800, 'պ', 700, 'չ', 600, 'ո', 500, 'շ', 400, 'ն', 300, 'յ', 200, 'մ', 100, 'ճ', 90, 'ղ', 80, 'ձ', 70, 'հ', 60, 'կ', 50, 'ծ', 40, 'խ', 30, 'լ', 20, 'ի', 10, 'ժ', 9, 'թ', 8, 'ը', 7, 'է', 6, 'զ', 5, 'ե', 4, 'դ', 3, 'գ', 2, 'բ', 1, 'ա'),
				numbers.split(' ')
				);
	return str;
	}

function upperarmenian (numbers) {
	var str = makeAdditive('.',
				9999, 
				new Array(9000,'Ք', 8000,'Փ', 7000,'Ւ', 6000,'Ց', 5000,'Ր', 4000,'Տ', 3000,'Վ', 2000,'Ս', 1000,'Ռ', 900,'Ջ', 800,'Պ', 700,'Չ', 600,'Ո', 500,'Շ', 400,'Ն', 300,'Յ', 200,'Մ', 100,'Ճ', 90,'Ղ', 80,'Ձ', 70,'Հ', 60,'Կ', 50,'Ծ', 40,'Խ', 30,'Լ', 20,'Ի', 10,'Ժ', 9,'Թ', 8,'Ը', 7,'Է', 6,'Զ', 5,'Ե', 4,'Դ', 3,'Գ', 2,'Բ', 1,'Ա'),
				numbers.split(' ')
				);
	return str;
	}

function georgian (numbers) {
	var str = makeAdditive('.',
				19999, 
				new Array(10000,'ჵ', 9000,'ჰ', 8000,'ჯ', 7000,'ჴ', 6000,'ხ', 5000,'ჭ', 4000,'წ', 3000,'ძ', 2000,'ც', 1000,'ჩ', 900,'შ', 800,'ყ', 700,'ღ', 600,'ქ', 500,'ფ', 400,'ჳ', 300,'ტ', 200,'ს', 100,'რ', 90,'ჟ', 80,'პ', 70,'ო', 60,'ჲ', 50,'ნ', 40,'მ', 30,'ლ', 20,'კ', 10,'ი', 9,'თ', 8,'ჱ', 7,'ზ', 6,'ვ', 5,'ე', 4,'დ', 3,'გ', 2,'ბ', 1, 'ა'),
				numbers.split(' ')
				);
	return str;
	}

function greek (numbers) {
	var str = makeAdditive('.',
				999, 
				new Array(900, 'ϡ', 800, 'ω', 700, 'ψ', 600, 'χ', 500, 'φ', 400, 'υ', 300, 'τ', 200, 'σ', 100, 'ρ', 90, 'ϟ', 80, 'π', 70, 'ο', 60, 'ξ', 50, 'ν', 40, 'μ', 30, 'λ', 20, 'κ', 10, 'ι', 9, 'θ', 8, 'η', 7, 'ζ', 6, 'στ', 5, 'ε', 4, 'δ', 3, 'γ', 2, 'β', 1, 'α'),
				numbers.split(' ')
				);
	return str;
	}

function hebrew (numbers) {
	var str = makeAdditive('.',
				10999, 
				new Array(10000,'י׳',9000,'ט׳',8000,'ח׳',7000,'ז׳',6000,'ו׳',5000,'ה׳',4000,'ד׳',3000,'ג׳',2000,'ב׳',1000,'א׳',400,'ת',300,'ש',200,'ר',100,'ק',90,'צ',80,'פ',70,'ע',60,'ס',50,'נ',40,'מ',30,'ל',20,'כ',19,'יט',18,'יח',17,'יז',16,'טז',15,'טו',10,'י',9,'ט',8,'ח',7,'ז',6,'ו',5,'ה',4,'ד',3,'ג',2,'ב',1,'א'),
				numbers.split(' ')
				);
	return str;
	}

function japaneseinformal (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000,'九千', 8000,'八千', 7000,'七千', 6000,'六千', 5000,'五千', 4000,'四千', 3000,'三千', 2000,'二千', 1000,'千', 900,'九百', 800,'八百', 700,'七百', 600,'六百', 500,'五百', 400,'四百', 300,'三百', 200,'二百', 100,'百', 90,'九十', 80,'八十', 70,'七十', 60,'六十', 50,'五十', 40,'四十', 30,'三十', 20,'二十', 10,'十', 9,'九', 8,'八', 7,'七', 6,'六', 5,'五', 4,'四', 3,'三', 2,'二', 1,'一', 0, '〇'),
				numbers.split(' ')
				);
	return str;
	}

function japaneseformal (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000,'九阡', 8000,'八阡', 7000,'七阡', 6000,'六阡', 5000,'伍阡', 4000,'四阡', 3000,'参阡', 2000,'弐阡', 1000,'壱阡', 900,'九百', 800,'八百', 700,'七百', 600,'六百', 500,'伍百', 400,'四百', 300,'参百', 200,'弐百', 100,'壱百', 90,'九拾', 80,'八拾', 70,'七拾', 60,'六拾', 50,'伍拾', 40,'四拾', 30,'参拾', 20,'弐拾', 10,'壱拾', 9,'九', 8,'八', 7,'七', 6,'六', 5,'伍', 4,'四', 3,'参', 2,'弐', 1,'壱', 0, '零'),
				numbers.split(' ')
				);
	return str;
	}


function koreanhangulformal (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000, '구천', 8000, '팔천', 7000, '칠천', 6000, '육천', 5000, '오천', 4000, '사천', 3000, '삼천', 2000, '이천', 1000, '일천', 900, '구백', 800, '팔백', 700, '칠백', 600, '육백', 500, '오백', 400, '사백', 300, '삼백', 200, '이백', 100, '일백', 90, '구십', 80, '팔십', 70, '칠십', 60, '육십', 50, '오십', 40, '사십', 30, '삼십', 20, '이십', 10, '일십', 9, '구', 8, '팔', 7, '칠', 6, '육', 5, '오', 4, '사', 3, '삼', 2, '이', 1, '일', 0, '영'),
				numbers.split(' ')
				);
	return str;
	}

function koreanhanjainformal (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000, '九千', 8000, '八千', 7000, '七千', 6000, '六千', 5000, '五千', 4000, '四千', 3000, '三千', 2000, '二千', 1000, '千', 900, '九百', 800, '八百', 700, '七百', 600, '六百', 500, '五百', 400, '四百', 300, '三百', 200, '二百', 100, '百', 90, '九十', 80, '八十', 70, '七十', 60, '六十', 50, '五十', 40, '四十', 30, '三十', 20, '二十', 10, '十', 9, '九', 8, '八', 7, '七', 6, '六', 5, '五', 4, '四', 3, '三', 2, '二', 1, '一', 0, '零'),
				numbers.split(' ')
				);
	return str;
	}

function koreanhanjaformal (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000,'九仟', 8000,'八仟', 7000,'七仟', 6000,'六仟', 5000,'五仟', 4000,'四仟', 3000,'參仟', 2000,'貳仟', 1000,'壹仟', 900,'九百', 800,'八百', 700,'七百', 600,'六百', 500,'五百', 400,'四百', 300,'參百', 200,'貳百', 100,'壹百', 90,'九拾', 80,'八拾', 70,'七拾', 60,'六拾', 50,'五拾', 40,'四拾', 30,'參拾', 20,'貳拾', 10,'壹拾', 9,'九', 8,'八', 7,'七', 6,'六', 5,'五', 4,'四', 3,'參', 2,'貳', 1,'壹', 0,'零'),
				numbers.split(' ')
				);
	return str;
	}

function lowerroman (numbers) {
	var str = makeAdditive('、',
				3999, 
				new Array(1000,'m', 900,'cm',500,'d', 400,'cd', 100,'c', 90,'xc', 50,'l', 40,'xl', 10,'x', 9,'ix', 5,'v', 4,'iv', 1, 'i'),
				numbers.split(' ')
				);
	return str;
	}

function upperroman (numbers) {
	var str = makeAdditive('、',
				3999, 
				new Array(1000,'M', 900,'CM',500,'D', 400,'CD', 100,'C', 90,'XC', 50,'L', 40,'XL', 10,'X', 9,'IX', 5,'V', 4,'IV', 1, 'I'),
				numbers.split(' ')
				);
	return str;
	}

function ancienttamil (numbers) {
	var str = makeAdditive('、',
				9999, 
				new Array(9000, '௯௲', 8000, '௮௲', 7000, '௭௲', 6000, '௬௲', 5000, '௫௲', 4000, '௪௲', 3000, '௩௲', 2000, '௨௲', 1000, '௲', 900, '௯௱', 800, '௮௱', 700, '௭௱', 600, '௬௱', 500, '௫௱', 400, '௪௱', 300, '௩௱', 200, '௨௱', 100, '௱', 90, '௯௰', 80, '௮௰', 70, '௭௰', 60, '௬௰', 50, '௫௰', 40, '௪௰', 30, '௩௰', 20, '௨௰', 10, '௰', 9, '௯', 8, '௮', 7, '௭', 6, '௬', 5, '௫', 4, '௪', 3, '௩', 2, '௨', 1, '௧'),
				numbers.split(' ')
				);
	return str;
	}




// ========== ALPHABETIC ==============


function returnAlpha (n, alphabet ) {
  if (n < 1) { return n; }
  var str = '';
  //debug('n', n);
  while (n != 0) {
	  n = n-1;
	  str = alphabet[n % alphabet.length]+str;
	  n = Math.floor(n/alphabet.length);
	  }
  return str;
  }
  

function makeAlphabetic (alphabet, numbers) {
  var str = '';
  for (i=0;i<numbers.length; i++) {
	  //str += '<span title="'+numbers[i]+'">'+returnAlpha(numbers[i], alphabet)+"</span>";
	  //if (i < numbers.length-1) { str += ' &nbsp; '; }
	  str += returnAlpha(numbers[i], alphabet);
	  if (i < numbers.length-1) { str += ' '; }
	  }
  return str;
  }


function lowergreek (numbers) {
	var str = makeAlphabetic(
				new Array('α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω'),
				numbers.split(' ')
				);
	return str;
	}

function lowerbelorussian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'і', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ў', 'ф', 'х', 'ц', 'ч', 'ш', 'ы', 'ь', 'э', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperbelorussian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'І', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ў', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ы', 'Ь', 'Э', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function lowerbulgarian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperbulgarian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function lowermacedonian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'ѓ', 'е', 'ж', 'з', 'ѕ', 'и', 'ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 'р', 'с', 'т', 'ќ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'),
				numbers.split(' ')
				);
	return str;
	}

function uppermacedonian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Ѓ', 'Е', 'Ж', 'З', 'Ѕ', 'И', 'Ј', 'К', 'Л', 'Љ', 'М', 'Н', 'Њ', 'О', 'П', 'Р', 'С', 'Т', 'Ќ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'),
				numbers.split(' ')
				);
	return str;
	}

function lowerrussian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperrussian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function lowerrussianfull (numbers) {
	var str = makeAlphabetic(
				new Array( 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperrussianfull (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function lowerserbocroatian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и', 'ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 'р', 'с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'),
				numbers.split(' ')
				);
	return str;
	}

function upperserbocroatian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Е', 'Ж', 'З', 'И', 'Ј', 'К', 'Л', 'Љ', 'М', 'Н', 'Њ', 'О', 'П', 'Р', 'С', 'Т', 'Ћ', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'),
				numbers.split(' ')
				);
	return str;
	}

function lowerukrainian (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperukrainian (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function lowerukrainianfull (numbers) {
	var str = makeAlphabetic(
				new Array('а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'),
				numbers.split(' ')
				);
	return str;
	}

function upperukrainianfull (numbers) {
	var str = makeAlphabetic(
				new Array('А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'),
				numbers.split(' ')
				);
	return str;
	}

function hindi (numbers) {
	var str = makeAlphabetic(
				new Array('क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'),
				numbers.split(' ')
				);
	return str;
	}

function hiragana (numbers) {
	var str = makeAlphabetic(
				new Array('あ','い','う','え','お','か','き','く','け','こ','さ','し','す','せ','そ','た','ち','つ','て','と','な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ','ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ', 'ゐ', 'ゑ', 'を','ん'),
				numbers.split(' ')
				);
	return str;
	}

function hiraganairoha (numbers) {
	var str = makeAlphabetic(
				new Array('い','ろ','は','に','ほ','へ','と','ち','り','ぬ','る','を','わ','か','よ','た','れ','そ','つ','ね','な','ら','む','う','ゐ','の','お','く','や','ま','け','ふ','こ','え','て','あ','さ','き','ゆ','め','み','し','ゑ','ひ','も','せ','す'),
				numbers.split(' ')
				);
	return str;
	}

function katakana (numbers) {
	var str = makeAlphabetic(
				new Array('ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ','シ','ス','セ','ソ','タ','チ','ツ','テ','ト','ナ','ニ','ヌ','ネ','ノ','ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ', 'ヰ', 'ヱ', 'ヲ','ン'),
				numbers.split(' ')
				);
	return str;
	}

function katakanairoha (numbers) {
	var str = makeAlphabetic(
				new Array('イ','ロ','ハ','ニ','ホ','ヘ','ト','チ','リ','ヌ','ル','ヲ','ワ','カ','ヨ','タ','レ','ソ','ツ','ネ','ナ','ラ','ム','ウ','ヰ','ノ','オ','ク','ヤ','マ','ケ','フ','コ','エ','テ','ア','サ','キ','ユ','メ','ミ','シ','ヱ','ヒ','モ','セ','ス'),
				numbers.split(' ')
				);
	return str;
	}

function cjkearthlybranch (numbers) {
	var str = makeAlphabetic(
				new Array('子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'),
				numbers.split(' ')
				);
	return str;
	}

function cjkheavenlystem (numbers) {
	var str = makeAlphabetic(
				new Array('甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'),
				numbers.split(' ')
				);
	return str;
	}

function khmerconsonant (numbers) {
	var str = makeAlphabetic(
				new Array('ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ', 'ជ', 'ឈ', 'ញ', 'ដ', 'ឋ', 'ឌ', 'ឍ', 'ណ', 'ត', 'ថ', 'ទ', 'ធ', 'ន', 'ប', 'ផ', 'ព', 'ភ', 'ម', 'យ', 'រ', 'ល', 'វ', 'ស', 'ហ', 'ឡ', 'អ'),
				numbers.split(' ')
				);
	return str;
	}

function thaialphabetic (numbers) {
	var str = makeAlphabetic(
				new Array('ก', 'ข', 'ค', 'ง', 'จ', 'ฉ', 'ช', 'ซ', 'ฌ', 'ญ', 'ฎ', 'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ด', 'ต', 'ถ', 'ท', 'ธ', 'น', 'บ', 'ป', 'ผ', 'ฝ', 'พ', 'ฟ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ศ', 'ษ', 'ส', 'ห', 'ฬ', 'อ', 'ฮ'),
				numbers.split(' ')
				);
	return str;
	}

function koreanconsonant (numbers) {
	var str = makeAlphabetic(
				new Array('ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'),
				numbers.split(' ')
				);
	return str;
	}

function koreansyllable (numbers) {
	var str = makeAlphabetic(
				new Array('가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'),
				numbers.split(' ')
				);
	return str;
	}



// ========== ETHIOPIC ==============


function returnEthiopic (value, limit, assignments) {
	if (value == 1) { return '፩'; }
	
	// split into groups of two digits, starting with least significant
	// index each group sequentially, starting from least sig as group 0
	var remainder = value.toString();
	pairs = new Array; var ptr = remainder.length;
	while (remainder.length > 2) {
		pairs[pairs.length] = remainder.slice(-2);
		remainder = remainder.substring(0,remainder.length-2);
		}
	if (remainder != '') { pairs[pairs.length] = remainder; }
	
	// record which pairs are 00 - will be used later
	zeros = new Array;
	for (var i=0; i<pairs.length; i++) {
		 if (parseInt(pairs[i]) == 0) {
			 zeros[i] = true;
		 	}
		else { zeros[i] = false; }
		}

												//debug('pairs.length',pairs.length);
	// remove the digits if
	// - the group has an odd index and the value 1
	// - the group has the value 0
	// - the most significant group has the value 1
	for (var i=0; i<pairs.length; i++) {
		 if (parseInt(pairs[i]) == 0) {
			 pairs[i] = '';
		 	}
		}
	for (var i=1; i<pairs.length; i+=2) {
		 if (parseInt(pairs[i]) == 1) {
			 pairs[i] = '';
		 	}
		}
	if (parseInt(pairs[pairs.length-1]) == 1) {
		pairs[pairs.length-1] = '';
		}
		
	// substitute ethiopic digits for remaining groups
	var units, tens; var result = '';
	for (var i=0; i<pairs.length; i++) {
		//debug('pairs'+i,pairs[i]);
		if (pairs[i] != '' && pairs[i] != '*') {
			units = pairs[i] % 10;
			tens = pairs[i] - units;
			if (tens) { pairs[i] = assignments[tens]; } else { pairs[i] = ''; }
			if (units) { pairs[i] += assignments[units]; }
			}
		}
	
	// for each group with an odd index unless group is 0, append ፻
	//for (i=1;i<pairs.length;i +=2) {
	//	if (pairs[i] != '') { pairs[i] += '፻'; }
	//	}
	
	// for each group with an odd index, except those with value 0, append ፻
	for (i=1;i<pairs.length;i+=2) { //alert(pairs[i]);
		if (! zeros[i]) { pairs[i] += '፻'; } 
		}
	
	// for each group with an even index except group 0, append ፼
	for (i=2;i<pairs.length;i+=2) {
		//if (parseInt(pairs[i]) != 0) { pairs[i] += '፼'; }
		pairs[i] += '፼';
		}
	
	// concatenate groups into one string
	var result = '';
	for (i=pairs.length-1;i>-1;i--) {
		result += pairs[i];
		}
	
	
	
	//for (n=0; n<pairs.length; n++) {
	//	debug('pairs'+n,pairs[n]);
	//	}
	//debug('result',result);
	
	//alert(' ');
	return result;
	}


function makeEthiopic (limit, alphabet, numbers) {
	var assignments = new Array;
	for (i=0; i<alphabet.length; i++) {
		assignments[alphabet[i]] = alphabet[++i];
		}
	var str = '';
	for (i=0;i<numbers.length; i++) {
		//str += '<span title="'+numbers[i]+'">'+returnEthiopic(numbers[i], limit, assignments)+'</span>';
		//if (i < numbers.length-1) { str += ' &nbsp; '; }
		str += returnEthiopic(numbers[i], limit, assignments);
		if (i < numbers.length-1) { str += ' '; }
		}
	return str;
	}




function ethiopicnumeric (numbers) {
	var str = makeEthiopic(
				1000000000, 
				new Array(90,'፺', 80,'፹',70,'፸', 60,'፷', 50,'፶', 40,'፵', 30,'፴', 20,'፳', 10,'፲', 9,'፱', 8,'፰', 7,'፯', 6,'፮', 5,'፭', 4,'፬', 3, '፫', 2, '፪', 1, '፩'),
				numbers.split(' ')
				);
	return str;
	}

