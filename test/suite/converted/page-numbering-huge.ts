// Converted from test/suite/corpus/page-numbering-huge.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, counter, define, doc, inline, let_, m, page, pagebreak, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const [fillerDecl, filler] = let_('filler', lines(1))
  return doc(
    m.lines(set(page, { margin: { bottom: pt(20), rest: pt(0) } }), fillerDecl),
    m.lines(
      set(page, { numbering: '1/1' }),
      inline(counter(page).update(100000000001), space, pagebreak(), space, pagebreak()),
    ),
  )
}
