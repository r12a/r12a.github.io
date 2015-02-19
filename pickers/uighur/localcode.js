var charData = {
ئا: { cp: "U+0626 U+0627", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER ALEF", mark: false },
ا: { cp: "U+0627", name: "ARABIC LETTER ALEF", mark: false },
ئە: { cp: "U+0626 U+06D5", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER AE", mark: false },
ە: { cp: "U+06D5", name: "ARABIC LETTER AE", mark: false },
ب: { cp: "U+0628", name: "ARABIC LETTER BEH", mark: false },
پ: { cp: "U+067E", name: "ARABIC LETTER PEH", mark: false },
ت: { cp: "U+062A", name: "ARABIC LETTER TEH", mark: false },
ج: { cp: "U+062C", name: "ARABIC LETTER JEEM", mark: false },
چ: { cp: "U+0686", name: "ARABIC LETTER TCHEH", mark: false },
خ: { cp: "U+062E", name: "ARABIC LETTER KHAH", mark: false },
د: { cp: "U+062F", name: "ARABIC LETTER DAL", mark: false },
ر: { cp: "U+0631", name: "ARABIC LETTER REH", mark: false },
ز: { cp: "U+0632", name: "ARABIC LETTER ZAIN", mark: false },
ژ: { cp: "U+0698", name: "ARABIC LETTER JEH", mark: false },
س: { cp: "U+0633", name: "ARABIC LETTER SEEN", mark: false },
ش: { cp: "U+0634", name: "ARABIC LETTER SHEEN", mark: false },
غ: { cp: "U+063A", name: "ARABIC LETTER GHAIN", mark: false },
ف: { cp: "U+0641", name: "ARABIC LETTER FEH", mark: false },
ق: { cp: "U+0642", name: "ARABIC LETTER QAF", mark: false },
ك: { cp: "U+0643", name: "ARABIC LETTER KAF", mark: false },
گ: { cp: "U+06AF", name: "ARABIC LETTER GAF", mark: false },
ڭ: { cp: "U+06AD", name: "ARABIC LETTER NG", mark: false },
ل: { cp: "U+0644", name: "ARABIC LETTER LAM", mark: false },
م: { cp: "U+0645", name: "ARABIC LETTER MEEM", mark: false },
ن: { cp: "U+0646", name: "ARABIC LETTER NOON", mark: false },
ھ: { cp: "U+06BE", name: "ARABIC LETTER HEH DOACHASHMEE", mark: false },
ئو: { cp: "U+0626 U+0648", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER WAW", mark: false },
و: { cp: "U+0648", name: "ARABIC LETTER WAW", mark: false },
ئۇ: { cp: "U+0626 U+06C7", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER U", mark: false },
ۇ: { cp: "U+06C7", name: "ARABIC LETTER U", mark: false },
ئۆ: { cp: "U+0626 U+06C6", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER OE", mark: false },
ۆ: { cp: "U+06C6", name: "ARABIC LETTER OE", mark: false },
ئۈ: { cp: "U+0626 U+06C8", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER YU", mark: false },
ۈ: { cp: "U+06C8", name: "ARABIC LETTER YU", mark: false },
ۋ: { cp: "U+06CB", name: "ARABIC LETTER VE", mark: false },
ئې: { cp: "U+0626 U+06D0", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER E", mark: false },
ې: { cp: "U+06D0", name: "ARABIC LETTER E", mark: false },
ئى: { cp: "U+0626 U+0649", name: "ARABIC LETTER YEH WITH HAMZA ABOVE, ARABIC LETTER ALEF MAKSURA", mark: false },
ىي: { cp: "U+0649 U+064A", name: "ARABIC LETTER ALEF MAKSURA, ARABIC LETTER YEH", mark: false },
ي: { cp: "U+064A", name: "ARABIC LETTER YEH", mark: false },
'٠': { cp: "U+0660", name: "ARABIC-INDIC DIGIT ZERO", mark: false },
'١': { cp: "U+0661", name: "ARABIC-INDIC DIGIT ONE", mark: false },
'٢': { cp: "U+0662", name: "ARABIC-INDIC DIGIT TWO", mark: false },
'٣': { cp: "U+0663", name: "ARABIC-INDIC DIGIT THREE", mark: false },
'٤': { cp: "U+0664", name: "ARABIC-INDIC DIGIT FOUR", mark: false },
'٥': { cp: "U+0665", name: "ARABIC-INDIC DIGIT FIVE", mark: false },
'٦': { cp: "U+0666", name: "ARABIC-INDIC DIGIT SIX", mark: false },
'٧': { cp: "U+0667", name: "ARABIC-INDIC DIGIT SEVEN", mark: false },
'٨': { cp: "U+0668", name: "ARABIC-INDIC DIGIT EIGHT", mark: false },
'٩': { cp: "U+0669", name: "ARABIC-INDIC DIGIT NINE", mark: false },
'؟': { cp: "U+061F", name: "ARABIC QUESTION MARK", mark: false },
'،': { cp: "U+060C", name: "ARABIC COMMA", mark: false },
'؛': { cp: "U+061B", name: "ARABIC SEMICOLON", mark: false },end: {}
}



// define character to insert as a base for combining characters
var _combiningBase = '\u00A0'


function localInitialise () {

	}


_characterSet = 
"ئا ا ئە ە ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك گ ڭ ل م ن ھ ئو و ئۇ ۇ ئۆ ۆ ئۈ ۈ ۋ ئې ې ئى ىي ي ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ؟ ، ؛"


var _h = {
"62A": ['646'],
"646": ['62A'],
"62F": ['631'],
"631": ['62F'],
"642": ['6CB'],
"698": ['6CB'],
"6CB": ['698','642'],
"643": ['6AD'],
"6AD": ['643'],
"64A": ['6D0','64964A','6266D0'],
"6D0": ['64A','64964A'],
"64964A": ['64A','6D0'],
'626649': ['6266D0'],
'6266D0': ['626649'],
'6266C7': ['626648'],
'626648': ['6266C7'],
"665": ['6D5'],
"6D5": ['665'],
end: {}
}





