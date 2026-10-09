// Converted from test/suite/corpus/footnote-duplicate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, let_, m, smartquote, space, table } from '../../../src/index.ts'

export default () => {
  const [langDecl, lang] = let_('lang', footnote(inline`Languages.`))
  const [numsDecl, nums] = let_('nums', footnote(inline`Numbers.`))
  return doc(
    m.lines(langDecl, numsDecl),
    m.terms(
      m.term([smartquote({ double: true }), 'Hello', smartquote({ double: true })], ['A word', space, lang]),
      m.term([smartquote({ double: true }), '123', smartquote({ double: true })], ['A number', space, nums]),
    ),
    m.list(
      m.item([smartquote({ double: true }), 'Hello', smartquote({ double: true }), space, lang]),
      m.item([smartquote({ double: true }), '123', smartquote({ double: true }), space, nums]),
    ),
    m.enum(
      m.item([smartquote({ double: true }), 'Hello', smartquote({ double: true }), space, lang]),
      m.item([smartquote({ double: true }), '123', smartquote({ double: true }), space, nums]),
    ),
    inline(table({ columns: 2 }, inline`Hello`, inline`A word ${lang}`, inline`123`, inline`A number ${nums}`)),
  )
}
