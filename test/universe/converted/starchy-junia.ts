// Converted from test/universe/corpus/starchy-junia.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importFile, includeFile, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const modeleJunia = external('modele-junia')
  const vListeGlossaire = external('v-liste-glossaire')
  const fbcLexique = external('fbc-lexique')
  const fbcSommaire = external('fbc-sommaire')
  const fbcListeFigure = external('fbc-liste-figure')
  const fbcListeTableau = external('fbc-liste-tableau')
  const fmpCorpsDocument = external('fmp-corps-document')
  const fbcBibliographie = external('fbc-bibliographie')
  const fmpAnnexes = external('fmp-annexes')
  const modeleJunia_with = define('with')
    .named('auteurs', T.any, null)
    .named('encadrant', T.content, [])
    .named('formation', T.content, [])
    .named('glossaire', T.any, null)
    .named('niveau-classe', T.content, [])
    .named('professeur', T.content, [])
    .named('promotion', T.content, [])
    .named('titre-rapport', T.content, [])
    .named('type-diplome', T.content, [])
    .named('type-rapport', T.content, [])
    .returns(T.any)
    .external(modeleJunia)
  return doc(
    importFile('00-configuration/005-centralisation.typ', [
      modeleJunia,
      vListeGlossaire,
      fbcLexique,
      fbcSommaire,
      fbcListeFigure,
      fbcListeTableau,
      fmpCorpsDocument,
      fbcBibliographie,
      fmpAnnexes,
    ]),
    show(
      modeleJunia_with({
        glossaire: vListeGlossaire,
        typeRapport: inline`Rapport de stage`,
        titreRapport: inline`Titre du rapport`,
        typeDiplome: inline`Ingénieur généraliste JUNIA-HEI`,
        professeur: inline`Enseignant référent : NOM Prénom`,
        encadrant: inline`Encadrant : NOM Prénom`,
        auteurs: ['NOM Prénom'],
        formation: inline`Ingénieur en Apprentissage`,
        promotion: inline`BTP/ESE HEI`,
        niveauClasse: inline`48`,
      }),
    ),
    m.lines(
      includeFile('02-fiches/021-pre-sommaire/B-resume.typ'),
      includeFile('02-fiches/021-pre-sommaire/C-remerciements.typ'),
      includeFile('02-fiches/021-pre-sommaire/D-preambule.typ'),
    ),
    inline(show(fbcLexique), space, show(fbcSommaire), space, show(fbcListeFigure), space, show(fbcListeTableau)),
    show(fmpCorpsDocument),
    m.lines(
      includeFile('02-fiches/022-post-sommaire/G-introduction.typ'),
      includeFile('02-fiches/022-post-sommaire/H-cadre-de-etude.typ'),
      includeFile('02-fiches/022-post-sommaire/I-contexte-etat-art.typ'),
      includeFile('02-fiches/022-post-sommaire/J-methodologie-moyens.typ'),
      includeFile('02-fiches/022-post-sommaire/K-presentation-analyses.typ'),
      includeFile('02-fiches/022-post-sommaire/L-discussions-perspectives.typ'),
      includeFile('02-fiches/022-post-sommaire/M-conclusion.typ'),
    ),
    inline(show(fbcBibliographie)),
    inline(show(fmpAnnexes), space, includeFile('02-fiches/023-annexes/P-annexes.typ')),
  )
}
