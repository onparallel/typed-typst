// Converted from test/suite/corpus/math-accent-show-rule-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, m, set, show, symbol, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('̂', set(text, { font: 'XITS Math', fill: blue })),
      inline`${unsafeRaw.math`hat(x)`}, ${unsafeRaw.math`hat(hat(x))`}, x${symbol('\u{302}')}`,
    ),
  )
}
