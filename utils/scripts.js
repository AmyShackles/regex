const { scripts } = require("../reference/scripts.js");

function getScripts(script) {
  const scriptMap = {
    Adlm: "Adlam",
    Adlam: "Adlam",
    Ahom: "Ahom",
    Ahom: "Ahom",
    Hluw: "Anatolian_Hieroglyphs",
    Anatolian_Hieroglyphs: "Anatolian_Hieroglyphs",
    Arab: "Arabic",
    Arabic: "Arabic",
    Armn: "Armenian",
    Armenian: "Armenian",
    Avst: "Avestan",
    Avestan: "Avestan",
    Bali: "Balinese",
    Balinese: "Balinese",
    Bamu: "Bamum",
    Bamum: "Bamum",
    Bass: "Bassa_Vah",
    Bassa_Vah: "Bassa_Vah",
    Batk: "Batak",
    Batak: "Batak",
    Beng: "Bengali",
    Bengali: "Bengali",
    Bhks: "Bhaiksuki",
    Bhaiksuki: "Bhaiksuki",
    Bopo: "Bopomofo",
    Bopomofo: "Bopomofo",
    Brah: "Brahmi",
    Brahmi: "Brahmi",
    Brai: "Braille",
    Braille: "Braille",
    Bugi: "Buginese",
    Buginese: "Buginese",
    Buhd: "Buhid",
    Buhid: "Buhid",
    Cans: "Canadian_Aboriginal",
    Canadian_Aboriginal: "Canadian_Aboriginal",
    Cari: "Carian",
    Carian: "Carian",
    Aghb: "Caucasian_Albanian",
    Caucasian_Albanian: "Caucasian_Albanian",
    Cakm: "Chakma",
    Chakma: "Chakma",
    Cham: "Cham",
    Cher: "Cherokee",
    Cherokee: "Cherokee",
    Chorasmian: "Chorasmian",
    Chrs: "Chorasmian",
    Zyyy: "Common",
    Common: "Common",
    Copt: "Coptic",
    Coptic: "Coptic",
    Qaac: "Coptic",
    Coptic: "Coptic",
    Xsux: "Cuneiform",
    Cuneiform: "Cuneiform",
    Cprt: "Cypriot",
    Cypriot: "Cypriot",
    Cyrl: "Cyrillic",
    Cyrillic: "Cyrillic",
    Dsrt: "Deseret",
    Deseret: "Deseret",
    Deva: "Devanagari",
    Devanagari: "Devanagari",
    Dives_Akuru: "Dives_Akuru",
    Diak: "Dives_Akuru",
    Dogra: "Dogra",
    Dogr: "Dogra",
    Dupl: "Duployan",
    Duployan: "Duployan",
    Egyp: "Egyptian_Hieroglyphs",
    Egyptian_Hieroglyphs: "Egyptian_Hieroglyphs",
    Elba: "Elbasan",
    Elbasan: "Elbasan",
    Elymaic: "Elymaic",
    Elym: "Elymaic",
    Ethi: "Ethiopic",
    Ethiopic: "Ethiopic",
    Geor: "Georgian",
    Georgian: "Georgian",
    Glag: "Glagolitic",
    Glagolitic: "Glagolitic",
    Goth: "Gothic",
    Gothic: "Gothic",
    Gran: "Grantha",
    Grantha: "Grantha",
    Grek: "Greek",
    Greek: "Greek",
    Gujr: "Gujarati",
    Gong: "Gunjala_Gondi",
    Gunjala_Gondi: "Gunjala_Gondi",
    Gujarati: "Gujarati",
    Guru: "Gurmukhi",
    Gurmukhi: "Gurmukhi",
    Hani: "Han",
    Han: "Han",
    Hang: "Hangul",
    Hangul: "Hangul",
    Hanifi_Rohingya: "Hanifi_Rohingya",
    Rohg: "Hanifi_Rohingya",
    Hano: "Hanunoo",
    Hanunoo: "Hanunoo",
    Hatr: "Hatran",
    Hatran: "Hatran",
    Hebr: "Hebrew",
    Hebrew: "Hebrew",
    Hira: "Hiragana",
    Hiragana: "Hiragana",
    Armi: "Imperial_Aramaic",
    Imperial_Aramaic: "Imperial_Aramaic",
    Zinh: "Inherited",
    Inherited: "Inherited",
    Qaai: "Inherited",
    Inherited: "Inherited",
    Phli: "Inscriptional_Pahlavi",
    Inscriptional_Pahlavi: "Inscriptional_Pahlavi",
    Prti: "Inscriptional_Parthian",
    Inscriptional_Parthian: "Inscriptional_Parthian",
    Java: "Javanese",
    Javanese: "Javanese",
    Kthi: "Kaithi",
    Kaithi: "Kaithi",
    Knda: "Kannada",
    Kannada: "Kannada",
    Kana: "Katakana",
    Katakana: "Katakana",
    Kali: "Kayah_Li",
    Kayah_Li: "Kayah_Li",
    Khar: "Kharoshthi",
    Kharoshthi: "Kharoshthi",
    Khitan_Small_Script: "Khitan_Small_Script",
    Kits: "Khitan_Small_Script",
    Khmr: "Khmer",
    Khmer: "Khmer",
    Khoj: "Khojki",
    Khojki: "Khojki",
    Sind: "Khudawadi",
    Khudawadi: "Khudawadi",
    Laoo: "Lao",
    Lao: "Lao",
    Latn: "Latin",
    Latin: "Latin",
    Lepc: "Lepcha",
    Lepcha: "Lepcha",
    Limb: "Limbu",
    Limbu: "Limbu",
    Lina: "Linear_A",
    Linear_A: "Linear_A",
    Linb: "Linear_B",
    Linear_B: "Linear_B",
    Lisu: "Lisu",
    Lisu: "Lisu",
    Lyci: "Lycian",
    Lycian: "Lycian",
    Lydi: "Lydian",
    Lydian: "Lydian",
    Mahj: "Mahajani",
    Mahajani: "Mahajani",
    Mlym: "Malayalam",
    Malayalam: "Malayalam",
    Makasar: "Makasar",
    Maka: "Makasar",
    Mand: "Mandaic",
    Mandaic: "Mandaic",
    Mani: "Manichaean",
    Manichaean: "Manichaean",
    Marc: "Marchen",
    Marchen: "Marchen",
    Gonm: "Masaram_Gondi",
    Masaram_Gondi: "Masaram_Gondi",
    Medefaidrin: "Medefaidrin",
    Medf: "Medefaidrin",
    Mtei: "Meetei_Mayek",
    Meetei_Mayek: "Meetei_Mayek",
    Mend: "Mende_Kikakui",
    Mende_Kikakui: "Mende_Kikakui",
    Merc: "Meroitic_Cursive",
    Meroitic_Cursive: "Meroitic_Cursive",
    Mero: "Meroitic_Hieroglyphs",
    Meroitic_Hieroglyphs: "Meroitic_Hieroglyphs",
    Plrd: "Miao",
    Miao: "Miao",
    Modi: "Modi",
    Modi: "Modi",
    Mong: "Mongolian",
    Mongolian: "Mongolian",
    Mroo: "Mro",
    Mro: "Mro",
    Mult: "Multani",
    Multani: "Multani",
    Mymr: "Myanmar",
    Myanmar: "Myanmar",
    Nbat: "Nabataean",
    Nabataean: "Nabataean",
    Talu: "New_Tai_Lue",
    Nandinagari: "Nandinagari",
    Nand: "Nandinagari",
    New_Tai_Lue: "New_Tai_Lue",
    Newa: "Newa",
    Newa: "Newa",
    Nkoo: "Nko",
    Nko: "Nko",
    Nshu: "Nushu",
    Nushu: "Nushu",
    Nyiakeng_Puachue_Hmong: "Nyiakeng_Puachue_Hmong",
    Hmnp: "Nyiakeng_Puachue_Hmong",
    Ogam: "Ogham",
    Ogham: "Ogham",
    Olck: "Ol_Chiki",
    Ol_Chiki: "Ol_Chiki",
    Hung: "Old_Hungarian",
    Old_Hungarian: "Old_Hungarian",
    Ital: "Old_Italic",
    Old_Italic: "Old_Italic",
    Norb: "Old_North_Arabian",
    Old_North_Arabian: "Old_North_Arabian",
    Perm: "Old_Permic",
    Old_Permic: "Old_Permic",
    Xpeo: "Old_Persian",
    Old_Persian: "Old_Persian",
    Old_Sogdian: "Old_Sogdian",
    Sogo: "Old_Sogdian",
    Sarb: "Old_South_Arabian",
    Old_South_Arabian: "Old_South_Arabian",
    Orkh: "Old_Turkic",
    Old_Turkic: "Old_Turkic",
    Orya: "Oriya",
    Oriya: "Oriya",
    Osge: "Osage",
    Osage: "Osage",
    Osma: "Osmanya",
    Osmanya: "Osmanya",
    Hmng: "Pahawh_Hmong",
    Pahawh_Hmong: "Pahawh_Hmong",
    Palm: "Palmyrene",
    Palmyrene: "Palmyrene",
    Pauc: "Pau_Cin_Hau",
    Pau_Cin_Hau: "Pau_Cin_Hau",
    Phag: "Phags_Pa",
    Phags_Pa: "Phags_Pa",
    Phnx: "Phoenician",
    Phoenician: "Phoenician",
    Phlp: "Psalter_Pahlavi",
    Psalter_Pahlavi: "Psalter_Pahlavi",
    Rjng: "Rejang",
    Rejang: "Rejang",
    Runr: "Runic",
    Runic: "Runic",
    Samr: "Samaritan",
    Samaritan: "Samaritan",
    Saur: "Saurashtra",
    Saurashtra: "Saurashtra",
    Shrd: "Sharada",
    Sharada: "Sharada",
    Shaw: "Shavian",
    Shavian: "Shavian",
    Sidd: "Siddham",
    Siddham: "Siddham",
    Sgnw: "SignWriting",
    SignWriting: "SignWriting",
    Sinh: "Sinhala",
    Sinhala: "Sinhala",
    Sogdian: "Sogdian",
    Sogd: "Sogdian",
    Sora: "Sora_Sompeng",
    Sora_Sompeng: "Sora_Sompeng",
    Soyo: "Soyombo",
    Soyombo: "Soyombo",
    Sund: "Sundanese",
    Sundanese: "Sundanese",
    Sylo: "Syloti_Nagri",
    Syloti_Nagri: "Syloti_Nagri",
    Syrc: "Syriac",
    Syriac: "Syriac",
    Tglg: "Tagalog",
    Tagalog: "Tagalog",
    Tagb: "Tagbanwa",
    Tagbanwa: "Tagbanwa",
    Tale: "Tai_Le",
    Tai_Le: "Tai_Le",
    Lana: "Tai_Tham",
    Tai_Tham: "Tai_Tham",
    Tavt: "Tai_Viet",
    Tai_Viet: "Tai_Viet",
    Takr: "Takri",
    Takri: "Takri",
    Taml: "Tamil",
    Tamil: "Tamil",
    Tang: "Tangut",
    Tangut: "Tangut",
    Telu: "Telugu",
    Telugu: "Telugu",
    Thaa: "Thaana",
    Thaana: "Thaana",
    Thai: "Thai",
    Thai: "Thai",
    Tibt: "Tibetan",
    Tibetan: "Tibetan",
    Tfng: "Tifinagh",
    Tifinagh: "Tifinagh",
    Tirh: "Tirhuta",
    Tirhuta: "Tirhuta",
    Ugar: "Ugaritic",
    Ugaritic: "Ugaritic",
    Vaii: "Vai",
    Vai: "Vai",
    Wcho: "Wancho",
    Wancho: "Wancho",
    Wara: "Warang_Citi",
    Warang_Citi: "Warang_Citi",
    Yezidi: "Yezidi",
    Yezi: "Yezidi",
    Yiii: "Yi",
    Yi: "Yi",
    Zanb: "Zanabazar_Square",
    Zanabazar_Square: "Zanabazar_Square",
  };
  const scriptName = scriptMap[script];
  console.log(scriptName);
  if (!scriptName) return false;
  return scripts[scriptName];
}

module.exports = { getScripts, scripts };
