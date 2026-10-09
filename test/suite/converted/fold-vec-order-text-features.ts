// Converted from test/suite/corpus/fold-vec-order-text-features.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { features: { liga: 1 } }), set(text, { features: { liga: 0 } }), 'fi'))
}
