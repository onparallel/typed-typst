// Converted from test/universe/corpus/quick-minutes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, auto, define, doc, external, importPackage, inline, m, show, sym } from '../../../src/index.ts'

export default () => {
  const minutes = external('minutes')
  const noun = define('noun').pos('arg1', T.any).returns(T.any).external()
  const minutes_with = define('with')
    .named('body-name', T.any, null)
    .named('chairperson', T.any, null)
    .named('custom-name-style', T.any, null)
    .named('date', T.any, null)
    .named('display-all-warnings', T.any, null)
    .named('enable-help-text', T.any, null)
    .named('event-name', T.any, null)
    .named('locale', T.any, null)
    .named('present', T.any, null)
    .named('secretary', T.any, null)
    .named('title-page', T.any, null)
    .named('translation-overrides', T.any, null)
    .returns(T.any)
    .external(minutes)
  return doc(
    importPackage('@preview/quick-minutes:1.2.5', [minutes, noun]),
    show(
      minutes_with({
        locale: 'de',
        chairperson: 'Vorsitz, En Der',
        secretary: 'Protokoll, Antin',
        date: auto,
        bodyName: 'Rautavistische Vereinigung Hohentiegel n. e. V.',
        eventName: '542 673. Vollversammlung des Jahres 2024',
        present: ['Jürgens, Jürgen', 'Vorsitz, En Der', 'Protokoll, Antin', 'Günthers, Günther'],
        customNameStyle: (name, unused) => noun(name),
        displayAllWarnings: true,
        enableHelpText: true,
        translationOverrides: { ITEM: 'Punkt' },
        titlePage: false,
      }),
    ),
    m.heading(1, '1312/Begrüßung'),
    '/En Der eröffnet die Veranstaltung und begrüßt die Versammelten.',
    '++14/Günthers, Günther',
    m.heading(1, '1315/Rückberichte der Arbeitsgruppen'),
    m.heading(2, 'Bericht der Königinnenlichen Gesellschaft des Dinge-auf-andere-Dinge-Stellens'),
    'Günthers, Günther: Der östereichische Ableger hat 5 Dinge auf andere Dinge gestellt. Um weitere Dinge auf andere Dinge zu stellen, beantragen sie Zuwendungen in Höhe von 4 D-Mark.',
    '!20/Dem österreichischem Ableger der Königinnelichen Gesellschaft werden Zuwendungen von 4 D-Mark zur besseren Erfüllung ihrer Arbeit zur Verfügung gestellt./3/0/1',
    inline`${sym.minus}22/Vorsitz, En Der`,
    m.heading(1, '23/Budget für das nächste Jahr'),
    'En Der Vorsitz: erklärt das Budget für das nächste Geschäftsjahr. Insbesondere sollen Schulden gemacht werden, um eine möglichst frühzeitige Insolvenz des Vereines herbeizuführen.',
    inline`--24/Jürgens, Jürgen`,
    '!25/Der Verein möge möglichst viele Schulden im kommenden Geschäftsjahr machen./1/1/0',
    '+25/Vorsitz, En Der',
    m.heading(1, '1402/Wahl des Vorstands'),
    '/Günther Günthers kandidiert auf das Amt des Vorsitzenden.',
    '/Jürgen Jürgens beantragt die Streichung des Vorstandes aus der Satzung.',
    inline`!05/Der § 69 "Vorstand" wird ersatzlos aus der Satzung gestrichen./3/0/0`,
    'Damit entfällt die Wahl eines Vorsitzenden.',
    '/1444',
  )
}
