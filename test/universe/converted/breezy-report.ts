// Converted from test/universe/corpus/breezy-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  fr,
  importPackage,
  inline,
  lorem,
  m,
  raw,
  show,
  space,
  table,
} from '../../../src/index.ts'

export default () => {
  const breezy = external('breezy')
  const endBreezy = define('end-breezy').returns(T.any).external()
  const breezy_with = define('with')
    .named('author', T.any, null)
    .named('course-code', T.any, null)
    .named('course-name', T.any, null)
    .named('semester', T.any, null)
    .named('student-id', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(breezy)
  return doc(
    importPackage('@preview/breezy-report:0.1.0', [breezy, endBreezy]),
    show(
      breezy_with({
        semester: 'Semester 1 2026',
        courseCode: 'ENGE500',
        courseName: 'Course Name',
        title: 'Report Title: The purpose of the report',
        studentId: '12345678',
        author: 'Student Name',
      }),
    ),
    m.lines(
      m.heading(1, 'Section'),
      inline(lorem(40)),
      m.list(
        m.item(['List item 1']),
        m.item(m.lines('List item 2', m.list(m.item(['List item sub 1']), m.item(['List item sub 2'])))),
        m.item(['List item 3']),
      ),
    ),
    inline(lorem(20)),
    m.lines(
      m.heading(2, 'Subsection'),
      inline(
        lorem(60),
        space,
        figure(
          { caption: 'Caption for a table.' },
          table({ columns: [fr(1), fr(1)] }, inline`Heading 1`, inline`Heading 2`, inline(lorem(10)), inline(lorem(5))),
        ),
      ),
      m.heading(1, 'Section'),
      inline(lorem(40)),
    ),
    inline(
      raw(
        { block: true, lang: 'c' },
        '#int main()\n{\n  int count = 0;\n\n  while (1)\n  {\n    for (int i = 0; i < 5; i++)\n    {\n      printf(count);\n      count++;\n    }\n  }\n}\n',
      ),
    ),
    inline(endBreezy()),
  )
}
