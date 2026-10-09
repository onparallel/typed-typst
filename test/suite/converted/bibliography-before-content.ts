// Converted from test/suite/corpus/bibliography-before-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  cite,
  doc,
  inline,
  label,
  line,
  m,
  page,
  path,
  pct,
  pt,
  ref,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      inline(
        bibliography({ title: inline`Works to be cited`, style: 'chicago-author-date' }, path('/assets/bib/works.bib')),
        space,
        line({ length: pct(100) }),
      ),
    ),
    inline`As described by ${cite({ form: 'prose' }, label('netwok'))}, the net-work is a creature of its
own. This is close to piratery! ${ref(label('arrgh'))} And quark! ${ref(label('quark'))}`,
  )
}
