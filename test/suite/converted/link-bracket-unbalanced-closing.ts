// Converted from test/suite/corpus/link-bracket-unbalanced-closing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, linebreak, link } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${contentBlock(inline(link('https://example.com/')))} ${linebreak()} ${link('https://example.com/')})`,
  )
}
