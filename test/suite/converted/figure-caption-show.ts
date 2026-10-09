// Converted from test/suite/corpus/figure-caption-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, figure, inline, show } from '../../../src/index.ts'

export default () => {
  return doc(show(figure.caption, emph), inline(figure({ caption: inline`Italicized` }, inline`Not italicized`)))
}
