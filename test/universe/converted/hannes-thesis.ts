// Converted from test/universe/corpus/hannes-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  fr,
  highlight,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  linebreak,
  link,
  m,
  outline,
  pagebreak,
  path,
  pt,
  raw,
  rect,
  red,
  ref,
  rgb,
  right,
  set,
  show,
  space,
  strike,
  strong,
  table,
  text,
  top,
  underline,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('lang', T.any, null)
    .named('outlines', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('toc', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [color_THAredDecl, color_THAred] = let_('color-THAred', rgb(255, 3, 80))
  const my_box = define('my_box')
    .pos('content', T.any)
    .returns(T.any)
    .body((p) => codeBlock([], rect({ fill: red, inset: pt(8), radius: pt(4) }, p['content'])))
  return doc(
    importPackage('@preview/hannes-thesis:0.1.0', [thesis]),
    color_THAredDecl,
    m.lines(show(link, set(text, { fill: color_THAred })), show(ref, set(text, { fill: color_THAred }))),
    show(
      thesis_with({
        title: 'My Typst Thesis',
        subtitle: 'A personal template from Hannes',
        lang: 'de',
        authors: [
          {
            name: 'Johannes Knoll',
            email: 'johannes.knoll@tha.de',
            studiengang: 'Informatik Bachelor',
            matrikelnr: 'Mat.-Nr. 1234567',
          },
        ],
        outlines: [
          outline({ title: inline`Abkürzungsverzeichnis`, target: where(figure, { kind: image }) }),
          outline({ title: inline`Abbildungsverzeichnis`, target: where(figure, { kind: image }) }),
          outline({ title: inline`Tabellenverzeichnis`, target: where(figure, { kind: table }) }),
          outline({ title: inline`Quellcode`, target: where(figure, { kind: raw }) }),
        ],
        bibliography: bibliography(path('refs.bib')),
        toc: outline({ title: inline`Custom Outline Title` }),
      }),
    ),
    m.heading(1, 'Einleitung'),
    m.enum(
      m.numbered(1, ['Hinführung zum Thema und Relevanz']),
      m.numbered(2, ['Stand der Forschung und Forschungslücke']),
      m.numbered(3, ['Forschungsfrage und Zielsetzung der Arbeit']),
      m.numbered(4, ['Aufbau und Gang der Untersuchung']),
    ),
    m.heading(1, 'Theoretische Grundlagen'),
    m.enum(
      m.numbered(1, ['Definition zentraler Begriffe']),
      m.numbered(2, ['Darstellung relevanter Theorien und Modelle']),
      m.numbered(3, ['Herleitung von Hypothesen (vor allem bei quantitativen Arbeiten)']),
    ),
    m.heading(1, 'Methodik'),
    m.enum(
      m.numbered(1, ['Begründung des Forschungsdesigns (z.B. Literaturarbeit, qualitative/quantitative Studie)']),
      m.numbered(2, ['Beschreibung der Datenerhebung (z.B. Literaturauswahl, Stichprobenziehung, Interviewleitfaden)']),
      m.numbered(3, [
        'Beschreibung der Datenauswertungsmethode (z.B. qualitative Inhaltsanalyse, statistische Verfahren)',
      ]),
    ),
    m.heading(1, 'Ergebnisse'),
    m.enum(
      m.numbered(1, ['Darstellung der Ergebnisse (gegliedert nach Forschungsfragen oder Hypothesen)']),
      m.numbered(2, ['Deskriptive Auswertung (neutrale Präsentation der Daten in Text, Tabellen, Abbildungen)']),
      m.numbered(3, ['Analytische Auswertung (Ergebnisse der angewandten Analysemethoden)']),
    ),
    m.heading(1, 'Diskussion'),
    m.enum(
      m.numbered(1, ['Interpretation und Einordnung der Ergebnisse']),
      m.numbered(2, ['Abgleich mit dem Forschungsstand und den Theorien (aus Kapitel 1 und 2)']),
      m.numbered(3, ['Kritische Reflexion und Limitationen der eigenen Arbeit']),
    ),
    m.heading(1, 'Fazit und Ausblick'),
    m.enum(
      m.numbered(1, ['Prägnante Zusammenfassung der wichtigsten Erkenntnisse']),
      m.numbered(2, ['Finale Beantwortung der Forschungsfrage']),
      m.numbered(3, ['Ausblick auf weiterführenden Forschungsbedarf und praktische Implikationen']),
    ),
    inline(pagebreak()),
    m.heading(1, 'Template Tutorial'),
    inline`Dies ist ein ${strong(inline`typst`)}-Template.`,
    inline(link('https://typst.app', inline`typst`), space, link('https://typst.app/docs', inline`Dokumentation`)),
    inline`Die Dokumentation für Typst ist hier ${ref(label('typst-doku'))} zu finden.`,
    m.heading(2, 'Quellen'),
    'Das Zitieren von Quellen ist ein zentraler Bestandteil.',
    m.enum(
      m.numbered(1, [
        'Legen Sie eine references.bib-Datei an: Speichern Sie Ihre Quellen im',
        space,
        strong(inline`BibTeX-Format`),
        space,
        'in dieser Datei. Ein Eintrag könnte so aussehen:',
      ]),
    ),
    inline(
      raw(
        { block: true, lang: 'bib' },
        '@book{typst-doku,\n  author  = {Typst contributors},\n  title   = {Typst Documentation},\n  year    = {2024},\n  url     = {[https://typst.app/docs/](https://typst.app/docs/)},\n}',
      ),
    ),
    m.enum(
      m.numbered(2, [
        'Zitieren Sie im Text: Verwenden Sie das',
        space,
        strong(inline`@-Zeichen`),
        space,
        'gefolgt von dem BibTeX-Schlüssel.',
      ]),
      m.numbered(3, [
        'Literaturverzeichnis: Das Template fügt das Literaturverzeichnis automatisch am Ende Ihrer Arbeit ein. Sie müssen nichts weiter tun!',
      ]),
    ),
    m.heading(2, 'Terms'),
    m.terms(
      m.term(['Ligature'], ['A merged glyph.']),
      m.term(['Kerning'], ['A spacing adjustment between two adjacent letters.']),
      m.term(['GOG'], ['Google']),
    ),
    m.heading(2, 'Tabellen'),
    inline`Tabellen, wie in ${ref(label('tab:planets'))}, werden mit der table()-Funktion erstellt. Die
figure sorgt auch hier für die Beschriftung.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Planeten im Sonnensystem und deren Entfernung zur Sonne`, placement: top },
            table(
              {
                columns: [em(6), auto],
                align: [left, right],
                inset: { x: pt(8), y: pt(4) },
                stroke: (x, y) => unsafeRaw.code<any>`if y <= 1 { (top: 0.5pt) }`,
                fill: (x_2, y_2) => unsafeRaw.code<any>`if y > 0 and calc.rem(y, 2) == 0 { rgb("#efefef") }`,
              },
              table.header(inline`Planet`, inline`Entfernung (Millionen km)`),
              inline`Mercury`,
              inline`57.9`,
              inline`Venus`,
              inline`108.2`,
              inline`Earth`,
              inline`149.6`,
              inline`Mars`,
              inline`227.9`,
              inline`Jupiter`,
              inline`778.6`,
              inline`Saturn`,
              inline`1,433.5`,
              inline`Uranus`,
              inline`2,872.5`,
              inline`Neptune`,
              inline`4,495.1`,
            ),
          ),
          space,
        ],
        label('tab:planets'),
      ),
    ),
    inline(
      figure(
        { caption: 'Volumenformeln für geometrische Körper.' },
        table(
          { columns: [fr(1), auto], inset: pt(10), align: horizon },
          table.header(inline(strong(inline`Volumen`)), inline(strong(inline`Parameter`))),
          unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
          inline`${space}${unsafeRaw.math`h`}: Höhe ${linebreak()} ${unsafeRaw.math`D`}: Äußerer Durchmesser
${linebreak()} ${unsafeRaw.math`d`}: Innerer Durchmesser${space}`,
          unsafeRaw.math.block`sqrt(2) / 12 a^3`,
          inline`${unsafeRaw.math`a`}: Kantenlänge`,
        ),
      ),
    ),
    m.heading(2, 'Code-Blöcke'),
    'Stellen Sie Code übersichtlich dar, indem Sie ihn in drei Backticks ``` einschließen. Geben Sie die Sprache an, um Syntax-Highlighting zu aktivieren.',
    inline(
      figure(
        { caption: 'Python Beispielcode' },
        raw({ block: true, lang: 'python' }, 'def main():\n  print("Some code!")'),
      ),
    ),
    m.heading(2, 'Text'),
    inline(strong(inline`Fett`)),
    inline(emph(inline`Kursiv`)),
    inline(underline(inline`Unterstrichen`)),
    inline(highlight(inline`Wichtig`)),
    inline`"Anführungszeichen"`,
    inline(strike(inline`Durchgestrichen`)),
    inline(
      figure(
        { caption: 'Überschriften in typst' },
        raw(
          { block: true, lang: 'typst' },
          '// Aufzählung\n- Erster Punkt\n- Zweiter Punkt\n\n// Nummerierte Liste\n+ Erster Punkt\n+ Zweiter Punkt',
        ),
      ),
    ),
    m.heading(2, 'Formeln'),
    inline`Die berühmte Formel von Einstein lautet ${unsafeRaw.math`E = m c^2`}.`,
    inline(unsafeRaw.math.block`sum_(i=1)^n i = (n(n+1)) / 2`),
    m.heading(2, 'Variablen und Schleifen'),
    inline(unsafeRaw.code<any>`for i in range(3) {
  [=== Dies ist Absatz Nummer #(i + 1).]
}`),
    m.heading(2, 'Funktionen'),
    my_box.decl,
    inline(my_box(inline`${space}Dieser Inhalt wird in einer stilisierten Box dargestellt.${space}`)),
  )
}
