// Converted from test/suite/corpus/smartquote-nesting-twice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, emph, inline } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`When you said ${emph(inline`that "he`)} surely meant that 'she intended to say "I'm sorry"'",
I was quite confused.`,
    inline`'${box(inline`box`)}'`,
  )
}
