// Converted from test/suite/corpus/cite-grouping-and-ordering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, path, ref, show } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${ref(label('mcintosh_anxiety'))} ${ref(label('psychology25'))} ${ref(label('netwok'))} ${ref(label('issue201'))}
${ref(label('arrgh'))} ${ref(label('quark'))} ${ref(label('distress'))}, ${ref(label('glacier-melt'))}
${ref(label('issue201'))} ${ref(label('tolkien54'))} ${ref(label('sharing'))} ${ref(label('restful'))}`,
    m.lines(
      show(bibliography, null),
      inline(bibliography({ style: 'american-physics-society' }, path('/assets/bib/works.bib'))),
    ),
  )
}
