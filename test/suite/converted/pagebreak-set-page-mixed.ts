// Converted from test/suite/corpus/pagebreak-set-page-mixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, external, inline, m, page, pagebreak, pt, set } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(
    m.lines(
      set(page, { width: pt(80), height: pt(30) }),
      inline`${contentBlock(inline`${set(page, { width: pt(60) })} First`)} ${pagebreak()} ${pagebreak()}
Third ${page({ height: pt(20), fill: forest }, inline())} Fif${contentBlock(inline`${set(page, {})}th`)}`,
    ),
  )
}
