// Converted from test/suite/corpus/par-hanging-indent-semantic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { hangingIndent: pt(15) }), m.heading(1, 'I am not affected')),
    'I am affected by hanging indent.',
  )
}
