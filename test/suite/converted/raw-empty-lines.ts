// Converted from test/suite/corpus/raw-empty-lines.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, gray, inline, pct, raw, show } from '../../../src/index.ts'

export default () => {
  return doc(show(raw, block.with({ width: pct(100), fill: gray })), inline(raw({ block: true }, '\n\n\n')))
}
