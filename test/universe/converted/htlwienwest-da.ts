// Converted from test/universe/corpus/htlwienwest-da.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  box,
  data,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  link,
  lorem,
  m,
  path,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  underline,
} from '../../../src/index.ts'

export default () => {
  const diplomarbeit = external('diplomarbeit')
  const autor = define('autor').pos('arg1', T.content).returns(T.any).external()
  const diplomarbeit_with = define('with')
    .named('abstract', T.content, [])
    .named('abteilung', T.any, null)
    .named('anhang', T.any, null)
    .named('autoren', T.any, null)
    .named('danksagung', T.content, [])
    .named('kurzfassung', T.content, [])
    .named('literaturverzeichnis', T.any, null)
    .named('schuljahr', T.any, null)
    .named('titel', T.any, null)
    .named('unterschrifts-datum', T.any, null)
    .named('vorwort', T.content, [])
    .returns(T.any)
    .external(diplomarbeit)
  const [typstDecl, typst] = let_(
    'typst',
    box({ height: pt(12), baseline: pt(4) }, image(path('abbildungen/typst.svg'))),
  )
  return doc(
    importPackage('@preview/htlwienwest-da:0.3.3', [diplomarbeit, autor]),
    show(
      diplomarbeit_with({
        titel: 'Titel der Diplomarbeit',
        abteilung: 'Informationstechnologie',
        schuljahr: '2023/24',
        unterschriftsDatum: '20.04.2024',
        autoren: [
          {
            vorname: 'Hans',
            nachname: 'Mustermann',
            klasse: '5AHITN',
            betreuer: { name: null, geschlecht: 'male' },
            aufgaben: inline(space, lorem(100), space),
          },
          {
            vorname: 'Herta',
            nachname: 'Musterfrau',
            klasse: '5AHITN',
            betreuer: { name: 'Dr. Walter Turbo', geschlecht: 'male' },
            aufgaben: inline(space, lorem(100), space),
          },
          {
            vorname: 'Daniel',
            nachname: 'Düsentrieb',
            klasse: '5AHITN',
            betreuer: { name: 'DI. Sandra Antrieb', geschlecht: 'female' },
            aufgaben: inline(space, lorem(100), space),
          },
        ],
        kurzfassung: blocks(
          'Die Kurzfassung muss die folgenden Inhalte darlegen (§8, Absatz 5 Prüfungsordnung): Thema, Fragestellung, Problemformulierung, wesentliche Ergebnisse. Sie soll einen prägnanten Überblick über die Arbeit geben.',
          'Umfang: maximal 1 Seite',
          'Zur Aufgabenstellung: von welchem Wissens- oder Entwicklungsstand wird ausgegangen bzw. welche Ergebnisse gibt es bereits? Welches Ziel soll erreicht werden? Warum und für wen ist das definierte Ziel von Interesse?',
          'Zur Umsetzung: auf welche fachtheoretischen/-praktischen Grundlagen wurde zurückgegriffen? Welche Lösungsansätze/Methoden wurden gewählt? Warum gerade diese?',
          'Zu den Ergebnissen: Worin besteht der Beitrag zur Lösung der Aufgabenstellung? Was wurdeerreicht? Wurde die Arbeit bei Wettbewerben eingereicht?',
          inline`${strong(inline`Hinweis:`)} Falls die Diplomarbeits-Konfiuration wegen zu viel Text unübersichtlich
wird, könnt ihr mit ${raw('include "<datei>.typ"')} eine Typst-Datei inkludieren, in die der
entsprechende Text steht. Als Beispiel dient die ${emph(inline`anhang`)} Konfiguration.`,
        ),
        abstract: inline`${space}Englische Version der Kurzfassung (siehe ${link(label('Kurzfassung'), inline(emph(inline`Kurzfassung`)))})${space}`,
        vorwort: inline`${space}Perönlicher Zugang zum Thema. Gründe für die Themenwahl.${space}`,
        danksagung: inline`${space}Dank an Personen, die bei der Erstellung der Arbeit unterstützt haben.${space}`,
        anhang: includeFile('anhang.typ'),
        literaturverzeichnis: bibliography.with(path('literaturverzeichnis.bib')),
      }),
    ),
    m.lines(m.heading(1, 'Einleitung'), inline(autor(inline`Name-1`))),
    m.list(
      m.item([
        'Kurzbeschreibung: Wie lautet das Thema? Welche Hintergründe gibt es zu diesem Thema? Was ist schon darüber bekannt?',
      ]),
      m.item([
        'Beschreibung der Leistung: Was ist das Ziel der Arbeit? Für wen hat die Arbeit Relevanz? Hinweis auf Kooperationspartner. Welche Themenstellung soll mit der Arbeit bearbeitet werden?',
      ]),
      m.item([
        'Darstellung der Vorgehensweise: In welche Kapitel ist die Arbeit gegliedert? Wie ist sie aufgebaut? Was behandeln die einzelnen Kapitel (kurz)?',
      ]),
    ),
    m.lines(m.heading(1, 'Haupteil #1'), inline(autor(inline`Name-2`))),
    'In den Kapiteln des Hauptteils legen die einzelnen Schüler*innen Ihre Vorgehensweise und Ergebnisse dar. Je nach Aufgabenstellung können die folgenden (aber auch andere) Punkte behandelt werden:',
    m.lines(
      m.list(
        m.item(
          m.lines(
            'Theorie',
            m.list(
              m.item(['Begriffe definieren und erklären']),
              m.item(['Theorien beschreiben, kommentieren, miteinander vergleichen, evaluieren']),
              m.item(['Ev. Vorhandene Ergebnisse beschreiben und interpretieren']),
            ),
          ),
        ),
        m.item(
          m.lines(
            'Empirischer Teil: Darstellung der Daten und Auswertungsmethoden',
            m.list(
              m.item(['Ausgewählte Daten beschreiben']),
              m.item(['Erhebungsverfahren/-methoden beschreiben']),
              m.item(['Eigene Ergebnisse darstellen, interpretieren, evaluieren']),
              m.item(['Problemlösungen darstellen']),
              m.item(['Auswirkungen der Ergebnisse diskutieren']),
            ),
          ),
        ),
        m.item(
          m.lines(
            'Praktischer Teil: Beschreibung des Produkterstellungsprozesses',
            m.list(
              m.item(['Zielgruppe und Methoden beschreiben']),
              m.item(['Entwicklungsprozess beschreiben']),
              m.item(['Schwierigkeiten beschreiben und Lösungswege aufzeigen']),
              m.item(['Anwendungsaspekte des Produkts vorstellen']),
              m.item(['Unterschiede zu anderen/ähnlichen Produkten herausarbeiten']),
            ),
          ),
        ),
      ),
      'Die konkrete Struktur des Hauptteils hängt von der jeweiligen Themenstellung ab.',
    ),
    m.lines(
      m.heading(1, 'Haupteil #2'),
      'Dieses Kapitel ist nur dazu da, um die gestalterischen Elemente (Überschriften, Tabellen, Abbildungen, Literaturverweise, etc.) beispielhaft darzustellen.',
    ),
    m.heading(2, 'Typst'),
    typstDecl,
    inline`Ihr verwendet die Typesetting-Sprache ${typst} um die Diplomarbeit zu formatieren. Die Sprache
ist äußerst mächtig, enthält jedoch auch sehr einfache Sprachkonstrukte um die gängigsten Formatierungen
zu bewerkstelligen.`,
    inline`Falls ihr Dinge benötigt die über die kurze Beschreibung dieses Kapitels hinausgeht, seht euch
die ${link('https://typst.app/docs', inline`Dokumentation`)} an.`,
    m.heading(2, 'Textgestaltung'),
    m.lines(
      inline`${typst} stellt folgende syntax für übliche Textgestaltung zur Verfügung:`,
      m.list(
        { tight: false },
        m.item([raw('*fetter Text*'), space, 'wird zu', space, strong(inline`fetter Text`)]),
        m.item([raw('_kursiver Text_'), space, 'wird zu', space, emph(inline`kursiver Text`)]),
        m.item([raw('`raw Text`'), space, 'wird zu', space, raw('raw Text')]),
        m.item([
          raw('#underline[unterstrichener Text]'),
          space,
          'wird zu',
          space,
          underline(inline`unterstrichener Text`),
        ]),
      ),
    ),
    inline`Weitere Funktionen findet ihr in der ${link('https://typst.app/docs/reference/text/', inline`Dokumentation`)}.`,
    m.heading(2, 'Unterkapitel'),
    inline`Wenn möglich bitte nur maximal drei Ebenen an Gliederung verwenden, damit die Arbeit übersichtlich
bleibt. Um eine Überschrift zu schreiben beginnt die Zeile mit ein oder mehreren ${raw('=')}
gefolgt von der Überschrift selbst. Z.B.: ${raw('== Überschrift der Ebene zwei')}.`,
    m.lines(m.heading(2, 'Ausgearbeitet von'), inline(autor(inline`Name-1`))),
    inline`Unter den Kapiteln der Ebenen 1 und 2 muss angemerkt sein, wer dieses Kapitel erstellt hat.
Dafür direkt nach der Überschrift die Funktion ${raw('#autor[<name>]')} aufrufen.`,
    'Der Autor/die Autorin eines Kapitels muss nur angegeben werden, wenn er sich vom vorherigen unterscheidet. Wenn zum Beispiel das komplette Kapitel 2 von Hans Mustermann geschrieben wurde, dann muss bei 2.1, 2.2, etc. kein Name angegeben werden.',
    m.heading(2, 'Aufzählungen'),
    m.lines(
      'Für Aufzählungen sollen die auch hier verwendeten Aufzählungspunkte verwendet werden:',
      m.list(
        m.item(
          m.lines('Ebene 1', m.list(m.item(['Ebene 2']), m.item(m.lines('Ebene 2', m.list(m.item(['Ebene 3'])))))),
        ),
        m.item(['Ebene 1']),
      ),
    ),
    inline`Mehr dazu in der ${link('https://typst.app/docs/reference/model/list/', inline`Typst-Dokumentation`)}.`,
    m.heading(2, 'Numerierung'),
    'Für Nummerierungen gilt dasselbe wie für Aufzählungen.',
    m.enum(
      m.item(m.lines('Ebene 1', m.enum(m.item(['Ebene 2']), m.item(m.lines('Ebene 2', m.enum(m.item(['Ebene 3']))))))),
      m.item(['Ebene 1']),
    ),
    inline`Mehr dazu in der ${link('https://typst.app/docs/reference/model/enum/', inline`Typst-Dokumentation`)}.`,
    inline(labelled(heading({ depth: 2 }, inline('Tabellen')), label('Tabellen'))),
    inline`Alle Tabellen müssen eine Abbildung sein. Daher muss eine die ${raw('table')} Funktion innerhalb
der ${raw('figure')} funktion verwendet werden. Wird ${raw('figure')} nicht verwendet, kommt
die Tabelle nicht im Tabellen- und Abbildungsverzeichnis vor.`,
    inline(
      figure(
        { caption: inline`Zeit Resultate` },
        table(
          { inset: pt(10), columns: 4 },
          inline`t`,
          inline`1`,
          inline`2`,
          inline`3`,
          inline`y`,
          inline`0.3s`,
          inline`0.4s`,
          inline`0.8s`,
        ),
      ),
    ),
    inline`Es lohnt sich die dazugehörige Dokumentation auf ${link('https://typst.app/docs/reference/model/table/', inline`typst.app`)}
durchzulesen.`,
    m.heading(2, 'Abbildungen'),
    inline`Um eine Abbildung einzufügen verwendest die ${raw('image')} Funktion. Es muss wie bei ${ref(label('Tabellen'))}
darauf geachtet werden, dass ${raw('figure')} runterherum gesetzt wird.`,
    inline(
      figure(
        { caption: inline`Die ${raw('image')} Funktion nimmt als Parameter den Pfad zur entsprechenden Datei.` },
        image(path('abbildungen/demoAbb.jpeg')),
      ),
    ),
    inline`Alle ${raw('figure')} elemente werden in den entsprechenden Verzeichnissen gelistet.`,
    m.heading(2, 'Source Code'),
    'Generell gilt, dass Source Code Ausschnitte durchaus in der Diplomarbeit vorkommen dürfen – allerdings bitte nur wichtige und kurze Teile. Seitenweise Source Code ist nicht erwünscht.',
    inline`Source Code wird mit ${raw('raw')}-Blöcken, die mit ${strong(inline(data('```')))} gestartet
werden, hinzugefügt. Um Syntax-Highlighting zu erhalten, muss die Dateiendung hinter ${strong(inline(data('```')))}
angefügt werden.`,
    'Sieh dir das folgende C# Beispiel an:',
    inline(
      raw(
        { block: true, lang: 'cs' },
        'namespace MyCoolDiplomaProject\n{\n  /// <summary>\n  /// MainWindow.xaml\n  /// </summary>\n  public partial class MainWindow : Window\n  {\n    private ObservableCollection<StorageContainer> st =\n                                new ObservableCollection<StorageContainer>();\n    public MainWindow()\n    {\n      InitializeComponent();\n      lbliste.ItemsSource = st;\n    }\n  ...\n}',
      ),
    ),
    inline`Mehr dazu in der ${link('https://typst.app/docs/reference/text/raw/', inline`Typst-Dokumentation`)}.`,
    m.heading(2, 'Literaturverweise'),
    inline`Quellenangabe können in der Datei ${raw('literaturverzeichnis.bib')} gespeichert werden. Es
wird dabei das ${strong(inline`BibTEX`)} Format verwendet.`,
    inline`Ein Beispiel für einen Online-Verweis: ${raw({ block: true }, '@online{WinNT,\n  author = {MultiMedia LLC},\n  title = {{MS Windows NT} Kernel Description},\n  year = 1999,\n  url = {http://web.archive.org/web/20080207010024/http://www.808multimedia.com/winnt/kernel.htm},\n  urldate = {2010-09-30}\n}')}
Dieser Verweis kann dann mit ${raw('@WinNT')} ${ref(label('WinNT'))} referenziert werden und
ist dann im Literaturverzeichnis zu finden.`,
    m.heading(2, 'Kreuzverweise'),
    inline`Neben allen ${raw('figure')}-Elementen und zu allen Überschriften können ${raw('label')}s hinzugefügt
werden. Die syntax dafür ist ${raw('<name>')}.`,
    inline`Beispiele sind ${labelled([figure({ caption: inline`Dieses Codebeispiel ist auch mit einem ${raw('label')} versehen.` }, raw({ block: true, lang: 'typ' }, '== Überschrift <HeadingLabel>\n\n#figure(...) <AbbLabel>')), space], label('KreuzverweisBeispiel'))}`,
    inline`Die Labels aus ${ref(label('KreuzverweisBeispiel'))} können dann wie Literaturverweise mit ${raw('@HeadingLabel')}
und ${raw('@AbbLabel')} referenziert werden.`,
  )
}
