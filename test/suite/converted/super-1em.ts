// Converted from test/suite/corpus/super-1em.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, em, inline, m, pt, set, super_, text } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(m.lines(set(text, { size: pt(10) }), inline(super_(context((ctx) => test(em(1).toAbsolute(), pt(10)))))))
}
