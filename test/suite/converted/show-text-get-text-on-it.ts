// Converted from test/suite/corpus/show-text-get-text-on-it.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('hello', (it, ctx) => unsafeRaw.code<any>`it.text.split("").map(upper).join("|")`),
      'Oh, hello there!',
    ),
  )
}
