// Converted from test/suite/corpus/show-rule-in-function.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  blocks,
  blue,
  codeBlock,
  define,
  doc,
  fr,
  inline,
  list,
  ltr,
  m,
  pct,
  red,
  scale,
  show,
  stack,
  text,
} from '../../../src/index.ts'

export default () => {
  const starwars = define('starwars')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [
          show(list, (it, ctx) =>
            block(
              codeBlock(
                [],
                stack({ dir: ltr }, text({ fill: red }, it), fr(1), scale({ x: pct(-100) }, text({ fill: blue }, it))),
              ),
            ),
          ),
        ],
        p['body'],
      ),
    )
  return doc(
    starwars.decl,
    m.list(m.item(['Normal list'])),
    inline(starwars(blocks(m.list(m.item(['Star']), m.item(['Wars']), m.item(['List']))))),
    m.list(m.item(['Normal list'])),
  )
}
