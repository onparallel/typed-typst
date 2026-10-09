// Converted from test/suite/corpus/issue-4029-locate-after-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, context, define, doc, heading, inline, locate, m, page, pt, set, show, v } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { margin: pt(10) }),
      show(heading, (it, ctx) => add(v(pt(40)), it)),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline(context((ctx_2) => test(locate(ctx_2, heading).position(), { page: 1, x: pt(10), y: pt(50) }))),
    ),
  )
}
