// Converted from test/suite/corpus/raw-dedent-last-line.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ block: true }, '    A\n\n    B')))
}
