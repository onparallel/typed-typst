// Converted from test/suite/corpus/issue-2268-mat-augment-color.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, set, text, unsafeRaw, yellow } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { font: 'New Computer Modern', lang: 'en', fill: yellow }),
    inline(unsafeRaw.math`mat(augment: #1, M, v) arrow.r.squiggly mat(augment: #1, R, b)`),
  )
}
