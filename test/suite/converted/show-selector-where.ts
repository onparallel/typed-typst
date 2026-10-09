// Converted from test/suite/corpus/show-selector-where.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, block, box, doc, inline, luma, m, page, par, pt, raw, set, show, where } from '../../../src/index.ts'

export default () => {
  return doc(
    show(
      where(raw, { block: false }),
      box.with({ radius: pt(2), outset: { y: pt(2.5) }, inset: { x: pt(3), y: pt(0) }, fill: luma(230) }),
    ),
    show(
      where(raw, { block: true }),
      block.with({ outset: pt(-3), inset: pt(11), fill: luma(230), stroke: { left: add(pt(1.5), luma(180)) } }),
    ),
    m.lines(set(page, { margin: { top: pt(12) } }), set(par, { justify: true })),
    inline`This code tests ${raw('code')} with selectors and justification.`,
    inline(raw({ block: true, lang: 'rs' }, 'code!("it");')),
    inline`You can use the ${raw({ lang: 'rs' }, '*const T')} pointer or the ${raw({ lang: 'rs' }, '&mut T')}
reference.`,
  )
}
