// Converted from test/universe/corpus/examify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const examify = external('examify')
  const examify_with = define('with')
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('class-label', T.any, null)
    .named('contact-details', T.any, null)
    .named('exam-name', T.any, null)
    .named('fonts', T.any, null)
    .named('institute', T.any, null)
    .named('language', T.any, null)
    .named('marks', T.any, null)
    .named('marks-label', T.any, null)
    .named('paper-size', T.any, null)
    .named('subject', T.any, null)
    .named('subject-label', T.any, null)
    .named('time', T.any, null)
    .named('time-label', T.any, null)
    .returns(T.any)
    .external(examify)
  return doc(
    importPackage('@preview/examify:0.1.2', [examify]),
    show(
      examify_with({
        paperSize: 'a4',
        fonts: 'New Computer Modern',
        language: 'EN',
        institute: 'Institute Name',
        author: 'Teacher Name',
        contactDetails: 'www.example.com',
        examName: 'First Semester Examination',
        subjectLabel: 'Subject',
        subject: 'Set Theory',
        marksLabel: 'Full Marks',
        marks: 10,
        classLabel: 'Class',
        class: 'XI',
        timeLabel: 'Time',
        time: '30 Minutes',
      }),
    ),
  )
}
