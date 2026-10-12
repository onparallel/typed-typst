// Converted from test/suite/corpus/heading-show-where.typ by scripts/convert-suite.ts — do not edit.
import { add, block, doc, eastern, heading, inline, m, show, text, where } from '../../../src/index.ts'

export default () => {
  return doc(
    show(where(heading, { level: 5 }), (it, ctx) =>
      block(text({ font: 'Roboto', fill: eastern }, add(it.body, inline`!`))),
    ),
    m.lines(
      heading({ depth: 1 }, inline('Heading')),
      heading({ depth: 5 }, inline('Heading 🌍')),
      inline(heading({ level: 5 }, inline`Heading`)),
    ),
  )
}
