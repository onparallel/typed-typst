// Converted from test/suite/corpus/footnote-invariant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, footnote, inline, page, pt, set } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(set(page, { height: pt(120) }), inline(lines(5)), inline`A ${footnote(lines(6, '1'))}`)
}
