// Converted from test/suite/corpus/smartquote-custom-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(smartquote, { quotes: 'áá' }), inline`"Double and 'Single' Quotes"`),
    m.lines(set(smartquote, { quotes: { single: 'áá' } }), inline`"Double and 'Single' Quotes"`),
  )
}
