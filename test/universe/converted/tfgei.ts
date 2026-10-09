// Converted from test/universe/corpus/tfgei.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  center,
  cm,
  define,
  dict,
  doc,
  emph,
  external,
  figure,
  horizon,
  image,
  importPackage,
  inline,
  label,
  link,
  lorem,
  luma,
  m,
  path,
  pct,
  pt,
  quote,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const tfgei = external('tfgei')
  const qty = define('qty').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const curl = external('curl')
  const grad = external('grad')
  const tensor = external('tensor')
  const pdv = external('pdv')
  const tfgei_with = define('with')
    .named('agradecimientos', T.any, null)
    .named('alumno', T.any, null)
    .named('encabezado', T.any, null)
    .named('idioma', T.any, null)
    .named('indice-figuras', T.any, null)
    .named('indice-listados', T.any, null)
    .named('indice-tablas', T.any, null)
    .named('numeracion', T.any, null)
    .named('resumen', T.any, null)
    .named('salto-capitulo', T.any, null)
    .named('titulo', T.any, null)
    .returns(T.any)
    .external(tfgei)
  return doc(
    importPackage('@preview/tfgei:0.2.1', [tfgei, qty, curl, grad, tensor, pdv]),
    show(
      tfgei_with({
        titulo: 'Título do Traballo de Fin de Grado',
        alumno: 'D. Nome Alumna/o',
        agradecimientos: quote({ attribution: 'Yo', block: true }, inline(emph(inline`A mis padres`))),
        resumen: lorem(138),
        idioma: 'gl',
        saltoCapitulo: true,
        indiceFiguras: { enabled: true },
        indiceTablas: { enabled: true },
        indiceListados: { enabled: true },
        numeracion: dict({ '1': true }),
        encabezado: 0,
      }),
    ),
    set(text, { lang: 'es' }),
    m.lines(m.heading(1, 'Introducción'), inline`${lorem(120).trim('.')} ${ref(label('xetex'))} .`),
    inline`La distancia que separa dos torres en un tendido eléctrico en una vía de tren es de ${qty(60, 'm')}.
Obtén el tiempo que emplea una cabeza locomotora en recorrer dicha distancia si su velocidad
es de ${qty(72, 'kilo meter per hour')}. Expresa dicho tiempo en el Sistema Internacional. ${unsafeRaw.math.block`curl (grad f), tensor(T, -mu, +nu), pdv(f, x, y, [1,2])`}`,
    m.lines(
      m.heading(1, 'Estado del arte'),
      inline`El nombre de esta sección es opcional. ${link('https://www.uvigo.gal/', inline`Aquí`)} tenemos
un enlace. ${link('https://www.uvigo.gal/')}`,
    ),
    m.heading(1, 'Material y métodos'),
    m.lines(m.heading(2, 'Materiales'), inline(lorem(30))),
    m.lines(m.heading(3, 'Tipos de materiales'), inline(lorem(100))),
    m.heading(1, 'Resultados y discusión'),
    m.heading(2, 'Ejemplo de figura'),
    inline(
      figure(
        { kind: image, caption: inline`Esquema simplificado del sistema de medida.` },
        rect({ width: pct(85), height: cm(4), fill: luma(240), stroke: add(pt(0.6), luma(140)), radius: pt(4) }),
      ),
    ),
    m.heading(2, 'Ejemplo de tabla'),
    inline(
      figure(
        { caption: inline`Resumen de magnitudes del problema.` },
        table(
          { columns: 3, align: add(center, horizon) },
          table.header(inline`${space}Magnitud${space}`, inline`Valor`, inline`Unidad`),
          inline`Longitud`,
          inline`60`,
          inline`m`,
          inline`Velocidad`,
          inline`72`,
          inline`km/h`,
          inline`Tiempo`,
          inline`3000`,
          inline`s`,
        ),
      ),
    ),
    m.heading(2, 'Ejemplo de listado'),
    inline(
      figure(
        { kind: raw, caption: inline`Cálculo de tiempo en Typst con unidades.` },
        raw(
          { block: true, lang: 'typ' },
          '#let v = qty(72, "kilo meter per hour")\n#let d = qty(60, "m")\n#let t = d / v\n#t',
        ),
      ),
    ),
    m.heading(1, 'Conclusiones'),
    inline(bibliography(path('bibliografia.bib'))),
  )
}
