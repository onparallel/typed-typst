// Converted from test/suite/corpus/raw-align-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, inline, m, page, pt, raw, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(align, { alignment: center }), set(page, { width: pt(180) }), set(text, { size: pt(6) })),
    inline(raw({ block: true, lang: 'py' }, 'def something(x):\n  return x\n\na = 342395823859823958329\nb = 324923')),
  )
}
