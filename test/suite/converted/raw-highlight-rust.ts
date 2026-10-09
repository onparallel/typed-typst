// Converted from test/suite/corpus/raw-highlight-rust.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto }),
    inline(
      raw(
        { block: true, lang: 'rust' },
        "/// A state machine.\n#[derive(Debug)]\nenum State<'a> { A(u8), B(&'a str) }\n\nfn advance(state: State<'_>) -> State<'_> {\n    unimplemented!(\"state machine\")\n}",
      ),
    ),
  )
}
