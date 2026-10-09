// Converted from test/universe/corpus/exm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, let_, show } from '../../../src/index.ts'

export default () => {
  const exam = define('exam')
    .pos('arg1', T.any)
    .named('blanks', T.any, null)
    .named('courseid', T.any, null)
    .named('coursename', T.any, null)
    .named('date', T.any, null)
    .named('examtitle', T.any, null)
    .named('extra', T.any, null)
    .named('instructions', T.any, null)
    .named('instructor', T.any, null)
    .named('length', T.any, null)
    .named('school', T.any, null)
    .named('semester', T.any, null)
    .named('sols', T.any, null)
    .returns(T.any)
    .external()
  const docmode = external('docmode')
  const section = external('section')
  const docmode_update = define('update').pos('arg1', T.any).returns(T.any).external(docmode)
  const section_with = define('with')
    .named('number', T.any, null)
    .named('points', T.any, null)
    .returns(T.any)
    .external(section)
  const [sectionDecl, section_2] = let_('section', section_with({ number: true, points: true }))
  return doc(
    importPackage('@preview/exm:0.1.0', [exam, docmode, section]),
    show((doc_2, ctx) =>
      exam(
        {
          courseid: 'CourseID',
          coursename: 'CourseName',
          school: 'School',
          semester: 'Semester',
          instructor: '',
          examtitle: 'Final',
          date: '8:00–11:00am  Monday, December 15th 2025',
          length: '180 Minutes',
          instructions: '',
          blanks: [
            'Your Name',
            'Your Student ID',
            'Your Exam Room',
            'the Name of Person to your Left',
            'the Name of Person to your Right',
            "Your GSI's Name (Write N/A if in Self-Service)",
          ],
          extra: '',
          sols: false,
        },
        doc_2,
      ),
    ),
    inline(docmode_update('screen')),
    sectionDecl,
  )
}
