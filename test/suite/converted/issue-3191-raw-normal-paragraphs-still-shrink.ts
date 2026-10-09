// Converted from test/suite/corpus/issue-3191-raw-normal-paragraphs-still-shrink.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, sym } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${sym.space.nobreak}${sym.space.nobreak}${sym.space.nobreak}${sym.space.nobreak}No shrinking
here`,
    inline`${sym.space.nobreak}${sym.space.nobreak}${sym.space.nobreak}${sym.space.nobreak}The${sym.space.nobreak}spaces${sym.space.nobreak}on${sym.space.nobreak}this${sym.space.nobreak}line${sym.space.nobreak}shrink`,
  )
}
