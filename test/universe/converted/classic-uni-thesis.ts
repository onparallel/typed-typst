// Converted from test/universe/corpus/classic-uni-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  bibliography,
  blocks,
  center,
  cm,
  datetime,
  define,
  doc,
  em,
  external,
  fr,
  h,
  horizon,
  importPackage,
  includeFile,
  inline,
  left,
  luma,
  m,
  path,
  pt,
  raw,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const abbrevTable = external('abbrev-table')
  const flexCaption = external('flex-caption')
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abreviaciones', T.any, null)
    .named('abstract', T.content, [])
    .named('agradecimientos', T.content, [])
    .named('apendices', T.any, null)
    .named('asesor', T.any, null)
    .named('autor', T.any, null)
    .named('bibliografia', T.any, null)
    .named('certificate', T.content, [])
    .named('facultad', T.any, null)
    .named('fecha', T.any, null)
    .named('keywords', T.content, [])
    .named('mostrar-lista-figuras', T.any, null)
    .named('mostrar-tdc', T.any, null)
    .named('numeracion-encabezados', T.any, null)
    .named('programa', T.any, null)
    .named('show-lista-tablas', T.any, null)
    .named('tipo-tesis', T.any, null)
    .named('titulo', T.any, null)
    .named('ubicacion', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/classic-uni-thesis:0.1.0', [abbrevTable, flexCaption, thesis]),
    show(
      thesis_with({
        titulo: 'Título de la Tesis',
        autor: 'Nombre Apellido',
        tipoTesis: 'Tesis de Pregrado',
        programa: 'Escuela Profesional de Ciencias de la Computación',
        facultad: 'Facultad de Ciencias',
        asesor: 'Dr. Nombre Apellido',
        ubicacion: 'Lima',
        fecha: datetime({ day: 12, month: 9, year: 2026 }),
        certificate: blocks(
          inline(
            v(fr(1)),
            space,
            align(center, inline(text({ size: pt(18), weight: 'bold' }, inline`Certificado de Dirección`))),
            space,
            v(cm(1.2)),
          ),
          inline`${strong(inline`Dr. Nombre Apellido`)}, en calidad de Asesor, certifica que la presente tesis
titulada "${strong(inline`Título de la Tesis`)}", ha sido desarrollada por ${strong(inline`Nombre Apellido`)}
bajo su dirección y cumple con los requisitos para ser presentada y sustentada para optar el
título profesional de Ciencias de la Computación.`,
          inline`${v(cm(0.4))} Lima, 12 de septiembre de 2026 ${v(cm(1.4))}`,
          inline(
            align(
              center,
              inline(
                space,
                table(
                  {
                    columns: cm(12),
                    rows: [auto, cm(2.6), auto, cm(2.6)],
                    stroke: (x, y) => unsafeRaw.code<any>`if calc.odd(y) { (bottom: 0.6pt + black) } else { none }`,
                    align: add(left, horizon),
                    inset: { x: pt(0), top: pt(16), bottom: pt(4) },
                  },
                  inline(
                    strong(inline`Asesor`),
                    space,
                    h(em(0.6)),
                    space,
                    text({ size: pt(10), fill: luma(110) }, inline`Dr. Nombre Apellido`),
                  ),
                  inline(),
                  inline(
                    strong(inline`Autor`),
                    space,
                    h(em(0.6)),
                    space,
                    text({ size: pt(10), fill: luma(110) }, inline`Nombre Apellido`),
                  ),
                  inline(),
                ),
                space,
              ),
            ),
            space,
            v(fr(1)),
          ),
        ),
        agradecimientos: blocks(
          'Usa esta sección para agradecer a las personas e instituciones que apoyaron tu trabajo: tu asesor y tutor, tu grupo de investigación o departamento, las entidades financiadoras y a cualquiera que haya ayudado en el camino. Mantenlo cálido pero conciso, unos pocos párrafos cortos son suficientes.',
          inline`Un segundo párrafo puede reconocer a tu familia y amigos. Este bloque es opcional: pon ${raw('agradecimientos: none')}
en ${raw('main.typ')} para omitirlo por completo.`,
        ),
        abstract: blocks(
          'El resumen es un compendio autónomo de toda la tesis, normalmente entre 200 y 350 palabras. Expón el problema y su contexto, lo que hiciste, los resultados principales y por qué importan, en un pasaje único y continuo que un lector pueda entender sin el resto del documento.',
          'Abre con la motivación y el vacío que aborda tu trabajo. Luego describe tu enfoque a alto nivel, lo suficiente para que el lector comprenda el método sin el detalle del capítulo de Metodología. Cierra con tus hallazgos principales, expresados de forma concreta, y una oración sobre su importancia. Evita citas, abreviaturas sin definir y figuras aquí; el resumen debe sostenerse por sí solo.',
        ),
        keywords: inline`palabra uno, palabra dos, palabra tres`,
        abreviaciones: [
          ['DNA', 'Ácido desoxirribonucleico'],
          ['API', 'Interfaz de programación de aplicaciones'],
        ],
        mostrarTdc: true,
        mostrarListaFiguras: true,
        showListaTablas: true,
        numeracionEncabezados: true,
        bibliografia: bibliography({ style: 'apa' }, path('references.bib')),
        apendices: includeFile('chapters/05-appendix.typ'),
      }),
    ),
    m.lines(
      includeFile('chapters/01-introduction.typ'),
      includeFile('chapters/02-methodology.typ'),
      includeFile('chapters/03-results.typ'),
      includeFile('chapters/04-discussion.typ'),
    ),
  )
}
