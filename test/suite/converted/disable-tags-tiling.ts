// Converted from test/suite/corpus/disable-tags-tiling.typ by scripts/convert-suite.ts — do not edit.
import { blocks, doc, heading, inline, let_, m, pt, rect, tiling } from '../../../src/index.ts'

export default () => {
  const [patDecl, pat] = let_(
    'pat',
    tiling({ size: [pt(20), pt(20)] }, blocks(m.list(m.item(['a']), m.item(m.lines('b', m.list(m.item(['c']))))))),
  )
  return doc(heading({ depth: 1 }, inline('Rectangle')), m.lines(patDecl, inline(rect({ fill: pat }))))
}
