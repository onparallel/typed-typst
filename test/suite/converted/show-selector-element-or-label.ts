// Converted from test/suite/corpus/show-selector-element-or-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  contentBlock,
  doc,
  emph,
  highlight,
  inline,
  label,
  labelled,
  m,
  selector,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(selector(strong).or(label('special')), highlight),
      inline`I am ${strong(inline`strong`)}, I am ${emph(inline`emphasized`)}, and I am ${contentBlock(inline(labelled('special', label('special'))))}.`,
    ),
  )
}
