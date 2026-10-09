// Converted from test/suite/corpus/issue-2841-pagebreak-to-weak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pagebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`First ${pagebreak({ to: 'odd' })} ${pagebreak({ weak: true })} Odd`)
}
