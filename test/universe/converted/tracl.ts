// Converted from test/universe/corpus/tracl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  dict,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const acl = define('acl')
    .pos('arg1', T.any)
    .named('anonymous', T.any, null)
    .named('authors', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const makeAuthors = define('make-authors').pos('arg1', T.any).returns(T.any).external()
  const affiliation = external('affiliation')
  const email = define('email').pos('arg1', T.any).returns(T.any).external()
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  return doc(
    m.lines(
      importPackage('@preview/tracl:0.8.1', [acl, makeAuthors, affiliation, email, abstract]),
      unsafeRaw.markup`#import "@preview/pergamon:0.7.1": *`,
    ),
    show((doc_2, ctx) =>
      acl(
        {
          anonymous: false,
          title: inline`A Blank ACL Paper`,
          authors: makeAuthors(
            dict({ name: 'Your Name', affiliation: inline`Your Affiliation${linebreak()} ${email('your@email.edu')}` }),
          ),
        },
        doc_2,
      ),
    ),
    inline(abstract(inline(space, lorem(50), space))),
    m.heading(1, 'Introduction'),
    inline(lorem(80)),
    inline(lorem(80)),
    inline(lorem(80)),
  )
}
