// Converted from test/suite/corpus/plugin-basic.typ by scripts/convert-suite.ts — do not edit.
import { T, bytes, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      let_('p', unsafeRaw.code<any>`plugin("/assets/plugins/hello.wasm")`)[0],
      inline(
        test(unsafeRaw.code<any>`p.hello()`, bytes('Hello from wasm!!!')),
        space,
        test(unsafeRaw.code<any>`p.double_it(bytes("hey!"))`, bytes('hey!.hey!')),
        space,
        test(
          unsafeRaw.code<any>`p.shuffle(bytes("value1"), bytes("value2"), bytes("value3"))`,
          bytes('value3-value1-value2'),
        ),
      ),
    ),
  )
}
