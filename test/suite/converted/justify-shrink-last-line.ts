// Converted from test/suite/corpus/justify-shrink-last-line.typ by scripts/convert-suite.ts — do not edit.
import { doc, m, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(155) }), set(par, { justify: true }), 'This text can be fitted in one line.'),
  )
}
