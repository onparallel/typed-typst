// Converted from test/suite/corpus/linebreak-shape-run.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`This is partly emp${emph(inline`has`)}ized.`)
}
