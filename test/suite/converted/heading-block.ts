// Converted from test/suite/corpus/heading-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, m, space } from '../../../src/index.ts'

export default () => {
  return doc(m.heading(1, contentBlock(inline`This is multiline.${space}`)), m.lines(m.heading(1, 'This'), 'is not.'))
}
