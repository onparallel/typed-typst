// Converted from test/suite/corpus/repeat-unboxed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, rect, repeat } from '../../../src/index.ts'

export default () => {
  return doc(inline(repeat(rect({ width: em(2), height: em(1) }))))
}
