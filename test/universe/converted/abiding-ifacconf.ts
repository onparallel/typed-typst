// Converted from test/universe/corpus/abiding-ifacconf.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  center,
  cm,
  define,
  doc,
  emph,
  external,
  figure,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  pt,
  raw,
  rect,
  ref,
  show,
  space,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ifacconfRules = external('ifacconf-rules')
  const ifacconf = external('ifacconf')
  const footnote_2 = define('footnote').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const tablefig = define('tablefig').pos('arg1', T.any).named('caption', T.content, []).returns(T.any).external()
  const bibliography_2 = define('bibliography').pos('arg1', T.any).returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const ifacconf_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('keywords', T.any, null)
    .named('sponsor', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(ifacconf)
  return doc(
    m.lines(
      importPackage('@preview/abiding-ifacconf:0.2.1', [
        ifacconfRules,
        ifacconf,
        footnote_2,
        theorem,
        proof,
        tablefig,
        bibliography_2,
        appendix,
      ]),
      show(ifacconfRules),
      show(
        ifacconf_with({
          title: 'Style for IFAC Conferences & Symposia: Use Title Case for Paper Title',
          authors: [
            { name: 'First A. Author', email: 'author@boulder.nist.gov', affiliation: 1 },
            { name: 'Second B. Author, Jr.', email: 'author@lamar.colostate.edu', affiliation: 2 },
            { name: 'Third C. Author', email: 'author@snu.ac.kr', affiliation: 3 },
          ],
          affiliations: [
            { organization: 'National Institute of Standards and Technology', address: 'Boulder, CO 80305 USA' },
            { organization: 'Colorado State University', address: 'Fort Collins, CO 80523 USA' },
            {
              department: 'Electrical Engineering Department',
              organization: 'Seoul National University',
              address: 'Seoul, Korea',
            },
          ],
          abstract: inline`${space}These instructions give you guidelines for preparing papers for IFAC technical meetings.
Please use this document as a template to prepare your manuscript. For submission guidelines,
follow instructions on paper submission system as well as the event website.${space}`,
          keywords: ['Five to ten keywords', 'preferably chosen from the IFAC keyword list.'],
          sponsor: inline`${space}Sponsor and financial support acknowledgment goes here. Paper titles should be written
in uppercase and lowercase letters, not all uppercase.${space}`,
        }),
      ),
    ),
    m.heading(1, 'Introduction'),
    inline`This document is a template for Typst. Running the command ${raw('typst init @preview/abiding-ifacconf')}
will generate the files needed to get started.. The template files are also available on github
at ${link('https://github.com/avonmoll/ifac-typst', inline(raw('https://github.com/avonmoll/ifacconf-typst')))}.`,
    inline`Please stick to the format defined by the ${raw('ifacconf')} function, and do not change the
margins or the general layout of the paper. It is especially important that you do not put any
running header/footer or page number in the submitted paper.${footnote_2(inline`This is the default for the provided class file.`)}
Use ${emph(inline`italics`)} for emphasis; do not underline.`,
    'Page limits may vary from conference to conference. Please observe the page limits of the event for which your paper is intended.',
    m.heading(1, 'Procedure for Paper Submission'),
    'Next we see a few subsections.',
    m.heading(2, 'Review Stage'),
    'For submission guidelines, follow instructions on paper submission system as well as the event website.',
    'Note that conferences impose strict page limits, so it will be better for you to prepare your initial submission in the camera ready layout so that you will have a good estimate for the paper length. Additionally, the effort required for final submission will be minimal.',
    m.heading(2, 'Equations'),
    inline`Some words might be appropriate describing equation ${ref(label('sample'))}, if we had but time
and space enough.`,
    inline(
      labelled(
        [unsafeRaw.math.block`(partial F) / (partial t) = D (partial^2 F) / (partial x^2)`, space],
        label('sample'),
      ),
    ),
    inline`See ${ref(label('Abl56'))} ${ref(label('AbTaRu54'))} ${ref(label('Keo58'))}, and ${ref(label('Pow85'))}.`,
    m.lines(
      m.heading(3, 'Example.'),
      'This equation goes far beyond the celebrated theorem ascribed to the great Pythagoras by his followers.',
    ),
    inline(
      theorem(inline`${space}The square of the length of the hypotenuse of a right triangle equals the sum of the
squares of the lengths of the other two sides.${space}`),
      space,
      proof(inline`${space}The square of the length of the hypotenuse of a right triangle equals the sum of the
squares of the lengths of the other two sides.${space}`),
    ),
    m.heading(2, 'Figures'),
    inline`To insert figures, use the ${raw('#figure')} function. See ${ref(label('bifurcation'))} for
an example which was generated by the following code.`,
    inline(
      raw(
        { block: true },
        '#figure(\n  image("bifurcation.jpg", width: 8.4cm)\n  caption: [Bifurcation: ...]\n) <bifurcation>',
      ),
    ),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Bifurcation: Plot of local maxima of ${unsafeRaw.math`x`} with damping ${unsafeRaw.math`a`}
decreasing`,
              placement: auto,
            },
            rect({ width: cm(8.4), height: cm(6.3) }),
          ),
          space,
        ],
        label('bifurcation'),
      ),
    ),
    'Figures must be centered, and have a caption at the bottom.',
    m.heading(2, 'Tables'),
    inline`Tables must be centered and have a caption above them, numbered with Arabic numerals. See ${ref(label('margins'))}
for an example.`,
    inline(
      labelled(
        [
          tablefig(
            { caption: inline`Margin settings` },
            table(
              { columns: 4, align: add(center, horizon), stroke: null, inset: pt(3) },
              inline`Page`,
              inline`Top`,
              inline`Bottom`,
              inline`Left/Right`,
              table.hline(),
              inline`First`,
              inline`3.5`,
              inline`2.5`,
              inline`1.5`,
              inline`Rest`,
              inline`2.5`,
              inline`2.5`,
              inline`1.5`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('margins'),
      ),
    ),
    m.heading(2, 'Final Stage'),
    'Authors are expected to mind the margins diligently. Papers need to be stamped with event data and paginated for inclusion in the proceedings. If your manuscript bleeds into margins, you will be required to resubmit and delay the proceedings preparation in the process.',
    m.lines(
      m.heading(3, 'Page margins.'),
      inline`See ${ref(label('margins'))} for the page margins specification. All dimensions are in ${emph(inline`centimeters`)}.`,
    ),
    m.heading(2, 'PDF Creation'),
    'All fonts must be embedded/subsetted in the PDF file. This is handled by Typst.',
    m.heading(2, 'Copyright Form'),
    inline`IFAC will put in place an electronic copyright transfer system in due course. Please ${emph(inline`do not`)}
send copyright forms by mail or fax. More information on this will be made available on IFAC
website.`,
    m.heading(1, 'Units'),
    inline`Use SI as primary units. Other units may be used as secondary units (in parentheses). This applies
to papers in data storage. For example, write "${unsafeRaw.math`15" Gb/cm"^2`} (${unsafeRaw.math`100" Gb/in"^2`})".
An exception is when English units are used as identifiers in trade, such as "3.5 in disk drive".
Avoid combining SI and other units, such as current in amperes and magnetic field in oersteds.
This often leads to confusion because equations do not balance dimensionally. If you must use
mixed units, clearly state the units for each quantity in an equation. The SI unit for magnetic
field strength ${unsafeRaw.math`bold(upright(H))`} is ${unsafeRaw.math`"A/m"`}. However, if
you wish to use units of T, either refer to magnetic flux density ${unsafeRaw.math`bold(upright(B))`}
or magnetic field strength symbolized as ${unsafeRaw.math`mu_0 bold(upright(H))`}. Use the center
dot to separate compound units, e.g., "${unsafeRaw.math`upright(A) dot.c upright(m)^2`}".`,
    m.heading(1, 'Helpful Hints'),
    m.heading(2, 'Figures and Tables'),
    inline`Figure axis labels are often a source of confusion. Use words rather than symbols. As an example,
write the quantity "Magnetization", or "Magnetization M", not just "M". Put units in parentheses.
Do not label axes only with units. For example, write "Magnetization (${unsafeRaw.math`upright(A)`}/${unsafeRaw.math`upright(m)`})"
or "Magnetization (${unsafeRaw.math`upright(A)upright(m)^(-1)`})", not just "${unsafeRaw.math`upright(A)`}/${unsafeRaw.math`upright(m)`}".
Do not label axes with a ratio of quantities and units. For example, write "Temperature (${unsafeRaw.math`upright(K)`})",
not "${unsafeRaw.math`"Temperature"`}/${unsafeRaw.math`upright(K)`}".`,
    inline`Multipliers can be especially confusing. Write "Magnetization (${unsafeRaw.math`"kA"/upright(m)`})"
or "Magnetization (${unsafeRaw.math`10^3 upright(A)`}/${unsafeRaw.math`upright(m)`})''. Do not
write "Magnetization ${unsafeRaw.math`(upright(A)`}/${unsafeRaw.math`upright(m)) times 1000`}"
because the reader would not know whether the axis label means ${unsafeRaw.math`16000 med upright(A)`}/${unsafeRaw.math`upright(m)`}
or ${unsafeRaw.math`0.016 med upright(A)`}/${unsafeRaw.math`upright(m)`}.`,
    m.heading(2, 'References'),
    inline`Use Harvard style references (see at the end of this document). With Typst, you can process
an external bibliography database in the BibTeX format (${raw('.bib')}) or Hayagriva (a Rust-based
bibliography management system based on YAML) formats. Footnotes should be avoided as far as
possible. Please note that the references at the end of this document are in the preferred referencing
style. Papers that have not been published should be cited as "unpublished". Capitalize only
the first word in a paper title, except for proper nouns and element symbols.`,
    m.heading(2, 'Abbreviations and Acronyms'),
    inline`Define abbreviations and acronyms the first time they are used in the text, even after they
have already been defined in the abstract. Abbreviations such as IFAC, SI, ac, and dc do not
have to be defined. Abbreviations that incorporate periods should not have spaces: write "C.N.R.S.",
not "C. N. R. S." Do not use abbreviations in the title unless they are unavoidable (for example,
"IFAC" in the title of this article).`,
    m.heading(2, 'Equations'),
    inline`Number equations consecutively with equation numbers in parentheses flush with the right margin,
as in ${ref(label('sample'))}. To make your equations more compact, you may use the solidus
(/), the ${unsafeRaw.math`exp`} function, or appropriate exponents. Use parentheses to avoid
ambiguities in denominators. Punctuate equations when they are part of a sentence, as in`,
    inline(
      labelled(
        [
          unsafeRaw.math
            .block`integral_0^(r_2) & F(r, phi.alt) upright(d)r upright(d) phi.alt = [sigma r_2 \\/ (2 mu_0)] \\
  & dot.c integral_0^"inf" exp(- lambda |z_j - z_i|) lambda^(-1) J_1 (lambda r_2) J_0 (lambda r_i) upright(d) lambda`,
          space,
        ],
        label('sample2'),
      ),
    ),
    inline`Be sure that the symbols in your equation have been defined before the equation appears or immediately
following. Italicize symbols (${unsafeRaw.math`T`} might refer to temperature, but T is the
unit tesla). Refer to "${ref(label('sample'))}", not "Eq. ${ref(label('sample'))}" or "equation
${ref(label('sample'))}", except at the beginning of a sentence: "Equation ${ref(label('sample'))}
is ...".`,
    m.heading(2, 'Other Recommendations'),
    inline`Use one space after periods and colons. Hyphenate complex modifiers: "zero-field-cooled magnetization".
Avoid dangling participles, such as, "Using (1), the potential was calculated" (it is not clear
who or what used (1)). Write instead: "The potential was calculated by using (1)", or "Using
(1), we calculated the potential".`,
    inline`A parenthetical statement at the end of a sentence is punctuated outside of the closing parenthesis
(like this). (A parenthetical sentence is punctuated within the parentheses.) Avoid contractions;
for example, write "do not" instead of "don't". The serial comma is preferred: "A, B, and C"
instead of "A, B and C".`,
    m.heading(1, 'Conclusion'),
    'A conclusion section is not required. Although a conclusion may review the main points of the paper, do not replicate the abstract as the conclusion. A conclusion might elaborate on the importance of the work or suggest applications and extensions.',
    m.heading(1, 'Acknowledgments'),
    'Place acknowledgments here.',
    inline(bibliography_2('refs.bib')),
    inline(appendix(inline`Summary of Latin Grammar`)),
    inline(appendix(inline`Some Latin Vocabulary`)),
  )
}
