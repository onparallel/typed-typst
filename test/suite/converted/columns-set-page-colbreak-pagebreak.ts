// Converted from test/suite/corpus/columns-set-page-colbreak-pagebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, colbreak, doc, inline, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: cm(1), width: cm(7.05), columns: 2 }),
    inline`A ${colbreak()} ${colbreak()} B ${pagebreak()} C ${colbreak()} D`,
  )
}
