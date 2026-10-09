// Converted from test/suite/corpus/image-pixmap-luma8.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, cm, doc, image, inline, range, times } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        { format: { encoding: 'luma8', width: 4, height: 4 }, width: cm(1) },
        bytes(range(16).map((x) => times(x, 16))),
      ),
    ),
  )
}
