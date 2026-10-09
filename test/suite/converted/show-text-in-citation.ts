// Converted from test/suite/corpus/show-text-in-citation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, linebreak, m, path, red, ref, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show('A', 'B'), show('[', '('), show(']', ')'), show('[2]', set(text, { fill: red }))),
    inline`${ref(label('netwok'))} A ${linebreak()} ${ref(label('arrgh'))} B`,
    m.lines(show(bibliography, null), inline(bibliography(path('/assets/bib/works.bib')))),
  )
}
