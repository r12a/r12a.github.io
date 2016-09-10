<?php

# THIS IS FOR PREPARING THE FAREAST BASE MAP

$nav = '';
$filename = '../svg_raw/base.svg';
		$fp = fopen($filename, "r");
		if (!$fp) { $message = 'Could not open file.  Check the spelling of the URI.'; }
	


$message = '';


		$svgtext = fread($fp,  filesize($filename));
		fclose($fp);
		
		echo 'svgtext length '.strlen($svgtext)."<br/>";
		
		// remove the top and bitmap
		$svgtext = preg_replace('/\<\?xml version="1\.0" encoding="utf-8"\?\>/',' ',$svgtext);
		$svgtext = preg_replace('/\<!-- Generator: Adobe Illustrator 19\.2\.1, SVG Export Plug-In . SVG Version: 6\.00 Build 0\)  --\>/',' ',$svgtext);
		$svgtext = preg_replace('/\<svg version="1\.1" xmlns="http\:\/\/www\.w3\.org\/2000\/svg" xmlns\:xlink="http:\/\/www\.w3\.org\/1999\/xlink" x="0px" y="0px"[\s]+viewBox="0 0 2905\.1 2313" style="enable-background\:new 0 0 2905\.1 2313;" xml\:space="preserve"\>/',' ',$svgtext);
		$svgtext = preg_replace('/<text font-weight="700" font-family="Myriad Pro, Arial,(.|\n)+<\/svg>/','</svg>',$svgtext);
		echo 'svgtext length '.strlen($svgtext)."<br/>";
		$newsvgtext = str_replace("'MyriadPro-Regular'","'Myriad Pro',Helvetica,Arial,sans-serif",$svgtext);
		$newsvgtext = str_replace("'MyriadPro-Semibold'","'Myriad Pro',Helvetica,Arial,sans-serif",$newsvgtext);
		$newsvgtext = str_replace("'MyriadPro-Bold'","'Myriad Pro',Helvetica,Arial,sans-serif",$newsvgtext);
		$newsvgtext = str_replace("'ArialMT'","'Myriad Pro',Helvetica,Arial,sans-serif",$newsvgtext);
		$newsvgtext = str_replace('</svg>',$message,$newsvgtext)."\n";
		
		// change style class names
		$newsvgtext = str_replace('.st','.bt',$newsvgtext)."\n";
		$newsvgtext = preg_replace('/st(\d\d?)/','bt$1',$newsvgtext);
	
		echo 'updated svgtext length '.strlen($newsvgtext)."<br/>";
		
		if (is_writable('../svg/base.svg')) { echo "is writeable<br/>"; }
		else { echo "NOT WRITEABLE<br/>";  exit; }

		//chmod($filename,0777);
		//$fp = fopen($filename, "wb");
		//if (!$fp) { $message = 'Could not open file.  Check the spelling of the URI.'; }
		//$numbytes = fwrite($fp, $newsvgtext);
		//if (fwrite($fp, $newsvgtext) === FALSE) {
		//	echo "Cannot write to file ($filename)";
		//	exit;
		//	}

		$numbytes = file_put_contents('../svg/base.svg', $newsvgtext);
  		echo "Wrote ($numbytes) bytes to file (base.svg)";

		//fclose($fp);


?>