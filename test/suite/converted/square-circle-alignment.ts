// Converted from test/suite/corpus/square-circle-alignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  bottom,
  center,
  circle,
  deg,
  doc,
  em,
  horizon,
  inline,
  ltr,
  m,
  pt,
  rotate,
  set,
  space,
  square,
  stack,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(8) }),
      inline(
        stack(
          { dir: ltr, spacing: em(0.5) },
          square(
            { inset: pt(4) },
            inline`${space}Hey there, ${align(add(center, bottom), rotate(deg(180), inline`you!`))}${space}`,
          ),
          circle(align(add(center, horizon), inline`Hey.`)),
        ),
      ),
    ),
  )
}
