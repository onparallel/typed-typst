// Converted from test/universe/corpus/measured-jair.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  define,
  doc,
  external,
  figure,
  footnote,
  horizon,
  importPackage,
  inline,
  label,
  luma,
  m,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const jair = external('jair')
  const toprule = external('toprule')
  const midrule = external('midrule')
  const botrule = external('botrule')
  const jair_with = define('with')
    .named('abstract', T.content, [])
    .named('appendix', T.content, [])
    .named('article', T.any, null)
    .named('associate-editor', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('doi', T.any, null)
    .named('pubdate', T.any, null)
    .named('received', T.any, null)
    .named('review', T.any, null)
    .named('short-authors', T.any, null)
    .named('short-title', T.any, null)
    .named('title', T.any, null)
    .named('track', T.any, null)
    .named('volume', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(jair)
  return doc(
    importPackage('@preview/measured-jair:0.1.0', [jair, toprule, midrule, botrule]),
    show(
      jair_with({
        title: 'A Typst Template for the Journal of Artificial Intelligence Research',
        shortTitle: 'A Typst Template for JAIR',
        shortAuthors: 'Lovelace & Turing',
        authors: [
          {
            name: 'Ada Lovelace',
            affiliation: 'Analytical Engine Institute, United Kingdom',
            contactAffiliation: 'Analytical Engine Institute, London, United Kingdom',
            email: 'ada@example.org',
            orcid: '0000-0000-0000-0001',
            corresponding: true,
          },
          {
            name: 'Alan Turing',
            affiliation: 'National Physical Laboratory, United Kingdom',
            contactAffiliation: 'National Physical Laboratory, Teddington, United Kingdom',
            email: 'turing@example.org',
            orcid: '0000-0000-0000-0002',
          },
        ],
        abstract: inline`${space}This example exercises the template: the title block, the JAIR metadata blocks, author-year
citations, a numbered equation, a table and a figure, a run-in third-level heading, a footnote,
an appendix, and the first-page contact and license notices. Replace it with your own abstract.${space}`,
        track: 'Insert JAIR Track Name Here',
        associateEditor: 'Insert JAIR AE Name',
        volume: '83',
        article: '1',
        pubdate: 'August 2025',
        year: '2025',
        doi: '10.1613/jair.1.xxxxx',
        review: true,
        received: 'Received 20 February 2007; accepted 5 June 2009',
        bibliography: bibliography(
          { title: inline`References`, style: 'american-psychological-association' },
          path('refs.bib'),
        ),
        appendix: blocks(
          m.heading(1, 'Supplementary material'),
          inline`Content passed as ${raw('appendix:')} is set after the reference list and its headings are lettered.`,
        ),
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`This document shows the Typst port of the JAIR article style. The layout follows ${raw('jair.cls')},
which extends ACM's ${raw('acmart')} in its ${raw('acmlarge')} configuration: US Letter, a single
column of 10pt Linux Libertine, sans-serif headings, and a running foot naming the journal,
volume and article.${footnote(inline`${space}Body footnotes are numbered from 1; the first-page notices do not count.${space}`)}`,
    m.heading(2, 'A subsection'),
    inline`Cite sources in the author-year style JAIR uses ${ref(label('knuth1984texbook'))}. Equations
are numbered on the right:`,
    inline(unsafeRaw.math.block`sum_(i=1)^n i = (n (n+1)) / 2`),
    m.heading(3, 'A third-level heading'),
    inline`Levels 3 and 4 use acmart's run-in faces with a trailing period. Tables take their captions
above and figures below, as in ${raw('acmart')}.`,
    inline(
      figure(
        { caption: inline`A table, captioned above the content, with booktabs rules.` },
        table(
          { columns: 3 },
          toprule,
          table.header(
            inline(strong(inline`Solver`)),
            inline(strong(inline`Solved`)),
            inline(strong(inline`Mean time`)),
          ),
          midrule,
          inline`SATzilla`,
          inline`1,204`,
          inline`12.4 s`,
          inline`Baseline`,
          inline`987`,
          inline`31.8 s`,
          botrule,
        ),
      ),
    ),
    inline(
      figure(
        { caption: inline`A figure, captioned below the content.` },
        rect(
          { width: pct(60), height: pt(48), fill: luma(235), stroke: pt(0.5) },
          blocks(m.lines(set(align, { alignment: add(center, horizon) }), 'Your figure here')),
        ),
      ),
    ),
    m.heading(1, 'Conclusion'),
    inline`Replace this file's contents with your article.`,
  )
}
