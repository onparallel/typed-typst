// Converted from test/universe/corpus/clean-acmart.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  circle,
  colbreak,
  data,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  lorem,
  m,
  math,
  path,
  pt,
  ref,
  right,
  set,
  show,
  space,
  super_,
  sym,
  table,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const acmart = external('acmart')
  const acmartCcs = define('acmart-ccs').pos('arg1', T.any).returns(T.any).external()
  const acmartKeywords = define('acmart-keywords').pos('arg1', T.any).returns(T.any).external()
  const acmartRef = define('acmart-ref')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .returns(T.any)
    .external()
  const toString = define('to-string').pos('arg1', T.any).returns(T.any).external()
  const acmart_with = define('with')
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('conference', T.any, null)
    .named('copyright', T.any, null)
    .named('doi', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(acmart)
  const [cuhkDecl, cuhk] = let_('cuhk', super_(sym.suit.spade))
  const [titleDecl, title_2] = let_('title', inline`${space}Insert Your Title Here∗${space}`)
  const [authorsDecl, authors] = let_('authors', [
    { name: inline`Junliang Hu`, email: inline`jlhu@cse.cuhk.edu.hk`, mark: cuhk },
    { name: 'FirstName1 Surname1', email: 'email1@email.com', mark: super_(sym.suit.diamond) },
    { name: 'FirstName2 Surname2', email: 'email2@email.com', mark: super_(sym.suit.diamond) },
  ])
  const [affiliationsDecl, affiliations] = let_('affiliations', [
    {
      name: inline`The Chinese University of Hong Kong`,
      mark: cuhk,
      department: inline`Department of Computer Science and Engineering`,
    },
    { name: inline`Institution/University Name`, mark: super_(sym.suit.diamond), department: inline`Department Name` },
  ])
  const [conferenceDecl, conference] = let_('conference', {
    name: inline`ACM SIGOPS 31th Symposium on Operating Systems Principles`,
    short: inline`SOSP ’25`,
    year: inline`2025`,
    date: inline`October 13–16`,
    venue: inline`Seoul, Republic of Korea`,
  })
  const [doiDecl, doi] = let_('doi', 'https://doi.org/10.1145/0000000000')
  const [ccsDecl, ccs] = let_('ccs', [
    { generic: inline`Software and its engineering`, specific: [inline`Virtual machines`, inline`Virtual memory`] },
    { generic: inline`Computer systems organization`, specific: [inline`Heterogeneous (hybrid) systems`] },
  ])
  const [keywordsDecl, keywords] = let_('keywords', data(['Virtual machine', 'Virtual memory', 'Operating system']))
  return doc(
    importPackage('@preview/clean-acmart:0.0.1', [acmart, acmartCcs, acmartKeywords, acmartRef, toString]),
    cuhkDecl,
    m.lines(titleDecl, authorsDecl, affiliationsDecl, conferenceDecl, doiDecl, ccsDecl, keywordsDecl),
    show(
      acmart_with({
        title: title_2,
        authors: authors,
        affiliations: affiliations,
        conference: conference,
        doi: doi,
        copyright: 'cc',
      }),
    ),
    m.lines(
      m.heading(1, 'Abstract'),
      'The process of scientific writing is often tangled up with the intricacies of typesetting, leading to frustration and wasted time for researchers. In this paper, we introduce Typst, a new typesetting system designed specifically for scientific writing. Typst untangles the typesetting process, allowing researchers to compose papers faster. In a series of experiments we demonstrate that Typst offers several advantages, including faster document creation, simplified syntax, and increased ease-of-use.',
    ),
    inline(
      acmartCcs(ccs),
      space,
      acmartKeywords(keywords),
      space,
      acmartRef(toString(title_2), authors, conference, doi),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Scientific writing is a crucial part of the research process, allowing researchers to share
their findings with the wider scientific community. However, the process of typesetting scientific
documents can often be a frustrating and time-consuming affair, particularly when using outdated
tools such as LaTeX. Despite being over 30 years old, it remains a popular choice for scientific
writing due to its power and flexibility. However, it also comes with a steep learning curve,
complex syntax, and long compile times, leading to frustration and despair for many researchers
${ref(label('netwok2020'))} ${ref(label('netwok2022'))}.`,
    ),
    m.lines(
      m.heading(2, 'Paper overview'),
      'In this paper we introduce Typst, a new typesetting system designed to streamline the scientific writing process and provide researchers with a fast, efficient, and easy-to-use alternative to existing systems. Our goal is to shake up the status quo and offer researchers a better way to approach scientific writing.',
    ),
    'By leveraging advanced algorithms and a user-friendly interface, Typst offers several advantages over existing typesetting systems, including faster document creation, simplified syntax, and increased ease-of-use.',
    'To demonstrate the potential of Typst, we conducted a series of experiments comparing it to other popular typesetting systems, including LaTeX. Our findings suggest that Typst offers several benefits for scientific writing, particularly for novice users who may struggle with the complexities of LaTeX. Additionally, we demonstrate that Typst offers advanced features for experienced users, allowing for greater customization and flexibility in document creation.',
    'Overall, we believe that Typst represents a significant step forward in the field of scientific writing and typesetting, providing researchers with a valuable tool to streamline their workflow and focus on what really matters: their research. In the following sections, we will introduce Typst in more detail and provide evidence for its superiority over other typesetting systems in a variety of scenarios.',
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Methods')), label('sec:methods'))),
      set(math.equation, { numbering: '1.' }),
      inline(lorem(45)),
    ),
    inline(labelled([unsafeRaw.math.block`a + b = gamma`, space], label('eq:gamma'))),
    inline(lorem(80)),
    inline(
      labelled(
        [
          figure({ placement: null, caption: inline`A circle representing the Sun.` }, circle({ radius: pt(15) })),
          space,
        ],
        label('fig:sun'),
      ),
    ),
    inline`In ${ref(label('fig:sun'))} you can see a common representation of the Sun, which is a star
that is located at the center of the solar system.`,
    inline(lorem(120)),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`The Planets of the Solar System and Their Average Distance from the Sun`,
              placement: top,
            },
            table(
              {
                columns: [em(6), auto],
                align: [left, right],
                inset: { x: pt(8), y: pt(4) },
                stroke: (x, y) => unsafeRaw.code<any>`if y <= 1 { (top: 0.5pt) }`,
                fill: (x_2, y_2) => unsafeRaw.code<any>`if y > 0 and calc.rem(y, 2) == 0  { rgb("#efefef") }`,
              },
              table.header(inline`Planet`, inline`Distance (million km)`),
              inline`Mercury`,
              inline`57.9`,
              inline`Venus`,
              inline`108.2`,
              inline`Earth`,
              inline`149.6`,
              inline`Mars`,
              inline`227.9`,
              inline`Jupiter`,
              inline`778.6`,
              inline`Saturn`,
              inline`1,433.5`,
              inline`Uranus`,
              inline`2,872.5`,
              inline`Neptune`,
              inline`4,495.1`,
            ),
          ),
          space,
        ],
        label('tab:planets'),
      ),
    ),
    inline`In ${ref(label('tab:planets'))}, you see the planets of the solar system and their average distance
from the Sun. The distances were calculated with ${ref(label('eq:gamma'))} that we presented
in ${ref(label('sec:methods'))}.`,
    inline(lorem(240)),
    inline(lorem(240)),
    m.lines(m.heading(1, 'Acknowledgement'), inline(lorem(20))),
    inline(bibliography({ title: 'References', style: 'association-for-computing-machinery' }, path('refs.bib'))),
    inline(colbreak({ weak: true }), space, set(heading, { numbering: 'A.a.a' })),
    m.lines(m.heading(1, 'Artifact Appendix'), 'In this section we show how to reproduce our findings.'),
  )
}
