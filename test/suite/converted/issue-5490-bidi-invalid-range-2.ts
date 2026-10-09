// Converted from test/suite/corpus/issue-5490-bidi-invalid-range-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, fr, inline, space, table, text } from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    inline(
      table(
        { columns: [fr(1), fr(1)] },
        lines(6),
        inline(
          space,
          text(
            { lang: 'ar', font: ['Libertinus Serif', 'Noto Sans Arabic'] },
            inline`مجرد نص مؤقت لأغراض العرض التوضيحي.${space}`,
          ),
          space,
          text({ lang: 'ar' }, inline`سلام`),
          space,
        ),
      ),
    ),
  )
}
