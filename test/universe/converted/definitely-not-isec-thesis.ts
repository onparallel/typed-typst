// Converted from test/universe/corpus/definitely-not-isec-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  m,
  path,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const notationsPage = define('notations-page').pos('arg1', T.any).returns(T.any).external()
  const notat = external('notat')
  const acronymsPage = define('acronyms-page').pos('arg1', T.any).returns(T.any).external()
  const acros = external('acros')
  const appendix = external('appendix')
  const thesis_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('acronyms', T.any, null)
    .named('author', T.any, null)
    .named('curriculum', T.content, [])
    .named('date', T.content, [])
    .named('debug', T.any, null)
    .named('institute', T.content, [])
    .named('keywords', T.any, null)
    .named('kurzfassung', T.any, null)
    .named('list-of-figures', T.any, null)
    .named('list-of-listings', T.any, null)
    .named('list-of-tables', T.any, null)
    .named('notations', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/definitely-not-isec-thesis:2.0.0', [
      thesis,
      notationsPage,
      notat,
      acronymsPage,
      acros,
      appendix,
    ]),
    show(
      thesis_with({
        title: inline`${space}Title and ${linebreak()} Subtitle ${linebreak()} of the Thesis ${linebreak()} (up to
4 Lines) ${linebreak()}${space}`,
        author: [inline`Firstname Lastname`, inline`BSc`],
        curriculum: inline`Computer Science`,
        supervisors: [
          [inline`Firstname Lastname`, inline`Academic Degrees`],
          [inline`Firstname Lastname`, inline`Academic Degrees`],
        ],
        institute: inline`Institute of Information Security`,
        date: inline`Month Year`,
        acknowledgements: inline`${space}Thanks everyone who made this thesis possible${space}`,
        abstract: blocks(
          'English abstract of your thesis (at most one page)',
          'The abstract usually consists of two main parts: a motivational background and your contribution. Start with a few sentences of general introduction and background information to motivate your main research question/challenge. Then, summarize what your paper contributes and describe its (potential) impact. This includes a very short summary of all your important results and core performance numbers that characterize your approach/attack/countermeasure/implementation. Finally, summarize any key conclusions and calls to action that you have, e.g., apply the idea more broadly, get rid of some technology, find a countermeasure, or similar.',
        ),
        kurzfassung: {
          title: inline`Kurzfassung`,
          abstract: inline`${space}Deutsche Kurzfassung der Abschlussarbeit (maximal eine Seite)${space}`,
          ktitle: inline`Schlagwörter`,
          keywords: [inline`Einige Stichwörter...`],
        },
        keywords: [inline`Broad keyword`, inline`Keyword`, inline`Specific Keyword`, inline`Another specific keyword`],
        notations: { xor: [inline(sym.xor.big), 'exclusive-or (Xor)'] },
        acronyms: { ISEC: 'Institute of Information Security' },
        listOfFigures: true,
        listOfTables: true,
        listOfListings: true,
        debug: false,
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('sec:intro'))),
    inline(labelled(heading({ depth: 1 }, inline('Background')), label('sec:background'))),
    inline(labelled(heading({ depth: 1 }, inline('Attack')), label('sec:attack'))),
    inline(labelled(heading({ depth: 1 }, inline('Evaluation')), label('sec:evaluation'))),
    inline(labelled(heading({ depth: 1 }, inline('Discussion')), label('sec:discussion'))),
    inline(notationsPage(notat)),
    inline(acronymsPage(acros)),
    inline(labelled(bibliography(path('bibliography.bib')), label('sec:bibliography'))),
    show(appendix),
    inline(labelled(heading({ depth: 1 }, inline('Code Listings')), label('sec:codelistings'))),
  )
}
