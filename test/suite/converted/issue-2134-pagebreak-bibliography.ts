// Converted from test/suite/corpus/issue-2134-pagebreak-bibliography.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, pagebreak, path, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(pagebreak({ weak: true }), space, bibliography(path('/assets/bib/works.bib'))))
}
