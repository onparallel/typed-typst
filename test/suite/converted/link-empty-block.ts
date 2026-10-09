// Converted from test/suite/corpus/link-empty-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, link, pct, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(link('https://example.com', block({ height: pt(10), width: pct(100) }))))
}
