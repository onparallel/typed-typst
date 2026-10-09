// Converted from test/suite/corpus/issue-8648-enum-gap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, enum_, m, page, pt, set, top } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { height: pt(150) }), set(enum_, { numberAlign: top })),
    m.enum(m.item([lines(3)]), m.item([lines(8)]), m.item([lines(2)])),
  )
}
