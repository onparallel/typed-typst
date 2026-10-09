// Converted from test/suite/corpus/hyphenate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, grid, inline, linebreak, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { hyphenate: true }),
      set(page, { width: auto }),
      inline(
        grid(
          { columns: [pt(50), pt(50)] },
          inline`Warm welcomes to Typst.`,
          text({ lang: 'el' }, inline`διαμερίσματα. ${linebreak()} λατρευτός`),
        ),
      ),
    ),
  )
}
