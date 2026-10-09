// Converted from test/universe/corpus/tatras-ieee.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  circle,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  left,
  link,
  lorem,
  m,
  path,
  pt,
  ref,
  right,
  show,
  space,
  strong,
  table,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ieee = external('ieee')
  const ieee_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('figure-reference-supplement', T.content, [])
    .named('index-terms', T.any, null)
    .named('section-reference-supplement', T.content, [])
    .named('table-reference-supplement', T.content, [])
    .named('title', T.content, [])
    .named('underline-links', T.any, null)
    .returns(T.any)
    .external(ieee)
  return doc(
    importPackage('@preview/tatras-ieee:0.1.0', [ieee]),
    show(
      ieee_with({
        title: inline`Názov článku na konferenciu vo formáte IEEE`,
        abstract: inline`${space}Link na ${link('https://typst.app/', inline`Typst.app`)}. ${lorem(60)}${space}`,
        authors: [
          {
            name: 'Janko Mkrvička',
            department: inline`Fakulta`,
            organization: inline`Univerzita`,
            location: inline`Bratislava, Slovensko`,
            email: 'janko@mrkvicka.sk',
          },
          {
            name: 'Peter Milan',
            department: inline`Fakulta`,
            organization: inline`Univerzita`,
            location: inline`Bratislava, Slovensko`,
            email: 'peter@milan.sk',
          },
        ],
        indexTerms: ['Kľúčové', 'slová', 'článku'],
        bibliography: bibliography(path('refs.bib')),
        figureReferenceSupplement: inline`Obr.`,
        tableReferenceSupplement: inline`Tabuľka`,
        sectionReferenceSupplement: inline`Sekcia`,
        underlineLinks: 2,
      }),
    ),
    m.lines(
      m.heading(1, 'Nadpis 1 úrovne'),
      inline(lorem(60)),
      m.heading(2, 'Link na webstránku'),
      inline`Link na ${link('https://typst.app/', inline`Typst.app`)} je alebo nie je podčiarknutý.`,
      m.heading(2, 'Citovanie'),
      inline`Citácia zdroja ${ref(label('example'))}.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Nadpis 2 úrovne')), label('sec:heading2'))),
      inline(lorem(60)),
    ),
    m.lines(m.heading(3, 'Referencia na obrázok'), inline`${ref(label('fig:circle'))} zobrazuje kružnicu.`),
    inline(
      labelled(
        [figure({ placement: null, caption: inline`Kružnica` }, circle({ radius: pt(15) })), space],
        label('fig:circle'),
      ),
    ),
    inline(lorem(60)),
    m.lines(
      m.heading(2, 'Referencia na sekciu'),
      inline`${ref(label('sec:heading2'))} nam hovorí o nadpise druhej úrovne.`,
    ),
    m.lines(
      m.heading(2, 'Referencia na rovnicu'),
      inline`Nižšie vidíme rovnicu ${ref(label('eq:com'))}, ktorá nám hovorí o komutatívnosti.`,
    ),
    inline(labelled([unsafeRaw.math.block`a #sym.times b = b #sym.times a`, space], label('eq:com'))),
    m.lines(m.heading(3, 'Nadpis 3 úrovne'), inline(lorem(30))),
    m.lines(m.heading(3, 'Druhý Nadpis 3 úrovne'), inline(lorem(30))),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Mená a vek ľudí`, placement: top },
            table(
              {
                columns: [em(6), auto],
                align: [left, right],
                inset: { x: pt(8), y: pt(4) },
                fill: (x, y) => unsafeRaw.code<any>`if y > 0 and calc.rem(y, 2) == 0  { rgb("#efefef") }`,
              },
              table.header(inline(strong(inline`Meno`)), inline(strong(inline`Vek`))),
              inline`Ján`,
              inline`25`,
              inline`Eva`,
              inline`30`,
              inline`Peter`,
              inline`45`,
              inline`Mária`,
              inline`35`,
              inline`Tomáš`,
              inline`50`,
              inline`Anna`,
              inline`40`,
              inline`Michal`,
              inline`55`,
              inline`Zuzana`,
              inline`60`,
            ),
          ),
          space,
        ],
        label('tab:name_ages'),
      ),
    ),
    inline(lorem(60)),
    inline`${ref(label('tab:name_ages'))} zobrazuje mená a vek ľudí.`,
    m.lines(m.heading(1, 'Záver'), inline(lorem(60))),
    m.lines(m.heading(1, 'Poďakovanie'), inline(lorem(30))),
  )
}
