// Converted from test/suite/corpus/shaping-script-separation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: ['Libertinus Serif', 'IBM Plex Sans Devanagari'] }), 'ABCअपार्टमेंट'),
    'अपार्टमेंट',
    'अ पा र् ट में ट',
  )
}
