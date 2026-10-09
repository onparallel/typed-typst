// Converted from test/suite/corpus/bibliography-multiple-files.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  codeBlock,
  context,
  doc,
  heading,
  inline,
  label,
  m,
  page,
  path,
  pt,
  ref,
  set,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    show((it, ctx) =>
      context((ctx_2) =>
        codeBlock([set(page, { width: pt(200) }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
      ),
    ),
    m.lines(set(heading, { numbering: '1.' }), show(bibliography, set(heading, { numbering: '1.' }))),
    m.lines(
      m.heading(1, 'Multiple Bibs'),
      inline`Now we have multiple bibliographies containing ${ref(label('glacier-melt'))} ${ref(label('keshav2007read'))}
${bibliography([path('/assets/bib/works.bib'), path('/assets/bib/works_too.bib')])}`,
    ),
  )
}
