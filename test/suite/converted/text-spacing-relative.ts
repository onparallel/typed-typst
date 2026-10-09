// Converted from test/suite/corpus/text-spacing-relative.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, m, pct, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { spacing: add(pct(50), pt(1)) }), 'This is tight.'))
}
