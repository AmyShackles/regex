const { getScripts, scripts } = require("../../utils/scripts.js");
const { getUnicode } = require("../../utils/getUnicode.js");
const { getScriptRanges } = require("../../utils/getRange.js");
const expect = require("chai").expect;

describe("Scripts", () => {
  describe("should match the codepoints laid out in scripts", () => {
    let scriptOptions = Object.keys(scripts);
    scriptOptions.forEach((script) => {
      it(`should match the codepoints for ${script}`, () => {
        let regex = new RegExp(`\^\\p{Script=${script}\}\+\$`, "u");
        const codepoints = getScriptRanges(getScripts(script));
        let matches = getUnicode(codepoints);
        const actual = regex.test(matches);
        const expected = true;
        expect(actual).to.equal(expected);
      });
    });
  });
});
