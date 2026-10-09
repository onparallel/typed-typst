// Converted from test/suite/corpus/divider-show-centered.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  block,
  center,
  divider,
  doc,
  em,
  inline,
  line,
  m,
  page,
  pct,
  pt,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      show(divider, block({ width: pct(100), spacing: em(1) }, align(center, line({ length: pct(50) })))),
      inline`Before ${divider()} After`,
    ),
  )
}
