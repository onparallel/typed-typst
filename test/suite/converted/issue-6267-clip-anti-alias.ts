// Converted from test/suite/corpus/issue-6267-clip-anti-alias.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, cm, doc, gray, inline, pct, rect } from '../../../src/index.ts'

export default () => {
  return doc(inline(block({ clip: true, radius: pct(100) }, rect({ fill: gray, height: cm(1), width: cm(1) }))))
}
