// Converted from test/suite/corpus/label-show-where-selector.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, label, labelled, m, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, set(text, { size: pt(10) })),
      unsafeRaw.markup`#show heading.where(label: <intro>): underline`,
    ),
    m.lines(inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))), 'The beginning.'),
    m.lines(m.heading(1, 'Conclusion'), 'The end.'),
  )
}
