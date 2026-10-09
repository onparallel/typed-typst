// Converted from test/suite/corpus/show-text-styled-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, red, show, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(' ', 'B'),
      show('X', 'B'),
      inline`A C ${linebreak()} A${text({ fill: red }, inline(space))}C ${linebreak()} A${text({ fill: red }, inline`X`)}C`,
    ),
  )
}
