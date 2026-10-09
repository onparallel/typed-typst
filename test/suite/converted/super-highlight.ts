// Converted from test/suite/corpus/super-highlight.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, highlight, inline, linebreak, m, set, super_ } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(super_, { typographic: false }),
      inline`${highlight(inline`A${super_(inline`4`)}`)} B ${linebreak()} A${super_(inline(highlight(inline`4`)))}
B ${linebreak()} A${super_(highlight(inline`4`))} ${linebreak()} ${set(super_, { typographic: true })}
${highlight(inline`A${super_(inline`4`)}`)} B ${linebreak()} A${super_(inline(highlight(inline`4`)))}
B ${linebreak()} A${super_(highlight(inline`4`))}`,
    ),
  )
}
