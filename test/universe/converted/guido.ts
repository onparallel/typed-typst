// Converted from test/universe/corpus/guido.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, emoji, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const guido = external('guido')
  const guido_with = define('with')
    .named('logo', T.any, null)
    .named('show-title-page', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(guido)
  return doc(
    importPackage('@preview/guido:0.2.0', [guido]),
    show(
      guido_with({
        logo: emoji.owl,
        title: 'Guido Template',
        subtitle: 'Opinionated template for short guides',
        showTitlePage: true,
      }),
    ),
    m.heading(1, 'Getting started'),
  )
}
