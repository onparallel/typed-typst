// Converted from test/suite/corpus/bidi-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, h, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`L ${h(cm(1))} ריווחR ${linebreak()} Lריווח ${h(cm(1))} R`)
}
