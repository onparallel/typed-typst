// Converted from test/suite/corpus/issue-2419-justify-hanging-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, inline, lorem, m, par, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(par, { hangingIndent: cm(2.5), justify: true }), inline(lorem(5))))
}
