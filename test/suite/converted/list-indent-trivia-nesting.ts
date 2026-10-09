// Converted from test/suite/corpus/list-indent-trivia-nesting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, call, codeBlock, define, doc, inline, let_, list, m, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [indentedDecl, indented] = let_(
    'indented',
    blocks(
      m.list(
        m.item(
          m.lines(
            'a',
            m.list(
              m.item(['b']),
              m.item(m.lines('c', m.list(m.item(['d'])))),
              m.item(m.lines('e', m.list(m.item(['f']), m.item(['g'])))),
            ),
          ),
        ),
      ),
    ),
  )
  const [itemDecl, item] = let_('item', list.item)
  const [manualDecl, manual] = let_(
    'manual',
    codeBlock([
      inline(space),
      call(
        item,
        codeBlock([
          inline`a`,
          inline(space),
          call(item, inline`b`),
          inline(space),
          inline(space),
          call(item, codeBlock([inline`c`, inline(space), inline(space), call(item, inline`d`)])),
          inline(space),
          call(
            item,
            codeBlock([
              inline`e`,
              inline(space),
              inline(space),
              call(item, inline`f`),
              inline(space),
              inline(space),
              call(item, inline`g`),
            ]),
          ),
        ]),
      ),
      inline(space),
    ]),
  )
  return doc(indentedDecl, m.lines(itemDecl, manualDecl), inline(test(indented, manual)))
}
