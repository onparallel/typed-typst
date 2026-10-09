// Converted from test/suite/corpus/alignment-axis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bottom,
  center,
  define,
  doc,
  end,
  horizon,
  inline,
  left,
  right,
  space,
  start,
  top,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(start.axis(), 'horizontal'),
      space,
      test(end.axis(), 'horizontal'),
      space,
      test(left.axis(), 'horizontal'),
      space,
      test(right.axis(), 'horizontal'),
      space,
      test(center.axis(), 'horizontal'),
      space,
      test(top.axis(), 'vertical'),
      space,
      test(bottom.axis(), 'vertical'),
      space,
      test(horizon.axis(), 'vertical'),
    ),
  )
}
