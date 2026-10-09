// Converted from test/suite/corpus/disable-tags-broken-paragraph-hide.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, hide, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`This is the ${hide(blocks('first paragraph.', 'And this is the'))} second paragraph.`)
}
