// Converted from test/universe/corpus/tlacuache-thesis-fc-unam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('asesor', T.content, [])
    .named('autor', T.content, [])
    .named('bibliography', T.any, null)
    .named('titulo', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/tlacuache-thesis-fc-unam:0.1.2', [thesis]),
    show(
      thesis_with({
        titulo: inline`Titulo`,
        autor: inline`Autor`,
        asesor: inline`Asesor`,
        bibliography: bibliography(path('references.bib')),
      }),
    ),
    includeFile('capitulo1.typ'),
  )
}
