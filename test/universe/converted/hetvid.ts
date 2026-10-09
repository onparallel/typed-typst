// Converted from test/universe/corpus/hetvid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const hetvid = external('hetvid')
  const hetvid_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('header', T.any, null)
    .named('title', T.content, [])
    .named('toc', T.any, null)
    .returns(T.any)
    .external(hetvid)
  return doc(
    importPackage('@preview/hetvid:0.2.1', [hetvid]),
    show(
      hetvid_with({
        title: inline`Hetvid: A Typst template for lightweight notes`,
        author: 'Name',
        affiliation: 'Your affiliation',
        header: 'Set a Header',
        abstract: inline`This is abstract`,
        toc: true,
      }),
    ),
    m.heading(1, 'A section'),
    m.heading(1, 'Another section'),
  )
}
