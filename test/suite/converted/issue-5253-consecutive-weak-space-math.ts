// Converted from test/suite/corpus/issue-5253-consecutive-weak-space-math.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`${unsafeRaw.math`= thin thin`} a`)
}
