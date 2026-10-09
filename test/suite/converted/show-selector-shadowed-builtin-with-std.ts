// Converted from test/suite/corpus/show-selector-shadowed-builtin-with-std.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [headingDecl, heading_2] = let_('heading', 'bar')
  return doc(
    m.lines(headingDecl, unsafeRaw.markup`#show std.heading: it => text(fill: red, it)`, m.heading(1, heading_2)),
  )
}
