// Converted from test/suite/corpus/locate-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, heading, inline, label, labelled, m, pt, unsafeRaw, v } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      inline(v(pt(10))),
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
      inline(context((ctx) => test(unsafeRaw.code<any>`locate(<intro>).position().y`, pt(20)))),
    ),
  )
}
