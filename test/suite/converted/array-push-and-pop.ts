// Converted from test/suite/corpus/array-push-and-pop.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [tasksDecl, tasks] = let_('tasks', { a: [1, 2, 3], b: [4, 5, 6] })
  return doc(
    inline(
      codeBlock([
        tasksDecl,
        test(unsafeRaw.code<any>`tasks.at("a").pop()`, 3),
        unsafeRaw.code<any>`tasks.b.push(7)`,
        test(unsafeRaw.code<any>`tasks.a`, [1, 2]),
        test(tasks.at('b'), [4, 5, 6, 7]),
      ]),
    ),
  )
}
