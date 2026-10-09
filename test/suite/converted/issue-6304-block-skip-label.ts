// Converted from test/suite/corpus/issue-6304-block-skip-label.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, label, labelled, m, page, pt, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(60) }),
      inline`A ${block({ sticky: true }, inline`B`)} ${labelled([block(inline`C`), space], label('label'))}`,
    ),
  )
}
