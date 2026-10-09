// Converted from test/suite/corpus/math-equation-number-align-multiline-no-expand.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blocks,
  bottom,
  box,
  doc,
  fr,
  grid,
  horizon,
  inline,
  m,
  math,
  pt,
  set,
  silver,
  times,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(math.equation, { numbering: '1' }),
      inline(
        grid(
          { columns: times(4, [fr(1)]), columnGutter: times(3, [pt(2)]), rowGutter: pt(2), align: horizon },
          blocks(
            m.lines(
              set(math.equation, { numberAlign: horizon }),
              inline(box({ fill: silver }, unsafeRaw.math.block`- - \\ a \\ sum`)),
            ),
          ),
          blocks(
            m.lines(
              set(math.equation, { numberAlign: bottom }),
              inline(box({ fill: silver }, unsafeRaw.math.block`- - \\ a \\ sum`)),
            ),
          ),
          blocks(
            m.lines(
              set(math.equation, { numberAlign: horizon }),
              inline(box({ fill: silver }, unsafeRaw.math.block`sum \\ a \\ - -`)),
            ),
          ),
          blocks(
            m.lines(
              set(math.equation, { numberAlign: top }),
              inline(box({ fill: silver }, unsafeRaw.math.block`sum \\ a \\ - -`)),
            ),
          ),
          blocks(
            m.lines(
              set(math.equation, { numberAlign: horizon }),
              inline(box({ fill: silver }, unsafeRaw.math.block`- -`)),
            ),
          ),
          blocks(
            m.lines(set(math.equation, { numberAlign: top }), inline(box({ fill: silver }, unsafeRaw.math.block`- -`))),
          ),
          blocks(
            m.lines(
              set(math.equation, { numberAlign: bottom }),
              inline(box({ fill: silver }, unsafeRaw.math.block`- -`)),
            ),
          ),
        ),
      ),
    ),
  )
}
