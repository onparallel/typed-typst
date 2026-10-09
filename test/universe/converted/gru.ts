// Converted from test/universe/corpus/gru.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const gru = external('gru')
  const gru_with = define('with').named('last-content', T.any, null).returns(T.any).external(gru)
  return doc(
    m.lines(importPackage('@preview/gru:0.1.0', [gru]), show(gru_with({ lastContent: lorem(10) })), inline(lorem(200))),
  )
}
