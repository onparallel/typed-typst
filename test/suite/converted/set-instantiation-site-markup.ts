// Converted from test/suite/corpus/set-instantiation-site-markup.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, contentBlock, doc, inline, let_, list, m, pt, set } from '../../../src/index.ts'

export default () => {
  const [fruitDecl, fruit] = let_(
    'fruit',
    blocks(m.lines(m.list(m.item(['Apple']), m.item(['Orange'])), inline(list({ bodyIndent: pt(20) }, inline`Pear`)))),
  )
  return doc(
    fruitDecl,
    m.lines(
      m.list(m.item(['Fruit'])),
      inline(contentBlock(blocks(m.lines(set(list, { indent: pt(10) }), inline(fruit))))),
      m.list(m.item(['No more fruit'])),
    ),
  )
}
