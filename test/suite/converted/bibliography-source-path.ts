// Converted from test/suite/corpus/bibliography-source-path.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, heading, inline, m, path, show } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(show(heading, null), inline(bibliography(path('/assets/bib/works_too.bib')))))
}
