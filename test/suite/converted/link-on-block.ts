// Converted from test/suite/corpus/link-on-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, box, cm, doc, image, inline, link, move, path, pt, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      link(
        'https://example.com/',
        block(
          inline`${space}My cool rhino ${box(move({ dx: pt(10) }, image({ width: cm(1) }, path('/assets/images/rhino.png'))))}${space}`,
        ),
      ),
    ),
  )
}
