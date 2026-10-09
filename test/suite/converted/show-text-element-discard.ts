// Converted from test/suite/corpus/show-text-element-discard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, show, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(text, null), 'Hey'))
}
