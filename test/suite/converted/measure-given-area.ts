// Converted from test/suite/corpus/measure-given-area.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, let_, lorem, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [textDecl, text_2] = let_('text', lorem(100))
  return doc(
    textDecl,
    inline(unsafeRaw.code<any>`context {
  let d1 = measure(text)
  assert(d1.width > 2000pt)
  assert(d1.height < 10pt)
  let d2 = measure(width: 400pt, height: auto, text)
  assert(d2.width < 400pt)
  assert(d2.height > 50pt)
}`),
  )
}
