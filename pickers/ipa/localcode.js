
globals.keyboard = ''

function localInitialise () {
	}
	

var _h = {

end: {}
}



var keyboarddef = [
"ɨ,ǃ,ɴ|ø,ˈ,‖|ɜ,ɹ,ɻ|ɾ,$,ɽ|ɫ,ˌ,ʟ|ɐ,̯,ɓ|ɤ,ɶ,ˠ|ɵ,*,ɞ|œ,(,ɠ|̥,),̊|-,‿,͡|̩,+,ǂ",
"q,ɒ,̝|w,ʍ,ʷ|e,ɛ,ɘ|r,ʁ,ʀ|t,θ,ʈ|y,ʏ,̞|u,ʊ,ɦ|i,ɪ,̟|o,ɔ,ʘ|p,ʋ,ɸ|[,æ,ɗ|],ʉ,̪",
"a,ɑ,̠|s,ʃ,ʂ|d,ð,ɖ|f,ɱ,ɟ|ɡ,ɣ,ɢ|h,ɥ,ʰ|j,ɲ,ʝ|k,ɬ,ɮ|l,ʎ,ɭ|;,ː,̈|ʲ,ə,ɚ|#,̃,̰",
"z,ʒ,ʐ|x,χ,ħ|c,ç,ɕ|v,ʌ,ʑ|b,β,ʙ|n,ŋ,ɳ|m,ɯ,ɰ|,̆,ʼ|.,→,̤|/,ʔ,ʕ",
]

var keyboardguide = [
"1,2,3,4,5,6,7,8,9,0,-,=,,,",
"q,w,e,r,t,y,u,i,o,p,[,],,,",
"a,s,d,f,g,h,j,k,l,;,',\\,,,",
"z,x,c,v,b,n,m,,.,/,,,,,"
]

var keyboardRowOffset = ['5px','20px','30px','50px']




function event_mouseoutChar ()  {
	// unhighlight this character
	this.style.backgroundColor = 'white'
	
	// unhighlight similar characters
	if (_h[this.id]) {
		ptr = this.id
		for (i=0;i<_h[ptr].length;i++) {
			document.getElementById(_h[ptr][i]).style.backgroundColor = 'white'
			}
		}
	}


function clearHighlights () {
	// called when a character is clicked on - removes any highlighting added by shape
	
	nodelist = document.querySelectorAll('.c')
	for (var i=0;i<nodelist.length;i++) {
		nodelist[i].style.backgroundColor = 'white'
		}
	}
