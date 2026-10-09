// Converted from test/suite/corpus/lorem-word-count.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, lorem, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const count = define('count')
    .pos('n', T.any)
    .returns(T.any)
    .body((p) =>
      lorem(p['n'])
        .replace('–', '')
        .replace('.', '')
        .split(' ')
        .filter(unsafeRaw.code<any>`s => s != ""`)
        .len(),
    )
  return doc(
    m.lines(count.decl, inline(test(count(193), 193), space, test(count(194), 194), space, test(count(195), 195))),
  )
}
