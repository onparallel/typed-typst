// Converted from test/universe/corpus/volt-lab-ensea.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  blocks,
  define,
  doc,
  external,
  figure,
  heading,
  image,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  raw,
  show,
  space,
  strong,
  super_,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('authors', T.any, null)
    .named('lab-description', T.content, [])
    .named('student-info', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/volt-lab-ensea:0.1.1', [report]),
    show(
      report_with({
        title: inline(lorem(10)),
        authors: ['Jean DUPONT', 'Marie DUBOIS'],
        studentInfo: inline`${strong(inline`Élève ingénieur en X${super_(inline`ème`)} année`)} ${linebreak()} Promotion
20XX ${linebreak()} Année 20XX/20XX`,
        labDescription: blocks(
          m.list(m.item([lorem(15), space, linebreak()]), m.item([lorem(15), space, linebreak()]), m.item([lorem(15)])),
        ),
      }),
    ),
    m.lines(heading({ depth: 1 }, inline('Titre de niveau 1')), inline(lorem(70))),
    m.lines(heading({ depth: 2 }, inline('Titre de niveau 2')), inline(lorem(50))),
    inline(figure({ caption: inline`Logo de l'ENSEA` }, image({ width: pct(25) }, path('media/logo-ENSEA.png')))),
    m.lines(heading({ depth: 3 }, inline('Titre de niveau 3')), inline(lorem(35))),
    inline(
      raw(
        { block: true, lang: 'java' },
        '// HelloWorld.java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      ),
    ),
    inline(pagebreak()),
    m.lines(heading({ depth: 1 }, inline('Conclusion')), inline(lorem(350))),
  )
}
