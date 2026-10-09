// Converted from test/universe/corpus/minerva-report-fcfm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  contentBlock,
  define,
  doc,
  emoji,
  emph,
  external,
  figure,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  outline,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const minerva = external('minerva')
  const meta = external('meta')
  const minerva_report = define('report')
    .rest('args', T.any)
    .named('showrules', T.any, null)
    .returns(T.any)
    .external(minerva)
  const minerva_formatoNumerosEs = external('formato-numeros-es', minerva)
  return doc(
    m.lines(importPackage('@preview/minerva-report-fcfm:0.2.2', minerva), importFile('meta.typ', meta)),
    show(minerva_report.with({ showrules: true }, unsafeRaw.code<any>`meta`)),
    inline(outline()),
    m.lines(
      m.heading(1, 'Escribiendo simples parrafos'),
      inline`Typst toma bastante de Markdown y secuencias de carácteres especiales puedes dar estilo al texto,
por ejemplo, puedes usar negrite ${strong(inline`abc`)}, itálica ${emph(inline`oooo`)} y monoespaciado
${raw('typst watch main.typ')}.`,
    ),
    'Un parrafo nuevo se hace simplemente con 2 saltos de línea.',
    m.lines(
      m.heading(2, 'El símbolo igual', ' ', raw('='), ' ', 'se usa para crear un heading'),
      inline`En LaTeX se usa ${raw('\\')} para utilizar comandos, en Typst usamos ${raw('#')}, hay muchas
utilidades como emoji ${emoji.face.happy}`,
    ),
    m.lines(
      m.heading(1, 'Elementos'),
      m.heading(2, 'Ecuaciones'),
      inline`Las ecuaciones dentro de línea se hacen con símbolos peso ${raw('$')}, así: ${unsafeRaw.math`sqrt(epsilon/phi + c/d)`}`,
    ),
    inline`Y en su propia línea con ${raw('$ x $')}, los espacios son importantes: ${unsafeRaw.math.block`sqrt(epsilon/phi + c/d)`}`,
    m.lines(
      m.heading(2, 'Figuras y referencias'),
      inline`Una figura se introduce con ${raw('figure')}: ${labelled([figure({ caption: 'Una tabla dentro de una figura.' }, table({ columns: 2 }, inline`nombre`, inline`tiempo`, inline`Viajar a la U`, inline`30 minutos`)), space], label('mi-tabla'))}`,
    ),
    inline`A la tabla le agregamos ${raw('<mi-tabla>')} para poder referenciarlar con ${ref(label('mi-tabla'))}`,
    m.lines(
      m.heading(1, 'Necesitas más ayuda?'),
      'La documentación de typst es muy buena explicando los conceptos claves para usarlo.',
      m.list(
        m.item(['Puedes partir leyendo el tutorial:', space, link('https://typst.app/docs/tutorial/')]),
        m.item([
          'Si tienes expericiencia en LaTeX, entonces la guía para usuarios de LaTeX es un buen punto de partida:',
          space,
          link('https://typst.app/docs/guides/guide-for-latex-users/'),
        ]),
        m.item([
          'Para consultas específicas, está el servidor de Discord de Typst:',
          space,
          link('https://discord.gg/2uDybryKPe'),
        ]),
      ),
    ),
    m.lines(
      m.heading(1, 'Show rule'),
      inline`El template incluye algunas show rules opcionales, más documentación en el ${link('https://github.com/Dav1com/minerva-report-fcfm/blob/v0.2.0/README.md', inline`README.md`)}
o en ${link('https://typst.app/universe/package/minerva-report-fcfm/0.2.0', inline`Typst Universe`)}.`,
    ),
    m.lines(
      m.heading(2, 'Números con coma decimal'),
      inline(
        contentBlock(
          blocks(
            show(minerva_formatoNumerosEs),
            inline`Aquí una ecuación con decimales: ${unsafeRaw.math.block`pi = 3.14`}`,
          ),
        ),
      ),
    ),
  )
}
