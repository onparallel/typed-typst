// Converted from test/suite/corpus/issues-7168-linebreak-whitespace-trimming-justify-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, par, pt, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(80) }), set(par, { justify: true }), set(text, { dir: rtl })),
    'Hello From Earth',
  )
}
