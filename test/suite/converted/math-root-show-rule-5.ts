// Converted from test/suite/corpus/math-root-show-rule-5.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, m, math, purple, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(math.root, (it, ctx) =>
        codeBlock([show('√', set(text, { fill: purple }, { if: unsafeRaw.code<any>`it.index == none` }))], it),
      ),
      inline(unsafeRaw.math.block`sqrt(1/2) root(3, 1/2)`),
    ),
  )
}
