function show (node, location) {
	var target = document.getElementById(location);
	var textToReplace = target.firstChild;
	var newText = document.createTextNode( node.title );
	var removedText = target.replaceChild(newText, textToReplace);
	}
	
function unshow(location) {
	var target = document.getElementById(location);
	var textToReplace = target.firstChild;
	var newText = document.createTextNode( ' ' );
	var removedText = target.replaceChild(newText, textToReplace);
	}
