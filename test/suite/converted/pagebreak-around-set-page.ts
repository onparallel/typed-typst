// Converted from test/suite/corpus/pagebreak-around-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, external, inline, page, pagebreak, set, space } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(inline(pagebreak(), space, set(page, { width: cm(2), fill: conifer }), space, pagebreak()))
}
