// Converted from test/suite/corpus/raw-align-specified.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, inline, m, page, pt, raw, right, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(180) }), set(text, { size: pt(6) })),
    inline(
      align(
        center,
        raw({ lang: 'typ', block: true, align: right }, '#let f(x) = x\n#align(center, line(length: 1em))'),
      ),
    ),
  )
}
