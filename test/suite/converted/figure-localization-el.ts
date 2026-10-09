// Converted from test/suite/corpus/figure-localization-el.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, figure, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { lang: 'el' }), inline(figure({ caption: inline`Ένας κύκλος.` }, circle()))))
}
