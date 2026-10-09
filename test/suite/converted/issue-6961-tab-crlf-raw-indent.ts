// Converted from test/suite/corpus/issue-6961-tab-crlf-raw-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, raw, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [snippetDecl, snippet] = let_('snippet', raw({ block: true }, 'A\n  BC\n  D'))
  return doc(
    snippetDecl,
    inline(raw({ block: true }, unsafeRaw.code<any>`snippet.text.replace("  ", "\\t").replace("\\n", "\\r\\n")`)),
  )
}
