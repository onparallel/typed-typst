// Converted from test/suite/corpus/align-start-and-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, align, deg, doc, end, horizon, inline, m, rotate, set, space, start, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(rotate({ origin: add(end, horizon) }, deg(-30), inline`Hello`)),
    m.lines(set(text, { lang: 'de' }), inline(align(start, inline`Start`), space, align(end, inline`Ende`))),
    m.lines(
      set(text, { lang: 'ar', font: 'Noto Sans Arabic' }),
      inline(align(start, inline`يبدأ`), space, align(end, inline`نهاية`)),
    ),
  )
}
