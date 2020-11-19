const { script_extensions } = require('../../utils/script_extensions.js');
const { getUnicode } = require('../../utils/getUnicode.js');
const expect = require('chai').expect;

describe('Script_Extensions', () => {
    describe('should match the codepoints laid out in script_extensions', () => {
        let scriptExtensions = Object.keys(script_extensions);
        scriptExtensions.forEach(scriptExtension => {
            it(`should match the codepoints for ${scriptExtension}`, () => {
                let regex = new RegExp(`\^\\p{Script_Extensions=${scriptExtension}\}\+\$`, 'u');
                let matches = getUnicode(script_extensions[scriptExtension]);
                const actual = regex.test(matches);
                const expected = true;
                expect(actual).to.equal(expected);
            })

        })
    })
});