// Converted from test/suite/corpus/text-alternates-int.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'Libertinus Serif' }),
      inline`${text({ alternates: false }, inline`ß`)} vs ${text({ alternates: true }, inline`ß`)} vs ${text({ alternates: 2 }, inline`ß`)}`,
    ),
  )
}
