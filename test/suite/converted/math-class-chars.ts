// Converted from test/suite/corpus/math-class-chars.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`a class("normal", +) b \\
  a class("binary", .) b \\
  lr(class("opening", \\/) a/b class("closing", \\\\)) \\
  { x class("fence", \\;) x > 0} \\
  a class("large", \\/) b \\
  a class("punctuation", :) b \\
  a class("relation", !) b \\
  a + class("unary", times) b \\
  class("vary", :) a class("vary", :) b`),
  )
}
