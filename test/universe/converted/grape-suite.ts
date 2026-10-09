// Converted from test/universe/corpus/grape-suite.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  show,
  space,
  super_,
  sym,
} from '../../../src/index.ts'

export default () => {
  const seminarPaper = external('seminar-paper')
  const seminarPaper_project = define('project')
    .named('address', T.content, [])
    .named('author', T.any, null)
    .named('date', T.content, [])
    .named('email', T.any, null)
    .named('faculty', T.content, [])
    .named('institute', T.content, [])
    .named('instructor', T.content, [])
    .named('semester', T.any, null)
    .named('seminar', T.content, [])
    .named('student-number', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('university', T.content, [])
    .returns(T.any)
    .external(seminarPaper)
  return doc(
    importPackage('@preview/grape-suite:4.0.0', [seminarPaper]),
    show(
      seminarPaper_project.with({
        title: inline`Intensionality of That-${sym.wj}Clauses`,
        subtitle: inline`Intensional Contexts in Philosophical Arguments`,
        university: inline`Example University`,
        faculty: inline`Example Faculty`,
        institute: inline`Institute for Philosophy`,
        instructor: inline`Dr. phil. Edgar Example-Examiner`,
        seminar: inline`Example Seminar`,
        date: inline`14${super_(inline`th`)} June 2023`,
        semester: null,
        author: 'John Doe',
        studentNumber: '0123456789',
        email: 'john.doe@university.uni',
        address: inline`${space}12345 Musterstadt ${linebreak()} Musterstraße 67${space}`,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(100))),
    inline(lorem(100)),
    m.lines(m.heading(1, 'Main part'), inline(lorem(100))),
    inline(lorem(100)),
    m.lines(m.heading(2, 'Thesis'), inline(lorem(200))),
    m.lines(m.heading(2, 'Antithesis'), inline(lorem(100))),
    inline(lorem(200)),
    m.lines(m.heading(2, 'Synthesis'), inline(lorem(100))),
    inline(lorem(200)),
    m.heading(1, 'Conclusion'),
    inline(lorem(100)),
    inline(lorem(100)),
  )
}
