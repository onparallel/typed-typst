// Converted from test/universe/corpus/typsidian.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show, space } from '../../../src/index.ts'

export default () => {
  const typsidian = external('typsidian')
  const makeTitle = define('make-title').returns(T.any).external()
  const box_2 = define('box')
    .pos('arg1', T.content)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const typsidian_with = define('with')
    .named('author', T.any, null)
    .named('course', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(typsidian)
  return doc(
    importPackage('@preview/typsidian:0.0.3', [typsidian, makeTitle, box_2]),
    show(typsidian_with({ title: 'My Document', course: 'My Course', author: 'Author Name' })),
    inline(makeTitle()),
    m.heading(1, 'Heading'),
    inline(lorem(50)),
    inline(box_2({ title: 'Box' }, inline(space, lorem(50), space))),
    inline(box_2({ theme: 'example', title: 'Example' }, inline(space, lorem(50), space))),
  )
}
