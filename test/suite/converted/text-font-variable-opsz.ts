// Converted from test/suite/corpus/text-font-variable-opsz.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto }), set(text, { font: 'Fraunces' })),
    inline(unsafeRaw.code<any>`for base in (10pt, 20pt) {
  for s in range(1, 5, inclusive: true) [
    #let scaled = s * base
    #scale(100% / s, reflow: true, text(size: scaled)[Hello])
  ]
}`),
  )
}
