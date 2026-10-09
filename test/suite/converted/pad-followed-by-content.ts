// Converted from test/suite/corpus/pad-followed-by-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, cm, doc, image, inline, left, m, pad, page, path, pt, right, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: cm(6) }),
      inline(
        align(left, inline`Before`),
        space,
        pad(pt(10), image(path('/assets/images/tiger.jpg'))),
        space,
        align(right, inline`After`),
      ),
    ),
  )
}
