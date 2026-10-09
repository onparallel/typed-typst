// Converted from test/suite/corpus/stroke-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, add, auto, blue, define, doc, inline, pt, red, space, stroke, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(unsafeRaw.code<any>`stroke(red).paint`, red),
      space,
      test(unsafeRaw.code<any>`stroke(red).thickness`, auto),
      space,
      test(unsafeRaw.code<any>`stroke(2pt).paint`, auto),
      space,
      test(unsafeRaw.code<any>`stroke((cap: "round", paint: blue)).cap`, 'round'),
      space,
      test(unsafeRaw.code<any>`stroke((cap: auto, paint: blue)).cap`, auto),
      space,
      test(unsafeRaw.code<any>`stroke((cap: auto, paint: blue)).thickness`, auto),
    ),
    inline(
      test(stroke({ paint: blue, thickness: pt(8) }), add(pt(8), blue)),
      space,
      test(stroke({ thickness: pt(2) }), stroke({ thickness: pt(2) })),
      space,
      test(unsafeRaw.code<any>`stroke(cap: "round").thickness`, auto),
      space,
      test(unsafeRaw.code<any>`stroke(cap: "round", thickness: auto).thickness`, auto),
    ),
  )
}
