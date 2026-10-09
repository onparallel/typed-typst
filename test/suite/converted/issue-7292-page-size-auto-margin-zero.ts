// Converted from test/suite/corpus/issue-7292-page-size-auto-margin-zero.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { width: auto, height: auto, margin: pt(0) }))
}
