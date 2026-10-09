// Converted from test/suite/corpus/linebreak-link-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, link, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(180), height: auto, margin: auto }), set(text, { size: pt(11) })),
    inline`For info see ${link('https://myhost.tld')}.`,
  )
}
