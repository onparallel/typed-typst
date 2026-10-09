// Converted from test/universe/corpus/triple-aaai.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  block,
  cite,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  fr,
  heading,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  linebreak,
  link,
  m,
  path,
  pct,
  pt,
  quote,
  raw,
  ref,
  set,
  show,
  smartquote,
  space,
  strong,
  sym,
  symbol,
  table,
  text,
  top,
  where,
} from '../../../src/index.ts'

export default () => {
  const aaai = external('aaai')
  const appendix = external('appendix')
  const LaTeX = external('LaTeX')
  const LaTeX2e = external('LaTeX2e')
  const TeX = external('TeX')
  const aaai_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('keywords', T.any, null)
    .named('numbering', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(aaai)
  const [authorsDecl, authors] = let_('authors', [
    { name: 'Firstname1 Lastname1', affl: 'skoltech', email: 'author@example.org', equal: true },
    { name: 'Firstname2 Lastname2', affl: ['airi', 'skoltech'], equal: true },
  ])
  const [affilationsDecl, affilations] = let_('affilations', {
    airi: { institution: 'AIRI', location: 'Moscow', country: 'Russia' },
    skoltech: { department: 'AI Center', institution: 'Skoltech', location: 'Moscow', country: 'Russia' },
  })
  return doc(
    m.lines(
      importPackage('@preview/triple-aaai:0.8.0', [aaai, appendix]),
      importFile('/logo.typ', [LaTeX, { item: 'LaTeXe', as: LaTeX2e }, TeX]),
    ),
    authorsDecl,
    affilationsDecl,
    show(
      aaai_with({
        title: inline`${space}AAAI Press Anonymous Submission${linebreak()} Instructions for Authors Using ${LaTeX}${space}`,
        authors: [authors, affilations],
        keywords: ['aaai'],
        abstract: inline`${space}AAAI creates proceedings, working notes, and technical reports directly from electronic
source furnished by the authors. To ensure that all papers in the publication have a uniform
appearance, authors must adhere to the following instructions.${space}`,
        bibliography: bibliography({ full: true }, path('main.bib')),
        accepted: false,
        numbering: null,
      }),
    ),
    show(where(raw, { block: true }), (it, ctx) =>
      block({ spacing: em(1) }, codeBlock([set(text, { size: pt(7) })], it)),
    ),
    m.heading(1, 'Preparing an Anonymous Submission'),
    'This document details the formatting requirements for anonymous submissions. The requirements are the same as for camera ready papers but with a few notable differences:',
    m.list(
      m.item([
        'Anonymous submissions must not include the author names and affiliations. Write',
        space,
        smartquote({ double: true }),
        'Anonymous Submission',
        smartquote({ double: true }),
        space,
        'as the',
        space,
        smartquote({ double: true }),
        'sole author',
        smartquote({ double: true }),
        space,
        'and leave the affiliations empty.',
      ]),
      m.item([
        'The PDF document',
        smartquote({ double: false }),
        's metadata should be cleared with a metadata-cleaning tool before submitting it. This is to prevent leaked information from revealing your identity.',
      ]),
      m.item([
        'References must be anonymized whenever the reader can infer that they are to the authors',
        smartquote({ double: false }),
        space,
        'previous work.',
      ]),
      m.item([
        'AAAI',
        smartquote({ double: false }),
        's copyright notice should not be included as a footer in the first page.',
      ]),
      m.item([
        'Only the PDF version is required at this stage. No source versions will be requested, nor any copyright transfer form.',
      ]),
    ),
    inline`You can achieve all of the above by enabling the ${raw('submission')} option when loading the
${raw('aaai2026')} package:`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  \\documentclass[letterpaper]{article}\n  \\usepackage[submission]{aaai2026}',
      ),
    ),
    'The remainder of this document are the original camera- ready instructions. Any contradiction of the above points ought to be ignored while preparing anonymous submissions.',
    m.heading(1, 'Camera-Ready Guidelines'),
    inline`Congratulations on having a paper selected for inclusion in an AAAI Press proceedings or technical
report! This document details the requirements necessary to get your accepted paper published
using PDF${LaTeX}. If you are using Microsoft Word, instructions are provided in a different
document. AAAI Press does not support any other formatting software.`,
    inline`The instructions herein are provided as a general guide for experienced ${LaTeX} users. If you
do not know how to use ${LaTeX}, please obtain assistance locally. AAAI cannot provide you with
support and the accompanying style files are ${strong(inline`not`)} guaranteed to work. If the
results you obtain are not in accordance with the specifications you received, you must correct
your source file to achieve the correct result.`,
    'These instructions are generic. Consequently, they do not include specific dates, page charges, and so forth. Please consult your specific written conference instructions for details regarding your submission. Please review the entire document for specific instructions that might apply to your particular situation. All authors must comply with the following:',
    m.list(
      m.item([
        'You must use the 2026 AAAI Press',
        space,
        LaTeX,
        space,
        'style file and the',
        space,
        raw('aaai2026.bst'),
        space,
        'bibliography style files, which are located in the 2026 AAAI Author Kit (',
        raw('aaai2026.sty'),
        ',',
        space,
        raw('aaai2026.bst'),
        ').',
      ]),
      m.item([
        'You must complete, sign, and return by the deadline the AAAI copyright form (unless directed by AAAI Press to use the AAAI Distribution License instead).',
      ]),
      m.item([
        'You must read and format your paper source and PDF according to the formatting instructions for authors.',
      ]),
      m.item([
        'You must submit your electronic files and abstract using our electronic submission form',
        space,
        strong(inline`on time`),
        '.',
      ]),
      m.item([
        'You must pay any required page or formatting charges to AAAI Press so that they are received by the deadline.',
      ]),
      m.item([
        'You must check your paper before submitting it, ensuring that it compiles without error, and complies with the guidelines found in the AAAI Author Kit.',
      ]),
    ),
    m.heading(1, 'Copyright'),
    inline`All papers submitted for publication by AAAI Press must be accompanied by a valid signed copyright
form. They must also contain the AAAI copyright notice at the bottom of the first page of the
paper. There are no exceptions to these requirements. If you fail to provide us with a signed
copyright form or disable the copyright notice, we will be unable to publish your paper. There
are ${strong(inline`no exceptions`)} to this policy. You will find a PDF version of the AAAI
copyright form in the AAAI AuthorKit. Please see the specific instructions for your conference
for submission details.`,
    m.heading(1, 'Formatting Requirements in Brief'),
    inline`We need source and PDF files that can be used in a variety of ways and can be output on a variety
of devices. The design and appearance of the paper is strictly governed by the aaai style file
(${raw('aaai2026.sty')}). ${strong(inline`You must not make any changes to the aaai style file, nor use any commands, packages, style
files, or macros within your own paper that alter that design, including, but not limited to
spacing, floats, margins, fonts, font size, and appearance.`)} AAAI imposes requirements on
your source and PDF files that must be followed. Most of these requirements are based on our
efforts to standardize conference manuscript properties and layout. All papers submitted to
AAAI for publication will be recompiled for standardization purposes. Consequently, every paper
submission must comply with the following requirements:`,
    m.list(
      m.item([
        'Your .tex file must compile in PDF',
        LaTeX,
        space,
        sym.dash.em,
        space,
        '(you may not include .ps or .eps figure files.)',
      ]),
      m.item(['All fonts must be embedded in the PDF file', space, sym.dash.em, space, 'including your figures.']),
      m.item([
        'Modifications to the style file, whether directly or via commands in your document may not ever be made, most especially when made in an effort to avoid extra page charges or make your paper fit in a specific number of pages.',
      ]),
      m.item(['No type 3 fonts may be used (even in illustrations).']),
      m.item(['You may not alter the spacing above and below captions, figures, headings, and subheadings.']),
      m.item([
        'You may not alter the font sizes of text elements, footnotes, heading elements, captions, or title information (for references and mathematics, please see the limited exceptions provided herein).',
      ]),
      m.item(['You may not alter the line spacing of text.']),
      m.item(['Your title must follow Title Case capitalization rules (not sentence case).']),
      m.item([
        LaTeX,
        space,
        'documents must use the Times or Nimbus font package (you may not use Computer Modern for the text of your paper).',
      ]),
      m.item(['No', space, LaTeX, space, '209 documents may be used or submitted.']),
      m.item([
        'Your source must not require use of fonts for non-Roman alphabets within the text itself. If your paper includes symbols in other languages (such as, but not limited to, Arabic, Chinese, Hebrew, Japanese, Thai, Russian and other Cyrillic languages), you must restrict their use to bit-mapped figures. Fonts that require non-English language support (CID and Identity-H) must be converted to outlines or 300 dpi bitmap or removed from the document (even if they are in a graphics file embedded in the document).',
      ]),
      m.item(['Two-column format in AAAI style is required for all papers.']),
      m.item(['The paper size for final submission must be US letter without exception.']),
      m.item(['The source file must exactly match the PDF.']),
      m.item(['The document margins may not be exceeded (no overfull boxes).']),
      m.item(['The number of pages and the file size must be as specified for your event.']),
      m.item(['No document may be password protected.']),
      m.item([
        'Neither the PDFs nor the source may contain any embedded links or bookmarks (no hyperref or navigator packages).',
      ]),
      m.item(['Your source and PDF must not have any page numbers, footers, or headers (no pagestyle commands).']),
      m.item(['Your PDF must be compatible with Acrobat 5 or higher.']),
      m.item([
        'Your',
        space,
        LaTeX,
        space,
        'source file (excluding references) must consist of a',
        space,
        strong(inline`single`),
        space,
        'file (use of the',
        space,
        smartquote({ double: true }),
        'input',
        smartquote({ double: true }),
        space,
        'command is not allowed.',
      ]),
      m.item([
        'Your graphics must be sized appropriately outside of',
        space,
        LaTeX,
        space,
        '(do not use the',
        space,
        smartquote({ double: true }),
        'clip',
        smartquote({ double: true }),
        space,
        'or',
        space,
        smartquote({ double: true }),
        'trim',
        smartquote({ double: true }),
        space,
        'command).',
      ]),
    ),
    'If you do not follow these requirements, your paper will be returned to you to correct the deficiencies.',
    m.heading(1, 'What Files to Submit'),
    'You must submit the following items to ensure that your paper is published:',
    m.list(
      m.item(['A fully-compliant PDF file.']),
      m.item([
        'Your',
        space,
        LaTeX,
        space,
        'source file submitted as a',
        space,
        strong(inline`single`),
        space,
        '.tex file (do not use the',
        space,
        smartquote({ double: true }),
        'input',
        smartquote({ double: true }),
        space,
        'command to include sections of your paper',
        space,
        sym.dash.em,
        space,
        'every section must be in the single source file). (The only allowable exception is .bib file, which should be included separately).',
      ]),
      m.item(['The bibliography (.bib) file(s).']),
      m.item([
        'Your source must compile on our system, which includes only standard',
        space,
        LaTeX,
        space,
        '2020 TeXLive support files.',
      ]),
      m.item(['Only the graphics files used in compiling paper.']),
      m.item(['The', space, LaTeX, symbol('-'), 'generated files (e.g. .aux, .bbl file, PDF, etc.).']),
    ),
    inline`Your ${LaTeX} source will be reviewed and recompiled on our system (if it does not compile,
your paper will be returned to you. ${strong(inline`Do not submit your source in multiple text files.`)}
Your single ${LaTeX} source file must include all your text, your bibliography (formatted using
${raw('aaai2026.bst')}), and any custom macros.`,
    inline`Your files should work without any supporting files (other than the program itself) on any computer
with a standard ${LaTeX} distribution.`,
    inline`${strong(inline`Do not send files that are not actually used in the paper.`)} Avoid including
any files not needed for compiling your paper, including, for example, this instructions file,
unused graphics files, style files, additional material sent for the purpose of the paper review,
intermediate build files and so forth.`,
    inline`${strong(inline`Obsolete style files.`)} The commands for some common packages (such as some
used for algorithms), may have changed. Please be certain that you are not compiling your paper
using old or obsolete style files.`,
    inline`${strong(inline`Final Archive.`)} Place your source files in a single archive which should be
compressed using .zip. The final file size may not exceed 10 MB. Name your source file with
the last (family) name of the first author, even if that is not you.`,
    m.heading(1, 'Using', ' ', LaTeX, ' ', 'to Format Your Paper'),
    inline`The latest version of the AAAI style file is available on AAAI's website. Download this file
and place it in the ${TeX} search path. Placing it in the same directory as the paper should
also work. You must download the latest version of the complete AAAI Author Kit so that you
will have the latest instruction set and style file.`,
    m.heading(2, 'Document Preamble'),
    inline`In the ${LaTeX} source for your paper, you ${strong(inline`must`)} place the following lines
as shown in the example in this subsection. This command set-up is for three authors. Add or
subtract author and address lines as necessary, and uncomment the portions that apply to you.
In most instances, this is all you need to do to format your paper in the Times font. The helvet
package will cause Helvetica to be used for sans serif. These files are part of the PSNFSS2e
package, which is freely available from many Internet sites (and is often part of a standard
installation).`,
    m.lines(
      'Leave the setcounter for section number depth commented out and set at 0 unless you want to add section numbers to your paper. If you do add section numbers, you must uncomment this line and change the number to 1 (for section numbers), or 2 (for section and subsection numbers). The style file will not work properly with numbering of subsubsections, so do not use a number higher than',
      m.enum(m.numbered(2, [])),
    ),
    m.lines(
      m.heading(3, 'The Following Must Appear in Your Preamble'),
      inline(
        raw(
          { block: true, lang: 'tex' },
          '  \\documentclass[letterpaper]{article}\n  % DO NOT CHANGE THIS\n  % DO NOT CHANGE THESE PACKAGES\n  \\usepackage[submission]{aaai2026}\n  \\usepackage{times} % DO NOT CHANGE THIS\n  \\usepackage{helvet} % DO NOT CHANGE THIS\n  \\usepackage{courier} % DO NOT CHANGE THIS\n  \\usepackage[hyphens]{url}\n  \\usepackage{graphicx} % DO NOT CHANGE THIS\n  \\urlstyle{rm} % DO NOT CHANGE THIS\n  \\def\\UrlFont{\\rm} % DO NOT CHANGE THIS\n  \\usepackage{graphicx}  % DO NOT CHANGE THIS\n  \\usepackage{natbib}  % DO NOT CHANGE THIS\n  \\usepackage{caption}  % DO NOT CHANGE THIS\n  \\frenchspacing % DO NOT CHANGE THIS\n  % DO NOT CHANGE THE PAGE SIZE\n  \\setlength{\\pdfpagewidth}{8.5in}\n  \\setlength{\\pdfpageheight}{11in}\n  %\n  % Keep the \\pdfinfo as shown here.\n  % Do not add /Title and /Author tags.\n  \\pdfinfo{\n  /TemplateVersion (2026.1)\n  }',
        ),
      ),
    ),
    m.heading(2, 'Preparing Your Paper'),
    'After the preamble above, you should prepare your paper as follows:',
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  \\begin{document}\n  \\maketitle\n  \\begin{abstract}\n  %...\n  \\end{abstract}',
      ),
    ),
    'You should then continue with the body of your paper. Your paper must conclude with the references, which should be inserted as follows:',
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  % References and End of Paper\n  % Place these lines at the end of the paper.\n  \\bibliography{Bibliography-File}\n  \\end{document}',
      ),
    ),
    m.heading(2, 'Commands and Packages That May Not Be Used'),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Commands that must not be used`, placement: top, scope: 'parent' },
            table(
              { columns: [fr(1), fr(1), fr(1), fr(1)], align: left, stroke: null },
              raw('\\abovecaption'),
              raw('\\abovedisplay'),
              raw('\\addevensidemargin'),
              raw('\\addsidemargin'),
              raw('\\addtolength'),
              raw('\\baselinestretch'),
              raw('\\belowcaption'),
              raw('\\belowdisplay'),
              raw('\\break'),
              raw('\\clearpage'),
              raw('\\clip'),
              raw('\\columnsep'),
              raw('\\float'),
              raw('\\input'),
              raw('\\input'),
              raw('\\linespread'),
              raw('\\newpage'),
              raw('\\pagebreak'),
              raw('\\renewcommand'),
              raw('\\setlength'),
              raw('\\textheight'),
              raw('\\tiny'),
              raw('\\topmargin'),
              raw('\\trim'),
              raw('\\vskip{-'),
              raw('\\vspace{-'),
            ),
          ),
          space,
        ],
        label('table1'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`LaTeX style packages that must not be used.`, placement: top },
            table(
              { columns: [fr(1), fr(1), fr(1), fr(1)], align: left, stroke: null },
              raw('authblk'),
              raw('babel'),
              raw('cjk'),
              raw('dvips'),
              raw('epsf'),
              raw('epsfig'),
              raw('euler'),
              raw('float'),
              raw('fullpage'),
              raw('geometry'),
              raw('graphics'),
              raw('hyperref'),
              raw('layout'),
              raw('linespread'),
              raw('lmodern'),
              raw('maltepaper'),
              raw('navigator'),
              raw('pdfcomment'),
              raw('pgfplots'),
              raw('psfig'),
              raw('pstricks'),
              raw('t1enc'),
              raw('titlesec'),
              raw('tocbind'),
              raw('ulem'),
            ),
          ),
          space,
        ],
        label('table2'),
      ),
    ),
    inline`There are a number of packages, commands, scripts, and macros that are incompatable with ${raw('aaai2026.sty')}.
The common ones are listed in tables ${ref({ supplement: null }, label('table1'))} and ${ref({ supplement: null }, label('table2'))}.
Generally, if a command, package, script, or macro alters floats, margins, fonts, sizing, linespacing,
or the presentation of the references and citations, it is unacceptable. Note that negative
vskip and vspace may not be used except in certain rare occurances, and may never be used around
tables, figures, captions, sections, subsections, subsubsections, or references.`,
    m.heading(2, 'Page Breaks'),
    'For your final camera ready copy, you must not use any page break commands. References must flow directly after the text without breaks. Note that some conferences require references to be on a separate page during the review process. AAAI Press, however, does not require this condition for the final paper.',
    m.heading(2, 'Paper Size, Margins, and Column Width'),
    'Papers must be formatted to print in two-column format on 8.5 x 11 inch US letter-sized paper. The margins must be exactly as follows:',
    m.list(
      m.item(['Top margin: 1.25 inches (first page), .75 inches (others)']),
      m.item(['Left margin: .75 inches']),
      m.item(['Right margin: .75 inches']),
      m.item(['Bottom margin: 1.25 inches']),
    ),
    inline`The default paper size in most installations of ${LaTeX} is A4. However, because we require
that your electronic paper be formatted in US letter size, the preamble we have provided includes
commands that alter the default to US letter size. Please note that using any other package
to alter page size (such as, but not limited to the Geometry package) will result in your final
paper being returned to you for correction.`,
    m.lines(
      m.heading(3, 'Column Width and Margins'),
      inline`To ensure maximum readability, your paper must include two columns. Each column should be 3.3
inches wide (slightly more than 3.25 inches), with a .375 inch (.952 cm) gutter of white space
between the two columns. The ${raw('aaai2026.sty')} file will automatically create these columns
for you.`,
    ),
    m.heading(2, 'Overlength Papers'),
    inline`If your paper is too long and you resort to formatting tricks to make it fit, it is quite likely
that it will be returned to you. The best way to retain readability if the paper is overlength
is to cut text, figures, or tables. There are a few acceptable ways to reduce paper size that
don't affect readability. First, turn on ${raw('\\frenchspacing')}, which will reduce the space
after periods. Next, move all your figures and tables to the top of the page. Consider removing
less important portions of a figure. If you use ${raw('\\centering')} instead of ${raw('\\begin{center}')}
in your figure environment, you can also buy some space. For mathematical environments, you
may reduce fontsize ${strong(inline`but not below 6.5 point`)}.`,
    inline`Commands that alter page layout are forbidden. These include ${raw('\\columnsep')}, ${raw('\\float')},
${raw('\\topmargin')}, ${raw('\\topskip')}, ${raw('\\textheight')}, ${raw('\\textwidth')}, ${raw('\\oddsidemargin')},
and ${raw('\\evensizemargin')} (this list is not exhaustive). If you alter page layout, you
will be required to pay the page fee. Other commands that are questionable and may cause your
paper to be rejected include ${raw('\\parindent')}, and ${raw('\\parskip')}. Commands that alter
the space between sections are forbidden. The title sec package is not allowed. Regardless of
the above, if your paper is obviously "squeezed" it is not going to to be accepted. Options
for reducing the length of a paper include reducing the size of your graphics, cutting text,
or paying the extra page charge (if it is offered).`,
    m.heading(2, 'Type Font and Size'),
    inline`Your paper must be formatted in Times Roman or Nimbus. We will not accept papers formatted using
Computer Modern or Palatino or some other font as the text or heading typeface. Sans serif,
when used, should be Courier. Use Symbol or Lucida or Computer Modern for ${emph(inline`mathematics only`)}.`,
    'Do not use type 3 fonts for any portion of your paper, including graphics. Type 3 bitmapped fonts are designed for fixed resolution printers. Most print at 300 dpi even if the printer resolution is 1200 dpi or higher. They also often cause high resolution imagesetter devices to crash. Consequently, AAAI will not accept electronic files containing obsolete type 3 fonts. Files containing those fonts (even in graphics) will be rejected. (Authors using blackboard symbols must avoid packages that use type 3 fonts.)',
    inline`Fortunately, there are effective workarounds that will prevent your file from embedding type
3 bitmapped fonts. The easiest workaround is to use the required times, helvet, and courier
packages with ${LaTeX2e}. (Note that papers formatted in this way will still use Computer Modern
for the mathematics. To make the math look good, you'll either have to use Symbol or Lucida,
or you will need to install type 1 Computer Modern fonts --- for more on these fonts, see the
section ${raw('')}Obtaining Type 1 Computer Modern.")`,
    'If you are unsure if your paper contains type 3 fonts, view the PDF in Acrobat Reader. The Properties/Fonts window will display the font name, font type, and encoding properties of all the fonts in the document. If you are unsure if your graphics contain type 3 fonts (and they are PostScript or encapsulated PostScript documents), create PDF versions of them, and consult the properties window in Acrobat Reader.',
    'The default size for your type must be ten-point with twelve-point leading (line spacing). Start all pages (except the first) directly under the top margin. (See the next section for instructions on formatting the title page.) Indent ten points when beginning a new paragraph, unless the paragraph begins directly below a heading or subheading.',
    m.lines(
      m.heading(3, 'Obtaining Type 1 Computer Modern for', ' ', LaTeX, '.'),
      inline`If you use Computer Modern for the mathematics in your paper (you cannot use it for the text)
you may need to download type 1 Computer fonts. They are available without charge from the American
Mathematical Society: ${link('http://www.ams.org/tex/type1-fonts.html')}.`,
    ),
    m.lines(
      m.heading(3, 'Nonroman Fonts.'),
      'If your paper includes symbols in other languages (such as, but not limited to, Arabic, Chinese, Hebrew, Japanese, Thai, Russian and other Cyrillic languages), you must restrict their use to bit-mapped figures.',
    ),
    m.heading(2, 'Title and Authors'),
    inline`Your title must appear centered over both text columns in sixteen-point bold type (twenty-four
point leading). The title must be written in Title Case according to the Chicago Manual of Style
rules. The rules are a bit involved, but in general verbs (including short verbs like be, is,
using, and go), nouns, adverbs, adjectives, and pronouns should be capitalized, (including both
words in hyphenated terms), while articles, conjunctions, and prepositions are lower case unless
they directly follow a colon or long dash. You can use the online tool ${link('https://titlecaseconverter.com/')}
to double-check the proper capitalization (select the "Chicago" style and mark the "Show explanations"
checkbox).`,
    inline`Author's names should appear below the title of the paper, centered in twelve-point type (with
fifteen point leading), along with affiliation(s) and complete address(es) (including electronic
mail address if available) in nine-point roman type (the twelve point leading). You should begin
the two-column format when you come to the abstract.`,
    m.lines(
      m.heading(3, 'Formatting Author Information.'),
      inline`Author information has to be set according to the following specification depending if you have
one or more than one affiliation. You may not use a table nor may you employ the ${raw('authorblk')}
package. For one or several authors from the same institution, please separate them with commas
and write all affiliation directly below (one affiliation per line) using the macros ${raw('\\author')}
and ${raw('\\affiliations')}:`,
    ),
    inline(
      raw(
        { block: true, lang: 'tex' },
        '\\author{\n    Author 1, ..., Author n\\\\\n}\n\\affiliations {\n    Address line\\\\\n    ... \\\\\n    Address line\\\\\n}',
      ),
    ),
    inline`For authors from different institutions, use ${raw('\\textsuperscript{\\rm x}')} to match authors
and affiliations. Notice that there should not be any spaces between the author name (or comma
following it) and the superscript.`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '\\author{\n    AuthorOne,\\equalcontrib\n    \\textsuperscript{\\rm 1,\\rm 2}\n    AuthorTwo,\\equalcontrib\n    \\textsuperscript{\\rm 2}\n    AuthorThree,\\textsuperscript{\\rm 3}\\\\\n    AuthorFour,\\textsuperscript{\\rm 4}\n    AuthorFive \\textsuperscript{\\rm 5}}\n}\n\\affiliations {\n    \\textsuperscript{\\rm 1}AffiliationOne,\\\\\n    \\textsuperscript{\\rm 2}AffiliationTwo,\\\\\n    \\textsuperscript{\\rm 3}AffiliationThree,\\\\\n    \\textsuperscript{\\rm 4}AffiliationFour,\\\\\n    \\textsuperscript{\\rm 5}AffiliationFive\\\\\n    \\{email, email\\}@affiliation.com,\n    email@affiliation.com,\n    email@affiliation.com,\n    email@affiliation.com\n}',
      ),
    ),
    inline`You can indicate that some authors contributed equally using the ${raw('\\equalcontrib')} command.
This will add a marker after the author names and a footnote on the first page.`,
    inline`Note that you may want to break the author list for better visualization. You can achieve this
using a simple line break (${raw('\\\\')}).`,
    m.heading(2, LaTeX, ' ', 'Copyright Notice'),
    inline`The copyright notice automatically appears if you use ${raw('aaai2026.sty')}. It has been hardcoded
and may not be disabled.`,
    m.heading(2, 'Credits'),
    inline`Any credits to a sponsoring agency should appear in the acknowledgments section, unless the
agency requires different placement. If it is necessary to include this information on the front
page, use ${raw('\\thanks')} in either the ${raw('\\author')} or ${raw('\\title')} commands.
For example:`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  \\title{Very Important Results in AI\n    \\thanks{This work is supported\n      by everybody.}}',
      ),
    ),
    inline`Multiple ${raw('\\thanks')} commands can be given. Each will result in a separate footnote indication
in the author or title with the corresponding text at the botton of the first column of the
document. Note that the ${raw('\\thanks')} command is fragile. You will need to use ${raw('\\protect')}.`,
    inline`Please do not include ${raw('\\pubnote')} commands in your document.`,
    m.heading(2, 'Abstract'),
    inline`Follow the example commands in this document for creation of your abstract. The command ${raw('\\begin{abstract}')}
will automatically indent the text block. Please do not indent it further. Do not include references
in your abstract!`,
    m.heading(2, 'Page Numbers'),
    inline`Do not print any page numbers on your paper. The use of ${raw('\\pagestyle')} is forbidden.`,
    m.heading(2, 'Text'),
    'The main body of the paper must be formatted in black, ten-point Times Roman with twelve-point leading (line spacing). You may not reduce font size or the linespacing. Commands that alter font size or line spacing (including, but not limited to baselinestretch, baselineshift, linespread, and others) are expressly forbidden. In addition, you may not use color in the text.',
    m.heading(2, 'Citations'),
    inline`Citations within the text should include the author's last name and year, for example (Newell
1980). Append lower-case letters to the year in cases of ambiguity. Multiple authors should
be treated as follows: (Feigenbaum and Engelmore 1988) or (Ford, Hayes, and Glymour 1992). In
the case of four or more authors, list only the first author, followed by et al. (Ford et al.
1997).`,
    m.heading(2, 'Extracts'),
    'Long quotations and extracts should be indented ten points from the left and right margins.',
    inline(
      quote(
        { block: true },
        inline`${space}This is an example of an extract or quotation. Note the indent on both sides. Quotation
marks are not necessary if you offset the text in a block like this, and properly identify and
cite the quotation in the text.${space}`,
      ),
    ),
    m.heading(2, 'Footnotes'),
    'Use footnotes judiciously, taking into account that they interrupt the reading of the text. When required, they should be consecutively numbered throughout with superscript Arabic numbers. Footnotes should appear at the bottom of the page, separated from the text by a blank line space and a thin, half-point rule.',
    m.heading(2, 'Headings and Sections'),
    'When necessary, headings should be used to separate major sections of your paper. Remember, you are writing a short paper, not a lengthy book! An overabundance of headings will tend to make your paper look more like an outline than a paper. The aaai2026.sty package will create headings for you. Do not alter their size nor their spacing above or below.',
    m.lines(
      m.heading(3, 'Section Numbers.'),
      inline`The use of section numbers in AAAI Press papers is optional. To use section numbers in ${LaTeX},
uncomment the setcounter line in your document preamble and change the 0 to a 1. Section numbers
should not be used in short poster papers and/or extended abstracts.`,
    ),
    m.lines(m.heading(3, 'Section Headings.'), 'Sections should be arranged and headed as follows:'),
    m.enum(
      m.item(['Main content sections']),
      m.item(['Appendices (optional)']),
      m.item(['Ethical Statement (optional, unnumbered)']),
      m.item(['Acknowledgements (optional, unnumbered)']),
      m.item(['References (unnumbered)']),
    ),
    m.lines(
      m.heading(3, 'Appendices.'),
      inline`Any appendices must appear after the main content. If your main sections are numbered, appendix
sections must use letters instead of arabic numerals. In ${LaTeX} you can use the ${raw('\\appendix')}
command to achieve this effect and then use ${raw('\\section{Heading}')} normally for your appendix
sections.`,
    ),
    m.lines(
      m.heading(3, 'Ethical Statement.'),
      inline`You can write a statement about the potential ethical impact of your work, including its broad
societal implications, both positive and negative. If included, such statement must be written
in an unnumbered section titled ${emph(inline`Ethical Statement`)}.`,
    ),
    m.lines(
      m.heading(3, 'Acknowledgments.'),
      inline`The acknowledgments section, if included, appears right before the references and is headed
"Acknowledgments". It must not be numbered even if other sections are (use ${raw('\\section*{Acknowledgements}')}
in ${LaTeX}). This section includes acknowledgments of help from associates and colleagues,
credits to sponsoring agencies, financial support, and permission to publish. Please acknowledge
other contributors, grant support, and so forth, in this section. Do not put acknowledgments
in a footnote on the first page. If your grant agency requires acknowledgment of the grant on
page 1, limit the footnote to the required statement, and put the remaining acknowledgments
at the back. Please try to limit acknowledgments to no more than three sentences.`,
    ),
    m.lines(
      m.heading(3, 'References.'),
      inline`The references section should be labeled "References" and must appear at the very end of the
paper (don't end the paper with references, and then put a figure by itself on the last page).
A sample list of references is given later on in these instructions. Please use a consistent
format for references. Poorly prepared or sloppy references reflect badly on the quality of
your paper and your research. Please prepare complete and accurate citations.`,
    ),
    m.heading(2, 'Illustrations and Figures'),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Using the trim and clip commands produces fragile layers that can result in disasters
(like this one from an actual paper) when the color space is corrected or the PDF combined with
others for the final proceedings. Crop your figures properly in a graphics program -- not in
${LaTeX}.${space}`,
              placement: top,
            },
            image({ width: pct(100) }, path('figure1.svgz')),
          ),
          space,
        ],
        label('fig1'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Adjusting the bounding box instead of actually removing the unwanted data resulted multiple
layers in this paper. It also needlessly increased the PDF size. In this case, the size of the
unwanted layer doubled the paper's size, and produced the following surprising results in final
production. Crop your figures properly in a graphics program. Don't just alter the bounding
box.${space}`,
              placement: top,
              scope: 'parent',
            },
            image(path('figure2.svgz')),
          ),
          space,
        ],
        label('fig2'),
      ),
    ),
    inline`Your paper must compile in PDF${LaTeX}. Consequently, all your figures must be .jpg, .png, or
.pdf. You may not use the .gif (the resolution is too low), .ps, or .eps file format for your
figures.`,
    inline`Figures, drawings, tables, and photographs should be placed throughout the paper on the page
(or the subsequent page) where they are first discussed. Do not group them together at the end
of the paper. If placed at the top of the paper, illustrations may run across both columns.
Figures must not invade the top, bottom, or side margin areas. Figures must be inserted using
the ${raw('\\usepackage{graphicx}')}. Number figures sequentially, for example, figure 1, and
so on. Do not use minipage to group figures.`,
    inline`If you normally create your figures using ${raw('pgfplots')}, please create the figures first,
and then import them as pdfs with proper bounding boxes, as the bounding and trim boxes created
by pfgplots are fragile and not valid.`,
    inline`When you include your figures, you must crop them ${strong(inline`outside`)} of ${LaTeX}. The
command ${raw('\\includegraphics*[clip=true, viewport 0 0 10 10]{...}')} might result in a PDF
that looks great, but the image is ${strong(inline`not really cropped`)}. The full image can
reappear (and obscure whatever it is overlapping) when page numbers are applied or color space
is standardized. ${ref(label('fig1'))} and ${ref(label('fig2'))} display some unwanted results
that often occur.`,
    inline`If your paper includes illustrations that are not compatible with PDF${TeX} (such as .eps or
.ps documents), you will need to convert them. The epstopdf package will usually work for eps
files. You will need to convert your ps files to PDF in either case.`,
    m.lines(
      m.heading(3, 'Figure Captions.'),
      inline`The illustration number and caption must appear ${emph(inline`under`)} the illustration. Labels
and other text with the actual illustration must be at least nine-point type. However, the font
and size of figure captions must be 10 point roman. Do not make them smaller, bold, or italic.
(Individual words may be italicized if the context requires differentiation.)`,
    ),
    m.heading(2, 'Tables'),
    inline`Tables should be presented in 10 point roman type. If necessary, they may be altered to 9 point
type. You may not use any commands that further reduce point size below nine points. Tables
that do not fit in a single column must be placed across double columns. If your table won't
fit within the margins even when spanning both columns, you must split it. Do not use minipage
to group tables.`,
    m.lines(
      m.heading(3, 'Table Captions.'),
      inline`The number and caption for your table must appear ${emph(inline`under`)} (not above) the table.
Additionally, the font and size of table captions must be 10 point roman and must be placed
beneath the figure. Do not make them smaller, bold, or italic. (Individual words may be italicized
if the context requires differentiation.)`,
    ),
    m.lines(
      m.heading(3, 'Low-Resolution Bitmaps.'),
      inline`You may not use low-resolution (such as 72 dpi) screen-dumps and GIF files --- these files contain
so few pixels that they are always blurry, and illegible when printed. If they are color, they
will become an indecipherable mess when converted to black and white. This is always the case
with gif files, which should never be used. The resolution of screen dumps can be increased
by reducing the print size of the original file while retaining the same number of pixels. You
can also enlarge files by manipulating them in software such as PhotoShop. Your figures should
be 300 dpi when incorporated into your document.`,
    ),
    m.lines(
      m.heading(3, LaTeX, ' ', 'Overflow.'),
      inline`${LaTeX} users please beware: ${LaTeX} will sometimes put portions of the figure or table or
an equation in the margin. If this happens, you need to make the figure or table span both columns.
If absolutely necessary, you may reduce the figure, or reformat the equation, or reconfigure
the table. ${strong(inline`Check your log file!`)} You must fix any overflow into the margin
(that means no overfull boxes in ${LaTeX}). ${strong(inline`Nothing is permitted to intrude into the margin or gutter.`)}`,
    ),
    m.lines(
      m.heading(3, 'Using Color.'),
      'Use of color is restricted to figures only. It must be WACG 2.0 compliant. (That is, the contrast ratio must be greater than 4.5:1 no matter the font size.) It must be CMYK, NOT RGB. It may never be used for any portion of the text of your paper. The archival version of your paper will be printed in black and white and grayscale. The web version must be readable by persons with disabilities. Consequently, because conversion to grayscale can cause undesirable effects (red changes to black, yellow can disappear, and so forth), we strongly suggest you avoid placing color figures in your document. If you do include color figures, you must (1) use the CMYK (not RGB) colorspace and (2) be mindful of readers who may happen to have trouble distinguishing colors. Your paper must be decipherable without using color for distinction.',
    ),
    m.lines(
      m.heading(3, 'Drawings.'),
      inline`We suggest you use computer drawing software (such as Adobe Illustrator or, (if unavoidable),
the drawing tools in Microsoft Word) to create your illustrations. Do not use Microsoft Publisher.
These illustrations will look best if all line widths are uniform (half- to two-point in size),
and you do not create labels over shaded areas. Shading should be 133 lines per inch if possible.
Use Times Roman or Helvetica for all figure call-outs. ${strong(inline`Do not use hairline width lines`)}
--- be sure that the stroke width of all lines is at least .5 pt. Zero point lines will print
on a laser printer, but will completely disappear on the high-resolution devices used by our
printers.`,
    ),
    m.lines(
      m.heading(3, 'Photographs and Images.'),
      'Photographs and other images should be in grayscale (color photographs will not reproduce well; for example, red tones will reproduce as black, yellow may turn to white, and so forth) and set to a minimum of 300 dpi. Do not prescreen images.',
    ),
    m.lines(
      m.heading(3, 'Resizing Graphics.'),
      inline`Resize your graphics ${strong(inline`before`)} you include them with ${LaTeX}. You may ${strong(inline`not`)}
use trim or clip options as part of your ${raw('\\includegraphics')} command. Resize the media
box of your PDF using a graphics program instead.`,
    ),
    m.lines(
      m.heading(3, 'Fonts in Your Illustrations.'),
      'You must embed all fonts in your graphics before including them in your LaTeX document.',
    ),
    m.lines(
      m.heading(3, 'Algorithms.'),
      inline`Algorithms and/or programs are a special kind of figures. Like all illustrations, they should
appear floated to the top (preferably) or bottom of the page. However, their caption should
appear in the header, left-justified and enclosed between horizontal lines, as shown in ${ref(label('algorithm'))}.
The algorithm body should be terminated with another horizontal line. It is up to the authors
to decide whether to show line numbers or not, how to format comments, etc.`,
    ),
    inline`In ${LaTeX} algorithms may be typeset using the ${raw('algorithm')} and ${raw('algorithmic')}
packages, but you can also use one of the many other packages for the task.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Example algorithm`, kind: 'algorithm', supplement: inline`Algorithm` },
            raw(
              { block: true, lang: 'tex' },
              "  \\textbf{Input}: Your algorithm's input\\\\\n  \\textbf{Parameter}: Optional parameters\\\\\n  \\textbf{Output}: Your algorithm's output\n  % [1] enables line numbers.\n  \\begin{algorithmic}[1]\n  \\STATE Let $t=0$.\n  \\WHILE{condition}\n  \\STATE Do some action.\n  \\IF {conditional}\n  \\STATE Perform task A.\n  \\ELSE\n  \\STATE Perform task B.\n  \\ENDIF\n  \\ENDWHILE\n  \\STATE \\textbf{return} solution",
            ),
          ),
          space,
        ],
        label('algorithm'),
      ),
    ),
    m.lines(
      m.heading(3, 'Listings.'),
      inline`Listings are much like algorithms and programs. They should also appear floated to the top (preferably)
or bottom of the page. Listing captions should appear in the header, left-justified and enclosed
between horizontal lines as shown in ${ref(label('listing'))}. Terminate the body with another
horizontal line and avoid any background color. Line numbers, if included, must appear within
the text column.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Example listing ${raw('quicksort.hs')}` },
            raw(
              { block: true, lang: 'haskell' },
              'quicksort :: Ord a => [a] -> [a]\nquicksort []     = []\nquicksort (p:xs) = quicksort lesser\n               ++ [p]\n               ++ quicksort greater\n        where\n                lesser  = filter (< p) xs\n                greater = filter (>= p) xs',
            ),
          ),
          space,
        ],
        label('listing'),
      ),
    ),
    m.heading(2, 'References'),
    inline`The AAAI style includes a set of definitions for use in formatting references with BibTeX. These
definitions make the bibliography style fairly close to the ones specified in the Reference
Examples appendix below. To use these definitions, you also need the BibTeX style file ${raw('aaai2026.bst')},
available in the AAAI Author Kit on the AAAI web site. Then, at the end of your paper but before
${raw('\\end{document}')}, you need to put the following lines:`,
    inline(raw({ block: true, lang: 'tex' }, '  \\bibliography{bibfile1,bibfile2,...}')),
    inline`Please note that the ${raw('aaai2026.sty')} class already sets the bibliographystyle for you,
so you do not have to place any ${raw('\\bibliographystyle')} command in the document yourselves.
The ${raw('aaai2026.sty')} file is incompatible with the ${raw('hyperref')} and ${raw('navigator')}
packages. If you use either, your references will be garbled and your paper will be returned
to you.`,
    inline`References may be the same size as surrounding text. However, in this section (only), you may
reduce the size to ${raw('\\small')} if your paper exceeds the allowable number of pages. Making
it any smaller than 9 point with 10 point linespacing, however, is not allowed. A more precise
and exact method of reducing the size of your references minimally is by means of the following
command:`,
    inline(raw({ block: true, lang: 'tex' }, '  \\fontsize{9.8pt}{10.8pt}\n  \\selectfont')),
    inline`You must reduce the size equally for both font size and line spacing, and may not reduce the
size beyond ${raw('{9.0pt}{10.0pt}')}.`,
    inline`The list of files in the ${raw('\\bibliography')} command should be the names of your Bib${TeX}
source files (that is, the .bib files referenced in your paper).`,
    'The following commands are available for your use in citing references:',
    m.list(
      m.item([
        raw('\\cite'),
        ': Cites the given reference(s) with a full citation, for example',
        space,
        ref(label('c:83')),
        space,
        'or',
        space,
        ref(label('hcr:83')),
        '.',
      ]),
      m.item([
        raw('\\shortcite'),
        ': Cites just the year in parentheses, for example (',
        cite({ form: 'year' }, label('c:83')),
        ').',
      ]),
      m.item([
        raw('\\citeauthor'),
        ': Cites just the author name(s), for example',
        space,
        cite({ form: 'author' }, label('hcr:83')),
        '.',
      ]),
      m.item([
        raw('\\citeyear'),
        ': Cites just the date, for example',
        space,
        cite({ form: 'year' }, label('c:83')),
        '.',
      ]),
    ),
    inline`You may also use any of the ${raw('natbib')} citation commands.`,
    m.heading(1, 'Proofreading Your PDF'),
    inline`Please check all the pages of your PDF file. The most commonly forgotten element is the acknowledgements
--- especially the correct grant number. Authors also commonly forget to add the metadata to
the source, use the wrong reference style file, or don't follow the capitalization rules or
comma placement for their author-title information properly. A final common problem is text
(expecially equations) that runs into the margin. You will need to fix these common errors before
submitting your file.`,
    m.heading(1, 'Improperly Formatted Files'),
    'In the past, AAAI has corrected improperly formatted files submitted by the authors. Unfortunately, this has become an increasingly burdensome expense that we can no longer absorb). Consequently, if your file is improperly formatted, it will be returned to you for correction.',
    m.heading(1, 'Naming Your Electronic File'),
    inline`We require that you name your ${LaTeX} source file with the last name (family name) of the first
author so that it can easily be differentiated from other submissions. Complete file-naming
instructions will be provided to you in the submission instructions.`,
    m.heading(1, 'Submitting Your Electronic Files to AAAI'),
    'Instructions on paper submittal will be provided to you in your acceptance letter.',
    m.heading(1, 'Inquiries'),
    inline`If you have any questions about the preparation or submission of your paper as instructed in
this document, please contact AAAI Press at the address given below. If you have technical questions
about implementation of the aaai style file, please contact an expert at your site. We do not
provide technical support for ${LaTeX} or any other software package. To avoid problems, please
keep your paper simple, and do not incorporate complicated macros and style files.`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  \\noindent AAAI Press\\\\\n  1900 Embarcadero Road, Suite 101\\\\\n  Palo Alto, California 94303-3310 USA\\\\\n  \\textit{Telephone:} (650) 328-3123\\\\\n  \\textit{E-mail:} See the submission\n  instructions for your conference or event.',
      ),
    ),
    m.heading(1, 'Additional Resources'),
    inline`${LaTeX} is a difficult program to master. If you've used that software, and this document didn't
help or some items were not explained clearly, we recommend you read Michael Shell's excellent
document (testflow doc.txt V1.0a 2002/08/13) about obtaining correct PS/PDF output on ${LaTeX}
systems. (It was written for another purpose, but it has general application as well). It is
available at ${link('https://www.ctan.org')} in the tex-archive.`,
    m.lines(
      show(appendix),
      inline(labelled(heading({ depth: 1 }, inline('Reference Examples')), label('reference_examples'))),
    ),
    inline`Formatted bibliographies should look like the following examples. You should use Bib${TeX} to
generate the references. Missing fields are unacceptable when compiling references, and usually
indicate that you are using the wrong type of entry (Bib${TeX} class).`,
    inline`${strong(inline`Book with multiple authors.`)} Use the ${raw('@book')} class.`,
    inline(cite({ form: 'full' }, label('em:86'))),
    inline`${strong(inline`Journal and magazine articles.`)} Use the ${raw('@article')} class.`,
    inline(cite({ form: 'full' }, label('r:80'))),
    inline(cite({ form: 'full' }, label('hcr:83'))),
    inline`${strong(inline`Proceedings paper published by a society, press or publisher.`)} Use the ${raw('@inproceedings')}
class. You may abbreviate the ${emph(inline`booktitle`)} field, but make sure that the conference
edition is clear.`,
    inline(cite({ form: 'full' }, label('c:84'))),
    inline(cite({ form: 'full' }, label('c:83'))),
    inline`${strong(inline`University technical report.`)} Use the ${raw('@techreport')} class.`,
    inline(cite({ form: 'full' }, label('r:86'))),
    inline`${strong(inline`Dissertation or thesis.`)} Use the ${raw('@phdthesis')} class.`,
    inline(cite({ form: 'full' }, label('c:79'))),
    inline`${strong(inline`Forthcoming publication.`)} Use the ${raw('@misc')} class with a ${raw('note="Forthcoming"')}
annotation. ${raw({ block: true, lang: 'tex' }, '  @misc(key,\n    [...]\n    note="Forthcoming",\n  )')}
${cite({ form: 'full' }, label('c:21'))}`,
    inline`${strong(inline`ArXiv paper.`)} Fetch the BibTeX entry from the "Export Bibtex Citation" link
in the arXiv website. Notice it uses the ${raw('@misc')} class instead of the ${raw('@article')}
one, and that it includes the ${raw('eprint')} and ${raw('archivePrefix')} keys.`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  @misc(key,\n    [...]\n    eprint="xxxx.yyyy",\n    archivePrefix="arXiv",\n  )',
      ),
    ),
    inline(cite({ form: 'full' }, label('c:22'))),
    inline`${strong(inline`Website or online resource.`)} Use the ${raw('@misc')} class. Add the url in
the ${raw('howpublished')} field and the date of access in the ${raw('note')} field:`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  @misc(key,\n    [...]\n    howpublished="\\url{http://...}",\n    note="Accessed: YYYY-mm-dd",\n  )',
      ),
    ),
    inline(cite({ form: 'full' }, label('c:23'))),
    inline`For the most up to date version of the AAAI reference style, please consult the ${emph(inline`AI Magazine`)}
Author Guidelines at ${link('https://aaai.org/ojs/index.php/aimagazine/about/submissions#authorGuidelines')}.`,
    m.heading(1, 'Acknowledgments'),
    inline`AAAI is especially grateful to Peter Patel Schneider for his work in implementing the original
${raw('aaai.sty')} file, liberally using the ideas of other style hackers, including Barbara
Beeton. We also acknowledge with thanks the work of George Ferguson for his guide to using the
style and Bib${TeX} files --- which has been incorporated into this document --- and Hans Guesgen,
who provided several timely modifications, as well as the many others who have, from time to
time, sent in suggestions on improvements to the AAAI style. We are especially grateful to Francisco
Cruz, Marc Pujol-Gonzalez, and Mico Loretan for the improvements to the Bib${TeX} and ${LaTeX}
files made in 2020.`,
    inline`The preparation of the ${LaTeX} and Bib${TeX} files that implement these instructions was supported
by Schlumberger Palo Alto Research, AT&T Bell Laboratories, Morgan Kaufmann Publishers, The
Live Oak Press, LLC, and AAAI Press. Bibliography style changes were added by Sunil Issar. ${raw('\\pubnote')}
was added by J. Scott Penberthy. George Ferguson added support for printing the AAAI copyright
slug. Additional changes to ${raw('aaai2026.sty')} and ${raw('aaai2026.bst')} have been made
by Francisco Cruz and Marc Pujol-Gonzalez.`,
    'Thank you for reading these instructions carefully. We look forward to receiving your electronic files!',
  )
}
