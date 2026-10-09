// Converted from test/suite/corpus/query-tags-ambiguous-parent-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, context, doc, inline, label, labelled, left, place, query, space, top } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(labelled([place({ float: true }, add(top, left), inline`something`), space], label('placed'))),
    inline(context((ctx) => query(ctx, label('placed')).join())),
  )
}
