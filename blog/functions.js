var generalTags = [
	"apps", 	
    "codenotes",
    "docs",
    "geotagging",
    "layout",
    "maps",
    "scripts",
    "scriptnotes",
    "unicode",
    "uri",
    "web",

	]
	
var appTags = [
    "converter",
    "i18n-checker",
    "langtags",
    "pickers",
    "uniview",
    "miscapps",
    "encoding",
    "charuse",
    "listcharacters",

	]
	
var scriptTags = [
	"aramaic", 	
    "arabic",
    "armenian",
    "balinese",
    "buginese",
    "bengali",
    "bopomofo",
    "cherokee",
    "devanagari",
    "ethiopic",
    "egyptian",
    "gujarati",
    "gurmukhi",
    "hangul",
    "hebrew",
    "indic",
    "ishidic",
    "ipa",
    "javanese",
    "khmer",
    "lisu",
    "makasar",
    "malayalam",
    "mongolian",
    "myanmar",
    "nko",
    "oldenglish",
    "oldnorse",
    "runic",
    "sundanese",
    "syriac",
    "thaana",
    "thai",
    "tifinagh",
    "tibetan",
    "uighur"

	]



function setTagList () {
	var out = ''
	var i
	for (i=0;i<generalTags.length;i++) {
		out += '<li><a href="index?tag='+generalTags[i]+'">'+generalTags[i]+'</a></li>\n'
		}
	document.getElementById('generalTags').innerHTML = out
	
	out = ''
	for (i=0;i<appTags.length;i++) {
		out += '<li><a href="index?tag='+appTags[i]+'">'+appTags[i]+'</a></li>\n'
		}
	document.getElementById('appTags').innerHTML = out
	
	out = ''
	for (i=0;i<scriptTags.length;i++) {
		out += '<li><a href="index?tag='+scriptTags[i]+'">'+scriptTags[i]+'</a></li>\n'
		}
	document.getElementById('scriptTags').innerHTML = out
	
	}