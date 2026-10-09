// Converted from test/suite/corpus/length-to-absolute.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, codeBlock, context, define, doc, em, inline, m, pt, set, text } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(text, { size: pt(12) }),
      inline(
        context((ctx) =>
          codeBlock([
            test(pt(6).toAbsolute(), pt(6)),
            test(add(pt(6), em(10)).toAbsolute(), pt(126)),
            test(em(10).toAbsolute(), pt(120)),
          ]),
        ),
      ),
    ),
    m.lines(
      set(text, { size: pt(64) }),
      inline(
        context((ctx_2) =>
          codeBlock([
            test(pt(6).toAbsolute(), pt(6)),
            test(add(pt(6), em(10)).toAbsolute(), pt(646)),
            test(em(10).toAbsolute(), pt(640)),
          ]),
        ),
      ),
    ),
  )
}
