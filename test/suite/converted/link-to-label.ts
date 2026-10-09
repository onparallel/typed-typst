// Converted from test/suite/corpus/link-to-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, label, labelled, link, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(labelled(['Text', space], label('hey')), space, link(label('hey'), inline`Go to text.`)))
}
