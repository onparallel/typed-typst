// Converted from test/suite/corpus/plugin-func.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, data, define, doc, function_, inline, m, space, type, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let p = plugin("/assets/plugins/hello.wasm")`,
      inline(
        test(type(unsafeRaw.code<any>`p.hello`), function_),
        space,
        test(
          data(['a', 'b'])
            .map(bytes)
            .map(unsafeRaw.code<any>`p.double_it`),
          data(['a.a', 'b.b']).map(bytes),
        ),
      ),
    ),
  )
}
