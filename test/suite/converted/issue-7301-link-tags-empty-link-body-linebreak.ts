// Converted from test/suite/corpus/issue-7301-link-tags-empty-link-body-linebreak.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, linebreak, link } from '../../../src/index.ts'

export default () => {
  return doc(inline(link('asf', linebreak())))
}
