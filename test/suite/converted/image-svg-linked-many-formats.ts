// Converted from test/suite/corpus/image-svg-linked-many-formats.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, image, inline, m, page, path, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: auto, margin: pt(1) }),
      set(text, { size: pt(1) }),
      inline(image({ width: pt(39) }, path('../../../assets/images/linked.svg'))),
    ),
  )
}
