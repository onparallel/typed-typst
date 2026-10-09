// Converted from test/universe/corpus/rezvan-chalmers-cse-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, let_, m, show } from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const appendices = external('appendices')
  const template_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('authors', T.any, null)
    .named('cover-caption', T.any, null)
    .named('department', T.any, null)
    .named('examiner', T.any, null)
    .named('keywords', T.any, null)
    .named('printed-by', T.any, null)
    .named('series', T.any, null)
    .named('subject', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  const [departmentDecl, department] = let_('department', 'Department of Computer Science and Engineering')
  return doc(
    importPackage('@preview/rezvan-chalmers-cse-thesis:0.2.0', [template, appendices]),
    departmentDecl,
    show(
      template_with({
        title: 'Your Thesis Title',
        subtitle: 'An optional subtitle',
        authors: ['Your Name'],
        department: department,
        subject: 'Computer Science and Engineering',
        supervisor: ['Supervisor Name', department],
        examiner: ['Examiner Name', department],
        abstract: inline`Write your abstract here.`,
        acknowledgements: inline`Write your acknowledgements here.`,
        keywords: ['keyword-1', 'keyword-2'],
        series: null,
        coverCaption: null,
        printedBy: null,
      }),
    ),
    m.heading(1, 'Introduction'),
    'Start writing your thesis content here.',
    m.lines(show(appendices), m.heading(1, 'Appendix')),
    'Appendix content.',
  )
}
