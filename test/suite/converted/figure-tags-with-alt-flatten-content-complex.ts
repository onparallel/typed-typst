// Converted from test/suite/corpus/figure-tags-with-alt-flatten-content-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, link, path, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(
        { alt: 'alt text' },
        inline(
          space,
          table(
            { columns: 2 },
            link('https://github.com/typst/typst', inline(space, image(path('/assets/images/tiger.jpg')), space)),
            image(path('/assets/images/tiger.jpg')),
            inline`Some more text`,
          ),
          space,
        ),
      ),
    ),
  )
}
