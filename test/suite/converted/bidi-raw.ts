// Converted from test/suite/corpus/bidi-raw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, raw, rtl, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'he' }),
      inline`לדוג. ${raw('if a == b:')} זה תנאי ${set(raw, { lang: 'python' })} לדוג. ${raw('if a == b:')}
זה תנאי`,
    ),
    m.lines(show(raw, set(text, { dir: rtl })), inline`לתכנת בעברית ${raw('אם א == ב:')}`),
  )
}
