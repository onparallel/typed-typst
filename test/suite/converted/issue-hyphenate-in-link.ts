// Converted from test/suite/corpus/issue-hyphenate-in-link.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, par, set } from '../../../src/index.ts'

export default () => {
  return doc(set(par, { justify: true }), inline(data('http://creativecommons.org/licenses/by-nc-sa/4.0/')))
}
