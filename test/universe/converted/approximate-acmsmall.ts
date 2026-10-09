// Converted from test/universe/corpus/approximate-acmsmall.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, inline, let_, lorem, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const acmart = define('acmart')
    .named('abstract', T.content, [])
    .named('anonymous', T.any, null)
    .named('authors', T.any, null)
    .named('ccs', T.any, null)
    .named('copyright', T.any, null)
    .named('format', T.any, null)
    .named('keywords', T.any, null)
    .named('nonacm', T.any, null)
    .named('publication', T.any, null)
    .named('shortauthors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const [acmartDecl, acmart_2] = let_(
    'acmart',
    acmart({
      format: 'acmsmall',
      title: 'An example paper',
      nonacm: false,
      anonymous: false,
      authors: [
        {
          name: 'First Author',
          email: 'first@example.com',
          orcid: '1234-5678-9012',
          affiliation: {
            institution: 'First Affiliation',
            streetaddress: '42 First Street',
            postcode: '1234',
            city: 'City',
            state: 'State',
            country: 'Country',
          },
        },
        {
          name: 'Second Author',
          email: 'second@example.com',
          orcid: null,
          affiliation: [
            { institution: 'Second Affiliation', country: 'Country' },
            { institution: 'Third Affiliation', country: 'Country' },
          ],
        },
        {
          authors: [
            { name: 'Third Author', email: null, orcid: null },
            { name: 'Fourth Author', email: 'fourth@example.com', orcid: null },
          ],
          affiliation: { institution: 'Fourth Affiliation', country: 'Country' },
        },
      ],
      shortauthors: 'First et al.',
      abstract: inline(space, lorem(30), space),
      ccs: [
        [
          inline`Computer systems organization`,
          [
            [500, inline`Embedded systems`],
            [300, inline`Redundancy`],
            [0, inline`Robotics`],
          ],
        ],
        [inline`Networks`, [[100, inline`Network reliability`]]],
      ],
      keywords: ['datasets', 'neural networks', 'gaze detection', 'text tagging'],
      copyright: 'acmlicensed',
      publication: { journal: 'JACM', volume: 37, number: 4, articleNumber: 111, year: 2018, month: 8, doi: null },
    }),
  )
  return doc(
    importPackage('@preview/approximate-acmsmall:0.2.1', [acmart]),
    acmartDecl,
    unsafeRaw.markup`#show: acmart.show_`,
    inline(unsafeRaw.code<any>`(acmart.make-title)()`),
    m.heading(1, 'First level heading'),
    inline(lorem(30)),
    m.heading(2, 'Second level heading'),
    inline(lorem(30)),
    m.heading(3, 'Third level heading'),
    inline(lorem(30)),
    m.lines(m.heading(4, 'Fourth level heading'), inline(lorem(30))),
  )
}
