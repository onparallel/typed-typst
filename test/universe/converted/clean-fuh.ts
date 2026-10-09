// Converted from test/universe/corpus/clean-fuh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  cite,
  cm,
  datetime,
  define,
  doc,
  external,
  figure,
  fr,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cleanFuh = external('clean-fuh')
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const sourcecode = define('sourcecode').pos('arg1', T.content).returns(T.any).external()
  const glossaryEntries = external('glossary-entries')
  const cleanFuh_with = define('with')
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('companies', T.any, null)
    .named('date', T.any, null)
    .named('enddate', T.any, null)
    .named('faculty', T.any, null)
    .named('glossary', T.any, null)
    .named('language', T.any, null)
    .named('show-confidentiality-statement', T.any, null)
    .named('show-declaration-of-authorship', T.any, null)
    .named('show-gender-notice', T.any, null)
    .named('startdate', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('type-of-thesis', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(cleanFuh)
  return doc(
    m.lines(
      importPackage('@preview/clean-fuh:0.1.0', [cleanFuh, gls, sourcecode]),
      importFile('glossary.typ', [glossaryEntries]),
    ),
    show(
      cleanFuh_with({
        title: 'Evaluation von Typst zur Erstellung einer Abschlussarbeit',
        authors: [
          {
            name: 'Max Mustermann',
            studentId: '1111',
            degree: 'B.Sc.',
            courseOfStudies: 'Praktische Informatik',
            city: 'Hagen',
          },
        ],
        companies: [{ name: 'ABC GmbH', city: 'Hagen', country: 'Germany' }],
        typeOfThesis: 'Masterarbeit',
        bibliography: bibliography(path('sources.bib')),
        date: datetime.today(),
        glossary: glossaryEntries,
        language: 'de',
        supervisor: { first: 'Dr. Bruce Banner', second: 'Prof. Dr. Daniel Düsentrieb' },
        university: 'FernUniversität in Hagen',
        faculty: 'Mathematik und Informatik',
        startdate: datetime({ day: 1, month: 10, year: 2023 }),
        enddate: datetime({ day: 30, month: 9, year: 2024 }),
        showGenderNotice: true,
        showConfidentialityStatement: false,
        showDeclarationOfAuthorship: false,
      }),
    ),
    m.heading(1, 'Einleitung'),
    inline(lorem(100)),
    inline(lorem(80)),
    inline(lorem(120)),
    m.heading(1, 'Erläuterungen'),
    'Im folgenden werden einige nützliche Elemente und Funktionen zum Erstellen von Typst-Dokumenten mit diesem Template erläutert.',
    m.heading(2, 'Ausdrücke und Abkürzungen'),
    inline`Verwende die ${raw('gls')}-Funktion, um Ausdrücke aus dem Glossar einzufügen, die dann dorthin
verlinkt werden. Ein Beispiel dafür ist:`,
    inline`Im diesem Kapitel wird eine ${gls('Softwareschnittstelle')} beschrieben. Man spricht in diesem
Zusammenhang auch von einem ${gls('API')}. Die Schnittstelle nutzt Technologien wie das ${gls('HTTP')}.`,
    inline`Das Template nutzt das ${raw('glossarium')}-Package für solche Glossar-Referenzen. In der zugehörigen
${link('https://typst.app/universe/package/glossarium/', 'Dokumentation')} werden noch weitere
Varianten für derartige Querverweise gezeigt. Dort ist auch im Detail erläutert, wie das Glossar
aufgebaut werden kann.`,
    m.heading(2, 'Listen'),
    'Es gibt Aufzählungslisten oder nummerierte Listen:',
    m.list(m.item(['Dies']), m.item(['ist eine']), m.item(['Aufzählungsliste'])),
    m.enum(m.item(['Und']), m.item(['hier wird']), m.item(['alles nummeriert.'])),
    m.heading(2, 'Abbildungen und Tabellen'),
    'Abbildungen und Tabellen (mit entsprechenden Beschriftungen) werden wie folgt erstellt.',
    m.heading(3, 'Abbildungen'),
    inline(figure({ caption: 'Eine Abbildung' }, image({ width: cm(4) }, path('assets/ts.svg')))),
    m.heading(3, 'Tabellen'),
    inline(
      labelled(
        figure(
          { caption: 'Eine Tabelle' },
          table(
            { columns: [fr(1), pct(50), auto], inset: pt(10), align: horizon },
            table.header(inline(), inline(strong(inline`Area`)), inline(strong(inline`Parameters`))),
            text('cylinder.svg'),
            unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
            inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
            text('tetrahedron.svg'),
            unsafeRaw.math.block`sqrt(2) / 12 a^3`,
            inline`${unsafeRaw.math`a`}: edge length`,
          ),
        ),
        label('table'),
      ),
    ),
    m.heading(2, 'Programm Quellcode'),
    'Quellcode mit entsprechender Formatierung wird wie folgt eingefügt:',
    inline(
      figure(
        { caption: 'Ein Stück Quellcode' },
        sourcecode(
          inline(
            raw(
              { block: true, lang: 'ts' },
              'const ReactComponent = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};\n\nexport default ReactComponent;',
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'Verweise'),
    m.lines(
      inline`Für Literaturverweise verwendet man die ${raw('cite')}-Funktion oder die Kurzschreibweise mit
dem @-Zeichen:`,
      m.list(
        m.item([
          raw('#cite(form: "prose", <iso18004>)'),
          space,
          'ergibt:',
          space,
          linebreak(),
          space,
          cite({ form: 'prose' }, label('iso18004')),
        ]),
        m.item(['Mit', space, raw('@iso18004'), space, 'erhält man:', space, ref(label('iso18004'))]),
      ),
    ),
    inline`Tabellen, Abbildungen und andere Elemente können mit einem Label in spitzen Klammern gekennzeichnet
werden (die Tabelle oben hat z.B. das Label ${raw('<table>')}). Sie kann dann mit ${raw('@table')}
referenziert werden. Das ergibt im konkreten Fall: ${ref(label('table'))}`,
    m.heading(1, 'Fazit'),
    inline(lorem(50)),
    inline(lorem(120)),
    inline(lorem(80)),
  )
}
