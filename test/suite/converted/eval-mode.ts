// Converted from test/suite/corpus/eval-mode.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      unsafeRaw.code<any>`eval("[_Hello" + " World!_]")`,
      space,
      linebreak(),
      space,
      unsafeRaw.code<any>`eval("_Hello" + " World!_", mode: "markup")`,
      space,
      linebreak(),
      space,
      unsafeRaw.code<any>`eval("RR_1^NN", mode: "math", scope: (RR: math.NN, NN: math.RR))`,
    ),
  )
}
