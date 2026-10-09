// Converted from test/universe/corpus/tidbit-uoc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cite,
  datetime,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subject', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/tidbit-uoc:0.1.1', [template]),
    show(
      template_with({
        subject: 'Herramientas HTML y CSS I',
        title: 'PEC1: Desarrollo de una web',
        subtitle: 'Iniciando la asignatura con un proyecto web',
        date: datetime({ year: 2025, month: 6, day: 30 }),
        author: 'Daniel Ramos Acosta',
      }),
    ),
    m.heading(1, 'Introducción'),
    inline(lorem(700)),
    m.heading(1, 'Imágenes'),
    'Un tamaño recomendado es un ancho del 75 % de la línea de texto con una altura proporcional a la primera. Todas las imágenes deben incluir una leyenda.',
    inline(figure({ caption: inline`${space}Leyenda de la figura.${space}` }, image(path('assets/logo.svg')))),
    m.heading(1, 'Código'),
    'Ejemplo de código.',
    inline(
      figure(
        { caption: inline`Ejemplo de código.` },
        inline(
          space,
          raw(
            { block: true, lang: 'python' },
            'def OrdenBurbuja(a):\n    for i in range(len(a)-2):\n        for j in range(len(a)-i-1):\n            if a[j] > a[j+1]:\n                a[j],a[j+1] = a[j+1],a[j]\n    return a',
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'Bibliografía y citas'),
    inline`La bibliografía debe incluirse mediante un archivo ${raw('.bib')} con el mismo nombre que el
archivo principal. El estilo bibliográfico a usar es APA séptima edición. Para las citas puede
utilizar los siguientes comandos según sea adecuado:`,
    m.list(
      m.item(['Cita completa entre paréntesis:', space, cite(label('Bib06'))]),
      m.item(['Cita completa sin paréntesis:', space, cite({ form: 'prose' }, label('Bib06'))]),
      m.item(['Cita de autor:', space, cite({ form: 'author' }, label('Bib06'))]),
      m.item(['Cita de año:', space, cite({ form: 'year' }, label('Bib06'))]),
      m.item(['Cita con opciones extras:', space, cite({ form: 'full' }, label('Bib06'))]),
    ),
    inline(bibliography(path('./references/example.bib'))),
  )
}
