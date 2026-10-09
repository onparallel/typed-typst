// Converted from test/suite/corpus/terms-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, pt, rtl, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { dir: rtl, size: pt(8) }),
    m.terms(m.term(['פרי'], ['דבר טעים, אכיל. ומקור אנרגיה חשוב לצמחונים.'])),
  )
}
