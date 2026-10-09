// Converted from test/suite/corpus/outline-entry-inner.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  block,
  doc,
  heading,
  inline,
  m,
  outline,
  repeat,
  set,
  show,
  space,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.' }),
      show(outline.entry, (it, ctx) => block(unsafeRaw.code<any>`it.inner()`)),
      show(heading, null),
    ),
    m.lines(set(outline.entry, { fill: repeat(inline`${space}--${space}`) }), inline(outline())),
    m.lines(m.heading(1, 'A'), m.heading(1, 'B')),
  )
}
