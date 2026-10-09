// Converted from test/universe/corpus/bloated-neurips.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  block,
  center,
  cm,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  heading,
  horizon,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  let_,
  m,
  path,
  pt,
  quote,
  raw,
  rect,
  ref,
  set,
  show,
  smartquote,
  space,
  strong,
  sym,
  symbol,
  table,
  top,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const botrule = external('botrule')
  const midrule = external('midrule')
  const neurips2026 = external('neurips2026')
  const paragraph = define('paragraph').pos('arg1', T.content).returns(T.any).external()
  const toprule = external('toprule')
  const url = define('url').pos('arg1', T.any).returns(T.any).external()
  const LaTeX = external('LaTeX')
  const LaTeXe = external('LaTeXe')
  const TeX = external('TeX')
  const neurips2026_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('bibliography-opts', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(neurips2026)
  const [afflsDecl, affls] = let_('affls', {
    airi: ['AIRI', 'Moscow', 'Russia'],
    skoltech: { department: 'AI Center', institution: 'Skoltech', location: 'Moscow', country: 'Russia' },
    skoltech2: { department: 'AI Center', institution: 'Skoltech', location: 'Moscow', country: 'Russia' },
  })
  const [authorsDecl, authors] = let_('authors', [
    { name: 'Firstname1 Lastname1', affl: 'skoltech', email: 'author@example.org', equal: true },
    { name: 'Firstname2 Lastname2', affl: ['airi', 'skoltech'], equal: true },
  ])
  return doc(
    m.lines(
      importPackage('@preview/bloated-neurips:0.8.0', [
        appendix,
        botrule,
        midrule,
        neurips2026,
        paragraph,
        toprule,
        url,
      ]),
      importFile('/logo.typ', [LaTeX, LaTeXe, TeX]),
    ),
    afflsDecl,
    authorsDecl,
    show(
      neurips2026_with({
        title: inline`Formatting Instructions For NeurIPS 2026`,
        authors: [authors, affls],
        keywords: ['Machine Learning', 'NeurIPS'],
        abstract: inline`${space}The abstract paragraph should be indented ½ inch (3 picas) on both the left- and right-hand
margins. Use 10 point type, with a vertical spacing (leading) of 11 points. The word ${strong(inline`Abstract`)}
must be centered, bold, and in point size 12. Two line spaces precede the abstract. The abstract
must be limited to one paragraph.${space}`,
        bibliography: bibliography(path('main.bib')),
        bibliographyOpts: { title: null, full: true },
        accepted: false,
      }),
    ),
    m.heading(1, 'Submission of papers to NeurIPS 2026'),
    'Please read the instructions below carefully and follow them faithfully.',
    m.heading(2, 'Style'),
    inline`Papers to be submitted to NeurIPS 2026 must be prepared according to the instructions presented
here. Papers may only be up to ${strong(inline`nine`)} pages long, including figures. ${strong(inline`Papers that exceed the page limit will not be reviewed (or in any other way considered) for
presentation at the conference.`)} Additional pages ${emph(inline`containing acknowledgments, references, checklist, and optional technical appendices`)}
do not count as content pages.`,
    'The margins in 2026 are the same as those in previous years.',
    inline`Authors are required to use the NeurIPS ${LaTeX} style files obtainable at the NeurIPS website
as indicated below. Please make sure you use the current files and not previous versions. Tweaking
the style files may be grounds for desk rejection.`,
    m.heading(2, 'Retrieval of style files'),
    'The style files for NeurIPS and other conference information are available on the website at',
    inline(align(center, block({ spacing: pt(15) }, codeBlock([], url('http://www.neurips.cc/'))))),
    inline`The only supported style file for NeurIPS 2026 is ${raw('neurips_2026.sty')}, rewritten for
${LaTeXe}. ${strong(inline`Previous style files for LATEX 2.09, Microsoft Word, and RTF are no longer supported.`)}`,
    inline`The ${LaTeX} style file contains three optional arguments:`,
    m.list(
      m.item([raw('final'), ', which creates a camera-ready copy,']),
      m.item([raw('preprint'), ', which creates a preprint for submission to, e.g., arXiv,']),
      m.item([raw('nonatbib'), ', which will not load the natbib package for you in case of package clash.']),
    ),
    inline`${paragraph(inline`Preprint option`)} If you wish to post a preprint of your work online, e.g.,
on arXiv, using the NeurIPS style, please use the ${raw('preprint')} option. This will create
a nonanonymized version of your work with the text "Preprint. Work in progress." in the footer.
This version may be distributed as you see fit, as long as you do not say which conference it
was submitted to. Please ${strong(inline`do not`)} use the ${raw('final')} option, which should
${strong(inline`only`)} be used for papers accepted to NeurIPS.`,
    inline`At submission time, please omit the ${raw('final')} and ${raw('preprint')} options. This will
anonymize your submission and add line numbers to aid review. Please do ${emph(inline`not`)}
refer to these line numbers in your paper as they will be removed during generation of camera-ready
copies.`,
    inline`The file ${raw('neurips_2026.tex')} may be used as a "shell" for writing your paper. All you
have to do is replace the author, title, abstract, and text of the paper with your own.`,
    inline`The formatting instructions contained in these style files are summarized in Sections${sym.space.nobreak}${ref({ supplement: null }, label('gen_inst'))},
${ref({ supplement: null }, label('headings'))}, and ${ref({ supplement: null }, label('others'))}
below.`,
    inline(labelled(heading({ depth: 1 }, inline('General formatting instructions')), label('gen_inst'))),
    inline`The text must be confined within a rectangle 5.5${sym.space.nobreak}inches (33${sym.space.nobreak}picas)
wide and 9${sym.space.nobreak}inches (54${sym.space.nobreak}picas) long. The left margin is
1.5${sym.space.nobreak}inch (9${sym.space.nobreak}picas). Use 10${sym.space.nobreak}point type
with a vertical spacing (leading) of 11${sym.space.nobreak}points. Times New Roman is the preferred
typeface throughout, and will be selected for you by default. Paragraphs are separated by ½${sym.space.nobreak}line
space (5.5 points), with no indentation.`,
    inline`The paper title should be 17${sym.space.nobreak}point, initial caps/lower case, bold, centered
between two horizontal rules. The top rule should be 4${sym.space.nobreak}points thick and the
bottom rule should be 1${sym.space.nobreak}point thick. Allow ¼${sym.space.nobreak}inch space
above and below the title to rules. All pages should start at 1${sym.space.nobreak}inch (6${sym.space.nobreak}picas)
from the top of the page.`,
    inline`For the final version, authors' names are set in boldface, and each name is centered above the
corresponding address. The lead author's name is to be listed first (left-most), and the co-authors'
names (if different address) are set to follow. If there is only one co-author, list both author
and co-author side by side.`,
    inline`Please pay special attention to the instructions in ${ref(label('others'))} regarding figures,
tables, acknowledgments, and references.`,
    inline(labelled(heading({ depth: 1 }, inline('Headings: first level')), label('headings'))),
    'All headings should be lower case (except for first word and proper nouns), flush left, and bold.',
    'First-level headings should be in 12-point type.',
    m.heading(2, 'Headings: second level'),
    'Second-level headings should be in 10-point type.',
    m.heading(3, 'Headings: third level'),
    'Third-level headings should be in 10-point type.',
    inline`${paragraph(inline`Paragraphs`)} There is also a ${raw('\\paragraph')} command available, which
sets the heading in bold, flush left, and inline with the text, with the heading followed by
${em(1)} of space.`,
    inline(labelled(heading({ depth: 1 }, inline('Citations, figures, tables, references')), label('others'))),
    'These instructions apply to everyone.',
    m.heading(2, 'Citations within the text'),
    inline`The ${raw('natbib')} package will be loaded for you by default. Citations may be author/year
or numeric, as long as you maintain internal consistency. As to the format of the references
themselves, any style is acceptable as long as it is used consistently.`,
    inline`The documentation for ${raw('natbib')} may be found at`,
    inline(
      align(center, inline(space, url('http://mirrors.ctan.org/macros/latex/contrib/natbib/natnotes.pdf'), space)),
    ),
    inline`Of note is the command ${raw('\\citet')}, which produces citations appropriate for use in inline
text. For example,`,
    inline`${raw({ block: true, lang: 'tex' }, '    \\citet{hasselmo} investigated\\dots')} produces`,
    inline(
      codeBlock(
        [show(quote, set(block, { spacing: pt(15) }))],
        quote({ block: true }, inline`Hasselmo, et al.${sym.space.nobreak}(1995) investigated${symbol('d')}ots`),
      ),
    ),
    inline`If you wish to load the ${raw('natbib')} package with options, you may add the following before
loading the ${raw('neurips_2026')} package:`,
    inline(raw({ block: true, lang: 'tex' }, '    \\PassOptionsToPackage{options}{natbib}')),
    inline`If ${raw('natbib')} clashes with another package you load, you can add the optional argument
${raw('nonatbib')} when loading the style file:`,
    inline(raw({ block: true, lang: 'tex' }, '    \\usepackage[nonatbib]{neurips_2026}')),
    inline`As submission is double blind, refer to your own published work in the third person. That is,
use "In the previous work of Jones et al.${sym.space.nobreak}[4]," not "In our previous work
[4]." If you cite your other papers that are not widely available (e.g., a journal paper under
review), use anonymous author names in the citation, e.g., an author of the form "A.${sym.space.nobreak}Anonymous"
and include a copy of the anonymized paper in the supplementary material.`,
    inline(v(pt(7))),
    m.heading(2, 'Footnotes'),
    inline`Footnotes should be used sparingly. If you do require a footnote, indicate footnotes with a
number${footnote(inline`Sample of the first footnote.`)} in the text. Place the footnotes at
the bottom of the page on which they appear. Precede the footnote with a horizontal rule of
2${sym.space.nobreak}inches (12${sym.space.nobreak}picas).`,
    inline`Note that footnotes are properly typeset ${emph(inline`after`)} punctuation marks.${footnote(inline`As in this example.`)}`,
    m.heading(2, 'Figures'),
    inline(
      figure(
        {
          caption: inline`${space}Sample figure caption. Explain what the figure shows and add a key take-away message
to the caption.${space}`,
          placement: top,
        },
        rect({ width: cm(4.25), height: cm(4.25), stroke: pt(0.4) }),
      ),
    ),
    'All artwork must be neat, clean, and legible. Lines should be dark enough for purposes of reproduction. The figure number and caption always appear after the figure. Place one line space before the figure caption and one line space after the figure. The figure caption should be lower case (except for first word and proper nouns); figures are numbered consecutively.',
    'You may use color figures. However, it is best for the figure captions and the paper body to be legible if the paper is printed in either black/white or in color.',
    inline(labelled(heading({ depth: 2 }, inline('Tables')), label('tables'))),
    inline`All tables must be centered, neat, clean and legible. The table number and title always appear
before the table. See ${ref(label('sample-table'))}.`,
    'Place one line space before the table title, one line space after the table title, and one line space after the table. The table title must be lower case (except for first word and proper nouns); tables are numbered consecutively.',
    inline`Note that publication-quality tables ${emph(inline`do not contain vertical rules`)}. We strongly
suggest the use of the ${raw('booktabs')} package, which allows for typesetting high-quality,
professional tables:`,
    inline(align(center, inline(space, url('https://www.ctan.org/pkg/booktabs'), space))),
    inline`This package was used to typeset ${ref(label('sample-table'))}.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Sample table caption. Explain what the table shows and add a key take-away message to
the caption.${space}`,
              placement: top,
            },
            table(
              { columns: 3, align: add(left, horizon), stroke: null },
              toprule,
              table.header(
                table.cell({ colspan: 2, align: center }, inline`Part`),
                inline(),
                table.hline({ start: 0, end: 2, stroke: { thickness: em(0.05) } }),
                inline`Name`,
                inline`Description`,
                inline`Size (${unsafeRaw.math`mu`}m)`,
              ),
              midrule,
              inline`Dendrite`,
              inline`Input terminal${space}`,
              inline(unsafeRaw.math`~100`),
              inline`Axon${space}`,
              inline`Output terminal`,
              inline(unsafeRaw.math`~10`),
              inline`Soma${space}`,
              inline`Cell body${space}`,
              inline`up to ${unsafeRaw.math`10^6`}`,
              botrule,
            ),
          ),
          space,
        ],
        label('sample-table'),
      ),
    ),
    m.heading(2, 'Math'),
    inline`Note that display math in bare TeX commands will not create correct line numbers for submission.
Please use LaTeX (or AMSTeX) commands for unnumbered display math. (You really shouldn't be
using ${unsafeRaw.math`dollar dollar`} anyway; see ${url('https://tex.stackexchange.com/questions/503/why-is-preferable-to')}
and ${url('https://tex.stackexchange.com/questions/40492/what-are-the-differences-between-align-equation-and-displaymath')}
for more information.)`,
    m.heading(2, 'Final instructions'),
    inline`Do not change any aspects of the formatting parameters in the style files. In particular, do
not modify the width or length of the rectangle the text should fit into, and do not change
font sizes (except perhaps in the ${strong(inline`References`)} section; see below). Please
note that pages should be numbered.`,
    inline(v(pt(-8))),
    m.heading(1, 'Preparing PDF files'),
    inline`Please prepare submission files with paper size "US Letter," and not, for example, "A4."`,
    'Fonts were the main cause of problems in the past years. Your PDF file must only contain Type 1 or Embedded TrueType fonts. Here are a few instructions to achieve this.',
    m.list(
      { tight: false },
      m.item(['You should directly generate PDF files using', space, raw('pdflatex'), '.']),
      m.item([
        'You can check which fonts a PDF files uses. In Acrobat Reader, select the menu Files',
        unsafeRaw.math`>`,
        'Document Properties',
        unsafeRaw.math`>`,
        'Fonts and select Show All Fonts. You can also use the program',
        space,
        raw('pdffonts'),
        space,
        'which comes with',
        space,
        raw('xpdf'),
        space,
        'and is available out-of-the-box on most Linux machines.',
      ]),
      m.item([
        raw('xfig'),
        space,
        smartquote({ double: true }),
        'patterned',
        smartquote({ double: true }),
        space,
        'shapes are implemented with bitmap fonts. Use',
        space,
        smartquote({ double: true }),
        'solid',
        smartquote({ double: true }),
        space,
        'shapes instead.',
      ]),
      m.item(
        [
          'The',
          space,
          raw('\\bbold'),
          space,
          'package almost always uses bitmap fonts. You should use the equivalent AMS Fonts:',
        ],
        inline(raw({ block: true, lang: 'tex' }, '    \\usepackage{amsfonts}')),
        inline`followed by, e.g., ${raw('\\mathbb{R}')}, ${raw('\\mathbb{N}')}, or ${raw('\\mathbb{C}')} for
${unsafeRaw.math`RR`}, ${unsafeRaw.math`NN`} or ${unsafeRaw.math`CC`}. You can also use the
following workaround for reals, natural and complex:`,
        inline(
          raw(
            { block: true, lang: 'tex' },
            '    \\newcommand{\\RR}{I\\!\\!R} %real numbers\n    \\newcommand{\\Nat}{I\\!\\!N} %natural numbers\n    \\newcommand{\\CC}{I\\!\\!\\!\\!C} %complex numbers',
          ),
        ),
        inline`Note that ${raw('amsfonts')} is automatically loaded by the ${raw('amssymb')} package.`,
      ),
    ),
    'If your file contains Type 3 fonts or non embedded TrueType fonts, we will ask you to fix it.',
    m.heading(2, 'Margins in', ' ', LaTeX),
    inline`Most of the margin problems come from figures positioned by hand using ${raw('\\special')} or
other commands. We suggest using the command ${raw('\\includegraphics')} from the ${raw('graphicx')}
package. Always specify the figure width as a multiple of the line width as in the example below:`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '    \\usepackage[pdftex]{graphicx} ...\n    \\includegraphics[width=0.8\\linewidth]{myfile.pdf}',
      ),
    ),
    inline`See ${ref(label('tables'))} in the graphics bundle documentation (${url('http://mirrors.ctan.org/macros/latex/required/graphics/grfguide.pdf')})`,
    inline`A number of width problems arise when ${LaTeX} cannot properly hyphenate a line. please give
${LaTeX} hyphenation hints using the ${raw('\\-')} command when necessary.`,
    inline(unsafeRaw.code<any>`if false [
use unnumbered first level headings for the acknowledgments. all
acknowledgments go at the end of the paper before the list of references.
moreover, you are required to declare funding (financial activities supporting
the submitted work) and competing interests (related financial activities
outside the submitted work). More information about this disclosure can be
found at:
#url("https://neurips.cc/Conferences/2026/PaperInformation/FundingDisclosure")

Do *not* include this section in the anonymized submission, only in the final
paper. You can use the \`ack\` environment provided in the style file to
autmoatically hide this section in the anonymized submission.
]`),
    inline(heading({ numbering: null }, inline`References`)),
    inline`References follow the acknowledgments in the camera-ready paper. Use unnumbered first-level
heading for the references. Any choice of citation style is acceptable as long as you are consistent.
It is permissible to reduce the font size to ${raw('small')} (9 point) when listing the references.
Note that the Reference section does not count towards the page limit.`,
    show(appendix),
    inline(v(pt(-8))),
    m.heading(1, 'Technical appendices and supplementary material'),
    'Technical appendices with additional results, figures, graphs, and proofs may be submitted with the paper submission before the full submission deadline (see above). You can upload a ZIP file for videos or code, but do not upload a separate PDF file for the appendix. There is no page limit for the technical appendices.',
    inline`Note: Think of the appendix as "optional reading" for reviewers. The paper must be able to stand
alone without the appendix; for example, adding critical experiments that support the main claims
to an appendix is inappropriate.`,
    includeFile('checklist.typ'),
  )
}
