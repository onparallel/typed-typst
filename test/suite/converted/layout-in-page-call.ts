// Converted from test/suite/corpus/layout-in-page-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
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
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      page(
        { width: pt(100), height: pt(100) },
        codeBlock([
          layout(unsafeRaw.code<any>`size => [This page has a width of #size.width and height of #size.height ]`),
          h(em(1)),
          place(left, rect({ width: pt(80), stroke: blue })),
        ]),
      ),
    ),
  )
}
