// Converted from test/suite/corpus/title-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, set, show, text, title } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(title, set(text, { fill: blue })), inline(title(inline`A blue title`))))
}
