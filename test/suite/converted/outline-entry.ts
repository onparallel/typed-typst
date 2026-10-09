// Converted from test/suite/corpus/outline-entry.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  block,
  doc,
  heading,
  inline,
  m,
  outline,
  page,
  pt,
  set,
  show,
  strong,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(150) }), set(heading, { numbering: '1.' })),
    m.lines(
      show(where(outline.entry, { level: 1 }), set(block, { above: pt(12) })),
      show(where(outline.entry, { level: 1 }), strong),
    ),
    inline(outline({ indent: auto })),
    m.lines(
      show(heading, null),
      m.heading(1, 'Introduction'),
      m.heading(1, 'Background'),
      m.heading(2, 'History'),
      m.heading(2, 'State of the Art'),
      m.heading(1, 'Analysis'),
      m.heading(2, 'Setup'),
    ),
  )
}
