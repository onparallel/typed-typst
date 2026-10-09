// Converted from test/suite/corpus/content-field-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, list, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    show(list, (it, ctx) => codeBlock([], test(unsafeRaw.code<any>`it.children.len()`, 3))),
    m.list(m.item(['A']), m.item(['B']), m.item(['C'])),
  )
}
