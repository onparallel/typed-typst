// Converted from test/suite/corpus/issue-3696-equation-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, context, doc, inline, m, page, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show((it, ctx) =>
        context((ctx_2) =>
          codeBlock([set(page, { width: pt(150) }, { if: unsafeRaw.code<any>`target() == "paged"` })], it),
        ),
      ),
      set(text, { lang: 'he' }),
      inline`תהא סדרה ${unsafeRaw.math`a_n`}: ${unsafeRaw.math`[a_n: 1, 1/2, 1/3, dots]`}`,
    ),
  )
}
