// Converted from test/suite/corpus/locate-migrated-breakable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  context,
  define,
  doc,
  inline,
  label,
  labelled,
  locate,
  m,
  page,
  pt,
  set,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { height: pt(40) }), inline`A ${labelled(block(inline`B`), label('b'))}`),
    inline(context((ctx) => test(locate(ctx, label('b')).position(), { page: 2, x: pt(10), y: pt(10) }))),
  )
}
