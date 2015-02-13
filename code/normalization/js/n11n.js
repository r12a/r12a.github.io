// Copyright (C) 2009  Richard Ishida ishida@w3.org
// Licence http://creativecommons.org/licenses/by-nc-sa/3.0/
// (If you use it, I'd be happy if you let me know.)
function nfc (strng) { 
	var composed = '';
	var current; var next; var temp; var str = new Array;
	strng += 'X';
	var i=-1; 
	// replace non-starter decompositions
	strng = strng.replace('́', '́');
	strng = strng.replace('̀', '̀');
	strng = strng.replace('̓', '̓');
	strng = strng.replace('̈́', '̈́');
	strng = strng.replace('ཱི', 'ཱི');
	i=-1; 
	var m = 0; // put all the characters into the str array, checking for supp chars
	for (var n=0;n<strng.length;n++) {
		if (strng.charAt(n) > '\uD7FF' && strng.charAt(n) < '\uDC00') { 
			str[m++] = strng.charAt(n)+strng.charAt(++n); 
			}
		else { str[m++] = strng.charAt(n); }
		}
	while (++i<str.length-1) { 
		current = str[i]; //alert(current);
		next = str[i+1];
		if (current in decomposable) { // decomposable char
			if ((! (current in nfcexclusions)) && (! (next in nonzerocc))) { // current char is not in exclusions & next of cclass 0
				composed += current;
				}
			else { // in exclusions or next not in cclass 0
				temp = decompose(current);
				while (str[++i] in nonzerocc) { temp+=str[i]; } // find combining sequence
				temp = reorder(temp);
				composed += compose(temp);
				i--;
				}
			}
		else if (current>='ᄀ' && current<='ᇹ') { // jamo characters
			temp = current;
			while (str[++i]>='ᄀ' && str[i]<='ᇹ') { temp+=str[i]; } // gather jamos
			composed += composeHangul(temp);
			i--;
			}
		else { // not a composite character... 
			if (next in nonzerocc) { // but followed by combining char(s)
				temp = current;
				while (str[++i] in nonzerocc) { temp+=str[i]; } // find combining sequence
				temp = reorder(temp);
				composed += compose(temp);
				i--;
				}
			else { 
				if (! ((current+next) in composable)) {
					composed += current; 
					} 
				else {
					var base=i; 
					while ((str[base]+str[++i]) in composable) {
						str[base] = composable[str[base]+str[i]]; 
						}
					composed += str[base]; i--;
					}
				}
			}
		}
	return composed;
	}

function nfd (str) { 
	str = decompose(str);
	str = reorder(str);
	return str;
	}

function compose (str) { 
	// takes a base character followed by combining characters in the right order and produces nfc
	var strlength = str.length;
	var str = str+'X';
	var lastcclass = -1;
	var ptrtype = -1;
	var base = str.charAt(0);
	var store = '';
	var next = '';
	var ptr = 1; 
	while (ptr < strlength) {
		next = str.charAt(ptr);
		if (next > '\uD7FF' && next < '\uDC00') { 
			next += str.charAt(++ptr); 
			}
		if ((base+next in composable) && ((! nonzerocc[next]) || nonzerocc[next] != lastcclass)) {
			base = composable[base+next];
			ptr++;
			}
		else {
			store += next;
			if (next in nonzerocc) { lastcclass = nonzerocc[next]; }
			ptr++;
			}
		}
	return base+store;
	}

function composeHangul (str) {
	strlength = str.length;
	if (strlength == 0) { return; }
	var last = str.charCodeAt(0);
	var result = new Array;
	result[0] = str.charAt(0);

	for (i=1; i<strlength; ++i) {
		var ch = str.charCodeAt(i);
		
		var lIndex = last-0x1100;
		if (0<=lIndex && lIndex<19) {
			var vIndex = ch-0x1161;
			if (0<=vIndex && vIndex<21) {
				last = 0xAC00+(lIndex*21+vIndex)*28;
				result[result.length-1] = String.fromCharCode(last);
				continue;
				}
			}
		
		var sIndex = last-0xAC00;
		if (0<=sIndex && sIndex<11172 && (sIndex % 28)==0) {
			var tIndex = ch-0x11A7;
			if (0<tIndex && tIndex<28) {
				last = last+tIndex;
				result[result.length-1] = String.fromCharCode(last);
				continue;
				}
			}
		last = ch;
		result[result.length] = String.fromCharCode(ch)
		}
	var resultstr = '';
	for (j=0;j<result.length;j++){ resultstr += result[j]; }
	return resultstr;
	}

function decompose (str) { 
	var decomposed = '';
	for (var i=0; i<str.length; i++) {
		var current = str.charAt(i); //alert(str.charCodeAt(i));
		if (current > '\uD7FF' && current < '\uDC00') { 
			current += str.charAt(++i); 
			}
		if (current in decomposable) {
			decomposed += decompose(decomposable[current]);
			}
		else if (current >= '가' && current <= '힣') { // hangul syllable
			decomposed += decomposeHangul(current);
			}
		else {
			decomposed += current;
			}
		}
	return decomposed;
	}

function decomposeHangul (ch) {
	chIndex = ch.charCodeAt(0);
	sIndex = chIndex-0xAC00;
	if (sIndex<0 || sIndex>=11172) {
		return ch;
		}
	result = '';
	l = 0x1100+Math.floor(sIndex/588);
	v = 0x1161+Math.floor((sIndex % 588)/28);
	t = 0x11a7+Math.floor(sIndex % 28);
	result += String.fromCharCode(l)+String.fromCharCode(v);
	if (t != 0x11A7) { result += String.fromCharCode(t); }
	return result;
	}

function ccorder (a, b) { return nonzerocc[a] - nonzerocc[b]; }

function reorder (source) { 
	source += 'X';
	var str = new Array;
	var current;
	var m = 0; // put all the characters into the str array, checking for supp chars
	for (var n=0;n<source.length;n++) {
		if (source.charAt(n) > '\uD7FF' && source.charAt(n) < '\uDC00') { 
			str[m++] = source.charAt(n)+source.charAt(++n); 
			}
		else { str[m++] = source.charAt(n); }
		}
	var reordered = ''; var j; 
	var i = 0;
	while (i < str.length-1) { // go through each character
		//alert(str.charAt(i));
		var temp = new Array;
		if (str[i] in nonzerocc && str[i+1] in nonzerocc) { // if more than one cc...
			j = 0; 
			while ( str[i+j] in nonzerocc ) {
				temp[j] = str[i+j]; // collect all cc's  in temp
				j++;
				}
			if (j == 2 && nonzerocc[temp[0]] > nonzerocc[temp[1]] ) { // if only two cc's, just swap them if needed
				reordered += str[i+1]+str[i];
				i += 2;
				}
			else if (j > 2) { 
				temp.sort(ccorder);
				for (var k=0; k<temp.length; k++) { reordered += temp[k]; }
				i += temp.length;
				}
			else {
				reordered += str[i]+str[i+1];
				i += 2;
			    }
			}
		else {
			reordered += str[i++];
			}
		}
	return reordered;
	}