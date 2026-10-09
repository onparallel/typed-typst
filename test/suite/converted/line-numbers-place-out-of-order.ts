// Converted from test/suite/corpus/line-numbers-place-out-of-order.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bottom, cm, doc, inline, linebreak, m, page, par, place, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { margin: { left: cm(1.5) } }), set(par.line, { numbering: '1', numberClearance: cm(0.5) })),
    inline(place(bottom, inline`Line 4`)),
    inline`Line 1${linebreak()} Line 2${linebreak()} Line 3 ${v(cm(1))}`,
  )
}
