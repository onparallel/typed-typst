// Converted from test/suite/corpus/deco-tags-script-custom-baseline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, pt, set, space, sub, super_ } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(sub, { baseline: pt(2.5) }),
      set(super_, { baseline: pt(-9.5) }),
      inline(sub(inline`sub`), space, super_(inline`super`)),
    ),
  )
}
