// Converted from test/suite/corpus/columns-empty-second-column.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, inline, page, pct, pt, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: cm(7.05), columns: 2 }),
    inline(rect({ width: pct(100), inset: pt(3) }, inline`So there isn't anything in the second column?`)),
  )
}
