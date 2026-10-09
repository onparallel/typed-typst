// Converted from test/suite/corpus/deco-tags-emph-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`Cats are ${emph(inline`cute`)} animals.`)
}
