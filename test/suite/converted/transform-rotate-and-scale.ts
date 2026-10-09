// Converted from test/suite/corpus/transform-rotate-and-scale.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  center,
  deg,
  doc,
  horizon,
  image,
  inline,
  m,
  page,
  path,
  pct,
  pt,
  rotate,
  scale,
  set,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(80) }),
      inline(align(add(center, horizon), rotate(deg(20), scale(pct(70), image(path('/assets/images/tiger.jpg')))))),
    ),
  )
}
