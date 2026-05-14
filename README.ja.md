# Punycode.js

Punycode.jsは、[RFC 3492](https://tools.ietf.org/html/rfc3492)および[RFC 5891](https://tools.ietf.org/html/rfc5891)に完全に準拠した堅牢なPunycodeコンバータです。

## 機能

- 最近のバージョンのNode.jsをサポート
- CommonJSモジュールとES6モジュールを提供
- Unicode文字を扱うための`punycode.ucs2`ユーティリティを同梱

## 使い方

```js
import { Punycode } from "https://code4fukui.github.io/Punycode/Punycode.js";

// ドメイン名の各部分をデコード
Punycode.decode('maana-pta'); // 'mañana'
Punycode.decode('--dqo34k'); // '☃-⌘'

// ドメイン名の各部分をエンコード
Punycode.encode('mañana'); // 'maana-pta'
Punycode.encode('☃-⌘'); // '--dqo34k'
```

## API

### `punycode.decode(string)`

ASCII記号のPunycode文字列をUnicode記号の文字列に変換します。

### `punycode.encode(string)`

Unicode記号の文字列をASCII記号のPunycode文字列に変換します。

### `punycode.toUnicode(input)`

ドメイン名またはメールアドレスを表すPunycode文字列をUnicodeに変換します。

### `punycode.toASCII(input)`

ドメイン名またはメールアドレスを表す小文字のUnicode文字列をPunycodeに変換します。

### `punycode.ucs2`

UCS-2エンコードされた文字列を扱うための`decode`および`encode`メソッドを提供します。

## ライセンス

MIT License — [LICENSE](LICENSE)を参照してください。
