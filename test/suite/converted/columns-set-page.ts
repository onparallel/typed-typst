// Converted from test/suite/corpus/columns-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, bottom, cm, colbreak, doc, eastern, inline, page, pct, pt, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: cm(5), width: cm(7.05), columns: 2 }),
    inline`Lorem ipsum dolor sit amet is a common blind text and I again am in need of filling up this
page ${align(bottom, rect({ fill: eastern, width: pct(100), height: pt(12) }))} ${colbreak()}`,
    inline`so I'm returning to this trusty tool of tangible terror. Sure, it is not the most creative way
of filling up a page for a test but it does get the job done.`,
  )
}
