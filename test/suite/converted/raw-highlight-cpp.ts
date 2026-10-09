// Converted from test/suite/corpus/raw-highlight-cpp.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto }),
    inline(
      raw({ block: true, lang: 'cpp' }, '#include <iostream>\n\nint main() {\n  std::cout << "Hello, world!";\n}'),
    ),
  )
}
