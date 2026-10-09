// Converted from test/suite/corpus/block-sticky.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, block, define, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline`${lines(3)} ${block({ sticky: true }, inline`D`)} ${block({ sticky: true }, inline`E`)} F`,
    ),
  )
}
