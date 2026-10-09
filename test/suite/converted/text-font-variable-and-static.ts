// Converted from test/suite/corpus/text-font-variable-and-static.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, m, set, strong, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'Source Serif 4' }),
      inline`Hello ${emph(inline`world`)} ${strong(inline`with`)} ${text({ weight: 550 }, inline(emph(inline`Source Serif.`)))}`,
    ),
  )
}
