// Converted from test/suite/corpus/page-numbering-pdf-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, counter, define, doc, inline, let_, m, page, pagebreak, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const [fillerDecl, filler] = let_('filler', lines(7))
  return doc(
    m.lines(set(page, { margin: { bottom: pt(20), rest: pt(10) } }), fillerDecl),
    m.lines(set(page, { numbering: '(i)' }), inline(filler, space, pagebreak(), space, filler)),
    m.lines(set(page, { numbering: '1' }), inline(filler, space, pagebreak(), space, filler)),
    m.lines(
      set(page, { numbering: 'I / I' }),
      inline(
        counter(page).update(1),
        space,
        filler,
        space,
        pagebreak(),
        space,
        filler,
        space,
        pagebreak(),
        space,
        filler,
        space,
        pagebreak(),
        space,
        filler,
      ),
    ),
    m.lines(
      set(page, { numbering: 'Pre: い' }),
      inline(
        filler,
        space,
        pagebreak(),
        space,
        filler,
        space,
        counter(page).update(2),
        space,
        filler,
        space,
        pagebreak(),
        space,
        filler,
        space,
        pagebreak(),
        space,
        filler,
      ),
    ),
    m.lines(
      set(page, { numbering: 'a' }),
      inline(
        counter(page).update(27),
        space,
        filler,
        space,
        pagebreak(),
        space,
        counter(page).update(53),
        space,
        filler,
      ),
    ),
  )
}
