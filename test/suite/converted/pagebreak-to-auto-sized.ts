// Converted from test/suite/corpus/pagebreak-to-auto-sized.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(set(page, { width: auto, height: auto }), inline`First ${pagebreak({ to: 'odd' })} Third`)
}
