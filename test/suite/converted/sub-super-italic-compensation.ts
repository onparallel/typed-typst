// Converted from test/suite/corpus/sub-super-italic-compensation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, let_, linebreak, m, pt, set, square, sub, super_, text } from '../../../src/index.ts'

export default () => {
  const [synthDecl, synth] = let_('synth', inline`1,2,3`)
  const [typoDecl, typo] = let_('typo', inline`123`)
  const [sqDecl, sq] = let_('sq', inline`1${box(square({ size: pt(4) }))}2`)
  return doc(
    m.lines(
      set(text, { size: pt(20), style: 'italic' }),
      synthDecl,
      typoDecl,
      sqDecl,
      inline`x${super_(synth)} x${super_(typo)} x${super_(sq)} ${linebreak()} x${sub(synth)} x${sub(typo)}
x${sub(sq)}`,
    ),
  )
}
