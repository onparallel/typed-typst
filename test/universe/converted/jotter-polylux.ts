// Converted from test/universe/corpus/jotter-polylux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  blue,
  box,
  define,
  doc,
  em,
  emph,
  external,
  grid,
  horizon,
  importPackage,
  inline,
  left,
  m,
  math,
  pct,
  place,
  pt,
  raw,
  red,
  right,
  set,
  show,
  space,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const toolbox = external('toolbox')
  const setup = external('setup')
  const titleSlide = define('title-slide').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const framedBlock = define('framed-block').pos('arg1', T.content).returns(T.any).external()
  const postIt = define('post-it').pos('arg1', T.content).returns(T.any).external()
  const setup_with = define('with')
    .named('binding', T.any, null)
    .named('dots', T.any, null)
    .named('header', T.content, [])
    .named('highlight-color', T.any, null)
    .returns(T.any)
    .external(setup)
  const toolbox_sideBySide = define('side-by-side')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external(toolbox)
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [slide, toolbox]),
      importPackage('@preview/jotter-polylux:0.1.0', [setup, titleSlide, framedBlock, postIt]),
    ),
    set(text, { size: pt(25), font: 'Kalam', fill: blue.darken(pct(50)) }),
    show(math.equation, set(text, { font: ['Pennstander Math', 'New Computer Modern Math'], weight: 'light' })),
    show(raw, set(text, { font: 'Fantasque Sans Mono' })),
    show(setup_with({ header: inline`A short title`, highlightColor: red, binding: true, dots: true })),
    inline(
      titleSlide(
        inline`My interesting title`,
        blocks(
          'A subtitle',
          'The speaker',
          'Date, Place',
          inline(
            place(
              add(horizon, right),
              postIt(
                blocks(
                  m.lines(
                    set(align, { alignment: add(horizon, left) }),
                    set(text, { size: em(0.6) }),
                    inline`Don't miss this talk!`,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Typography'),
          inline(
            toolbox_sideBySide(
              blocks(
                'Style your content beautifully!',
                inline`Some text is ${strong(inline`bold`)}, some text is ${emph(inline`emphasized`)}.`,
              ),
              blocks(
                m.list(m.item(['a bullet point']), m.item(['another bullet point'])),
                m.enum(m.item(['first point']), m.item(['second point'])),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Maths and Code'),
          inline(
            toolbox_sideBySide(
              inline`${space}Maxwell says: ${unsafeRaw.math.block`integral.surf_(partial Omega) bold(B) dot dif bold(S) = 0`}${space}`,
              inline`${space}Compute the answer: ${raw({ block: true, lang: 'rust' }, 'pub fn main() {\n    dbg!(42);\n}')}${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Highlighting content'),
          inline(
            toolbox_sideBySide(
              inline(
                space,
                grid(
                  { columns: 2, gutter: em(1) },
                  framedBlock(inline`a`),
                  framedBlock(inline`couple`),
                  framedBlock(inline`of`),
                  framedBlock(inline`randomized`),
                  framedBlock(inline`framed`),
                  framedBlock(inline`boxes`),
                ),
                space,
              ),
              inline(space, box(postIt(inline`a post-it`)), space, box(postIt(inline`another post-it`)), space),
            ),
          ),
        ),
      ),
    ),
  )
}
