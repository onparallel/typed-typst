// Converted from test/suite/corpus/outline-indent-auto.typ by scripts/convert-suite.ts — do not edit.
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
      heading({ depth: 1 }, inline('A')),
      heading({ depth: 2 }, inline('B')),
      heading({ depth: 2 }, inline('C')),
      heading({ depth: 2 }, inline('D')),
      heading({ depth: 3 }, inline('Title that breaks across lines')),
      heading({ depth: 1 }, inline('E')),
      heading({ depth: 2 }, inline('F')),
      heading({ depth: 3 }, inline('Aligned')),
    ),
  )
}
