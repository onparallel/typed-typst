// Converted from test/suite/corpus/math-stretch-nested-horizontal-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`stretch(stretch(->, size: #4em)) >> stretch(stretch(->, size: #4em))_A \\
  stretch(stretch(->, size: #4em), size: #0em) = stretch(stretch(->, size: #4em), size: #0em)_A \\
  stretch(stretch(->, size: #500%)) >>> stretch(stretch(->, size: #500%))_A \\
  stretch(stretch(->, size: #500%), size: #50%) > stretch(stretch(->, size: #500%), size: #50%)_A \\
  stretch(stretch(->, size: #4em), size: #50%) > stretch(stretch(->, size: #4em), size: #50%)_"blah"`),
  )
}
