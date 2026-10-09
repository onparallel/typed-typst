// Converted from test/suite/corpus/issue-3191-raw-justify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, par, raw, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(raw({ block: true }, 'a b c --------------------')),
    m.lines(show(raw, set(par, { justify: true })), inline(raw({ block: true }, 'a b c --------------------'))),
  )
}
