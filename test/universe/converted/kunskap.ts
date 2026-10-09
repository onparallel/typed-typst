// Converted from test/universe/corpus/kunskap.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const kunskap = external('kunskap')
  const kunskap_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('header', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(kunskap)
  return doc(
    importPackage('@preview/kunskap:0.1.0', [kunskap]),
    show(
      kunskap_with({
        title: inline`Instructions for writing reports`,
        author: 'Anonymous Beaver',
        header: 'Learning Typst',
        date: datetime.today().display('[month repr:long] [day padding:zero], [year repr:full]'),
      }),
    ),
    inline(lorem(21)),
    m.heading(1, 'A bit more detail'),
    inline(lorem(49)),
    m.heading(2, 'Even more'),
    inline(lorem(49)),
    m.lines(m.heading(3, 'Final comments'), inline(lorem(12))),
  )
}
