// Converted from test/suite/corpus/import-from-function-scope-item-renamed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(unsafeRaw.markup`#import assert: eq as aseq`, inline(unsafeRaw.code<any>`aseq(10, 10)`)))
}
