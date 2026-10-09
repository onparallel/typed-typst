// Converted from test/suite/corpus/set-instantiation-site.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, strong } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', inline`World`)
  return doc(m.lines(xDecl, inline`Hello ${strong(inline(x))}`))
}
