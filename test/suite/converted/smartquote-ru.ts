// Converted from test/suite/corpus/smartquote-ru.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'ru' }),
      inline`"Лошадь не ест салат из огурцов" - это была первая фраза, сказанная по 'телефону'.`,
    ),
  )
}
