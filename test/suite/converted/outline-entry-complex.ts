// Converted from test/suite/corpus/outline-entry-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  assume,
  counter,
  doc,
  heading,
  inline,
  link,
  m,
  outline,
  page,
  pagebreak,
  pt,
  repeat,
  set,
  show,
  space,
  sym,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(150), numbering: 'I', margin: { bottom: pt(20) } }),
      set(heading, { numbering: '1.' }),
    ),
    m.lines(
      set(outline.entry, { fill: repeat(inline`--`) }),
      show(where(outline.entry, { level: 1 }), (it, ctx) =>
        link(
          assume<'location'>(it.element.location()),
          unsafeRaw.code<any>`it.indented(it.prefix(), {
    emph(it.body())
    [ ]
    text(luma(100), box(width: 1fr, repeat[--·--]))
    [ ]
    it.page()
  })`,
        ),
      ),
    ),
    inline(counter(page).update(3), space, outline()),
    show(heading, null),
    m.lines(
      m.heading(1, 'Top heading'),
      m.heading(2, 'Not top heading'),
      m.heading(3, 'Lower heading'),
      m.heading(3, 'Lower too'),
      m.heading(2, 'Also not top'),
    ),
    inline(pagebreak(), space, set(page, { numbering: '1' })),
    m.lines(m.heading(1, 'Another top heading'), m.heading(2, 'Middle heading'), m.heading(3, 'Lower heading')),
  )
}
