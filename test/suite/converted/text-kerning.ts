// Converted from test/suite/corpus/text-kerning.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(text({ kerning: true }, inline`Tq`), space, linebreak(), space, text({ kerning: false }, inline`Tq`)),
  )
}
