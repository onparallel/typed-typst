// Converted from test/suite/corpus/content-label-field-access.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assert, codeBlock, doc, heading, inline, label, labelled, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, (it, ctx) => codeBlock([assert(unsafeRaw.code<any>`str(it.label) == "my-label"`), it])),
    inline(labelled(heading({ depth: 1 }, inline('Hello, world!')), label('my-label'))),
  )
}
