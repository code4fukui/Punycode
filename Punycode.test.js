import * as t from "https://deno.land/std/testing/asserts.ts";
import { Punycode } from "./Punycode.js";

Deno.test("encode", () => {
  t.assertEquals(Punycode.encode("コメント"), "tckzb0d6c");
  t.assertEquals(Punycode.encode("ドメイン名例"), "eckwd4c7cu47r2wf");
});
Deno.test("decode", () => {
  t.assertEquals(Punycode.decode("tckzb0d6c"), "コメント");
});
