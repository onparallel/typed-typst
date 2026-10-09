// Converted from test/suite/corpus/set-shadowed-builtin-with-std.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [textDecl, text_2] = let_('text', 'bar')
  return doc(m.lines(textDecl, unsafeRaw.markup`#set std.text(fill: red)`, inline(text_2)))
}
