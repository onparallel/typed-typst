// Converted from test/suite/corpus/math-equation-number-align-start.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  center,
  doc,
  end,
  inline,
  left,
  m,
  math,
  right,
  rtl,
  set,
  show,
  space,
  start,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(math.equation, { numbering: '(1)', numberAlign: start }),
    inline(unsafeRaw.math.block`a + b = c`),
    m.lines(
      show(math.equation, set(align, { alignment: center })),
      inline(
        unsafeRaw.math.block`a + b = c`,
        space,
        show(math.equation, set(align, { alignment: left })),
        space,
        unsafeRaw.math.block`a + b = c`,
        space,
        show(math.equation, set(align, { alignment: right })),
        space,
        unsafeRaw.math.block`a + b = c`,
      ),
    ),
    m.lines(
      set(text, { dir: rtl }),
      show(math.equation, set(align, { alignment: start })),
      inline(
        unsafeRaw.math.block`a + b = c`,
        space,
        show(math.equation, set(align, { alignment: end })),
        space,
        unsafeRaw.math.block`a + b = c`,
      ),
    ),
  )
}
