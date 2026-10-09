// Converted from test/suite/corpus/page-call-styled-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, inline, page } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(inline(page({ flipped: true, fill: conifer, paper: 'a11' }, inline())))
}
