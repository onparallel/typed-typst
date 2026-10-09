// Converted from test/suite/corpus/overhang-lone.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, end, m, page, pt, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { margin: pt(0) }), set(align, { alignment: end }), set(text, { dir: rtl }), ':'))
}
