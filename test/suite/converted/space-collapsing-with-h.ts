// Converted from test/suite/corpus/space-collapsing-with-h.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, fr, h, inline, linebreak, m, pt, right, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: right }),
      inline`A ${h(pt(0))} B ${h(pt(0))} ${linebreak()} A B ${linebreak()} A ${h(fr(-1))} B`,
    ),
  )
}
