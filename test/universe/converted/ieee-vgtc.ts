// Converted from test/universe/corpus/ieee-vgtc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  define,
  doc,
  external,
  figure,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  link,
  lorem,
  m,
  math,
  mm,
  path,
  pct,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const journal = external('journal')
  const journal_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('category', T.any, null)
    .named('index-terms', T.any, null)
    .named('review', T.any, null)
    .named('submission-id', T.any, null)
    .named('teaser', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(journal)
  return doc(
    importPackage('@preview/ieee-vgtc:0.0.4', [journal]),
    show(
      journal_with({
        review: false,
        submissionId: 1234,
        category: 'Research',
        title: inline`Global Illumination for Fun and Profit`,
        abstract: inline`${lorem(125)} A free copy of this paper and all supplemental materials are available at ${link('https://OSF.IO/2NBSG')}.`,
        authors: [
          {
            name: 'Josiah S. Carberry',
            organization: inline`Brown University`,
            orcid: '0000-0002-1825-0097',
            email: 'jcarberry@example.com',
          },
          { name: 'Ed Grimley', organization: inline`Grimley Widgets, Inc.`, email: 'ed.grimley@example.com' },
          {
            name: 'Martha Stewart',
            organization: inline`Martha Stewart Enterprises at Microsoft Research`,
            email: 'martha.stewart@example.com',
          },
        ],
        teaser: {
          image: image(
            { alt: 'A view of clouds with orange sunrays shining through from behind.' },
            path('figs/clouds.jpg'),
          ),
          caption: 'Dramatic evening clouds. Note that the teaser may not be wider than the abstract block.',
        },
        indexTerms: ['Radiosity', 'global illumination', 'constant time'],
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`This template is for papers of VGTC-sponsored conferences such as IEEE VIS, IEEE VR, and ISMAR
which are published as special issues of TVCG. The template does not contain the respective
dates of the conference/journal issue, these will be entered by IEEE as part of the publication
production process. Therefore, ${strong(inline`please leave the copyright statement at the bottom-left of this first page untouched`)}.`,
    m.heading(1, 'Author Details'),
    inline`You should specify ORCID IDs for each author (see ${link('https://orcid.org/')} to register)
for disambiguation and long-term contact preservation. The template shows an example without
ORCID IDs for two of the authors. ORCID IDs should be provided in all cases.`,
    m.heading(1, 'Hyperlinks and Cross References'),
    inline`Links are automatically shown for URLs but you can customize the name of the link with the ${raw('#link')}
function: ${link('https://typst.app/docs/reference/model/link/')}.`,
    m.heading(1, 'Figures'),
    inline`Typst automatically detects the type of figure (i.e., table, image, or code) and label them
accordingly. Figures are documented at ${link('https://typst.app/docs/reference/model/figure/')}.`,
    inline`For figures with images, the image format is usually detected automatically. For details, head
over to the image documentation: ${link('https://typst.app/docs/reference/visualize/image/')}.`,
    m.heading(2, 'Vector figures'),
    inline(
      figure(
        { caption: 'Stacked bar chart of weather data.' },
        image(
          { alt: 'A bar chart showing the number of days per month broken down by weather type.', width: pct(80) },
          path('figs/chart.svg'),
        ),
      ),
    ),
    'Vector graphics like SVG and PDF are best for charts and other figures with text or lines. They will look much nicer and crisper and any text in them will be more selectable, searchable, and accessible.',
    m.heading(2, 'Raster figures'),
    inline(
      figure(
        { caption: 'Dramatic evening clouds.' },
        image({ alt: 'A view of clouds with orange sunrays shining through from behind.' }, path('figs/clouds.jpg')),
      ),
    ),
    'Of the raster graphics formats, screenshots of user interfaces and text, as well as line art, are better shown with PNG. JPEG is better for photographs. Make sure all raster graphics are captured in high enough resolution so they look crisp and scale well.',
    m.heading(2, 'Alternative texts'),
    'Always include an alternative text that describes the image. The alt text should not be the same as the caption, but should describe the image in a way that makes sense when the image is not visible.',
    m.heading(2, 'Figures on the first page'),
    'The teaser figure should only have the width of the abstract as the template enforces it. The use of figures other than the optional teaser is not permitted on the first page. Other figures should begin on the second page. Papers submitted with figures other than the optional teaser on the first page will be refused.',
    m.heading(2, 'Figures with subfigures'),
    'Use the grid function to create subfigures.',
    inline(
      figure(
        { caption: 'Dramatic evening clouds.' },
        grid(
          { columns: 2, rowGutter: mm(2), columnGutter: mm(1) },
          image({ alt: 'A view of clouds with orange sunrays shining through from behind.' }, path('figs/clouds.jpg')),
          align(
            horizon,
            inline(
              image(
                { alt: 'A view of clouds with orange sunrays shining through from behind.' },
                path('figs/clouds.jpg'),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'Code'),
    inline`Typst supports code blocks and inline code: ${link('https://typst.app/docs/reference/text/raw/')}.
For example`,
    inline(raw({ block: true, lang: 'rust' }, 'fn main() {\n    println!("Hello World!");\n}')),
    m.heading(1, 'Lists'),
    'You can create both numbered and bulleted lists:',
    m.enum(
      m.item(['First item in a numbered list']),
      m.item(['Second item with multiple lines of text that wraps to demonstrate how the indentation works']),
      m.item(['Third item']),
    ),
    'Bulleted lists work similarly:',
    m.list(
      m.item(['First bullet point']),
      m.item(m.lines('Second bullet point', m.list(m.item(['Nested bullet point']), m.item(['Another nested item'])))),
      m.item(['Third bullet point']),
    ),
    m.heading(1, 'References'),
    inline`An example of the reference formatting is provided in the ${strong(inline`References`)} section
at the end.`,
    m.heading(2, 'Include DOIs'),
    inline`All references which have a DOI (which are virtually all entries of a list of references today),
by default, should have it included in the bibliography file such that they are displayed in
the list of references (as a courtesy for your reviewers and your readers). The DOI can be entered
with or without the ${link('https://doi.org/')} prefix. Note that you can also use short DOIs;
see ${link('https://shortdoi.org/')} to obtain a short version of any valid DOI.`,
    m.heading(1, 'Equations and Tables'),
    'Equations can be added like so:',
    inline(
      labelled(
        [
          math.equation(
            {
              block: true,
              numbering: '(1)',
              alt: 'Sum from j equals 1 to z of j equals z times open parenthesis z plus 1 close parenthesis divided by 2',
            },
            unsafeRaw.math`sum_(j=1)^z j = (z(z+1))/2`,
          ),
          space,
        ],
        label('eq:sum2'),
      ),
    ),
    inline`Tables, such as ${ref(label('tab:example'))} can also be included.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`VIS/VisWeek accepted/presented papers: 1990--2025, data from ${link('https://www.vispubdata.org/', inline`vispubdata`)}
${ref(label('Isenberg2017Vispubdata'))}. Numbers should be right aligned.`,
            },
            table(
              {
                columns: 5,
                align: [left, right, right, right, right],
                stroke: (x, y) => unsafeRaw.code<any>`(
      top: if y == 0 { 0.75pt } else if y == 1 { 0.5pt } else { 0pt },
      bottom: 1pt,
    )`,
              },
              inline(strong(inline`Year`)),
              inline(strong(inline`VIS`)),
              inline(strong(inline`Vis/SciVis`)),
              inline(strong(inline`InfoVis`)),
              inline(strong(inline`VAST`)),
              inline`2025`,
              inline`131`,
              inline(),
              inline(),
              inline(),
              inline`2024`,
              inline`124`,
              inline(),
              inline(),
              inline(),
              inline`2023`,
              inline`133`,
              inline(),
              inline(),
              inline(),
              inline`2022`,
              inline`119`,
              inline(),
              inline(),
              inline(),
              inline`2021`,
              inline`109`,
              inline(),
              inline(),
              inline(),
              inline`2020`,
              inline(),
              inline`32`,
              inline`64`,
              inline`51`,
              inline`2019`,
              inline(),
              inline`25`,
              inline`53`,
              inline`42`,
              inline`2018`,
              inline(),
              inline`32`,
              inline`47`,
              inline`41`,
              inline`2017`,
              inline(),
              inline`23`,
              inline`39`,
              inline`37`,
              inline`2016`,
              inline(),
              inline`30`,
              inline`37`,
              inline`33`,
              inline`2015`,
              inline(),
              inline`33`,
              inline`38`,
              inline`33`,
              inline`2014`,
              inline(),
              inline`34`,
              inline`45`,
              inline`33`,
              inline`2013`,
              inline(),
              inline`31`,
              inline`38`,
              inline`32`,
              inline`2012`,
              inline(),
              inline`42`,
              inline`44`,
              inline`30`,
            ),
          ),
          space,
        ],
        label('tab:example'),
      ),
    ),
    m.heading(1, 'Accessibility'),
    inline`To create accessible PDFs that comply with PDF/UA (Universal Accessibility) standards, compile
your document with the ${raw('--pdf-standard ua-1')} flag:`,
    inline(raw({ block: true, lang: 'bash' }, 'typst compile journal.typ --pdf-standard ua-1')),
    'This ensures your document is accessible to screen readers and other assistive technologies. When using this flag:',
    m.list(
      m.item([
        'All images must have descriptive',
        space,
        raw('alt'),
        space,
        'text (or be marked as decorative using',
        space,
        raw('pdf.artifact'),
        ')',
      ]),
      m.item([
        'All equations must have alt text using the explicit syntax:',
        space,
        raw('#math.equation(block: true, numbering: "(1)", $...$, alt: "description")'),
      ]),
      m.item(['Avoid embedding PDF images; use SVG or raster formats instead']),
    ),
    inline`For more information on creating accessible documents, see the ${link('https://typst.app/docs/guides/accessibility/', inline`Typst accessibility guide`)}.`,
    m.heading(1, 'Reporting of User Studies'),
    inline`Please note that for the reporting of any experimental results that involve human participants
you are ${strong(inline`required`)} to "include a statement in the article that the research
was performed under the oversight of an institutional review board or equivalent local/regional
body, including the official name of the IRB/ethics committee, or include an explanation as
to why such a review was not conducted. For research involving human subjects, authors shall
also report that consent from the human subjects in the research was obtained or explain why
consent was not obtained" ${ref({ supplement: inline`Section 8.1.1.E` }, label('IEEEPublications2025'))}.
Ideally, for an IRB approval or similar, you include the case number under which the permission
was granted. For instance: "Our experiment was approved by our university's IRB (No. 12345678).
[...] At the start of the experiment, we obtained informed consent from all participants, who
filled in and signed a consent form (which we share in our additional materials)."`,
    m.heading(1, 'Paper overview'),
    inline`In this paper we introduce Typst, a new typesetting system designed to streamline the scientific
writing process and provide researchers with a fast, efficient, and easy-to-use alternative
to existing systems. Our goal is to shake up the status quo and offer researchers a better way
to approach scientific writing. Here is a reference: ${ref(label('netwok2020'))}.`,
    'By leveraging advanced algorithms and a user-friendly interface, Typst offers several advantages over existing typesetting systems, including faster document creation, simplified syntax, and increased ease-of-use.',
    'To demonstrate the potential of Typst, we conducted a series of experiments comparing it to other popular typesetting systems, including LaTeX. Our findings suggest that Typst offers several benefits for scientific writing, particularly for novice users who may struggle with the complexities of LaTeX. Additionally, we demonstrate that Typst offers advanced features for experienced users, allowing for greater customization and flexibility in document creation.',
    'Overall, we believe that Typst represents a significant step forward in the field of scientific writing and typesetting, providing researchers with a valuable tool to streamline their workflow and focus on what really matters: their research. In the following sections, we will introduce Typst in more detail and provide evidence for its superiority over other typesetting systems in a variety of scenarios.',
    m.lines(m.heading(1, 'Methods'), inline(lorem(90))),
    inline(
      math.equation({ block: true, numbering: '(1)', alt: 'a plus b equals gamma' }, unsafeRaw.math`a + b = gamma`),
    ),
    inline(lorem(200)),
    m.lines(
      m.heading(1, 'Acknowledgments'),
      'The authors wish to thank A, B, and C. This work was supported in part by a grant from XYZ (# 12345-67890).',
    ),
  )
}
