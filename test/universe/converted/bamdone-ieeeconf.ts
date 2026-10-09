// Converted from test/universe/corpus/bamdone-ieeeconf.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  cm,
  define,
  doc,
  em,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  left,
  linebreak,
  m,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  right,
  show,
  space,
  strong,
  symbol,
  table,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ieee = external('ieee')
  const ieee_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('disclaimer', T.content, [])
    .named('draft', T.any, null)
    .named('index-terms', T.any, null)
    .named('paper-size', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(ieee)
  return doc(
    importPackage('@preview/bamdone-ieeeconf:0.1.4', [ieee]),
    show(
      ieee_with({
        title: inline`Preparation of Papers for IEEE Sponsored Conferences & Symposia`,
        abstract: inline`${space}This electronic document is a live template. The various components of your paper [title,
text, heads, etc.] are already defined on the style sheet, as illustrated by the portions given
in this document.${space}`,
        authors: [
          { given: 'Albert', surname: 'Author', email: inline`albert.author`, affiliation: 1 },
          { given: 'Bernard D.', surname: 'Researcher', email: inline`b.d.researcher`, affiliation: 2 },
        ],
        affiliations: [
          {
            name: inline`Faculty of Electrical Engineering, Mathematics and Computer Science, University of Twente`,
            address: inline`7500 AE Enchede, The Netherlands`,
            emailSuffix: inline`papercept.net`,
          },
          {
            name: inline`Department of Electrical Engineering, Wright State University`,
            address: inline`Dayton, OH 45435, USA`,
            emailSuffix: inline`ieee.org`,
          },
        ],
        indexTerms: [],
        bibliography: bibliography(path('refs.bib')),
        draft: false,
        paperSize: 'us-letter',
        disclaimer: inline`This work was not supported by any organization.`,
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      'This template provides authors with most of the formatting specifications needed for preparing electronic versions of their papers. All standard paper components have been specified for three reasons: (1) ease of use when formatting individual papers, (2) automatic compliance to electronic requirements that facilitate the concurrent or later production of electronic products, and (3) conformity of style throughout a conference proceedings. Margins, column widths, line spacing, and type styles are built-in; examples of the type styles are provided throughout this document and are identified in italic type, within parentheses, following the example. Some components, such as multi-leveled equations, graphics, and tables are not prescribed, although the various table text styles are provided. The formatter will need to create these components, incorporating the applicable criteria that follow.',
    ),
    inline`Citations can be generated using ${raw('@<bitex-key>')} and be shown as ${ref(label('netwok2022'))}.
Another example can be seen in ${ref(label('netwok2020'))} ${ref(label('netwok2022'))}. A citation
to a specific page can be done as ${ref({ supplement: inline`p.27` }, label('exInbook'))}.`,
    m.heading(1, 'Procedure for Paper Submission'),
    m.heading(2, 'Selecting a Template (Heading 2)'),
    'First, confirm that you have the correct template for your paper size. This template has been tailored for output on the US-letter paper size. It may be used for A4 paper size if the paper size setting is suitably modified.',
    m.heading(2, 'Maintaining the Integrity of the specifications'),
    'The template is used to format your paper and style the text. All margins, column widths, line spaces, and text fonts are prescribed; please do not alter them. You may note peculiarities. For example, the head margin in this template measures proportionately more than is customary. This measurement and others are deliberate, using specifications that anticipate your paper as one part of the entire proceedings, and not as an independent document. Please do not revise any of the current designations.',
    m.heading(1, 'Math'),
    'Before you begin to format your paper, fist write and save the content as a separate text ﬁle. Keep your text and graphic files separate until after the text has been formatted and styled. Do not use hard tabs, and limit use of hard returns to only one return at the end of a paragraph. Do not add any kind of pagination anywhere in the paper. Do not number text heads-the template will do that for you. Finally, complete content and organizational editing before formatting. Please take note of the following items when proofreading spelling and grammar:',
    m.heading(2, 'Abbreviations and Acronyms'),
    'Define abbreviations and acronyms the first time they are used in the text, even after they have been defined in the abstract. Abbreviations such as IEEE, SI, MKS, CGS, sc, dc, and rms do not have to be defined. Do not use abbreviations in the title or heads unless they are unavoidable.',
    m.heading(2, 'Units'),
    m.list(
      m.item([
        'Use either SI (MKS) or CGS as primary units. (SI units are encouraged.) English units may be used as secondary units (in parentheses). An exception would be the use of English units as identifiers in trade, such as 3.5-inch disk drive.',
      ]),
      m.item([
        'Avoid combining SI and CGS units, such as current in amperes and magnetic field in oersteds. This often leads to confusion because equations do not balance dimensionally. If you must use mixed units, clearly state the units for each quantity that you use in an equation.',
      ]),
      m.item([
        'Do not mix complete spellings and abbreviations of units: Wb/m2 or webers per square meter, not webers/m2. Spell out units when they appear in text: . . . a few henries, not . . . a few H.',
      ]),
      m.item(['Use a zero before decimal points: 0.25, not .25. Use cm3, not cc. (bullet list)']),
    ),
    m.heading(2, 'Equations'),
    'The equations are an exception to the prescribed specifications of this template. You will need to determine whether or not your equation should be typed using either the Times New Roman or the Symbol font (please no other font). To create multileveled equations, it may be necessary to treat the equation as a graphic and insert it into the text after your paper is styled. Number equations consecutively. Equation numbers, within parentheses, are to position flush right, as in (1), using a right tab stop. To make your equations more compact, you may use the solidus ( / ), the exp function, or appropriate exponents. Italicize Roman symbols for quantities and variables, but not Greek symbols. Use a long dash rather than a hyphen for a minus sign. Punctuate equations with commas or periods when they are part of a sentence, as in',
    inline(labelled(unsafeRaw.math.block`alpha + beta = chi`, label('eq-1'))),
    inline`Note that the equation is centered using a center tab stop. Be sure that the symbols in your
equation have been defined before or immediately following the equation. Use ${ref(label('eq-1'))},
not Eq. (1) or equation (1), except at the beginning of a sentence: Equation ${ref(label('eq-1'))}
is . . .`,
    m.heading(2, 'Some Common Mistakes'),
    m.lines(
      m.list(
        m.item(['The word data is plural, not singular.']),
        m.item([
          'The subscript for the permeability of vacuum ?0, and other common scientific constants, is zero with subscript formatting, not a lowercase letter o.',
        ]),
        m.item([
          'In American English, commas, semi-/colons, periods, question and exclamation marks are located within quotation marks only when a complete thought or name is cited, such as a title or full quotation. When quotation marks are used, instead of a bold or italic typeface, to highlight a word or phrase, punctuation should appear outside of the quotation marks. A parenthetical phrase or statement at the end of a sentence is punctuated outside of the closing parenthesis (like this). (A parenthetical sentence is punctuated within the parentheses.)',
        ]),
        m.item([
          'A graph within a graph is an inset, not an insert. The word alternatively is preferred to the word alternately (unless you really mean something that alternates).',
        ]),
        m.item(['Do not use the word essentially to mean approximately or effectively.']),
      ),
      'In your paper title, if the words that uses can accurately replace the word using, capitalize the u; if not, keep using lower-cased.',
      m.list(
        m.item([
          'Be aware of the different meanings of the homophones affect and effect, complement and compliment, discreet and discrete, principal and principle.',
        ]),
        m.item(['Do not confuse imply and infer.']),
        m.item([
          'The prefix non is not a word; it should be joined to the word it modifies, usually without a hyphen.',
        ]),
        m.item(['There is no period after the et in the Latin abbreviation et al..']),
        m.item(['The abbreviation i.e. means that is, and the abbreviation e.g. means for example.']),
      ),
    ),
    m.heading(1, 'Using the Template'),
    'Use this sample document as your Typst source ﬁle to create your document. Save this ﬁle as main.typ. If you use a different style ﬁle, you cannot expect to get required margins. Note also that when you are creating your out PDF ﬁle, the source file is only part of the equation.',
    'It is impossible to account for all possible situation, one would encounter using Typst. If you are using multiple Typst ﬁles you must make sure that the “MAIN“ source ﬁle is called main.typ.',
    m.heading(2, 'Headings'),
    'Text heads organize the topics on a relational, hierarchical basis. For example, the paper title is the primary text head because all subsequent material relates and elaborates on this one topic. If there are two or more sub-topics, the next level head (uppercase Roman numerals) should be used and, conversely, if there are not at least two sub-topics, then no subheads should be introduced. Styles named Heading 1, Heading 2, Heading 3, and Heading 4 are prescribed.',
    m.heading(2, 'Figures and Tables'),
    'Positioning Figures and Tables: Place figures and tables at the top and bottom of columns. Avoid placing them in the middle of columns. Large figures and tables may span across both columns. Figure captions should be below the figures; table heads should appear above the tables. Insert figures and tables after they are cited in the text. Use the abbreviation Fig. 1, even at the beginning of a sentence.',
    inline(
      labelled(
        figure(
          {
            caption: inline`The Planets of the Solar System ${linebreak()} ${symbol('&')} Their Average Distance from the
Sun`,
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
            table.header(inline(strong(inline`Planet`)), inline(strong(inline`Distance (million km)`))),
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
        label('tab:planets'),
      ),
    ),
    'We suggest that you insert a graphic (which is ideally an SVG file) because, in an document, this method is just way better than directly inserting a PNG picture. Remember that if your graphics are bad, people will care.',
    inline(
      figure(
        { caption: inline`Inductance of oscillation winding on amorphous magnetic core versus DC bias magnetic field` },
        rect({ width: pct(80), height: cm(3) }),
      ),
    ),
    'Figure Labels: Use 8 point Times New Roman for Figure labels. Use words rather than symbols or abbreviations when writing Figure axis labels to avoid confusing the reader. As an example, write the quantity Magnetization, or Magnetization, M, not just M. If including units in the label, present them within parentheses. Do not label axes only with units. In the example, write Magnetization (A/m) or Magnetization A[m(1)], not just A/m. Do not label axes with a ratio of quantities and units. For example, write Temperature (K), not Temperature/K.',
    m.heading(1, 'Conclusions'),
    'A conclusion section is not required. Although a conclusion may review the main points of the paper, do not replicate the abstract as the conclusion. A conclusion might elaborate on the importance of the work or suggest applications and extensions.',
    m.heading(1, 'Appendix'),
    'Appendixes should appear before the acknowledgment.',
    m.heading(1, 'Acknowledgement'),
    'The preferred spelling of the word acknowledgment in America is without an e after the g. Avoid the stilted expression, One of us (R. B. G.) thanks . . . Instead, try R. B. G. thanks. Put sponsor acknowledgments in the unnumbered footnote on the first page. References are important to the reader; therefore, each citation must be complete and correct. If at all possible, references should be commonly available publications.',
  )
}
