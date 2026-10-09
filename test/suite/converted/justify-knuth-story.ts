// Converted from test/suite/corpus/justify-knuth-story.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blocks,
  codeBlock,
  define,
  doc,
  grid,
  inline,
  let_,
  linebreak,
  m,
  page,
  par,
  pt,
  rect,
  rgb,
  set,
  space,
  strong,
  text,
} from '../../../src/index.ts'

export default () => {
  const [storyDecl, story] = let_(
    'story',
    inline`${space}In olden times when wishing still helped one, there lived a king whose daughters were
all beautiful; and the youngest was so beautiful that the sun itself, which has seen so much,
was astonished whenever it shone in her face. Close by the king’s castle lay a great dark forest,
and under an old lime-tree in the forest was a well, and when the day was very warm, the king’s
child went out into the forest and sat down by the side of the cool fountain; and when she was
bored she took a golden ball, and threw it up on high and caught it; and this ball was her favorite
plaything.${space}`,
  )
  const column = define('column')
    .pos('title', T.any)
    .pos('linebreaks', T.any)
    .pos('hyphenate', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        rect(
          { inset: pt(0), width: pt(132), fill: rgb('eee') },
          blocks(
            m.lines(
              set(par, { linebreaks: p['linebreaks'] }),
              set(text, { hyphenate: p['hyphenate'] }),
              inline(strong(p['title']), space, linebreak(), space, story),
            ),
          ),
        ),
      ),
    )
  return doc(
    m.lines(
      set(page, { width: auto, height: auto }),
      set(par, { leading: pt(4), justify: true }),
      set(text, { font: 'New Computer Modern' }),
    ),
    storyDecl,
    column.decl,
    inline(
      grid(
        { columns: 3, gutter: pt(10) },
        column(inline`Simple without hyphens`, 'simple', false),
        column(inline`Simple with hyphens`, 'simple', true),
        column(inline`Optimized with hyphens`, 'optimized', true),
      ),
    ),
  )
}
