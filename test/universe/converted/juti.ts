// Converted from test/universe/corpus/juti.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  data,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  move,
  path,
  pct,
  quote,
  ref,
  set,
  space,
  strike,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const juti = external('juti')
  const setup = external('setup')
  const juti_initAuthors = define('init-authors').pos('arg1', T.any).returns(T.any).external(juti)
  const juti_template = define('template')
    .rest('args', T.any)
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('corresponding-email', T.any, null)
    .named('corresponding-ref', T.any, null)
    .named('institutions', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(juti)
  const juti_credits = define('credits').pos('arg1', T.any).returns(T.any).external(juti)
  const juti_orcid = define('orcid').pos('arg1', T.any).returns(T.any).external(juti)
  const [authorsDecl, authors] = let_(
    'authors',
    juti_initAuthors([
      { name: 'First Alpha Author', institutionRef: [0, 1], contributionRefs: [0, 1, 2, 5, 6, 7, 8, 10, 13] },
      { name: 'Second Beta Author', institutionRef: 0, contributionRefs: [6, 9, 11], orcid: 'XXXX-XXXX-XXXX-XXXX' },
      {
        name: 'Third Charlie Author',
        institutionRef: 1,
        contributionRefs: [3, 4, 6, 9, 11, 12],
        orcid: 'XXXX-XXXX-XXXX-XXXX',
      },
    ]),
  )
  const [institutionsDecl, institutions] = let_('institutions', [
    { name: 'Department and institution name of authors', address: 'Address of the first institution' },
    { name: 'Department and institution name of authors', address: 'Address of the second institution' },
  ])
  const [hbarDecl, hbar] = let_(
    'hbar',
    data([
      sym.wj,
      move({ dy: em(-0.08) }, strike({ offset: em(-0.55), extent: em(-0.05) }, sym.planck)),
      sym.wj,
    ]).join(),
  )
  return doc(
    m.lines(importPackage('@preview/juti:0.1.1', juti), importFile('setup.typ', [setup])),
    authorsDecl,
    institutionsDecl,
    unsafeRaw.markup`#show: juti.template.with(
  title: "Preparation of papers for jurnal ilmiah teknologi informasi",
  authors: authors,
  corresponding-ref: 0,
  corresponding-email: "first-author@email.com",
  institutions: institutions,
  abstract: [
    These instructions give you guidelines for preparing JUTI (Jurnal Ilmiah Teknologi Informasi) papers. The electronic file of your paper will be formatted further by JUTI editorial board. Paper titles should be written in uppercase. Avoid writing long formulas with subscripts in the title; short formulas that identify the elements are fine (e.g., "Nd--Fe--B"). Do not write “(Invited)” in the title. Full names of authors are preferred in the author field but are not required. If you have to shorten the author’s name, leave first name and last name unshorten. Put a space between authors’ initials. Do not cite references in the abstract. The length of abstract must between 150 -- 250 words.
  ],
  keywords: (
    "Keyword1",
    "Keyword2",
    "Keyword3",
    "Keyword4",
  ),
  bib: bibliography("references.bib"),
  ..setup,
)`,
    m.heading(1, 'Introduction'),
    inline`Example of citation ${ref(label('abbas2009automatic'))}, or multiple citations ${ref(label('abbas2009automatic'))}
${ref(label('yuhana2022automatic'))}. ${lorem(100)}`,
    m.heading(1, 'Literature review'),
    inline`${lorem(100)} Table example can be seen on ${ref(label('tab-example'))}. Image example can be
seen on ${ref(label('img-example'))}. The Schrodinger's famous equation can be seen on ${ref(label('eq-example'))}.`,
    m.lines(
      hbarDecl,
      inline(
        labelled(
          [
            unsafeRaw.math
              .block`i hbar (partial Psi(x, t)) / (partial t) = -frac(hbar^2, 2m) nabla^2 Psi(x, t) + V(x) Psi(x, t)`,
            space,
          ],
          label('eq-example'),
        ),
      ),
    ),
    m.heading(2, 'Subsection title'),
    inline(lorem(100)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Table example.` },
            table(
              { columns: 4, align: (x, y) => unsafeRaw.code<any>`if x > 0 and y > 0 { left } else { center }` },
              table.header(
                table.hline(),
                inline(strong(inline`No`)),
                inline(strong(inline`Year`)),
                inline(strong(inline`Climate Change Event`)),
                inline(strong(inline`Impact`)),
                table.hline(),
              ),
              inline`1`,
              inline`1988`,
              inline`Establishment of the IPCC`,
              inline`Increased global awareness and scientific assessments`,
              inline`2`,
              inline`1997`,
              inline`Kyoto Protocol Adopted`,
              inline`Legally binding emission reduction targets for developed countries`,
              inline`3`,
              inline`2015`,
              inline`Paris Agreement Signed`,
              inline`Global commitment to limit warming below 2°C`,
              inline`4`,
              inline`2021`,
              inline`COP26 Held in Glasgow`,
              inline`Strengthened climate targets and financial commitments`,
              inline`5`,
              inline`2009`,
              inline`Copenhagen Accord`,
              inline`Pledged climate finance of $100 billion per year`,
              inline`6`,
              inline`2007`,
              inline`IPCC Fourth Assessment Report`,
              inline`Highlighted human influence on climate change`,
              inline`7`,
              inline`2018`,
              inline`IPCC Special Report on 1.5°C`,
              inline`Urgent need for emission reductions to avoid severe impacts`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('tab-example'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Logo of JUTI: Jurnal Ilmiah Teknologi Informasi. Note that ${quote(inline`Fig.`)} is abbreviated.
There is a period after the figure number, followed by two spaces. It is good practice to explain
the significance of the figure in the caption.`,
            },
            image({ width: pct(40) }, path('figure1.jpg')),
          ),
          space,
        ],
        label('img-example'),
      ),
    ),
    inline(lorem(100)),
    m.heading(3, 'Subsubsection title'),
    inline(lorem(100)),
    inline(lorem(100)),
    set(heading, { numbering: null }),
    m.heading(1, 'CRediT authorship contribution statement'),
    inline(juti_credits(authors)),
    m.heading(1, 'Declaration of competing interest'),
    'The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.',
    m.heading(1, 'Acknowledgement'),
    inline`This research was funded by ...`,
    m.heading(1, 'Data availability'),
    m.lines(
      'Please choose the appropriate data availability statement that applies to this study. If none apply, provide a custom statement.',
      m.list(
        m.item([
          'The data used to support the findings of this study are available from the corresponding author upon request.',
        ]),
        m.item(['All relevant data are within the manuscript and its supporting information files.']),
        m.item(['The dataset was openly provided [link provided].']),
        m.item([
          'Data sharing is not applicable to this article as no datasets were generated or analyzed during the current study.',
        ]),
        m.item([
          'Data sharing is not applicable as the data are secondary data drawn from already published literature.',
        ]),
        m.item([
          'The datasets generated during and/or analyzed during the current study are available from the corresponding author on reasonable request.',
        ]),
        m.item(['Following acceptance and before publication, all data will be provided on a public repository.']),
        m.item(['No data are available.']),
      ),
    ),
    m.heading(1, 'Declaration of generative AI and AI-assisted technologies in the writing process'),
    'The authors used generative AI to improve the writing clarity of this paper. They reviewed and edited the AI-assisted content and take full responsibility for the final publication.',
    m.heading(1, 'ORCID'),
    inline(juti_orcid(authors)),
  )
}
