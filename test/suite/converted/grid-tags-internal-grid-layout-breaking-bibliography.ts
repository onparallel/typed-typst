// Converted from test/suite/corpus/grid-tags-internal-grid-layout-breaking-bibliography.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, cite, doc, inline, label, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(140) }),
    inline(cite(label('DBLP:books/lib/Knuth86a'))),
    inline(bibliography({ style: 'ieee' }, path('/assets/bib/works.bib'))),
  )
}
