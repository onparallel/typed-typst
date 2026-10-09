// Converted from test/suite/corpus/if-expression.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', 1)
  const [yDecl, y] = let_('y', 2)
  return doc(
    inline(unsafeRaw.code<any>`{
  let x = 1
  let y = 2
  let z

  // Returns if branch.
  z = if x < y { "ok" }
  test(z, "ok")

  // Returns else branch.
  z = if x > y { "bad" } else { "ok" }
  test(z, "ok")

  // Missing else evaluates to none.
  z = if x > y { "bad" }
  test(z, none)
}`),
  )
}
