// Converted from test/suite/corpus/sub-super.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, let_, m, pt, square, sub, super_, table } from '../../../src/index.ts'

export default () => {
  const [sqDecl, sq] = let_('sq', box(square({ size: pt(4) })))
  return doc(
    m.lines(
      sqDecl,
      inline(
        table(
          { columns: 3 },
          inline`Typo.`,
          inline`Fallb.`,
          inline`Synth.`,
          inline`x${super_(inline`1${sq}`)}`,
          inline`x${super_(inline`5: ${sq}`)}`,
          inline`x${super_({ typographic: false }, inline`2 ${sq}`)}`,
          inline`x${sub(inline`1${sq}`)}`,
          inline`x${sub(inline`5: ${sq}`)}`,
          inline`x${sub({ typographic: false }, inline`2 ${sq}`)}`,
        ),
      ),
    ),
  )
}
