// Converted from test/universe/corpus/enunciado-facil-fcfm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_conf = define('conf')
    .named('curso', T.any, null)
    .named('departamento', T.any, null)
    .named('subtitulo', T.any, null)
    .named('titulo', T.any, null)
    .named('titulo-extra', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/enunciado-facil-fcfm:0.1.0', template),
    show(
      template_conf.with({
        titulo: 'Auxiliar 5',
        subtitulo: 'Usando el template',
        tituloExtra: [
          inline`${strong(inline`Profesora`)}: Ada Lovelace`,
          inline`${strong(inline`Auxiliares`)}: Grace Hopper y Alan Turing`,
        ],
        departamento: unsafeRaw.code<any>`template.departamentos.dcc`,
        curso: 'CC4034 - Composición de documentos',
      }),
    ),
    m.heading(1, 'Sumatorias'),
    m.lines(
      'Resuelva:',
      m.enum(
        m.numbered(1, [unsafeRaw.math.block`sum_(k=1)^n k^3`]),
        m.numbered(2, [unsafeRaw.math.block`sum_(k=1)^n k 2^k`]),
        m.numbered(3, [unsafeRaw.math.block`sum_(k=1)^n k 2^k`]),
      ),
    ),
    m.heading(1, 'Recurrencias'),
    m.enum(m.numbered(1, ['Resuelva la siguiente ecuación de recurrencia:'])),
    inline(unsafeRaw.math.block`T_n = 2T_(n-1) + n, #h(2cm) T_0 = c.`),
    m.lines(
      m.enum(
        m.numbered(2, [
          'Sean',
          space,
          unsafeRaw.math`a_n, b_n`,
          space,
          'secuencias tal que',
          space,
          unsafeRaw.math`a_n != 0`,
          space,
          'y',
          space,
          unsafeRaw.math`b_n != 0`,
          space,
          unsafeRaw.math`forall n in NN`,
          '. Sea',
          space,
          unsafeRaw.math`T_n`,
          space,
          'definida como:',
        ]),
      ),
      inline(unsafeRaw.math.block`a_n T_n = b_n T_(n-1) + f_n, #h(2cm) T_0 = c.`),
    ),
    inline`Obtenga una fórmula no recursiva para ${unsafeRaw.math`T_n`}.`,
    m.enum(m.numbered(3, ['Usando el método visto en clases, resuelva:'])),
    inline(unsafeRaw.math.block`T_n = (T_(n-1)/T_(n-2))^4 dot 8^(n dot 2^n), #h(2cm) T_0 = 1, T_1 = 2.`),
    m.heading(1, 'Funciones generadoras'),
    m.lines(
      m.enum(m.numbered(1, ['Considere la recurrencia definida para', space, unsafeRaw.math`n <= 0`, ':'])),
      inline`${unsafeRaw.math.block`a_(n+3) = 5a_(n+2) - 7a_(n+1) + 3a_n + 2^n,`} con ${unsafeRaw.math`a_0 = 0`},
${unsafeRaw.math`a_1 = 2`} y ${unsafeRaw.math`a_2 = 5`}.`,
    ),
    'Utilizando funciones generadoras, resuelva la recurrencia.',
    m.enum(
      m.numbered(2, [
        'Cuente el número de palabras en',
        space,
        unsafeRaw.math`{0,1,2}^n`,
        space,
        'tal que cada subpalabra maximal de',
        space,
        unsafeRaw.math`{0}^*`,
        space,
        'tiene largo par.',
      ]),
    ),
  )
}
