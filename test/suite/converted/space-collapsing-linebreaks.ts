// Converted from test/suite/corpus/space-collapsing-linebreaks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline(align(center, inline`A ${linebreak()} B ${linebreak()} C`)))
}
