// Converted from test/suite/corpus/figure-and-caption-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  assume,
  center,
  codeBlock,
  context,
  doc,
  em,
  emph,
  figure,
  inline,
  let_,
  line,
  m,
  pct,
  rect,
  show,
  space,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const [gapDecl, gap] = let_('gap', em(0.7))
  return doc(
    m.lines(
      gapDecl,
      show(where(figure, { kind: 'custom' }), (it, ctx) =>
        rect(
          { inset: gap },
          codeBlock([
            align(center, it.body),
            v({ weak: true }, gap),
            line({ length: pct(100) }),
            v({ weak: true }, gap),
            align(center, assume<'content'>(it.caption)),
          ]),
        ),
      ),
    ),
    inline(figure({ kind: 'custom', caption: inline`Hi`, supplement: inline`A` }, inline`A figure`)),
    show(figure.caption, (it_2, ctx_2) =>
      emph(
        inline`${space}${it_2.body} (${unsafeRaw.code<any>`it.supplement`} ${unsafeRaw.code<any>`context it.counter.display(it.numbering)`})${space}`,
      ),
    ),
    inline(figure({ kind: 'custom', caption: inline`Hi`, supplement: inline`B` }, inline`Another figure`)),
  )
}
