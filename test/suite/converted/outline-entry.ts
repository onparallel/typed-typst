// Converted from test/suite/corpus/outline-entry.typ by scripts/convert-suite.ts — do not edit.
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
      heading({ depth: 1 }, inline('Introduction')),
      heading({ depth: 1 }, inline('Background')),
      heading({ depth: 2 }, inline('History')),
      heading({ depth: 2 }, inline('State of the Art')),
      heading({ depth: 1 }, inline('Analysis')),
      heading({ depth: 2 }, inline('Setup')),
    ),
  )
}
