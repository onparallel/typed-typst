// Converted from test/suite/corpus/smartquote-custom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(smartquote, { quotes: '«»' }), inline`"Double and 'Single' Quotes"`),
    m.lines(set(smartquote, { quotes: { double: auto, single: '«»' } }), inline`"Double and 'Single' Quotes"`),
  )
}
