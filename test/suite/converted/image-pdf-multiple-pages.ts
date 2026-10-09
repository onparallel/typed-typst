// Converted from test/suite/corpus/image-pdf-multiple-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, path, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image({ page: 1 }, path('/assets/images/diagrams.pdf')),
      space,
      image({ page: 3 }, path('/assets/images/diagrams.pdf')),
      space,
      image({ page: 2 }, path('/assets/images/diagrams.pdf')),
    ),
  )
}
