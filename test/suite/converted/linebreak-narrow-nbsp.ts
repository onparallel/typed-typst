// Converted from test/suite/corpus/linebreak-narrow-nbsp.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, show, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show('_', sym.space.nobreak.narrow), '0.1_g, 1_g, 10_g, 100_g, 1_000_g, 10_000_g, 100_000_g, 1_000_000_g'),
  )
}
