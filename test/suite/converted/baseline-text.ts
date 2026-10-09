// Converted from test/suite/corpus/baseline-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, circle, doc, em, inline, pt, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hi ${text({ size: em(1.5) }, inline`You`)}, ${text({ size: em(0.75) }, inline`how are you?`)}`,
    inline`Our cockatoo was one of the ${text({ baseline: em(-0.2) }, inline`${box(circle({ radius: pt(2) }))} first`)}
${text({ baseline: em(0.2) }, inline`birds ${box(circle({ radius: pt(2) }))}`)} that ever learned
to mimic a human voice.`,
  )
}
