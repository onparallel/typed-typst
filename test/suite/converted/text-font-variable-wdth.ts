// Converted from test/suite/corpus/text-font-variable-wdth.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto }), set(text, { font: 'Roboto Flex' })),
    'Hello',
    inline(unsafeRaw.code<any>`for stretch in range(50, 150, step: 10) [
  #text(stretch: stretch * 1%)[Hello.]
]`),
    inline(unsafeRaw.code<any>`for stretch in range(50, 150, step: 10) [
  #text(variations: (wdth: stretch))[Hello.]
]`),
  )
}
