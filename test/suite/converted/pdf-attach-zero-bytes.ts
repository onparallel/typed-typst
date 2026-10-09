// Converted from test/suite/corpus/pdf-attach-zero-bytes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bytes, doc, inline, path, pdf } from '../../../src/index.ts'

export default () => {
  return doc(inline(pdf.attach(path('file'), bytes([]))))
}
