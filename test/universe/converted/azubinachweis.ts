// Converted from test/universe/corpus/azubinachweis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const nachweis = external('nachweis')
  const nachweis_with = define('with')
    .named('ausbildungsjahr', T.any, null)
    .named('jahr', T.any, null)
    .named('kalenderwoche', T.any, null)
    .named('name', T.any, null)
    .named('schulbericht', T.any, null)
    .returns(T.any)
    .external(nachweis)
  return doc(
    importPackage('@preview/azubinachweis:0.1.1', [nachweis]),
    show(
      nachweis_with({
        name: 'Max Mustermann',
        ausbildungsjahr: '1. Ausbildungsjahr',
        kalenderwoche: '37',
        jahr: '2026',
        schulbericht: [
          'Erstes Musterthema des Berufsschulunterrichts wurde behandelt',
          'Zweites Musterthema mit praktischen Übungen am Musterbeispiel',
          'Drittes Musterthema als Wiederholung der Vorwoche',
          'Ein Mustertest im Lernmanagementsystem wurde bearbeitet',
        ],
      }),
    ),
    m.list(
      m.item(['Einführung in den ersten Musterbereich des Ausbildungsbetriebs']),
      m.item(['Kennenlernen der Musterwerkzeuge und der betrieblichen Musteranwendungen']),
      m.item(['Bearbeitung einer ersten Musteraufgabe zur Einschätzung der Vorkenntnisse']),
      m.item(['Erstellung einer Musterdokumentation zu den Ergebnissen der Musteraufgabe']),
      m.item(['Teilnahme an einer Musterbesprechung des Musterteams']),
      m.item(['Einarbeitung in das Musterthema anhand der betrieblichen Musterunterlagen']),
      m.item(['Selbststudium des Musterhandbuchs zum zweiten Musterthema']),
    ),
  )
}
