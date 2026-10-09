// Converted from test/universe/corpus/electify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, importPackage, show } from '../../../src/index.ts'

export default () => {
  const ballotPaperDe = define('ballot-paper-de')
    .named('constituency', T.any, null)
    .named('date', T.any, null)
    .named('parties', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/electify:0.2.0', [ballotPaperDe]),
    show(
      ballotPaperDe({
        type: 'zum Deutschen Bundestag',
        date: datetime({ year: 2025, month: 2, day: 23 }),
        constituency: '2 Nordfriesland ‒ Dithmarschen Nord',
        parties: [
          {
            name: 'Sozialdemokratische Partei Deutschlands',
            abbrevation: 'SPD',
            top_candidate: {
              first_name: 'Truels',
              last_name: 'Reichardt',
              profession: 'Sozialpädagoge / Sozialarbeiter',
              place: 'Mildstedt',
            },
            candidates: [
              'Tim Klüssendorf',
              'Dr. Nina Scheer',
              'Dr. Ralf Stegner',
              'Bettina Hagedorn',
              'Truels Reichardt',
            ],
          },
          {
            name: 'Christlich Demokratische Union Deutschlands',
            abbrevation: 'CDU',
            top_candidate: { first_name: 'Mark', last_name: 'Helfrich', profession: 'MdB', place: 'Dängeling' },
            candidates: [
              'Dr. Johann David Wadephul',
              'Petra Nicolaisen',
              'Mark Helfrich',
              'Melanie Bernstein',
              'Leif Erik Bodin',
            ],
          },
          {
            name: 'BÜNDNIS 90/DIE GRÜNEN',
            abbrevation: 'GRÜNE',
            top_candidate: {
              first_name: 'Fabian',
              last_name: 'Dr. Faller',
              profession: 'Betriebsleiter\nEnergiewirtschaft',
              place: 'Kiel',
            },
            candidates: ['Luise Amtsberg', 'Robert Habeck', 'Denise Loop', 'Dr. Konstantin von Notz', 'Mayra Vriesema'],
          },
          {
            name: 'Freie Demokratische Partei',
            abbrevation: 'FDP',
            top_candidate: {
              first_name: 'Michael',
              last_name: 'Wamser',
              profession: 'Technischer Betriebswirt',
              place: 'Brunsbüttel',
            },
            candidates: [
              'Wolfgang Kubicki, Gyde Jensen-Bornhöft',
              'Maximilian Mordhorst',
              'Nora Grundmann',
              'Philipp Rösch',
            ],
          },
          {
            name: 'Alternative für Deutschland',
            abbrevation: 'AfD',
            top_candidate: {
              first_name: 'Ralf',
              last_name: 'Kirbach',
              profession: 'Gas-Wasserinstallateur-Meister',
              place: 'Itzehoe',
            },
            candidates: [
              'Kurt Kleinschmidt',
              'Gereon Bollmann',
              'Volker Schnurrbusch',
              'Kerstin Przygodda',
              'Sven Wendorf',
            ],
          },
          {
            name: 'Die Linke',
            abbrevation: 'Die Linke',
            top_candidate: {
              first_name: 'Tobias',
              last_name: 'Braunsdorf',
              profession: 'Angesteller (Soziale Medien)',
              place: 'Wedel',
            },
            candidates: ['Lorenz Gösta Beutin', 'Tamara Mazzi', 'Marlies Wiegand', 'Finn Luca Frey', 'Bianca Szygula'],
          },
          {
            name: 'Südschleswigscher Wählerverband',
            abbrevation: 'SSW',
            top_candidate: null,
            candidates: [
              'Stefan Seidler',
              'Maylis Roßberg',
              'Lukas Knöfler',
              'Sarina Magdalena Quäck',
              'Svend Wippich',
            ],
          },
          {
            name: 'Partei für Arbeit, Rechtsstaat, Tierschutz, Elitenförderung und basisdemokratische Initiative',
            abbrevation: 'Die\nPARTEI',
            top_candidate: null,
            candidates: ['Niels Reimers', 'Jana Käding', 'Alexandra Richter', 'Ove Schröter', 'Beate Schreiber'],
          },
          {
            name: 'FREIE WÄHLER',
            abbrevation: 'FREIE WÄHLER',
            top_candidate: { first_name: 'Jens', last_name: 'Köster', profession: 'Account Manager', place: 'Krempe' },
            candidates: ['Thomas Thedens', 'Jens Köster', 'Christian Runge', 'Nicole Andres', 'Arne Olaf Jöhnk'],
          },
          {
            name: 'Volt Deutschland',
            abbrevation: 'Volt',
            top_candidate: {
              first_name: 'Marco',
              last_name: 'Schulz',
              profession: 'User Experience Designer',
              place: 'Herzhorn',
            },
            candidates: [
              'Kim Christin Holzmann',
              'Marco Schulz',
              'Kathrin Ostertag',
              'Christian Schweckendieck',
              'Kristina Silvia Scheuber',
            ],
          },
          {
            name: 'Marxistisch-Leninistische Partei Deutschlands',
            abbrevation: 'MLPD',
            top_candidate: null,
            candidates: ['Maria Meyer', 'Hans-Joachim Paulsen', 'Karin Zan Bi', 'Lüder Möller'],
          },
          {
            name: 'BÜNDNIS DEUTSCHLAND',
            abbrevation: 'BÜNDNIS\nDEUTSCHLAND',
            top_candidate: null,
            candidates: [
              'Stefan Andresen',
              'Nicolai Livonius',
              'Erika Damerow',
              'Dr. Christoph Heller',
              'Kerstin Hansen',
            ],
          },
          {
            name: 'Bündnis Sarah Wagenknecht\n‒ Vernunft und Gerechtigkeit',
            abbrevation: 'BSW',
            top_candidate: null,
            candidates: ['Milad Salami', 'Martina Möller', 'Dr. Jan-Philip Schneider', 'Ramona Heppert', 'Sahin Ercan'],
          },
        ],
      }),
    ),
  )
}
