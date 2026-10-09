// Converted from test/suite/corpus/raw-typst-lang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, raw, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ lang: 'typ' }, '#let x = 1'), space, linebreak(), space, raw({ lang: 'typ' }, '#f(1)')))
}
