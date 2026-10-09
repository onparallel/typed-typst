// Converted from test/suite/corpus/list-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, list, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(emph(inline`Shopping list`), space, list(inline`Apples`, inline`Potatoes`, inline`Juice`)))
}
