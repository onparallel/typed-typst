// Converted from test/universe/corpus/modern-ipsy-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  blocks,
  blue,
  box,
  circle,
  cite,
  define,
  doc,
  em,
  emoji,
  emph,
  external,
  figure,
  footnote,
  fr,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  linebreak,
  link,
  lorem,
  m,
  outline,
  par,
  path,
  pct,
  pt,
  quote,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  square,
  strong,
  sym,
  table,
  times,
  underline,
  unsafeRaw,
  v,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const ipsy = external('ipsy')
  const appendix = external('appendix')
  const figureOutline = define('figure-outline').returns(T.any).external()
  const tableOutline = define('table-outline').returns(T.any).external()
  const abbrvOutline = define('abbrv-outline')
    .pos('arg1', T.content)
    .named('outlined', T.any, null)
    .returns(T.any)
    .external()
  const generateDocumentation = define('generate-documentation').returns(T.any).external()
  const flexCaption = define('flex-caption').pos('arg1', T.content).pos('arg2', T.any).returns(T.any).external()
  const annotationFig = define('annotation-fig')
    .pos('arg1', T.any)
    .named('annotation', T.any, null)
    .named('caption', T.any, null)
    .returns(T.any)
    .external()
  const annotationTable = define('annotation-table')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.any)
    .pos('arg9', T.any)
    .pos('arg10', T.any)
    .pos('arg11', T.any)
    .pos('arg12', T.any)
    .pos('arg13', T.any)
    .pos('arg14', T.any)
    .named('align', T.any, null)
    .named('annotation', T.content, [])
    .named('columns', T.any, null)
    .named('inset', T.any, null)
    .named('stroke', T.any, null)
    .returns(T.any)
    .external()
  const ipsy_with = define('with')
    .named('abstract', T.any, null)
    .named('appendix', T.any, null)
    .named('bibliography', T.any, null)
    .named('extra-outlined', T.any, null)
    .named('legal', T.any, null)
    .named('link-color', T.any, null)
    .named('reviewers', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(ipsy)
  const todo = define('todo')
    .pos('txt', T.any)
    .returns(T.any)
    .body((p) => rect({ stroke: pt(0.5), fill: yellow }, inline(strong(inline`TODO:`), space, emph(p['txt']))))
  return doc(
    importPackage('@preview/modern-ipsy-thesis:0.1.1', [
      ipsy,
      appendix,
      figureOutline,
      tableOutline,
      abbrvOutline,
      generateDocumentation,
      flexCaption,
      annotationFig,
      annotationTable,
    ]),
    m.lines(
      set(raw, { lang: 'typ' }),
      show(
        ipsy_with({
          title: inline`${space}Benutzeranleitung zur IPSY-Abschlussarbeitsvorlage für Typst:${linebreak()} Ein kurzer
Überblick des Syntax und der generellen Benutzung${space}`,
          abstract: includeFile('chapters/zusammenfassung.typ'),
          appendix: includeFile('chapters/anhang.typ'),
          legal: includeFile('chapters/eidesstatt.typ'),
          thesisType: 'Leitfaden',
          reviewers: ['Prof. Dr. Micky Maus', 'Dr. Tommy Secundus'],
          bibliography: bibliography({ style: 'apa', title: 'Literaturverzeichnis' }, path('literature.bib')),
          extraOutlined: true,
          linkColor: blue,
        }),
      ),
    ),
    inline(outline({ title: 'Inhalt' }), space, figureOutline(), space, tableOutline()),
    inline(
      abbrvOutline(
        { outlined: true },
        blocks(
          m.terms(
            m.term(['APA'], ['American Psychological Association']),
            m.term(['CSL'], ['Citation Style Language']),
            m.term(['GPL'], ['GNU General Public License']),
            m.term(['IPSY'], ['Institut für Psychologie']),
            m.term([unsafeRaw.math`bold(p)`], ['Signifikanzniveau']),
            m.term(['SVG'], ['Scalable Vector Graphics']),
          ),
        ),
      ),
    ),
    m.heading(1, 'Titelseite und (Standard-)Syntax'),
    inline`Die Titelseite wird mithilfe des ${raw('#show')}-Statements in den oberen Zeilen dieser Datei
ausgefüllt. Dabei gibt es einige ${strong(inline`Parameter`)} mit welchen diese Vorlage den
Wünschen des*der Nutzer*in angepasst werden kann. Diese können in einer beliebigen Reihenfolge
angegeben werden, allerdings muss der Name des Parameters mit dabei stehen.`,
    inline`Jeder Parameter besitzt einen sogenannten "Standardwert", welcher benutzt wird insofern der*die
Nutzer*in diesen nicht angibt, bspw. ist der Standardwert von ${raw('thesis-type')} automatisch
${raw('"Bachelorarbeit"')} -- sollte also diese Vorlage für eine Bachelorarbeit genutzt werden,
muss dieser Wert nicht angepasst werden. Somit müssen nur die Werte angepasst werden, welche
von den Standardwerten abweichen. Siehe ${ref(label('tbl:args'))}:`,
    inline(
      labelled(
        figure(
          { kind: table, caption: inline`Alle potentiellen Parameter (und Standardwerte) dieser Typst-Vorlage` },
          align(left, generateDocumentation()),
        ),
        label('tbl:args'),
      ),
    ),
    m.heading(2, 'Unterschied zwischen', ' ', raw('[Titel]'), ' ', 'und', ' ', raw('"Titel"')),
    inline`Manch lesender Person ist eventuell aufgefallen, dass sowohl Argumente innerhalb eckigen Klammern
-- [...] -- als auch innerhalb Anführungszeichen "..." angegeben werden können. Text innerhalb
Anführungszeichen sind sog. Zeichenketten oder ${emph(inline`Strings`)}, d.h. purer Text. Inhalte
innerhalb der eckigen Klammern stellen ${emph(inline`beliebigen`)} Inhalt dar, oder ${link('https://typst.app/docs/reference/foundations/content/', inline(emph(inline`Content`)))},
welchen Typst generieren kann. So kann z.B. auch ein kleiner Kreis innerhalb dieser Klammern
angegeben werden -- dies ergibt natürlich nicht allzu viel Sinn innerhalb des Titels einer Arbeit
${box(circle({ radius: pt(4) }))} ${box(square({ size: pt(8) }))}.`,
    inline`Für das obrige ${raw('#show')}-Statement sollte purer Text innerhalb Anführungszeichen genügen,
die Möglichkeit besteht allerdings, z.B., den Titel auch mit beliebigen Inhalt zu füllen. Auch
kann Formatierung wie ${strong(inline`fett`)}, ${emph(inline`kursiv`)} oder ${underline(inline`unterstreichen`)}
nur mit ${emph(inline`Content`)} benutzt werden.`,
    inline`${strong(inline`Faustregel:`)} Benötigt ein Argument nur Text, nutze "..." -- für Formatierung,
nutze [...]. Für den normalen Fließtext deiner Arbeit, wie dieser hier, befindet sich das Dokument
automatisch im "beliebiger Inhalt"-Modus (${link('https://typst.app/docs/reference/syntax/')}).`,
    inline(labelled(heading({ depth: 2 }, inline('Überschriften und Unterüberschriften')), label('sec:headings'))),
    inline`Überschriften werden in Typst durch "=" erzeugt. Dabei stellt die Anzahl der "=" die Tiefe,
oder Level, der Überschrift dar. Ein "=" erzeugt eine "Level 1"-Überschrift, d.h. semantisch
ein komplett neues Kapitel. Folglich ist "==" eine Unterüberschrift und "===" eine Unterunterüberschrift
usw. Die Nummerierung geschieht automatisch.`,
    'Das Inhaltsverzeichnis listet alle Überschriften bis inklusive Level 3. Überschriften mit Level 4 können für semantische Abschnittunterteilungen verwendet werden, diese sind nicht nummeriert und Teil des Fließtexts:',
    m.lines(m.heading(4, 'Unterunterunterüberschrift'), inline(lorem(20))),
    m.heading(2, 'Inhaltsverzeichnis, Tabellenverzeichnis und Abbildungsverzeichnis'),
    inline`Das Inhaltsverzeichnis wird mit dem ${raw('#outline(..)')}-Befehl generiert. Dabei kann die
Tiefe, oder ${raw('depth')}, der aufzulistenden Abschnitte angegeben werden (Wir empfehlen es
bei 3 zu belassen) und auch ein eigener Titel, dieser ist standardmäßig "Inhalt".`,
    inline`Ein Tabellen- und Abbildungsverzeichnis können ebenso generiert werden. Dies basiert ebenso
auf dem ${raw('#outline(..)')}-Befehl, allerdings inkludiert das einige Zusatzargumente, also
haben wir dies abgekürzt: ${raw('#table-outline(..)')} und ${raw('#figure-outline(..)')}. Es
wird empfohlen, spätestens ab mehr als fünf Tabellen oder Abbildungen das jeweilige Verzeichnis
zu erstellen. Dabei kann für das Verzeichnis eine kürzere Tabellenüberschrift / Bildunterschrift
angegeben werden, falls die eigentliche zu lang ist.`,
    inline`Dies kann mit der ${raw('#flex-caption()')}-Funktion realisiert werden. Anstelle der eigentlichen
${raw('caption')} oder Bildunterschrift, benutzt ihr dann diese Funktion, welche als ersten
Parameter die lange Bildunterschrift erwartet und als zweiten Parameter eine Kurzfassung für
das jeweilige Verzeichnis. Für eine beispielhafte Anwendung davon, siehe ${ref(label('fig:flex'))}
und der Code darüber.`,
    m.heading(2, 'Tabellen und Abbildungen'),
    inline`Tabellen werden prinzipiell mit dem ${raw('#table(..)')}-Befehl generiert. Bilder können mit
dem ${raw('#image("pfad/zur/datei")')}-Befehl eingebunden werden. Um dies nun als ${emph(inline`Abbildung`)}
semantisch in die Arbeit einzubinden, werden diese mit dem ${raw('#figure(..)')}-Befehl zusammen
benutzt ("figure" (eng.): "Abbildung"). Die vorgeschriebene APA-Formatierung bzgl. Tabellentitel
über der Tabelle und Bildüberschrift über dem Bild (inkl. Anmerkungen -- APA 7) werden euch
dabei abgenommen -- siehe ${ref(label('fig:test'))} und ${ref(label('tbl:cite'))}.`,
    m.heading(3, 'Tabellen'),
    inline`Der folgende Typst-Code generiert eine Tabelle mit drei Spalten, welche relativ zueinander die
maximale Seitenbreite einnehmen, einem Abstand zwischen Zeile und Spalte von ${raw('0.75em')}
(${raw('em')} ist eine relative Einheit und entspricht der aktuellen Schriftgröße) und ohne
vertikale Linien. Das ${raw('caption')}-Argument ist dabei die Tabellenüberschrift.${v(em(0.5))}`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '// Formatierung automatisch nach APA 7 Richtlinien.\n#figure(caption: [Beispieltabelle mit arbiträren Daten])[\n  #table(columns: 3 * (1fr,), stroke: (x: none), inset: 0.75em,\n   [x], [y], [z],\n   [x], [y], [z],\n   [x], [y], [z],\n  )\n]',
      ),
    ),
    inline(
      figure(
        { caption: inline`Beispieltabelle mit arbiträren Daten` },
        inline(
          space,
          table(
            { columns: times(3, [fr(1)]), stroke: { x: null }, inset: em(0.75) },
            inline`x`,
            inline`y`,
            inline`z`,
            inline`x`,
            inline`y`,
            inline`z`,
            inline`x`,
            inline`y`,
            inline`z`,
          ),
          space,
        ),
      ),
    ),
    inline`Siehe ${link('https://typst.app/docs/guides/table-guide/')} für einen vollständigen Guide zur
Tabellenerstellung. Siehe auch ${link('https://typst.app/docs/reference/model/table/')} für
eine vollständige syntaktische Referenz des Typst-Tabellensyntax. Beispielsweise kann die Dicke
der Linien angepasst werden.`,
    m.heading(3, 'Bilder (u. Ä.)'),
    inline`Der folgende Typst-Code erstellt eine Abbildung mit einer Bildüberschrift und dem dazugehörigen
Bild. Im Idealfall sollten nur Vektorgrafiken (SVGs oder PDFs) verwendet werden, um die maximale
Qualität zu gewährleisten. Auch hier kümmert sich das Template automatisch um die Formatierung
und Positionierung der Bildüberschrift. Um Anmerkungen hinzuzufügen, siehe ${raw('#annotation-fig()')}.
Für mehrere Bilder in einer Abbildung, siehe ${link('https://typst.app/docs/reference/layout/grid/', inline(emph(inline`Grid`)))}.
${v(em(0.5))}`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '// flex-caption(long, short) ermöglicht es eine lange Bildunterschrift\n// und eine kurze für das Abbildungsverzeichnis zu generieren.\n\n#figure(\n  caption: flex-caption(\n    [\n      Ausprägung der abhängigen Variablen (AV) in Abhängigkeit von \n      den Stufen der unabhängigen Variablen (UV). Die Fehlerbalken \n      kennzeichnen den Standardfehler des Mittelwertes.\n    ],\n    [Ausprägung der abhängigen Variablen (AV).]\n  ),\n  image("diagram.svg")\n)',
      ),
    ),
    inline(
      labelled(
        figure(
          {
            caption: flexCaption(
              inline`Ausprägung der abhängigen Variablen (AV) in Abhängigkeit von den Stufen der unabhängigen Variablen
(UV). Die Fehlerbalken kennzeichnen den Standardfehler des Mittelwertes.`,
              inline`Ausprägung der abhängigen Variablen (AV).`,
            ),
          },
          image({ width: pct(70) }, path('diagram.svg')),
        ),
        label('fig:flex'),
      ),
    ),
    m.heading(2, 'Referenzieren von Abbildungen'),
    inline`Abbildungen können, ebenso wie Abschnitte und Literatureinträge, automatisch referenziert werden.
Dabei kann nun eine ${raw('#figure()')} (oder Überschrift, siehe ${ref(label('sec:headings'))})
mit einem ${emph(inline`Label`)} versehen werden zur späteren Referenzierung.`,
    inline(
      labelled(
        annotationFig({ annotation: lorem(20), caption: 'Ein Rechteck, hier kann alles beliebige stehen!' }, rect()),
        label('fig:test'),
      ),
    ),
    inline`Hier stellt, bspw., ${raw('<fig:test>')} ein sog. ${emph(inline`Label`)} dar -- der Name ist
beliebig wählbar, es bietet sich allerdings an Präfixe wie ${raw('tbl')}, ${raw('fig')} oder
${raw('sec')} zu benutzen um verschiedene Arten zu unterscheiden. Die Abbildung kann nun mit
${ref(label('fig:test'))} (${raw('@fig:test')}) referenziert werden; der Verweis verlinkt direkt
zur Abbildung. (${emoji.warning} Siehe Code! ${emoji.warning})`,
    m.heading(1, 'Erweiterter Syntax'),
    m.heading(2, 'Mathematische Inhalte'),
    inline`Mathematische Gleichungen können mit Typst auch schön und semantisch korrekt formatiert und
generiert werden. Dabei ist zu unterscheiden zwischen einer mathematischen Formel, welche im
Fließtext auftauchen kann, z.B., "Ich habe ein Signifikanzniveau von ${unsafeRaw.math`p <= .05`}
erreicht" oder größere Blockformeln, wie:`,
    inline(labelled(unsafeRaw.math.block`sum_(i = 0)^n x^i + 3 xor sqrt(5)`, label('eq:1'))),
    inline`Dabei unterscheidet sich der Syntax nur sehr geringfügig voneinander. Für Fließtextformeln wird
die entsprechende Formel innerhalb Dollar-Zeichen geschrieben, während Blockformeln auch innerhalb
Dollar-Zeichen geschrieben werden aber noch zusätzlich am Anfang und am Ende mit einem Leerzeichen
versehen werden. Siehe ${raw('$x = 3$')} vs. ${raw('$ x = 3 $')}.`,
    inline`Falls unklar ist, wie gewisse Symbole heißen, kann entweder hier gesucht werden: ${link('https://typst.app/docs/reference/symbols/sym/')}
oder das entsprechende Zeichen hier mithilfe Handschrifterkennung gezeichnet werden: ${link('https://detypify.quarticcat.com/')}.
Große Formeln können ebenso referenziert und nummeriert werden: Siehe ${ref(label('eq:1'))}
für eine lustige Formel, welche keinen Sinn ergibt.`,
    m.heading(2, 'Literaturmanagement und Zitationen'),
    inline`Typst unterstützt das bekannte BibTeX-Format zur Verwaltung der Literatur. Fast alle Journals
werden einen BibTeX-Eintrag für ihre Paper oder andere Veröffentlichungen bereitstellen, welche
kopiert und in eine externe Datei mit ${raw('.bib')}-Endung eingefügt werden können.`,
    inline`Im Bibliographieteil des bereits bekannten ${raw('#show')}-Statements kann dann der Pfad zu
dieser Datei im ${raw('#bibliography()')}-Befehl angegeben werden. Um nun einen Eintrag aus
dieser Datei zu zitieren, kommt, wie zuvor, der Referenzsyntax zum Einsatz: ${raw('@paper-title')},
wo ${raw('paper-title')} den Namen des BibTeX-Eintrags darstellt -- siehe ${ref(label('martenstein'))}
und ${ref(label('Son2019'))}. Dadurch füllt sich dann automatisch auch das Literaturverzeichnis.
Oftmals findet man im Bereich der Psychologie statt BibTeX auch RIS-Dateien, diese können allerdings
leicht umgewandelt werden (${link('https://www.bruot.org/ris2bib/')}).`,
    inline`Standardmäßig ist der Zitierstil "APA 7" eingestellt. Typst unterstützt allerdings 1000+ andere
Zitierstile, unter anderem, falls gewünscht auch ${raw({ lang: 'typc' }, '"deutsche-gesellschaft-für-psychologie"')}
-- das ist abhängig von den Anforderungen der betreuenden Person. Das "Citation Style Language"-Format
(CSL) wird benutzt zur Gestaltung der Stile ${sym.arrow} ${link('https://www.zotero.org/styles', inline`Interaktive Suche`)}.`,
    m.heading(3, 'Zitatsyntax'),
    inline`Neben dem ${raw('@')}-Syntax, welcher vielleicht für Prosatext ungeeignet ist, kann auch der
vollständige ${raw('#cite(..)')}-Befehl benutzt werden mit dem ${raw('form')}-Parameter. ${ref(label('tbl:cite'))}
zeigt nochmal den Syntax aller Zitierformen.${footnote(inline`In den allermeisten Fällen sollte die normale und Prosaform genügen.`)}`,
    inline`Diese Tabelle implementiert auch eine der optionalen APA-Anforderungen: ${emph(inline`Anmerkungen`)}
als Tabellenunterschrift. Dabei einfach, ähnlich wie bereits bekannt, ${raw('#annotation-table(..)')}
statt ${raw('#table(..)')} benutzen mit dem zusätzlichen ${raw('annotation')}-Parameter.`,
    inline(
      labelled(
        figure(
          { caption: inline`Formen der Quellenagaben im Text, Typst` },
          blocks(
            m.lines(
              set(par, { justify: false }),
              inline(
                annotationTable(
                  {
                    annotation: inline`Kurzform für Prosa mit ${raw('p:')}-Präfix. Siehe Leitfaden für sinnvolle Anmerkungen.`,
                    columns: times(2, [fr(1)]),
                    stroke: null,
                    inset: em(0.75),
                    align: left,
                  },
                  table.hline({ stroke: pt(1) }),
                  table.header(inline`Typst Syntax`, inline`Typst Ausgabe`),
                  table.hline(),
                  inline`${raw('@netwok2020')} oder${linebreak()} ${raw('#cite(<netwok2020>, form: "normal")')}`,
                  inline(ref(label('netwok2020'))),
                  inline`${raw('@p:netwok2020')} oder ${raw('#cite(<netwok2020>, form: "prose")')}`,
                  inline(ref(label('p:netwok2020'))),
                  raw('#cite(<netwok2020>, form: "author")'),
                  cite({ form: 'author' }, label('netwok2020')),
                  raw('#cite(<netwok2020>, form: "year")'),
                  cite({ form: 'year' }, label('netwok2020')),
                  raw('#cite(<netwok2020>, form: "full")'),
                  par({ justify: true }, cite({ form: 'full' }, label('netwok2020'))),
                  table.hline({ stroke: pt(1) }),
                ),
              ),
            ),
          ),
        ),
        label('tbl:cite'),
      ),
    ),
    m.heading(3, 'Blockzitate'),
    inline`Blockzitate sollten bei direkten Zitaten ab mehr als 40 Wörtern benutzt werden. Dies geschieht
mit dem ${raw('#quote(..)')}-Befehl. Die Quelle muss dabei mit dem ${raw('attribution')}-Parameter
angegeben werden, ebenso mit ${raw('@')}-Syntax, zusätzlich mit den Seiten (${raw('@test[S. 3--4]')}).`,
    inline(
      quote(
        { attribution: inline(ref({ supplement: inline`S. 6` }, label('martenstein'))) },
        inline`${space}Ich finde es ein bisschen albern, wenn Leute in solchen Zusammenhängen das Wort „unnatürlich“
verwenden. Was, bitte schön, ist an unserem heutigen Leben denn noch natürlich? ... Wenn es
nach der Natur ginge, dann würden wir alle mit vierzig Jahren [oder bereits früher] sterben.
... Natur – der schlimmste [Hervorhebung hinzugefügt] Feind des Menschen. Der Natur fallen mehr
Menschen zum Opfer als Atomkraftwerks- unglücken, Rauschgift, Terror und Flugzeugabstürzen zusammengenommen.
... Bleibt mir bloß mit der Natur vom Leib.${space}`,
      ),
    ),
    inline`Anlass der Kolumne war die Meldung, Facebook und Apple würden ihren Mitarbeiterinnen künftig
Social Freezing kostenlos ermöglichen. Mehrere Seiten, so wie generelle Intervalle oder Gedankeneinschübe,
sollten mit einem Gedankenstrich (--, in Typst: ${raw('--')}) verbunden werden. Einzelne Bindestriche
finden nur Verwendung in der Silbentrennung oder Ausdrücke wie "S-Bahn" und "Ober- und Unterhaus".`,
    m.heading(3, 'Normale Zitate'),
    inline`"Immer wenn ich zum Kühlschrank gehe, was leider viel zu oft der Fall ist, denke ich über Freezing
nach. Würde ich, wenn ich eine junge Frau wäre, meine Eier einfrieren lassen?" ${ref({ supplement: inline`S. 6` }, label('martenstein'))}.`,
    m.heading(2, 'Auflistungen'),
    inline`Entweder für TODOs oder für generelle Auflistungen existiert auch dedizierter Syntax, der sich
automatisch um die korrekte Formatierung kümmert. Ob unnummeriert oder nummeriert (siehe ${ref(label('sec:list'))}
und ${ref(label('sec:enum'))}), unterscheidet sich nur mit einem Zeichen: "-" und "+".`,
    inline`Auflistungen können ${emph(inline`dicht`)} beieinander sein oder etwas größere Abstände voneinander
haben: Dabei müssen Leerzeilen zwischen den einzelnen Einträgen erscheinen. Wir empfehlen eigentlich
immer, Auflistungen mit größeren Abständen zu erstellen, da diese leichter zu lesen sind.`,
    inline(labelled(heading({ depth: 3 }, inline('Unnummerierte Listen')), label('sec:list'))),
    m.list(
      { tight: false },
      m.item([lorem(10)]),
      m.item(
        [lorem(12)],
        m.list(
          { tight: false },
          m.item(['Unterlistenelement für genauere Erläuterung.']),
          m.item(['Ein weiteres Unterlistenelement']),
        ),
      ),
    ),
    inline(labelled(heading({ depth: 3 }, inline('Nummerierte Listen')), label('sec:enum'))),
    m.enum(
      { tight: false },
      m.item([lorem(10)]),
      m.item(
        ['Aufzählung von Instruktionen, die nacheinander geschehen sollen.'],
        m.enum(m.item(['Unterelement 2.1: genauere Erläuterung.'])),
      ),
    ),
    m.heading(1, 'Verschiedene Extras'),
    m.heading(2, 'Aufteilung der Kapitel in Dateien'),
    inline`Die gesamte Arbeit in nur einer Datei zu schreiben, kann schnell unübersichtlich werden, daher
empfiehlt es sich mindestens jedes Kapitel in eine eigene Datei aufzuteilen. Diese können dann
mit ${raw('#include "beispiel.typ"')} an der Stelle des Aufrufs direkt eingefügt werden. Somit
ergibt sich meist automatisch die folgende Struktur der Hauptdatei:`,
    inline(
      figure(
        {
          caption: flexCaption(
            inline`Standardaufteilung eines Typst-Dokuments. Der ${raw('include')}-Befehl entspricht essentiell
einfach "Copy-and-Paste" und sorgt für Ordnung.`,
            'Standardaufteilung eines Typst-Dokuments.',
          ),
          kind: image,
        },
        inline(
          space,
          raw(
            { block: true, lang: 'typ' },
            '#import "ipsy/ipsy.typ": *\n#show: ipsy.with(            // Siehe Abschnitt 1: Hier wird deine\n  title: [Titel],            // Titelseite definiert.\n  ..,\n)\n\n#outline(title: "Inhalt")    // Inhaltsverzeichnis                         \n#table-outline()             // Tabellenverzeichnis (bei >= 5 Tabellen)\n#figure-outline()            // Abbildungsverzeichnis (bei >= 5 Abb.)  \n\n#include "einleitung.typ"    // -> Es ist ebenso sinnvoll, eine Ordner-\n#include "hintergrund.typ"   // struktur zu erstellen für jedes Kapitel.\n#include "durchführung.typ"  // Vor allem, um Abbildungen oder Unterka-\n#include "auswertung.typ"    // pitel richtig zu organisieren.\n...',
          ),
          space,
        ),
      ),
    ),
    'Ein unauffälliger Blick nach oben verrät, dass dies schon ganz am Anfang für die Zusammenfassung verwendet wurde. Das Konzept ist also nicht neu.',
    m.heading(2, 'Rechtschreibprüfung'),
    inline`Der Typst Webeditor ist selbstständig in der Lage, eine automatische Rechtschreibprüfung, oder
${emph(inline`Spellcheck`)}, durchzuführen nachdem links in den Projekteinstellungen ein Häkchen
bei "Enable spellchecking" gemacht wurde.`,
    inline`Solltet ihr einen anderen Texteditor benutzen gibt es auch folgende externe Tools, welche euch
dennoch weiterhelfen sollten: ${link('https://mentor.duden.de/')} und ${link('https://languagetool.org/de')}.
Dort könnt ihr zumindest abschnittsweise und manuell euren Text überprüfen, nicht ideal oder
automatisch aber besser als gar nicht.`,
    m.heading(2, 'Eigene Funktionen'),
    inline`Falls ihr programmiertechnisch versiert seid, könnt ihr natürlich auch eigene Funktionen mit
der Skriptsprache von Typst erstellen. Ein simples Beispiel wäre eine ${raw('#todo[xyz]')}-Funktion,
welche, z.B., ein gelbes Rechteck mit schwarzer Umrandung generiert inkl. dem Präfix: "${strong(inline`TODO:`)}"
und dem Textparameter innerhalb der eckigen Klammern darauffolgend in ${emph(inline`kursiv.`)}`,
    'Damit spart ihr euch repetitive Schreibarbeit und habt einen auffälligen Reminder, welcher sich nicht in die finale Version einschleicht. Der Code dafür könnte folgendermaßen aussehen:',
    inline(
      figure(
        { kind: image, caption: inline`Funktionsdefinition eines eigenen TODO-Befehls.` },
        inline(
          space,
          raw({ block: true, lang: 'typ' }, '#let todo(txt) = rect(stroke: 0.5pt, fill: yellow)[*TODO:* #emph(txt)]'),
          space,
        ),
      ),
    ),
    inline`Der Aufruf kann dann wie folgt geschehen: ${raw('#todo[Füge passendes Diagramm hinzu!]')} und
erzeugt folgendes Resultat:`,
    m.lines(todo.decl, inline(todo(inline`Füge passendes Diagramm hinzu!`))),
    m.heading(2, 'Anhangserstellung'),
    inline`Einen Anhang kannst du mit der Funktion ${raw('#appendix(titel, lbl: none)[...]')} erstellen.
Wir empfehlen dies ausdrücklich in einer externen Datei, welche dann, wie in ${ref(label('tbl:args'))}
dargestellt, als optionaler Parameter eingebunden werden kann. Der Anhang benötigt einen Titel
und optional ein ${emph(inline`Label`)}, so dass im Text auf diesen verwiesen werden kann.`,
    inline(
      labelled(
        figure(
          { caption: 'Anhangserstellung. Idealerweise in einer Extradatei.', kind: image },
          inline(
            space,
            raw(
              { block: true, lang: 'typ' },
              '#begin-appendix\n#appendix("Titel", lbl: <appendix>)[\n  #figure(..)\n  #figure(..)\n  #figure(..)\n]',
            ),
            space,
          ),
        ),
        label('fig:app-creation'),
      ),
    ),
    inline`Zwischen den eckigen Klammern kann dann ganz normaler ${emph(inline`Content`)}, bzw. die Anhangsabbildung,
eingefügt werden, siehe ${ref(label('fig:app-creation'))}. Der Befehl ${raw('#begin-appendix')}
ist notwendig um die Nummerierung der Überschriften zurückzusetzen, damit diese wieder von vorne
anfangen zu zählen, so dass dort ein "A" und, bspw., kein "D" steht als Nummerierung. Abbildungen
innerhalb des Anhangs sind ebenso mit ${emph(inline`Labels`)} referenzierbar und besitzen nun
einen Präfix zur korrekten Zuordnung: ${emph(inline`"Siehe ${ref(label('app'))} und ${ref(label('app:image'))}, ${ref(label('app:image2'))} und
${ref(label('app:image3'))} (oder sogar: ${ref(label('app:tbl'))})."`)}`,
  )
}
