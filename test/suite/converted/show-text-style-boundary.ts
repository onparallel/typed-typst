// Converted from test/suite/corpus/show-text-style-boundary.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, contentBlock, data, doc, inline, m, red, set, show, space, text, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show("What's up", set(text, { fill: blue })),
      show('your party', underline),
      inline`What's ${contentBlock(inline(space))} up at ${data('your')} ${text({ fill: red }, inline`party?`)}`,
    ),
  )
}
