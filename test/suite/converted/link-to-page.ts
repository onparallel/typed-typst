// Converted from test/suite/corpus/link-to-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(link({ page: 1, x: pt(10), y: pt(20) }, inline`Back to the start`)))
}
