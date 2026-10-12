// Converted from test/suite/corpus/issue-2044-invalid-parsed-ident.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.math`floor(phi.alt.)`, space, unsafeRaw.math`floor(phi.alt. )`))
}
