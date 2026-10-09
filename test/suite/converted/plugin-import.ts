// Converted from test/suite/corpus/plugin-import.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, define, doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    unsafeRaw.markup`#import plugin("/assets/plugins/hello.wasm"): hello, double_it`,
    inline(
      test(unsafeRaw.code<any>`hello()`, bytes('Hello from wasm!!!')),
      space,
      test(unsafeRaw.code<any>`double_it(bytes("hey!"))`, bytes('hey!.hey!')),
    ),
  )
}
