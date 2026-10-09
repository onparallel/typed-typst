// Converted from test/suite/corpus/issue-1597-cite-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  footnote,
  inline,
  label,
  m,
  page,
  path,
  pt,
  ref,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(60) }), 'A'),
    inline(
      footnote(inline(ref(label('netwok')))),
      space,
      show(bibliography, null),
      space,
      bibliography(path('/assets/bib/works.bib')),
    ),
  )
}
