// Converted from test/suite/corpus/issue-4770-par-tag-at-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, box, context, define, doc, h, inline, label, labelled, pt, query, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(h(pt(0)), space, labelled([box(inline()), space], label('a'))),
    inline(context((ctx) => test(query(ctx, label('a')).len(), 1))),
  )
}
