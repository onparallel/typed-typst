// Converted from test/universe/corpus/smooth-tmlr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  center,
  cite,
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
  importFile,
  importPackage,
  inches,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  m,
  pagebreak,
  path,
  pt,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  text,
  top,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const tmlr = external('tmlr')
  const LaTeX = external('LaTeX')
  const LaTeX2e = external('LaTeX2e')
  const tmlr_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('appendix', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('keywords', T.any, null)
    .named('review', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(tmlr)
  const [afflsDecl, affls] = let_('affls', {
    nyu: { department: 'Department of Computer Science', institution: 'University of New York' },
    deepmind: { institution: 'DeepMind' },
    mila: { institution: 'Mila, Université de Montréal' },
    googleResearch: { institution: 'Google Research' },
    cifar: { institution: 'CIFAR Fellow' },
  })
  const [authorsDecl, authors] = let_('authors', [
    { name: 'Kyunghyun Cho', email: 'kyunghyun.cho@nyu.edu', affl: 'nyu' },
    { name: 'Raia Hadsell', email: 'raia@google.com', affl: 'deepmind' },
    { name: 'Hugo Larochelle', email: 'hugolarochelle@google.com', affl: ['mila', 'google-research', 'cifar'] },
  ])
  const url = define('url')
    .pos('uri', T.any)
    .returns(T.any)
    .body((p) => codeBlock([], link(p['uri'], raw(p['uri']))))
  return doc(
    m.lines(
      importPackage('@preview/smooth-tmlr:0.7.0', [tmlr]),
      importFile('/logo.typ', [LaTeX, { item: 'LaTeX', as: LaTeX2e }]),
    ),
    afflsDecl,
    authorsDecl,
    show(
      tmlr_with({
        title: inline`Formatting Instructions for TMLR ${linebreak()} Journal Submissions`,
        authors: [authors, affls],
        keywords: [],
        abstract: inline`${space}The abstract paragraph should be indented 1/2${sym.space.nobreak}inch on both left and
right-hand margins. Use 10${sym.space.nobreak}point type, with a vertical spacing of 11${sym.space.nobreak}points.
The word ${text({ size: pt(12) }, inline(strong(inline`Abstract`)))} must be centered, in bold,
and in point size${sym.space.nobreak}12. Two line spaces precede the abstract. The abstract
must be limited to one paragraph.${space}`,
        bibliography: bibliography(path('main.bib')),
        appendix: includeFile('appendix.typ'),
        accepted: false,
        review: 'https://openreview.net/forum?id=XXXX',
      }),
    ),
    url.decl,
    m.heading(1, 'Submission of papers to TMLR'),
    inline`TMLR requires electronic submissions, processed by ${url('https://openreview.net/')}. See TMLR's
website for more instructions.`,
    inline`If your paper is ultimately accepted, use option ${raw('accepted')} with the ${raw('tmlr')}
package to adjust the format to the camera ready requirements, as follows:`,
    inline(align(center, raw({ block: true, lang: 'tex' }, '\\usepackage[accepted]{tmlr}'))),
    inline`You also need to specify the month and year by defining variables ${raw('month')} and ${raw('year')},
which respectively should be a 2-digit and 4-digit number. To de-anonymize and remove mentions
to TMLR (for example for posting to preprint servers), use the preprint option, as in ${raw('\\usepackage[preprint]{tmlr}')}.`,
    'Please read carefully the instructions below, and follow them faithfully.',
    m.heading(2, 'Style'),
    'Papers to be submitted to TMLR must be prepared according to the instructions presented here.',
    inline`Authors are required to use the TMLR ${LaTeX} style files obtainable at the TMLR website. Please
make sure you use the current files and not previous versions. Tweaking the style files may
be grounds for rejection.`,
    m.heading(2, 'Retrieval of style files'),
    inline`The style files for TMLR and other journal information are available online on the TMLR website.
The file ${raw('tmlr.pdf')} contains these instructions and illustrates the various formatting
requirements your TMLR paper must satisfy. Submissions must be made using ${LaTeX} and the style
files ${raw('tmlr.sty')} and ${raw('tmlr.bst')} (to be used with ${LaTeX2e}). The file ${raw('tmlr.tex')}
may be used as a "shell" for writing your paper. All you have to do is replace the author, title,
abstract, and text of the paper with your own.`,
    inline`The formatting instructions contained in these style files are summarized in sections ${ref({ supplement: null }, label('gen_inst'))},
${ref({ supplement: null }, label('headings'))}, and ${ref({ supplement: null }, label('others'))}
below.`,
    inline(labelled(heading({ depth: 1 }, inline('General formatting instructions')), label('gen_inst'))),
    inline`The text must be confined within a rectangle 6.5${sym.space.nobreak}inches wide and 9${sym.space.nobreak}inches
long. The left margin is 1${sym.space.nobreak}inch. Use 10${sym.space.nobreak}point type with
a vertical spacing of 11${sym.space.nobreak}points. Computer Modern Bright is the preferred
typeface throughout. Paragraphs are separated by 1/2${sym.space.nobreak}line space, with no
indentation.`,
    inline`Paper title is 17${sym.space.nobreak}point, in bold and left-aligned. All pages should start
at 1${sym.space.nobreak}inch from the top of the page.`,
    inline`Authors' names are set in boldface. Each name is placed above its corresponding address and
has its corresponding email contact on the same line, in italic and right aligned. The lead
author's name is to be listed first, and the co-authors' names are set to follow vertically.`,
    inline`Please pay special attention to the instructions in section ${ref({ supplement: null }, label('others'))}
regarding figures, tables, acknowledgments, and references.`,
    inline(labelled(heading({ depth: 1 }, inline('Headings: first level')), label('headings'))),
    inline`First level headings are in bold, flush left and in point size 12. One line space before the
first level heading and 1/2${sym.space.nobreak}line space after the first level heading.`,
    m.heading(2, 'Headings: second level'),
    inline`Second level headings are in bold, flush left and in point size 10. One line space before the
second level heading and 1/2${sym.space.nobreak}line space after the second level heading.`,
    m.heading(3, 'Headings: third level'),
    inline`Third level headings are in bold, flush left and in point size 10. One line space before the
third level heading and 1/2${sym.space.nobreak}line space after the third level heading.`,
    inline(labelled(heading({ depth: 1 }, inline('Citations, figures, tables, references')), label('others'))),
    'These instructions apply to everyone, regardless of the formatter being used.',
    m.heading(2, 'Citations within the text'),
    inline`Citations within the text should be based on the ${raw('natbib')} package and include the authors'
last names and year (with the "et${sym.space.nobreak}al." construct for more than two authors).
When the authors or the publication are included in the sentence, the citation should not be
in parenthesis, using ${raw('\\citet{}')} (as in "See ${cite({ form: 'prose' }, label('Hinton06'))}
for more information."). Otherwise, the citation should be in parenthesis using ${raw('\\citep{}')}
(as in "Deep learning shows promise to make progress towards AI${sym.space.nobreak}${ref(label('Bengio2007'))}.").`,
    inline`The corresponding references are to be listed in alphabetical order of authors, in the ${strong(inline`References`)}
section. As to the format of the references themselves, any style is acceptable as long as it
is used consistently.`,
    m.heading(2, 'Footnotes'),
    inline`Indicate footnotes with a number${footnote(inline`Sample of the first footnote`)} in the text.
Place the footnotes at the bottom of the page on which they appear. Precede the footnote with
a horizontal rule of 2${sym.space.nobreak}inches.${footnote(inline`Sample of the second footnote`)}`,
    m.heading(2, 'Figures'),
    'All artwork must be neat, clean, and legible. Lines should be dark enough for purposes of reproduction; art work should not be hand-drawn. The figure number and caption always appear after the figure. Place one line space before the figure caption, and one line space after the figure. The figure caption is lower case (except for first word and proper nouns); figures are numbered consecutively.',
    'Make sure the figure caption does not get separated from the figure. Leave sufficient space to avoid splitting the figure and figure caption.',
    'You may use color figures. However, it is best for the figure captions and the paper body to make sense if the paper is printed either in black/white or in color.',
    inline(
      figure(
        { caption: inline`Sample figure caption.` },
        rect({ width: add(cm(4.2), pt(0.8)), height: add(cm(4.2), pt(0.8)), stroke: pt(0.4) }),
      ),
    ),
    m.heading(2, 'Tables'),
    inline`All tables must be centered, neat, clean and legible. Do not use hand-drawn tables. The table
number and title always appear before the table. See ${ref(label('sample-table'))}. Place one
line space before the table title, one line space after the table title, and one line space
after the table. The table title must be lower case (except for first word and proper nouns);
tables are numbered consecutively.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Sample table title`, placement: top },
            table(
              { columns: 2, stroke: null, align: (x, y) => unsafeRaw.code<any>`if y == 0 { center } else { left }` },
              table.header(inline(strong(inline`PART`)), inline(strong(inline`DESCRIPTION`))),
              table.hline({ stroke: pt(0.5) }),
              inline`Dendrite`,
              inline`Input terminal`,
              inline`Axon${space}`,
              inline`Output terminal`,
              inline`Soma${space}`,
              inline`Cell body (contains cell nucleus)`,
            ),
          ),
          space,
        ],
        label('sample-table'),
      ),
    ),
    m.heading(1, 'Default Notation'),
    inline`In an attempt to encourage standardized notation, we have included the notation file from the
textbook, ${emph(inline`Deep Learning`)} ${ref(label('goodfellow2016deep'))} available at ${url('https://github.com/goodfeli/dlbook_notation/')}.
Use of this style is not required and can be disabled by commenting out ${raw('math_commands.tex')}.`,
    inline(v({ weak: true }, em(2))),
    inline(
      align(center, inline(strong(inline`Numbers and Arrays`))),
      space,
      table(
        { columns: [add(inches(1), pt(5)), add(inches(3.25), pt(15))], inset: pt(5), stroke: null },
        unsafeRaw.math`a`,
        inline`A scalar (integer or real)`,
        unsafeRaw.math`bold(a)`,
        inline`A vector`,
        unsafeRaw.math`bold(A)`,
        inline`A matrix`,
        unsafeRaw.math`bold(upright(sans(A)))`,
        inline`A tensor`,
        unsafeRaw.math`bold(I)_n`,
        inline`Identity matrix with ${unsafeRaw.math`n`} rows and ${unsafeRaw.math`n`} columns`,
        unsafeRaw.math`bold(I)`,
        inline`Identity matrix with dimensionality implied by context`,
        unsafeRaw.math`bold(e)^((i))`,
        inline`Standard basis vector ${unsafeRaw.math`[0,dots,0,1,0,dots,0]`} with a 1 at position ${unsafeRaw.math`i`}`,
        unsafeRaw.math`op("diag")(bold(a))`,
        inline`A square, diagonal matrix with diagonal entries given by ${unsafeRaw.math`bold(a)`}`,
        unsafeRaw.math`upright(a)`,
        inline`A scalar random variable`,
        unsafeRaw.math`bold(upright(a))`,
        inline`A vector-valued random variable`,
        unsafeRaw.math`bold(upright(A))`,
        inline`A matrix-valued random variable`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(
      align(center, inline(strong(inline`Sets and Graphs`))),
      space,
      table(
        { columns: [add(inches(1.25), pt(5)), add(inches(3.25), pt(5))], inset: pt(5), stroke: null },
        unsafeRaw.math`AA`,
        inline`A set`,
        unsafeRaw.math`RR`,
        inline`The set of real numbers`,
        unsafeRaw.math`\\{0, 1\\}`,
        inline`The set containing 0 and 1`,
        unsafeRaw.math`\\{0, 1, dots, n \\}`,
        inline`The set of all integers between ${unsafeRaw.math`0`} and ${unsafeRaw.math`n`}`,
        unsafeRaw.math`[a, b]`,
        inline`The real interval including ${unsafeRaw.math`a`} and ${unsafeRaw.math`b`}`,
        unsafeRaw.math`(a, b]`,
        inline`The real interval excluding ${unsafeRaw.math`a`} but including ${unsafeRaw.math`b`}`,
        unsafeRaw.math`AA \\\\ BB`,
        inline`Set subtraction, i.e., the set containing the elements of ${unsafeRaw.math`AA`} that are not
in ${unsafeRaw.math`BB`}`,
        unsafeRaw.math`cal(G)`,
        inline`A graph`,
        unsafeRaw.math`italic(P a)_cal(G)(upright(x)_i)`,
        inline`The parents of ${unsafeRaw.math`upright(x)_i`} in ${unsafeRaw.math`cal(G)`}`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(
      align(center, inline(strong(inline`Indexing`))),
      space,
      table(
        { columns: [add(inches(1.25), pt(5)), add(inches(3.25), pt(5))], inset: pt(5), stroke: null },
        unsafeRaw.math`a_i`,
        inline`Element ${unsafeRaw.math`i`} of vector ${unsafeRaw.math`bold(a)`}, with indexing starting at
1`,
        unsafeRaw.math`a_(-i)`,
        inline`All elements of vector ${unsafeRaw.math`bold(a)`} except for element ${unsafeRaw.math`i`}`,
        unsafeRaw.math`A_(i, j)`,
        inline`Element ${unsafeRaw.math`i, j`} of matrix ${unsafeRaw.math`bold(A)`}`,
        unsafeRaw.math`bold(A)_(i, :)`,
        inline`Row ${unsafeRaw.math`i`} of matrix ${unsafeRaw.math`bold(A)`}`,
        unsafeRaw.math`bold(A)_(:, i)`,
        inline`Column ${unsafeRaw.math`i`} of matrix ${unsafeRaw.math`bold(A)`}`,
        unsafeRaw.math`sans(A)_(i, j, k)`,
        inline`Element ${unsafeRaw.math`(i, j, k)`} of a 3-D tensor ${unsafeRaw.math`bold(upright(sans(A)))`}`,
        unsafeRaw.math`bold(upright(sans(A)))_(:, :, i)`,
        inline`2-D slice of a 3-D tensor`,
        unsafeRaw.math`upright(a)_i`,
        inline`Element ${unsafeRaw.math`i`} of the random vector ${unsafeRaw.math`bold(upright(a))`}`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(
      align(center, inline(strong(inline`Calculus`))),
      space,
      table(
        { columns: [add(inches(1.25), pt(5)), add(inches(3.25), pt(5))], inset: pt(5), stroke: null },
        unsafeRaw.math`display((d y) / (d x))`,
        inline`Derivative of ${unsafeRaw.math`y`} with respect to ${unsafeRaw.math`x`}`,
        unsafeRaw.math`display((partial y) / (partial x))`,
        inline`Partial derivative of ${unsafeRaw.math`y`} with respect to ${unsafeRaw.math`x`}`,
        unsafeRaw.math`nabla_bold(x) y`,
        inline`Gradient of ${unsafeRaw.math`y`} with respect to ${unsafeRaw.math`bold(x)`}`,
        unsafeRaw.math`nabla_bold(X) y`,
        inline`Matrix derivatives of ${unsafeRaw.math`y`} with respect to ${unsafeRaw.math`bold(X)`}`,
        unsafeRaw.math`nabla_bold(upright(sans(X))) y`,
        inline`Tensor containing derivatives of ${unsafeRaw.math`y`} with respect to ${unsafeRaw.math`bold(upright(sans(X)))`}`,
        unsafeRaw.math`display((partial f) / (partial bold(x)))`,
        inline`Jacobian matrix ${unsafeRaw.math`bold(J) in RR^(m times n)`} of ${unsafeRaw.math`f: RR^n arrow.r RR^m`}`,
        unsafeRaw.math`nabla_bold(x)^2 f(bold(x)) "or" bold(H)(f)(bold(x))`,
        inline`The Hessian matrix of ${unsafeRaw.math`f`} at input point ${unsafeRaw.math`bold(x)`}`,
        unsafeRaw.math`display(integral f(bold(x)) d bold(x))`,
        inline`Definite integral over the entire domain of ${unsafeRaw.math`bold(x)`}`,
        unsafeRaw.math`display(integral_SS f(bold(x)) d bold(x))`,
        inline`Definite integral with respect to ${unsafeRaw.math`bold(x)`} over the set ${unsafeRaw.math`SS`}`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(
      align(center, inline(strong(inline`Probability and Information Theory`))),
      space,
      table(
        { columns: [add(inches(1.25), pt(5)), add(inches(3.25), pt(5))], inset: pt(5), stroke: null },
        unsafeRaw.math`P(upright(a))`,
        inline`A probability distribution over a discrete variable`,
        unsafeRaw.math`p(upright(a))`,
        inline`A probability distribution over a continuous variable, or over a variable whose type has not
been specified`,
        unsafeRaw.math`upright(a) tilde P`,
        inline`Random variable ${unsafeRaw.math`upright(a)`} has distribution ${unsafeRaw.math`P`}`,
        unsafeRaw.math`EE_(upright(x) tilde P) [ f(x) ] "or" EE f(x)`,
        inline`Expectation of ${unsafeRaw.math`f(x)`} with respect to ${unsafeRaw.math`P(upright(x))`}`,
        unsafeRaw.math`op("Var")(f(x))`,
        inline`Variance of ${unsafeRaw.math`f(x)`} under ${unsafeRaw.math`P(upright(x))`}`,
        unsafeRaw.math`op("Cov")(f(x), g(x))`,
        inline`Covariance of ${unsafeRaw.math`f(x)`} and ${unsafeRaw.math`g(x)`} under ${unsafeRaw.math`P(upright(x))`}`,
        unsafeRaw.math`H(upright(x))`,
        inline`Shannon entropy of the random variable ${unsafeRaw.math`upright(x)`}`,
        unsafeRaw.math`D_"KL" (P || Q)`,
        inline`Kullback-Leibler divergence of ${unsafeRaw.math`P`} and ${unsafeRaw.math`Q`}`,
        unsafeRaw.math`cal(N)(bold(x); bold(mu), bold(Sigma))`,
        inline`Gaussian distribution over ${unsafeRaw.math`bold(x)`} with mean ${unsafeRaw.math`bold(mu)`}
and covariance ${unsafeRaw.math`bold(Sigma)`}`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(
      align(center, inline(strong(inline`Functions`))),
      space,
      table(
        { columns: [add(inches(1.25), pt(5)), add(inches(3.25), pt(5))], inset: pt(5), stroke: null },
        unsafeRaw.math`f: AA arrow.r BB`,
        inline`The function ${unsafeRaw.math`f`} with domain ${unsafeRaw.math`AA`} and range ${unsafeRaw.math`BB`}`,
        unsafeRaw.math`f circle.stroked.tiny g`,
        inline`Composition of the functions ${unsafeRaw.math`f`} and ${unsafeRaw.math`g`}`,
        unsafeRaw.math`f(bold(x); bold(theta))`,
        inline`A function of ${unsafeRaw.math`bold(x)`} parametrized by ${unsafeRaw.math`bold(theta)`}. (Sometimes
we write ${unsafeRaw.math`f(bold(x))`} and omit the argument ${unsafeRaw.math`bold(theta)`}
to lighten notation)`,
        unsafeRaw.math`log x`,
        inline`Natural logarithm of ${unsafeRaw.math`x`}`,
        unsafeRaw.math`sigma(x)`,
        inline`Logistic sigmoid, ${unsafeRaw.math`display(1 / (1 + exp(-x)))`}`,
        unsafeRaw.math`zeta(x)`,
        inline`Softplus, ${unsafeRaw.math`log(1 + exp(x))`}`,
        unsafeRaw.math`norm(bold(x))_p`,
        inline`${unsafeRaw.math`L^p`} norm of ${unsafeRaw.math`bold(x)`}`,
        unsafeRaw.math`norm(bold(x))`,
        inline`${unsafeRaw.math`L^2`} norm of ${unsafeRaw.math`bold(x)`}`,
        unsafeRaw.math`x^+`,
        inline`Positive part of ${unsafeRaw.math`x`}, i.e., ${unsafeRaw.math`max(0,x)`}`,
        unsafeRaw.math`bold(1)_"condition"`,
        inline`is 1 if the condition is true, 0 otherwise`,
      ),
    ),
    inline(v({ weak: true }, cm(0.25))),
    inline(pagebreak()),
    m.heading(1, 'Final instructions'),
    inline`Do not change any aspects of the formatting parameters in the style files. In particular, do
not modify the width or length of the rectangle the text should fit into, and do not change
font sizes (except perhaps in the ${strong(inline`References`)} section; see below). Please
note that pages should be numbered.`,
    m.heading(1, 'Preparing PostScript or PDF files'),
    inline`Please prepare PostScript or PDF files with paper size "US Letter", and not, for example, "A4".
The -t letter option on dvips will produce US Letter files.`,
    inline`Consider directly generating PDF files using ${raw('pdflatex')} (especially if you are a MiKTeX
user). PDF figures must be substituted for EPS figures, however.`,
    'Otherwise, please generate your PostScript and PDF files with the following commands:',
    inline(
      raw(
        { block: true, lang: 'shell' },
        'dvips mypaper.dvi -t letter -Ppdf -G0 -o mypaper.ps\nps2pdf mypaper.ps mypaper.pdf',
      ),
    ),
    m.heading(2, 'Margins in LaTeX'),
    inline`Most of the margin problems come from figures positioned by hand using ${raw('\\special')} or
other commands. We suggest using the command ${raw('\\includegraphics')} from the graphicx package.
Always specify the figure width as a multiple of the line width as in the example below using
.eps graphics`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '   \\usepackage[dvips]{graphicx} ...\n   \\includegraphics[width=0.8\\linewidth]{myfile.eps}',
      ),
    ),
    'or',
    inline(
      raw(
        { block: true, lang: 'tex' },
        '   \\usepackage[pdftex]{graphicx} ...\n   \\includegraphics[width=0.8\\linewidth]{myfile.pdf}',
      ),
    ),
    inline`for .pdf graphics. See section${sym.space.nobreak}4.4 in the graphics bundle documentation (${url('http://www.ctan.org/tex-archive/macros/latex/required/graphics/grfguide.ps')}`,
    inline`A number of width problems arise when ${LaTeX} cannot properly hyphenate a line. Please give
LaTeX hyphenation hints using the ${raw('\\-')} command.`,
    m.heading(1, 'Broader Impact Statement'),
    'In this optional section, TMLR encourages authors to discuss possible repercussions of their work, notably any potential negative impact that a user of this research should be aware of. Authors should consult the TMLR Ethics Guidelines available on the TMLR website for guidance on how to approach this subject.',
    m.heading(1, 'Author Contributions'),
    inline`If you'd like to, you may include a section for author contributions as is done in many journals.
This is optional and at the discretion of the authors. Only add this information once your submission
is accepted and deanonymized.`,
    m.heading(1, 'Acknowledgments'),
    'Use unnumbered third level headings for the acknowledgments. All acknowledgments, including those to funding agencies, go at the end of the paper. Only add this information once your submission is accepted and deanonymized.',
  )
}
