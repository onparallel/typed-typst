// Converted from test/universe/corpus/tgm-hit-protocol.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  figure,
  fr,
  importFile,
  includeFile,
  inline,
  label,
  labelled,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  symbol,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = define('template')
    .named('author', T.any, null)
    .named('begin', T.any, null)
    .named('bibliography', T.any, null)
    .named('course', T.content, [])
    .named('date', T.any, null)
    .named('finish', T.any, null)
    .named('subject', T.content, [])
    .named('subtitle', T.content, [])
    .named('teacher', T.content, [])
    .named('title', T.content, [])
    .named('version', T.content, [])
    .returns(T.any)
    .external()
  const parseDate = define('parse-date').pos('arg1', T.any).returns(T.any).external()
  const assets = external('assets')
  const gls = define('gls').pos('arg1', T.any).named('long', T.any, null).returns(T.any).external()
  const assets_justDoItLogo = define('just-do-it-logo').named('width', T.any, null).returns(T.any).external(assets)
  return doc(
    importFile('lib.typ', [template, parseDate, assets, gls]),
    m.lines(
      set(text, { lang: 'de' }),
      show(
        template({
          title: inline`Protokolle in Typst`,
          course: inline`5xHIT 20yy/yy`,
          subtitle: inline`Laborprotokoll`,
          subject: inline`Systemtechnik Labor`,
          author: 'Arthur Dent',
          teacher: inline`Michael Borko`,
          version: inline`1.0`,
          begin: parseDate('2024-10-07'),
          finish: parseDate('2024-10-07'),
          date: parseDate('2024-10-09'),
          bibliography: bibliography(path('bibliography.bib')),
        }),
      ),
    ),
    includeFile('glossaries.typ'),
    m.lines(
      m.heading(1, 'Einführung'),
      'Diese Protokollvorlage soll helfen den Laborübungsteil entsprechend dokumentieren zu können. Diese Vorlage ist in Typst verfasst.',
    ),
    m.lines(
      m.heading(2, 'Ziele'),
      'Hier werden die zu erwerbenden Kompetenzen und deren Deskriptoren beschrieben. Diese werden von den unterweisenden Lehrkräften vorgestellt.',
    ),
    m.lines(
      'Dies kann natürlich auch durch eine Aufzählung erfolgen:',
      m.list(m.item(['Dokumentiere wichtige Funktionen']), m.item(['Gib eine Einführung zur Verwendung von Typst'])),
    ),
    m.lines(
      m.heading(2, 'Voraussetzungen'),
      'Welche Informationen sind notwendig um die Laborübung reibungslos durchführen zu können? Hier werden alle Anforderungen der Lehrkraft detailliert beschrieben und mit Quellen untermauert.',
    ),
    m.lines(m.heading(2, 'Aufgabenstellung'), 'Hier wird dann die konkrete Aufgabenstellung der Laborübung definiert.'),
    m.lines(
      m.heading(2, 'Bewertung'),
      'Hier wird die Bewertung für das Beispiel auf die jeweiligen Kompetenzen aufgeteilt. Diese soll zur leichteren Abnahme auch nicht entfernt werden.',
    ),
    'Nun kommt ein Seitenumbruch, um eine klare Trennung der Schülerarbeit zu bestimmen.',
    inline(pagebreak()),
    m.heading(1, 'Anwendung'),
    'Hier sollen die Schritte der Laborübung erläutert werden. Hier sind alle Fragestellungen der Lehrkraft zu beantworten. Etwaige Probleme bzw. Schwierigkeiten sollten ebenfalls hier angeführt werden.',
    'In diesem Fall werden einige Typst-Elemente dokumentiert, welche bei der Kreation von Protokollen behilflich sein könnten.',
    m.heading(2, 'Figures'),
    'Wenn man etwas in ein figure packt, dann kann es in einem Abbildungsverzeichnis (oder ähnliches) später aufgelistet werden.',
    inline(
      labelled([figure({ caption: inline`Figure mit Text` }, 'Auch Text ist möglich!'), space], label('text-figure')),
    ),
    inline`Man kann ihnen Labels (${symbol('<')}text-figure>) geben, und referenzieren (${ref(label('text-figure'))}).`,
    'Die folgenden Features können auch ohne figures verwendet werden.',
    m.heading(2, 'Abbildungen'),
    inline(figure({ caption: inline`Mit Beschreibung und Label` }, assets_justDoItLogo({ width: pct(50) }))),
    m.heading(2, 'Mathe :)'),
    m.lines(m.heading(3, 'Inline'), inline`Die coole Formel: ${unsafeRaw.math`e^(i*pi)+1=0`}`),
    m.lines(m.heading(3, 'Zentriert'), inline(unsafeRaw.math.block`e^(i*pi)+1=0`)),
    m.lines(
      m.heading(3, 'Figure'),
      inline(figure({ caption: inline`Eulersche Identität` }, unsafeRaw.math.block`e^(i*pi)+1=0`)),
    ),
    m.heading(2, 'Tabellen'),
    inline(
      figure(
        { caption: inline`Tabellen` },
        table(
          { columns: [fr(1), fr(9)] },
          table.header(inline(strong(inline`Header`)), inline(strong(inline`Kopf`))),
          inline(lorem(2)),
          inline(lorem(10)),
          inline(lorem(2)),
          inline`uwu`,
        ),
      ),
    ),
    m.heading(2, 'Aufzählung'),
    m.list(
      m.item(
        m.lines(
          'Element einer Aufzählung',
          m.list(
            m.item(['Erstes eingerücktes Element einer Aufzählung']),
            m.item(['Zweites eingerücktes Element einer Aufzählung']),
          ),
        ),
      ),
    ),
    m.enum(
      m.item(
        m.lines(
          'Element einer Aufzählung',
          m.enum(
            m.item(['Erstes eingerücktes Element einer Aufzählung']),
            m.item(['Zweites eingerücktes Element einer Aufzählung']),
          ),
        ),
      ),
    ),
    m.heading(2, 'Glossar'),
    inline`Das Glossar enthält Erklärungen von Begriffen und Abkürzen, die im Fließtext keinen Platz haben.
In der Datei ${raw('glossaries.typ')} werden Begriffe -- oder in diesem Fall eine Abkürzung
-- in der folgenden Form definiert:`,
    inline(
      figure(
        { caption: inline`Eintrag einer Abkürzung in ${raw('glossaries.typ')}` },
        raw(
          { block: true, lang: 'typ' },
          '#glossary-entry(\n  "tgm",\n  short: "TGM",\n  long: "Technologisches Gewerbemuseum",\n)',
        ),
      ),
    ),
    inline`Verwendet werden kann dieser Glossareintrag ähnlich einer Quellenangabe durch ${raw({ lang: 'typ' }, '@tgm')}.
Bei der ersten Verwendung wird die Langform automatisch auch dargestellt: ${ref(label('tgm'))}.
Bei weiteren Verwendungen wird dagegen nur die Kurzform angezeigt: ${ref(label('tgm'))}.`,
    inline`Mit der Funktion ${raw({ lang: 'typc' }, 'gls()')} kann auch die Langform erzwungen werden:
${gls('syt')} ist beim ersten mal auch ausgeschrieben, aber hier wird es manuell erwirkt: ${gls({ long: true }, 'syt')}.`,
    m.heading(2, 'Quelltext'),
    inline(
      figure(
        { caption: inline`C++ Code` },
        raw(
          { block: true, lang: 'cpp' },
          '#include <iostream>\nint main() {\n    // Ich bin ein Kommentar!\n    std::cout << "Hello World! :3\\n";\n}',
        ),
      ),
    ),
  )
}
