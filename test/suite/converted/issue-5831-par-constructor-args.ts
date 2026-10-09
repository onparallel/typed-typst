// Converted from test/suite/corpus/issue-5831-par-constructor-args.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, par, pt, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A ${par({ leading: pt(2), spacing: pt(20), justify: true, linebreaks: 'simple', firstLineIndent: { amount: em(1), all: true }, hangingIndent: pt(5) }, inline`${space}The par function has a constructor and justification.${space}`)}`,
  )
}
