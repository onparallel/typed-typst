// Converted from test/suite/corpus/cite-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, pagebreak, path, ref, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hello ${ref(label('netwok'))} And again: ${ref(label('netwok'))}`,
    inline(pagebreak(), space, bibliography({ style: 'chicago-shortened-notes' }, path('/assets/bib/works.bib'))),
  )
}
