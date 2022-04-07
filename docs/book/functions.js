function buildPage () {
    makeChapterTOC()
    }

function makeChapterTOC () {
    // create the list of h2 headings in the chapterTOC placeholder
    var h2s = document.querySelectorAll('h2')
    var out = ''
    
    for (var i=0;i<h2s.length;i++) {
        out += `<li>${ h2s[i].textContent }</li>`
        }
    
    document.getElementById('chapterTOC').innerHTML = out
    }
