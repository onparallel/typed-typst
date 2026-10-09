// Converted from test/suite/corpus/image-svg-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(250) }),
    inline(figure({ caption: inline`A textful diagram` }, image(path('/assets/images/diagram.svg')))),
  )
}
