// Converted from test/suite/corpus/issue-7301-link-tags-empty-link-body-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline(footnote({ numbering: (it) => '' }, inline`asdf`)))
}
