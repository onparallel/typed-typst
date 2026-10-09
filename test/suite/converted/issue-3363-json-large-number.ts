// Converted from test/suite/corpus/issue-3363-json-large-number.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, json, let_, m, path } from '../../../src/index.ts'

export default () => {
  const [bignumDecl, bignum] = let_('bignum', json(path('/assets/data/big-number.json')))
  return doc(m.lines(bignumDecl, inline(bignum)))
}
