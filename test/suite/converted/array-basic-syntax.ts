// Converted from test/suite/corpus/array-basic-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { array, data, doc, inline, page, pt, rgb, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(150) }),
    inline(array([])),
    inline(data(1)),
    inline(array([-1])),
    inline(array([true, false])),
    inline(array(['1', rgb('002')])),
  )
}
