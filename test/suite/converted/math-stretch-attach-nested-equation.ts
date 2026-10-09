// Converted from test/suite/corpus/math-stretch-attach-nested-equation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [bodyDecl, body] = let_('body', unsafeRaw.math`stretch(=)`)
  const [bodyDecl_2, body_2] = let_('body', unsafeRaw.math`stretch(=)`)
  return doc(
    m.lines(bodyDecl, inline(unsafeRaw.math.block`body^"text"`)),
    inline(
      codeBlock([
        bodyDecl_2,
        unsafeRaw.code<any>`for i in range(24) {
    body = $body$
  }`,
        unsafeRaw.math`body^"long text"`,
      ]),
    ),
  )
}
