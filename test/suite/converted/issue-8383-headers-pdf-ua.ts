// Converted from test/suite/corpus/issue-8383-headers-pdf-ua.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, page, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { header: inline`A` }))
}
