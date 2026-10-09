// Converted from test/universe/corpus/magic-isprs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  path,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const isprs = external('isprs')
  const isprsHeading = external('isprs-heading')
  const isprs_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('anonymous', T.any, null)
    .named('appendix', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('institutions', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(isprs)
  return doc(
    importPackage('@preview/magic-isprs:0.1.0', [isprs, isprsHeading]),
    unsafeRaw.markup`#let anonymous = sys.inputs.at("anonymous", default: "false") == "true"`,
    show(
      isprs_with({
        title: inline`Simple Example of a Full Paper Submitted to ISPRS Events`,
        abstract: includeFile('content/abstract.typ'),
        authors: [
          { name: 'Lorem Ipsum', email: 'lipsum@verytechnical.edu', institutions: ['vtu', 'uon'] },
          { name: 'Dolor Sit Amet', email: 'dolor.sit.amet@nowhere.edu', institutions: 'uon' },
          { name: 'Consectetur Adipiscing', email: 'consectetur.adipiscing@nowhere.edu', institutions: 'uon' },
        ],
        institutions: {
          vtu: {
            name: inline`Department of Geomatics, Very Technical University`,
            location: inline`City, Country`,
            emailSuffix: '@verytechnical.edu',
          },
          uon: {
            name: inline`Institute of Photogrammetry, University of Nowhere`,
            location: inline`Somewhere, Country`,
            emailSuffix: '@nowhere.edu',
          },
        },
        keywords: ['Manuscripts', 'ISPRS Archives', 'ISPRS Annals', 'Template', 'Example'],
        acknowledgements: includeFile('content/acknowledgements.typ'),
        bibliography: bibliography(path('biblio.yaml')),
        appendix: includeFile('content/appendix.typ'),
        anonymous: unsafeRaw.code<any>`anonymous`,
      }),
    ),
    includeFile('content/introduction.typ'),
    includeFile('content/main_body.typ'),
    includeFile('content/conclusions.typ'),
  )
}
