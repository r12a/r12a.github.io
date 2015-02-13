function bp_header (icon, pageType, pathToRoot) {
	return '<div id="wai-start" class="hide">'
		+ '<p>Use accesskey "n" to jump to the internal navigation links at any point. Right now you can</p>'
		+ '<ul id="wai-links">'
		+ '<li><a href="#contentstart">Skip to the content start</a></li>'
		+ '<li><a href="#internal-links">Skip to the internal navigation</a></li>'
		+ '</ul></div>'
		+ '<div id="site-navigation"> <img id="bp_picture" alt=" " src="'+icon+'"  /></div>'
		+ '<div id="boilerplate"><div id="line" >&nbsp;</div></div>'
		+ '<div id="topbar"><a href="'+pathToRoot+'">rishida</a> &gt;&gt; '+pageType+'</div>'
		+ '<div id="sitelinks" class="noprint">'
		+ '<a href="/rishida/blog/">blog</a>&nbsp; <a href="/rishida/writing">docs</a>&nbsp; <a href="/rishida/utilities">apps</a>&nbsp; <a href="/rishida/photo">photos</a>&nbsp;&nbsp;</span></div>';
	}


function bp_compactHeader (icon, pageType, pathToRoot) {
	return '<div id="site-navigation"> <img id="bp_picture" class="compact" alt=" " src="'+icon+'"  /></div>'
		+ '<div id="boilerplate"><div id="line" class="midlength">&nbsp;</div></div>'
		+ '<div id="topbar"><a href="'+pathToRoot+'">rishida</a> &gt;&gt; '+pageType+'</div>'
		+ '<div id="sitelinks" class="noprint">'
		+ '<a href="/rishida/blog/">blog</a>&nbsp; <a href="/rishida/writing">docs</a>&nbsp; <a href="/rishida/utilities">apps</a>&nbsp; <a href="/rishida/photo">photos</a>&nbsp;&nbsp;</span></div>';
	}