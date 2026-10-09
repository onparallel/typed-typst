// Converted from test/suite/corpus/issue-7113-cjk-latin-spacing-shift.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, footnote, inline, sub, super_ } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`孔乙己${super_(inline`1`)}与上大人${super_(inline`2`)}。`,
    inline`孔乙己${super_(inline`A应保留spacing`)}与上大人${super_(inline`B`)}。`,
    inline`时间${footnote(inline`有空白`)}`,
    inline`时间${sub(inline`123`)}${super_(inline`时间`)}B`,
  )
}
