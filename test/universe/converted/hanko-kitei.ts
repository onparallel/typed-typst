// Converted from test/universe/corpus/hanko-kitei.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, includeFile, m, show } from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const regulation = external('regulation')
  const regulation_with = define('with')
    .named('author', T.any, null)
    .named('config', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(regulation)
  return doc(
    importPackage('@preview/hanko-kitei:0.1.0', [article, regulation]),
    show(regulation_with({ title: '○○規程', author: '○○株式会社', config: { lineSpacing: 'normal', tocDepth: 3 } })),
    m.lines(includeFile('rules/01-general.typ'), includeFile('rules/02-procedure.typ')),
  )
}
