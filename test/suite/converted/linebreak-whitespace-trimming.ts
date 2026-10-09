// Converted from test/suite/corpus/linebreak-whitespace-trimming.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, aqua, block, blue, box, doc, inline, pt, text, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block({ width: pt(15) }, box({ fill: aqua }, underline(add(add('A   ', text({ fill: blue }, ' ')), '    B')))),
    ),
  )
}
