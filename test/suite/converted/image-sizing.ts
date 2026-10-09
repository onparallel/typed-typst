// Converted from test/suite/corpus/image-sizing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, bottom, box, doc, image, inline, path, pct, pt, right, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      box(image({ width: pt(30) }, path('/assets/images/rhino.png'))),
      space,
      box(image({ height: pt(30) }, path('/assets/images/rhino.png'))),
    ),
    inline(image({ width: pct(100), height: pt(20), fit: 'stretch' }, path('/assets/images/monkey.svg'))),
    inline(align(add(bottom, right), image({ width: pt(40), alt: 'A tiger' }, path('/assets/images/tiger.jpg')))),
  )
}
