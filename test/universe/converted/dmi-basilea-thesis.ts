// Converted from test/universe/corpus/dmi-basilea-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('appendices', T.any, null)
    .named('author', T.any, null)
    .named('bibliography-content', T.any, null)
    .named('chapters', T.any, null)
    .named('colored', T.any, null)
    .named('date', T.any, null)
    .named('department', T.any, null)
    .named('draft', T.any, null)
    .named('email', T.any, null)
    .named('examiner', T.any, null)
    .named('faculty', T.any, null)
    .named('immatriculation', T.any, null)
    .named('language', T.any, null)
    .named('research-group', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .named('website', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/dmi-basilea-thesis:0.1.1', [thesis]),
    show(
      thesis_with({
        draft: true,
        colored: true,
        title: 'Thesis Template in Typst',
        author: 'Nico Bachmann',
        email: 'nico@nifalu.ch',
        immatriculation: '2020-123-456',
        supervisor: 'Prof. Dr. John Smith',
        examiner: 'Prof. Dr. Alice Johnson',
        faculty: 'Faculty of Science, University of Basel',
        department: 'Department of Mathematics and Computer Science',
        researchGroup: 'Your Research Group',
        website: '',
        thesisType: 'Bachelor Thesis',
        date: datetime.today(),
        language: 'en',
        abstract: inline`${space}This is a demonstration / tutorial on the usage of the UniBasel Typst template.${space}`,
        acknowledgments: inline`${space}Special thanks to the Typst community for creating such an excellent typesetting system.${space}`,
        chapters: [
          includeFile('content/introduction.typ'),
          includeFile('content/background.typ'),
          includeFile('content/methodology.typ'),
          includeFile('content/implementation.typ'),
          includeFile('content/evaluation.typ'),
          includeFile('content/discussion.typ'),
          includeFile('content/conclusion.typ'),
          includeFile('content/future_work.typ'),
          includeFile('content/related_work.typ'),
          includeFile('content/ai_notice.typ'),
        ],
        appendices: [includeFile('content/appendix.typ')],
        bibliographyContent: bibliography({ style: 'ieee', title: null }, path('references.bib')),
      }),
    ),
  )
}
