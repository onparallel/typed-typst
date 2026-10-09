// Converted from test/suite/corpus/cite-form.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  cite,
  codeBlock,
  context,
  doc,
  inline,
  label,
  page,
  path,
  pt,
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
    inline`Nothing: ${cite({ form: null }, label('arrgh'))}`,
    inline`${cite({ form: 'prose' }, label('netwok'))} say stuff.`,
    inline(bibliography({ style: 'apa' }, path('/assets/bib/works.bib'))),
  )
}
