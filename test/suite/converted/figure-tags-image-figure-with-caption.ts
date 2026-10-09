// Converted from test/suite/corpus/figure-tags-image-figure-with-caption.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, path } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(figure({ caption: inline`Some caption` }, image({ alt: 'A tiger' }, path('/assets/images/tiger.jpg')))),
  )
}
