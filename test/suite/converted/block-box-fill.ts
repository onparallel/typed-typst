// Converted from test/suite/corpus/block-box-fill.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, box, doc, inline, let_, lorem, m, page, pct, pt, set, space, teal } from '../../../src/index.ts'

export default () => {
  const [wordsDecl, words] = let_('words', lorem(18).split())
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      wordsDecl,
      inline(
        block(
          { inset: pt(8), width: pct(100), fill: aqua, stroke: aqua.darken(pct(30)) },
          inline(
            space,
            words.slice(0, 13).join(' '),
            space,
            box({ fill: teal, outset: pt(2) }, inline`tempor`),
            space,
            words.slice(13).join(' '),
            space,
          ),
        ),
      ),
    ),
  )
}
