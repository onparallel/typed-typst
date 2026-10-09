// Converted from test/universe/corpus/sunny-orasis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  emph,
  external,
  footnote,
  heading,
  importPackage,
  inline,
  label,
  m,
  path,
  raw,
  ref,
  set,
  show,
  smartquote,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const orasis = external('orasis')
  const orasis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-fr', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('document-fonts', T.any, null)
    .named('emails', T.any, null)
    .named('keywords-en', T.content, [])
    .named('keywords-fr', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(orasis)
  return doc(
    importPackage('@preview/sunny-orasis:0.1.1', [orasis]),
    show(
      orasis_with({
        title: 'Mon merveilleux article pour ORASIS',
        authors: [
          { name: 'M. Oimême', affiliation: '1' },
          { name: 'M. Oncopain', affiliation: '2' },
        ],
        affiliations: ['Mon Institut', 'Son Institut'],
        emails: ['Mon adresse électronique'],
        abstractFr: inline`${space}Ceci est mon résumé pour les journées francophones des jeunes chercheurs en vision par
ordinateur (ORASIS). Il doit occuper une dizaine de lignes.${space}`,
        keywordsFr: inline`Exemple type, format, modèle.`,
        abstractEn: inline`${space}This is the English version of the abstract. Exactly as in French it must be short.
It must exhibit the same content...${space}`,
        keywordsEn: inline`Example, model, template.`,
        documentFonts: ['Times-Roman', 'TeX Gyre Termes'],
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Le contenu de l'article peut être rédigé avec n'importe quel formateur ou traitement de texte,
pourvu qu'il réponde aux critères de présentation donnés ici. L'objectif visé est de proposer
une unité de présentation des actes, et nous vous invitons à respecter ce modèle autant que
le permet votre logiciel favori.`,
    ),
    inline`La soumission se fait obligatoirement au ${strong(inline`format PDF`)}, quelque soit le logiciel
d'édition. Chaque article doit être compris entre 6 et 8 pages.`,
    inline`Pour les auteurs utilisant Typst, le fichier source de ce texte (${raw('orasis.typ')}) est lui-même
une base pour obtenir une sortie conforme avec Typst${footnote(inline`patron validé sur la version Typst 0.12.0`)}.`,
    inline`Les autres trouveront des renseignements (peut-être) plus lisibles pour eux dans le fichier
${raw('orasis.doc')} (Word) ou le fichier ${raw('orasis.tex')} (LaTeX).`,
    'La base du texte est du Times-Roman 10 points présenté en deux colonnes. La séparation inter-colonne est de 1 cm.',
    'Le titre principal est en 14 points gras (28 points = 1cm).',
    'Dans les sections, le titre est en 12 points gras. Les para- graphes ne sont pas décalés.',
    'Les sous-sections numérotées comme suit :',
    m.lines(
      m.heading(2, 'État de l', smartquote({ double: false }), 'art'),
      'Les en-têtes sont également en 12 points gras.',
    ),
    inline`Il n'y a pas nécessairement d'espacement entre les paragraphes.`,
    inline`Les références à la bibliographie peuvent être de la forme ${ref(label('foo:baz'))} ${ref(label('key:foo'))}.
Les numéros correspondent à l'ordre d'apparition dans la bibliographie, pas dans le texte. L'ordre
alphabétique est conseillé.`,
    m.lines(
      m.heading(1, 'Le coin Typst'),
      'Pour les utilisateurs de Typst, ce patron est minimaliste et vous aurez besoin de la documentation Typst pour insérer équations et images.',
    ),
    m.lines(
      'Les fichiers nécessaires pour la compilation sont :',
      m.list(
        m.item([raw('orasis.typ'), space, '(le patron)']),
        m.item([raw('main.typ'), space, '(le cœur de votre article)']),
        m.item([raw('refs.bib'), space, '(vos références)']),
        m.item([
          raw('ref_style.csl'),
          space,
          '(',
          emph(inline`facultatif`),
          ') (pour afficher les références [1], [2] de la façon suivante : [1, 2])',
        ]),
      ),
    ),
    m.lines(inline(set(heading, { numbering: null })), m.heading(1, 'Annexe'), 'Merci de votre participation.'),
    inline(bibliography({ title: 'Références', style: path('ref_style.csl') }, path('refs.bib'))),
  )
}
