// Converted from test/suite/corpus/raw-tags-basic-block.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      raw(
        { block: true, lang: 'rs' },
        'const PDF_STANDARD: &str = "PDF/UA-1";\n\nfn main() {\n    println!("hello {PDF_STANDARD}");\n}',
      ),
    ),
  )
}
