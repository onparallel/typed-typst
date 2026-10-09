// Converted from test/suite/corpus/show-text-apostrophe.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, linebreak, m, regex, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(regex("Who's|We've"), highlight), inline`Who's got it? ${linebreak()} We've got it.`))
}
