// Converted from test/suite/corpus/bibliography-grid-par.typ by scripts/convert-suite.ts — do not edit.
import { bibliography, doc, highlight, inline, label, par, path, ref, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, highlight),
    inline(ref(label('Zee04')), space, ref(label('keshav2007read'))),
    inline(bibliography(path('/assets/bib/works_too.bib'))),
  )
}
