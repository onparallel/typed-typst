// Converted from test/suite/corpus/smartquote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'en' }),
      inline`"The horse eats no cucumber salad" was the first sentence ever uttered on the 'telephone.'`,
    ),
  )
}
