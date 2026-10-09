// Converted from test/suite/corpus/show-text-where-text-is-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, red, show, space, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(text, { text: ' ' }), inline`B`),
      inline`A${text(' ')}C ${linebreak()} A${text(inline(space))}C ${linebreak()} A${text({ fill: red }, ' ')}C`,
    ),
  )
}
