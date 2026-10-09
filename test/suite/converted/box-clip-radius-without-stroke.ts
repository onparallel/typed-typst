// Converted from test/suite/corpus/box-clip-radius-without-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, image, inline, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(60) }),
    inline(
      box(
        { radius: pt(5), width: pt(20), height: pt(20), clip: true },
        image({ width: pt(30) }, path('/assets/images/rhino.png')),
      ),
    ),
  )
}
