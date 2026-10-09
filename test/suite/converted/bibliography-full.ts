// Converted from test/suite/corpus/bibliography-full.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, bibliography, doc, inline, m, page, path, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { paper: 'a6', height: auto }),
      inline(bibliography({ full: true }, path('/assets/bib/works_too.bib'))),
    ),
  )
}
