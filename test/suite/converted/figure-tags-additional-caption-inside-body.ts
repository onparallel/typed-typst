// Converted from test/suite/corpus/figure-tags-additional-caption-inside-body.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, path, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(
        { caption: inline`The real caption` },
        inline`${space}${image({ alt: 'A tiger' }, path('/assets/images/tiger.jpg'))}, ${figure.caption(inline`Additional caption`)}${space}`,
      ),
    ),
  )
}
