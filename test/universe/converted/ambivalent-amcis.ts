// Converted from test/universe/corpus/ambivalent-amcis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  cite,
  data,
  define,
  doc,
  emph,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  link,
  m,
  path,
  pct,
  raw,
  ref,
  right,
  show,
  smartquote,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const amcis = external('amcis')
  const amcis_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('camera-ready', T.any, null)
    .named('keywords', T.any, null)
    .named('paper-type', T.any, null)
    .named('short-title', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(amcis)
  const [authors_listDecl, authors_list] = let_(
    'authors_list',
    data([
      [inline`Ryan Schuetzler`, inline`Brigham Young University`, 'ryan.schuetzler@byu.edu'],
      [inline`Alice T. Academic`, inline`Other University`, 'alice@other.edu'],
      [inline`Bob B. Bobberson`, inline`Independent Researcher`, 'bob@example.org'],
    ]),
  )
  return doc(
    importPackage('@preview/ambivalent-amcis:0.1.1', [amcis]),
    authors_listDecl,
    show(
      amcis_with({
        title: inline`Paper Submission Title`,
        shortTitle: inline`Short title (up to 8 words)`,
        paperType: 'Full Paper',
        abstract: inline`In this document we describe the formatting requirements for the Proceedings of the AMCIS Conference.
Please review this document carefully. You can use this document as a template and copy/paste
your paper content here (this might be the best or easiest way). Please be sure to adhere to
the formatting requirements. Submission must be made in PDF format. Abstracts should be no more
than 150 words, as the abstract will also be used for the conference program.`,
        keywords: [inline`Guides`, inline`instructions`, inline`length`, inline`conference publications`],
        authors: authors_list,
        bib: bibliography({ style: path('new-apa.csl'), title: null }, path('./references.bib')),
        cameraReady: true,
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      'The accepted papers of the conference are published in the Proceedings. We ask that authors follow these basic guidelines when submitting to AMCIS. In essence, you should format your paper exactly like this document. The easiest way to use this template is to replace the placeholder content with your own material. The template file contains specially formatted styles (e.g., Normal, Heading, Bullet, References, Title, Author, Affiliation) that are designed to reduce the work in formatting your final submission.',
    ),
    m.lines(
      m.heading(1, 'Page Size'),
      'On each page, your material (not including the header and footer) should fit within a rectangle of 18 x 23.5 cm (7 x 9.25 in.), centered on a US letter page, beginning 1.9 cm (.75 in.) from the top of the page. Please adhere to the US letter size only (hopefully Word or other word processors can help you with it). If you cannot do so, please contact the review coordinator for assistance. All final publications will be formatted and displayed in US letter size. Right margins should be justified, not ragged. All margins must measure 1” (2.5 cm) around. Beware, especially when using this template on a Macintosh, Word may change these dimensions in unexpected ways.',
    ),
    m.lines(
      m.heading(1, 'Length'),
      'Each type of submission (Completed research and ERF papers) has specific page length requirements. See additional requirements specific to each type of submission. Any submission that exceeds page length limits will be rejected without review. Paper length limitations are intended to encourage authors to publish full-length papers in journals or other outlets at a later date.',
      m.list(
        m.item([
          'Completed research papers: Must not exceed 10 pages all-inclusive (approx. 5,000 words, including author names, abstract, figures, tables, references, appendices).',
        ]),
        m.item([
          'Emergent Research Forum (ERF) papers: Must not exceed 5 pages all-inclusive (approx. 2,500 words, including author names, abstract, figures, tables, references, appendices).',
        ]),
      ),
    ),
    m.lines(
      m.heading(1, 'Title'),
      'Your paper’s title should be in Georgia 20-point bold. Ensure proper capitalization within your title (i.e. “The Next Frontier of Information Systems” versus “the next frontier of Information systems.”',
    ),
    m.lines(
      m.heading(2, 'Normal or Body Text'),
      'Please use a 10-point Georgia font (similar to Times New Roman, but more easily read online) or, if it is unavailable, another proportional font with serifs. The Georgia font is also available on Macintosh. Please use sans-serif or non-proportional fonts only for special purposes, such as source code text (SpecialStyle). [References to Georgia font from this point forward should be interpreted as “Georgia or equivalent.”]',
    ),
    'There should be a 6pt space between paragraphs.',
    m.lines(
      m.heading(1, 'Sections'),
      'The heading of a section should be Georgia 13-point bold, left justified (Heading 1 Style in this template file). Sections should not be numbered.',
    ),
    m.lines(
      m.heading(2, 'Subsections'),
      'Headings of subsections should be in Georgia 11-point bold italics with initial letters capitalized (Heading 2). (Note: for sub-sections and sub-subsections, words like ‘the’, ‘of’, ‘a’, ‘an’ are not capitalized unless it is the first word of the heading.)',
    ),
    m.lines(
      m.heading(3, 'Sub-subsections'),
      'Headings for sub-subsections should be in Georgia 10-point bold with initial letters capitalized (Heading 3). Please do not go any further into another layer/level.',
    ),
    m.lines(
      m.heading(1, 'Figures, Tables, & Captions'),
      'Place figures and tables close to the relevant text (or where they are referenced in the text).',
    ),
    'Captions should be Georgia 10-point bold (Caption Style in this template file). They should be numbered (e.g., “Table 1” or “Figure 2”), centered and placed beneath the figure or table. Please note that the words “Figure” and “Table” should be spelled out (e.g., “Figure” rather than “Fig.”) wherever they occur. The proceedings will be made available online, thus color figures are possible.',
    m.lines(
      m.heading(2, 'Inserting Images'),
      inline`Using figures in Word is a recipe for disaster. You have to do hacky workarounds like putting
the figure in a table just to keep the caption and figure together. With Typst and other formatting
tools, that's a thing of the past. Just use the built-in ${raw('#figure')} function to easily
place a figure, and automatically number it (with a caption!). You can even reference the figure
with an in-text cross reference like so: Look at the cool robot in ${ref(label('pepper'))}.`,
    ),
    inline(
      labelled(
        [
          figure({ caption: inline`What a beautiful robot.` }, image({ width: pct(50) }, path('assets/pepper.jpg'))),
          space,
        ],
        label('pepper'),
      ),
    ),
    m.lines(
      m.heading(2, 'Table Style'),
      inline`Inserting a table in the text can work well. See Table 1 below. If you do not use this style,
then you may want to adjust the vertical spacing of the text in the tables. (In Word, use Format
| Paragraph… and then the Line and Page Breaks tab. Generally, text in each field of a table
will look better if it has equal amounts of spacing above and below it, as in ${ref(label('treatments'))}.)`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`A Very Nice Table` },
            table(
              { columns: [auto, auto, auto], align: [right, left, left] },
              table.header(inline(), inline(strong(inline`Treatment 1`)), inline(strong(inline`Treatment 2`))),
              inline(strong(inline`Setting A`)),
              inline`125`,
              inline`95`,
              inline(strong(inline`Setting B`)),
              inline`85`,
              inline`102`,
              inline(strong(inline`Setting C`)),
              inline`98`,
              inline`85`,
            ),
          ),
          space,
        ],
        label('treatments'),
      ),
    ),
    m.lines(
      m.heading(1, 'Language, Style, and Content'),
      'With regard to spelling and punctuation, you may use any dialect of English (e.g., British, Canadian, US, etc.) provided this is done consistently. Hyphenation is optional. To ensure suitability for an international audience, please pay attention to the following:',
      m.list(
        m.item(['Write in a straightforward style.']),
        m.item(['Try to avoid long or complex sentence structures.']),
        m.item(['Briefly define or explain all technical terms that may be unfamiliar to readers.']),
        m.item([
          'Explain all acronyms the first time they are used in your text – e.g.,',
          space,
          smartquote({ double: true }),
          'Digital Library (DL)',
          smartquote({ double: true }),
          '.',
        ]),
        m.item(['Explain local references (e.g., not everyone knows all city names in a particular country).']),
        m.item([
          'Be careful with the use of gender-specific pronouns (',
          emph(inline`he, she`),
          ') and other gendered words (',
          emph(inline`chairman, manpower, man-months`),
          '). Use inclusive language that is gender-neutral (e.g.,',
          space,
          emph(inline`they, chair, staff, staff-hours, person-years`),
          ').',
        ]),
      ),
    ),
    m.lines(
      m.heading(2, 'Conclusion'),
      'It is important that you write for a general audience. It is also important that your work is presented in a professional fashion. This guideline is intended to help you achieve that goal. By adhering to the guideline, you also help the conference organizers tremendously in reducing our workload and ensuring impressive presentation of your conference paper. We thank you very much for your cooperation and look forward to receiving your nice looking, camera-ready version!',
    ),
    m.lines(
      m.heading(2, 'References and Citations'),
      inline`References should be listed alphabetically by author name at the end of the paper and formatted
in conformance with ${link('https://apastyle.apa.org/products/publication-manual-7th-edition', inline`APA 7th edition`)}.
References must be complete, i.e., include, as appropriate, volume, number, month, publisher,
city and state, editors, last name and initials of all authors, page numbers, etc. If you use
EndNote, be aware that different versions of the software change the styles, creating some inconsistencies.
Your references should comprise only published materials accessible to the public. Proprietary
information may not be cited. In text citations can be done with ${ref(label('Ahlers2013'))},
${ref(label('ackoff_management_1961'))}, or ${cite({ form: 'prose' }, label('chenhall_formal_1989'))},
for example. Or if you mention the authors in the text, you can do just the year as in "Schuetzler
and colleagues (${cite({ form: 'year' }, label('schuetzler2024Student'))}) may have written
the best paper ever."`,
    ),
  )
}
