// Converted from test/suite/corpus/issue-7178-svg-fallback-deadlock.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, image, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      image(
        bytes(unsafeRaw.code<any>`\`\`\`
  <svg xmlns="http://www.w3.org/2000/svg" height="1" width="1">
    <text font-family="Libertinus Serif">x&#1761;</text>
  </svg>
  \`\`\`.text`),
      ),
    ),
  )
}
