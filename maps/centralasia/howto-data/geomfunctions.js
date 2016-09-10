var _lat = 0.000000;
var _lon = 0.000000;



function locateMe() {
	if ( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition( handleLocation, handleError );
		} 
	else {
		alert("Your user agent does not support geolocation!");
		}
	}


function handleError( a ) {
	switch ( a.code ) {
		case 0: alert("Geolocation Error:\n\n unknown error"); break;
		case 1: alert("Geolocation Error:\n\n The application origin does not have permission to use the Geolocation API"); break;
		case 2: alert("Geolocation Error:\n\n The position of the device could not be determined."); break;
		case 3: alert("Geolocation Error:\n\n The specified maximum length of time has elapsed before the implementation could successfully acquire the position of the device."); break;
		}
	}


function handleLocation(loc) { 
	var long = loc.coords.longitude;
	var lat  = loc.coords.latitude;
	
	document.getElementById("lat").value = lat+' '+long;
	
	//var url = "http://maps.google.com/maps?output=embed&z=16&ll=" + lat + "," + long + "&q=" + lat + "," + long + "+(You+are+here)";
	
	//var map = document.getElementById("map");
	//map.setAttribute("src", url);
	//map.style.display = "inline";
	}


function findThing(thing) {
	var url = "http://maps.google.com/maps?output=embed&amp;z=14&q=" + thing + "+loc:+" + lat + "," + long;
	document.getElementById("map").setAttribute("src", url);
	}



function normaliseInput (gps) {
	gps = gps.toUpperCase()
	gps = gps.replace(/DEG/g,'°')
	var locations
	
	// check whether numeric or field-based
	if (gps.match(/[N|S|E|W]/)) {
		// field-based
		gps = gps.replace(/\s/g, '')	// remove all spaces
		gps = gps.replace(/([N|E|W|S)])/g,'$1 ')
		gps = gps.trim()
		}
	else {
		// just numbers
		gps = gps.replace(/[\s]+/g,' ')  // normalise spaces
		gps = gps.trim()				 // remove leading trailing spaces
		}
	return gps
	}


function convert2decimal (posn) { 
	var neg = false;
	posn = posn.trim();
	posn = posn.toUpperCase(); 
	if (posn.charAt(0) == '-') { neg = true; }
	if (posn.charAt(posn.length-1) == 'S' || posn.charAt(posn.length-1) == 'W') { neg = true; }
	posn = posn.replace(/DEG/g, ' ');
	posn = posn.replace(/[^0-9\.\s]/g, ' ');
	posn = posn.replace(/ +/g, ' ');
	posn = posn.trim(); 
	
	if (posn.indexOf(' ') > -1) {
		var coords = posn.split(' ');
		posn = Number(coords[0]);
		if (coords.length > 1) { posn = posn + (Number(coords[1])/60); }
		if (coords.length > 2) { posn = posn + (Number(coords[2])/3600); }
		if (neg) { posn = 0 - posn; }
		}
	else {
		if (neg) { posn = 0 - posn; }
		}

	return posn;
	}


function posn2degrees (posn, type) {
	var neg = false;
	var hemis = ''; 
	if (posn < 0) { posn = 0 - posn; neg = true; } 
		
	if (type == 'lon') { if (neg) { hemis = 'W'; } else { hemis = 'E'; } }
	else { if (neg) { hemis = 'S'; } else { hemis = 'N'; } }
	
	if (Math.round(posn) == posn) { return parseInt(posn)+'°0\'0"'+hemis; } 

	var degrees = Math.ceil(posn)-1;
	
	var remainder = posn - degrees;
	remainder = remainder * 60;
	
	if (Math.round(remainder) == remainder) { return degrees+'° '+parseInt(remainder)+'\' 0" '+hemis; } 
	
	var minutes = Math.ceil(remainder)-1;
	
	remainder = (remainder) - minutes;
	var seconds = Math.round(remainder * 60 * 100)/100;
	
	return degrees+'° '+minutes+"' "+seconds+'" '+hemis;
	}


function posn2exif (posn, type) {
	var neg = false;
	var hemis = '';
	if (posn < 0) { posn = 0 - posn; neg = true; }

	if (type == 'lon') { if (neg) { hemis = 'W'; } else { hemis = 'E'; } }
	else { if (neg) { hemis = 'S'; } else { hemis = 'N'; } }
	
	if (Math.round(posn) == posn) { return parseInt(posn)+',00.0'+hemis; } 

	var degrees = Math.ceil(posn)-1;
	
	var remainder = posn - degrees;
	var minutes = Math.round(remainder * 60 * 10000)/10000;
	
	return degrees+','+minutes+hemis;
	}


function posn2flickr (posn, type) {
	var neg = false;
	var hemis = ''; 
	if (posn < 0) { posn = 0 - posn; neg = true; } 
		
	if (type == 'lon') { if (neg) { hemis = 'W'; } else { hemis = 'E'; } }
	else { if (neg) { hemis = 'S'; } else { hemis = 'N'; } }
	
	if (Math.round(posn) == posn) { return parseInt(posn)+'  deg 0\' 0" '+hemis; } 

	var degrees = Math.ceil(posn)-1;
	
	var remainder = posn - degrees;
	remainder = remainder * 60;
	
	if (Math.round(remainder) == remainder) { return degrees+' deg '+parseInt(remainder)+'\' 0" '+hemis; } 
	
	var minutes = Math.ceil(remainder)-1;
	
	remainder = (remainder) - minutes;
	var seconds = Math.round(remainder * 60 * 100)/100;
	
	return degrees+' deg '+minutes+"' "+seconds+'" '+hemis;
	}







function doConversion (gps, style) {
	// converts one format of gps coords to another
	// gps: the input string
	// style: str, one of, decimal, degrees, exif, flickr
	
	gps = normaliseInput(gps)
	var locations = gps.split(' ')
	var lat = locations[0];
	var lon = locations[1];
	
	_lat = Number(convert2decimal(lat));
	_lon = Number(convert2decimal(lon));
	
	if (style === 'decimal') return _lat.toFixed(6)+' '+_lon.toFixed(6)
	if (style === 'degrees') return posn2degrees(_lat, 'lat')+' '+posn2degrees(_lon, 'lon')
	if (style === 'exif') return posn2exif(_lat, 'lat')+' '+posn2exif(_lon, 'lon')
	if (style === 'flickr') return posn2flickr(_lat, 'lat')+' '+posn2flickr(_lon, 'lon')

	}