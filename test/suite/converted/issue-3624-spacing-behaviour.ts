// Converted from test/suite/corpus/issue-3624-spacing-behaviour.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, context, counter, doc, em, h, heading, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock([
        h(em(1)),
        counter(heading).update(4),
        inline`Hello${space}`,
        context((ctx) => counter(heading).display(ctx)),
      ]),
    ),
  )
}
