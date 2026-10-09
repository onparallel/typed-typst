// Converted from test/suite/corpus/spacing-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, h, inline, linebreak, m, pt, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { dir: rtl }), inline`A ${h(pt(10))} B ${linebreak()} A ${h(fr(1))} B`))
}
