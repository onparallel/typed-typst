// Converted from test/suite/corpus/shaping-forced-script-font-feature-enabled.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: ['Libertinus Serif', 'IBM Plex Sans Devanagari'], script: 'deva' }), 'ABCअपार्टमेंट'),
  )
}
