// Converted from test/universe/corpus/classic-tud-math-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  emph,
  external,
  footnote,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  path,
  ref,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const setupEquate = external('setup-equate')
  const classicTudMathThesis = external('classic-tud-math-thesis')
  const definition = define('definition').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const satz = define('satz').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const setupEquate_with = define('with').returns(T.any).external(setupEquate)
  const classicTudMathThesis_with = define('with')
    .named('abschluss', T.any, null)
    .named('betreuer', T.content, [])
    .named('betreuer-kurz', T.content, [])
    .named('datum', T.content, [])
    .named('gebdatum', T.content, [])
    .named('institut', T.content, [])
    .named('name', T.content, [])
    .named('ort', T.content, [])
    .named('studiengang', T.content, [])
    .named('thema', T.content, [])
    .named('use-default-math-env', T.any, null)
    .named('vorname', T.content, [])
    .returns(T.any)
    .external(classicTudMathThesis)
  return doc(
    importPackage('@preview/classic-tud-math-thesis:0.1.0', [setupEquate, classicTudMathThesis, definition, satz]),
    show(setupEquate_with()),
    show(
      classicTudMathThesis_with({
        name: inline`Ihr Familienname`,
        vorname: inline`Ihr Vorname`,
        gebdatum: inline`Ihr Geburtsdatum`,
        ort: inline`Ihr Geburtsort`,
        betreuer: inline`Vollständiger akad. Titel (z.B. Prof. Dr. rer. nat. habil.) Vorname Familienname Ihres Betreuers
/ Ihrer Betreuerin`,
        betreuerKurz: inline`Kurzer akad. Titel (z.B. Prof. Dr.) Vorname Familienname Ihres Betreuers / Ihrer Betreuerin`,
        institut: inline`Institut ihres Betreuers`,
        thema: inline`Titel ihrer Arbeit`,
        datum: inline`tt. mm. jjjj`,
        abschluss: 'bsc',
        studiengang: inline`Mathematik oder Technomathematik oder Wirtschaftsmathematik`,
        useDefaultMathEnv: true,
      }),
    ),
    inline(heading({ numbering: null }, inline`Einleitung`)),
    inline(lorem(200)),
    m.lines(m.heading(1, 'Mathematik und so'), m.heading(2, 'rechtwinklige Dreiecke und Theoreme')),
    'Wir reden zunächst über rechtwinklige Dreiecke. Dafür müssen wir erstmal ein paar Begriffe klären. Wie heißen beispielsweise die einzelnen Seiten? Was kann man damit tun?',
    inline(
      definition(
        { title: inline`Katheten` },
        inline`${space}In einem rechtwinkligen Dreieck heißen die an den rechten Winkel anliegenden Seiten
${emph(inline`Katheten`)}.${space}`,
      ),
    ),
    inline(
      definition(
        inline`In einem rechtwinkligen Dreieck heißt die dem rechten Winkel gegenüberliegende Seite ${emph(inline`Hypotenuse`)}.`,
      ),
    ),
    'Wir können dem einzelnen Umgebungen einen Titel geben, welcher dann in Klammern erscheint. Nach diesen Definitionen können wir nun folgenden Satz formulieren.',
    inline(
      labelled(
        satz(
          { title: inline`Pytagoras` },
          inline`${space}Es seien ${unsafeRaw.math`a`}, ${unsafeRaw.math`b`} und ${unsafeRaw.math`c`} die Seitenlängen
eines rechtwinkligen Dreiecks, wobei die ${unsafeRaw.math`a`} und ${unsafeRaw.math`b`} die Längen
der Katheten sind und ${unsafeRaw.math`c`} die Länge der Hypotenuse, dann gilt ${labelled(unsafeRaw.math.block`a^2 +b^2 = c^2`, label('pythagoras:eq'))}${space}`,
        ),
        label('pythagoras'),
      ),
    ),
    inline`Zu dem ${ref(label('pythagoras'))} befinden sich in ${ref(label('Pythagoras:365Beweise'))} 365
verschiedene Beweise. Die ${ref(label('pythagoras:eq'))} wird an vielen stellen der Mathematik
verwendet.`,
    m.heading(2, 'Gleichungssysteme'),
    inline`In der Mathematik kann man auch Gleichungssysteme formulieren. ${labelled(
      unsafeRaw.math.block`a + b - c = 1 #<sys:eq1>\\
  a - b + c = 1 #<sys:eq2>`,
      label('sys:label'),
    )}`,
    m.lines(
      inline`Wenn dieses ${ref(label('sys:label'))} mit Labels versehen ist, kann auch die einzelnen Gleichungen
${ref(label('sys:eq1'))} und ${ref(label('sys:eq2'))} refferenzieren.`,
      m.heading(2, 'Fill-Conent'),
      inline(lorem(300)),
    ),
    m.heading(1, 'Typst-Tipps'),
    m.lines(
      m.heading(2, 'Dokumentation'),
      inline`Die ${link('https://typst.app/docs/', inline`Typst-Dokumentation`)}${footnote(inline`Hier ist das Wort mit der Webseite verlinkt`)}
ist hervoragend.`,
    ),
    m.lines(
      m.heading(2, 'Wie schreibt man dieses Symbol?'),
      inline`Du kennst ein mathematisches Symbol nicht? Mit ${link('https://detypify.quarticcat.com/', inline`detypify`)}${footnote(inline`Das Wort ist mit der Webseite verlinkt`)}
kannst du das Symbol einfach zeichnen und der entsprechende Typst-Befehl wird dir angezeigt.`,
    ),
    m.lines(
      m.heading(1, 'Drittes Kapitel mit Inhalt'),
      inline(lorem(40)),
      m.heading(2, 'ein Unterkapitel'),
      inline(lorem(150)),
      m.heading(2, 'ein zweites Unterkapitel'),
      inline(lorem(250)),
      m.heading(1, 'Zusammenfassung und Fazit'),
      inline(lorem(300)),
    ),
    inline(bibliography(path('bibliography.bib'))),
  )
}
