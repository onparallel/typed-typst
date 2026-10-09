// Converted from test/universe/corpus/normale-internship.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const normaleInternship = external('normale-internship')
  const normaleInternship_with = define('with')
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('mentors', T.any, null)
    .named('place', T.any, null)
    .named('subtitle', T.any, null)
    .named('table-of-contents', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(normaleInternship)
  return doc(
    importPackage('@preview/normale-internship:0.1.0', [normaleInternship]),
    show(
      normaleInternship_with({
        title: 'A simple report template created with Typst',
        subtitle: "Master's degree final-year internship",
        lang: 'en',
        authors: ['Author 1', 'Author 2'],
        mentors: ['Mentors 1', 'Mentors 2'],
        logo: null,
        place: 'Place of the intership',
        date: 'Beginning date',
        tableOfContents: true,
        bibliography: null,
      }),
    ),
  )
}
