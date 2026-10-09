// Converted from test/suite/corpus/linebreak-manual-justified.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { justify: true }),
      inline`With a soft ${linebreak({ justify: true })} break you can force a break without ${linebreak({ justify: true })}
breaking justification. ${linebreak({ justify: false })} Nice!`,
    ),
  )
}
