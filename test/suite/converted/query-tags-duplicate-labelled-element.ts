// Converted from test/suite/corpus/query-tags-duplicate-labelled-element.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, figure, inline, label, labelled, query, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      labelled(
        [figure({ alt: 'Text saying: hello there' }, inline`${space}hello there${space}`), space],
        label('figure'),
      ),
    ),
    inline(context((ctx) => query(ctx, label('figure')).at(0))),
  )
}
