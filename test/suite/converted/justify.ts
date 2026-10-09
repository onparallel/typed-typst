// Converted from test/suite/corpus/justify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(180) }),
      set(par, { justify: true, firstLineIndent: pt(14), spacing: pt(5), leading: pt(5) }),
    ),
    inline`This text is justified, meaning that spaces are stretched so that the text forms a "block" with
flush edges at both sides.`,
    'First line indents and hyphenation play nicely with justified text.',
  )
}
