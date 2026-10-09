// Converted from test/suite/corpus/line-numbers-page-scope.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, page, pagebreak, par, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: em(2.5) } }), set(par.line, { numbering: '1', numberingScope: 'page' })),
    inline`First line ${linebreak()} Second line ${pagebreak()} Back to first line ${linebreak()} Second
line again ${page(inline`${space}Once again, first ${linebreak()} And second${space}`)} Back
to first`,
  )
}
