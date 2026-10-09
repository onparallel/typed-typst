// Converted from test/suite/corpus/image-svg-auto-detection.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, image, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        bytes(unsafeRaw.code<any>`\`\`\`
  <?xml version="1.0" encoding="utf-8"?>
  <!-- An SVG -->
  <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
    <rect fill="red" stroke="black" x="25" y="25" width="150" height="100"/>
  </svg>
  \`\`\`.text`),
      ),
    ),
  )
}
