// Converted from test/suite/corpus/list-item-styling.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, green, inline, m, red, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.list(m.item(['Hello'])),
      inline(
        text({ fill: red }, blocks(m.list(m.item(['World'])))),
        space,
        text({ fill: green }, blocks(m.list(m.item(['What up?'])))),
      ),
    ),
  )
}
