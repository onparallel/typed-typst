// Converted from test/suite/corpus/columns-in-auto-sized-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, colbreak, columns, doc, inline, linebreak, page, pt, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: cm(2.5), width: cm(7.05) }),
    inline(rect({ inset: pt(6) }, columns(2, inline`${space}ABC ${linebreak()} BCD ${colbreak()} DEF${space}`))),
  )
}
