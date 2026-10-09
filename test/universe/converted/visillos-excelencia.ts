// Converted from test/universe/corpus/visillos-excelencia.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  m,
  path,
  pct,
  show,
} from '../../../src/index.ts'

export default () => {
  const proyecto = external('proyecto')
  const proyecto_with = define('with')
    .named('abstract', T.any, null)
    .named('agradecimientos', T.any, null)
    .named('autor', T.any, null)
    .named('bibliografia', T.any, null)
    .named('doble-cara', T.any, null)
    .named('fecha', T.any, null)
    .named('fuente', T.any, null)
    .named('instituto', T.any, null)
    .named('logo', T.any, null)
    .named('lugar', T.any, null)
    .named('resumen', T.any, null)
    .named('supervisor', T.any, null)
    .named('titulo', T.any, null)
    .returns(T.any)
    .external(proyecto)
  return doc(
    importPackage('@preview/visillos-excelencia:0.2.0', [proyecto]),
    show(
      proyecto_with({
        titulo: 'Las reliquias de la muerte',
        autor: 'Harry Potter',
        supervisor: 'Albus Dumbledore',
        instituto: 'IES Carmen Martín Gaite',
        lugar: 'Navalcarnero',
        fecha: 'Mayo 2026',
        logo: image({ width: pct(30) }, path('Logo.svg')),
        fuente: 'Libertinus Serif',
        dobleCara: false,
        abstract: includeFile('Archivos/00_1_Abstract.typ'),
        resumen: includeFile('Archivos/00_2_Resumen.typ'),
        agradecimientos: includeFile('Archivos/00_3_Agradecimientos.typ'),
        bibliografia: bibliography({ style: 'apa', title: 'Bibliografía' }, path('referencias.yaml')),
      }),
    ),
    m.lines(
      includeFile('Archivos/01_Introducción.typ'),
      includeFile('Archivos/02_Capítulo 1.typ'),
      includeFile('Archivos/02_Capítulo 2.typ'),
      includeFile('Archivos/02_Capítulo 3.typ'),
      includeFile('Archivos/02_Capítulo 4.typ'),
    ),
    m.lines(
      includeFile('Archivos/03_Conclusión.typ'),
      includeFile('Archivos/04_Anexos.typ'),
      includeFile('Archivos/05_Glosario.typ'),
    ),
  )
}
