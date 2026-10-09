// Converted from test/suite/corpus/import-from-function-scope.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(unsafeRaw.markup`#import enum: item`, unsafeRaw.markup`#import assert.with(true): *`),
    inline(
      enum_(unsafeRaw.code<any>`item(1)[First]`, unsafeRaw.code<any>`item(5)[Fifth]`),
      space,
      unsafeRaw.code<any>`eq(10, 10)`,
      space,
      unsafeRaw.code<any>`ne(5, 6)`,
    ),
  )
}
