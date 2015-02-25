var debug = false

function hex2char ( hex ) {
	// converts a single hex number to a character
	// note that no checking is performed to ensure that this is just a hex number, eg. no spaces etc
	// hex: string, the hex codepoint to be converted
	var result = '';
	var n = parseInt(hex, 16);
    if (n <= 0xFFFF) { result += String.fromCharCode(n); } 
	else if (n <= 0x10FFFF) {
		n -= 0x10000
		result += String.fromCharCode(0xD800 | (n >> 10)) + String.fromCharCode(0xDC00 | (n & 0x3FF));
    	} 
	else { result += 'hex2Char error: Code point out of range: '+dec2hex(n); }
	return result;
		}

function convertCSS2Char ( str ) { 
	// converts a string containing CSS escapes to a string of characters
	// str: string, the input
	
	while (str.match(/\\([A-Fa-f0-9]{2,6})(\s)?/) != null) {
		str = str.replace(/\\([A-Fa-f0-9]{2,6})(\s)?/,hex2char(str.match(/\\([A-Fa-f0-9]{2,6})(\s)?/)[1]))
		}
	return str;
	}



function parseRule (rule, numbers) {
	// figures out the sytem and symbols and selects the appropriate processing algorithm
	// returns a space-separated list of numbers
	
	// tidy the input
	numbers = numbers.replace(/\s+/g,' ').trim()
	
	// deal with the special algorithms
	if (rule == 'ethiopic-numeric') return doEthiopicNumeric(numbers)
	if (rule == 'simp-chinese-formal') return simpchineseformal(numbers)
	if (rule == 'simp-chinese-informal') return simpchineseinformal(numbers)
	if (rule == 'trad-chinese-formal') return tradchineseformal(numbers)
	if (rule == 'trad-chinese-informal') return tradchineseinformal(numbers)
	
	// identify the system	
	var ruleType = rule.match(/system:[\s]*([^\s]+)[\s]*;/)[1]
	if (ruleType==null) { alert('System not recognised.'); return numbers }
	else if (ruleType != 'numeric' && ruleType != 'alphabetic' && ruleType != 'fixed' && ruleType != 'additive')  { alert('System not recognised: '+ruleType); return numbers }
	
	// get the symbols
	var symbolMatch = rule.match(/symbols:([^;]+);/)
	if (symbolMatch==null) { alert('Symbols not found. (Check you added a semi-colon after.)'); return numbers }
	else {
		symbolList = symbolMatch[1]
		symbolList = convertCSS2Char(symbolList)
		symbolList = symbolList.replace(/'|,/g,' ').replace(/[\s]+/g,' ').trim()
		symbolArray = symbolList.split(' ')
		if (debug) console.log('symbolList',symbolList, 'symbolArray',symbolArray)
		}
	
	// get the range
	var range = rule.match(/range:[\s]*([^\s]+)[\s]+([^\s]+)[\s]*;/)
	if (range != null) {
		upperLimit = parseInt(range[2])
		lowerLimit = parseInt(range[1])
		if (debug) console.log(lowerLimit, upperLimit)
		}

	
	switch (ruleType) {
		case 'numeric': return produceNumeric(numbers, symbolArray); break
		case 'alphabetic': return produceAlphabetic(numbers, symbolArray); break
		case 'fixed': return produceFixed(numbers, symbolArray); break
		case 'additive': return produceAdditive(numbers, symbolArray, lowerLimit, upperLimit); break
		}
	}

function produceNumeric (numList, symbolList) {
	// numList, space-separated list of ascii numbers to convert
	// symbolList, array of symbols
	
	var out = ''
	numList = numList.replace(/[\s]+/g,' ').trim()
	var numbers = numList.split(' ')

	var ok = true
	for (i=0;i<numbers.length;i++) if (parseInt(numbers[i]) < 0) ok = false
	if (! ok) alert('Unable to handle negative numbers in the numeric system.')

	var base = symbolList.length
	for (n=0; n<numbers.length; n++) {
		if (parseInt(numbers[n]) < 0)  value = numbers[n]
		else if (numbers[n] == '0') value = symbolList[0]
		else {
			var value = ''
			while (numbers[n] != 0) {
				value = symbolList[numbers[n] % base] + value
				numbers[n] = Math.floor(numbers[n]/base)
				}
			}
		out += value+' '
		}
	if (debug) console.log(out)
	return out
	}

function produceAlphabetic (numList, symbolList) {
	// numList, space-separated list of ascii numbers to convert
	// symbolList, array of symbols
	
	var out = ''
	numList = numList.replace(/[\s]+/g,' ').trim()
	var numbers = numList.split(' ')
	var N = symbolList.length
	for (i=0; i<numbers.length; i++) {
		value = numbers[i]
		S = ''
		if (value >0) {
			while (value != 0) {
				value--
				S = symbolList[value % N] + S
				value = Math.floor(value/N)
				}
			}
		else S = value
		out += S+' '
		}
	if (debug) console.log(out)
	return out
	}

function produceFixed (numList, symbolList) {
	// numList, space-separated list of ascii numbers to convert
	// symbolList, array of symbols

	var out = ''
	numList = numList.replace(/[\s]+/g,' ').trim()
	var numbers = numList.split(' ')
	var N = symbolList.length
	for (i=0; i<numbers.length; i++) {
		if (numbers[i] <= N && numbers[i] > 0) out += symbolList[numbers[i]-1] + ' '
		else out += numbers[i]+' '
		}
	if (debug) console.log(out)
	return out
	}


function returnAdd (value, llimit, ulimit, tuples) {
	if (value == 0 && tuples[tuples.length-1]['n'] == 0) { return tuples[tuples.length-1]['c']; }
	if (value > ulimit) return value
	if (value < llimit) return value
	var ptr = 0; var str = '';
	while (value > 0 && ptr < tuples.length) {
		add = Math.floor(value/tuples[ptr]['n']);
		if (add != 0) { 
			for (var j=0; j<add; j++) {
				str += tuples[ptr]['c']; 
				value = value - tuples[ptr]['n']; 
				}
			}
		ptr++;
		}
	return str;
	}


function produceAdditive (numList, symbolList, llimit, ulimit) {
	// numList, str, space-separated list of numbers to convert
	// symbolList, array, integer followed by character for each pair from high to low
	// limit, int, upper limit of the system
	
	var out = ''
	var numbers = numList.split(' ')
	var ok = true
	for (i=0;i<numbers.length;i++) if (parseInt(numbers[i]) < 0) ok = false
	if (! ok) alert('Can\'t currently handle additive systems for numbers less than 0.')

	var tuples = new Array;
	var ptr = 0;
	for (i=0; i<symbolList.length; i++) {
		tuples[ptr] = new Object;
		tuples[ptr]['n'] = symbolList[i];
		tuples[ptr]['c'] = symbolList[++i];
		ptr = tuples.length;
		}
	for (i=0; i<numbers.length; i++) {
		out += returnAdd(numbers[i], llimit, ulimit, tuples);
		if (i < numbers.length-1) { out += ' '; }
		}
	return out;
	}



function displayResult (numberlist, result) {
	// takes the result and outputs to the page
	// numberlist, the original, space-separated sequence of ASCII numbers input by the user
	// result, space-separated string of numbers in native format
	
	numberlist = numberlist.replace(/[\s]+/g,' ').trim()
	var numbers = numberlist.split(' ');
	var results = result.split(' ');

	
	// output the numbers horizontally with ascii originals in title attribute
	var out = '<div id="horizresults">'
	for (var n=0; n<numbers.length; n++) {
		out += '<span style="white-space:nowrap"><span class="'
		if (document.getElementById('showAscii').checked) out += 'original'
		else out += 'hidden'
		out += '">'+numbers[n]+'</span><span class="nativeNumber" dir="auto">'+results[n]+'</span></span> '
		}
	out += '</div>';
	document.getElementById('output').innerHTML = out;
	
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



function doEthiopicNumeric (numbers) {
	var str = makeEthiopic(
				1000000000, 
				new Array(90,'፺', 80,'፹',70,'፸', 60,'፷', 50,'፶', 40,'፵', 30,'፴', 20,'፳', 10,'፲', 9,'፱', 8,'፰', 7,'፯', 6,'፮', 5,'፭', 4,'፬', 3, '፫', 2, '፪', 1, '፩'),
				numbers.split(' ')
				);
	return str;
	}

