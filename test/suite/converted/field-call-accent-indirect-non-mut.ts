// Converted from test/suite/corpus/field-call-accent-indirect-non-mut.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, let_, sym, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [spDictDecl, spDict] = let_('sp-dict', { sym: symbol('p', ['push', sym.tilde]) })
  const [arrayDecl, array_2] = let_('array', data(['sym', 'sym']))
  return doc(
    inline(unsafeRaw.code<any>`{
  let sp-dict = (sym: symbol("p", ("push", sym.tilde)))
  let array = ("sym", "sym")
  let result = sp-dict
    .at(array.pop())
    .push(
      sp-dict.at(array.pop()).push(none)
    )
  test(result, sym.tilde(sym.tilde(none)))
  test(array, ())
}`),
  )
}
