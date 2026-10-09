// Converted from test/suite/corpus/text-font-variable-slnt.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, emph, inline, m, page, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto }), set(text, { font: 'Roboto Flex' })),
    inline`Hello, ${emph(inline`Hello`)}`,
    inline`${text({ style: 'italic' }, inline`Hello`)}, ${text({ style: 'oblique' }, inline`Hello`)}`,
    inline(unsafeRaw.code<any>`for slnt in range(0, -10, step: -2, inclusive: true) [
  #text(variations: (slnt: slnt))[Hello.]
]`),
  )
}
