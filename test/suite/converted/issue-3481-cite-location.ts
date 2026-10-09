// Converted from test/suite/corpus/issue-3481-cite-location.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  footnote,
  inline,
  label,
  linebreak,
  m,
  page,
  path,
  pt,
  ref,
  set,
  show,
  v,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { height: pt(60) }),
    inline(v(pt(10))),
    inline(footnote(inline`${ref(label('netwok'))} ${linebreak()} A`)),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
