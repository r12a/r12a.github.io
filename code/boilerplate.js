function bp_header (icon, pageType, pathToRoot) {
	return '<div id="wai-start" class="hide">'
		+ '<p>Use accesskey "n" to jump to the internal navigation links at any point. Right now you can</p>'
		+ '<ul id="wai-links">'
		+ '<li><a href="#contentstart">Skip to the content start</a></li>'
		+ '<li><a href="#internal-links">Skip to the internal navigation</a></li>'
		+ '</ul></div>'
		+ '<div id="site-navigation"> <img id="bp_picture" alt=" " src="'+icon+'"/></div>'
		+ '<div id="boilerplate"><div id="line" >&nbsp;</div></div>'
		+ '<div id="topbar"><a href="/">r12a</a> &gt;&gt; '+pageType+'</div>'
		+ '<div id="sitelinks" class="noprint">'
		+ '<a href="http://rishida.net/blog/">blog</a>&nbsp; <a href="/doclist">docs</a>&nbsp; <a href="/applist">apps</a>&nbsp; <a href="/photos">photos</a>&nbsp;&nbsp;</span></div>';
	}


function bp_compactHeader (icon, pageType, pathToRoot) {
	return '<div id="site-navigation"> <img id="bp_picture" class="compact" alt=" " src="'+icon+'"  /></div>'
		+ '<div id="boilerplate"><div id="line" class="midlength">&nbsp;</div></div>'
		+ '<div id="topbar"><a href="/">r12a</a> &gt;&gt; '+pageType+'</div>'
		+ '<div id="sitelinks" class="noprint">'
		+ '<a href="http://rishida.net/blog/">blog</a>&nbsp; <a href="/doclist">docs</a>&nbsp; <a href="/applist">apps</a>&nbsp; <a href="/photos">photos</a>&nbsp;&nbsp;</span></div>'
	}


function bp_appHeader (icon, appname, version) {
	return '<div id="site-navigation"> <img id="bp_picture" class="app" alt=" " src="'+icon+'"  /></div>'
		+ '<div id="boilerplate"><div id="line" class="app">&nbsp;</div></div>'
		+ '<div id="topbar"><a href="/index">r12a</a> &gt;&gt; <a href="/applist">apps</a> &gt;&gt; '+appname+' <span class="versionnumber">'+version+'</span></div>'
		+ '<div id="sitelinks" class="noprint">'
		+ '<a href="http://rishida.net/blog/">blog</a>&nbsp; <a href="/doclist">docs</a>&nbsp; <a href="/applist">apps</a>&nbsp; <a href="/photos">photos</a>&nbsp;&nbsp;</span></div>'
	}


function toggleNotes () {
	var notes = document.getElementById('detailednotes')
	var showNotes = document.getElementById('showNotes')
	if (notes.style.display=='block') {
		notes.style.display='none' 
		showNotes.textContent='show notes'
		} 
	else {
		notes.style.display='block'
		showNotes.textContent='hide notes'
		} 
	}
