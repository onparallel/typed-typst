// Converted from test/suite/corpus/label-after-parbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, label, labelled, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    show(label('hide'), null),
    inline(labelled([emph(inline`Hidden`), space], label('hide'))),
    inline(labelled(emph(inline`Hidden`), label('hide'))),
    inline(emph(inline`Visible`)),
  )
}
