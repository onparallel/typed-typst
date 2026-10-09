// Converted from test/universe/corpus/parcio-thesis.typ by scripts/convert-suite.ts — do not edit.
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
  m,
  outline,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const parcio = external('parcio')
  const romanNumbering = external('roman-numbering')
  const emptyPage = external('empty-page')
  const arabicNumbering = external('arabic-numbering')
  const parcio_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('reviewers', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(parcio)
  const romanNumbering_with = define('with').named('reset', T.any, null).returns(T.any).external(romanNumbering)
  return doc(
    m.lines(
      importPackage('@preview/parcio-thesis:0.3.1', [parcio, romanNumbering, emptyPage, arabicNumbering]),
      show(
        parcio_with({
          title: 'Title',
          author: { name: 'Author', mail: 'author@ovgu.de' },
          abstract: includeFile('chapters/abstract.typ'),
          reviewers: ['Prof. Dr. Musterfrau', 'Prof. Dr. Mustermann', 'Dr. Evil'],
        }),
      ),
    ),
    m.lines(show(romanNumbering_with({ reset: false })), inline(outline({ depth: 3 }))),
    inline(emptyPage),
    show(arabicNumbering),
    includeFile('chapters/introduction/intro.typ'),
    includeFile('chapters/background/background.typ'),
    includeFile('chapters/eval/eval.typ'),
    includeFile('chapters/conclusion/conc.typ'),
    inline(emptyPage),
    inline(bibliography({ style: path('bibliography/apalike.csl') }, path('bibliography/thesis.bib'))),
    inline(emptyPage),
    includeFile('appendix.typ'),
    inline(emptyPage),
    includeFile('legal.typ'),
  )
}
