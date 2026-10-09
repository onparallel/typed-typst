// Converted from test/suite/corpus/image-pixmap-rgba8.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, cm, doc, image, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        { format: { encoding: 'rgba8', width: 3, height: 3 }, width: cm(1) },
        bytes([
          255, 0, 0, 255, 0, 255, 0, 255, 0, 0, 255, 255, 255, 0, 0, 128, 0, 255, 0, 128, 0, 0, 255, 128, 255, 0, 0, 16,
          0, 255, 0, 16, 0, 0, 255, 16,
        ]),
      ),
    ),
  )
}
