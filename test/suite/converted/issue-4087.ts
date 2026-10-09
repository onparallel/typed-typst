// Converted from test/suite/corpus/issue-4087.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, h, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`This is the first line ${h({ weak: true }, cm(2))} A new line`,
    inline`This is the first line ${h({ weak: false }, cm(2))} A new line`,
    inline`This is the first line ${linebreak()} ${h({ weak: true }, cm(2))} A new line`,
    inline`This is the first line ${linebreak()} ${h({ weak: false }, cm(2))} A new line`,
  )
}
