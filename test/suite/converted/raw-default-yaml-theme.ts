// Converted from test/suite/corpus/raw-default-yaml-theme.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      raw(
        { block: true, lang: 'yaml' },
        'foo: bar\ntest:\n- test\n- true\n- 42\n- 5\n-\nhi:\n  this: is a test!\n  What is this?: This is incredible text!',
      ),
    ),
  )
}
