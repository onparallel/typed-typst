// Converted from test/suite/corpus/plugin-transition.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, str, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let empty = plugin("/assets/plugins/hello-mut.wasm")`,
      inline(test(str(unsafeRaw.code<any>`empty.get()`), '[]')),
    ),
    m.lines(
      unsafeRaw.markup`#let hello = plugin.transition(empty.add, bytes("hello"))`,
      inline(
        test(str(unsafeRaw.code<any>`empty.get()`), '[]'),
        space,
        test(str(unsafeRaw.code<any>`hello.get()`), '[hello]'),
      ),
    ),
    m.lines(
      unsafeRaw.markup`#let world = plugin.transition(empty.add, bytes("world"))`,
      unsafeRaw.markup`#let hello_you = plugin.transition(hello.add, bytes("you"))`,
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
      unsafeRaw.markup`#let hello2 = plugin.transition(empty.add, bytes("hello"))`,
      inline(test(unsafeRaw.code<any>`hello == world`, false), space, test(unsafeRaw.code<any>`hello == hello2`, true)),
    ),
  )
}
