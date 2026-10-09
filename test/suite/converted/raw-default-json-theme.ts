// Converted from test/suite/corpus/raw-default-json-theme.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      raw(
        { block: true, lang: 'json' },
        '{\n  "foo": "bar",\n  "test": [\n    "test",\n    true,\n    42,\n    5.0,\n    null\n  ],\n  "hi": {\n    "this": "is a test!",\n    "What is this?": "This is incredible text!"\n  }\n}',
      ),
    ),
  )
}
