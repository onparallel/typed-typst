// Converted from test/suite/corpus/link-tags-with-parbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link, parbreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`Look ${link('https://github.com/typst/typst', inline`this ${parbreak()} thing`)}.`)
}
