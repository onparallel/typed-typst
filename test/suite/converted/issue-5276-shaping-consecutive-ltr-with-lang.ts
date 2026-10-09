// Converted from test/suite/corpus/issue-5276-shaping-consecutive-ltr-with-lang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, symbol, text } from '../../../src/index.ts'

export default () => {
  const [aDecl, a] = let_('a', text({ lang: 'ar' }, inline(symbol('م'))))
  return doc(m.lines(aDecl, inline(a, a)))
}
