// Converted from test/suite/corpus/query-tags-ambiguous-parent-footnote.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, footnote, inline, label, labelled, query, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(labelled([footnote(inline`something`), space], label('note'))),
    inline(context((ctx) => query(ctx, label('note')).join())),
  )
}
