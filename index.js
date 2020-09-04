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
 * @returns {(string | string[])} sanitized input in the same type it was sent
 */
module.exports.sanitizeWords = (input, options) => {
  options = { ...defaultOptions, ...options };
  let { replacement, custom, onlyCustom } = options;
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

  input = input.map((word) => (badWords.includes(word) ? replacement : word));

  return returnArray ? input : input.join(" ");
};
