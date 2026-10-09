// Converted from test/suite/corpus/ops-binary-decimal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, decimal, define, div, doc, inline, minus, space, times } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(add(decimal('40.1'), decimal('13.2')), decimal('53.3')),
      space,
      test(add(decimal('12.34330'), decimal('45.96670')), decimal('58.31000')),
      space,
      test(
        add(decimal('451113.111111111111111111111'), decimal('23.222222222222222222324')),
        decimal('451136.333333333333333333435'),
      ),
    ),
    inline(
      test(minus(decimal('40.1'), decimal('13.2')), decimal('26.9')),
      space,
      test(minus(decimal('12.34330'), decimal('45.96670')), decimal('-33.62340')),
      space,
      test(
        minus(decimal('1234.111111111111111111111'), decimal('0.222222222222222222324')),
        decimal('1233.888888888888888888787'),
      ),
    ),
    inline(
      test(times(decimal('40.5'), decimal('9.5')), decimal('384.75')),
      space,
      test(
        times(decimal('-0.1234567890123456789012345678'), decimal('-2.0')),
        decimal('0.2469135780246913578024691356'),
      ),
    ),
    inline(
      test(div(decimal('1.0'), decimal('7.0')), decimal('0.1428571428571428571428571429')),
      space,
      test(div(decimal('9999991.6666'), decimal('3.0')), decimal('3333330.5555333333333333333333')),
      space,
      test(
        div(decimal('3253452.4034029359598214312040'), decimal('-49293591.4039493929532')),
        decimal('-0.0660015290170614346071165643'),
      ),
    ),
  )
}
