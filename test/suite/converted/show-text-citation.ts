// Converted from test/suite/corpus/show-text-citation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, path, ref, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show('hey', inline(ref(label('arrgh')))), inline`${ref(label('netwok'))} hey`),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
