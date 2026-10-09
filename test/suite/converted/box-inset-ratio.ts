// Converted from test/suite/corpus/box-inset-ratio.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, let_, m, pt, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [bodyWidthDecl, bodyWidth] = let_('body-width', pt(10))
  return doc(
    m.lines(
      bodyWidthDecl,
      inline(unsafeRaw.code<any>`context for inset in range(10).map(n => n / 10) {
  // If there's infinite available space, then:
  // \`\`\`
  // measured-width = body-width + measured-width × inset.
  // \`\`\`
  // (not counting truncation errors)
  let (width: measured-width) = measure(
    box(
      // Outset should not affect inset.
      outset: 137pt,
      inset: (left: 100% * inset),
      block(width: body-width)
    ),
    width: auto,
  )
  assert.eq(measured-width, body-width / (1 - inset))
}`),
    ),
  )
}
