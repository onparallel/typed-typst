// Converted from test/suite/corpus/issue-5503-cite-group-interrupted-by-par-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bibliography,
  doc,
  em,
  inline,
  label,
  m,
  par,
  path,
  ref,
  right,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      ref(label('netwok')),
      space,
      ref(label('arrgh')),
      space,
      par({ leading: em(5) }, inline(ref(label('netwok')))),
      space,
      par(inline(ref(label('arrgh')))),
      space,
      ref(label('netwok')),
      space,
      ref(label('arrgh')),
      space,
      align(right, inline(ref(label('netwok')))),
      space,
      ref(label('arrgh')),
    ),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
