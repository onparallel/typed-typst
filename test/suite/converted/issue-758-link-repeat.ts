// Converted from test/suite/corpus/issue-758-link-repeat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, block, box, doc, fr, inline, let_, link, m, pt, repeat, space } from '../../../src/index.ts'

export default () => {
  const [urlDecl, url] = let_('url', 'https://typst.org/')
  const [bodyDecl, body] = let_('body', inline`Hello ${box({ width: fr(1) }, repeat(inline`.`))}`)
  return doc(
    m.lines(urlDecl, bodyDecl),
    inline`Inline: ${link(url, body)}`,
    inline(link(url, block({ inset: pt(4) }, add(inline`Block:${space}`, body)))),
  )
}
