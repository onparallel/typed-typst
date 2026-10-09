// Converted from test/suite/corpus/import-from-function-scope-renamed-twice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      unsafeRaw.markup`#import assert as asrt`,
      unsafeRaw.markup`#import asrt: ne as asne`,
      inline(unsafeRaw.code<any>`asne(1, 2)`),
    ),
  )
}
