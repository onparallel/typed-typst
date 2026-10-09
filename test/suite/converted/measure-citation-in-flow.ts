// Converted from test/suite/corpus/measure-citation-in-flow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, context, doc, inline, m, path, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.code<any>`context {
  let it = [@netwok]
  let size = measure(it)
  place(line(length: size.width))
  v(1mm)
  it + [ is cited]
}`),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
