// Converted from test/suite/corpus/footnote-in-caption.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, figure, footnote, image, inline, link, path, pct, space, sym } from '../../../src/index.ts'

export default () => {
  return doc(inline`Read the docs ${footnote(inline(link('https://typst.app/docs')))}! ${figure({ caption: inline`${space}A graph ${footnote(inline`A ${emph(inline`graph`)} is a structure with nodes and edges.`)}${space}` }, image({ width: pct(70) }, path('/assets/images/graph.png')))}
More ${footnote(inline`just for ...`)} footnotes ${footnote(inline`... testing. :)`)}`)
}
