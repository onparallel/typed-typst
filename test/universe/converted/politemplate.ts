// Converted from test/universe/corpus/politemplate.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  define,
  doc,
  external,
  heading,
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
    heading({ depth: 1 }, inline('A')),
    inline(lorem(100)),
    heading({ depth: 2 }, inline('A.a')),
    m.lines(inline(lorem(100)), heading({ depth: 2 }, inline('A.b'))),
    inline(lorem(100)),
    heading({ depth: 1 }, inline('B', ' ', metadata('nobreak'))),
    inline(lorem(100)),
    heading({ depth: 2 }, inline('B.a')),
    m.lines(inline(lorem(100)), heading({ depth: 2 }, inline('B.b'))),
    inline(lorem(100)),
    heading({ depth: 1 }, inline('C')),
    inline(lorem(100)),
    heading({ depth: 2 }, inline('C.a')),
    m.lines(inline(lorem(100)), heading({ depth: 2 }, inline('C.b'))),
    inline(lorem(100)),
    heading({ depth: 1 }, inline('Conclusão')),
    inline(lorem(200)),
  )
}
