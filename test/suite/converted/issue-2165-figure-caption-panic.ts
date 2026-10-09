// Converted from test/suite/corpus/issue-2165-figure-caption-panic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(figure.caption(inline())))
}
