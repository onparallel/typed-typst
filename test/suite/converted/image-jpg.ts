// Converted from test/suite/corpus/image-jpg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, m, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(60) }), inline(image(path('/assets/images/tiger.jpg')))))
}
