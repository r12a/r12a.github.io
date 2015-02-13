<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

	<head>
		<title>Send data to capture.txt</title>
		<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
	</head>

	<body>

<?php
if ( isset( $_GET['output'] )) { 
	$filename = 'capture.txt';
	$numbytes = file_put_contents( $filename, $_GET['output'], FILE_APPEND );
	print "<p>$numbytes bytes written\n<p>";
	}
?>
	</body>
</html>
