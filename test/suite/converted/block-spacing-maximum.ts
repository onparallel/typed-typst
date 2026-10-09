// Converted from test/suite/corpus/block-spacing-maximum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, list, m, pt, raw, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(block, { spacing: pt(0) }),
      show(raw, set(block, { spacing: pt(15) })),
      show(list, set(block, { spacing: pt(2.5) })),
    ),
    inline(raw({ block: true, lang: 'rust' }, 'fn main() {}')),
    m.list(m.item(['List'])),
    'Paragraph',
  )
}
