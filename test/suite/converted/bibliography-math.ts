// Converted from test/suite/corpus/bibliography-math.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, page, path, pt, ref, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(200) }),
    inline(ref(label('Zee04')), space, bibliography({ style: 'mla' }, path('/assets/bib/works_too.bib'))),
  )
}
