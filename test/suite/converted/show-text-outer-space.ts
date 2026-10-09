// Converted from test/suite/corpus/show-text-outer-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, h, inline, linebreak, m, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('a\n', set(text, { fill: blue })),
      show('b\n ', set(text, { fill: blue })),
      show(' c ', set(text, { fill: blue })),
      inline`a ${linebreak()} ${h({ weak: true }, pt(0))} b ${linebreak()} ${h({ weak: true }, pt(0))} ${unsafeRaw.math`x`}
c ${unsafeRaw.math`y`}`,
    ),
  )
}
