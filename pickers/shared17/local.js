var _local = true;
if (window.location.href.match('r12a.github.io')) _local = false

function makeCharacterLink (cp, block, lang, direction) { 
	var hex = convertChar2CP(cp)
	var name = charData[cp]['name']
	var mark = charData[cp]['mark']
	var cbase = ''
	if (defaults.ccbase != '') cbase = '&amp;#x'+convertChar2CP(defaults.ccbase)+';'

	var out =  '<a href="/scripts/block/'+block+'#char'+hex+'"><span class="uname">U+'+hex+' '+name+'</span> <span lang="'+lang+'"'
	if (direction == 'rtl') { out += ' dir="rtl"' }
	out += '>'
	if (mark) { out += cbase }
	out += '&#x'+hex+';</span></a>'
	
	out = '<textarea id="characterLink" style="margin-left: 20px; width: 60%; border:0;">'+out+'</textarea>'
	
	document.getElementById('transcriptionWrapper').innerHTML = out +
	'<div id="closeTranscription" onclick="closeTranscription()">X</div>'
	document.getElementById('characterLink').select();
	}


function convertChar2CP ( textString ) { 
	var haut = 0;
	var n = 0;
	var CPstring = '';
	for (var i = 0; i < textString.length; i++) {
		var b = textString.charCodeAt(i); 
		if (b < 0 || b > 0xFFFF) {
			CPstring += 'Error in convertChar2CP: byte out of range ' + dec2hex(b) + '!';
			}
		if (haut != 0) {
			if (0xDC00 <= b && b <= 0xDFFF) {
				CPstring += dec2hex(0x10000 + ((haut - 0xD800) << 10) + (b - 0xDC00)) + ' ';
				haut = 0;
				continue;
				}
			else {
				CPstring += 'Error in convertChar2CP: surrogate out of range ' + dec2hex(haut) + '!';
				haut = 0;
				}
			}
		if (0xD800 <= b && b <= 0xDBFF) {
			haut = b;
			}
		else {
			CPstring += dec2hex(b) + ' ';
			}
		}
	var out = CPstring.substring(0, CPstring.length-1)
	while (out.length < 4) out = '0'+out
	return out
	}