// Converted from test/suite/corpus/grid-stroke-field-in-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blue,
  codeBlock,
  define,
  doc,
  grid,
  inline,
  m,
  pt,
  red,
  set,
  show,
  stroke,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(grid.cell, { stroke: { x: pt(4) } }),
      set(grid.cell, { stroke: { x: blue } }),
      show(grid.cell, (it, ctx) =>
        codeBlock([
          test(it.stroke, {
            left: stroke({ paint: blue, thickness: pt(4), dash: 'loosely-dotted' }),
            right: add(blue, pt(4)),
            top: stroke({ thickness: pt(1) }),
            bottom: null,
          }),
          it,
        ]),
      ),
      inline(
        grid(
          { stroke: { left: { dash: 'loosely-dotted' } }, inset: pt(5) },
          grid.hline({ stroke: red }),
          grid.cell({ stroke: { top: pt(1) } }, inline`a`),
          grid.vline({ stroke: yellow }),
        ),
      ),
    ),
  )
}
