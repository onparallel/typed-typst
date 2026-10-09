// Converted from test/suite/corpus/issue-5855-misaligned-descender.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`foo ${box(inline`foo`)} foo`,
    set(text, { bottomEdge: 'descender' }),
    inline`foo ${box(inline`foo`)} foo`,
  )
}
