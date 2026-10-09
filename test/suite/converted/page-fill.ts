// Converted from test/suite/corpus/page-fill.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, eastern, inline, m, page, pt, set, smallcaps, space, text, white } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(80), height: pt(40), fill: eastern }),
      inline(
        text({ font: 'Roboto', fill: white, size: pt(15) }, smallcaps(inline`Typst`)),
        space,
        page({ width: pt(40), fill: auto, margin: { top: pt(10), rest: auto } }, inline`Hi`),
      ),
    ),
  )
}
