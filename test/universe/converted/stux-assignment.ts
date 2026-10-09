// Converted from test/universe/corpus/stux-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const assignment = external('assignment')
  const problem = define('problem').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const assignment_with = define('with')
    .named('author', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('email', T.any, null)
    .named('roll', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(assignment)
  return doc(
    importPackage('@preview/stux-assignment:0.1.0', [assignment, problem, solution]),
    show(
      assignment_with({
        title: 'Assignment - 1',
        author: 'Student Name',
        email: 'email@example.com',
        roll: '123456',
        course: 'Course Name',
        date: datetime.today().display('[month repr:long] [day], [year]'),
        theme: 'teal',
      }),
    ),
    inline(problem(inline`${space}State your first problem here.${space}`)),
    inline(solution(inline`${space}Write your solution here.${space}`)),
    inline(problem({ title: inline`— Bonus` }, inline`${space}State your second problem here.${space}`)),
    inline(solution(inline`${space}Write your solution here.${space}`)),
  )
}
