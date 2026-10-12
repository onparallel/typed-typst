// Converted from test/suite/corpus/par-hanging-indent-semantic.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { hangingIndent: pt(15) }), heading({ depth: 1 }, inline('I am not affected'))),
    'I am affected by hanging indent.',
  )
}
