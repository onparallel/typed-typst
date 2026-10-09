// Converted from test/universe/corpus/comozeidex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const toc = define('toc').returns(T.any).external()
  const info = define('info').pos('arg1', T.content).returns(T.any).external()
  const physloc = define('physloc').pos('arg1', T.content).returns(T.any).external()
  const subid = define('subid').pos('arg1', T.content).returns(T.any).external()
  const doc_with = define('with').named('title', T.any, null).returns(T.any).external(doc_2)
  return doc(
    m.lines(
      importPackage('@preview/comozeidex:0.2.0', [doc_2, toc, info, physloc, subid]),
      show(doc_with({ title: 'My Index' })),
      inline(toc()),
    ),
    m.lines(
      m.heading(1, 'Home'),
      m.heading(2, 'Finances'),
      m.heading(3, '11.01 Bank Statements'),
      inline(
        info(inline`Monthly statements, PDF only`),
        space,
        physloc(inline`Filing cabinet, drawer 2`),
        space,
        subid(inline`11.01.01 — Checking account`),
      ),
    ),
  )
}
