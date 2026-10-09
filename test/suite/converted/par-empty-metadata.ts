// Converted from test/suite/corpus/par-empty-metadata.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  context,
  data,
  define,
  doc,
  inline,
  label,
  labelled,
  metadata,
  pt,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      block({ height: pt(0) }, inline(data(''), labelled(metadata(false), label('hi')))),
      space,
      context((ctx) => test(unsafeRaw.code<any>`query(<hi>).first().value`, false)),
    ),
  )
}
