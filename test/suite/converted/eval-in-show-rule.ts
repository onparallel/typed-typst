// Converted from test/suite/corpus/eval-in-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(raw, (it, ctx) => text({ font: 'PT Sans' }, unsafeRaw.code<any>`eval("[" + it.text + "]")`)),
    inline`Interacting ${raw({ block: true }, '#set text(blue)\nBlue #move(dy: -0.15em)[🌊]')}`,
  )
}
