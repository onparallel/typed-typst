// Converted from test/suite/corpus/bidi-whitespace-reset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, h, inline, m, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: ['Libertinus Serif', 'Noto Sans Arabic'] }), inline`الغالب ${h(pt(70))} ن${data(' ')}ة`),
  )
}
