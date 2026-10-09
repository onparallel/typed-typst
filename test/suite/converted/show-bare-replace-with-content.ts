// Converted from test/suite/corpus/show-bare-replace-with-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(inline`Shown`), 'Ignored'))
}
