const general_category = function (key, option) {
  const gc = {
    Lu: [
      "Matches an uppercase letter",
      "https://www.fileformat.info/info/unicode/category/Lu/list.htm",
    ],
    Uppercase_Letter: [
      "Matches an uppercase letter",
      "https://www.fileformat.info/info/unicode/category/Lu/list.htm",
    ],
    Ll: [
      "Matches a lowercase letter",
      "https://www.fileformat.info/info/unicode/category/Ll/list.htm",
    ],
    Lowercase_Letter: [
      "Matches a lowercase letter",
      "https://www.fileformat.info/info/unicode/category/Ll/list.htm",
    ],
    Lt: [
      "Matches a digraphic character with first part uppercase",
      "https://www.fileformat.info/info/unicode/category/Lt/list.htm",
    ],
    Titlecase_Letter: [
      "Matches a digraphic character with first part uppercase",
      "https://www.fileformat.info/info/unicode/category/Lt/list.htm",
    ],
    LC: ["Matches an uppercase letter or lowercase letter or titlecase letter"],
    Cased_Letter: [
      "Matches an uppercase letter or lowercase letter or titlecase letter",
    ],
    Lm: [
      "Matches a modifier letter",
      "https://www.fileformat.info/info/unicode/category/Lm/list.htm",
    ],
    Modifier_Letter: [
      "Matches a modifier letter",
      "https://www.fileformat.info/info/unicode/category/Lm/list.htm",
    ],
    Lo: [
      "Matches other letters, including syllables and ideographs",
      "https://www.fileformat.info/info/unicode/category/Lo/list.htm",
    ],
    Other_Letter: [
      "Matches other letters, including syllables and ideographs",
      "https://www.fileformat.info/info/unicode/category/Lo/list.htm",
    ],
    L: [
      "Matches a lowercase letter or uppercase letter or titlecase letter or modifier letter or other letter (including syllables and ideographs)",
    ],
    Letter: [
      "Matches a lowercase letter or uppercase letter or titlecase letter or modifier letter or other letter (including syllables and ideographs)",
    ],
    Mn: [
      "Matches a nonspacing combining mark (zero advance width)",
      "https://www.fileformat.info/info/unicode/category/Mn/list.htm",
    ],
    Nonspacing_Mark: [
      "Matches a nonspacing combining mark (zero advance width)",
      "https://www.fileformat.info/info/unicode/category/Mn/list.htm",
    ],
    Mc: [
      "Matches a spacing combining mark (positive advance width)",
      "https://www.fileformat.info/info/unicode/category/Mc/list.htm",
    ],
    Spacing_Mark: [
      "Matches a spacing combining mark (positive advance width)",
      "https://www.fileformat.info/info/unicode/category/Mc/list.htm",
    ],
    Me: [
      "Matches an enclosing combining mark",
      "https://www.fileformat.info/info/unicode/category/Me/list.htm",
    ],
    Enclosing_Mark: [
      "Matches an enclosing combining mark",
      "https://www.fileformat.info/info/unicode/category/Me/list.htm",
    ],
    M: [
      "Matches a nonspacing combining mark, a spacing combining mark, or an enclosing combining mark",
    ],
    Mark: [
      "Matches a nonspacing combining mark, a spacing combining mark, or an enclosing combining mark",
    ],
    Nd: [
      "Matches a decimal digit",
      "https://www.fileformat.info/info/unicode/category/Nd/list.htm",
    ],
    Decimal_Number: [
      "Matches a decimal digit",
      "https://www.fileformat.info/info/unicode/category/Nd/list.htm",
    ],
    Nl: [
      "Matches a letterlike numeric character",
      "https://www.fileformat.info/info/unicode/category/Nl/list.htm",
    ],
    Letter_Number: [
      "Matches a letterlike numeric character",
      "https://www.fileformat.info/info/unicode/category/Nl/list.htm",
    ],
    No: [
      "Matches a numeric character of other type",
      "https://www.fileformat.info/info/unicode/category/No/list.htm",
    ],
    Other_Number: [
      "Matches a numeric character of other type",
      "https://www.fileformat.info/info/unicode/category/No/list.htm",
    ],
    N: [
      "Matches a decimal digit, letterlike numeric character, or numeric character of other type",
    ],
    Number: [
      "Matches a decimal digit, letterlike numeric character, or numeric character of other type",
    ],
    Pc: [
      "Matches a connecting punctuation mark, like a tie",
      "https://www.fileformat.info/info/unicode/category/Pc/list.htm",
    ],
    Connector_Punctuation: [
      "Matches a connecting punctuation mark, like a tie",
      "https://www.fileformat.info/info/unicode/category/Pc/list.htm",
    ],
    Pd: [
      "Matches a dash or hyphen punctuation mark",
      "https://www.fileformat.info/info/unicode/category/Pd/list.htm",
    ],
    Dash_Punctuation: [
      "Matches a dash or hyphen punctuation mark",
      "https://www.fileformat.info/info/unicode/category/Pd/list.htm",
    ],
    Ps: [
      "Matches an opening punctuation mark (of a pair)",
      "https://www.fileformat.info/info/unicode/category/Ps/list.htm",
    ],
    Open_Punctuation: [
      "Matches an opening punctuation mark (of a pair)",
      "https://www.fileformat.info/info/unicode/category/Ps/list.htm",
    ],
    Pe: [
      "Matches a closing punctuation mark (of a pair)",
      "https://www.fileformat.info/info/unicode/category/Pe/list.htm",
    ],
    Close_Punctuation: [
      "Matches a closing punctuation mark (of a pair)",
      "https://www.fileformat.info/info/unicode/category/Pe/list.htm",
    ],
    Pi: [
      "Matches an initial quotation mark",
      "https://www.fileformat.info/info/unicode/category/Pi/list.htm",
    ],
    Initial_Punctuation: [
      "Matches an initial quotation mark",
      "https://www.fileformat.info/info/unicode/category/Pi/list.htm",
    ],
    Pf: [
      "Matches a final quotation mark",
      "https://www.fileformat.info/info/unicode/category/Pf/list.htm",
    ],
    Final_Punctuation: [
      "Matches a final quotation mark",
      "https://www.fileformat.info/info/unicode/category/Pf/list.htm",
    ],
    Po: [
      "Matches a punctuation mark of other type",
      "https://www.fileformat.info/info/unicode/category/Po/list.htm",
    ],
    Other_Punctuation: [
      "Matches a punctuation mark of other type",
      "https://www.fileformat.info/info/unicode/category/Po/list.htm",
    ],
    P: [
      "Matches a connecting punctuation mark or dash or hyphen or opening punctuation mark or closing punctuation mark or initial quotation mark or final quotation mark or a punctuation mark of other type",
    ],
    Punctuation: [
      "Matches a connecting punctuation mark or dash or hyphen or opening punctuation mark or closing punctuation mark or initial quotation mark or final quotation mark or a punctuation mark of other type",
    ],
    Sm: [
      "Matches a symbol of mathematical use",
      "https://www.fileformat.info/info/unicode/category/Sm/list.htm",
    ],
    Math_Symbol: [
      "Matches a symbol of mathematical use",
      "https://www.fileformat.info/info/unicode/category/Sm/list.htm",
    ],
    Sc: [
      "Matches a currency sign",
      "https://www.fileformat.info/info/unicode/category/Sc/list.htm",
    ],
    Currency_Symbol: [
      "Matches a currency sign",
      "https://www.fileformat.info/info/unicode/category/Sc/list.htm",
    ],
    Sk: [
      "Matches a non-letterlike modifier symbol",
      "https://www.fileformat.info/info/unicode/category/Sk/list.htm",
    ],
    Modifier_Symbol: [
      "Matches a non-letterlike modifier symbol",
      "https://www.fileformat.info/info/unicode/category/Sk/list.htm",
    ],
    So: [
      "Matches a symbol of other type",
      "https://www.fileformat.info/info/unicode/category/So/list.htm",
    ],
    Other_Symbol: [
      "Matches a symbol of other type",
      "https://www.fileformat.info/info/unicode/category/So/list.htm",
    ],
    S: [
      "Matches a symbol of mathematical use, a currency sign, a non-letterlike modifier symbol, or a symbol of other type",
    ],
    Symbol: [
      "Matches a symbol of mathematical use, a currency sign, a non-letterlike modifier symbol, or a symbol of other type",
    ],
    Zs: [
      "Matches a space character (of various non-zero widths)",
      "https://www.fileformat.info/info/unicode/category/Zs/list.htm",
    ],
    Space_Separator: [
      "Matches a space character (of various non-zero widths)",
      "https://www.fileformat.info/info/unicode/category/Zs/list.htm",
    ],
    Zl: ["Matches \u2028 line separator"],
    Line_Separator: ["Matches \u2028 line separator"],
    Zp: ["Matches \u2029 paragraph separator"],
    Paragraph_Separator: ["Matches \u2029 paragraph separator"],
    Z: [
      "Matches a space character (of various non-zero widths), \u2028 or \u2029",
    ],
    Separator: [
      "Matches a space character (of various non-zero widths), \u2028 or \u2029",
    ],
    Cc: [
      "Matches a C0 or C1 control code",
      "https://www.fileformat.info/info/unicode/category/Cc/list.htm",
    ],
    Control: [
      "Matches a C0 or C1 control code",
      "https://www.fileformat.info/info/unicode/category/Cc/list.htm",
    ],
    Cf: [
      "Matches a format control character",
      "https://www.fileformat.info/info/unicode/category/Cf/list.htm",
    ],
    Format: [
      "Matches a format control character",
      "https://www.fileformat.info/info/unicode/category/Cf/list.htm",
    ],
    Cs: [
      "Matches a surrogate code point",
      "https://www.fileformat.info/info/unicode/category/Cs/list.htm",
    ],
    Surrogate: [
      "Matches a surrogate code point",
      "https://www.fileformat.info/info/unicode/category/Cs/list.htm",
    ],
    Co: [
      "Matches a private-use character",
      "https://www.fileformat.info/info/unicode/category/Co/list.htm",
    ],
    Private_Use: [
      "Matches a private-use character",
      "https://www.fileformat.info/info/unicode/category/Co/list.htm",
    ],
    Cn: ["Matches a reserved unassigned code point or a noncharacter"],
    Unassigned: ["Matches a reserved unassigned code point or a noncharacter"],
    C: [
      "Matches a C0 or C1 control code, a format control character, a surrogate code point, a private-use character, or a reserved unassigned code point or a noncharacter",
    ],
    Other: [
      "Matches a C0 or C1 control code, a format control character, a surrogate code point, a private-use character, or a reserved unassigned code point or a noncharacter",
    ],
  };
  if (option === "verbose" && gc[key][1] !== undefined) {
    return `${gc[key][0]} ${gc[key][1]}`;
  }
  return gc[key][0];
};

module.exports = { general_category };
