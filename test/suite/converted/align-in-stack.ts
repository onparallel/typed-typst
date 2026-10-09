// Converted from test/suite/corpus/align-in-stack.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  bottom,
  center,
  doc,
  eastern,
  external,
  horizon,
  inline,
  left,
  ltr,
  m,
  page,
  pct,
  pt,
  rect,
  right,
  set,
  space,
  square,
  stack,
} from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    m.lines(
      set(page, { height: pt(100) }),
      inline(
        stack(
          { dir: ltr },
          align(left, square({ size: pt(15), fill: eastern })),
          align(center, square({ size: pt(20), fill: eastern })),
          align(right, square({ size: pt(15), fill: eastern })),
        ),
        space,
        align(add(center, horizon), rect({ fill: eastern, height: pt(10) })),
        space,
        align(
          bottom,
          stack(
            align(center, rect({ fill: conifer, height: pt(10) })),
            rect({ fill: forest, height: pt(10), width: pct(100) }),
          ),
        ),
      ),
    ),
  )
}
