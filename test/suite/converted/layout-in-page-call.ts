// Converted from test/suite/corpus/layout-in-page-call.typ by scripts/convert-suite.ts — do not edit.
import {
  blue,
  codeBlock,
  doc,
  em,
  h,
  inline,
  layout,
  left,
  page,
  place,
  pt,
  rect,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      page(
        { width: pt(100), height: pt(100) },
        codeBlock([
          layout(
            (size) =>
              inline`This page has a width of ${unsafeRaw.code({ size })<any>`size.width`} and height of ${unsafeRaw.code({ size })<any>`size.height`}${space}`,
          ),
          h(em(1)),
          place(left, rect({ width: pt(80), stroke: blue })),
        ]),
      ),
    ),
  )
}
