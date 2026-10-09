// Converted from test/universe/corpus/easy-abi-ausarbeitung.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  cite,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  label,
  linebreak,
  m,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const ausarbeitung = external('ausarbeitung')
  const ausarbeitung_with = define('with').returns(T.any).external(ausarbeitung)
  return doc(
    importPackage('@preview/easy-abi-ausarbeitung:0.1.0', [ausarbeitung]),
    show(ausarbeitung_with()),
    m.lines(m.heading(1, 'Themenfindung'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Was soll untersucht werden? Wie bin ich auf das Thema gekommen? Wie lautet meine Leitfrage?`)))}
Es soll der Prozess der Themenfindung beschrieben werden und wie man schlussendlich zum Thema
und der Leitfrage, die ein differenziertes Urteil verlangt, gekommen ist. Hier können auch persönliche
Gründe und/oder Bezüge zu aktuellen Geschehnissen beschrieben werden. ${emph(inline`(Warum wurde sich für eine Gruppenprüfung entschieden?)`)}
${linebreak()} ${linebreak()}`,
    m.lines(m.heading(1, 'Relevanz'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Welche Bedeutung und Relevanz hat das Thema?`)))} Darstellung,
warum es allgemein und/oder fachlich bedeutsam ist, sich mit dem Thema und der Leitfrage zu
beschäftigen. Beschreibung worin die Zielsetzung der Auseinandersetzung mit dem Thema liegt
und wie der inhaltliche Schwerpunkt zum Referenzfach aussieht sowie wo sich ein sinnvoller fächerübergreifender
Bezug zum Bezugsfach herstellen lässt. ${emph(inline`(Gemeinsame Darstellung)`)} ${linebreak()}
${linebreak()}`,
    m.lines(m.heading(1, 'Eingrenzung'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Wie habe ich das Thema eingegrenzt? Was ist der Untersuchungsschwerpunkt?`)))}
Darstellung und Begründung welche Untersuchungsaspekte nötig sind, um die Leitfrage zu beantworten,
was das Exemplarische an der Thematik ist und welche Aspekte weniger bedeutsam sind und deshalb
außen vor gelassen werden. Begründete Darlegung, welche Betrachtungsebenen, Perspektiven, Kategorien
und Kriterien den Kern der Untersuchung bilden, bzw. welche begründet außer Acht gelassen werden
können. Es können auch Methoden beschrieben werden, die für die Untersuchung geeignet sind oder
denkbar wären. ${emph(inline`(Getrennte Darstellung)`)} ${linebreak()} ${linebreak()}`,
    m.lines(m.heading(1, 'Gliederung'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Wie möchte ich meine Präsentation gliedern?`)))} Hier geht
es um die begründete Beschreibung des Vorgehens bei der Präsentation, um die Leitfrage vorzustellen,
die Argumentation darzulegen und eine differenzierte Antwort auf die Leitfrage zu geben. Dabei
muss sich aus der Untersuchungsfrage einleitend ergeben, welche Aspekte im Hauptteil vorgestellt
werden sollten. Hier sollte eine sinnvolle Struktur gewählt und diese nachvollziehbar begründet
werden. Am Ende des Hauptteils bietet sich oft eine zusammenfassende Übersicht der präsentierten
Fakten und Argumente an, die dann im letzten Schritt für das Fazit benutzt werden kann. ${emph(inline`(Getrennte Darstellung)`)}
${linebreak()} ${linebreak()}`,
    m.lines(m.heading(1, 'Quellen & Literaturkritik'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Mit welchen Quellen habe ich gearbeitet?`)))} Es soll anhand
von drei Beispielen dargelegt werden, welche Quellen und Medien für die Bearbeitung der Untersuchungsfrage
verwendet wurden und wie hilfreich diese waren. Es bietet sich an, positive und negative Beispiele
hier zu beschreiben. Dabei soll kritisch dargelegt werden, in welcher Art und Weise die Medien/Quellen
benutzt wurden, wie sie gegebenenfalls mit KI-Tools zugänglicher gemacht wurden, in welcher
Hinsicht sie geeignet oder ungeeignet waren und welche Schwierigkeiten oder Hürden bei der Arbeit
mit dem Medium aufgetreten sind. Kriterien zur kritischen Reflexion könnten beispielsweise folgende
sein:`,
    inline`Beispielquellen zum Eintragen in die Bibliografie sind ${cite({ supplement: 'Beispiel Journal' }, label('beispiel-journal'))},
${cite({ supplement: 'Beispiel Zeitung' }, label('beispiel-zeitung'))}, ${cite({ supplement: 'Beispiel Webseite' }, label('beispiel-webseite'))},
${cite({ supplement: 'Beispiel Sendung' }, label('beispiel-sendung'))}, ${cite({ supplement: 'Beispiel Film' }, label('beispiel-film'))},
${cite({ supplement: 'Beispiel KI-Tool' }, label('beispiel-ki-tool'))}, ${cite({ supplement: 'Beispiel Buch' }, label('beispiel-buch'))}
und ${cite({ supplement: 'Beispiel Sonstiges' }, label('beispiel-sonstiges'))}.`,
    m.list(
      m.item([
        strong(inline`Zugänglichkeit:`),
        space,
        'Gibt es Möglichkeiten, einfach, schnell und kostenfrei auf die Quelle zuzugreifen?',
      ]),
      m.item([
        strong(inline`Struktur:`),
        space,
        'Unterliegt das Medium einer nachvollziehbaren Struktur, die die Orientierung oder Suche im Medium erleichtert?',
      ]),
      m.item([
        strong(inline`Fachlichkeit:`),
        space,
        'Ist das Medium fachlich tiefgehend genug für die Erarbeitung, bzw. ist es vielleicht auf einem so hohen fachlichen Niveau, dass das Eindringen in die Materie nicht einfach ist?',
      ]),
      m.item([
        strong(inline`Aussagekraft/Transparenz:`),
        space,
        'Ist erkennbar, wer das Medium erstellt hat und welche Intention es besitzt? Ist das Medium eine vertrauenswürdige Quelle? Woran kann das im speziellen Fall festgemacht werden?',
      ]),
      m.item([
        strong(inline`Sprache:`),
        space,
        'Ist die Sprache des Mediums gut zugänglich, aber doch fachsprachlich präzise genug, um das Medium gut nutzen zu können?',
      ]),
      m.item([
        strong(inline`Autor*in:`),
        space,
        'Welchen fachlichen Hintergrund hat der/die Autor*in? Sind sie auf wissenschaftlicher Ebene mit dem Thema befasst? Haben sie weitere Arbeiten zur Thematik erstellt? Werden ihre Arbeiten in der Fachwelt diskutiert?',
      ]),
    ),
    inline(emph(inline`(Getrennte Darstellung)`), space, linebreak(), space, linebreak()),
    m.lines(m.heading(1, 'Probleme & Herausforderungen'), inline(linebreak())),
    inline`${align(center, inline(strong(inline`Welche Probleme oder Schwierigkeiten sind bei der Bearbeitung aufgetreten?`)))}
Es sollen die größten Hürden, die sich bei dem gesamten Arbeitsprozess der Vorbereitung der
5. PK ergeben haben, systematisch beschrieben werden. Dabei sollen deren Ursachen und Auswirkungen
dargelegt werden und Versuche oder Methoden beschrieben werden, mit denen man diese Probleme
zu lösen versuchte oder zukünftig lösen will. Es kann beschrieben werden, inwieweit die planerischen
Schritte tragfähig waren und welche methodischen Erkenntnisse es gegeben hat. ${emph(inline`(Getrennte Darlegung)`)}
${linebreak()} ${linebreak()}`,
  )
}
