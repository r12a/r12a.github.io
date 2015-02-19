var _showHuffmanTrans =  ''
var _showGilbertTrans = ''

var charData = {
"\u1780": { cp: "U+1780", name: "KHMER LETTER KA", mark: false },
"\u1781": { cp: "U+1781", name: "KHMER LETTER KHA", mark: false },
"\u1782": { cp: "U+1782", name: "KHMER LETTER KO", mark: false },
"\u1783": { cp: "U+1783", name: "KHMER LETTER KHO", mark: false },
"\u1784": { cp: "U+1784", name: "KHMER LETTER NGO", mark: false },
"\u1785": { cp: "U+1785", name: "KHMER LETTER CA", mark: false },
"\u1786": { cp: "U+1786", name: "KHMER LETTER CHA", mark: false },
"\u1787": { cp: "U+1787", name: "KHMER LETTER CO", mark: false },
"\u1788": { cp: "U+1788", name: "KHMER LETTER CHO", mark: false },
"\u1789": { cp: "U+1789", name: "KHMER LETTER NYO", mark: false },
"\u178A": { cp: "U+178A", name: "KHMER LETTER DA", mark: false },
"\u178B": { cp: "U+178B", name: "KHMER LETTER TTHA", mark: false },
"\u178C": { cp: "U+178C", name: "KHMER LETTER DO", mark: false },
"\u178D": { cp: "U+178D", name: "KHMER LETTER TTHO", mark: false },
"\u178E": { cp: "U+178E", name: "KHMER LETTER NNO", mark: false },
"\u178F": { cp: "U+178F", name: "KHMER LETTER TA", mark: false },
"\u1790": { cp: "U+1790", name: "KHMER LETTER THA", mark: false },
"\u1791": { cp: "U+1791", name: "KHMER LETTER TO", mark: false },
"\u1792": { cp: "U+1792", name: "KHMER LETTER THO", mark: false },
"\u1793": { cp: "U+1793", name: "KHMER LETTER NO", mark: false },
"\u1794": { cp: "U+1794", name: "KHMER LETTER BA", mark: false },
"\u1795": { cp: "U+1795", name: "KHMER LETTER PHA", mark: false },
"\u1796": { cp: "U+1796", name: "KHMER LETTER PO", mark: false },
"\u1797": { cp: "U+1797", name: "KHMER LETTER PHO", mark: false },
"\u1798": { cp: "U+1798", name: "KHMER LETTER MO", mark: false },
"\u1799": { cp: "U+1799", name: "KHMER LETTER YO", mark: false },
"\u179B": { cp: "U+179B", name: "KHMER LETTER LO", mark: false },
"\u17A1": { cp: "U+17A1", name: "KHMER LETTER LA", mark: false },
"\u179A": { cp: "U+179A", name: "KHMER LETTER RO", mark: false },
"\u17A2": { cp: "U+17A2", name: "KHMER LETTER QA", mark: false },
"\u179F": { cp: "U+179F", name: "KHMER LETTER SA", mark: false },
"\u17A0": { cp: "U+17A0", name: "KHMER LETTER HA", mark: false },
"\u179C": { cp: "U+179C", name: "KHMER LETTER VO", mark: false },
"\u17CC": { cp: "U+17CC", name: "KHMER SIGN ROBAT", mark: true },
"\u17C9": { cp: "U+17C9", name: "KHMER SIGN MUUSIKATOAN", mark: true },
"\u17CA": { cp: "U+17CA", name: "KHMER SIGN TRIISAP", mark: true },
"\u17D2": { cp: "U+17D2", name: "KHMER SIGN COENG", mark: true },
"\u17D2\u1780": { cp: "U+17D2 U+1780", name: "KHMER SIGN COENG, KHMER LETTER KA", mark: true },
"\u17D2\u1781": { cp: "U+17D2 U+1781", name: "KHMER SIGN COENG, KHMER LETTER KHA", mark: true },
"\u17D2\u1782": { cp: "U+17D2 U+1782", name: "KHMER SIGN COENG, KHMER LETTER KO", mark: true },
"\u17D2\u1783": { cp: "U+17D2 U+1783", name: "KHMER SIGN COENG, KHMER LETTER KHO", mark: true },
"\u17D2\u1784": { cp: "U+17D2 U+1784", name: "KHMER SIGN COENG, KHMER LETTER NGO", mark: true },
"\u17D2\u1785": { cp: "U+17D2 U+1785", name: "KHMER SIGN COENG, KHMER LETTER CA", mark: true },
"\u17D2\u1786": { cp: "U+17D2 U+1786", name: "KHMER SIGN COENG, KHMER LETTER CHA", mark: true },
"\u17D2\u1787": { cp: "U+17D2 U+1787", name: "KHMER SIGN COENG, KHMER LETTER CO", mark: true },
"\u17D2\u1788": { cp: "U+17D2 U+1788", name: "KHMER SIGN COENG, KHMER LETTER CHO", mark: true },
"\u17D2\u1789": { cp: "U+17D2 U+1789", name: "KHMER SIGN COENG, KHMER LETTER NYO", mark: true },
"\u17D2\u178A": { cp: "U+17D2 U+178A", name: "KHMER SIGN COENG, KHMER LETTER DA", mark: true },
"\u17D2\u178B": { cp: "U+17D2 U+178B", name: "KHMER SIGN COENG, KHMER LETTER TTHA", mark: true },
"\u17D2\u178C": { cp: "U+17D2 U+178C", name: "KHMER SIGN COENG, KHMER LETTER DO", mark: true },
"\u17D2\u178D": { cp: "U+17D2 U+178D", name: "KHMER SIGN COENG, KHMER LETTER TTHO", mark: true },
"\u17D2\u178E": { cp: "U+17D2 U+178E", name: "KHMER SIGN COENG, KHMER LETTER NNO", mark: true },
"\u17D2\u178F": { cp: "U+17D2 U+178F", name: "KHMER SIGN COENG, KHMER LETTER TA", mark: true },
"\u17D2\u1790": { cp: "U+17D2 U+1790", name: "KHMER SIGN COENG, KHMER LETTER THA", mark: true },
"\u17D2\u1791": { cp: "U+17D2 U+1791", name: "KHMER SIGN COENG, KHMER LETTER TO", mark: true },
"\u17D2\u1792": { cp: "U+17D2 U+1792", name: "KHMER SIGN COENG, KHMER LETTER THO", mark: true },
"\u17D2\u1793": { cp: "U+17D2 U+1793", name: "KHMER SIGN COENG, KHMER LETTER NO", mark: true },
"\u17D2\u1794": { cp: "U+17D2 U+1794", name: "KHMER SIGN COENG, KHMER LETTER BA", mark: true },
"\u17D2\u1795": { cp: "U+17D2 U+1795", name: "KHMER SIGN COENG, KHMER LETTER PHA", mark: true },
"\u17D2\u1796": { cp: "U+17D2 U+1796", name: "KHMER SIGN COENG, KHMER LETTER PO", mark: true },
"\u17D2\u1797": { cp: "U+17D2 U+1797", name: "KHMER SIGN COENG, KHMER LETTER PHO", mark: true },
"\u17D2\u1798": { cp: "U+17D2 U+1798", name: "KHMER SIGN COENG, KHMER LETTER MO", mark: true },
"\u17D2\u1799": { cp: "U+17D2 U+1799", name: "KHMER SIGN COENG, KHMER LETTER YO", mark: true },
"\u17D2\u179B": { cp: "U+17D2 U+179B", name: "KHMER SIGN COENG, KHMER LETTER LO", mark: true },
"\u17D2\u17A1": { cp: "U+17D2 U+17A1", name: "KHMER SIGN COENG, KHMER LETTER LA", mark: true },
"\u17D2\u179A": { cp: "U+17D2 U+179A", name: "KHMER SIGN COENG, KHMER LETTER RO", mark: true },
"\u17D2\u17A2": { cp: "U+17D2 U+17A2", name: "KHMER SIGN COENG, KHMER LETTER QA", mark: true },
"\u17D2\u179F": { cp: "U+17D2 U+179F", name: "KHMER SIGN COENG, KHMER LETTER SA", mark: true },
"\u17D2\u17A0": { cp: "U+17D2 U+17A0", name: "KHMER SIGN COENG, KHMER LETTER HA", mark: true },
"\u17D2\u179C": { cp: "U+17D2 U+179C", name: "KHMER SIGN COENG, KHMER LETTER VO", mark: true },
"\u17A5": { cp: "U+17A5", name: "KHMER INDEPENDENT VOWEL QI", mark: false },
"\u17A6": { cp: "U+17A6", name: "KHMER INDEPENDENT VOWEL QII", mark: false },
"\u17A7": { cp: "U+17A7", name: "KHMER INDEPENDENT VOWEL QU", mark: false },
"\u17A9": { cp: "U+17A9", name: "KHMER INDEPENDENT VOWEL QUU", mark: false },
"\u17AA": { cp: "U+17AA", name: "KHMER INDEPENDENT VOWEL QUUV", mark: false },
"\u17AF": { cp: "U+17AF", name: "KHMER INDEPENDENT VOWEL QE", mark: false },
"\u17B0": { cp: "U+17B0", name: "KHMER INDEPENDENT VOWEL QAI", mark: false },
"\u17B1": { cp: "U+17B1", name: "KHMER INDEPENDENT VOWEL QOO TYPE ONE", mark: false },
"\u17B2": { cp: "U+17B2", name: "KHMER INDEPENDENT VOWEL QOO TYPE TWO", mark: false },
"\u17B3": { cp: "U+17B3", name: "KHMER INDEPENDENT VOWEL QAU", mark: false },
"\u17AB": { cp: "U+17AB", name: "KHMER INDEPENDENT VOWEL RY", mark: false },
"\u17AC": { cp: "U+17AC", name: "KHMER INDEPENDENT VOWEL RYY", mark: false },
"\u17AD": { cp: "U+17AD", name: "KHMER INDEPENDENT VOWEL LY", mark: false },
"\u17AE": { cp: "U+17AE", name: "KHMER INDEPENDENT VOWEL LYY", mark: false },
"\u17D2\u17A7": { cp: "U+17D2 U+17A7", name: "KHMER SIGN COENG, KHMER INDEPENDENT VOWEL QU", mark: true },
"\u17D2\u17AF": { cp: "U+17D2 U+17AF", name: "KHMER SIGN COENG, KHMER INDEPENDENT VOWEL QE", mark: true },
"\u17D2\u17AB": { cp: "U+17D2 U+17AB", name: "KHMER SIGN COENG, KHMER INDEPENDENT VOWEL RY", mark: true },
"\u17D2\u17AC": { cp: "U+17D2 U+17AC", name: "KHMER SIGN COENG, KHMER INDEPENDENT VOWEL RYY", mark: true },
"\u17B6": { cp: "U+17B6", name: "KHMER VOWEL SIGN AA", mark: true },
"\u17B6\u17C6": { cp: "U+17B6 U+17C6", name: "KHMER VOWEL SIGN AA, KHMER SIGN NIKAHIT", mark: true },
"\u17B7": { cp: "U+17B7", name: "KHMER VOWEL SIGN I", mark: true },
"\u17B8": { cp: "U+17B8", name: "KHMER VOWEL SIGN II", mark: true },
"\u17B9": { cp: "U+17B9", name: "KHMER VOWEL SIGN Y", mark: true },
"\u17BA": { cp: "U+17BA", name: "KHMER VOWEL SIGN YY", mark: true },
"\u17BB": { cp: "U+17BB", name: "KHMER VOWEL SIGN U", mark: true },
"\u17BB\u17C6": { cp: "U+17BB U+17C6", name: "KHMER VOWEL SIGN U, KHMER SIGN NIKAHIT", mark: true },
"\u17BB\u17C7": { cp: "U+17BB U+17C7", name: "KHMER VOWEL SIGN U, KHMER SIGN REAHMUK", mark: true },
"\u17BC": { cp: "U+17BC", name: "KHMER VOWEL SIGN UU", mark: true },
"\u17BD": { cp: "U+17BD", name: "KHMER VOWEL SIGN UA", mark: true },
"\u17C1": { cp: "U+17C1", name: "KHMER VOWEL SIGN E", mark: true },
"\u17C1\u17C7": { cp: "U+17C1 U+17C7", name: "KHMER VOWEL SIGN E, KHMER SIGN REAHMUK", mark: true },
"\u17C2": { cp: "U+17C2", name: "KHMER VOWEL SIGN AE", mark: true },
"\u17C3": { cp: "U+17C3", name: "KHMER VOWEL SIGN AI", mark: true },
"\u17C4": { cp: "U+17C4", name: "KHMER VOWEL SIGN OO", mark: true },
"\u17C4\u17C7": { cp: "U+17C4 U+17C7", name: "KHMER VOWEL SIGN OO, KHMER SIGN REAHMUK", mark: true },
"\u17C5": { cp: "U+17C5", name: "KHMER VOWEL SIGN AU", mark: true },
"\u17BE": { cp: "U+17BE", name: "KHMER VOWEL SIGN OE", mark: true },
"\u17BF": { cp: "U+17BF", name: "KHMER VOWEL SIGN YA", mark: true },
"\u17C0": { cp: "U+17C0", name: "KHMER VOWEL SIGN IE", mark: true },
"\u17C6": { cp: "U+17C6", name: "KHMER SIGN NIKAHIT", mark: true },
"\u17C7": { cp: "U+17C7", name: "KHMER SIGN REAHMUK", mark: true },
"\u17C8": { cp: "U+17C8", name: "KHMER SIGN YUUKALEAPINTU", mark: true },
"\u17CB": { cp: "U+17CB", name: "KHMER SIGN BANTOC", mark: true },
"\u17CD": { cp: "U+17CD", name: "KHMER SIGN TOANDAKHIAT", mark: true },
"\u17CE": { cp: "U+17CE", name: "KHMER SIGN KAKABAT", mark: true },
"\u17CF": { cp: "U+17CF", name: "KHMER SIGN AHSDA", mark: true },
"\u17D0": { cp: "U+17D0", name: "KHMER SIGN SAMYOK SANNYA", mark: true },
"\u17D7": { cp: "U+17D7", name: "KHMER SIGN LEK TOO", mark: false },
"\u17D4\u179B\u17D4": { cp: "U+17D4 U+179B U+17D4", name: "KHMER SIGN KHAN, KHMER LETTER LO, KHMER SIGN KHAN", mark: false },
"\u17DA": { cp: "U+17DA", name: "KHMER SIGN KOOMUUT", mark: false },
"\u17D4": { cp: "U+17D4", name: "KHMER SIGN KHAN", mark: false },
"\u17D5": { cp: "U+17D5", name: "KHMER SIGN BARIYOOSAN", mark: false },
"\u17D6": { cp: "U+17D6", name: "KHMER SIGN CAMNUC PII KUUH", mark: false },
"\u17D9": { cp: "U+17D9", name: "KHMER SIGN PHNAEK MUAN", mark: false },
"\u17DB": { cp: "U+17DB", name: "KHMER CURRENCY SYMBOL RIEL", mark: false },
"\u17E0": { cp: "U+17E0", name: "KHMER DIGIT ZERO", mark: false },
"\u17E1": { cp: "U+17E1", name: "KHMER DIGIT ONE", mark: false },
"\u17E2": { cp: "U+17E2", name: "KHMER DIGIT TWO", mark: false },
"\u17E3": { cp: "U+17E3", name: "KHMER DIGIT THREE", mark: false },
"\u17E4": { cp: "U+17E4", name: "KHMER DIGIT FOUR", mark: false },
"\u17E5": { cp: "U+17E5", name: "KHMER DIGIT FIVE", mark: false },
"\u17E6": { cp: "U+17E6", name: "KHMER DIGIT SIX", mark: false },
"\u17E7": { cp: "U+17E7", name: "KHMER DIGIT SEVEN", mark: false },
"\u17E8": { cp: "U+17E8", name: "KHMER DIGIT EIGHT", mark: false },
"\u17E9": { cp: "U+17E9", name: "KHMER DIGIT NINE", mark: false },
"\u17A4": { cp: "U+17A4", name: "KHMER INDEPENDENT VOWEL QAA", mark: false },
"\u17A3": { cp: "U+17A3", name: "KHMER INDEPENDENT VOWEL QAQ", mark: false },
"\u17B4": { cp: "U+17B4", name: "KHMER VOWEL INHERENT AQ", mark: true },
"\u17B5": { cp: "U+17B5", name: "KHMER VOWEL INHERENT AA", mark: true },
"\u17D3": { cp: "U+17D3", name: "KHMER SIGN BATHAMASAT", mark: true },
"\u17A8": { cp: "U+17A8", name: "KHMER INDEPENDENT VOWEL QUK", mark: false },
"\u179D": { cp: "U+179D", name: "KHMER LETTER SHA", mark: false },
"\u17D2\u179D": { cp: "U+17D2 U+179D", name: "KHMER SIGN COENG, KHMER LETTER SHA", mark: true },
"\u179E": { cp: "U+179E", name: "KHMER LETTER SSO", mark: false },
"\u17D2\u179E": { cp: "U+17D2 U+179E", name: "KHMER SIGN COENG, KHMER LETTER SSO", mark: true },
"\u17DC": { cp: "U+17DC", name: "KHMER SIGN AVAKRAHASANYA", mark: false },
"\u17DD": { cp: "U+17DD", name: "KHMER SIGN ATTHACAN", mark: true },
"\u17D1": { cp: "U+17D1", name: "KHMER SIGN VIRIAM", mark: true },
"\u17F0": { cp: "U+17F0", name: "KHMER SYMBOL LEK ATTAK SON", mark: false },
"\u17F1": { cp: "U+17F1", name: "KHMER SYMBOL LEK ATTAK MUOY", mark: false },
"\u17F2": { cp: "U+17F2", name: "KHMER SYMBOL LEK ATTAK PII", mark: false },
"\u17F3": { cp: "U+17F3", name: "KHMER SYMBOL LEK ATTAK BEI", mark: false },
"\u17F4": { cp: "U+17F4", name: "KHMER SYMBOL LEK ATTAK BUON", mark: false },
"\u17F5": { cp: "U+17F5", name: "KHMER SYMBOL LEK ATTAK PRAM", mark: false },
"\u17F6": { cp: "U+17F6", name: "KHMER SYMBOL LEK ATTAK PRAM-MUOY", mark: false },
"\u17F7": { cp: "U+17F7", name: "KHMER SYMBOL LEK ATTAK PRAM-PII", mark: false },
"\u17F8": { cp: "U+17F8", name: "KHMER SYMBOL LEK ATTAK PRAM-BEI", mark: false },
"\u17F9": { cp: "U+17F9", name: "KHMER SYMBOL LEK ATTAK PRAM-BUON", mark: false },
"\u17D8": { cp: "U+17D8", name: "KHMER SIGN BEYYAL", mark: false },
"\u19E0": { cp: "U+19E0", name: "KHMER SYMBOL PATHAMASAT", mark: false },
"\u19E7": { cp: "U+19E7", name: "KHMER SYMBOL PRAM-PII KOET", mark: false },
"\u19EE": { cp: "U+19EE", name: "KHMER SYMBOL DAP-BUON KOET", mark: false },
"\u19F5": { cp: "U+19F5", name: "KHMER SYMBOL PRAM ROC", mark: false },
"\u19FC": { cp: "U+19FC", name: "KHMER SYMBOL DAP-PII ROC", mark: false },
"\u19E1": { cp: "U+19E1", name: "KHMER SYMBOL MUOY KOET", mark: false },
"\u19E8": { cp: "U+19E8", name: "KHMER SYMBOL PRAM-BEI KOET", mark: false },
"\u19EF": { cp: "U+19EF", name: "KHMER SYMBOL DAP-PRAM KOET", mark: false },
"\u19F6": { cp: "U+19F6", name: "KHMER SYMBOL PRAM-MUOY ROC", mark: false },
"\u19FD": { cp: "U+19FD", name: "KHMER SYMBOL DAP-BEI ROC", mark: false },
"\u19E2": { cp: "U+19E2", name: "KHMER SYMBOL PII KOET", mark: false },
"\u19E9": { cp: "U+19E9", name: "KHMER SYMBOL PRAM-BUON KOET", mark: false },
"\u19F0": { cp: "U+19F0", name: "KHMER SYMBOL TUTEYASAT", mark: false },
"\u19F7": { cp: "U+19F7", name: "KHMER SYMBOL PRAM-PII ROC", mark: false },
"\u19FE": { cp: "U+19FE", name: "KHMER SYMBOL DAP-BUON ROC", mark: false },
"\u19E3": { cp: "U+19E3", name: "KHMER SYMBOL BEI KOET", mark: false },
"\u19EA": { cp: "U+19EA", name: "KHMER SYMBOL DAP KOET", mark: false },
"\u19F1": { cp: "U+19F1", name: "KHMER SYMBOL MUOY ROC", mark: false },
"\u19F8": { cp: "U+19F8", name: "KHMER SYMBOL PRAM-BEI ROC", mark: false },
"\u19E4": { cp: "U+19E4", name: "KHMER SYMBOL BUON KOET", mark: false },
"\u19EB": { cp: "U+19EB", name: "KHMER SYMBOL DAP-MUOY KOET", mark: false },
"\u19F2": { cp: "U+19F2", name: "KHMER SYMBOL PII ROC", mark: false },
"\u19F9": { cp: "U+19F9", name: "KHMER SYMBOL PRAM-BUON ROC", mark: false },
"\u19E5": { cp: "U+19E5", name: "KHMER SYMBOL PRAM KOET", mark: false },
"\u19EC": { cp: "U+19EC", name: "KHMER SYMBOL DAP-PII KOET", mark: false },
"\u19F3": { cp: "U+19F3", name: "KHMER SYMBOL BEI ROC", mark: false },
"\u19FA": { cp: "U+19FA", name: "KHMER SYMBOL DAP ROC", mark: false },
"\u19E6": { cp: "U+19E6", name: "KHMER SYMBOL PRAM-MUOY KOET", mark: false },
"\u19ED": { cp: "U+19ED", name: "KHMER SYMBOL DAP-BEI KOET", mark: false },
"\u19F4": { cp: "U+19F4", name: "KHMER SYMBOL BUON ROC", mark: false },
"\u19FB": { cp: "U+19FB", name: "KHMER SYMBOL DAP-MUOY ROC", mark: false },
end: {}
}

// define character to insert as a base for combining characters
//var _combiningBase = '\u00A0'
var _combiningBase = '\u00A0'
var _combiningBase = ''
//var _combiningBase = 'ក'



function localInitialise () {

	}



var _h = {
'1780': ['1782', '178F', '1797', '17A5'],
'1781': ['178C', '17A7', '17A9', '17AA', '17B1', '17B3'],
'1782': ['1780', '178F', '1797', '17A5'],
'1783': ['1799'],
'1785': ['1790'],
'1784': ['1787', '1795', '178A', '1786', '1792'],
'1786': ['1792', '1784', '1787', '1795', '178A'],
'1788': ['1783', '1799'],
'1789': ['17E3'],
'178A': ['1787', '1795', '1784', '1786', '1792'],
'178B': ['1794', '17AB', '17AC'],
'178C': ['17A7', '1781'],
'178D': ['179B', '17A6', '17E7', '1788'],
'178F': ['1797', '1782', '1780', '17A5'],
'1790': ['1785', '178B'],
'1791': ['17A1'],
'1792': ['1786', '178A', '1787', '1795', '1784'],
'1793': ['17A7'],
'1794': ['178B', '17AB', '17AC'],
'1795': ['1787', '178A', '1784', '1792', '1786'],
'1796': ['17AD', '17AE', '17B0', '178D', '17E7'],
'1797': ['178F', '1782', '1780', '17A5'],
'1798': ['1794'],
'1799': ['1783'],
'179B': ['179F', '178D'],
'17A1': ['1791'],
'179A': ['179C', '17C1', '17DB'],
'179F': ['179B', '178D'],
'179C': ['179A', '17C1', '17DB'],
'17A5': ['1780'],
'17A6': ['1796'],
'17A7': ['178C', '1781', '17A9', '17AA', '17B1', '17B3'],
'17A9': ['17A7', '178C', '1781', '17AA', '17B1', '17B3'],
'17AA': ['17B1', '17B3', '17A7'],
'17B1': ['17B3', '17AA', '17A7'],
'17B3': ['17B1', '17AA', '17A7'],
'17B0': ['17AD', '17AE', '1796'],
'17AB': ['17AC', '1794', '178B'],
'17AC': ['17AB', '1794', '178B'],
'17AD': ['17AE', '1796', '17B0'],
'17AE': ['17AD', '1796', '17B0'],
'1784': ['17E5'],
'17E5': ['1784'],
'17B6': ['17B617C6', '17C4', '17C417C7'],
'17B617C6': ['17B6'],
'17BB17C6': ['17C6', '17BB'],
'17BB': ['17BB17C6', '17BB17C7'],
'17BB17C7': ['17BB', '17C7'],
'17C1': ['17C117C7', '17C2', '17C3', '17C4', '17C417C7', '17C5', '17BE', '17BF', '17C0', '179A', '179C', '17DB'],
'17C117C7': ['17C1', '17C7', '17C417C7'],
'17C2': ['17C3', '179A', '179C', '17DB'],
'17C3': ['17C2', '179A', '179C', '17DB'],
'17C4': ['17C1', '17B6', '179A', '179C', '17DB'],
'17C417C7': ['17C1', '17B6', '17C7', '179A', '179C', '17DB'],
'17C5': ['17C4', '17C417C7', '179A', '179C', '17DB'],
'17BE': ['17BF', '17C1', '179A', '179C', '17DB'],
'17BF': ['17BE', '17BA', '17C1', '179A', '179C', '17DB', '17C0'],
'17C0': ['17C1', '179A', '179C', '17DB', '17BF'],
'17C6': ['17BB17C6', '17B617C6'],
'17C7': ['17BB17C7', '17C117C7', '17D6'],
'17C8': ['17C7', '17D6'],
'17D0': ['178A'],
'17D7': ['17D4', '17D4179B17D4'],
'17D4179B17D4': ['17D7', '179B'],
'17D4': ['17D5', '17D7'],
'17D6': ['17C7'],
'17D9': ['17E0'],
'17E7': ['178D', '1796'],
'17E3': ['1789'],
'17DB': ['179A', '179C', '17C1'],
'1787': ['1790', '1785'],
'17A4': ['17A2', '17B6'],
'17A3': ['17A2'],
'17D3': ['17C6'],
'17A8': ['17AA', '17B1', '17B3'],
'179D': ['1782', '1780'],
'179E': ['1798', '1794'],
'17D2179E': ['17D21783', '17D21794'],
'17DC': ['1793'],
'17D8': ['17D4179B17D4'],

end: {}
}


/*
ក គ ត ភ ឥ
ខ ឌ ឧ ឩ ឪ ឱ ឳ
គ ក ត ភ ឥ
ឃ យ
ច ថ
ង ជ ផ ដ ឆ ធ
ឆ ធ ង ជ ផ ដ
ឈ ឃ យ
ញ ៣
ដ ជ ផ ង ឆ ធ
ឋ ប ឫ ឬ
ឌ ឧ ខ
ឍ ល ឦ ៧ ឈ
ត ភ គ ក ឥ
ថ ច ឋ
ទ ឡ
ធ ឆ ដ ជ ផ ង
ន ឧ
ប ឋ ឫ ឬ
ផ ជ ដ ង ធ ឆ
ព ឭ ឮ ឰ ឍ ៧
ភ ត គ ក ឥ
ម ប
យ ឃ
ល ស ឍ
ឡ ទ
រ វ េ ៛
ស ល ឍ
វ រ េ ៛
ឥ ក
ឦ ព
ឧ ឌ ខ ឩ ឪ ឱ ឳ
ឩ ឧ ឌ ខ ឪ ឱ ឳ
ឪ ឱ ឳ ឧ
ឱ ឳ ឪ ឧ
ឳ ឱ ឪ ឧ
ឰ ឭ ឮ ព
ឫ ឬ ប ឋ
ឬ ឫ ប ឋ
ឭ ឮ ព ឰ
ឮ ឭ ព ឰ
ង ៥
៥ ង
ា ាំ ោ ោះ
ាំ ា
ុំ ំ ុ
ុ ុំ ុះ
ុះ ុ ះ
េ េះ ែ ៃ ោ ោះ ៅ ើ ឿ ៀ រ វ ៛
េះ េ ះ ោះ
ែ ៃ រ វ ៛
ៃ ែ រ វ ៛
ោ េ ា រ វ ៛
ោះ េ ា ះ រ វ ៛
ៅ ោ ោះ រ វ ៛
ើ ឿ េ រ វ ៛
ឿ ើ ឺ េ រ វ ៛ ៀ
ៀ េ រ វ ៛ ឿ
ំ ុំ ាំ
ះ ុះ េះ ៖
ៈ ះ ៖
័ ដ
ៗ ។ ។ល។
។ល។ ៗ ល
។ ៕ ៗ
៖ ះ
៙ ០
៧ ឍ ព
៣ ញ
៛ រ វ េ
ជ ថ ច
ឤ អ ា
ឣ អ
៓ ំ
ឨ ឪ ឱ ឳ
ឝ គ ក
ឞ ម ប
្ឞ ្ឃ ្ប
ៜ ន
៘ ។ល។

*/

var keyboarddef = [
"१|ऍ,२|ॅ,३|्र,४|र्,५|ज्ञ,६|त्र,७|क्ष,८|श्र,९|(,०|),-|ः,ृ|ऋ",
"|औ,ै|ऐ,ा|आ,ी|ई,ू|ऊ,ब|भ,ह|ङ,ग|घ,द|ध,ज|झ,ड|ढ,ड|ञ",
"|ओ,े|ए,्|अ,ि|इ,ु|उ,प|फ,र|ऱ,क|ख,त|थ,च|छ,ट|ठ,ॉ|ऑ",
"ॊ|ऒ,ॆ|ऎ,ं|ँ,म|ण,न|ऩ,व|ऴ,ल|ळ,स|श, |ष,.|।,य|य़"
]


function condense (str) {
	// removes spaces and hyphens from a string

	// if text isn't highlighted, highlight whole thing (to avoid duplication)
	var node = document.getElementById('output')
	//IE support
	if (document.selection) { 
	    chstring = document.selection.createRange()
		}
	// Mozilla and Safari support
	else if (node.selectionStart || node.selectionStart == '0') {
		chstring = node.value.substring(node.selectionStart, node.selectionEnd)
		}
	if (chstring == '') { chstring = node.select() }

	// do the replacement
	str = str.replace(/ /g, '')
	str = str.replace(/-/g, '')

	return str
	}



function sendVowelLeft (str) {
	lv = str.match(/เ|แ|ไ|โ|ใ/)
	if (lv == null) return
	
	return lv+str.substr(0,lv.index)+str.substr(lv.index+1)
	}