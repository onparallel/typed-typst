// Converted from test/suite/corpus/table-header-citation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, page, path, pt, ref, set, show, table } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline(table(table.header(inline(ref(label('netwok')))), inline`A`, inline`A`)),
    ),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
