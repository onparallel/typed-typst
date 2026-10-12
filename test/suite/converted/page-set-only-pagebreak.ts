// Converted from test/suite/corpus/page-set-only-pagebreak.typ by scripts/convert-suite.ts — do not edit.
import { doc, external, inline, m, page, pagebreak, set } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(m.lines(set(page, { fill: forest }), inline(pagebreak())))
}
