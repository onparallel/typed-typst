// Converted from test/suite/corpus/math-at-line-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, h, inline, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${h(pt(50))} Number ${unsafeRaw.math`1`} exists.`)
}
