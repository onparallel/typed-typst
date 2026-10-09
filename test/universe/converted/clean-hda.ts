// Converted from test/universe/corpus/clean-hda.typ by scripts/convert-suite.ts — do not edit.
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
  const abbr_2 = external('abbr')
  const abbr = external('abbr')
  const cleanHda = external('clean-hda')
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const sourcecode = define('sourcecode').pos('arg1', T.content).returns(T.any).external()
  const glossaryEntries = external('glossary-entries')
  const abbr_load = define('load').pos('arg1', T.any).returns(T.any).external(abbr_2)
  const cleanHda_with = define('with')
    .named('abbr-list-csv', T.any, null)
    .named('abbr-page-break', T.any, null)
    .named('at-university', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('glossary', T.any, null)
    .named('language', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('type-of-thesis', T.any, null)
    .named('university', T.any, null)
    .named('university-location', T.any, null)
    .named('university-short', T.any, null)
    .returns(T.any)
    .external(cleanHda)
  return doc(
    m.lines(
      importPackage('@preview/clean-hda:0.3.0', [abbr, cleanHda, gls, sourcecode]),
      importFile('glossary.typ', [glossaryEntries]),
      importPackage('@preview/abbr:0.3.0', abbr_2),
    ),
    inline(abbr_load('abbr.csv')),
    show(
      cleanHda_with({
        title: 'Evaluation von Typst zur Erstellung einer Abschlussarbeit',
        subtitle: 'Untertitel für einer Arbeit',
        authors: [
          {
            name: 'Max Mustermann',
            studentId: '7654321',
            courseOfStudies: 'Informatik',
            course: 'Masterthesis',
            city: 'Darmstadt',
          },
        ],
        typeOfThesis: 'Bachelorarbeit',
        atUniversity: true,
        bibliography: bibliography(path('sources.bib')),
        date: datetime.today(),
        glossary: glossaryEntries,
        language: 'de',
        supervisor: { ref: 'Prof. Dr. Margaret Hamilton', coRef: 'Prof. Dr. Daniel Düsentrieb' },
        university: 'Hochschule Darmstadt - University of Applied Sciences',
        universityLocation: 'Darmstadt',
        universityShort: 'h_da',
        abbrListCsv: 'template/abbr.csv',
        abbrPageBreak: false,
      }),
    ),
    m.heading(1, 'Einleitung'),
    inline(lorem(100)),
    inline(lorem(80)),
    inline(lorem(120)),
    m.heading(1, 'Erläuterungen'),
    'Im folgenden werden einige nützliche Elemente und Funktionen zum Erstellen von Typst-Dokumenten mit diesem Template erläutert.',
    m.lines(
      m.heading(2, 'Ausdrücke und Abkürzungen'),
      'Nutzer haben die Möglichkeit, Abkürzungen und Glossar-Einträge zu definieren und diese dann im Text zu referenzieren. Es können bei Bedarf auch beide Mechanismen parallel genutzt werden.',
    ),
    m.heading(3, 'Abbreviations Referenzen'),
    inline`Abkürzungen können mit dem ${raw('abbr')}-Package definiert und verwendet werden. In der zugehörigen
${link('https://typst.app/universe/package/abbr/', 'Dokumentation')} werden noch weitere Varianten
für Abkürzungen gezeigt. Dort ist auch im Detail erläutert, wie Abkürzungen definiert werden
können.`,
    'Hier ein Beispiel für die Verwendung von Abkürzungen mit der Funktion von Pluralisierung:',
    inline`Das ${ref(label('API'))} ist eine weit verbreitete. ${ref(label('HTTP'))} ist eine übliches
Protokoll für die Kommunikation. Mehrere ${ref(label('API:pla'))} können zusammen verwendet
werden um komplexe Anwendungen zu erstellen.`,
    m.heading(3, 'Glossar Referenzen'),
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
