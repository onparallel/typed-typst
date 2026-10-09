// Converted from test/suite/corpus/page-set-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, page, set } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(set(page, { flipped: true, fill: conifer, paper: 'a11' }))
}
