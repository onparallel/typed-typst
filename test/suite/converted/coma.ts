// Converted from test/suite/corpus/coma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  blocks,
  center,
  cm,
  doc,
  em,
  emph,
  fr,
  h,
  image,
  inline,
  linebreak,
  m,
  mm,
  page,
  par,
  path,
  pct,
  pt,
  set,
  space,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(450), margin: cm(1) }),
    inline`${strong(inline`Technische Universität Berlin`)} ${h(fr(1))} ${strong(inline`WiSe 2019/2020`)}
${linebreak()} ${strong(inline`Fakultät II, Institut for Mathematik`)} ${h(fr(1))} Woche 3 ${linebreak()}
Sekretariat MA ${linebreak()} Dr. Max Mustermann ${linebreak()} Ola Nordmann, John Doe`,
    inline(
      v(mm(3)),
      space,
      align(
        center,
        blocks(
          m.lines(
            set(par, { leading: mm(3) }),
            inline`${text({ size: em(1.2) }, inline(strong(inline`3. Übungsblatt Computerorientierte Mathematik II`)))}
${linebreak()} ${strong(inline`Abgabe: 03.05.2019`)} (bis 10:10 Uhr in MA 001) ${linebreak()}
${strong(inline`Alle Antworten sind zu beweisen.`)}`,
          ),
        ),
      ),
    ),
    inline`${strong(inline`1. Aufgabe`)} ${h(fr(1))} (1 + 1 + 2 Punkte)`,
    inline`Ein ${emph(inline`Binärbaum`)} ist ein Wurzelbaum, in dem jeder Knoten ≤ 2 Kinder hat. Die Tiefe
eines Knotens ${emph(inline`v`)} ist die Länge des eindeutigen Weges von der Wurzel zu ${emph(inline`v`)},
und die Höhe von ${emph(inline`v`)} ist die Länge eines längsten (absteigenden) Weges von ${emph(inline`v`)}
zu einem Blatt. Die Höhe des Baumes ist die Höhe der Wurzel.`,
    inline(align(center, image({ width: pct(75) }, path('/assets/images/graph.png')))),
  )
}
