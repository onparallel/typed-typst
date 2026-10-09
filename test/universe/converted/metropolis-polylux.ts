// Converted from test/universe/corpus/metropolis-polylux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  em,
  emph,
  external,
  importPackage,
  inline,
  m,
  page,
  raw,
  set,
  show,
  space,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const metropolis = external('metropolis')
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const metropolis_setup = external('setup', metropolis)
  const metropolis_divider = external('divider', metropolis)
  const metropolis_outline = external('outline', metropolis)
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [slide]),
      importPackage('@preview/metropolis-polylux:0.1.0', metropolis),
      unsafeRaw.markup`#import metropolis: new-section, focus`,
    ),
    show(metropolis_setup),
    inline(
      slide(
        blocks(
          set(page, { header: null, footer: null, margin: em(3) }),
          inline(text({ size: em(1.3) }, inline(space, strong(inline`My presentation title`), space))),
          'My subtitle',
          inline(metropolis_divider),
          m.lines(set(text, { size: em(0.8), weight: 'light' }), 'The Author'),
          'Jan 16, 2025',
          'Some extra info',
        ),
      ),
    ),
    inline(slide(blocks(m.heading(1, 'Agenda'), inline(metropolis_outline)))),
    inline(unsafeRaw.code<any>`new-section[My first section]`),
    inline(
      slide(
        blocks(
          m.heading(1, 'The Fundamental Theorem of Calculus'),
          inline`For ${unsafeRaw.math`f = (dif F) / (dif x)`} we ${emph(inline`know`)} that ${unsafeRaw.math.block`integral_a^b f(x) dif x = F(b) - F(a)`}`,
          inline`See ${raw('https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus')}`,
        ),
      ),
    ),
    inline(slide(inline`${space}slide without a title${space}`)),
    inline(unsafeRaw.code<any>`new-section[My second section]`),
    inline(
      slide(
        blocks(
          m.heading(1, 'Heron algorithm'),
          inline(
            raw(
              { block: true, lang: 'julia' },
              'function heron(x)\n    r = x\n    while abs(r^2 - x) > eps()\n        r = (r + x / r) / 2\n    end\n    return r\nend\n\n@test heron(42) ≈ sqrt(42)',
            ),
          ),
        ),
      ),
    ),
    inline(slide(blocks(m.lines(unsafeRaw.markup`#show: focus`, 'Something very important')))),
  )
}
