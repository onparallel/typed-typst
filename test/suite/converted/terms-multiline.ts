// Converted from test/suite/corpus/terms-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { size: pt(8) }),
    m.terms(
      m.term(['Fruit'], ['A tasty, edible thing.']),
      m.term(['Veggie'], ['An important energy source for vegetarians.'], 'And healthy!'),
    ),
  )
}
