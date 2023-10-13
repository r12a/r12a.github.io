


function addBoilerplate () {
    // Adds boilerplate text to the top and bottom of the page
    document.getElementById('top_boilerplate').innerHTML = `
    <div id="pageheader">
    <div class="pageicon"><a href="https://www.unicode.org/"><img class="pagelogo" src="https://www.unicode.org/webscripts/logo60s2.gif" alt="[Unicode]" ></a></div>

    <div class="pagetitle"><a class="headernav" href="https://www.unicode.org/consortium/consort.html">Consortium</a></div>

    <nav class="headerbar"><a href="https://www.unicode.org/main.html" class="headernav">Tech Site</a> | <a href="https://www.unicode.org/sitemap/" class="headernav">Site Map</a> | <a href="https://www.unicode.org/search" class="headernav">Search</a></nav>
    </div>
    
    <div class="graybar">&nbsp;</div>
    `

    document.getElementById('bottom_boilerplate').innerHTML = `
    <hr style="width:50%">
    <div id="pagebottom">
    <a href="http://www.unicode.org/copyright.html"><img src="http://www.unicode.org/img/hb_notice.gif" alt="Access to Copyright and terms of use" ></a>
    </div>
    `

    }