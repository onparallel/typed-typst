// Converted from test/suite/corpus/bibliography-ordering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, page, path, pt, ref, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(300) }),
    inline(ref(label('mcintosh_anxiety')), space, ref(label('psychology25'))),
    inline(bibliography(path('/assets/bib/works.bib'))),
  )
}
