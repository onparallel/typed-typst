// Converted from test/suite/corpus/smartquote-he.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { lang: 'he' }), inline`"הסוס לא אוכל סלט מלפפונים" היה המשפט ההראשון שנאמר ב'טלפון'.`))
}
