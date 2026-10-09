// Converted from test/suite/corpus/linebreak-cite-punctuation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, page, path, pt, ref, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(162) }),
    inline`They can look for the details in ${ref(label('netwok'))}, which is the authoritative source.`,
    inline(bibliography(path('/assets/bib/works.bib'))),
  )
}
