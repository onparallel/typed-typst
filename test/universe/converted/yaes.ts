// Converted from test/universe/corpus/yaes.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, external, heading, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const exerciseSheet = external('exercise-sheet')
  const problem = define('problem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).named('student', T.any, null).returns(T.any).external()
  const exerciseSheet_with = define('with')
    .named('course', T.any, null)
    .named('department-info', T.any, null)
    .named('number', T.any, null)
    .named('semester', T.any, null)
    .named('teachers', T.any, null)
    .returns(T.any)
    .external(exerciseSheet)
  return doc(
    importPackage('@preview/yaes:0.1.0', [exerciseSheet, problem, solution]),
    show(
      exerciseSheet_with({
        departmentInfo: ['University Name', 'Department Name', 'Chair Name'],
        teachers: ['Prof. First Name Last Name', 'M. Sc. First Name Last Name'],
        course: 'Course Title',
        semester: 'Summer Term 2026',
        number: 7,
      }),
    ),
    heading({ depth: 1 }, inline('Homework:')),
    inline(problem(inline`${space}This is the first problem. It does not have a title.${space}`)),
    inline(solution(inline`${space}This is the solution.${space}`)),
    heading({ depth: 1 }, inline('In-class:')),
    inline(
      problem(
        { title: 'Title of the problem' },
        inline`${space}This is the second problem. It does have a title.${space}`,
      ),
    ),
    inline(solution({ student: false }, inline`${space}The students will not see this solution.${space}`)),
  )
}
