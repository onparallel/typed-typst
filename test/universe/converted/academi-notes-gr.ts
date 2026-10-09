// Converted from test/universe/corpus/academi-notes-gr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  raw,
  show,
  space,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const definicion = define('definicion').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const teorema = define('teorema').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const demostracion = define('demostracion').pos('arg1', T.content).returns(T.any).external()
  const project_with = define('with')
    .named('academic-year', T.any, null)
    .named('author', T.any, null)
    .named('github', T.any, null)
    .named('orcid', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/academi-notes-gr:0.1.0', [project, definicion, teorema, demostracion]),
    show(
      project_with({
        title: 'Notes on ...',
        author: 'Your Name',
        academicYear: 'Academic year 2025-2026',
        orcid: 'https://orcid.org/xxxx-xxxx-xxxx-xxxx',
        github: 'https://github.com/Your_Username',
      }),
    ),
    m.heading(1, 'Tema 1'),
    'Esta es una introducción al tema. Typst ajusta el texto automáticamente.',
    m.heading(2, 'Espacios de Probabilidad'),
    inline(
      definicion(
        'Espacio de Probabilidad',
        blocks(
          m.lines(
            inline`Un espacio de probabilidad es una terna ${unsafeRaw.math`(Omega, cal(A), P)`} donde:`,
            m.list(
              m.item([unsafeRaw.math`Omega`, ': Espacio muestral.']),
              m.item([unsafeRaw.math`cal(A)`, ':', space, unsafeRaw.math`sigma`, '-álgebra de sucesos.']),
              m.item([unsafeRaw.math`P`, ': Medida de probabilidad tal que', space, unsafeRaw.math`P(Omega)=1`, '.']),
            ),
          ),
        ),
      ),
    ),
    inline(
      teorema(
        'Teorema Central del Límite',
        inline`${space}Dadas ${unsafeRaw.math`X_1, ..., X_n`} v.a. i.i.d con media ${unsafeRaw.math`mu`} y
varianza ${unsafeRaw.math`sigma^2`}: ${unsafeRaw.math.block`sqrt(n) (bar(X)_n - mu) / sigma arrow.r N(0,1)`}${space}`,
      ),
    ),
    inline(
      demostracion(
        blocks(
          inline`La demostración se basa en la función característica. Sea ${unsafeRaw.math`phi_X(t)`} la función
característica...`,
          'Como vemos, es trivial.',
        ),
      ),
    ),
    m.lines(m.heading(2, 'Código en Rust'), 'Aquí tienes un ejemplo de código con resaltado automático:'),
    inline(
      raw(
        { block: true, lang: 'rust' },
        'fn main() {\n    let x: Vec<i32> = vec![1, 2, 3];\n    println!("El vector es: {:?}", x);\n}',
      ),
    ),
  )
}
