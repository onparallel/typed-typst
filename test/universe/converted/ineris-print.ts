// Converted from test/universe/corpus/ineris-print.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, footnote, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const externalReport = external('external-report')
  const myblock = define('myblock').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const externalReport_with = define('with')
    .named('approver', T.any, null)
    .named('author', T.any, null)
    .named('cgr', T.any, null)
    .named('recipient', T.any, null)
    .named('sender', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(externalReport)
  return doc(
    m.lines(
      importPackage('@preview/ineris-print:0.1.0', [externalReport, myblock]),
      show(
        externalReport_with({
          title:
            'Guide de surveillance de l’impact sur l’environnement des émissions atmosphériques des installations d’incinération et de co-incinération de déchets non dangereux et de déchets d’activités de soins à risques infectieux',
          subtitle: 'Repères méthodologiques pour la surveillance environnementale',
          cgr: '136338',
          sender: 'MIV',
          author: 'P. Dupont',
          approver: 'J. Lejeune',
          version: '1.0',
          recipient: "Ministère de l'écologie",
        }),
      ),
    ),
    inline(
      myblock(
        'Synthèse',
        blocks(
          inline`Ce guide propose les repères méthodologiques nécessaires à la construction d’une stratégie de
mesure pour la surveillance environnementale autour des installations d’incinération imposée
par l'article 30 de l'Arrêté Ministériel du 20 septembre 2002.`,
          m.lines(
            'Cette stratégie de mesure repose sur l’association d’un nombre limité de techniques de mesures (Tableau 1) qui peut être utilisée à différentes périodes de l’exploitation de l’installation :',
            m.list(
              m.item(['Lors de l’état initial lorsque l’installation n’est pas encore en activité.']),
              m.item([
                'Lorsque l’on souhaite caractériser l’impact de l’activité de l’installation en situation nominale.',
              ]),
              m.item([
                'Après un dysfonctionnement passé de l’installation toujours en service. Cela peut être rendu nécessaire quand les données d’auto-surveillance ont montré une dérive (mesures à l’émission, conditions d’exploitations et/ou opérations de maintenances particulières…).',
              ]),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`L'article 30 de l'Arrêté Ministériel du 20 septembre 2002 modifié par l’arrêté du 3 août 2010
« relatif aux installations d’incinération et de co-incinération de déchets non dangereux et
aux installations incinérant des déchets d’activités de soins à risques infectieux »${footnote(inline`Dans la suite du document, les désignations « installation d’incinération » ou « installation
» se rapportent aux installations d’incinération et de co-incinération de déchets non dangereux
et aux installations incinérant des déchets d’activités de soins à risques infectieux`)}, impose,
depuis décembre 2005, la mise en place autour de chaque installation d’un programme de surveillance
de l’impact sur l'environnement.`,
    ),
    'Ce guide propose de préciser l’objectif de cette surveillance environnementale et de donner des repères méthodologiques nécessaires à sa mise en œuvre.',
    'Il est destiné à des acteurs de terrain : industriels, laboratoires, bureau d’études, DREAL qui, dans le cadre de leurs activités quotidiennes, sont confrontés à la mise en place ou à l’évaluation de la qualité de ces campagnes de mesures.',
    inline`Il remplace un premier état de l’art${footnote(inline`INERIS, 2001 - Méthode de surveillance des retombées des dioxines et furanes autour d'une UIOM.
Réf. : INERIS-DRC-01-25585-AIRE-n°716-MDu`)} des différentes méthodes de surveillances environnementales
existantes dans lequel été proposé des premières recommandations pour construire la stratégie
de mesure.`,
    'La surveillance environnementale de l’impact d’une installation d’incinération reste néanmoins liée aux enjeux locaux qui lui sont propres (territoire et population), elle pourra donc s’y adapter.',
    m.heading(1, 'Installations d’incinération et surveillance environnementale'),
    m.lines(
      m.heading(2, 'Contexte réglementaire'),
      inline`L’article R.512-28 du code de l’environnement prévoit que «l'arrêté d'autorisation fixe les
moyens d'analyses et de mesures nécessaires au contrôle de l'installation et à la surveillance
de ses effets sur l'environnement (…) ». La surveillance environnementale est requise pour les
installations classées dépassant certains seuils de rejet défini par l’arrêté intégré du 2 février
1998 (articles 63 à 65) ainsi que pour les installations classées de type installation d’incinération,
cimenterie et verrerie.`,
    ),
    inline`Dans le cas des « installations d’incinération et de co-incinération de déchets non dangereux
et aux installations incinérant des déchets d’activités de soins à risques infectieux », l'article
30 de l'Arrêté Ministériel du 20 septembre 2002 impose la mise en place autour de chaque installation
d’un programme de surveillance de son impact sur l'environnement.`,
  )
}
