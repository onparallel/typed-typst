// Converted from test/universe/corpus/spicky.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const conf_with = define('with')
    .named('authors', T.any, null)
    .named('description', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    importPackage('@preview/spicky:0.1.0', [conf]),
    show(conf_with({ title: 'Cheatsheet', authors: ['Your Name'], description: 'Cheatsheet for Subject' })),
  )
}
