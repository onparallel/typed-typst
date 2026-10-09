// Converted from test/universe/corpus/barcala.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  blue,
  calc,
  center,
  cite,
  codeBlock,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  green,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  luma,
  m,
  math,
  path,
  pct,
  raw,
  red,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  table,
  text,
  unsafeRaw,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const lq = external('lq')
  const zero = external('zero')
  const apendice = external('apendice')
  const informe = external('informe')
  const nomenclatura = define('nomenclatura')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .returns(T.any)
    .external()
  const va = external('va')
  const dd = external('dd')
  const informe_with = define('with')
    .named('asignatura', T.any, null)
    .named('autores', T.any, null)
    .named('equipo', T.any, null)
    .named('fecha', T.any, null)
    .named('resumen', T.content, [])
    .named('titulo', T.content, [])
    .named('trabajo', T.any, null)
    .named('unidad-academica', T.any, null)
    .returns(T.any)
    .external(informe)
  const zero_setNum = define('set-num').named('decimal-separator', T.any, null).returns(T.any).external(zero)
  const zero_setGroup = define('set-group')
    .named('separator', T.any, null)
    .named('size', T.any, null)
    .named('threshold', T.any, null)
    .returns(T.any)
    .external(zero)
  const zero_setUnit = define('set-unit').named('fraction', T.any, null).returns(T.any).external(zero)
  const lq_diagram = define('diagram')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .returns(T.any)
    .external(lq)
  const lq_boxplot = define('boxplot')
    .pos('arg1', T.any)
    .named('cap', T.any, null)
    .named('cap-length', T.any, null)
    .named('fill', T.any, null)
    .named('median', T.any, null)
    .named('outliers', T.any, null)
    .named('stroke', T.any, null)
    .named('whisker', T.any, null)
    .named('x', T.any, null)
    .returns(T.any)
    .external(lq)
  const lq_linspace = define('linspace').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(lq)
  const zero_formatTable = define('format-table').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(zero)
  return doc(
    m.lines(
      importPackage('@preview/barcala:0.3.0', [apendice, informe, nomenclatura]),
      inline(
        importPackage('@preview/lilaq:0.5.0', lq),
        space,
        importPackage('@preview/physica:0.9.7', [va, dd]),
        space,
        importPackage('@preview/zero:0.5.0', zero),
      ),
    ),
    show(
      informe_with({
        unidadAcademica: 'ingeniería',
        asignatura: 'F0317 Física II',
        trabajo: 'Informe de Laboratorio Nº 2',
        equipo: 'Grupo 3',
        autores: [
          {
            nombre: 'Kirchhoff, Gustav',
            email: 'gustav.kirchhoff@alu.ing.unlp.edu.ar',
            legajo: '12345/6',
            notas: 'Autor responsable del informe',
          },
          { nombre: 'Maxwell, James C.', email: 'james.maxwll@alu.ing.unlp.edu.ar', legajo: '12345/6' },
          { nombre: 'Faraday, Michael', email: 'mfaraday@alu.ing.unlp.edu.ar', legajo: '12345/6' },
        ],
        titulo: inline`Circuitos de corriente continua en estado transistorio`,
        resumen: inline(
          strong(inline`${emph(inline`Objetivo`)} --- determinación de las constantes de tiempo (${unsafeRaw.math`tau`})
de carga y descarga de un circuito RC. Análisis de la dependencia de ${unsafeRaw.math`tau`}
en función de los valores de resistencia y capacidad que conforman el circuito.`),
        ),
        fecha: '2025-03-01',
      }),
    ),
    m.lines(
      show(cite, set(text, { fill: blue })),
      show(link, set(text, { fill: blue })),
      show(ref, set(text, { fill: blue })),
    ),
    m.lines(
      set(math.equation, { numbering: '(1)' }),
      show(
        ref,
        (it, ctx) => unsafeRaw.code<any>`{
  if it.element != none and it.element.func() == math.equation {
    // Sobreescribir las referencias a ecuaciones
    link(it.element.location(), numbering(
      it.element.numbering,
      ..counter(math.equation).at(it.element.location()),
    ))
  } else {
    // Otras referencias quedan igual
    it
  }
}`,
      ),
    ),
    m.lines(
      unsafeRaw.markup`#import zero: num, zi`,
      inline(
        zero_setNum({ decimalSeparator: ',' }),
        space,
        zero_setGroup({ size: 3, separator: '.', threshold: { integer: 5, fractional: calc.inf } }),
        space,
        zero_setUnit({ fraction: 'inline' }),
      ),
    ),
    unsafeRaw.markup`#let Vm = zi.declare("V/m")`,
    inline(
      nomenclatura(
        [unsafeRaw.math`q`, inline`Carga [${unsafeRaw.code<any>`zi.coulomb()`}]`],
        [unsafeRaw.math`I`, inline`Corriente [${unsafeRaw.code<any>`zi.ampere()`}]`],
        [unsafeRaw.math`U`, inline`Potencial eléctrico [${unsafeRaw.code<any>`zi.volt()`}]`],
        [unsafeRaw.math`va(E)`, inline`Campo eléctrico [${unsafeRaw.code<any>`Vm()`}]`],
        [unsafeRaw.math`va(B)`, inline`Campo magnético [${unsafeRaw.code<any>`zi.tesla()`}]`],
      ),
    ),
    m.lines(
      m.heading(1, 'Introducción'),
      'Coloque aquí la introducción a su trabajo destacando el interés y los objetivos del mismo.',
    ),
    m.lines(
      m.heading(1, 'Marco teórico'),
      inline`Si corresponde, describa aquí los fundamentos analíticos de su trabajo indicando las referencias
consultadas para obtener la información en el formato adecuado. Por ejemplo, ${ref(label('griffiths_electrodynamics_2017'))},
${ref({ supplement: inline`p.${sym.space.nobreak}12` }, label('jackson_classical_1999'))}, ${ref(label('maxwell_dynamical_1865'))}.`,
    ),
    'También se puede agregar ecuaciones matemáticas, como',
    inline(
      labelled(
        [
          unsafeRaw.math
            .block`integral.cont_(partial S) va(B) dot dd(va(l)) = mu_0 integral.double_S va(J) dot dd(va(A)).`,
          space,
        ],
        label('ley-de-ampere'),
      ),
    ),
    inline`Estas se pueden citar como ${ref(label('ley-de-ampere'))}. Los números y unidades pueden ser
escritos con ${raw('zero')}. Un número se puede escribir como ${unsafeRaw.code<any>`num[12345.6789]`}
y una unidad como ${unsafeRaw.code<any>`zi.volt()`} o ${unsafeRaw.code<any>`zi.newton()`}. Se
pueden declar unidades personalizadas como ${unsafeRaw.code<any>`Vm()`} e incluso combinar con
una magnitud como ${unsafeRaw.code<any>`zi.ohm[220]`}.`,
    m.lines(
      m.heading(1, 'Metodología'),
      'Si corresponde, describa aquí la metodología empleada para desarrollar su trabajo. Recuerde mencionar y detallar dentro del texto principal todas las tablas y figuras incluidas en el documento.',
    ),
    m.lines(
      m.heading(1, 'Resultados'),
      inline`Utilice esta sección para presentar y analizar sus resultados. Incluya preferentemente gráficos
vectoriales para garantizar la calidad de las imágenes. Recuerde mencionar y explicar el contenido
de todas las figuras en el cuerpo principal del trabajo, como ${ref(label('fig-boxplot'))}.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Boxplot genérico.` },
            lq_diagram(
              lq_boxplot({ stroke: luma(pct(30)), fill: yellow, median: red }, [1, 3, 10]),
              lq_boxplot({ x: 2, whisker: blue, cap: red, capLength: 0.7, median: green }, [1.5, 3, 9]),
              lq_boxplot({ x: 3, outliers: 'x' }, add(lq_linspace(5.3, 6.2), [2, 3, 7, 9.5])),
              lq_boxplot({ x: 4, outliers: null }, add(lq_linspace(5.3, 6.2), [2, 3, 7, 9.5])),
            ),
          ),
          space,
        ],
        label('fig-boxplot'),
      ),
    ),
    inline`Además, se pueden incluir tablas como ${ref(label('tabla-ejemplo'))}. Se pueden crear tablas
muy complejas, se recomienda leer ${link('https://typst.app/docs/guides/tables/')}. Además,
el paquete ${link('https://typst.app/universe/package/zero', inline(raw('zero')))} permite alinear
números y unidades dentro de las tablas de forma sencilla.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Mediciones realizadas.` },
            codeBlock(
              [show(zero_formatTable(null, auto))],
              table(
                { columns: 2, align: add(center, horizon), stroke: null },
                table.hline(),
                table.header(inline(), inline`Corriente [${unsafeRaw.code<any>`zi.mA()`}]`),
                table.hline(),
                unsafeRaw.math`I_1`,
                inline`27.0+-0.6`,
                unsafeRaw.math`I_2`,
                inline`18.7+-0.4`,
                unsafeRaw.math`I_3`,
                inline`7.4+-0.2`,
                unsafeRaw.math`I_5`,
                inline`22+-1`,
                table.hline(),
              ),
            ),
          ),
          space,
        ],
        label('tabla-ejemplo'),
      ),
    ),
    inline`También se puede complementar el trabajo con notas al pié de página.${footnote(inline(lorem(10)))}`,
    m.lines(m.heading(1, 'Conclusiones'), 'Detalle aquí las conclusiones de su trabajo.'),
    show(apendice),
    m.lines(
      m.heading(1, 'Apéndice'),
      'Si corresponde, utilice uno o más apéndices para complementar la información del trabajo.',
    ),
    inline(bibliography(path('bibliografia.bib'))),
  )
}
