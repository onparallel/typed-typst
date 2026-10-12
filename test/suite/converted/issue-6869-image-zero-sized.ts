// Converted from test/suite/corpus/issue-6869-image-zero-sized.typ by scripts/convert-suite.ts — do not edit.
import { doc, image, inline, path, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(image({ width: pt(0), height: pt(0) }, path('/assets/images/f2t.jpg'))))
}
