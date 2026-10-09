// Converted from test/universe/corpus/basic-polylux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  block,
  blocks,
  define,
  doc,
  em,
  external,
  fr,
  heading,
  horizon,
  importPackage,
  inline,
  m,
  math,
  page,
  pct,
  pt,
  rect,
  right,
  set,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const toolbox = external('toolbox')
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const later = external('later')
  const only = define('only').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const toolbox_slideNumber = external('slide-number', toolbox)
  const toolbox_sideBySide = define('side-by-side')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external(toolbox)
  return doc(
    importPackage('@preview/polylux:0.4.0', [toolbox, slide, later, only]),
    m.lines(
      set(page, {
        paper: 'presentation-16-9',
        footer: align(right, text({ size: em(0.8) }, toolbox_slideNumber)),
        margin: { bottom: em(2), rest: em(1) },
      }),
      set(text, { font: 'Lato', size: pt(23) }),
      show(math.equation, set(text, { font: 'Lete Sans Math' })),
      show(heading, set(block, { below: em(2) })),
    ),
    inline(
      slide(
        blocks(
          m.lines(set(page, { footer: null }), set(align, { alignment: horizon })),
          inline(text({ size: em(1.5) }, inline`Title of the presentation`)),
          'The author, the date',
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'My first slide'),
          inline`Here come my three favourite fonts: ${show(later)}`,
          m.enum(m.item(['Atkinson Hyperlegible']), m.item(['Alegreya']), m.item(['TeX Gyre Pagella'])),
          show(later),
          inline`And now some math: ${unsafeRaw.math.block`sum_(k = 1)^n k = (n (n + 1)) / 2`}`,
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Second slide'),
          inline(
            toolbox_sideBySide(
              inline(space, rect({ width: pct(100), height: fr(1) }, inline`(imagine this being an image)`), space),
              inline`${space}On the left, you see a ${only(2, inline`not so`)} beautiful image.${space}`,
            ),
          ),
        ),
      ),
    ),
  )
}
