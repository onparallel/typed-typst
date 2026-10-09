// Converted from test/suite/corpus/raw-dedent-first-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ block: true }, '  A\n   B\n  C')))
}
