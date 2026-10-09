// Converted from test/suite/corpus/baseline-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, box, cm, doc, em, image, inline, linebreak, path, pct, red } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hey ${box({ baseline: pct(40) }, image({ width: cm(1.5) }, path('/assets/images/tiger.jpg')))}
there!`,
    inline`Nice to ${box({ inset: em(1), stroke: red }, inline`meet`)} you.`,
    inline`How ${box({ baseline: { at: auto, shift: em(-1) } }, inline`are`)} you?`,
    inline`Doing ${box({ baseline: { at: auto, shift: em(1) } }, inline`just${linebreak()} fine`)}!`,
  )
}
