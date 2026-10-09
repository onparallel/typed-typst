// Converted from test/suite/corpus/pagebreak-to-multiple-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, page, pagebreak, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { height: pt(30), width: pt(80) }), 'First', 'Second', inline(pagebreak({ to: 'odd' })), 'Third')
}
