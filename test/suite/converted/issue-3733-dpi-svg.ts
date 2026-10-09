// Converted from test/suite/corpus/issue-3733-dpi-svg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, m, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200), height: pt(200), margin: pt(0) }),
      inline(image(path('/assets/images/relative.svg'))),
    ),
  )
}
