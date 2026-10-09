// Converted from test/suite/corpus/get-rule-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  codeBlock,
  contentBlock,
  context,
  define,
  doc,
  inline,
  m,
  pt,
  rect,
  red,
  set,
  space,
  stroke,
  type,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(rect, { stroke: red }),
      inline(
        context((ctx) =>
          codeBlock([
            test(type(unsafeRaw.code<any>`rect.stroke`), stroke),
            test(unsafeRaw.code<any>`rect.stroke.paint`, red),
          ]),
        ),
        space,
        contentBlock(
          blocks(
            m.lines(
              set(rect, { stroke: pt(4) }),
              inline(context((ctx_2) => test(unsafeRaw.code<any>`rect.stroke`, add(pt(4), red)))),
            ),
          ),
        ),
        space,
        context((ctx_3) => test(unsafeRaw.code<any>`rect.stroke`, stroke({ paint: red }))),
      ),
    ),
  )
}
