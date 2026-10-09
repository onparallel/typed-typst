// Converted from test/suite/corpus/text-features.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${text({ features: ['smcp'] }, inline`Smcp`)} ${linebreak()} fi vs. ${text({ features: { liga: 0 } }, inline`No fi`)}`,
  )
}
