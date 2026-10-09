// Converted from test/suite/corpus/issue-4769-document-context-conditional.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, context, doc, document, inline, m, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(document, { author: 'Normal', title: inline`Alternative` }),
      inline(unsafeRaw.code<any>`context {
  set document(author: "Changed") if "Normal" in document.author
}`),
    ),
  )
}
