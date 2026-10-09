// Converted from test/suite/corpus/issue-2821-figure-missing-fields.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assert, codeBlock, doc, figure, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(figure.caption, (it, ctx) =>
        codeBlock([assert(it.has('supplement')), assert(unsafeRaw.code<any>`it.supplement == none`)]),
      ),
      inline(figure({ caption: inline(), supplement: null }, inline())),
    ),
  )
}
