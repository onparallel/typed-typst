// Converted from test/suite/corpus/text-font-variable-ital.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, m, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Mona Sans' }), inline`Hello ${emph(inline`Hello`)}`),
    inline(text({ variations: { ital: 0 } }, inline`Hello`), space, text({ variations: { ital: 1 } }, inline`Hello`)),
  )
}
