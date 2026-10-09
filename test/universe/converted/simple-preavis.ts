// Converted from test/universe/corpus/simple-preavis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, importPackage, inline } from '../../../src/index.ts'

export default () => {
  const lettrePreavis = define('lettre-preavis')
    .named('date-etat-des-lieux', T.any, null)
    .named('locataire', T.any, null)
    .named('proprietaire', T.any, null)
    .returns(T.any)
    .external()
  const locataire = define('locataire')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external()
  const adresse = define('adresse')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('complement', T.any, null)
    .returns(T.any)
    .external()
  const proprietaire = define('proprietaire')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/simple-preavis:0.1.0', [lettrePreavis, locataire, adresse, proprietaire]),
    inline(
      lettrePreavis({
        locataire: locataire(
          'Dupont locataire',
          'Jean',
          adresse({ complement: 'Appartement 2' }, '123 rue de la Paix', '75000', 'Paris'),
        ),
        proprietaire: proprietaire(
          'Martin proprietaire',
          'Sophie',
          adresse('456 avenue des Champs-Élysées', '75008', 'Paris'),
          'Madame',
        ),
        dateEtatDesLieux: datetime({ year: 2024, month: 9, day: 21 }),
      }),
    ),
  )
}
