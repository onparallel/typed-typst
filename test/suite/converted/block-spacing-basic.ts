// Converted from test/suite/corpus/block-spacing-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { spacing: pt(10) }), 'Hello'),
    'There',
    inline(block({ spacing: pt(20) }, inline`Further down`)),
  )
}
