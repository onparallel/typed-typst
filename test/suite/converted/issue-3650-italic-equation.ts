// Converted from test/suite/corpus/issue-3650-italic-equation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, linebreak, space, strong, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      emph(inline`abc ${unsafeRaw.math`sin(x) "abc"`}`),
      space,
      linebreak(),
      space,
      unsafeRaw.math`italic(sin(x) "abc" #box[abc])`,
      space,
      linebreak(),
      space,
      strong(inline`abc ${unsafeRaw.math`sin(x) "abc"`}`),
      space,
      linebreak(),
      space,
      unsafeRaw.math`bold(sin(x) "abc" #box[abc])`,
      space,
      linebreak(),
    ),
  )
}
