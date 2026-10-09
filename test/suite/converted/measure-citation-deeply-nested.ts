// Converted from test/suite/corpus/measure-citation-deeply-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, context, doc, inline, m, path, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`context {
  let it = box(pad(x: 5pt, grid(stack[@netwok])))
  [#measure(it).width]
  it
}`),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
