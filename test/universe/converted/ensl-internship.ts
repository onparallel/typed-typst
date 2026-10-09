// Converted from test/universe/corpus/ensl-internship.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  label,
  lorem,
  m,
  par,
  path,
  pt,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const enslInternship = external('ensl-internship')
  const enslInternship_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('mentors', T.any, null)
    .named('place', T.any, null)
    .named('subtitle', T.any, null)
    .named('table-of-contents', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(enslInternship)
  return doc(
    importPackage('@preview/ensl-internship:0.1.0', [enslInternship]),
    show(
      enslInternship_with({
        title: 'A simple report template created with Typst',
        subtitle: "Master's degree final-year internship",
        keywords: ['Kerlyon', 'Lorem', 'Ipsum'],
        abstract: lorem(25),
        lang: 'en',
        authors: ['Author 1', 'Author 2'],
        mentors: ['Mentors 1', 'Mentors 2'],
        logo: image({ height: pt(50) }, path('Logo_CNRS.png')),
        place: 'Place of the intership',
        date: 'Beginning date',
        tableOfContents: true,
        bibliography: bibliography(path('refs.yaml')),
      }),
    ),
    m.lines(m.heading(1, 'First chapter'), m.heading(2, 'Section 1')),
    inline(lorem(200), space, ref(label('code'))),
    m.heading(2, 'Section 2'),
    inline(lorem(200), space, ref(label('electronic'))),
    m.heading(1, 'Second chapter'),
    inline(par('Bonum vinum laetificat cor hominis')),
    inline(lorem(400)),
  )
}
