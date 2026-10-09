// Converted from test/suite/corpus/math-font-switch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [hereDecl, here_2] = let_('here', text.with({ font: 'Noto Sans' }))
  return doc(m.lines(hereDecl, inline`${unsafeRaw.math`#here[f] := #here[Hi there]`}.`))
}
