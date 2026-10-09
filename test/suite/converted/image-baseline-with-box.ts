// Converted from test/suite/corpus/image-baseline-with-box.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, doc, image, inline, path, pct } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${box(image({ height: cm(1), width: pct(80) }, path('/assets/images/tiger.jpg')))} B`)
}
