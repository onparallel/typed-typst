// Converted from test/suite/corpus/footnote-nested-break-across-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, define, doc, footnote, inline, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(80) }),
      inline`A ${footnote(add(add(inline`I:${space}`, lines(6)), footnote(inline`II`)))} B ${footnote(inline`III`)}`,
    ),
  )
}
