// Converted from test/suite/corpus/raw-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, codeBlock, doc, inline, linebreak, ltr, page, pt, raw, set, show, stack } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(200) }),
    inline(raw({ block: true, lang: 'rs' }, 'fn main() {\n    println!("Hello, world!");\n}')),
    show(raw.line, (it, ctx) =>
      codeBlock([box(stack({ dir: ltr }, box({ width: pt(15) }, inline(it.number)), it.body)), linebreak()]),
    ),
    inline(raw({ block: true, lang: 'rs' }, 'fn main() {\n    println!("Hello, world!");\n}')),
  )
}
