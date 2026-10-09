// Converted from test/suite/corpus/block-clip-svg-glyphs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, black, box, doc, em, inline, pt } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Emoji: ${box({ height: em(0.5), stroke: add(pt(1), black) }, inline`🐪, 🌋, 🏞`)}`,
    inline`Emoji: ${box({ height: em(0.5), clip: true, stroke: add(pt(1), black) }, inline`🐪, 🌋, 🏞`)}`,
  )
}
