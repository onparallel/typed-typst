// Converted from test/universe/corpus/humble-dtu-thesis.typ by scripts/convert-suite.ts — do not edit.
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
  m,
  pagebreak,
  path,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const dtuProject = external('dtu-project')
  const dtuProject_with = define('with')
    .named('address-i', T.any, null)
    .named('address-ii', T.any, null)
    .named('authors', T.any, null)
    .named('before', T.any, null)
    .named('date', T.any, null)
    .named('department', T.any, null)
    .named('department-full-title', T.any, null)
    .named('departmentwebsite', T.any, null)
    .named('description', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(dtuProject)
  return doc(
    importPackage('@preview/humble-dtu-thesis:0.1.0', [dtuProject]),
    set(text, { font: 'Noto Sans', lang: 'en' }),
    show(
      dtuProject_with({
        title: 'Using Typst Instead Of Latex To Write A \nThesis, DTU Template',
        description: 'Master Thesis',
        authors: ['Name Namesen'],
        date: datetime.today().display('[day] [month repr:long] [year]'),
        university: 'Technical University of Denmark',
        department: 'DTU Compute',
        departmentFullTitle: 'Department of Applied Mathematics and Computer Science',
        addressI: 'Richard Petersens Plads, Bygning 321',
        addressIi: '2800 Kgs. Lyngby Denmark',
        departmentwebsite: 'www.compute.dtu.dk',
        before: {
          summaryEnglish: includeFile('sections/preface/english.typ'),
          summaryDanish: includeFile('sections/preface/danish.typ'),
          preface: includeFile('sections/preface/preface.typ'),
          acknowledgement: includeFile('sections/preface/acknowledgement.typ'),
          contents: includeFile('sections/preface/contents.typ'),
          readersGuide: includeFile('sections/preface/readers-guide.typ'),
        },
      }),
    ),
    m.lines(includeFile('sections/introduction.typ'), includeFile('sections/conclusion.typ')),
    inline(pagebreak(), space, bibliography(path('works.bib'))),
    inline(pagebreak(), space, includeFile('sections/appendix.typ')),
  )
}
