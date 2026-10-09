// Converted from test/suite/corpus/repeat-gap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, fr, inline, rect, repeat } from '../../../src/index.ts'

export default () => {
  return doc(inline`A${box({ width: fr(1) }, repeat({ gap: em(1) }, rect({ width: em(2), height: em(1) })))}B`)
}
