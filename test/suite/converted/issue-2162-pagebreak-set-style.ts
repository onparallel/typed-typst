// Converted from test/suite/corpus/issue-2162-pagebreak-set-style.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, orange, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(pagebreak({ to: 'even' })),
    'Some text on page 2',
    inline(pagebreak({ to: 'even' })),
    inline`${set(page, { fill: orange })} Some text on page 4`,
  )
}
