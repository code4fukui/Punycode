# Punycode.js

Punycode.js is a robust Punycode converter that fully complies to [RFC 3492](https://tools.ietf.org/html/rfc3492) and [RFC 5891](https://tools.ietf.org/html/rfc5891).

## Features

- Supports recent versions of Node.js
- Provides a CommonJS module and an ES6 module
- Includes a `punycode.ucs2` utility for working with Unicode characters

## Usage

```js
import { Punycode } from "https://code4fukui.github.io/Punycode/Punycode.js";

// decode domain name parts
Punycode.decode('maana-pta'); // 'mañana'
Punycode.decode('--dqo34k'); // '☃-⌘'

// encode domain name parts  
Punycode.encode('mañana'); // 'maana-pta'
Punycode.encode('☃-⌘'); // '--dqo34k'
```

## API

### `punycode.decode(string)`

Converts a Punycode string of ASCII symbols to a string of Unicode symbols.

### `punycode.encode(string)`

Converts a string of Unicode symbols to a Punycode string of ASCII symbols.

### `punycode.toUnicode(input)`

Converts a Punycode string representing a domain name or an email address to Unicode.

### `punycode.toASCII(input)`

Converts a lowercased Unicode string representing a domain name or an email address to Punycode.

### `punycode.ucs2`

Provides `decode` and `encode` methods for working with UCS-2 encoded strings.

## License

Punycode.js is available under the [MIT](https://mths.be/mit) license.