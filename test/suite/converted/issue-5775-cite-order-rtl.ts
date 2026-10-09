// Converted from test/suite/corpus/issue-5775-cite-order-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, m, page, path, pt, ref, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(300) }),
      set(text, { font: ['Libertinus Serif', 'Noto Sans Arabic'] }),
      inline`${ref(label('netwok'))} aaa این است ${ref(label('tolkien54'))} و این یکی هست ${ref(label('arrgh'))}`,
    ),
    inline(bibliography(path('/assets/bib/works.bib'))),
  )
}
