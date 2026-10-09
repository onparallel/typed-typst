// Converted from test/universe/corpus/silky-report-insa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, importPackage, inline, m, show, strong } from '../../../src/index.ts'

export default () => {
  const insaReport = define('insa-report')
    .pos('arg1', T.any)
    .named('authors', T.content, [])
    .named('date', T.any, null)
    .named('id', T.any, null)
    .named('pre-title', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    m.lines(
      importPackage('@preview/silky-report-insa:0.5.3', [insaReport]),
      show((doc_2, ctx) =>
        insaReport(
          {
            id: 1,
            preTitle: 'DPT XA',
            title: 'Titre du TP',
            authors: blocks(
              inline(strong(inline`NOM 1 Prénom 1`)),
              inline(strong(inline`NOM 2 Prénom 2`)),
              'Groupe Y',
              'Binôme Z',
            ),
            date: 'jj/mm/aaaa',
          },
          doc_2,
        ),
      ),
    ),
    'Bonjour',
  )
}
