// Converted from test/universe/corpus/algotel.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  path,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const algotel = external('algotel')
  const qed = external('qed')
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const lemma = external('lemma')
  const proposition = external('proposition')
  const corollary = external('corollary')
  const definition = external('definition')
  const remark = external('remark')
  const example = external('example')
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const algotel_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('short-title', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(algotel)
  return doc(
    m.lines(
      importPackage('@preview/algotel:0.1.0', [algotel, qed]),
      importPackage('@preview/algotel:0.1.0', [
        theorem,
        lemma,
        proposition,
        corollary,
        definition,
        remark,
        example,
        proof,
      ]),
    ),
    show(
      algotel_with({
        title: inline`Titre de la soumission`,
        shortTitle: inline`Titre court`,
        authors: [
          { name: 'Prénom Nom', affiliations: [1] },
          { name: 'Autre Auteur', affiliations: [1, 2] },
        ],
        affiliations: [
          { id: 1, name: 'Laboratoire, Université, Ville, Pays' },
          { id: 2, name: 'Autre Laboratoire, Ville, Pays' },
        ],
        abstract: inline`${space}Résumé de l'article. Ce résumé doit être concis et refléter les contributions principales
du travail.${space}`,
        keywords: ['mot-clé 1', 'mot-clé 2', 'mot-clé 3'],
        lang: 'fr',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`Votre texte ici. Ce template est dérivé de la classe LaTeX ${raw('algotel.cls')} pour les soumissions
aux conférences AlgoTel et CoRes.`,
    m.heading(1, 'Contributions'),
    m.heading(2, 'Résultat principal'),
    inline(theorem(inline`${space}Énoncé du théorème.${space}`)),
    inline(proof(inline`${space}Preuve du théorème.${space}`)),
    m.heading(1, 'Conclusion'),
    inline`Conclusion de l'article.`,
    inline(bibliography(path('sample-algotel.bib'))),
  )
}
