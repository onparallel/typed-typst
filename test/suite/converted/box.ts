// Converted from test/suite/corpus/box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A ${box(inline`B ${linebreak()} C`)} D.`,
    inline`Spaced ${linebreak()} ${box({ height: cm(0.5) })} ${linebreak()} Apart`,
  )
}
