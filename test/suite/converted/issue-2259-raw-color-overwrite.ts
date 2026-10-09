// Converted from test/suite/corpus/issue-2259-raw-color-overwrite.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, inline, raw, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    show(raw, set(text, { fill: blue })),
    inline(raw('Hello, World!')),
    inline(raw({ block: true, lang: 'rs' }, 'fn main() {\n    println!("Hello, World!");\n}')),
  )
}
