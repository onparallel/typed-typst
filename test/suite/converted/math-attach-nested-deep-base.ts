// Converted from test/suite/corpus/math-attach-nested-deep-base.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [varDecl, var_2] = let_('var', unsafeRaw.math`x^1`)
  return doc(
    inline(
      codeBlock([
        varDecl,
        unsafeRaw.code<any>`for i in range(24) {
    var = $var$
  }`,
        unsafeRaw.math`var_2`,
      ]),
    ),
  )
}
