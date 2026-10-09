// Converted from test/suite/corpus/issue-5503-cite-in-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, bibliography, doc, inline, label, m, path, ref, right, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(align(right, inline(ref(label('netwok')))), space, align(right, inline`b`)),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
