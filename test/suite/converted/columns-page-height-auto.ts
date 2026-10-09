// Converted from test/suite/corpus/columns-page-height-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, colbreak, doc, external, inline, page, pct, pt, raw, rect, set } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    set(page, { width: cm(7.05), columns: 2 }),
    'There can be as much content as you want in the left column and the document will grow with it.',
    inline(rect({ fill: conifer, width: pct(100), height: pt(30) })),
    inline`Only an explicit ${colbreak()} ${raw('#colbreak()')} can put content in the second column.`,
  )
}
