// Converted from test/suite/corpus/show-text-isolated-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, contentBlock, define, doc, inline, m, show, space, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      show(' ', (it, ctx) =>
        codeBlock([test(unsafeRaw.code<any>`it.func()`, text), test(unsafeRaw.code<any>`it.text`, ' '), inline`-`]),
      ),
      inline`A${contentBlock(inline(space))}B`,
    ),
  )
}
