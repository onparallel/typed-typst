// Converted from test/suite/corpus/counter-display-matching-numbering-full.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  data,
  doc,
  figure,
  footnote,
  heading,
  inline,
  let_,
  m,
  math,
  selector,
  set,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [funcsDecl, funcs] = let_('funcs', data([heading, figure, math.equation, footnote]))
  return doc(
    m.lines(set(heading, { numbering: '(i)' }), set(math.equation, { block: true })),
    m.lines(
      funcsDecl,
      unsafeRaw.markup`#show selector.or(..funcs): it => counter(it.func()).display()`,
      inline(unsafeRaw.code<any>`for f in funcs {
  block(f(numbering: "a)")[])
}`),
    ),
  )
}
