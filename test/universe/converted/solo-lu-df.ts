// Converted from test/universe/corpus/solo-lu-df.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  external,
  figure,
  footnote,
  fr,
  heading,
  importPackage,
  inline,
  label,
  link,
  lorem,
  m,
  path,
  ref,
  set,
  show,
  space,
  table,
} from '../../../src/index.ts'

export default () => {
  const ludf = external('ludf')
  const bibliographyHere = define('bibliography-here').returns(T.any).external()
  const appendix = define('appendix')
    .pos('arg1', T.content)
    .named('caption', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const ludf_with = define('with')
    .named('abstract', T.any, null)
    .named('advisors', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('defense-date', T.any, null)
    .named('description', T.content, [])
    .named('place', T.any, null)
    .named('submission-date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(ludf)
  return doc(
    importPackage('@preview/solo-lu-df:2.1.0', [ludf, bibliographyHere, appendix]),
    show(
      ludf_with({
        title: 'Darba Nosaukums',
        authors: [
          { name: 'Jānis Bērziņš', code: 'jb12345', location: inline`Riga, Latvia`, email: 'jb12345@edu.lu.lv' },
          { name: 'Zane Kalniņa', code: 'zk67890', location: inline`Riga, Latvia`, email: 'zk67890@edu.lu.lv' },
        ],
        advisors: [{ title: 'Prof. Dr. Phys.', name: 'Anna Liepa' }],
        submissionDate: datetime({ year: 2025, month: 1, day: 1 }),
        defenseDate: datetime({ year: 2025, month: 1, day: 15 }),
        place: 'Rīga',
        bibliography: bibliography(path('bibliography.yml')),
        abstract: {
          primary: {
            text: blocks(inline(lorem(50)), inline(lorem(30)), inline(lorem(20))),
            keywords: ['Foo', 'Bar', 'Baz'],
          },
          secondary: {
            text: blocks(inline(lorem(20)), inline(lorem(30)), inline(lorem(50))),
            keywords: ['foo', 'bar', 'baz'],
          },
        },
        description: inline`Some random document description that will be wisible in the metadata`,
      }),
    ),
    m.lines(
      set(heading, { numbering: null }),
      m.heading(1, 'Apzīmējumu saraksts'),
      m.terms(
        m.term(['Docs'], ['Typst dokumentācija.', footnote(inline(link('https://typst.com/docs/')))]),
        m.term(
          ['Universe'],
          ['Typst kopienas paketes un šabloni.', footnote(inline(link('https://typst.app/universe/')))],
        ),
      ),
    ),
    m.lines(m.heading(1, 'Ievads'), inline(lorem(100), ref(label('typst')))),
    set(heading, { numbering: '1.' }),
    m.lines(
      m.heading(1, 'Nodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
    ),
    m.lines(
      m.heading(1, 'Nodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
    ),
    m.lines(
      m.heading(1, 'Nodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
      m.heading(2, 'Apakšnodaļas nosaukums'),
    ),
    m.lines(set(heading, { numbering: null }), m.heading(1, 'Rezultāti'), m.heading(1, 'Secinājumi')),
    inline(bibliographyHere()),
    m.lines(
      m.heading(1, 'Pielikumi'),
      inline(
        appendix(
          { caption: 'Appendix table', label: label('table-1') },
          inline(
            space,
            table({ columns: [fr(1), fr(2)] }, table.header(inline`Foo`, inline`Bar`), lorem(10), lorem(20)),
            space,
          ),
        ),
      ),
    ),
    inline(
      figure(
        { kind: 'appendix', caption: 'Another table' },
        table({ columns: [fr(1), fr(2)] }, table.header(inline`Foo`, inline`Bar`), lorem(10), lorem(20)),
      ),
    ),
  )
}
