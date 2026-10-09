// Converted from test/universe/corpus/ape.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const doc_with = define('with')
    .named('authors', T.any, null)
    .named('lang', T.any, null)
    .named('outline', T.any, null)
    .named('smallcaps', T.any, null)
    .named('style', T.any, null)
    .named('title', T.any, null)
    .named('title-page', T.any, null)
    .returns(T.any)
    .external(doc_2)
  return doc(
    importPackage('@preview/ape:0.2.0', [doc_2]),
    show(
      doc_with({
        lang: 'fr',
        title: ['Chapitre', 'Titre'],
        authors: '',
        style: 'numbered',
        titlePage: true,
        outline: true,
        smallcaps: true,
      }),
    ),
  )
}
