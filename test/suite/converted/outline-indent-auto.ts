// Converted from test/suite/corpus/outline-indent-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  context,
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
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(set(heading, { numbering: 'I.i.' }), set(page, { width: pt(150) }), show(heading, null)),
    inline(
      context((ctx) => test(unsafeRaw.code<any>`outline.indent`, auto)),
      space,
      outline(),
    ),
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      m.heading(2, 'C'),
      m.heading(2, 'D'),
      m.heading(3, 'Title that breaks across lines'),
      m.heading(1, 'E'),
      m.heading(2, 'F'),
      m.heading(3, 'Aligned'),
    ),
  )
}
