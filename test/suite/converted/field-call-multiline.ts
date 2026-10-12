// Converted from test/suite/corpus/field-call-multiline.typ by scripts/convert-suite.ts — do not edit.
import { T, add, codeBlock, data, define, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [rewrittenDecl, rewritten] = let_(
    'rewritten',
    data('Hello. This is a sentence. And one more.')
      .split('.')
      .map((s_3) => unsafeRaw.code({ s: s_3 })<any>`s.trim()`)
      .filter((s_2) => unsafeRaw.code({ s: s_2 })<any>`s != ""`)
      .map((s) => add(s, '!'))
      .join('\n '),
  )
  return doc(inline(codeBlock([rewrittenDecl, test(rewritten, 'Hello!\n This is a sentence!\n And one more!')])))
}
