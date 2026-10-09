// Converted from test/suite/corpus/bibliography-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  cite,
  codeBlock,
  context,
  doc,
  inline,
  label,
  m,
  page,
  path,
  pt,
  ref,
  set,
  show,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    show((it, ctx) =>
      context((ctx_2) =>
        codeBlock([set(page, { width: pt(200) }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
      ),
    ),
    m.lines(
      m.heading(1, 'Details'),
      inline`See also ${ref(label('arrgh'))} ${cite({ supplement: inline`p.${sym.space.nobreak}22` }, label('distress'))},
${ref({ supplement: inline`p.${sym.space.nobreak}4` }, label('arrgh'))}, and ${ref({ supplement: inline`p.${sym.space.nobreak}5` }, label('distress'))}.
${bibliography(path('/assets/bib/works.bib'))}`,
    ),
  )
}
