// Converted from test/suite/corpus/context-delayed-warning.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, heading, inline, label, labelled, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, null),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('A')), label('a'))),
      inline(unsafeRaw.code<any>`context {
  let n = query(<a>).len()
  let fonts = ("nope", "Roboto")
  set text(font: fonts.at(n))
}`),
    ),
  )
}
