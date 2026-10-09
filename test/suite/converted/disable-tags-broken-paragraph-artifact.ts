// Converted from test/suite/corpus/disable-tags-broken-paragraph-artifact.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, inline, pdf } from '../../../src/index.ts'

export default () => {
  return doc(inline`This is the ${pdf.artifact(blocks('first paragraph.', 'And this is the'))} second paragraph.`)
}
