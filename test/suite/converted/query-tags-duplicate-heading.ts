// Converted from test/suite/corpus/query-tags-duplicate-heading.typ by scripts/convert-suite.ts — do not edit.
import { context, doc, heading, inline, m, query } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(inline(context((ctx) => query(ctx, heading).join())), heading({ depth: 1 }, inline('Hi'))))
}
