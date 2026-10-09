// Converted from test/suite/corpus/show-set-vs-construct.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, enum_, inline, m, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(enum_, set(text, { fill: blue })), inline(enum_({ numbering: '(a)' }, inline`A`, enum_(inline`B`)))),
  )
}
