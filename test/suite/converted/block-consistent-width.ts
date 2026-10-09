// Converted from test/suite/corpus/block-consistent-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bibliography,
  block,
  colbreak,
  doc,
  inline,
  label,
  m,
  path,
  pt,
  ref,
  right,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block(
        { stroke: pt(1), inset: pt(5) },
        inline`${space}${align(right, inline`Hi`)} ${colbreak()} Hello ${ref(label('netwok'))}${space}`,
      ),
    ),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
