// Converted from test/universe/corpus/community-cnam-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  data,
  define,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  inline,
  let_,
  lorem,
  path,
  pct,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const communityCnamThesis = external('community-cnam-thesis')
  const frontMatter = external('front-matter')
  const mainMatter = external('main-matter')
  const tableofcontents = external('tableofcontents')
  const listoffigures = external('listoffigures')
  const listoftables = external('listoftables')
  const part = define('part').pos('arg1', T.any).returns(T.any).external()
  const appendix = external('appendix')
  const backcover = define('backcover')
    .named('abstract', T.any, null)
    .named('resume', T.any, null)
    .returns(T.any)
    .external()
  const communityCnamThesis_with = define('with')
    .named('author', T.any, null)
    .named('lang', T.any, null)
    .named('open-right', T.any, null)
    .named('thesis-info', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(communityCnamThesis)
  const [supervisorDecl, supervisor] = let_('supervisor', [
    { name: 'Henri Grégoire', title: 'Abbé constitutionnelle', institution: 'Cnam, Paris' },
    { name: 'Henri Tresca', title: 'Professeur titulaire de la Chaire de Mécanique', institution: 'Cnam, Paris' },
  ])
  const [coSupervisorDecl, coSupervisor] = let_('co-supervisor', [
    { name: 'Pierre-Simon Laplace', title: 'Professeur de tout', institution: 'Institut de France, Paris' },
    { name: 'Joseph Fourier', title: "Membre de l'Académie des Sciences", institution: 'Académie des sciences, Paris' },
  ])
  const [committeeDecl, committee] = let_('committee', [
    {
      name: 'Jean-Antoine Chaptal',
      position:
        'Professeur des Unversités, Chaire de Chimie Appliquée, Conservatoire national des arts et métiers, Paris, France',
      role: 'Président du jury',
    },
    {
      name: 'Donald Ervin Knuth',
      position:
        "Professeur émérite, Département d'Informatique, Université de Stanford, Palo, Alto, Californie, États-Unis",
      role: 'Rapporteur',
    },
    {
      name: 'Ada Lovelace',
      position: 'Maître de conférences HDR, Département de Mathématiques, Université de Londres, Royaume-Uni',
      role: 'Rapportrice',
    },
    {
      name: 'Jacques de Vaucanson',
      position: 'Inspecteur général des manufactures, Académie royale des sciences, Paris, France',
      role: 'Examinateur',
    },
    {
      name: 'Henri Grégoire',
      position: 'Abbé constitutionnelle, Conservatoire national des arts et métiers, Paris, France',
      role: 'Directeur de thèse',
    },
    {
      name: 'Henri Tresca',
      position:
        'Professeur titulaire de la Chaire de Mécanique, Conservatoire national des arts et métiers, Paris, France',
      role: 'Co-directeur de thèse',
    },
  ])
  const [cnamLogosDecl, cnamLogos] = let_(
    'cnam-logos',
    data([image({ height: pct(5) }, path('images/cnam.png')), image({ height: pct(5) }, path('images/cnam.png'))]),
  )
  return doc(
    importPackage('@preview/community-cnam-thesis:0.1.1', [
      communityCnamThesis,
      frontMatter,
      mainMatter,
      tableofcontents,
      listoffigures,
      listoftables,
      part,
      appendix,
      backcover,
    ]),
    supervisorDecl,
    coSupervisorDecl,
    committeeDecl,
    cnamLogosDecl,
    show(
      communityCnamThesis_with({
        title: 'Titre de la thèse',
        author: "Nom de l'auteur",
        thesisInfo: unsafeRaw.code<any>`(
        doctoral-school: "Sciences des Métiers de l'Ingénieur",
        // supervisor: supervisor,
        laboratory: "Laboratoire de Mécanique des Structures et des Systèmes Couplés",
        // co-supervisor: co-supervisor,
        defense-date: "15 juin 2024",
        discipline: "Sciences de l'ingénieur",
        speciality: "Mécanique",
        // committee: committee,
        // logo: (image("images/cnam.png", height: 5%), ),
        // logo: image("images/cnam.png", height: 5%),
        ..json("thesis-info.json")
        // ..yaml("thesis-info.yaml")
    )`,
        lang: 'fr',
        openRight: true,
      }),
    ),
    show(frontMatter),
    includeFile('front_matter/front_main.typ'),
    show(mainMatter),
    inline(tableofcontents),
    inline(listoffigures),
    inline(listoftables),
    inline(part(inline`First part`)),
    includeFile('chapters/ch_main.typ'),
    inline(part('Second part')),
    show(appendix),
    includeFile('appendix/app_main.typ'),
    inline(bibliography(path('bibliography/sample.bib'))),
    inline(backcover({ resume: lorem(100), abstract: lorem(100) })),
  )
}
