// Converted from test/suite/corpus/list-indent-bracket-nesting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, call, codeBlock, define, doc, inline, let_, list, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [indentedDecl, indented] = let_(
    'indented',
    codeBlock([
      blocks(m.list(m.item(['indented']), m.item(['less']))),
      blocks(
        m.list(m.item(['indented']), m.item(['same']), m.item(m.lines('then less', m.list(m.item(['then same']))))),
      ),
      blocks(
        m.list(m.item(m.lines('indented', m.list(m.item(['more'])))), m.item(['then same']), m.item(['then less'])),
      ),
    ]),
  )
  const [itemDecl, item] = let_('item', list.item)
  const [manualDecl, manual] = let_(
    'manual',
    codeBlock([
      codeBlock([call(item, inline`indented`), inline(space), call(item, inline`less`), inline(space)]),
      codeBlock([
        call(item, inline`indented`),
        inline(space),
        call(item, inline`same`),
        inline(space),
        call(item, inline`then less ${codeBlock([], call(item, inline`then same`))}`),
        inline(space),
      ]),
      codeBlock([
        call(item, inline`indented ${codeBlock([], call(item, inline`more`))}`),
        inline(space),
        call(item, inline`then same`),
        inline(space),
        call(item, inline`then less`),
        inline(space),
      ]),
    ]),
  )
  return doc(indentedDecl, m.lines(itemDecl, manualDecl), inline(test(indented, manual)))
}
