// Converted from test/suite/corpus/justify-code-blocks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, par, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(par, { justify: true }),
    inline(raw({ block: true, lang: 'cpp' }, 'int main() {\n  printf("Hello world\\n");\n  return 0;\n}')),
  )
}
