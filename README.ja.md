# Punycode.js

Punycode.js は、RFC 3492 および RFC 5891に完全に準拠した堅牢なPunycodeコンバーターです。

## デモ
なし

## 機能
- Punycodeとの間の相互変換
- 国際化ドメイン名(IDN)の処理
- UCS-2文字列の操作

## 必要環境
- Node.js v6以上

## 使い方

### インストール
```
npm install punycode
```

### 使用例
```javascript
import { Punycode } from "https://code4fukui.github.io/Punycode/Punycode.js";

// Punycodeから Unicode への変換
console.log(Punycode.decode('tckzb0d6c')); // 出力: 'コメント'

// Unicodeから Punycodeへの変換
console.log(Punycode.encode('ドメイン名例')); // 出力: 'eckwd4c7cu47r2wf'
```

## ライセンス
MIT License