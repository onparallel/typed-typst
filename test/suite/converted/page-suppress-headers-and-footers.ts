// Converted from test/suite/corpus/page-suppress-headers-and-footers.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { header: null, footer: null, numbering: '1' }), 'Look, ma, no page numbers!'),
    inline(pagebreak()),
    m.lines(set(page, { header: auto, footer: auto }), 'Default page numbers now.'),
  )
}
