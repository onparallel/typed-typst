// Converted from test/universe/corpus/charged-pace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  circle,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  left,
  linebreak,
  lorem,
  m,
  path,
  pt,
  ref,
  right,
  show,
  space,
  table,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const manuscript = external('manuscript')
  const manuscript_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.content, [])
    .named('bibliography-decl', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(manuscript)
  return doc(
    importPackage('@preview/charged-pace:0.1.0', [manuscript]),
    show(
      manuscript_with({
        title: inline`A Typst Template for a PhDCS Dissertation or MSCS Thesis`,
        author: inline`Forename Surname`,
        date: { month: 'May', year: 2026 },
        degree: "Master's",
        bibliographyDecl: bibliography(path('refs.yaml')),
        abstract: inline`An abstract should be typed single-spaced and contain no more than 350 words. ${linebreak()}
${linebreak()} This template was created based on ${emph(inline`CSIS DPS Guide for Formatting the Dissertation.`)}
${linebreak()} ${linebreak()} If your abstract spans two pages, be sure that the "Table of Contents"
is numbered with the correct roman numeral.`,
      }),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('sec:introduction'))),
      inline(lorem(120)),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Problem Statement')), label('sec:prob_state'))),
      inline(lorem(300)),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Thesis Structure')), label('sec:thesis_struct'))),
      inline(lorem(200)),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Method')), label('sec:method'))),
      inline(
        lorem(45),
        space,
        labelled([unsafeRaw.math.block`a + b = gamma`, space], label('eq:gamma')),
        space,
        lorem(80),
      ),
    ),
    inline(
      labelled(
        [
          figure({ placement: null, caption: inline`A circle representing the Sun.` }, circle({ radius: pt(15) })),
          space,
        ],
        label('fig:sun'),
      ),
    ),
    inline`In ${ref(label('fig:sun'))} you can see a common representation of the Sun, which is a star
that is located at the center of the solar system.`,
    inline(lorem(120)),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`The Planets of the Solar System and Their Average Distance from the Sun`,
              placement: top,
            },
            table(
              {
                columns: [em(6), auto],
                align: [left, right],
                inset: { x: pt(8), y: pt(4) },
                stroke: (x, y) => unsafeRaw.code<any>`if y <= 1 { (top: 0.5pt) }`,
                fill: (x_2, y_2) => unsafeRaw.code<any>`if y > 0 and calc.rem(y, 2) == 0 { rgb("#efefef") }`,
              },
              table.header(inline`Planet`, inline`Distance (million km)`),
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
    inline`In ${ref(label('tab:planets'))}, you see the planets of the solar system and their average distance
from the Sun. The distances were calculated with ${ref(label('eq:gamma'))} that we presented
in ${ref(label('sec:method'))}.`,
    inline(lorem(240)),
    inline(lorem(240)),
  )
}
