// Converted from test/universe/corpus/telereport.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  lorem,
  m,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const telereport = external('telereport')
  const telereport_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('short-title', T.any, null)
    .named('show-mail', T.any, null)
    .named('sidebar-text', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(telereport)
  const [abstractDecl, abstract] = let_(
    'abstract',
    inline`${space}This is a test of the Télécom Paris report template. It features some simple options
and basic page layout. It currently support ${raw('lang')} "fr" and "en" for text attributes
translations (like ${raw('abstract')} or ${raw('keywords')}). See documentation to know about
all the available options.${space}`,
  )
  return doc(
    importPackage('@preview/telereport:0.1.0', [telereport]),
    abstractDecl,
    show(
      telereport_with({
        title: 'Unofficial Télécom Paris Report Template',
        subtitle: "Styled according to Télécom Paris' graphic chart",
        shortTitle: 'Report Template',
        authors: [
          { name: 'Jonh Doe', mail: 'jonh.doe@test.com' },
          { name: 'Jane Doe', mail: 'jane.doe@test.fr' },
        ],
        supervisors: [{ name: 'Bob Doe', mail: 'bob.doe@bob.org' }],
        keywords: ['Report', 'Template', 'Télécom Paris'],
        abstract: abstract,
        date: '2024-01-01',
        sidebarText: 'Sidebar text',
        showMail: true,
        lang: 'en',
      }),
    ),
    m.heading(1, 'A Section'),
    inline(lorem(50)),
    m.heading(2, 'A Subsection'),
    inline(lorem(200)),
    m.heading(3, 'A Subsubsection'),
    inline(lorem(100)),
  )
}
