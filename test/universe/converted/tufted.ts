// Converted from test/universe/corpus/tufted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dict, doc, external, importPackage, let_ } from '../../../src/index.ts'

export default () => {
  const tufted = external('tufted')
  const tufted_tuftedWeb = define('tufted-web')
    .named('header-links', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(tufted)
  const [templateDecl, template] = let_(
    'template',
    tufted_tuftedWeb.with({
      headerLinks: dict({ '/': 'Home', '/docs/': 'Docs', '/blog/': 'Blog', '/cv/': 'CV' }),
      title: 'Tufted',
    }),
  )
  return doc(importPackage('@preview/tufted:0.1.1', tufted), templateDecl)
}
