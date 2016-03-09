/*
The code in this file, wikihiero.js, and wh_list.js has been ported to 
javascript from the PHP at http://aoineko.free.fr/index.php. The images used have 
been downloaded from the same site.

The original PHP was under GPL licence.
*/



  var WH_TABLE_S = "<table>"
  var WH_TABLE_E = "</table>"
  var WH_TD_S = "<td>"
  var WH_TD_E = "</td>"

  var WH_MODE_DEFAULT = -1    // use default mode
  var WH_MODE_TEXT = 0    // text only
  var WH_MODE_HTML = 1    // HTML without CSS
  var WH_MODE_STYLE = 2    // HTML and CSS // not supporter
  var WH_MODE_IMAGE = 3    // picture (PNG) // not supporter

  var WH_TYPE_NONE = 0
  var WH_TYPE_GLYPH = 1    // rendered items
  var WH_TYPE_CODE = 2    // single code as ':', '*', '!', '(' or ')'
  var WH_TYPE_SPECIAL = 3    // advanced code (more than 1 caracter)
  var WH_TYPE_END = 4    // end of line '!'

  var WH_SCALE_DEFAULT = -1   // use default scale
  var WH_HEIGHT = 44
  var WH_IMG_MARGIN = 1    // default value
  var WH_CARTOUCHE_WIDTH = 2  // default value

  var WH_VER_MAJ = 0
  var WH_VER_MED = 2
  var WH_VER_MIN = 12

  var WH_IMG_DIR = "wh_img/"  //"img/" //
  var WH_IMG_PRE = "hiero_"
  var WH_IMG_EXT = ".png"

  var WH_DEBUG_MODE = true

var _wh_prefabs
var _wh_mode    = WH_MODE_HTML // default value
var _wh_scale   = 100          // default value



function escapeHtml(text) {
	var map = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
		}

	return text.replace(/[&<>"']/g, function(m) { return map[m]; })
	}

function escapeHtml(text) {
	//console.log('text: ',text)
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
	}



  //------------------------------------------------------------------------
  // WH_RenderGlyph - Render a glyph
  //------------------------------------------------------------------------
  // glyph  << glyph's code to render
  // option << option to add into <img> tag (use for height)
  // return >> a string to add to the stream
  //------------------------------------------------------------------------
  // globals
  // _wh_mode
  // _wh_files;
  // _wh_phonemes;
  // _wh_scale;

function WH_RenderGlyph(glyph, option) {
	var code, width, height, temp
	if(glyph === "..") {
		width = WH_HEIGHT
		return "<table width='{width}px' border='0' cellspacing='0' cellpadding='0'><tr><td>&nbsp;</td></tr></table>"
		}
	else if(glyph === ".") {
		width = WH_HEIGHT/2
		return "<table width='{width}px' border='0' cellspacing='0' cellpadding='0'><tr><td>&nbsp;</td></tr></table>"
		}
	else if(glyph === '<') {
		height = parseInt(WH_HEIGHT * _wh_scale / 100)
		code = _wh_phonemes[glyph]
		return "<img src='" + escapeHtml(WH_IMG_DIR + WH_IMG_PRE + code + WH_IMG_EXT) + "' height='"+height+"px' title='"+escapeHtml(glyph)+"' alt='"+escapeHtml(glyph)+"' />"
		}
	else if(glyph === '>') {
		height = parseInt(WH_HEIGHT * _wh_scale / 100)
		code = _wh_phonemes[glyph]
		return "<img src='" + escapeHtml(WH_IMG_DIR + WH_IMG_PRE + code + WH_IMG_EXT) + "' height='"+height+"px' title='" + escapeHtml(glyph) + "' alt='" + escapeHtml(glyph) + "' />"
		}
	
	if(glyph in _wh_phonemes) {
		code = _wh_phonemes[glyph]
		if(code in _wh_files) {
			temp = "<img style='margin:" + WH_IMG_MARGIN + "px;' " + option + " src='" + escapeHtml(WH_IMG_DIR + WH_IMG_PRE + code + WH_IMG_EXT) + "' title='" + escapeHtml(glyph) + "' alt='" + escapeHtml(glyph) + "' />"
			return temp
			}
		else return "<font title='" + escapeHtml(code) + "'>" + escapeHtml(glyph) + "</font>"
		}
	else if(glyph in _wh_files) return "<img style='margin:" + WH_IMG_MARGIN + "px;' " + option + " src='" + escapeHtml(WH_IMG_DIR + WH_IMG_PRE + glyph + WH_IMG_EXT) + "' title='" + escapeHtml(glyph) + "' alt='" + escapeHtml(glyph) + "' />"
	else return escapeHtml(glyph)
	}




  //------------------------------------------------------------------------
  // WH_Resize - Resize a glyph
  //------------------------------------------------------------------------
  // item         << glyph's code
  // is_cartouche << true if glyph inside a cartouche
  // total        << total size of a group for multi-glyph block
  // return       >> size
  //------------------------------------------------------------------------
  // globals
  // _wh_files;
  // _wh_phonemes;
  // _wh_scale;
  
function WH_Resize(item, is_cartouche, total) {
	var glyph, margin, height
	if(item in _wh_phonemes) glyph = _wh_phonemes[item]
	else glyph = item
	
	margin = 2 * WH_IMG_MARGIN
	if(is_cartouche) margin += 2 * parseInt(WH_CARTOUCHE_WIDTH * _wh_scale / 100)
	
	if(glyph in _wh_files) {
		height = margin + _wh_files[glyph][1]
		if(total) {
			if(total > WH_HEIGHT) return parseInt((( height * WH_HEIGHT / total ) - margin) * _wh_scale / 100)
			else return (height - margin) * _wh_scale / 100
			}
		else {
			if(height > WH_HEIGHT) return parseInt((( WH_HEIGHT * WH_HEIGHT / height ) - margin) * _wh_scale / 100)
			else return (height - margin) * _wh_scale / 100
			}
		}
		
	return (WH_HEIGHT - margin) * _wh_scale / 100
	}



  //------------------------------------------------------------------------
  // WikiHiero - Render hieroglyph text
  //------------------------------------------------------------------------
  // hiero  << text to convert
  // scale  << global scale in percentage (def=100%)
  // line   << use line [true|false] (def=false)
  // return >> string with converted code
  //------------------------------------------------------------------------
  // globals
  // _wh_prefabs;
  // _wh_files;
  // _wh_phonemes;
  // _wh_scale;

function WikiHieroHTML(hiero, scale, line)  {

	var wh_scale
	if(scale !== WH_SCALE_DEFAULT) wh_scale = scale;

	var html = ""
    
	if(line)  html += "<hr />\n"

	//------------------------------------------------------------------------
	// Split text into block, then split block into items
	var block = []
	block[0] = []
	block[0][0] = ""
	var block_id = 0
	var item_id = 0
	var parenthesis = 0
	var type = 0
	var is_cartouche = false
	var is_striped = false

	for (var char=0; char<hiero.length; char++) {
		var db = hiero[char]
		if (hiero[char] === '(') parenthesis++
		else if (hiero[char] === ')') parenthesis--
		if(parenthesis === 0) {
			if(hiero[char] === '-' || hiero[char] === ' ') {
				if(type !== WH_TYPE_NONE) {
					block_id++
					block[block_id] = []
					item_id = 0
					block[block_id][item_id] = ""
					type = WH_TYPE_NONE
					}
				}
			}
		else { // don't split block if inside parenthesis
			if(hiero[char] === '-') {
				item_id++
				block[block_id][item_id] = '-'
				type = WH_TYPE_CODE
				}
			}
		if(hiero[char] === '!' ) {
			if(item_id > 0) {
				block_id++
				block[block_id] = []
				item_id = 0
				}
			block[block_id][item_id] = hiero[char]
			type = WH_TYPE_END
			}
		else if (hiero[char].match(/[*:()]/)) {
			if(type === WH_TYPE_GLYPH || type === WH_TYPE_CODE) {
				item_id++
				block[block_id][item_id] = ""
				}
			block[block_id][item_id] = hiero[char]
			type = WH_TYPE_CODE
			}
		else if (hiero[char].match(/[a-zA-Z0-9]/) || hiero[char] === '.' || hiero[char] === '<' || hiero[char] === '>') {
			if(type === WH_TYPE_END) {
				block_id++
				block[block_id] = []
				item_id = 0;
				block[block_id][item_id] = ""
				}
			else if(type === WH_TYPE_CODE) {
				item_id++
				block[block_id][item_id] = ""
				}
			block[block_id][item_id] += hiero[char]
			type = WH_TYPE_GLYPH
			}
		}
	// DEBUG: See the block split table
	if(WH_DEBUG_MODE) {
		var ds = ''
		for (var d=0;d<block.length;d++){
			ds += "| "
			for (var dd=0;dd<block[d].length;dd++) {
				ds += block[d][dd] +" | "
				}
			ds += "\n"
			}
		console.log(ds)
		}

    var contentHtml = ''
	var tableHtml = ''
	var tableContentHtml = ""

	//console.log('block',block)
	
	var div = wh_scale/100
	var option, glyph
	for (var b=0;b<block.length;b++) {
		// simplest case, the block contain only 1 code -> render
		if(block[b].length === 1) {
			if(block[b][0] === "!") { // end of line 
				tableHtml = "</tr>" + WH_TABLE_E.WH_TABLE_S + "<tr>\n"
				if(line) contentHtml += "<hr />\n"
				}
			else if(block[b][0].match('<')) { // start cartouche
				contentHtml += WH_TD_S + WH_RenderGlyph(block[b][0]) + WH_TD_E
				is_cartouche = true;
				contentHtml += "<td>" + WH_TABLE_S + "<tr><td height='" + parseInt(WH_CARTOUCHE_WIDTH * div) + "px' bgcolor='black'></td></tr><tr><td>" + WH_TABLE_S + "<tr>\n"
				}
			else if(block[b][0].match('>')) { // end cartouche
				contentHtml += "</tr>" + WH_TABLE_E + "</td></tr><tr><td height='" + parseInt(WH_CARTOUCHE_WIDTH * div) + "px' bgcolor='black'></td></tr>" + WH_TABLE_E + "</td>\n"
				is_cartouche = false
				contentHtml  += WH_TD_S + WH_RenderGlyph(block[b][0]) + WH_TD_E
				} 
			else if(block[b][0] !== "") { // assum is glyph or '..' or '.'
				option = "height='" + WH_Resize(block[b][0], is_cartouche) + "px'"
				contentHtml += WH_TD_S + WH_RenderGlyph(block[b][0], option) + WH_TD_E
				}
			}
		// block contains more than 1 glyph
		else {
			// convert all codes into '&' to test prefabs glyph
			var temp = ""
			for (var t=0;t<block[b].length;t++) {
				if (block[b][t].match(/[\*\:\!\(\)]/)) temp += '&'
				else temp += block[b][t]
				}
			// test if block is in the prefabs list  
			if(temp in _wh_prefabs) {
				option = "height='" + WH_Resize(temp, is_cartouche) + "px'"
				contentHtml += WH_TD_S + WH_RenderGlyph(temp, option) + WH_TD_E
				}
			// block must be manually computed 
			else {
				// get block total height
				var line_max = 0
				var total    = 0
				var height   = 0
				for (t=0;t<block[b].length;t++) {
					if(block[b][t] === ":") {
						if(height > line_max) line_max = height
						total += line_max
						line_max = 0
						}
					else if(block[b][t] === "*") {
						if(height > line_max) line_max = height
						}
					else {
						if(block[b][t] in _wh_phonemes) glyph = _wh_phonemes[block[b][t]]
						else glyph = block[b][t]
						if(glyph in _wh_files) height = 2 + _wh_files[glyph][1]
						}
					}
				if(height > line_max) line_max = height
				total += line_max

				// render all glyphs into the block
				temp = ""
				for (t=0;t<block[b].length;t++) {
					if(block[b][t] === ":") temp += "<br />"
					else if(block[b][t] === "*") temp += " "
					else {
						// resize the glyph according to the block total height
						option = "height='" + WH_Resize(block[b][t], is_cartouche, total) + "px'"
						temp  += WH_RenderGlyph(block[b][t], option)
						}
					}
				contentHtml  += WH_TD_S + temp + WH_TD_E
				}
			contentHtml += "\n"
			}

	//console.log('html',html)
	//console.log('tableHtml',tableHtml)
	//console.log('contentHtml',contentHtml)
	//console.log('tableContentHtml',tableContentHtml)

		if(contentHtml.length > 0) {
			tableContentHtml += tableHtml + contentHtml
			contentHtml = ""
			tableHtml = ""
			}
		}
    if(tableContentHtml.length > 0) {
		html += WH_TABLE_S + "<tr>\n" + tableContentHtml + "</tr>" + WH_TABLE_E
		}
		
		
	html = '<table width="100%"><tr valign="middle"><td>' + html + '</td></tr></table>'
    return html;        
	}

