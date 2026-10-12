// Converted from test/suite/corpus/outline-par.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, highlight, inline, m, outline, par, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, highlight),
    inline(outline()),
    m.lines(heading({ depth: 1 }, inline('A')), heading({ depth: 1 }, inline('B')), heading({ depth: 1 }, inline('C'))),
  )
}
