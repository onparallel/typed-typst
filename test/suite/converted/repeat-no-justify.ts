// Converted from test/suite/corpus/repeat-no-justify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, fr, inline, m, rect, repeat, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(repeat, { justify: false }),
      inline`A${box({ width: fr(1) }, repeat({ gap: em(1) }, rect({ width: em(2), height: em(1) })))}B`,
    ),
  )
}
