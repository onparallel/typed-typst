// Converted from test/universe/corpus/politemplate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  metadata,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const politemplate = external('politemplate')
  const politemplate_with = define('with')
    .named('bibliography', T.any, null)
    .named('footer_ignore', T.any, null)
    .named('front_header', T.content, [])
    .named('location', T.content, [])
    .named('logo', T.any, null)
    .named('students', T.any, null)
    .named('teachers', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(politemplate)
  return doc(
    importPackage('@preview/politemplate:0.1.0', [politemplate]),
    show(
      politemplate_with({
        title: inline`Poli Template`,
        students: [[inline`Student 1`, inline`13685478`], inline`Student 2`],
        teachers: [inline`Teacher 1`, inline`Teacher 2`],
        front_header: inline`${space}departamento de engenharia elétrica${linebreak()} PRO3821 - Fundamentos da economia${linebreak()}
Turma 1${space}`,
        location: inline`São Paulo, SP`,
        logo: image(path('./logo.jpg')),
        bibliography: bibliography(
          { style: 'associacao-brasileira-de-normas-tecnicas', full: true },
          path('./references.bib'),
        ),
        footer_ignore: ['Conclusão'],
      }),
    ),
    m.heading(1, 'A'),
    inline(lorem(100)),
    m.heading(2, 'A.a'),
    m.lines(inline(lorem(100)), m.heading(2, 'A.b')),
    inline(lorem(100)),
    m.heading(1, 'B', ' ', metadata('nobreak')),
    inline(lorem(100)),
    m.heading(2, 'B.a'),
    m.lines(inline(lorem(100)), m.heading(2, 'B.b')),
    inline(lorem(100)),
    m.heading(1, 'C'),
    inline(lorem(100)),
    m.heading(2, 'C.a'),
    m.lines(inline(lorem(100)), m.heading(2, 'C.b')),
    inline(lorem(100)),
    m.heading(1, 'Conclusão'),
    inline(lorem(200)),
  )
}
