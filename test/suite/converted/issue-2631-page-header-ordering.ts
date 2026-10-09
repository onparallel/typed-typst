// Converted from test/suite/corpus/issue-2631-page-header-ordering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  context,
  doc,
  heading,
  inline,
  m,
  page,
  pagebreak,
  pt,
  set,
  show,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(6) }),
      show(heading, set(text, { weight: 'regular', size: pt(6) })),
      set(page, {
        margin: { x: pt(10), top: pt(20), bottom: pt(10) },
        height: pt(50),
        header: unsafeRaw.code<any>`context {
    let prev = query(selector(heading).before(here()))
    let next = query(selector(heading).after(here()))
    let prev = if prev != () { prev.last().body }
    let next = if next != () { next.first().body }
    (prev: prev, next: next)
  }`,
      }),
    ),
    m.lines(m.heading(1, 'First'), inline`Hi ${pagebreak()}`, m.heading(1, 'Second')),
  )
}
