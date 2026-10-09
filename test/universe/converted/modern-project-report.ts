// Converted from test/universe/corpus/modern-project-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  luma,
  m,
  pct,
  pt,
  rect,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('address', T.any, null)
    .named('authors', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('guide', T.any, null)
    .named('institute', T.any, null)
    .named('stream', T.any, null)
    .named('subject', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/modern-project-report:0.1.0', [project]),
    show(
      project_with({
        title: 'Sample Project Report',
        subtitle: 'A Study on Modern Software Engineering Concepts',
        abstract: inline`${space}This project report presents an in-depth analysis and implementation of the target system.
It details the theoretical foundation, architecture, methodology, experimental results, and
conclusion.${space}`,
        subject: 'PROJ-CS881 PROJECT - III',
        degree: 'Bachelor of Technology',
        stream: 'Computer Science & Engineering',
        guide: {
          name: 'Dr. Jane Smith',
          designation: 'Associate Professor',
          department: 'Department of Computer Science & Engineering',
        },
        authors: [
          {
            name: 'Alice Johnson',
            department: 'Computer Science',
            rollno: '123456789',
            regno: '1000000010 of 2021-22',
          },
          { name: 'Bob Smith', department: 'Computer Science', rollno: '123456790', regno: '1000000011 of 2021-22' },
        ],
        department: 'Department of Computer Science & Engineering',
        institute: 'University Institute of Technology',
        address: '123 University Campus, Kolkata - 700001',
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(60))),
    m.lines(m.heading(2, 'Background'), inline(lorem(120))),
    m.lines(m.heading(2, 'Objectives'), inline(lorem(80))),
    m.lines(m.heading(1, 'Related Work'), inline(lorem(50))),
    m.lines(m.heading(2, 'Literature Survey'), inline(lorem(100))),
    m.lines(m.heading(3, 'Analysis of Existing Systems'), inline(lorem(90))),
    m.lines(m.heading(1, 'System Architecture & Implementation'), inline(lorem(60))),
    m.lines(m.heading(2, 'Design Details'), inline(lorem(100))),
    inline(rect({ stroke: add(pt(0.5), luma(120)), inset: pt(10), radius: pt(4), width: pct(100) }, lorem(20))),
    m.lines(m.heading(1, 'Conclusion & Future Scope'), inline(lorem(80))),
  )
}
