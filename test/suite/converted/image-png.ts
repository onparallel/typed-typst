// Converted from test/suite/corpus/image-png.typ by scripts/convert-suite.ts — do not edit.
import { doc, image, inline, path } from '../../../src/index.ts'

export default () => {
  return doc(inline(image(path('/assets/images/rhino.png'))))
}
