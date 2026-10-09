// Converted from test/suite/corpus/figure-localization-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, figure, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { lang: 'fr' }), inline(figure({ caption: inline`Un cercle.` }, circle()))))
}
