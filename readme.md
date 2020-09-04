# Sanitize Words

> Remove undesirable words from input

## Installation

```sh
npm install sanitize-words
```

## Usage example

```javascript
sanitizeWords(input, [options: {
    replacement: "-------", // string used to replace unwanted words
    custom: []. // an array of custom words to add to filter
    customOnly: false // if true, only the custom words will be filtered
}]);
```

Examples

```javascript
const sanitizeWords = require("sanitize-words");

const words = "The quick brown fox jumped over the lazy dog.";

// Remove undesirable words using the included "badWords.txt" only
words = sanitizeWords(words);

// Remove undesirable words using both some custom input and the included bad words.
let custom = ["quick", "freaks"];

words = sanitizeWords(words, { custom });
```

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
npm install
```

## Release History

- 1.0.0 initial release

## Meta

Rane Wallin – [@rane_wallin](https://twitter.com/rane_wallin)

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/RaneWallin](https://github.com/RaneWallin/)

## Contributing

1. Fork it (<https://github.com/RaneWallin/sanitize-words.git/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
