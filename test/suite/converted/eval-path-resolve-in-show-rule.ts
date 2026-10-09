// Converted from test/suite/corpus/eval-path-resolve-in-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(raw, (it, ctx) => unsafeRaw.code<any>`eval(it.text, mode: "markup")`),
    inline(raw({ block: true }, '#show emph: image("/assets/images/tiger.jpg", width: 50%)\n_Tiger!_')),
  )
}
