// Converted from test/suite/corpus/image-svg-variable-font.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, image, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        bytes(unsafeRaw.code<any>`\`\`\`
  <svg id="svg1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <text
      x="10" y="40" font-family="Cantarell" font-size="32"
      style="font-variation-settings: 'wght' 300"
    >
      Hello
    </text>
    <text
      x="10" y="80" font-family="Cantarell" font-size="32"
      style="font-variation-settings: 'wght' 700"
    >
      Hello
    </text>
  </svg>
  \`\`\`.text`),
      ),
    ),
  )
}
