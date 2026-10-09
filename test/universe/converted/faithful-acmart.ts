// Converted from test/universe/corpus/faithful-acmart.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  box,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  link,
  ltr,
  m,
  pt,
  raw,
  ref,
  show,
  smartquote,
  space,
  stack,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const acmart = external('acmart')
  const tabular = define('tabular')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.any)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.content)
    .pos('arg11', T.content)
    .pos('arg12', T.content)
    .pos('arg13', T.content)
    .pos('arg14', T.content)
    .pos('arg15', T.any)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const toprule = define('toprule').returns(T.any).external()
  const midrule = define('midrule').returns(T.any).external()
  const bottomrule = define('bottomrule').returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const cite_2 = define('cite').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const citeText = define('cite-text').pos('arg1', T.any).returns(T.any).external()
  const acks = define('acks').pos('arg1', T.content).returns(T.any).external()
  const bibliography_2 = define('bibliography').pos('arg1', T.any).returns(T.any).external()
  const acmart_with = define('with')
    .named('abstract', T.content, [])
    .named('acm-article', T.any, null)
    .named('acm-month', T.any, null)
    .named('acm-number', T.any, null)
    .named('acm-volume', T.any, null)
    .named('acm-year', T.any, null)
    .named('authors', T.any, null)
    .named('copyright', T.any, null)
    .named('doi', T.any, null)
    .named('format', T.any, null)
    .named('journal', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(acmart)
  return doc(
    importPackage('@preview/faithful-acmart:0.2.0', [
      acmart,
      tabular,
      toprule,
      midrule,
      bottomrule,
      theorem,
      proof,
      cite_2,
      citeText,
      acks,
      bibliography_2,
    ]),
    show(
      acmart_with({
        format: 'acmsmall',
        title: 'Writing ACM papers with faithful-acmart',
        journal: 'JACM',
        acmVolume: 1,
        acmNumber: 1,
        acmArticle: 1,
        acmYear: 2026,
        acmMonth: 7,
        doi: '10.1145/nnnnnnn.nnnnnnn',
        copyright: 'acmlicensed',
        authors: [
          { name: 'Ada Lovelace', note: inline`Both authors contributed equally.`, email: 'ada@example.org' },
          {
            name: 'Charles Babbage',
            note: inline`Both authors contributed equally.`,
            corresponding: true,
            email: 'charles@example.org',
            affiliation: { institution: 'Analytical Engine Institute', city: 'London', country: 'UK' },
          },
        ],
        abstract: inline`${space}This guide shows how to write an ACM-style paper with faithful-acmart. It explains the
document settings and demonstrates headings, figures, tables, equations, citations, and theorems.
Open its source file, main.typ, to copy or change an example.${space}`,
        keywords: ['ACM', 'Typst', 'paper template'],
      }),
    ),
    m.heading(1, 'Start your paper'),
    inline`Typst compiles a ${raw('.typ')} text file into a PDF. The faithful-acmart package supplies ACM
journal and conference layouts, including author information, captions, and bibliography styles
based on LaTeX acmart.`,
    inline`Edit the settings at the top of ${raw('main.typ')}, then replace the text below them with your
paper. The companion file ${raw('refs.bib')} holds bibliography entries. Run ${raw('typst compile main.typ')}
to build the PDF with the command-line compiler.`,
    inline`Use Typst 0.14 or later and install the fonts listed in the ${link('https://github.com/fzaiser/faithful-acmart', inline`package README`)}
before compiling.`,
    m.heading(2, 'The import and show rule'),
    inline`The first line imports the package; keep ${raw('*')} to include its citation and bibliography
functions. The ${raw('#show: acmart.with(...)')} rule applies the layout. Keep one such rule
and put your settings inside its parentheses.`,
    inline`In Typst, ${raw('#')} introduces a function call or other code. Use quotes for plain text, as
in ${raw('title: "My paper"')}, and square brackets for content that can include formatting,
as in ${raw('abstract: [My summary.]')}.`,
    m.heading(2, 'Choose a format and add authors'),
    inline`Choose the format requested by your venue; ${ref(label('formats'))} lists common choices. This
guide uses ${raw('format: "acmsmall"')}. If you omit ${raw('format')}, the package uses ${raw('"manuscript"')}.`,
    inline`Replace the sample names, email addresses, and affiliations in ${raw('authors')}. Every affiliation
you supply needs a ${raw('country')}. The authors of this guide share an affiliation: in a journal
title block, put it on the last author in the group. Identical ${raw('note')} values share a
footnote mark. Set ${raw('corresponding: true')} on at most one author.`,
    m.heading(1, 'Write the body'),
    inline`Write paragraphs as ordinary text, with a blank line between them. Start a line with ${raw('=')},
${raw('==')}, or ${raw('===')} for a section, subsection, or third-level heading. The package
supplies the numbering, fonts, and spacing for the chosen format.`,
    m.heading(2, 'Figures and references'),
    inline`Use ${raw('figure')} to add a caption and number to an image or diagram, as in ${ref(label('compilation'))}.`,
    inline(
      labelled(
        [
          figure(
            { placement: null, caption: inline`Compiling a Typst source file produces a PDF.` },
            stack(
              { dir: ltr, spacing: pt(8) },
              box({ inset: pt(6), stroke: pt(0.5) }, inline`main.typ`),
              inline`→`,
              box({ inset: pt(6), stroke: pt(0.5) }, inline`Typst`),
              inline`→`,
              box({ inset: pt(6), stroke: pt(0.5) }, inline`main.pdf`),
            ),
          ),
          space,
        ],
        label('compilation'),
      ),
    ),
    inline`Replace the diagram with ${raw('image("plot.png", width: 6cm)')} to use your own image file.
The label ${raw('<compilation>')} after the figure lets ${raw('@compilation')} insert its number
in the text. Use the same label-and-reference pattern for tables and theorems.`,
    m.lines(
      m.heading(3, 'Placing figures'),
      inline`Set ${raw('placement: none')} to keep a figure with its explanation, as above, or ${raw('placement: top')}
to let it float to the top of a page or column. This paragraph also demonstrates a third-level
heading: to let the heading share a line with its paragraph, leave no blank line between them
in the source.`,
    ),
    m.heading(2, 'Tables'),
    inline`Use ${raw('tabular')} inside ${raw('figure')} for a numbered table with its caption above, as
in ${ref(label('formats'))}.`,
    inline(
      labelled(
        [
          figure(
            { placement: null, caption: inline`Three commonly used formats; the README lists all supported formats.` },
            tabular(
              { columns: 3 },
              toprule(),
              inline`Format`,
              inline`Columns`,
              inline`Typical use`,
              midrule(),
              inline(raw('manuscript')),
              inline`1`,
              inline`Review manuscript`,
              inline(raw('acmsmall')),
              inline`1`,
              inline`Journal article`,
              inline(raw('sigconf')),
              inline`2`,
              inline`Conference paper`,
              bottomrule(),
            ),
          ),
          space,
        ],
        label('formats'),
      ),
    ),
    inline`Read the cells in the source from left to right, with three cells per row. The rule helpers
add horizontal lines and the spacing used by booktabs tables. Pass ${raw('columns')} directly
to ${raw('tabular')} so it can identify the header row.`,
    m.heading(2, 'Equations, theorems, and proofs'),
    inline`Put math between dollar signs: ${raw('$n + 1$')} produces ${unsafeRaw.math`n + 1`}. Add spaces
inside the dollar signs for a displayed equation; the proof below contains one. Use ${raw('theorem')}
for a numbered statement and ${raw('proof')} for its proof; the optional ${raw('name')} gives
the statement a name.`,
    inline(
      labelled(
        [
          theorem(
            { name: 'Sum of consecutive integers' },
            inline`${space}For every positive integer ${unsafeRaw.math`n`}, the sum of the integers from ${unsafeRaw.math`1`}
to ${unsafeRaw.math`n`} is ${unsafeRaw.math`n(n + 1) / 2`}.${space}`,
          ),
          space,
        ],
        label('sum-theorem'),
      ),
    ),
    inline(
      proof(inline`${space}Let ${unsafeRaw.math`S = 1 + 2 + dots + n`}. Add this sum to the same terms in reverse
order, pairing each term with its counterpart: ${unsafeRaw.math.block`2S = (1 + n) + (2 + (n - 1)) + dots + (n + 1) = n(n + 1).`}
Divide by two.${space}`),
    ),
    inline`Writing ${raw('@sum-theorem')} produces ${ref(label('sum-theorem'))}. Numbers update when you
insert or move statements and restart in each section. Lemmas, definitions, and the other numbered
theorem environments share the same counter.`,
    m.heading(1, 'Cite sources'),
    inline`Replace the two example articles in ${raw('refs.bib')} with your sources. Each entry has a key,
such as ${raw('Kahn1962')}, that connects citations to the reference list.`,
    'Here are three ways to cite those entries:',
    m.list(
      m.item([raw('@Kahn1962'), space, 'gives a single citation:', space, ref(label('Kahn1962')), '.']),
      m.item([
        raw('@Kahn1962[p. 558]'),
        space,
        'adds a page number:',
        space,
        ref({ supplement: inline`p. 558` }, label('Kahn1962')),
        '.',
      ]),
      m.item([
        raw('#cite(<Kahn1962>, <Tarjan1972>)'),
        space,
        'groups sources:',
        space,
        cite_2(label('Kahn1962'), label('Tarjan1972')),
        '.',
      ]),
    ),
    inline`When an author's name belongs in the sentence, use ${raw('cite-text')}. For example, ${raw('#cite-text(<Kahn1962>)')}
produces ${citeText(label('Kahn1962'))}. The reference list at the end of this guide comes from
${raw('#bibliography("refs.bib")')}. Keep that call after the body of your paper.`,
    inline`References use ACM's BibTeX style by default. Set ${raw('cite-style: "author-year"')} on the
show rule if your venue requests author–year citations.`,
    m.heading(1, 'Prepare a submission'),
    inline`Use your venue's instructions to choose the format and review settings. These options have separate
effects:`,
    m.list(
      m.item([
        raw('anonymous: true'),
        space,
        'hides authors in the title and PDF author metadata, and suppresses content inside',
        space,
        raw('acks'),
        '. Wrap identifying passages in',
        space,
        raw('anon'),
        space,
        'to replace them in anonymous mode; other body text remains visible.',
      ]),
      m.item([
        raw('review: true'),
        space,
        'adds line and page numbers and uses acmart',
        smartquote({ double: false }),
        's review list spacing.',
      ]),
    ),
    inline`For example, ${raw('#anon[Our project website]')} becomes “ANONYMIZED” in anonymous mode.`,
    inline`Replace the sample journal, volume, issue, article number, DOI, and copyright settings with
the values supplied for your paper. For conference papers, use ${raw('conference')} and ${raw('booktitle')}
to describe the proceedings. Set ${raw('nonacm: true')} while trying the layout if you want
to suppress ACM publication notices.`,
    'The README links to the full reference, including ACM classification concepts, translated abstracts, and publication notices. Check your PDF after changing formats; TeX and Typst can produce different line and page breaks.',
    inline(
      acks(inline`${space}Put acknowledgments inside ${raw('acks')}, as this paragraph is, so the package can
omit them in anonymous mode.${space}`),
    ),
    inline(bibliography_2('refs.bib')),
  )
}
