// Converted from test/suite/corpus/show-text-citation-smartquote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, path, ref, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('hey "', inline(ref(label('arrgh')))),
      show('dis', inline(ref(label('distress')))),
      inline`${ref(label('netwok'))} hey " dis`,
    ),
    m.lines(
      show(bibliography, null),
      inline(bibliography({ style: 'american-physics-society' }, path('/assets/bib/works.bib'))),
    ),
  )
}
