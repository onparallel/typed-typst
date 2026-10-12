// Converted from test/suite/corpus/image-svg-complex.typ by scripts/convert-suite.ts — do not edit.
import { doc, image, inline, path } from '../../../src/index.ts'

export default () => {
  return doc(inline(image(path('/assets/images/pattern.svg'))))
}
