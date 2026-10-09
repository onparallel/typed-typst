// Converted from test/suite/corpus/text-slashed-zero-and-fractions.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'IBM Plex Serif' }),
      inline`0 vs. ${text({ slashedZero: true }, inline`0`)} ${linebreak()} 1/2 vs. ${text({ fractions: true }, inline`1/2`)}`,
    ),
  )
}
