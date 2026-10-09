// Converted from test/suite/corpus/par-first-line-indent-all-terms.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  doc,
  em,
  line,
  linebreak,
  m,
  par,
  parbreak,
  pct,
  pt,
  set,
  show,
  space,
  terms,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(terms, { tight: false }), set(terms, { spacing: em(1.2) })),
      set(terms, { hangingIndent: pt(10) }),
      set(par, { firstLineIndent: { amount: pt(12), all: true }, spacing: pt(5), leading: pt(5) }),
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Term A'],
        [
          'B',
          space,
          linebreak(),
          space,
          'C',
          space,
          parbreak(),
          space,
          'D',
          space,
          line({ length: pct(100) }),
          space,
          'E',
        ],
      ),
      m.term(['Term F'], ['G']),
    ),
  )
}
