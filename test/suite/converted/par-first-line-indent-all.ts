// Converted from test/suite/corpus/par-first-line-indent-all.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, em, heading, m, par, pt, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { firstLineIndent: { amount: pt(12), all: true }, spacing: pt(5), leading: pt(5) }),
      set(block, { spacing: em(1.2) }),
      show(heading, set(text, { size: pt(10) })),
    ),
    m.lines(m.heading(1, 'Heading'), 'All paragraphs are indented.'),
    'Even the first.',
  )
}
