// Converted from test/suite/corpus/super-underline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, pt, set, super_, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(underline, { stroke: pt(0.5), offset: em(0.15) }),
      set(super_, { typographic: false }),
      inline`${underline(inline`A${super_(inline`4`)}`)} B ${linebreak()} A${super_(inline(underline(inline`4`)))}
B ${linebreak()} A ${underline(super_(inline`4`))} B ${linebreak()} ${set(super_, { typographic: true })}
${underline(inline`A${super_(inline`4`)}`)} B ${linebreak()} A${super_(inline(underline(inline`4`)))}
B ${linebreak()} A ${underline(super_(inline`4`))} B`,
    ),
  )
}
