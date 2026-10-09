// Converted from test/suite/corpus/smartquote-el.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'el' }),
      inline`"Το άλογο δεν τρώει αγγουροσαλάτα" ήταν η πρώτη πρόταση που ειπώθηκε στο 'τηλέφωνο'.`,
    ),
  )
}
