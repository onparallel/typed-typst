// Converted from test/universe/corpus/fsb-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  show,
  sym,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/fsb-thesis-unofficial:0.1.0', [project]),
    show(
      project_with({
        title: 'Developing an Object Detection System for Drones',
        author: 'Nguyen Van A',
        supervisors: ['Dr. Pham Van B'],
        abstract: inline`Abstract text...`,
        acknowledgments: inline`Thanks...`,
        appendix: includeFile('appendix.typ'),
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), 'This is the main body.'),
    m.lines(m.heading(1, 'Methodology'), 'More main body content.'),
  )
}
