// Converted from test/suite/corpus/image-svg-linked-jpg2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, gray, image, inline, m, page, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { fill: gray }),
      inline(
        image(
          bytes(unsafeRaw.code<any>`\`\`\`
  <svg xmlns="http://www.w3.org/2000/svg" height="80" width="48">
    <image href="file://../../../assets/images/f2t.jpg" />
    <circle r="32" cx="24" cy="40" fill="none" stroke="blue" />
  </svg>
  \`\`\`.text`),
        ),
      ),
    ),
  )
}
