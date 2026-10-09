// Converted from test/suite/corpus/counter-display-matching-numbering-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, block, counter, doc, heading, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(heading, (it, ctx) => block(add(add(counter(heading).display(ctx), inline(space)), it.body))),
      inline(heading({ numbering: '1.' }, inline`One`), space, heading({ numbering: 'A.' }, inline`Two`)),
    ),
  )
}
