// Converted from test/suite/corpus/break-tags-nested-parbreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, inline, let_, link, quote, space } from '../../../src/index.ts'

export default () => {
  const [targetDecl, target_2] = let_('target', 'tel:123')
  return doc(
    targetDecl,
    inline`Start of the first paragraph ${link(target_2, inline(space, quote(blocks('Part of the first paragraph.', 'Start of the second paragraph')), space))}
Part of the second paragraph.`,
  )
}
