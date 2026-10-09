// Converted from test/suite/corpus/figure-tags-listing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, raw, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(inline(space, raw({ block: true, lang: 'rs' }, 'fn main() {\n    println!("Hello Typst!");\n}'), space)),
    ),
  )
}
