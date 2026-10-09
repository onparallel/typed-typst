// Converted from test/suite/corpus/math-stretch-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`P -> Q stretch(->, size: #200%) R \\
  R stretch(->) S stretch(->, size: #50%)^"epimorphism" T`),
  )
}
