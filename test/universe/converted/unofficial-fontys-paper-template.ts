// Converted from test/universe/corpus/unofficial-fontys-paper-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const fontysPaper = external('fontys-paper')
  const fontysPaper_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('authors-details', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(fontysPaper)
  return doc(
    importPackage('@preview/unofficial-fontys-paper-template:0.1.0', [fontysPaper]),
    show(
      fontysPaper_with({
        title: 'Title',
        authors: ['Author A', 'Author B'],
        authorsDetails: ['Some University A', 'Some University B'],
        keywords: ['Some', 'Complex'],
        abstract: inline(lorem(60)),
      }),
    ),
    m.heading(1, 'Start improving the world'),
  )
}
