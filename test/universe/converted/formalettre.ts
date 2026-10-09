// Converted from test/universe/corpus/formalettre.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  cm,
  define,
  doc,
  external,
  importPackage,
  inline,
  link,
  lorem,
  set,
  show,
  smallcaps,
  text,
} from '../../../src/index.ts'

export default () => {
  const lettre = external('lettre')
  const lettre_with = define('with')
    .named('affranchissement', T.any, null)
    .named('appel', T.content, [])
    .named('capitalisation', T.any, null)
    .named('date', T.content, [])
    .named('destinataire', T.any, null)
    .named('enveloppe', T.any, null)
    .named('expediteur', T.any, null)
    .named('lieu', T.content, [])
    .named('marges', T.any, null)
    .named('marque-pliage', T.any, null)
    .named('numerotation', T.any, null)
    .named('objet', T.content, [])
    .named('ps', T.content, [])
    .named('ref', T.content, [])
    .named('salutation', T.content, [])
    .returns(T.any)
    .external(lettre)
  return doc(
    importPackage('@preview/formalettre:0.3.1', [lettre]),
    set(text, { lang: 'fr' }),
    show(
      lettre_with({
        expediteur: {
          nom: inline`Étienne ${smallcaps(inline`de la Boétie`)}`,
          adresse: inline`145 avenue de Germignan`,
          commune: inline`33320 Le Taillan-Médoc`,
          telephone: '01 99 00 67 89',
          email: 'etienne@laboetie.example',
          coordonnees: [
            link('http://www.laboetie.example/', inline`www.laboetie.example`),
            inline`Fédivers : ${link('https://mastodon.example/@la_boétie', inline`@la_boetie@mastodon.example`)}`,
          ],
        },
        destinataire: {
          nom: inline`Michel de Montaigne`,
          adresse: inline`17 butte Farémont`,
          commune: inline`55000 Bar-le-Duc`,
        },
        lieu: inline`Camp Germignan`,
        objet: inline`Lorem ipsum ?`,
        date: inline`le 7 juin 1559`,
        ref: inline`1559/06/0001`,
        appel: inline`Cher ami,`,
        salutation: inline`Veuillez agréer, cher ami, l'assurance de mes chaleureuses salutations.`,
        ps: inline`Au fait, notez bien notre prochain rendez-vous !`,
        marges: [cm(1.5), cm(1)],
        marquePliage: false,
        enveloppe: null,
        affranchissement: null,
        capitalisation: 0,
        numerotation: auto,
      }),
    ),
    inline(lorem(150)),
  )
}
