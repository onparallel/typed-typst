// Converted from test/suite/corpus/text-alternates-and-stylistic-sets.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'IBM Plex Serif' }),
      inline`a vs ${text({ alternates: true }, inline`a`)} ${linebreak()} ß vs ${text({ stylisticSet: 5 }, inline`ß`)}
${linebreak()} 10 years ago vs ${text({ stylisticSet: [1, 2, 3] }, inline`10 years ago`)}`,
    ),
  )
}
