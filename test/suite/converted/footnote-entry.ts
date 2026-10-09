// Converted from test/suite/corpus/footnote-entry.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, footnote, inline, m, pt, red, repeat, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(footnote, set(text, { fill: red })),
      show(footnote.entry, set(text, { style: 'italic', size: pt(8) })),
      set(footnote.entry, { indent: pt(0), gap: em(0.6), clearance: em(0.3), separator: repeat(inline`.`) }),
    ),
    inline`Beautiful footnotes. ${footnote(inline`Wonderful, aren't they?`)}`,
  )
}
