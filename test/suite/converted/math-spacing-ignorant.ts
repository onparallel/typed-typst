// Converted from test/suite/corpus/math-spacing-ignorant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, counter, define, doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      unsafeRaw.math`#metadata(none) "text"`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`#place(dx: 5em)[Placed] "text"`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`#counter("test").update(3) + b`,
      space,
      linebreak(),
      space,
      unsafeRaw.math`#place(dx: 5em)[a] + b`,
      space,
      context((ctx) => test(counter('test').get(ctx), [3])),
    ),
  )
}
