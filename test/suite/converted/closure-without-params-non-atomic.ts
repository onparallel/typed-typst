// Converted from test/suite/corpus/closure-without-params-non-atomic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_ } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', 'x')
  return doc(xDecl, inline`${x} => y`)
}
