// Converted from test/universe/corpus/deal-us-tfc-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  linebreak,
  m,
  path,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const TFC = external('TFC')
  const TFC_with = define('with')
    .named('abstract', T.content, [])
    .named('agradecimientos', T.content, [])
    .named('alumno', T.any, null)
    .named('bibliografia', T.any, null)
    .named('convocatoria', T.any, null)
    .named('dedicatoria', T.any, null)
    .named('departamento', T.any, null)
    .named('director', T.content, [])
    .named('incluye-toc-todo', T.any, null)
    .named('keywords', T.any, null)
    .named('palabras-clave', T.any, null)
    .named('resumen', T.content, [])
    .named('titulacion', T.any, null)
    .named('titulo', T.any, null)
    .returns(T.any)
    .external(TFC)
  return doc(
    importPackage('@preview/deal-us-tfc-template:1.2.1', [TFC]),
    show(
      TFC_with({
        titulo: 'Trabajo fin de grado',
        alumno: 'Nombre Del Alumno',
        titulacion: 'Grado en Ingeniería Informática - Ingeniería del Software',
        director: inline`Director 1 ${linebreak()} Director 2`,
        departamento: 'Lenguajes y Sistemas Informáticos',
        convocatoria: 'Convocatoria de junio/julio/diciembre, curso 20XX/YY',
        dedicatoria: 'Aquí la dedicatoria del trabajo',
        agradecimientos: blocks(inline`Quiero agradecer a X por...`, inline`También quiero agradecer a Y por...`),
        resumen: inline`${space}Incluya aquí un resumen de los aspectos generales de su trabajo, en español${space}`,
        palabrasClave: ['palabra clave 1', 'palabra clave 2', '...', 'palabra clave N'],
        abstract: inline`${space}This section should contain an English version of the Spanish abstract.${space}`,
        keywords: ['keyword 1', 'keyword 2', '...', 'keyword N'],
        bibliografia: bibliography(path('/bibliografia.bib')),
        incluyeTocTodo: false,
      }),
    ),
    m.lines(
      includeFile('sections/ejemplos_borrame.typ'),
      includeFile('sections/01_introduccion.typ'),
      includeFile('sections/02_Gestion.typ'),
      includeFile('sections/03_Analisis.typ'),
      includeFile('sections/04_Diseño.typ'),
      includeFile('sections/05_Implementacion.typ'),
      includeFile('sections/06_Pruebas.typ'),
      includeFile('sections/XX_Conclusiones.typ'),
    ),
  )
}
