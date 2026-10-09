// Converted from test/suite/corpus/lorem-pars.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, codeBlock, doc, inline, let_, lorem, pt, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [sentencesDecl, sentences] = let_(
    'sentences',
    lorem(59)
      .split('.')
      .filter(unsafeRaw.code<any>`s => s != ""`)
      .map((s) => add(s, '.')),
  )
  const [usedDecl, used] = let_('used', 0)
  return doc(
    set(text, { size: pt(8) }),
    inline(
      codeBlock([
        sentencesDecl,
        usedDecl,
        unsafeRaw.code<any>`for s in sentences {
    if used < 2 {
      used += 1
    } else {
      parbreak()
      used = 0
    }
    s.trim()
    [ ]
  }`,
      ]),
    ),
  )
}
