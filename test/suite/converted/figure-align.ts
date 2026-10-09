// Converted from test/suite/corpus/figure-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, figure, inline, linebreak, m, rect, set, show, start } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(figure, set(align, { alignment: start })),
      inline(figure({ caption: inline`Start-aligned` }, rect(inline`This is ${linebreak()} left`))),
    ),
  )
}
