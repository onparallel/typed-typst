// Converted from test/suite/corpus/issue-7991-show-text-symbol-grapheme-sliced.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, red, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show('*', set(text, { fill: red })), inline(unsafeRaw.math`ast.basic`)))
}
