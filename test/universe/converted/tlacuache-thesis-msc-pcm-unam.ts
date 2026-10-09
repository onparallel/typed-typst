// Converted from test/universe/corpus/tlacuache-thesis-msc-pcm-unam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thmRules = external('thm-rules')
  const thmRules_with = define('with').named('qed-symbol', T.any, null).returns(T.any).external(thmRules)
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('agno', T.content, [])
    .named('agradecimientos', T.any, null)
    .named('asesor', T.any, null)
    .named('autor', T.any, null)
    .named('bibliography', T.any, null)
    .named('lugar', T.content, [])
    .named('titulo', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/tlacuache-thesis-msc-pcm-unam:0.1.1', [thesis]),
      importFile('./utils.typ', [thmRules]),
      inline(show(thmRules_with({ qedSymbol: unsafeRaw.math`square` }))),
    ),
    m.lines(
      show(
        thesis_with({
          titulo: inline`Foundations for a general theory of functions of a variable complex quantity`,
          autor: { nombre: 'Bernhard Riemmnn', genero: 'masc' },
          asesor: { nombre: 'Carl Frederich Gauss', genero: 'masc', adscripcion: 'Universidad de Gottinga' },
          lugar: inline`Gottinga, Alemania`,
          agno: inline`1851`,
          bibliography: bibliography(path('references.bib')),
          agradecimientos: includeFile('agradecimientos.typ'),
          abstract: includeFile('abstract.typ'),
        }),
      ),
      includeFile('capitulo1.typ'),
      includeFile('capitulo2.typ'),
    ),
  )
}
