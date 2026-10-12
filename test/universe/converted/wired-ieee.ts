// Converted from test/universe/corpus/wired-ieee.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const ieee = external('ieee')
  const ieee_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('index-terms', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(ieee)
  return doc(
    importPackage('@preview/wired-ieee:1.0.1', [ieee]),
    show(
      ieee_with({
        title: inline(),
        abstract: inline(),
        indexTerms: [''],
        authors: [{ name: '', department: inline(), organization: inline(), location: inline(), email: '' }],
        bibliography: bibliography(path('refs.bib')),
        lang: 'en',
      }),
    ),
    heading({ depth: 1 }, inline('Introduction')),
  )
}
