// Converted from test/suite/corpus/tags-textual.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assert, box, context, doc, inline, label, labelled, metadata, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A${labelled(metadata(null), label('a'))} ${labelled(metadata(null), label('b'))}${box(inline`B`)}`,
    inline(context((ctx) => assert(unsafeRaw.code<any>`locate(<a>).position().x + 1pt < locate(<b>).position().x`))),
  )
}
