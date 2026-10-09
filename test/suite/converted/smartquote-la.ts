// Converted from test/suite/corpus/smartquote-la.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, smartquote, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'la' }),
      set(smartquote, { alternative: true }),
      inline`"Equus cucumeris sem non edit" prima sententia in 'telephono' prolata fuit.`,
    ),
  )
}
