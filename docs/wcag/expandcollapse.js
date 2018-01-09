// For an explanation of how to make this work see
// http://people.w3.org/rishida/blog/?p=86
// "Code notes: Expanding and collapsing lists"


function openAll (container, triggerName, classNm) {
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	var triggers = document.getElementById(container).getElementsByTagName(triggerName);
	for(var i=0;i<triggers.length;i++){
		if (classNm == '' || triggers[i].className == classNm) { revealContent(triggers[i]); }
		}
	return false;
	}

function closeAll (container, triggerName, classNm) {
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	var triggers = document.getElementById(container).getElementsByTagName(triggerName);
	for(var i=0;i<triggers.length;i++){
		if (classNm == '' || triggers[i].className == classNm) { hideContent(triggers[i]); }
		}
	return false;
	}

function hideContent (node) {
	node.className = node.className.replace(/triggerClosed/, 'triggerOpen');
	node = node.nextSibling;
	while (node != null) {
		if (node.nodeType == 1 && node.className.search(/hiddenContent/) == -1) {
			//node.className = node.className + ' hiddenContent';
			node.className = node.className.replace(/revealedContent/, 'hiddenContent');
			}
		node = node.nextSibling
		}
	}
				
function revealContent (node) { 
	node.className = node.className.replace(/triggerOpen/, 'triggerClosed');
	node = node.nextSibling;
	while (node != null) {
		if (node.nodeType == 1 && node.className.search(/revealedContent/) == -1) {
			node.className = node.className.replace(/hiddenContent/, 'revealedContent');
			}
		node = node.nextSibling
		}
	}
				

function toggleContent (node) { 
	if (node.className.search(/triggerOpen/) > -1) { revealContent(node); }
	else { hideContent(node); }
	return false;
	}


function setCollapseExpand (container, triggerName, classNm){
	// container: string, id of block element surrounding all the expanding content
	// triggerName: string, tag name of block element you click on to expand/collapse content
	// classNm: string, empty string or name of class used to identify trigger elements
	// 	this helps if you use the same elements for trigger and hidden content 
	if (document.getElementById && document.getElementsByTagName){ 
		var triggers = document.getElementById(container).getElementsByTagName(triggerName);

		for (var i=0;i<triggers.length;i++){ 
			if (classNm == '' || triggers[i].className == classNm) {
				// set up triggers
				var content = triggers[i];
					content.className = content.className+' triggerOpen';
					content.setAttribute('title', 'Show/hide');
					var a = document.createElement('a');  
						a.setAttribute('href', '#_');
						a.onclick = function() { toggleContent(this.parentNode); return false; };
					while (content.childNodes.length > 0) {  
						a.appendChild( content.firstChild );
						}
					content.appendChild(a);
    		
				// hide content
				var node = content.nextSibling;
				while (node != null) {
					if (node.nodeType == 1) {
						node.className = node.className + ' hiddenContent';
						}
					node = node.nextSibling;
					}
				}
			}
		}
	return false;
	}
    		
function revealControl (node) {
    if (document.getElementById && document.getElementsByTagName){ 
    	control = document.getElementById(node);
    	control.className = control.className.replace(/hideIfNoJS/, '');
    	}
    }
	
    		
    		
//window.onLoad = setUpJavaScript();