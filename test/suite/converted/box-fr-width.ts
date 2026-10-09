// Converted from test/suite/corpus/box-fr-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, fr, inline, pct, rect } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hello ${box({ width: fr(1) }, rect({ height: em(0.7), width: pct(100) }))} World`)
}
