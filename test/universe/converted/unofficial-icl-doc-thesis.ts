// Converted from test/universe/corpus/unofficial-icl-doc-thesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const backMatter = define('back-matter').returns(T.any).external()
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.any, null)
    .named('degree', T.any, null)
    .named('report-type', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    m.lines(
      importPackage('@preview/unofficial-icl-doc-thesis:0.1.0', [project, backMatter]),
      importPackage('@preview/unofficial-icl-doc-thesis:0.1.0', [project, backMatter]),
    ),
    show(
      project_with({
        title: 'Your Project Title',
        author: 'Your Name',
        supervisor: 'Supervisor Name',
        reportType: 'MEng Individual Project',
        degree: 'Master of Engineering (MEng)',
        abstract: inline`${space}Write your abstract here.${space}`,
      }),
    ),
    heading({ depth: 1 }, inline('Introduction')),
    'Your introduction here.',
    heading({ depth: 1 }, inline('Background')),
    heading({ depth: 1 }, inline('Contribution')),
    heading({ depth: 1 }, inline('Experimental Results')),
    heading({ depth: 1 }, inline('Conclusion')),
    inline(backMatter(), space, bibliography({ style: 'elsevier-vancouver' }, path('references.bib'))),
  )
}
