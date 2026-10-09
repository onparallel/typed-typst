// Converted from test/suite/corpus/call-args-spread-type-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, arguments_, codeBlock, define, doc, inline, repr, type } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const save = define('save')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => codeBlock([test(type(p['args']), arguments_), test(repr(p['args']), 'arguments(three: true, 1, 2)')]))
  return doc(inline(codeBlock([save.decl, save({ three: true }, 1, 2)])))
}
