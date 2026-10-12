// Converted from test/suite/corpus/link-tags-position.typ by scripts/convert-suite.ts — do not edit.
import { context, doc, here, inline, link } from '../../../src/index.ts'

export default () => {
  return doc(inline(context((ctx) => link(here(ctx).position(), inline`somewhere`))))
}
