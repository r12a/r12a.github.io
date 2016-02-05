function generateRuby (classNm, smudge) {
	// class: class name of ruby elements containing bopomofo ruby
	// smudge: integer, allows you to compensate for font variations by pushing down the 
	//         bopomofo by the number of pixels specified
	var searchstr
	if (classNm) searchstr = 'ruby.'+classNm
	else searchstr = 'ruby'
	var rubys = document.querySelectorAll(searchstr)
	topMargin = Number(getComputedStyle(rubys[0].parentNode).marginTop.replace(/[^\d]/g, ''))
	
	for (var r=0;r<rubys.length;r++) {
		var rts = rubys[r].querySelectorAll('rt')
		var rubyFontSize = Number(getComputedStyle(rubys[r]).fontSize.replace(/[^\d]/g, ''))
		for (var i=0;i<rts.length;i++){
			rts[i].style.width = '2em'
			rts[i].style.height = rubyFontSize
			rts[i].style.display = 'inline-block'
			rts[i].style.position = 'relative'
			
			// stick each rube in an array, and break out tone
			var rubes = []
			for (b=0;b<rts[i].textContent.length;b++){
				rubes[b] = rts[i].textContent.charAt(b)
				}
			var tone = ''
			if (rubes[rubes.length-1].match(/[ˋ|ˇ]/)) {
				tone = rubes[rubes.length-1]
				rubes.length = rubes.length - 1
				}
			rubes.reverse()
			
			// place the bopomofo vertically
			rts[i].textContent = ''
			var offset = smudge
			var rubeFontSize = Math.floor(rubyFontSize/3.33)
			rts[i].style.fontSize = rubeFontSize+'px'
			switch (rubes.length) {
				case 1: offset += 1*rubeFontSize; break
				case 2: offset += (rubeFontSize/2); break
				case 3: offset += 0; break
				}
			if (rubes[rubes.length-1] == '˙') offset += rubeFontSize/2
			var span
			for (var rube=0;rube<rubes.length;rube++) {
				span = document.createElement('span')
				span.style.width = '1em'
				span.style.position = 'absolute'
				span.style.bottom = (rube*rubeFontSize)+offset+'px'
				if (rubes[rube] == '˙') span.style.height = (rubeFontSize/2)+'px'
				span.textContent = rubes[rube]
				rts[i].appendChild(span)
				}
				
			// place the tone mark
			span = document.createElement('span')
			span.style.width = '1em'
			span.style.position = 'absolute'
			span.style.marginLeft = '.8em'
			var offset = smudge
			switch (rubes.length) {
				case 1: offset += 1*rubeFontSize; break
				case 2: offset += .5*rubeFontSize; break
				case 3: offset += 0*rubeFontSize; break
				}
			span.style.bottom = offset+'px'
			span.textContent = tone
			rts[i].appendChild(span)
			
			}
		}
	}
