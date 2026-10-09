// Converted from test/universe/corpus/modern-se-kul-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  em,
  external,
  gradient,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  pt,
  show,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('academic-year', T.any, null)
    .named('assessors', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('degree', T.any, null)
    .named('electronic-version', T.any, null)
    .named('english-master', T.any, null)
    .named('font-size', T.any, null)
    .named('language', T.any, null)
    .named('list-of-figures', T.any, null)
    .named('list-of-listings', T.any, null)
    .named('logo', T.content, [])
    .named('preface', T.any, null)
    .named('promotors', T.any, null)
    .named('supervisors', T.any, null)
    .named('symbols', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    m.lines(
      importPackage('@preview/modern-se-kul-thesis:0.1.0', [template]),
      show(
        template_with({
          title: 'An example title',
          academicYear: datetime.today().year(),
          authors: ['A guy', 'Another guy'],
          promotors: ['Prof. dr. ir. Man'],
          assessors: ['Assessor nr 1'],
          supervisors: ['A supervisor'],
          degree: { elective: 'Software engineering', master: 'Computerwetenschappen', color: [0, 0, 1, 0] },
          language: 'en',
          englishMaster: false,
          fontSize: pt(11),
          electronicVersion: true,
          bibliography: bibliography(path('references.bib')),
          preface: includeFile('sections/preface.typ'),
          listOfFigures: true,
          listOfListings: false,
          symbols: null,
          logo: inline(
            text({ size: em(3), fill: unsafeRaw.code<any>`gradient.linear(..color.map.turbo)` }, inline`Fix logo`),
          ),
        }),
      ),
    ),
    includeFile('sections/chapter-1.typ'),
  )
}
