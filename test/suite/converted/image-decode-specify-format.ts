// Converted from test/suite/corpus/image-decode-specify-format.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, path, pct, read } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(image({ format: 'jpg', width: pct(80) }, read({ encoding: null }, path('/assets/images/tiger.jpg')))),
  )
}
