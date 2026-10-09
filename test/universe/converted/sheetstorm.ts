// Converted from test/universe/corpus/sheetstorm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const assignment = external('assignment')
  const task = define('task').pos('arg1', T.content).returns(T.any).external()
  const assignment_with = define('with')
    .named('authors', T.any, null)
    .named('course', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(assignment)
  return doc(
    importPackage('@preview/sheetstorm:0.5.1', [assignment, task]),
    show(assignment_with({ title: 'My title', course: 'My course', authors: 'My name' })),
    inline(task(inline(space))),
  )
}
