// Converted from test/suite/corpus/issue-4618-bibliography-set-heading-level.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  heading,
  inline,
  label,
  m,
  path,
  ref,
  set,
  show,
  space,
  underline,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(where(heading, { level: 1 }), (it, ctx) => inline(space, underline(it.body), space)),
      show(bibliography, set(heading, { level: 2 })),
    ),
    m.lines(m.heading(1, 'Level 1'), m.heading(2, 'Level 2'), inline(ref(label('Zee04')))),
    inline(bibliography(path('/assets/bib/works_too.bib'))),
  )
}
