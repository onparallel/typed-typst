// Converted from test/suite/corpus/image-pixmap-rgb8.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, cm, doc, image, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        { format: { encoding: 'rgb8', width: 3, height: 3 }, width: cm(1) },
        bytes([
          255, 0, 0, 0, 255, 0, 0, 0, 255, 128, 0, 0, 0, 128, 0, 0, 0, 128, 128, 128, 0, 0, 128, 128, 128, 0, 128,
        ]),
      ),
    ),
  )
}
