// Converted from test/suite/corpus/query-within-inverted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  context,
  define,
  doc,
  inline,
  label,
  m,
  metadata,
  query,
  selector,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const m_2 = define('m')
    .pos('l', T.any)
    .body((p) => inline(metadata(null), p['l']))
  return doc(
    m.lines(
      m_2.decl,
      inline(
        strong(codeBlock([m_2(label('a')), m_2(label('b')), m_2(label('c'))])),
        space,
        context((ctx) => test(query(ctx, selector.within(strong, label('b'))), [])),
      ),
    ),
  )
}
