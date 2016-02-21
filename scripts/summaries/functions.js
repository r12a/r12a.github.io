function clearExamples () {
	examples = document.getElementById('freeText').getElementsByTagName('span');
	for (var i=0; i<examples.length; i++) {
		examples[i].style.color = 'black';
		}
	
	var notes = document.getElementById('notes').getElementsByTagName('div');
	for (var i=0; i<notes.length; i++) { notes[i].style.display = 'none'; }
	}
	
function highlightExample (text) {
	document.getElementById(text).style.color = 'red';
	}


isJustified = false;

function toggleJustification () {
	var sample = document.getElementById( 'freeText' );
	var justifyButton = document.getElementById( 'justifyButton' ).childNodes[0];
	if (isJustified) { 
		sample.style.textAlign = '';
		isJustified = false;
		justifyButton.replaceData( 0, 100, ' Justify ' );
		}
	else {
		sample.style.textAlign = 'justify';
		isJustified = true;
		justifyButton.replaceData( 0, 100, ' Remove justification ' );
		if (document.getElementById( 'kashidaValue' ) && document.getElementById( 'kashidaValue' ).value != 0) { 
			sample.style.textKashida = document.getElementById( 'kashidaValue' ).value; 
			}
		}
	}


var currDirection = 'horizontal';

function toggleDirection () {
	var uText = document.getElementById( 'freeText' );
	if (currDirection == 'horizontal') { 
		uText.className = 'tb-rl';
		currDirection = 'vertical';
		}
	else {
		uText.className = 'lr-tb';
		currDirection = 'horizontal';
		}
	}


function showFeatureInfo (examples, featureInfoId) {
	// causes the page to display the info for the feature you clicked on
	// highlights, comma-separated string of example ids
	// featureInfo, string, id of the feature description block to show
	clearExamples()
	if (examples != '') {
		exampleIds = examples.split(',')
		for (var i=0;i<exampleIds.length;i++) {
			highlightExample(exampleIds[i])
			}
		}
	if (featureInfoId != '') {
		document.getElementById(featureInfoId).style.display = 'block'
		document.location = '#'+featureInfoId
		}
	}

function showAllFeatureInfo () {
	// causes the page to display all the info in note form
	var notes = document.querySelectorAll('.note')
	for (var i=0;i<notes.length;i++) {
		notes[i].style.display = 'block'
		}
	}
