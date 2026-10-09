// Converted from test/suite/corpus/deco-tags-highlight-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${highlight(inline`highlighted`)} alksjdflk asdjlkfj alskdj word.`)
}
