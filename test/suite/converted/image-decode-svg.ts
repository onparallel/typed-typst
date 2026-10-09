// Converted from test/suite/corpus/image-decode-svg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, image, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        { format: 'svg' },
        bytes(
          unsafeRaw.code<any>`\`<svg xmlns="http://www.w3.org/2000/svg" height="140" width="500"><ellipse cx="200" cy="80" rx="100" ry="50" style="fill:yellow;stroke:purple;stroke-width:2" /></svg>\`.text`,
        ),
      ),
    ),
  )
}
