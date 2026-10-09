// Converted from test/suite/corpus/show-text-after-normal-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, rect, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(rect, 'world'), show('lo wo', set(text, { fill: red })), inline`hello ${rect()}`))
}
