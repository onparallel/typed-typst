// Converted from test/universe/corpus/cogsci-conference.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cite,
  define,
  doc,
  external,
  figure,
  footnote,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  m,
  path,
  pt,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const cogsci = external('cogsci')
  const formatAuthors = define('format-authors')
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .returns(T.any)
    .external()
  const cogsci_with = define('with')
    .named('abstract', T.content, [])
    .named('anonymize', T.any, null)
    .named('author-info', T.any, null)
    .named('hyphenate', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(cogsci)
  const [anonymizeDecl, anonymize] = let_('anonymize', true)
  const [hyphenateDecl, hyphenate] = let_('hyphenate', true)
  return doc(
    importPackage('@preview/cogsci-conference:0.1.3', [cogsci, formatAuthors]),
    inline(anonymizeDecl),
    inline(hyphenateDecl),
    show(
      cogsci_with({
        title: inline`How to Make a Proceedings Paper Submission`,
        authorInfo: formatAuthors({
          authors: [
            { name: inline`Author N. One`, email: 'a1@uni.edu', super: inline`1` },
            { name: inline`Author Number Two`, super: inline`2` },
          ],
          affiliations: [
            { super: inline`1`, affil: inline`Department of Hypothetical Sciences, University of Illustrations` },
            { super: inline`2`, affil: inline`Department of Example Studies, University of Demonstrations` },
          ],
        }),
        abstract: inline`${space}Include no author information in the initial submission, to facilitate blind review.
AI tools cannot be listed as authors, and authors retain full responsibility for the accuracy,
integrity, and originality of all content in their manuscripts. This includes verifying factual
claims, ensuring proper attribution of ideas, and confirming that the work meets standards for
academic integrity and does not contain plagiarized content. See the Acknowledgments section
of the template for AI use declaration and acknowledgment. The abstract should be one paragraph,
no more than 150${sym.space.nobreak}words, indented 1/8${sym.space.nobreak}inch on both sides,
in 9${sym.space.nobreak}point font with single spacing. The heading "${strong(inline`Abstract`)}"
should be 10${sym.space.nobreak}point, bold, centered, with one line of space below it. This
one-paragraph abstract section is required only for standard proceedings papers. Following the
abstract should be a blank line, followed by the header "${strong(inline`Keywords:`)}" and a
list of descriptive keywords separated by semicolons, all in 9${sym.space.nobreak}point font,
as shown below.${space}`,
        keywords: ['add your choice of indexing terms or keywords', 'kindly use a semicolon', 'between each term'],
        anonymize: anonymize,
        hyphenate: hyphenate,
      }),
    ),
    m.heading(1, 'General Formatting Instructions'),
    inline`The paper can be no longer than six pages plus an unlimited number of pages for references in
the ${strong(inline`initial submission`)}. In the ${strong(inline`final submission`)}, the text
of the paper, including an author line, must fit on six pages. An unlimited number of pages
can be used for acknowledgments and references.`,
    inline`The ${strong(inline`title`)} should be in 14${sym.space.nobreak}point bold font, centered. The
title should be formatted with initial caps (the first letter of content words capitalized and
the rest lower case). In the ${strong(inline`initial submission`)}, leave one space below the
title and on the next line include the phrase "Anonymous CogSci submission", centered, in 11${sym.space.nobreak}point
bold font. In the ${strong(inline`final submission`)}, leave one space below the title, then
list author names (on one line, though if there are many authors this will continue on subsequent
lines) in 11${sym.space.nobreak}point bold font, and centered, with superscript numerals that
will correspond to author affiliation. The ${strong(inline`corresponding author's`)} email address
and no other email addresses should be placed in parentheses next to their name in the author
list. Starting on the next line, list authors' affiliations using the corresponding superscript
numeral and including only the department/unit and organization in ordinary 10${sym.space.nobreak}point
type, one affiliation per line.`,
    inline`The text of the paper should be formatted in two columns with an overall width of 7${sym.space.nobreak}inches
(17.8${sym.space.nobreak}cm) and length of 9.25${sym.space.nobreak}inches (23.5${sym.space.nobreak}cm),
with 0.25${sym.space.nobreak}inches between the columns. Leave two line spaces between the last
author affiliation and the text of the paper; the text of the paper (starting with the abstract)
should begin no less than 2.75${sym.space.nobreak}inches below the top of the page. The left
margin should be 0.75${sym.space.nobreak}inches and the top margin should be 1${sym.space.nobreak}inch.
${strong(inline`The right and bottom margins will depend on whether you use U.S. letter or A4 paper, so you
must be sure to measure the width of the printed text`)}. Use 10${sym.space.nobreak}point Times
Roman with 12${sym.space.nobreak}point vertical spacing, unless otherwise specified.`,
    inline`Indent the first line of each paragraph by 1/8${sym.space.nobreak}inch (except for the first
paragraph of a new section). Do not add extra vertical space between paragraphs.`,
    m.heading(1, 'First Level Headings'),
    inline`First level headings should be in 12${sym.space.nobreak}point, initial caps, bold and centered.
Leave one line space above the heading and 1/4${sym.space.nobreak}line space below the heading.`,
    m.heading(2, 'Second Level Headings'),
    inline`Second level headings should be 11${sym.space.nobreak}point, initial caps, bold, and flush left.
Leave one line space above the heading and 1/4${sym.space.nobreak}line space below the heading.`,
    m.lines(
      m.heading(3, 'Third Level Headings'),
      inline`Third level headings should be 10${sym.space.nobreak}point, initial caps, bold, and flush left.
Leave one line space above the heading, but no space after the heading.`,
    ),
    m.heading(1, 'Formalities, Footnotes, and Floats'),
    inline`Use standard APA citation format. Citations within the text should include the author's last
name and year. If the authors' names are included in the sentence, place only the year in parentheses,
as in ${cite({ form: 'prose' }, label('DaphneEcho2022'))}, but otherwise place the entire reference
in parentheses with the authors and year separated by a comma ${ref(label('DaphneEcho2022'))}.
Use the "et${sym.space.nobreak}al." construction for works with three or more authors. List
multiple references alphabetically and separate them by semicolons ${ref(label('August2007'))}
${ref(label('DaphneEcho2022'))}.`,
    m.heading(2, 'Footnotes'),
    inline`Indicate footnotes with a number${footnote(inline`Sample of the first footnote.`)} in the text.
Place the footnotes in 9${sym.space.nobreak}point font at the bottom of the column on which
they appear. Precede the footnote block with a horizontal rule.${footnote(inline`Sample of the second footnote.`)}`,
    m.heading(2, 'Tables'),
    inline`Number tables consecutively. Place the table number and title (in 10${sym.space.nobreak}point)
above the table with one line space above the caption and one line space below it, as in ${ref(label('sample-table'))}.
You may float tables to the top or bottom of a column, and you may set wide tables across both
columns.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Sample table title.`, kind: table },
            table(
              { align: left, columns: 2 },
              table.hline(),
              inline`Error type`,
              inline`Example`,
              table.hline(),
              inline`Take smaller`,
              inline`63 - 44 = 21`,
              inline`Always borrow`,
              inline`96 - 42 = 34`,
              inline`0 - N = N`,
              inline`70 - 47 = 37`,
              inline`0 - N = 0`,
              inline`70 - 47 = 30`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('sample-table'),
      ),
    ),
    m.heading(2, 'Figures'),
    inline`All artwork must be very dark for purposes of reproduction and should not be hand drawn. Number
figures sequentially, placing the figure number and caption, in 10${sym.space.nobreak}point,
after the figure with one line space above the caption and one line space below it, as in ${ref(label('sample-figure'))}.
If necessary, leave extra white space at the bottom of the page to avoid splitting the figure
and figure caption. You may float figures to the top or bottom of a column, and you may set
wide figures across both columns.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`This is a figure.`, kind: image },
            rect({ stroke: pt(0.5), inset: pt(3) }, inline`CoGNiTiVe ScIeNcE`),
          ),
          space,
        ],
        label('sample-figure'),
      ),
    ),
    m.heading(1, 'Acknowledgments'),
    inline`In the ${strong(inline`initial submission`)}, please only include acknowledgments of AI use
and no other acknowledgments to preserve anonymity. Regarding AI use: Authors may use AI tools
when developing their projects and preparing their manuscripts, but such use must be described,
transparently and in detail, in either the Methods or Acknowledgments section, as appropriate.
Tools that are used to improve spelling, grammar, and general editing are not included in the
scope of these guidelines. In the ${strong(inline`final submission`)}, place acknowledgments
(including human and AI contributions, and funding information) in a section ${strong(inline`at the end of the paper`)}.`,
    m.heading(1, 'References Instructions'),
    'Follow the APA Publication Manual for citation format, both within the text and in the reference list, with the following exception: use the same format for unpublished references as for published ones. Alphabetize references by the surnames of the authors, with single author entries preceding multiple author entries. Order references by the same authors by the year of publication, with the earliest first. Include DOIs if available.',
    inline`Use a first level section heading, "${strong(inline`References`)}", as shown below. Use a hanging
indent style, with the first line of the reference flush against the left margin and subsequent
lines indented by 1/8${sym.space.nobreak}inch. Below are example references for a conference
paper, journal article, technical report, dissertation, book chapter, edited volume, and book,
respectively.`,
    inline(
      cite({ form: null }, label('August2007')),
      space,
      cite({ form: null }, label('DaphneEcho2022')),
      space,
      cite({ form: null }, label('FitzgeraldGalli1985')),
      space,
      cite({ form: null }, label('Hakuole2001')),
      space,
      cite({ form: null }, label('Issa1963')),
      space,
      cite({ form: null }, label('Lobsang2023')),
      space,
      cite({ form: null }, label('MitanniNovember1972')),
    ),
    inline(bibliography(path('bibliography.bib'))),
  )
}
