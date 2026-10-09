// Converted from test/universe/corpus/reprobe.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  m,
  path,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const techReport = external('tech-report')
  const techReport_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('conclusions', T.content, [])
    .named('future-work', T.content, [])
    .named('introduction', T.content, [])
    .named('keywords', T.any, null)
    .named('methods', T.content, [])
    .named('results', T.content, [])
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(techReport)
  return doc(
    importPackage('@preview/reprobe:0.1.0', [techReport]),
    show(
      techReport_with({
        title: 'My Report',
        subtitle: 'My Subtitle',
        authors: [{ name: 'My Name Lastname', email: 'email@org.edu', affiliation: 1 }],
        affiliations: ['Department, Faculty, University'],
        keywords: ['bioinformatics', 'GPU', 'sequence alignment'],
        abstract: inline`${space}Write this last. One paragraph: what problem you attacked, how you attacked it, what
you measured, and what the numbers mean. Give the headline result as a number rather than an
adjective — "13.8× faster than the baseline" tells a reader more than "substantially faster."${space}`,
        introduction: blocks(
          inline`Motivate the problem and state the contribution. Cite prior work like this ${ref(label('knuth1984'))}.`,
          'A workable shape for this section: what problem exists, why the existing answers fall short, what you did instead, and what the reader will find in the rest of the report. Keep it to a few paragraphs — the details belong in Methods.',
          m.heading(2, 'Background'),
          inline`Subsections are the only headings you write — ${raw('==')} for a subsection, ${raw('===')} for
a sub-subsection. The section headings themselves come from the template.`,
          m.heading(2, 'Contributions'),
          'A bulleted list is a fair way to make the contributions skimmable:',
          m.list(
            m.item(['An implementation of the method described in the Methods section.']),
            m.item(['An evaluation on a public dataset, reported in', space, ref(label('tab:runtime')), '.']),
            m.item(['A discussion of where the approach stops working.']),
          ),
        ),
        methods: blocks(
          'Describe the approach so that somebody else can reproduce it: data, hardware, software versions, parameters. If a reader cannot rerun your work from this section alone, it is not finished yet.',
          m.heading(2, 'Implementation'),
          'Code listings are written with triple backticks and a language name:',
          inline(
            raw(
              { block: true, lang: 'python' },
              'def align(query, ref, gap=-2):\n    return smith_waterman(query, ref, gap)',
            ),
          ),
          m.heading(2, 'Scoring'),
          inline`Display equations are numbered automatically, and you can refer back to them like ${ref(label('eq-score'))}:`,
          inline(
            labelled(
              [
                unsafeRaw.math.block`S(i, j) = max cases(
      S(i - 1, j - 1) + sigma(a_i, b_j),
      S(i - 1, j) + g,
      S(i, j - 1) + g,
      0,
    )`,
                space,
              ],
              label('eq-score'),
            ),
          ),
          inline`where ${unsafeRaw.math`sigma`} is the substitution score and ${unsafeRaw.math`g`} the gap penalty.
Inline math like ${unsafeRaw.math`O(n m)`} goes between single dollar signs.`,
          m.heading(2, 'Setup'),
          'State the hardware and software exactly: CPU and GPU models, memory, compiler and library versions, dataset release, and every parameter you did not leave at its default.',
        ),
        results: blocks(
          'Report what happened. Tables and figures go here.',
          inline(
            labelled(
              [
                figure(
                  { caption: inline`Runtime on the test dataset.` },
                  table(
                    { columns: 3 },
                    table.header(
                      inline(strong(inline`Method`)),
                      inline(strong(inline`Runtime (s)`)),
                      inline(strong(inline`Speedup`)),
                    ),
                    inline`Baseline`,
                    inline`120.4`,
                    inline`1.0×`,
                    inline`Ours`,
                    inline`8.7`,
                    inline`13.8×`,
                  ),
                ),
                space,
              ],
              label('tab:runtime'),
            ),
          ),
          inline`Refer to floats by label — ${ref(label('tab:runtime'))} — rather than by position, since the
layout may move them. Report the measurement conditions along with the numbers: how many runs,
and what the spread across them was.`,
          'Save the interpretation for the Conclusions. This section is for what the instruments said, including the runs that did not go your way.',
        ),
        conclusions: inline`${space}What the results support — and what they do not. Tie each claim back to a specific number
above, and name the threats to validity plainly: dataset size, hardware specificity, parameters
you did not sweep.${space}`,
        futureWork: inline`${space}The next experiments, in the order you would run them, with a sentence each on what
outcome would be informative.${space}`,
        acknowledgments: inline`${space}This work was supported by the MegaProbe Lab.${space}`,
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
  )
}
