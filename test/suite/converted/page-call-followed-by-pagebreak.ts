// Converted from test/suite/corpus/page-call-followed-by-pagebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, inline, page, pagebreak, space } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(inline(page({ flipped: true, fill: forest, paper: 'a11' }, inline()), space, pagebreak()))
}
