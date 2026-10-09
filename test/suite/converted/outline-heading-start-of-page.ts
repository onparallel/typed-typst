// Converted from test/suite/corpus/outline-heading-start-of-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  contentBlock,
  define,
  doc,
  heading,
  inline,
  m,
  outline,
  page,
  pt,
  set,
  show,
  text,
  where,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { width: pt(140), height: pt(200), margin: { bottom: pt(20) }, numbering: '1' }),
      set(heading, { numbering: '(a/1)' }),
      show(where(heading, { level: 1 }), set(text, { size: pt(12) })),
      show(where(heading, { level: 2 }), set(text, { size: pt(10) })),
    ),
    m.lines(set(outline.entry, { fill: null }), inline(outline())),
    m.lines(m.heading(1, 'A'), m.heading(1, 'B'), inline(lines(3))),
    inline(contentBlock(blocks(m.lines(set(heading, { outlined: false }), m.heading(2, 'C'))))),
    'A',
    m.lines(m.heading(2, 'D'), m.heading(2, 'F'), m.heading(4, 'G')),
  )
}
