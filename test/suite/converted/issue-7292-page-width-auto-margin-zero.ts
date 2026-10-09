// Converted from test/suite/corpus/issue-7292-page-width-auto-margin-zero.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { width: auto, height: pt(100), margin: pt(0) }))
}
