// Converted from test/suite/corpus/issue-7020-break-tags.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, inline, parbreak, quote, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline`Foo ${quote(add(unsafeRaw.math``, parbreak()))}`)
}
