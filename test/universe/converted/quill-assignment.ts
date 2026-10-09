// Converted from test/universe/corpus/quill-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const assignment = external('assignment')
  const question = define('question').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const answer = define('answer').pos('arg1', T.content).returns(T.any).external()
  const assignment_with = define('with')
    .named('assignment', T.any, null)
    .named('course', T.any, null)
    .named('cover-page', T.any, null)
    .named('date', T.any, null)
    .named('student', T.any, null)
    .named('student-id', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(assignment)
  return doc(
    importPackage('@preview/quill-assignment:0.1.0', [assignment, question, answer]),
    show(
      assignment_with({
        title: 'Assignment Title',
        course: 'Course Name',
        assignment: 'Assignment 1',
        student: 'Your Name',
        studentId: '12345678',
        university: 'University Name',
        date: datetime.today(),
        coverPage: true,
      }),
    ),
    m.heading(1, 'Question 1'),
    inline(question({ title: 'Example Question' }, inline`${space}Explain the concept in your own words.${space}`)),
    inline(answer(inline`${space}Write your answer here.${space}`)),
  )
}
