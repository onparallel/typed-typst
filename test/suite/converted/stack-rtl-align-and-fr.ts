// Converted from test/suite/corpus/stack-rtl-align-and-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  block,
  center,
  doc,
  fr,
  inline,
  left,
  m,
  page,
  pt,
  rtl,
  set,
  space,
  stack,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(50), margin: pt(5) }),
      set(block, { spacing: pt(5) }),
      set(text, { size: pt(8) }),
      inline(
        stack({ dir: rtl }, fr(1), inline`A`, fr(1), inline`B`, inline`C`),
        space,
        stack({ dir: rtl }, align(center, inline`A`), align(left, inline`B`), inline`C`),
      ),
    ),
  )
}
