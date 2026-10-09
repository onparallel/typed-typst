// Converted from test/suite/corpus/issue-2531-cite-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, cite, doc, inline, label, m, path, red, ref, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(cite, set(text, { fill: red })),
      inline`A ${ref(label('netwok'))} ${ref(label('arrgh'))}. B ${cite(label('netwok'))} ${cite(label('arrgh'))}.`,
    ),
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
