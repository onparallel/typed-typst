// Converted from test/suite/corpus/link-tags-non-refable-location.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, label, labelled, link, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(labelled(['A random location', space], label('somewhere'))),
    inline(link(label('somewhere'), inline`link to somewhere`)),
  )
}
