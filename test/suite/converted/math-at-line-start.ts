// Converted from test/suite/corpus/math-at-line-start.typ by scripts/convert-suite.ts — do not edit.
import { doc, h, inline, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${h(pt(60))} Number ${unsafeRaw.math`1`} exists.`)
}
