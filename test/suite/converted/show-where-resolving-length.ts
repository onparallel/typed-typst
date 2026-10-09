// Converted from test/suite/corpus/show-where-resolving-length.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, codeBlock, doc, em, inline, line, pt, set, show, space, where } from '../../../src/index.ts'

export default () => {
  return doc(
    set(line, { start: [em(1), add(em(1), pt(2))] }),
    inline(
      codeBlock([show(where(line, { start: [em(1), add(em(1), pt(2))] }), 'Triggered')], line()),
      space,
      codeBlock([show(where(line, { start: [pt(10), pt(12)] }), 'Not Triggered')], line()),
    ),
  )
}
