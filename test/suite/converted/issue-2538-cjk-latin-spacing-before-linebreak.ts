// Converted from test/suite/corpus/issue-2538-cjk-latin-spacing-before-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { cjkLatinSpacing: auto }),
    'abc字',
    inline`abc字${linebreak()}`,
    inline`abc字${linebreak()}
母`,
    inline`abc字${linebreak()}
母`,
  )
}
