// Converted from test/suite/corpus/math-accent-show-rule-4.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, inline, m, pt, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('̂', box({ baseline: pt(-5) }, text({ size: em(0.5) }, unsafeRaw.code<any>`sym.diamond.small`))),
      inline`${unsafeRaw.math`hat(X)`}, ${unsafeRaw.math`hat(x)`}`,
    ),
  )
}
