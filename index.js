const path = require("path");
const fs = require("fs");

const EOL = require("os").EOL;
const defaultOptions = {
  replacement: "*****",
  custom: [],
  onlyCustom: false,
};

/**
 * Replaces undesirable in input
 * @param {(string | string[])} input                         - content to sanitize
 * @param {string}              [options.replacement="*****"] - text to use to replace unwanted words
 * @param {array}               [options.custom=[]]           - an array of custom words to remove
 * @param {boolean}             [options.onlyCustom=false]    - true if only the custom words should be filtered
 * @param {boolean}             [options.noReplace=false]     - If true, removes unwanted words instead of replacing them
 * @returns {(string | string[])} sanitized input in the same type it was sent
 */
module.exports.sanitizeWords = (input, options) => {
  options = { ...defaultOptions, ...options };
  let { replacement, custom, onlyCustom, noReplace } = options;
  let badWords = custom;
  let returnArray = true;

  if (!custom || onlyCustom === false) {
    badWords.push(
      ...fs
        .readFileSync(path.join(__dirname, "badWords.txt"), "utf8")
        .split(EOL)
    );
  }

  if (!input) throw "An input string or array is required.";

  if (!Array.isArray(input)) {
    returnArray = false;
    input = input.split(" ");
  }

  input = input.reduce((final, word) => {
    const isBad = badWords.includes(word);
    if (isBad) word = replacement;
    if (isBad && noReplace) return final;
    return [...final, word];
  }, []);

  return returnArray ? input : input.join(" ");
};
