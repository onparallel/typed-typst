// Converted from test/suite/corpus/math-accent-show-rule-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  define,
  doc,
  inline,
  m,
  math,
  red,
  set,
  show,
  sym,
  symbol,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const rhat = define('rhat')
    .pos('x', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  show "\\u{0302}": set text(red)
  math.hat(x)
}`,
    )
  return doc(
    m.lines(
      rhat.decl,
      inline`${unsafeRaw.math`hat(x)`}, ${unsafeRaw.math`rhat(x)`}, ${unsafeRaw.math`hat(rhat(x))`}, ${unsafeRaw.math`rhat(hat(x))`},
x${symbol('\u{302}')}`,
    ),
  )
}
