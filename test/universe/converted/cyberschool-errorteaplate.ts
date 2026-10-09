// Converted from test/universe/corpus/cyberschool-errorteaplate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, image, importPackage, m, path, show } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const conf_with = define('with')
    .named('abstract', T.any, null)
    .named('abstract-title', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('logos', T.any, null)
    .named('outline-level', T.any, null)
    .named('outline-title', T.any, null)
    .named('pre-title', T.any, null)
    .named('show-outline', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    m.lines(
      importPackage('@preview/cyberschool-errorteaplate:0.1.12', [conf]),
      show(
        conf_with({
          title: 'Title',
          preTitle: 'Pre-title',
          authors: [{ name: 'name', affiliation: 'affiliation', email: 'email' }],
          supervisors: [{ name: 'name', affiliation: 'affiliation', email: 'email' }],
          logos: [image.with(path('assets/Logo_univ_rennes.png')), image.with(path('assets/Logo_cyberschool.png'))],
          abstractTitle: 'New abstract title',
          abstract: 'abstract text',
          date: 'New date',
          showOutline: true,
          outlineTitle: 'Contents',
          outlineLevel: 3,
        }),
      ),
    ),
    m.lines(m.heading(1, 'Hello, world !'), m.heading(2, 'Hello, world !'), m.heading(3, 'Hello, world !')),
  )
}
