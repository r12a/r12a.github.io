reviews = [ 

//	Add entries in any order, according to the following pattern:
//	array ( "Language",
//		"Script", 
//		"Number of characters in Unicode", 
//		"Case sensitive?", 
//		"Combining characters: y/n", 
//		"Context dependent positioning: y/n", 
//		"Multiple combining diacritics",
//		"Contextual shaping required", 
//		"Cursive script",
//		"Ligatures"
//		"Right-to-left",
//		"No space as word separator",
//		"Baseline",
//		"Tall/complex characters",
//		"Case distinction",
//		),

//								Context	Mult	Context								No						
//		No.		case	CC		Posn	CC		Shaping	Cursive	RTL				Space	Baseln	Wrap		Justify	Region
	 [ "Tamazight", "Tifinagh", 	
	   32, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr (rtl,b,vtb,vbt)",			"yes",	"mid",	"space",	"space", 	"Europe"],
	 [ "English", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   52, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Europe"],
	 [ "Amharic", "Ethiopic", 
	   288, 	"no", 	1, 	"no", 	"no", 	"no",	"no", 	"ltr",			"no",	"mid",	"char",		"space",	"Africa"],
	 [ "Arabic", "Arabic \u003Ca href='/scripts/summaries/arabic'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   44, 	"no", 	8, 	"yes", 	"yes", 	"yes",	"yes", 	"rtl",			"yes",	"mid",	"space",	"word", 	"M East"],
	 [ "Armenian", "Armenian", 
	   84, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Europe"],
	 [ "Bengali", "Bengali", 	
	   68, 	"no", 	19, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"high",	"space",	"space", 	"Asia S"],
	 [ "Burmese", "Myanmar", 	
	   59, 	"no", 	17, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"no",	"mid",	"word",		"cluster", 	"Asia SE"],
	 [ "Cambodian", "Khmer", 
	   76, 	"no", 	29, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"no",	"mid",	"word",		"cluster",	"Asia SE"],
	 [ "Cherokee", "Cherokee", 	
	   172, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"America"],
	 [ "Chinese", "Han \u003Ca href='/scripts/summaries/han'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   2128, 	"no", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr / tbrl",	"no",	"low",	"char",		"char",		"Asia E"],
	 [ "Dzongkha", "Tibetan \u003Ca href='/scripts/summaries/tibetan'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   54, 	"no", 	26, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"no",	"high",	"special",	"char/special",		"Asia C"],
	 [ "French", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   84, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Europe"],
	 [ "Greek", "Greek \u003Ca href='/scripts/summaries/greek'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   71, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Europe"],
	 [ "Gujarati", "Gujarati", 	
	   68, 	"no", 	18, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"high",	"space",	"space", 	"Asia S"],
	 [ "Hausa", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   51, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Africa"],
	 [ "Hebrew", "Hebrew \u003Ca href='/scripts/summaries/hebrew'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   27, 	"no", 	0, 	"no", 	"no", 	"no",	"no", 	"rtl",			"yes",	"mid",	"space",	"space",	"M East"],
	 [ "Hindi", "Devanagari \u003Ca href='/scripts/summaries/devanagari'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   78, 	"no", 	18, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"high",	"space",	"space", 	"Asia S"],
	 [ "Igbo", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   56, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Africa"],
	 [ "Inuktitut", "UCAS", 	
	   109, 	"no", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"America"],
	 [ "Kannada", "Kannada", 	
	   82, 	"no", 	19, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia S"],
	 [ "Indonesian", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   46, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia SE"],
	 [ "Japanese", "Han, Kana \u003Ca href='/scripts/summaries/japanese'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   2128, 	"no", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr / tbrl",	"no",	"low",	"char",		"char",		"Asia E"],
	 [ "Korean", "Hangul \u003Ca href='/scripts/summaries/korean'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   2350, 	"no", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr / tbrl",	"yes",	"low",	"char",		"space",	"Asia E"],
	 [ "Lao", "Lao", 
	   55, 	"no", 	15, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"no",	"mid",	"word",		"cluster",	"Asia SE"],
	 [ "Malayalam", "Malayalam", 	
	   70, 	"no", 	16, 	"yes", 	"yes", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia S"],
	 [ "Mongolian", "Cyrillic \u003Ca href='/scripts/summaries/cyrillic'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   35, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Asia C"],
	 [ "Mongolian", "Mongolian", 
	   45, 	"no", 	0, 	"no", 	"no", 	"yes",	"yes", 	"tblr",			"yes",	"vertical",	"space",	"space",	"Asia C"],
	 [ "Nepali", "Devanagari \u003Ca href='/scripts/summaries/devanagari'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   68, 	"no", 	18, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"high",	"space",	"space", 	"Asia S"],
	 [ "Oriya", "Oriya", 	
	   62, 	"no", 	15, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia S"],
	 [ "Panjabi", "Gurmukhi", 	
	   68, 	"no", 	13, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"high",	"space",	"space", 	"Asia S"],
	 [ "Persian", "Arabic \u003Ca href='/scripts/summaries/arabic'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   43, 	"no", 	5, 	"yes", 	"no", 	"yes",	"yes", 	"rtl",			"yes",	"mid",	"space",	"word", 	"M East"],
	 [ "Portuguese [BR]", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   78, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Europe"],
	 [ "Russian", "Cyrillic \u003Ca href='/scripts/summaries/cyrillic'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   66, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space",	"Europe"],
	 [ "Spanish", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   66, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Europe"],
	 [ "Swahili", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   48, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Africa"],
	 [ "Tamil", "Tamil", 	
	   47, 	"no", 	12, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia S"],
	 [ "Telugu", "Telugu", 	
	   70, 	"no", 	19, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia S"],
	 [ "Thai", "Thai \u003Ca href='/scripts/summaries/thai'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   73, 	"no", 	16, 	"yes", 	"yes", 	"no",	"no", 	"ltr",			"no",	"mid",	"word",		"cluster",	"Asia SE"],
	 [ "Tibetan", "Tibetan \u003Ca href='/scripts/summaries/tibetan'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 
	   87, 	"no", 	51, 	"yes", 	"yes", 	"yes",	"no", 	"ltr",			"no",	"high",	"special",	"char/special",		"Asia C"],
	 [ "Urdu", "Arabic \u003Ca href='/scripts/summaries/arabic'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   50, 	"no", 	0, 	"no", 	"no", 	"yes",	"yes", 	"rtl",			"no",	"slope", "space",	"word", 	"Asia S"],
	 [ "Yoruba", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   70, 	"yes", 	2, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Africa"],
	 [ "Vietnamese", "Latin \u003Ca href='/scripts/summaries/latin'>\u003Cimg src='link.png' alt='details'/>\u003C/a>", 	
	   186, 	"yes", 	0, 	"no", 	"no", 	"no",	"no", 	"ltr",			"yes",	"mid",	"space",	"space", 	"Asia SE"]
		
	];

// work out complexity
	for (var n=0;n<reviews.length;n++) {
		complexity = 0;
		for (i=3;i<reviews[n].length-1;i++) { 
			if (reviews[n][i] != '0' && reviews[n][i] != 'no' && reviews[n][i] != 'mid') { complexity++; }
			}
		reviews[n][reviews[n].length] = complexity; 
		}




function resort (column) { 

table = '';

table += '<table id="reviewtable"><thead><tr>';

	tablecolumns = [
		"Language",
		"Script",
		"Number of characters", 
		"Case sensitive?", 
		"Combining characters", 
		"Context-based positioning", 
		"Multiple combining characters",
		"Contextual shaping", 
		"Cursive script",
		"Text direction",
		"Space is word separator",
		"Baseline",
		"Text wrap",
		"Justification",
		"Region",
		"Feature count"
		];
	
	for (var i=0;i<tablecolumns.length;i++) {
		table += '<th class="top"><a href="#theTable" onclick="resort(col='+i+');">'+tablecolumns[i]+'</a></th>'+"\n";
		}


table += '</tr></thead><tbody>';

language = 0;
script = 1;
numchars = 2;
ccase = 3;
combining = 4;
position = 5;
multcc = 6;
shaping = 7;
cursive = 8;
direction = 9;
spacesep = 10;
baseline = 11;
wrap = 12;
justify = 13;
region = 14;
fcount = 15;

		//var column = language;
		//if (isset($_GET['col']) && $_GET['col']!='') { $column=$_GET['col']; }

		for (i=0;i<reviews.length;i++) {
			temp = reviews[i][column];
			reviews[i][column] = reviews[i][0];
			reviews[i][0] = temp;
			}

		//if (column == language || column == script || column == spacesep ) { reviews.sort(); }
		//else { reviews.sort(function(a,b){return a-b}); }
		if (column == language || column == script || column == spacesep ) { reviews.sort(); }
		else if (column == numchars || column == combining || column == fcount ) { reviews.sort(function(a,b){var x=a[0];var y=b[0];return x-y}); }
		else { reviews.sort(); }
		
		for (i=0;i<reviews.length;i++) {
			temp = reviews[i][column];
			reviews[i][column] = reviews[i][0];
			reviews[i][0] = temp;
			}
	
		for (r=0;r<reviews.length;r++) {
			var fc = 0;
			table += '<tr>';
			table += '<th class="rowstart">'+reviews[r][language]+'</th>';
			table += '<td title="'+tablecolumns[script]+'">'+reviews[r][script]+'</td>';
			table += '<td title="'+tablecolumns[numchars]+'">'+reviews[r][numchars]+'</td>';
			table += '<td title="'+tablecolumns[ccase]+'"'; if (reviews[r][ccase]!='no'){table += 'class="y"'; fc++; } table += '>'+reviews[r][ccase]+'</td>';
			table += '<td title="'+tablecolumns[combining]+'"'; if (reviews[r][combining]!='0'){table += 'class="y"'; fc++;} table += '>'+reviews[r][combining]+'</td>';
			table += '<td title="'+tablecolumns[position]+'"'; if (reviews[r][position]!='no'){table += 'class="y"'; fc++;} table += '>'+reviews[r][position]+'</td>';
			table += '<td title="'+tablecolumns[multcc]+'"'; if (reviews[r][multcc]!='no'){table += 'class="y"'; fc++;} table += '>'+reviews[r][multcc]+'</td>';
			table += '<td title="'+tablecolumns[shaping]+'"'; if (reviews[r][shaping]!='no'){table += 'class="y"'; fc++;} table += '>'+reviews[r][shaping]+'</td>';
			table += '<td title="'+tablecolumns[cursive]+'"'; if (reviews[r][cursive]!='no'){table += 'class="y"'; fc++;} table += '>'+reviews[r][cursive]+'</td>';
			table += '<td title="'+tablecolumns[direction]+'"'; if (reviews[r][direction]!='ltr'){table += 'class="y"'; fc++;} table += '>'+reviews[r][direction]+'</td>';
			table += '<td title="'+tablecolumns[spacesep]+'"'; if (reviews[r][spacesep]!='yes'){table += 'class="y"'; fc++;} table += '>'+reviews[r][spacesep]+'</td>';
			table += '<td title="'+tablecolumns[baseline]+'"'; if (reviews[r][baseline]!='mid'){table += 'class="y"'; fc++;} table += '>'+reviews[r][baseline]+'</td>';
			table += '<td title="'+tablecolumns[wrap]+'"'; if (reviews[r][wrap]!='space'){table += 'class="y"'; fc++;} table += '>'+reviews[r][wrap]+'</td>';
			table += '<td title="'+tablecolumns[justify]+'"'; if (reviews[r][justify]!='space'){table += 'class="y"'; fc++;} table += '>'+reviews[r][justify]+'</td>';
			table += '<td title="'+tablecolumns[region]+'">'+reviews[r][region]+'</td>';
			
			// work out complexity
			//complexity = 0;
			//for (i=3;i<14;i++) { 
			//	if (reviews[r][i] != '0' && reviews[r][i] != 'no' && reviews[r][i] != 'mid') { complexity++; }
			//	}
			//table += '<td title="'+tablecolumns[15]+'">'+reviews[r][15]+'</td>';
			table += '<td title="'+tablecolumns[15]+'">'+fc+'</td>';
			table += '</tr>'+"\n";
			}



document.getElementById('theTable').innerHTML = table;
}
