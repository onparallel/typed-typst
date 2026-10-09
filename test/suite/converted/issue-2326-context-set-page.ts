// Converted from test/suite/corpus/issue-2326-context-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, blocks, context, doc, here, inline, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(inline(context((ctx) => blocks(m.lines(set(page, { fill: aqua }), inline`On page ${here(ctx).page()}`)))))
}
