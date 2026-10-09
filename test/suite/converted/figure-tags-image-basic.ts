// Converted from test/suite/corpus/figure-tags-image-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, path } from '../../../src/index.ts'

export default () => {
  return doc(inline(image({ alt: 'A tiger' }, path('/assets/images/tiger.jpg'))))
}
