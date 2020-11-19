const { getScriptRanges } = require("../../utils/getRange.js");
const {
  Common,
  Latin,
  Greek,
  Cyrillic,
  Armenian,
  Hebrew,
  Arabic,
  Syriac,
  Thaana,
  Devanagari,
  Bengali,
  Gurmukhi,
  Gujarati,
  Oriya,
  Tamil,
  Telugu,
  Kannada,
  Malayalam,
  Sinhala,
  Thai,
  Lao,
  Tibetan,
  Myanmar,
  Georgian,
  Hangul,
  Ethiopic,
  Cherokee,
  Canadian_Aboriginal,
  Ogham,
  Runic,
  Khmer,
  Mongolian,
  Hiragana,
  Katakana,
  Bopomofo,
  Han,
  Yi,
  Old_Italic,
  Gothic,
  Deseret,
  Inherited,
  Tagalog,
  Hanunoo,
  Buhid,
  Tagbanwa,
  Limbu,
  Tai_Le,
  Linear_B,
  Ugaritic,
  Shavian,
  Osmanya,
  Cypriot,
  Braille,
  Buginese,
  Coptic,
  New_Tai_Lue,
  Glagolitic,
  Tifinagh,
  Syloti_Nagri,
  Old_Persian,
  Kharoshthi,
  Balinese,
  Cuneiform,
  Phoenician,
  Phags_Pa,
  Nko,
  Sundanese,
  Lepcha,
  Ol_Chiki,
  Vai,
  Saurashtra,
  Kayah_Li,
  Rejang,
  Lycian,
  Carian,
  Lydian,
  Cham,
  Tai_Tham,
  Tai_Viet,
  Avestan,
  Egyptian_Hieroglyphs,
  Samaritan,
  Lisu,
  Bamum,
  Javanese,
  Meetei_Mayek,
  Imperial_Aramaic,
  Old_South_Arabian,
  Inscriptional_Parthian,
  Inscriptional_Pahlavi,
  Old_Turkic,
  Kaithi,
  Batak,
  Brahmi,
  Mandaic,
  Chakma,
  Meroitic_Cursive,
  Meroitic_Hieroglyphs,
  Miao,
  Sharada,
  Sora_Sompeng,
  Takri,
  Caucasian_Albanian,
  Bassa_Vah,
  Duployan,
  Elbasan,
  Grantha,
  Pahawh_Hmong,
  Khojki,
  Linear_A,
  Mahajani,
  Manichaean,
  Mende_Kikakui,
  Modi,
  Mro,
  Old_North_Arabian,
  Nabataean,
  Palmyrene,
  Pau_Cin_Hau,
  Old_Permic,
  Psalter_Pahlavi,
  Siddham,
  Khudawadi,
  Tirhuta,
  Warang_Citi,
  Ahom,
  Anatolian_Hieroglyphs,
  Hatran,
  Multani,
  Old_Hungarian,
  SignWriting,
  Adlam,
  Bhaiksuki,
  Marchen,
  Newa,
  Osage,
  Tangut,
  Masaram_Gondi,
  Nushu,
  Soyombo,
  Zanabazar_Square,
  Dogra,
  Gunjala_Gondi,
  Makasar,
  Medefaidrin,
  Hanifi_Rohingya,
  Sogdian,
  Old_Sogdian,
  Elymaic,
  Nandinagari,
  Nyiakeng_Puachue_Hmong,
  Wancho,
  Chorasmian,
  Dives_Akuru,
  Khitan_Small_Script,
  Yezidi
} = require('../../reference/scripts.js')
const expect = require("chai").expect;

describe("getScriptRanges", () => {
  describe("it should return the correct number of codepoints", () => {
    it("should return the correct number of codepoints for Common Script", () => {
      const actual = getScriptRanges(Common).length;
      const expected = 8087;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Latin Script", () => {
      const actual = getScriptRanges(Latin).length;
      const expected = 1374;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Greek Script", () => {
      const actual = getScriptRanges(Greek).length;
      const expected = 518;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Cyrillic Script", () => {
      const actual = getScriptRanges(Cyrillic).length;
      const expected = 443;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Armenian Script", () => {
      const actual = getScriptRanges(Armenian).length;
      const expected = 96;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hebrew Script", () => {
      const actual = getScriptRanges(Hebrew).length;
      const expected = 134;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Arabic Script", () => {
      const actual = getScriptRanges(Arabic).length;
      const expected = 1291;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Syriac Script", () => {
      const actual = getScriptRanges(Syriac).length;
      const expected = 88;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Thaana Script", () => {
      const actual = getScriptRanges(Thaana).length;
      const expected = 50;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Devanagari Script", () => {
      const actual = getScriptRanges(Devanagari).length;
      const expected = 154;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Bengali Script", () => {
      const actual = getScriptRanges(Bengali).length;
      const expected = 96;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Gurmukhi Script", () => {
      const actual = getScriptRanges(Gurmukhi).length;
      const expected = 80;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Gujarati Script", () => {
      const actual = getScriptRanges(Gujarati).length;
      const expected = 91;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Oriya Script", () => {
      const actual = getScriptRanges(Oriya).length;
      const expected = 91;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tamil Script", () => {
      const actual = getScriptRanges(Tamil).length;
      const expected = 123;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Telugu Script", () => {
      const actual = getScriptRanges(Telugu).length;
      const expected = 98;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Kannada Script", () => {
      const actual = getScriptRanges(Kannada).length;
      const expected = 89;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Malayalam Script", () => {
      const actual = getScriptRanges(Malayalam).length;
      const expected = 118;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Sinhala Script", () => {
      const actual = getScriptRanges(Sinhala).length;
      const expected = 111;
      expect(actual).to.equal(expected);
    });    it("should return the correct number of codepoints for Thai Script", () => {
      const actual = getScriptRanges(Thai).length;
      const expected = 86;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Lao Script", () => {
      const actual = getScriptRanges(Lao).length;
      const expected = 82;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tibetan Script", () => {
      const actual = getScriptRanges(Tibetan).length;
      const expected = 207;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Myanmar Script", () => {
      const actual = getScriptRanges(Myanmar).length;
      const expected = 223;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Georgian Script", () => {
      const actual = getScriptRanges(Georgian).length;
      const expected = 173;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hangul Script", () => {
      const actual = getScriptRanges(Hangul).length;
      const expected = 11739;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Ethiopic Script", () => {
      const actual = getScriptRanges(Ethiopic).length;
      const expected = 495;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Cherokee Script", () => {
      const actual = getScriptRanges(Cherokee).length;
      const expected = 172;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Canadian_Aboriginal Script", () => {
      const actual = getScriptRanges(Canadian_Aboriginal).length;
      const expected = 710;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Ogham Script", () => {
      const actual = getScriptRanges(Ogham).length;
      const expected = 29;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Runic Script", () => {
      const actual = getScriptRanges(Runic).length;
      const expected = 86;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Khmer Script", () => {
      const actual = getScriptRanges(Khmer).length;
      const expected = 146;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Mongolian Script", () => {
      const actual = getScriptRanges(Mongolian).length;
      const expected = 167;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hiragana Script", () => {
      const actual = getScriptRanges(Hiragana).length;
      const expected = 379;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Katakana Script", () => {
      const actual = getScriptRanges(Katakana).length;
      const expected = 304;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Bopomofo Script", () => {
      const actual = getScriptRanges(Bopomofo).length;
      const expected = 77;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Han Script", () => {
      const actual = getScriptRanges(Han).length;
      const expected = 94204;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Yi Script", () => {
      const actual = getScriptRanges(Yi).length;
      const expected = 1220;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_Italic Script", () => {
      const actual = getScriptRanges(Old_Italic).length;
      const expected = 39;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Gothic Script", () => {
      const actual = getScriptRanges(Gothic).length;
      const expected = 27;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Deseret Script", () => {
      const actual = getScriptRanges(Deseret).length;
      const expected = 80;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Inherited Script", () => {
      const actual = getScriptRanges(Inherited).length;
      const expected = 573;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tagalog Script", () => {
      const actual = getScriptRanges(Tagalog).length;
      const expected = 20;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hanunoo Script", () => {
      const actual = getScriptRanges(Hanunoo).length;
      const expected = 21;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Buhid Script", () => {
      const actual = getScriptRanges(Buhid).length;
      const expected = 20;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tagbanwa Script", () => {
      const actual = getScriptRanges(Tagbanwa).length;
      const expected = 18;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Limbu Script", () => {
      const actual = getScriptRanges(Limbu).length;
      const expected = 68;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tai_Le Script", () => {
      const actual = getScriptRanges(Tai_Le).length;
      const expected = 35;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Linear_B Script", () => {
      const actual = getScriptRanges(Linear_B).length;
      const expected = 211;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Ugaritic Script", () => {
      const actual = getScriptRanges(Ugaritic).length;
      const expected = 31;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Shavian Script", () => {
      const actual = getScriptRanges(Shavian).length;
      const expected = 48;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Osmanya Script", () => {
      const actual = getScriptRanges(Osmanya).length;
      const expected = 40;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Cypriot Script", () => {
      const actual = getScriptRanges(Cypriot).length;
      const expected = 55;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Braille Script", () => {
      const actual = getScriptRanges(Braille).length;
      const expected = 256;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Buginese Script", () => {
      const actual = getScriptRanges(Buginese).length;
      const expected = 30;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Coptic Script", () => {
      const actual = getScriptRanges(Coptic).length;
      const expected = 137;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for New_Tai_Lue Script", () => {
      const actual = getScriptRanges(New_Tai_Lue).length;
      const expected = 83;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Glagolitic Script", () => {
      const actual = getScriptRanges(Glagolitic).length;
      const expected = 132;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tifinagh Script", () => {
      const actual = getScriptRanges(Tifinagh).length;
      const expected = 59;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Syloti_Nagri Script", () => {
      const actual = getScriptRanges(Syloti_Nagri).length;
      const expected = 45;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_Persian Script", () => {
      const actual = getScriptRanges(Old_Persian).length;
      const expected = 50;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Kharoshthi Script", () => {
      const actual = getScriptRanges(Kharoshthi).length;
      const expected = 68;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Balinese Script", () => {
      const actual = getScriptRanges(Balinese).length;
      const expected = 121;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Cuneiform Script", () => {
      const actual = getScriptRanges(Cuneiform).length;
      const expected = 1234;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Phoenician Script", () => {
      const actual = getScriptRanges(Phoenician).length;
      const expected = 29;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Phags_Pa Script", () => {
      const actual = getScriptRanges(Phags_Pa).length;
      const expected = 56;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Nko Script", () => {
      const actual = getScriptRanges(Nko).length;
      const expected = 62;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Sundanese Script", () => {
      const actual = getScriptRanges(Sundanese).length;
      const expected = 72;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Lepcha Script", () => {
      const actual = getScriptRanges(Lepcha).length;
      const expected = 74;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Ol_Chiki Script", () => {
      const actual = getScriptRanges(Ol_Chiki).length;
      const expected = 48;
      expect(actual).to.equal(expected);
    });    it("should return the correct number of codepoints for Vai Script", () => {
      const actual = getScriptRanges(Vai).length;
      const expected = 300;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Saurashtra Script", () => {
      const actual = getScriptRanges(Saurashtra).length;
      const expected = 82;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Kayah_Li Script", () => {
      const actual = getScriptRanges(Kayah_Li).length;
      const expected = 47;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Rejang Script", () => {
      const actual = getScriptRanges(Rejang).length;
      const expected = 37;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Lycian Script", () => {
      const actual = getScriptRanges(Lycian).length;
      const expected = 29;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Carian Script", () => {
      const actual = getScriptRanges(Carian).length;
      const expected = 49;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Lydian Script", () => {
      const actual = getScriptRanges(Lydian).length;
      const expected = 27;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Cham Script", () => {
      const actual = getScriptRanges(Cham).length;
      const expected = 83;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tai_Tham Script", () => {
      const actual = getScriptRanges(Tai_Tham).length;
      const expected = 127;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tai_Viet Script", () => {
      const actual = getScriptRanges(Tai_Viet).length;
      const expected = 72;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Avestan Script", () => {
      const actual = getScriptRanges(Avestan).length;
      const expected = 61;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Egyptian_Hieroglyphs Script", () => {
      const actual = getScriptRanges(Egyptian_Hieroglyphs).length;
      const expected = 1080;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Samaritan Script", () => {
      const actual = getScriptRanges(Samaritan).length;
      const expected = 61;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Lisu Script", () => {
      const actual = getScriptRanges(Lisu).length;
      const expected = 49;
      expect(actual).to.equal(expected);
    });Bamum
    it("should return the correct number of codepoints for Bamum Script", () => {
      const actual = getScriptRanges(Bamum).length;
      const expected = 657;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Javanese Script", () => {
      const actual = getScriptRanges(Javanese).length;
      const expected = 90;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Meetei_Mayek Script", () => {
      const actual = getScriptRanges(Meetei_Mayek).length;
      const expected = 79;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Imperial_Aramaic Script", () => {
      const actual = getScriptRanges(Imperial_Aramaic).length;
      const expected = 31;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_South_Arabian Script", () => {
      const actual = getScriptRanges(Old_South_Arabian).length;
      const expected = 32;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Inscriptional_Parthian Script", () => {
      const actual = getScriptRanges(Inscriptional_Parthian).length;
      const expected = 30;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Common Script", () => {
      const actual = getScriptRanges(Inscriptional_Pahlavi).length;
      const expected = 27;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_Turkic Script", () => {
      const actual = getScriptRanges(Old_Turkic).length;
      const expected = 73;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Kaithi Script", () => {
      const actual = getScriptRanges(Kaithi).length;
      const expected = 67;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Batak Script", () => {
      const actual = getScriptRanges(Batak).length;
      const expected = 56;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Brahmi Script", () => {
      const actual = getScriptRanges(Brahmi).length;
      const expected = 109;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Mandaic Script", () => {
      const actual = getScriptRanges(Mandaic).length;
      const expected = 29;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Chakma Script", () => {
      const actual = getScriptRanges(Chakma).length;
      const expected = 71;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Meroitic_Cursive Script", () => {
      const actual = getScriptRanges(Meroitic_Cursive).length;
      const expected = 90;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Meroitic_Hieroglyphs Script", () => {
      const actual = getScriptRanges(Meroitic_Hieroglyphs).length;
      const expected = 32;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Miao Script", () => {
      const actual = getScriptRanges(Miao).length;
      const expected = 149;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Sharada Script", () => {
      const actual = getScriptRanges(Sharada).length;
      const expected = 96;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Sora_Sompeng Script", () => {
      const actual = getScriptRanges(Sora_Sompeng).length;
      const expected = 35;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Takri Script", () => {
      const actual = getScriptRanges(Takri).length;
      const expected = 67;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Caucasian_Albanian Script", () => {
      const actual = getScriptRanges(Caucasian_Albanian).length;
      const expected = 53;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Bassa_Vah Script", () => {
      const actual = getScriptRanges(Bassa_Vah).length;
      const expected = 36;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Duployan Script", () => {
      const actual = getScriptRanges(Duployan).length;
      const expected = 143;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Elbasan Script", () => {
      const actual = getScriptRanges(Elbasan).length;
      const expected = 40;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Grantha Script", () => {
      const actual = getScriptRanges(Grantha).length;
      const expected = 85;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Pahawh_Hmong Script", () => {
      const actual = getScriptRanges(Pahawh_Hmong).length;
      const expected = 127;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Khojki Script", () => {
      const actual = getScriptRanges(Khojki).length;
      const expected = 62;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Linear_A Script", () => {
      const actual = getScriptRanges(Linear_A).length;
      const expected = 341;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Mahajani Script", () => {
      const actual = getScriptRanges(Mahajani).length;
      const expected = 39;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Manichaean Script", () => {
      const actual = getScriptRanges(Manichaean).length;
      const expected = 51;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Mende_Kikakui Script", () => {
      const actual = getScriptRanges(Mende_Kikakui).length;
      const expected = 213;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Modi Script", () => {
      const actual = getScriptRanges(Modi).length;
      const expected = 79;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Mro Script", () => {
      const actual = getScriptRanges(Mro).length;
      const expected = 43;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_North_Arabian Script", () => {
      const actual = getScriptRanges(Old_North_Arabian).length;
      const expected = 32;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Nabataean Script", () => {
      const actual = getScriptRanges(Nabataean).length;
      const expected = 40;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Palmyrene Script", () => {
      const actual = getScriptRanges(Palmyrene).length;
      const expected = 32;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Pau_Cin_Hau Script", () => {
      const actual = getScriptRanges(Pau_Cin_Hau).length;
      const expected = 57;
      expect(actual).to.equal(expected);
    });    
    it("should return the correct number of codepoints for Old_Permic Script", () => {
      const actual = getScriptRanges(Old_Permic).length;
      const expected = 43;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Psalter_Pahlavi Script", () => {
      const actual = getScriptRanges(Psalter_Pahlavi).length;
      const expected = 29;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Siddham Script", () => {
      const actual = getScriptRanges(Siddham).length;
      const expected = 92;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Khudawadi Script", () => {
      const actual = getScriptRanges(Khudawadi).length;
      const expected = 69;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tirhuta Script", () => {
      const actual = getScriptRanges(Tirhuta).length;
      const expected = 82;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Warang_Citi Script", () => {
      const actual = getScriptRanges(Warang_Citi).length;
      const expected = 84;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Ahom Script", () => {
      const actual = getScriptRanges(Ahom).length;
      const expected = 58;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Anatolian_Hieroglyphs Script", () => {
      const actual = getScriptRanges(Anatolian_Hieroglyphs).length;
      const expected = 583;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hatran Script", () => {
      const actual = getScriptRanges(Hatran).length;
      const expected = 26;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Multani Script", () => {
      const actual = getScriptRanges(Multani).length;
      const expected = 38;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_Hungarian Script", () => {
      const actual = getScriptRanges(Old_Hungarian).length;
      const expected = 108;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for SignWriting Script", () => {
      const actual = getScriptRanges(SignWriting).length;
      const expected = 672;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Adlam Script", () => {
      const actual = getScriptRanges(Adlam).length;
      const expected = 88;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Bhaiksuki Script", () => {
      const actual = getScriptRanges(Bhaiksuki).length;
      const expected = 97;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Marchen Script", () => {
      const actual = getScriptRanges(Marchen).length;
      const expected = 68;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Newa Script", () => {
      const actual = getScriptRanges(Newa).length;
      const expected = 97;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Osage Script", () => {
      const actual = getScriptRanges(Osage).length;
      const expected = 72;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Tangut Script", () => {
      const actual = getScriptRanges(Tangut).length;
      const expected = 6914;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Masaram_Gondi Script", () => {
      const actual = getScriptRanges(Masaram_Gondi).length;
      const expected = 75;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Nushu Script", () => {
      const actual = getScriptRanges(Nushu).length;
      const expected = 397;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Soyombo Script", () => {
      const actual = getScriptRanges(Soyombo).length;
      const expected = 83;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Zanabazar_Square Script", () => {
      const actual = getScriptRanges(Zanabazar_Square).length;
      const expected = 72;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Dogra Script", () => {
      const actual = getScriptRanges(Dogra).length;
      const expected = 60;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Gunjala_Gondi Script", () => {
      const actual = getScriptRanges(Gunjala_Gondi).length;
      const expected = 63;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Makasar Script", () => {
      const actual = getScriptRanges(Makasar).length;
      const expected = 25;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Medefaidrin Script", () => {
      const actual = getScriptRanges(Medefaidrin).length;
      const expected = 91;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Hanifi_Rohingya Script", () => {
      const actual = getScriptRanges(Hanifi_Rohingya).length;
      const expected = 50;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Sogdian Script", () => {
      const actual = getScriptRanges(Sogdian).length;
      const expected = 42;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Old_Sogdian Script", () => {
      const actual = getScriptRanges(Old_Sogdian).length;
      const expected = 40;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Elymaic Script", () => {
      const actual = getScriptRanges(Elymaic).length;
      const expected = 23;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Nandinagari Script", () => {
      const actual = getScriptRanges(Nandinagari).length;
      const expected = 65;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Nyiakeng_Puachue_Hmong Script", () => {
      const actual = getScriptRanges(Nyiakeng_Puachue_Hmong).length;
      const expected = 71;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Wancho Script", () => {
      const actual = getScriptRanges(Wancho).length;
      const expected = 59;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Chorasmian Script", () => {
      const actual = getScriptRanges(Chorasmian).length;
      const expected = 28;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Dives_Akuru Script", () => {
      const actual = getScriptRanges(Dives_Akuru).length;
      const expected = 72;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Khitan_Small_Script Script", () => {
      const actual = getScriptRanges(Khitan_Small_Script).length;
      const expected = 471;
      expect(actual).to.equal(expected);
    });
    it("should return the correct number of codepoints for Yezidi Script", () => {
      const actual = getScriptRanges(Yezidi).length;
      const expected = 47;
      expect(actual).to.equal(expected);
    });
  });
});
