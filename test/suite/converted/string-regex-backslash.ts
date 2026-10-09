// Converted from test/suite/corpus/string-regex-backslash.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const remove = define('remove')
    .pos('source', T.any)
    .pos('pattern', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`source.replace(regex(pattern), "")`)
  return doc(
    m.lines(
      remove.decl,
      inline(
        test(remove('\n', '\n'), ''),
        space,
        test(remove('\n', '\\n'), ''),
        space,
        test(remove('\n', '\n'), ''),
        space,
        test(remove('\n', '\\n'), ''),
        space,
        test(remove('\\\t\n1', '\\\\\\t\\n\\d'), ''),
        space,
        test(remove('\\\t\n1', unsafeRaw.code<any>`\`\\\\\\t\\n\\d\`.text`), ''),
        space,
        test(remove(' word-wordle', '\\bword\\b'), ' -wordle'),
        space,
        test(remove(' word-wordle', '\\bword\\b'), ' -wordle'),
      ),
    ),
  )
}
