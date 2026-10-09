// Converted from test/suite/corpus/issue-4363-set-page-after-tag.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, doc, inline, m, metadata, page, pagebreak, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { fill: aqua }), inline`1 ${pagebreak()} ${metadata(null)} ${set(page, { fill: red })} 2`),
  )
}
