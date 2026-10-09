// Converted from test/suite/corpus/hide-image.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, hide, image, inline, path } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`Hidden: ${hide(image({ width: cm(5), height: cm(1) }, path('/assets/images/tiger.jpg')))}`,
    inline(image({ width: cm(5), height: cm(1) }, path('/assets/images/tiger.jpg'))),
  )
}
