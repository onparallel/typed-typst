// Converted from test/universe/corpus/cleanified-hpi-research-proposal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.any, null)
    .named('chair', T.any, null)
    .named('date', T.any, null)
    .named('double-column', T.any, null)
    .named('enable-toc', T.any, null)
    .named('enable-up-logo', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/cleanified-hpi-research-proposal:0.3.0', [project]),
    show(
      project_with({
        title: 'My Very Long, Informative, Expressive, and Definitely Fancy Title',
        author: 'Max Mustermann',
        date: 'Febuary 29, 2025',
        chair: 'Data-Intensive Internet Computing',
        enableToc: true,
        enableUpLogo: true,
        abstract: inline(),
        doubleColumn: false,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(50))),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    m.lines(m.heading(2, 'Related Work'), inline(lorem(200))),
    m.lines(m.heading(1, 'Conclusion'), inline(lorem(150))),
  )
}
