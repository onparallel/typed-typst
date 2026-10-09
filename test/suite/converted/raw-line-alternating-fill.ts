// Converted from test/suite/corpus/raw-line-alternating-fill.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  box,
  codeBlock,
  doc,
  em,
  horizon,
  inline,
  ltr,
  m,
  page,
  pct,
  pt,
  raw,
  set,
  show,
  spread,
  stack,
  ttb,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      show(raw, (it, ctx) => stack({ dir: ttb }, spread(unsafeRaw.code<any>`it.lines`))),
      show(raw.line, (it_2, ctx_2) =>
        codeBlock(
          [],
          box(
            {
              width: pct(100),
              height: em(1.75),
              inset: em(0.25),
              fill: unsafeRaw.code<any>`if calc.rem(it.number, 2) == 0 {
      luma(90%)
    } else {
      white
    }`,
            },
            align(horizon, stack({ dir: ltr }, box({ width: pt(15) }, inline(it_2.number)), it_2.body)),
          ),
        ),
      ),
    ),
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#show raw.line: block.with(\n  fill: luma(60%)\n);\n\nHello, world!\n\n= A heading for good measure',
      ),
    ),
  )
}
