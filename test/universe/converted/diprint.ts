// Converted from test/universe/corpus/diprint.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  center,
  cite,
  color,
  define,
  doc,
  external,
  figure,
  gradient,
  importPackage,
  inline,
  label,
  labelled,
  m,
  path,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  spread,
  square,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const diprint = external('diprint')
  const diprintAppendices = external('diprint-appendices')
  const diprint_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(diprint)
  return doc(
    importPackage('@preview/diprint:0.1.1', [diprint, diprintAppendices]),
    show(
      diprint_with({
        title: 'Typst Template for arXiv-style Preprints',
        authors: [
          { name: 'wylited', email: 'wylited@gmail.com', affiliation: 'Earth' },
          {
            name: 'Author Two',
            email: 'author.two@institute.org',
            affiliation: 'Institute of Research',
            orcid: '0000-0000-0000-0000',
          },
        ],
        abstract: inline`${space}A brief abstract summarizing the paper. Keep it to a single paragraph covering the motivation,
approach, and main findings. The template centres the abstract heading and sets the body justified
with hyphenation off, matching the arXiv convention.${space}`,
        keywords: ['keyword one', 'keyword two'],
        date: 'January 2025',
      }),
    ),
    set(cite, { style: 'chicago-author-date' }),
    m.heading(1, 'Introduction'),
    'This template reproduces the clean single-column layout of arXiv preprints — double horizontal rules, centred title and author block, abstract with small-caps heading, and numbered sections. It compiles to both PDF and HTML from the same source.',
    inline`The body font is New Computer Modern, set justified with no hyphenation. Headings are numbered
"1.1" style and the first page carries a centred page number in the footer.`,
    m.heading(1, 'Related Work'),
    inline`Prior art includes the original ${ref(label('vaswani2017attention'))} transformer architecture
and later work on model compression ${ref(label('hinton2015distilling'))}. The long short-term
memory network ${ref(label('hochreiter1997long'))} remains a foundational sequence model.`,
    inline`Bringhurst's ${ref(label('bringhurst2004elements'))} is the standard reference for typographic
craft and informs many of the spacing decisions in this template.`,
    m.heading(1, 'Methods'),
    inline`The template is a show rule that wraps the document in either PDF layout commands (page margins,
rules, alignments) or semantic HTML elements depending on the target format. The approach uses
Typst's ${raw('std.target')} to branch at compile time.`,
    m.heading(1, 'Results'),
    'Tables and figures are numbered automatically.',
    inline(
      table(
        { align: center, columns: [auto, auto, auto], stroke: pt(0.5), inset: pt(5) },
        inline`Method`,
        inline`Precision`,
        inline`F1`,
        inline`Baseline`,
        inline`0.72`,
        inline`0.70`,
        inline`Ours`,
        inline`0.89`,
        inline`0.90`,
      ),
    ),
    'Table 1: Results on the benchmark dataset.',
    inline(
      labelled(
        [
          figure(
            { caption: inline`A placeholder figure.` },
            square({ fill: gradient.conic(spread(color.map.rainbow)) }),
          ),
          space,
        ],
        label('fig:placeholder'),
      ),
    ),
    inline`We report precision and F1 scores in the table above. The figure in ${ref(label('fig:placeholder'))}
illustrates the pipeline.`,
    m.heading(1, 'Discussion'),
    'The template handles headings up to four levels. Level-3 and level-4 headings run inline with the text. Equations are numbered as well:',
    inline(unsafeRaw.math.block`sum_(k=1)^n k = (n(n+1)) / 2`),
    'Lists work as usual:',
    m.list(m.item(['Bullet items']), m.item(m.lines('Another bullet', m.list(m.item(['Nested']))))),
    m.enum(m.item(['Ordered items']), m.item(['Another ordered item'])),
    inline(bibliography({ title: inline`References` }, path('references.bib'))),
    show(diprintAppendices),
    m.heading(1, 'Additional Proofs'),
    'Appendix sections use letter-based numbering instead of the numeric scheme used in the main body.',
    m.heading(2, 'A Subsection'),
    inline`Appendices support subsections numbered "A.1", "A.2", and so on.`,
  )
}
