// Converted from test/suite/corpus/highlight.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, green, highlight, inline, pct } from '../../../src/index.ts'

export default () => {
  return doc(inline`This is the built-in ${highlight(inline`highlight with default color`)}. We can also specify
a customized value ${highlight({ fill: green.lighten(pct(80)) }, inline`to highlight`)}.`)
}
