// Converted from test/universe/corpus/complete-unsaac.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  m,
  raw,
  set,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const docTarea = external('doc-tarea')
  const srcBlock = define('src-block').pos('arg1', T.content).returns(T.any).external()
  const srcFile = external('src-file')
  const docTarea_with = define('with')
    .named('autores', T.any, null)
    .named('curso', T.content, [])
    .named('docente', T.content, [])
    .named('titulo', T.content, [])
    .returns(T.any)
    .external(docTarea)
  return doc(
    importPackage('@preview/complete-unsaac:0.2.3', [docTarea, srcBlock, srcFile]),
    show(
      docTarea_with({
        titulo: inline`Laboratorio 03: Derivadas Parciales y Gradiente`,
        curso: inline`Metodos Probabilisticos`,
        docente: inline`Dr. Juan Perez Quispe`,
        autores: [
          { nombre: 'Carlos Alberto Ramos', codigo: '201302' },
          { nombre: 'Lucia Fernandez Huaman', codigo: '201302' },
        ],
      }),
    ),
    set(heading, { numbering: '1.1' }),
    m.heading(1, 'Marco Teorico'),
    m.heading(2, 'Definicion de derivadas parciales'),
    'Las derivadas parciales permiten analizar funciones de multiples variables respecto a una sola variable independiente, manteniendo las demas constantes.',
    inline`Sea la funcion: ${unsafeRaw.math.block`f(x, y) = x^2 y + sin(x y)`}`,
    inline`La derivada parcial respecto a ${unsafeRaw.math`x`} se define como: ${unsafeRaw.math.block`frac(partial f, partial x)`}`,
    inline`Mientras que la derivada parcial respecto a ${unsafeRaw.math`y`} se expresa como: ${unsafeRaw.math.block`frac(partial f, partial y)`}`,
    m.heading(2, 'Interpretacion geometrica'),
    'Las derivadas parciales representan la pendiente de la superficie en una direccion especifica. Esto permite estudiar el comportamiento local de funciones multivariables.',
    m.heading(2, 'Aplicaciones'),
    'Las derivadas parciales son ampliamente utilizadas en:',
    m.list(
      m.item(['Optimizacion matematica.']),
      m.item(['Redes neuronales y aprendizaje automatico.']),
      m.item(['Simulacion fisica.']),
      m.item(['Metodos numericos.']),
      m.item(['Modelos economicos multivariables.']),
    ),
    m.heading(1, 'Desarrollo'),
    m.heading(2, 'Implementacion del algoritmo'),
    'Para el presente laboratorio se implemento un programa en Python que aproxima derivadas parciales mediante diferencias finitas.',
    inline(
      srcBlock(
        inline(
          space,
          raw(
            { block: true, lang: 'python' },
            'import math\n\ndef f(x, y):\n    return x**2 * y + math.sin(x*y)\n\ndef parcial_x(x, y, h=0.0001):\n    return (f(x + h, y) - f(x, y)) / h\n\ndef parcial_y(x, y, h=0.0001):\n    return (f(x, y + h) - f(x, y)) / h\n\nx = 2\ny = 3\n\nprint("df/dx =", parcial_x(x, y))\nprint("df/dy =", parcial_y(x, y))',
          ),
          space,
        ),
      ),
    ),
  )
}
