// Converted from test/universe/corpus/superb-pci.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cite,
  define,
  deg,
  doc,
  em,
  emph,
  external,
  figure,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  pagebreak,
  parbreak,
  path,
  pct,
  pt,
  raw,
  ref,
  rotate,
  set,
  show,
  space,
  sym,
  symbol,
  table,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const pci = external('pci')
  const table_note = define('table_note').pos('arg1', T.content).returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const pci_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('correspondence', T.any, null)
    .named('doi', T.any, null)
    .named('keywords', T.any, null)
    .named('line_numbers', T.any, null)
    .named('numbered_sections', T.any, null)
    .named('pcj', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(pci)
  return doc(
    importPackage('@preview/superb-pci:0.2.0', [pci, table_note, appendix]),
    show(
      pci_with({
        title: inline`Sample for the template, with quite a very long title`,
        abstract: inline(lorem(200)),
        authors: [
          { name: 'Antoine Lavoisier', orcid: '0000-0000-0000-0001', affiliations: '#,1' },
          { name: 'Mary P. Curry', orcid: '0000-0000-0000-0001', affiliations: '#,2' },
          { name: 'Peter Curry', affiliations: '2' },
          { name: 'Dick Darlington', orcid: '0000-0000-0000-0001', affiliations: '3' },
        ],
        affiliations: [
          { id: '1', name: 'Rue sans aplomb, Paris, France' },
          { id: '2', name: 'Center for spiced radium experiments, United Kingdom' },
          { id: '3', name: "Bruce's Bar and Grill, London (near Susan's)" },
          { id: '#', name: 'Equal contributions' },
        ],
        doi: 'https://doi.org/10.5802/fake.doi',
        keywords: ['Scientific writing', 'Typst', 'PCI', 'Example'],
        correspondence: 'a-lavois@lead-free-univ.edu',
        numbered_sections: false,
        bibliography: bibliography(path('refs.bib')),
        pcj: false,
        line_numbers: true,
      }),
    ),
    m.lines(m.heading(1, 'Example of a section, e.g. Introduction'), inline(lorem(100))),
    m.lines(m.heading(1, 'Example of a section, e.g. Material and methods'), inline(lorem(100))),
    m.lines(m.heading(2, 'First subsection'), inline(lorem(100))),
    m.lines(m.heading(2, 'Second subsection'), inline(lorem(200))),
    m.lines(m.heading(2, 'Third subsection'), inline(lorem(100))),
    m.lines(m.heading(1, 'Example of a section, e.g. Results'), inline(lorem(100))),
    inline(
      pagebreak(),
      space,
      rotate(
        { reflow: true },
        deg(-90),
        blocks(m.lines(m.heading(1, 'Landscape section'), inline(lorem(100))), inline(lorem(50)), inline(lorem(50))),
      ),
      space,
      pagebreak(),
    ),
    m.lines(m.heading(1, 'Example of a section, e.g. Discussion'), inline(lorem(100))),
    m.list(
      m.item(['toto (see Appendix', sym.space.nobreak, 'sA and', space, ref(label('eq:eq1')), ')']),
      m.item(['foo (see', space, ref(label('fig:fig1')), ')']),
      m.item(['bar']),
    ),
    m.lines(m.heading(2, 'An other subsection'), inline(lorem(100))),
    m.enum(
      m.item(['first item']),
      m.item(
        m.lines(
          'second item',
          m.enum(
            m.item([labelled('2a', label('2a')), space, 'item', space, link(label('2a'), inline`2a`)]),
            m.item([
              'item 2b (cf.',
              sym.space.nobreak,
              cite(
                { form: 'prose', supplement: inline`Thm.${sym.space.nobreak}3` },
                label('Ivanov_curve-complex_1997'),
              ),
            ]),
          ),
        ),
      ),
    ),
    m.lines(m.heading(3, 'A subsubsection'), inline(lorem(100))),
    'This is an equation:',
    inline(labelled([unsafeRaw.math.block`1 = 1`, space], label('eq:eq1'))),
    inline`A paragraph. ${lorem(100)}`,
    inline(unsafeRaw.math
      .block`exp(x) = 1 + x + frac(x^2, 2!) + frac(x^3, 3!) + frac(x^4, 4!) + frac(x^5, 5!) + frac(x^6, 6!) + frac(x^7, 7!) +frac(x^8, 8!) +frac(x^9, 9!) \\
  + frac(x^10, 10!) + frac(x^11, 11!)+ frac(x^12, 12!) + frac(x^13, 13!) + frac(x^14, 14!) + frac(x^15, 15!) + frac(x^16, 16!) + o(n^16)`),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}This is the title of the figure. It also contains the legend of the figure, with some
math to check everything is working: ${unsafeRaw.math`log(frac(1, 2))`}. The caption is different
from the caption of the table (see ${ref(label('tab:tab1'))}).${space}`,
            },
            image({ width: pct(50) }, path('pci-graph-small.png')),
          ),
          space,
        ],
        label('fig:fig1'),
      ),
    ),
    inline(lorem(100)),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}This is the title of the table. It also contains the legend i.e. an explanation of what
the table reveals about the problem at hand (typeset using the ${raw('caption')} argument of
figure()).${space}`,
            },
            blocks(
              m.lines(
                set(table.hline, { stroke: pt(0.6) }),
                inline(
                  table(
                    { columns: 5 },
                    table.hline(),
                    table.header(inline(unsafeRaw.math`n`), inline`1`, inline`2`, inline`3`, inline`4`),
                    table.hline(),
                    inline(unsafeRaw.math`n^2`),
                    inline`1`,
                    inline`4`,
                    inline`9`,
                    inline`16`,
                    inline(unsafeRaw.math`n^3`),
                    inline`1`,
                    inline`4`,
                    inline`9`,
                    inline`18`,
                    table.hline(),
                  ),
                  space,
                  table_note(inline`This is the note of the table if required. It is below the table to look nice. This can be done
by using the template function ${raw('table_note')} in the same block as the table. Compare
with the figure caption above (see ${ref(label('fig:fig1'))}).`),
                ),
              ),
            ),
          ),
          space,
        ],
        label('tab:tab1'),
      ),
    ),
    inline`${emph(inline`Proof.`)} This is a proof that ends with a ${symbol('v')}erb+{align}+ type of
equation. The last equation should be numbered, but ${symbol('v')}erb+${symbol('q')}edhere+
breaks it (yet it works in most other journals?) ${unsafeRaw.math.block`x &= 1234596748613548534863 \\
  3x + y &= "some text" \\
  &1234864 + sum_(i=1)^(n) frac(1, i)`} ${sym.qed}`,
    m.lines(m.heading(1, 'Example of a section, e.g. Conclusion'), inline(lorem(200))),
    inline(
      appendix(
        blocks(
          m.lines(
            inline(labelled(heading({ depth: 1 }, inline('Some other things')), label('sA'))),
            'If your appendices fit in less than 2 pages, add your appendices here.',
          ),
          m.lines(
            'If your appendices take more than 2 pages, please proceed as follows:',
            m.list(
              m.item(['deposit them in an open repository such as Zenodo']),
              m.item([
                'add the DOI and the citation in the section “Data, scripts, code, and supplementary information availability”',
              ]),
              m.item(['add the reference in the list of references']),
            ),
          ),
          m.lines(m.heading(2, 'Example of appendix subsection'), inline(lorem(50))),
          parbreak(),
        ),
      ),
    ),
    m.lines(set(heading, { numbering: null }), m.heading(1, 'Acknowledgements')),
    inline`This is your acknowledgments. Preprint version xxx[change to the correct number] of this article
has been peer-reviewed and recommended by Peer Community In XYZ[change to the name of the PCI]
(${link('https://doi.org/10.24072/pci.xxx', inline(link('https://doi.org/10.24072/pci.xxx')))}
[replace by the doi of the recommendation]; ${cite({ form: 'prose' }, label('fake'))} [replace
by the citation of the recommendation]).`,
    m.heading(1, 'Fundings'),
    inline`Declare your fundings. If your study has not been supported by particular funding, please indicate
"The authors declare that they have received no specific funding for this study".`,
    m.heading(1, 'Conflict of interest disclosure'),
    'The authors declare that they comply with the PCI rule of having no financial conflicts of interest in relation to the content of the article. [IF APPROPRIATE: The authors declare the following non-financial conflict of interest: XXX (if some of the authors are recommenders of a PCI, indicate it here)].',
    m.heading(1, 'Data, script, code, and supplementary information availability'),
    inline`Data are available online (${link('https://doi.org/10.24072/fake1', inline(link('https://doi.org/10.24072/fake1')))}
[Replace by the DOI of the webpage hosting the data]; ${cite({ form: 'prose' }, label('CharleMar_independant-trace-su2_2012'))}
[Replace by the citation of the data])`,
    inline`Script and codes are available online (${link('https://doi.org/10.24072/fake2', inline(link('https://doi.org/10.24072/fake2')))}
[Replace by the DOI of the webpage hosting the script and code]; ${cite({ form: 'prose' }, label('CharleMar_independant-trace-su2_2012'))}
[Replace by the citation of the script and code])`,
    inline`Supplementary information is available online (${link('https://doi.org/10.24072/fake3', inline(link('https://doi.org/10.24072/fake3')))}
[Replace by the DOI of the webpage hosting the Supplementary information]; ${cite({ form: 'prose' }, label('CharleMar_independant-trace-su2_2012'))}
[Replace by the citation of the Supplementary information])`,
    inline`${v(em(1))} The DOI hyperlinks should be active. They should also be present in the reference
list and cited in the text.`,
    'For the reference section below, do not forget to add a doi for each reference (if available). Do not forget to add the reference of the recommendation, the reference of the data, scripts, code and supplementary material to your bib file, if appropriate.',
  )
}
