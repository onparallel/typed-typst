// Converted from test/universe/corpus/unofficial-eirb-report.typ by scripts/convert-suite.ts — do not edit.
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
  page,
  pagebreak,
  path,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('abstract', T.any, null)
    .named('adviser-columns', T.any, null)
    .named('advisers', T.any, null)
    .named('author-columns', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('document-type', T.any, null)
    .named('sector', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/unofficial-eirb-report:0.1.1', [template]),
    show(
      template_with({
        sector: 'Filière Informatique',
        documentType: 'Rapport de Projet',
        title: "Implémentation d'un modèle de rapport académique",
        authors: [
          { name: 'Alexandrine Mercier', email: 'alexandrine.mercier@enseirb.fr' },
          { name: 'Narcisse Fay', email: 'narcisse.fay@enseirb.fr' },
          { name: 'Johanne Reyer', email: 'johanne.reyer@enseirb.fr' },
          { name: 'Modestine Lapointe', email: 'modestine.lapointe@enseirb.fr' },
        ],
        authorColumns: 2,
        advisers: [{ name: 'Adelphe Félix', email: 'adelphe.felix@enseirb.fr' }],
        adviserColumns: 1,
        date: 'Mai 2025',
        abstract: includeFile('sections/0-abstract.typ'),
      }),
    ),
    m.lines(
      includeFile('sections/1-introduction.typ'),
      includeFile('sections/2-analyse.typ'),
      includeFile('sections/3-modelisation.typ'),
      includeFile('sections/4-implementation.typ'),
      includeFile('sections/5-tests.typ'),
      includeFile('sections/6-conclusion.typ'),
    ),
    set(page, { header: null }),
    inline(pagebreak({ weak: true })),
    m.lines(
      m.heading(1, 'Bibliographie'),
      inline(bibliography({ style: 'ieee', title: null, full: true }, path('bib.yaml'))),
    ),
  )
}
