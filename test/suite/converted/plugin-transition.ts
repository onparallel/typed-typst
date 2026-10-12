// Converted from test/suite/corpus/plugin-transition.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, inline, let_, m, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      let_('empty', unsafeRaw.code<any>`plugin("/assets/plugins/hello-mut.wasm")`)[0],
      inline(test(str(unsafeRaw.code<any>`empty.get()`), '[]')),
    ),
    m.lines(
      let_('hello', unsafeRaw.code<any>`plugin.transition(empty.add, bytes("hello"))`)[0],
      inline(
        test(str(unsafeRaw.code<any>`empty.get()`), '[]'),
        space,
        test(str(unsafeRaw.code<any>`hello.get()`), '[hello]'),
      ),
    ),
    m.lines(
      let_('world', unsafeRaw.code<any>`plugin.transition(empty.add, bytes("world"))`)[0],
      let_('hello_you', unsafeRaw.code<any>`plugin.transition(hello.add, bytes("you"))`)[0],
    ),
    inline(
      test(str(unsafeRaw.code<any>`empty.get()`), '[]'),
      space,
      test(str(unsafeRaw.code<any>`hello.get()`), '[hello]'),
      space,
      test(str(unsafeRaw.code<any>`world.get()`), '[world]'),
      space,
      test(str(unsafeRaw.code<any>`hello_you.get()`), '[hello, you]'),
    ),
    m.lines(
      let_('hello2', unsafeRaw.code<any>`plugin.transition(empty.add, bytes("hello"))`)[0],
      inline(test(unsafeRaw.code<any>`hello == world`, false), space, test(unsafeRaw.code<any>`hello == hello2`, true)),
    ),
  )
}
