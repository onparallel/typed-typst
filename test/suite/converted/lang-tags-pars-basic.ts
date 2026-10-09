// Converted from test/suite/corpus/lang-tags-pars-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'uk' }), 'Par 1.'),
    m.lines(set(text, { lang: 'sr' }), 'Par 2.'),
    m.lines(set(text, { lang: 'be' }), 'Par 3.'),
  )
}
