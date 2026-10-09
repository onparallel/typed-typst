// Converted from test/suite/corpus/issue-6062-justify-cjk-latin-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { justify: true }),
      inline`あaあ${linebreak({ justify: true })}
ああaa aaああ${linebreak({ justify: true })}`,
    ),
  )
}
