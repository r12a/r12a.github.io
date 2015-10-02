<!DOCTYPE html>
<html>
<head>
<title>List open i18n issues</title>
<meta charset="utf-8" />
<style>
h2 { margin-top: 2em; font-weight:bold; color:#900; border-bottom: 1px solid #ccc; }
.tagtitle { font-weight:bold; color:#900; font-size: 110%; margin-bottom: 0; }
.tagbody { margin-top: 0; margin-bottom: 0;  }
.tagbody::after {
	content: ' ' attr(title);
	font-size: 8px;
	margin-left: 10px;
	}

table { margin-top: 0; margin-left: 30px; width: 80%; }
td { vertical-align: top; text-align: start; }
.date { padding-left: 20px; font-size: 80%; }
.issuenum { padding-right: 10px; font-size: 80%; }
td a { text-decoration: none; color: #B33E40; }
</style>

<?php
$doc = new DOMDocument();
	$doc->loadHTMLFile('http://www.w3.org/International/track/issues/open');
	$elements = $doc->getElementsByTagName('tr');
$out = '';
$lines = array();
foreach ($elements as $element) {
	$element = preg_replace("/\n/","\t",$element->nodeValue);
	$element = preg_replace('/"/',"&quot;",$element);
	$lines[] = $element;
	}
?>
<script>
inputlines = [
<?php  
for  ($i=0;$i<count($lines);$i++) {
	//echo 'inputlines[inputlines.length-1] = "'.$lines[$i].'";'."\n";
	echo '"'.$lines[$i].'",'."\n";
	}
?>
'']
</script>

<script>
function aggregateByTopic () {
	//input = document.getElementById('input').value;
	//input = input.replace(/&/, '&amp;');
	//input = input.replace(/</, '&lt;');
	//var inputlines = input.split("\n");
	var output = '';
	var otherstuff = '';
	
	// join together lines that were split by a nickname
	for (i=0; i<inputlines.length-1; i++) {
		//console.log(inputlines[i])
		tempfields = inputlines[i].split('\t')
		//console.log(tempfields.length)
		if (tempfields.length == 1) {
			inputlines[i] = inputlines[i]+' '+inputlines[i+1]
			inputlines[i+1] = ''
			i++
			}
		//console.log(inputlines[i])
		}
	
	inputlines.reverse()
	
	// produce aggregated report by topic
	output = new Array;
	finaloutput = '' //'<h2>By topic</h2>';
	datestamp = ''
	day = ''
	for (i=0; i<inputlines.length-1; i++) {
		if (inputlines[i] != '') {
			fields = inputlines[i].split('\t')
		
		
			// get tags and remove
			status = fields[1]
			if (status !== 'CLOSED') {
				tag = fields[4]
				tag = tag.replace(' ','_')
				name = fields[2]
				name = name.replace('<','&lt;')
				date = fields[3]
				issuelink = fields[0]
				parts = issuelink.split(' ')
				detail = parts[0].split('-')
				issuelink = 'http://www.w3.org/International/track/issues/'+detail[1]
							
				//entries[i] = '<p class="tagbody"  title="'+datestamp+day+'">'+entries[i]+'</p>'
				
				// create an array with tags as keys
				if (tag != null) {
					if (output[tag]) {
						output[tag] += '<tr><td class="issuenum">'+detail[1]+'</td><td class="name"><a href="'+issuelink+'" target="_blank">'+name+'</a></td><td class="date">'+date+'</td></tr>'
						}
					else {
						output[tag] = '<tr><td class="issuenum">'+detail[1]+'</td><td class="name"><a href="'+issuelink+'" target="_blank">'+name+'</td><td class="date">'+date+'</a></td></tr>'
						}
					}
				}
			}
		}

	for (line in output) {
		finaloutput += '<p class="tagtitle" id="'+line+'" style="font-weight:bold; color:#900; font-size: 120%; margin-bottom: 0;" title="">'+line+"</p><table><tbody>"+output[line]+'</table></tbody>'
		}
	
	document.getElementById('output').innerHTML = finaloutput;
	}
	
</script>
<style type="text/css">
body { color: gray;  font-family: "helvetica neue", sans-serif; }
b { font-weight:bold; color:#900; font-size: 120%; }
i { font-weight:bold; color:#900; font-size: 90%; }
strong { color: orange; color: #ffb02e; font-weight: normal; font-size: 120%;  }
em { color: #B66B37; font-weight: normal; font-style: italic;  }
</style>
</head>
<body>
<h1>Open issue lister</h1>

<p>This page lists currently OPEN issues in the i18n Activity tracker, grouped by product, with the most recently created issues nearest the top.</p>
<p>Click on the issue name to go to the issue page, and once there look for a link to the thread, bugzilla or github issue.</p>
<p>If the issue is handled by email, you may find it useful to use the <a href="http://www.w3.org/Mail/flatten/">thread flattener</a> to view the whole thread. Just copy the URL for the thread into the flattener's top left input field.</p>
<p>There are <?php echo count($lines); ?> issues.</p>

<!--div>
<small style="font-size: 70%;">See the bottom of the page for instructions.</small>
<textarea id="input" placeholder="Put text here" style="width: 90%; height: 200px;"></textarea>
<input type="button" onclick="aggregateByTopic();" value="Do it" />
</div-->

<div id="output"> </div>

<div id="clean"></div>


<!--div style="font-size: 90%; margin-top: 7em;">
<h2>How to use this</h2>
<p>Go to <a href="http://www.w3.org/International/track/issues?sort=id">http://www.w3.org/International/track/issues?sort=id</a> and highlight all the rows in the table except the first two.</p>
<p>Copy and paste the highlighted text into the box above.</p>
<p>Click on "Do it".</p>
<p>You will be presented with a list of only OPEN issues, grouped by product, with the most recently created issues nearest the top.</p>
<p>Click on the issue name to go to the issue page, and once there look for a link to the thread, bugzilla or github issue.</p>
<p>If the issue is handled by email, you may find it useful to use the <a href="http://www.w3.org/Mail/flatten/">thread flattener</a> to view the whole thread. Just copy the URL for the thread into the flattener's top left input field.</p>
</div-->
<script>
aggregateByTopic()
</script>
</body>
</html>