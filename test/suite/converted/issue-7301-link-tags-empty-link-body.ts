// Converted from test/suite/corpus/issue-7301-link-tags-empty-link-body.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, link, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(link('asf', inline(null, linebreak(), space, null))))
}
