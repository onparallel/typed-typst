// Converted from test/suite/corpus/heading-show-where.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, block, doc, eastern, heading, inline, m, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    show(where(heading, { level: 5 }), (it, ctx) =>
      block(text({ font: 'Roboto', fill: eastern }, add(it.body, inline`!`))),
    ),
    m.lines(m.heading(1, 'Heading'), m.heading(5, 'Heading 🌍'), inline(heading({ level: 5 }, inline`Heading`))),
  )
}
