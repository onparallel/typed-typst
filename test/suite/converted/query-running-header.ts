// Converted from test/suite/corpus/query-running-header.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  context,
  define,
  doc,
  fr,
  h,
  inline,
  m,
  outline,
  page,
  set,
  smallcaps,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    set(page, {
      paper: 'a8',
      margin: { y: cm(1), x: cm(0.5) },
      header: unsafeRaw.code<any>`context {
    smallcaps[Typst Academy]
    h(1fr)
    let after = query(selector(heading).after(here()))
    let before = query(selector(heading).before(here()))
    let elem = if before.len() != 0 {
      before.last()
    } else if after.len() != 0 {
      after.first()
    }
    emph(elem.body)
  }`,
    }),
    inline(outline()),
    m.lines(m.heading(1, 'Introduction'), inline(lines(1))),
    m.lines(m.heading(1, 'Background'), inline(lines(2))),
    m.heading(1, 'Approach'),
  )
}
