// Converted from test/universe/corpus/impaginato.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  bottom,
  center,
  cm,
  define,
  doc,
  fr,
  image,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  mm,
  page,
  par,
  path,
  place,
  pt,
  raw,
  right,
  set,
  space,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const impagina = define('impagina').pos('arg1', T.any).returns(T.any).external()
  const [single_flyerDecl, single_flyer] = let_(
    'single_flyer',
    blocks(
      inline(place({ dx: mm(0), dy: mm(0) }, add(bottom, right), image({ height: cm(3.5) }, path('fantasma.svg')))),
      m.lines(set(text, { font: 'Bebas Neue', size: pt(48) }), set(par, { leading: pt(10), spacing: pt(10) })),
      'A simple flyer for activists using Typst',
      m.lines(
        set(text, { font: 'Myriad Pro', size: pt(14) }),
        set(par, { leading: pt(9), justify: true, spacing: pt(13) }),
      ),
      'This document features two identical A5 flyers, ready to print at home or at local copy shops on A4 paper, with a dashed line guide to cut in half precisely. Write once, and the content will appear on both sides with the same formatting.',
      inline`This was possible thanks to the usage of Typst variables in the source code. The variable ${raw('single_flyer')}
is assigned with the content of one A5 flyer. This is then repeated twice inside a grid with
two columns. Each column of the grid has a inset, and the two columns are separated by a dashed
${raw('vline')}.`,
      inline`This flyer features a big uppercase and catchy left-aligned heading on the top, and a medium-large,
center-aligned footer for a call to action. The footer is flushed to the bottom, using a ${raw('#v(1fr)')}
at the end of the body text.`,
      inline`You can place a logo or an image of your choice in this flyer. This is done using the ${raw('#place')}
function. By default, the logo is placed at the bottom right. You can move the logo changing
its placement keywords, or tweaking the ${raw('dx')} and ${raw('dy')} parameters for a finer
tuning.`,
      'Using Typst for graphics design guarantees reproducibility, do-what-i-mean behaviour, reduces technical debt (goodbye expensive tools), and allows more people to collaborate freely.',
      inline(
        strong(
          blocks(
            'Ditch proprietary software and closed file formats.',
            'Embrace declarative design and open source tools.',
          ),
        ),
      ),
      inline(v(fr(1))),
      m.lines(
        set(text, { font: 'Bebas Neue', size: pt(24) }),
        inline(
          align(
            center,
            inline`${space}I design in Typst ${linebreak()} ${text({ size: pt(32) }, inline`You can do it too`)}${space}`,
          ),
        ),
      ),
    ),
  )
  return doc(
    importPackage('@preview/impaginato:0.1.0', [impagina]),
    m.lines(set(page, { paper: 'a4', margin: pt(0), flipped: true }), set(text, { lang: 'it' })),
    single_flyerDecl,
    inline(impagina(single_flyer)),
  )
}
