// Converted from test/suite/corpus/square-auto-sized.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, eastern, inline, m, set, square, text, white } from '../../../src/index.ts'

export default () => {
  return doc(inline(square({ fill: eastern }, blocks(m.lines(set(text, { fill: white, weight: 'bold' }), 'Typst')))))
}
