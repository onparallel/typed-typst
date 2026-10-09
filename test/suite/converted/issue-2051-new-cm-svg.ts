// Converted from test/suite/corpus/issue-2051-new-cm-svg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, m, path, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { font: 'New Computer Modern' }), inline(image(path('/assets/images/diagram.svg')))))
}
