// Converted from test/suite/corpus/par-semantic-tag.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  block,
  center,
  doc,
  highlight,
  inline,
  label,
  labelled,
  m,
  metadata,
  par,
  pct,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(par, highlight),
      inline(
        block(
          inline`${space}${labelled([metadata(null), space], label('hi1'))} A ${labelled([metadata(null), space], label('hi2'))}${space}`,
        ),
      ),
    ),
    inline(
      block({ width: pct(100) }, add(metadata(null), align(center, inline`A`))),
      space,
      block({ width: pct(100) }, add(align(center, inline`A`), metadata(null))),
    ),
  )
}
