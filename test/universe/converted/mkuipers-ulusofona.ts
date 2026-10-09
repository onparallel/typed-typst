// Converted from test/universe/corpus/mkuipers-ulusofona.typ by scripts/convert-suite.ts — do not edit.
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
  lorem,
  m,
  path,
  show,
  space,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const ulthesis = external('ulthesis')
  const myBibliography = define('my-bibliography').pos('arg1', T.any).returns(T.any).external()
  const appendices = external('appendices')
  const chapter = define('chapter').pos('arg1', T.any).returns(T.any).external()
  const ulthesis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-pt', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('external', T.any, null)
    .named('glossary-data', T.any, null)
    .named('lang', T.any, null)
    .named('subtitle', T.any, null)
    .named('subtype', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .named('toc-depth', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external(ulthesis)
  const appendices_with = define('with').pos('arg1', T.any).returns(T.any).external(appendices)
  return doc(
    importPackage('@preview/mkuipers-ulusofona:0.3.0', [ulthesis, myBibliography, appendices, chapter]),
    show(
      ulthesis_with({
        title: 'Título do Trabalho',
        type: 'Trabalho Final de Curso',
        subtype: '1ª Entrega Intercalar',
        subtitle: 'A Practical Guide',
        date: 'July 2026',
        authors: [
          { name: 'Goro Akechi', number: 'p8094', course: 'LIG' },
          { name: 'Flavio Barisi', number: 'p8095', course: 'LIG' },
        ],
        supervisors: ['Daniel Silveira', 'Martijn Kuipers'],
        external: 'João Craveiro',
        lang: 'pt',
        tocDepth: 2,
        glossaryData: yaml(path('glossary.yaml')),
        acknowledgements: inline`${space}Para a mãe, o pai e o gato.${space}`,
        abstractPt: inline`${space}Um template para universidade${space}`,
        abstractEn: inline`${space}A template for the university${space}`,
      }),
    ),
    m.lines(
      includeFile('chapters/chapter_01.typ'),
      includeFile('chapters/chapter_02.typ'),
      includeFile('chapters/chapter_03.typ'),
      includeFile('chapters/chapter_04.typ'),
    ),
    inline(myBibliography(bibliography(path('bibliography.yaml')))),
    show(appendices_with('Appendices')),
    inline(chapter('Appendix Chapter Title')),
    m.heading(2, 'Appendix Section Title'),
    inline(lorem(50), space, chapter('Appendix Chapter Title')),
    m.heading(2, 'Appendix Section Title'),
    inline(lorem(50)),
  )
}
