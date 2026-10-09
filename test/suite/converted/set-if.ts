// Converted from test/suite/corpus/set-if.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, codeBlock, doc, inline, label, red, ref, set, show, str, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(ref, (it, ctx) =>
      codeBlock(
        [set(text, { fill: red }, { if: unsafeRaw.code<any>`it.target == <unknown>` })],
        add('@', str(it.target)),
      ),
    ),
    inline`${ref(label('hello'))} from the ${ref(label('unknown'))}`,
  )
}
