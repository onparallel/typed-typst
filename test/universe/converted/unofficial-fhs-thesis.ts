// Converted from test/universe/corpus/unofficial-fhs-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  define,
  doc,
  external,
  heading,
  image,
  importPackage,
  inline,
  lorem,
  m,
  pagebreak,
  path,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('betreuer', T.any, null)
    .named('bigboss', T.any, null)
    .named('logo', T.any, null)
    .named('paper-type', T.any, null)
    .named('show-abstract', T.any, null)
    .named('show-betreuer', T.any, null)
    .named('show-bigboss', T.any, null)
    .named('show-subtitle', T.any, null)
    .named('studiengang', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/unofficial-fhs-thesis:0.1.0', [project]),
    show(
      project_with({
        logo: image({ height: cm(2.8) }, path('images/FH_Salzburg_Logo_DE.svg')),
        title: 'Title',
        paperType: 'Protocol',
        subtitle: 'Subtitle',
        studiengang: 'Studiengang',
        authors: ['Vorname Nachname'],
        bigboss: 'Prof. Dr. Big Boss',
        betreuer: 'Betreuer',
        abstract: lorem(59),
        showSubtitle: true,
        showAbstract: true,
        showBigboss: true,
        showBetreuer: true,
      }),
    ),
    set(heading, { numbering: '1.1 ' }),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(600))),
    m.lines(m.heading(2, 'In this paper'), inline(lorem(20))),
    m.lines(m.heading(3, 'Contributions'), inline(lorem(40))),
    m.lines(m.heading(1, 'Related Work'), inline(lorem(500))),
    m.lines(inline(pagebreak()), m.heading(1, 'Another heading'), inline(lorem(500))),
  )
}
