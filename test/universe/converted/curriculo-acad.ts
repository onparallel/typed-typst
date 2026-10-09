// Converted from test/universe/corpus/curriculo-acad.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, let_, path, show, toml } from '../../../src/index.ts'

export default () => {
  const lattesCv = external('lattes-cv')
  const lattesCv_with = define('with')
    .pos('arg1', T.any)
    .named('kind', T.any, null)
    .named('last-page', T.any, null)
    .named('me', T.any, null)
    .returns(T.any)
    .external(lattesCv)
  const [dadosDecl, dados] = let_('dados', toml(path('data/exemplo.toml')))
  return doc(
    importPackage('@preview/curriculo-acad:0.1.2', [lattesCv]),
    dadosDecl,
    show(lattesCv_with({ kind: 'completo', me: 'KLEER', lastPage: true }, dados)),
  )
}
