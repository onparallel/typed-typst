// Converted from test/universe/corpus/leetcode-livebook.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, raw, show } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const solve = define('solve').pos('arg1', T.any).named('code-block', T.any, null).returns(T.any).external()
  const conf_with = define('with').named('practice', T.any, null).returns(T.any).external(conf)
  return doc(
    importPackage('@preview/leetcode-livebook:0.1.0', [conf, solve]),
    show(conf_with({ practice: true })),
    inline(
      solve(
        {
          codeBlock: raw(
            { block: true, lang: 'typc' },
            'let solution(nums, target) = {\n  // Your solution here\n  // Hint: Use a dictionary to store seen values\n\n  let seen = (:)\n  for (i, num) in nums.enumerate() {\n    let complement = target - num\n    let key = str(complement)\n    if key in seen {\n      return (seen.at(key), i)\n    }\n    seen.insert(str(num), i)\n  }\n  none\n}',
          ),
        },
        1,
      ),
    ),
  )
}
