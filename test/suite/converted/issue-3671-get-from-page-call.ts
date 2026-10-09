// Converted from test/suite/corpus/issue-3671-get-from-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, page, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { margin: pt(5) }),
      inline(
        context((ctx) => test(unsafeRaw.code<any>`page.margin`, pt(5))),
        space,
        page(
          { margin: pt(10) },
          context((ctx_2) => test(unsafeRaw.code<any>`page.margin`, pt(10))),
        ),
      ),
    ),
  )
}
