// Converted from test/universe/corpus/pioneering-rlj.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  blocks,
  center,
  cite,
  cm,
  codeBlock,
  data,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  fr,
  grid,
  h,
  heading,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  let_,
  linebreak,
  lorem,
  m,
  minus,
  path,
  pt,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  spread,
  strong,
  sym,
  symbol,
  table,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const LaTeX = external('LaTeX')
  const LaTeX2e = external('LaTeX2e')
  const appendix = external('appendix')
  const acknowledgments = define('acknowledgments').pos('arg1', T.content).returns(T.any).external()
  const contribution = define('contribution')
    .pos('arg1', T.content)
    .named('caveat', T.content, [])
    .returns(T.any)
    .external()
  const impactStatement = define('impact-statement').pos('arg1', T.content).returns(T.any).external()
  const rlj = external('rlj')
  const url = define('url').pos('arg1', T.any).returns(T.any).external()
  const rlj_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('appendix', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('contributions', T.any, null)
    .named('keywords', T.any, null)
    .named('running-title', T.content, [])
    .named('summary', T.any, null)
    .named('supplementary', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(rlj)
  const [afflsDecl, affls] = let_('affls', {
    amii: ['Alberta Machine Intelligence Institute (Amii)'],
    cifar: ['CIFAR AI Chair'],
    skoltech: { department: 'AI Center', institution: 'Skoltech', location: 'Moscow', country: 'Russia' },
    UoA: { institution: 'Department of Computing Science', location: 'University of Alberta, Canada' },
    UoM: {
      department: 'Manning College of Information and Computer Sciences',
      institution: 'University of Massachusetts',
    },
    someComment: {
      comment: inline`${space}Additional comments can be added like this, e.g., indicating equal contribution,${space}`,
    },
  })
  const [authorsDecl, authors] = let_('authors', [
    { name: 'Marlos C. Machado', email: 'machado@ualberta.ca', affl: ['UoA', 'amii', 'cifar', 'some-comment'] },
    { name: 'Philip S. Thomas', email: 'pthomas@cs.umass.edu', affl: ['UoM', 'some-comment'] },
    { name: 'Lorem Ipsum', email: 'lipsum@cs.umass.edu', affl: 'some-comment' },
  ])
  const [contribsDecl, contribs] = let_(
    'contribs',
    data([
      contribution(inline`${space}Provide a succinct but precise list of the contribution(s) of the paper. Use contextual
notes to avoid implications of contributions more significant than intended and to clarify and
situate the contribution relative to prior work (see the examples below). If there is no additional
context, enter "None". Try to keep each contribution to a single sentence, although multiple
sentences are allowed when necessary. If using complete sentences, include punctuation. If using
a single sentence fragment, you may omit the concluding period. A single contribution can be
sufficient, and there is no limit on the number of contributions. Submissions will be judged
mostly on the contributions claimed on their cover pages and the evidence provided to support
them. Major contributions should not be claimed in the main text if they do not appear on the
cover page. Overclaiming can lead to a submission being rejected, so it is important to have
well-scoped contribution statements on the cover page.${space}`),
      contribution(
        { caveat: inline`Built from previous RLC/RLJ, ICLR, and TMLR submission templates` },
        inline`The submission template for submissions to RLJ/RLC 2025`,
      ),
      contribution(
        {
          caveat: inline`${space}Prior work established expressions for the policy gradient without function approximation
${ref(label('Williams1992'))}.${space}`,
        },
        inline`${space}${emph(inline`${symbol('[')}Example of one contribution and corresponding contextual note for the paper "Policy
gradient methods for reinforcement learning with function approximation" ${ref(label('Sutton2000'))}.${symbol(']')}`)}${linebreak()}
This paper presents an expression for the policy gradient when using function approximation
to represent the action-value function.${space}`,
      ),
    ]),
  )
  const [summaryDecl, summary] = let_(
    'summary',
    blocks(
      inline`The summary appears on the cover page. Although it can be identical to the abstract, it does
not have to be. One might choose to omit the stated contributions in the Summary, given that
they will be stated in the box below. The original abstract may also be extended to two paragraphs.
The authors should ensure that the contents of the cover page fit entirely on a single page.
The cover page does ${strong(inline`not`)} count towards the 8--12 page limit.`,
      inline(lorem(130)),
    ),
  )
  const [exampleImageDecl, exampleImage] = let_(
    'example-image',
    rect({ width: minus(cm(4.25), pt(0.9)), height: minus(cm(4.25), pt(0.9)), stroke: pt(0.45) }),
  )
  const [subfiguresDecl, subfigures] = let_(
    'subfigures',
    codeBlock(
      [
        set(figure, { kind: 'subfigure', supplement: inline(), gap: pt(3.5) }),
        show(where(figure, { kind: 'subfigure' }), set(figure.caption, { separator: inline(sym.space.nobreak) })),
        show(figure, set(figure, { numbering: '(a)' })),
      ],
      grid(
        { columns: [fr(1), fr(1)] },
        figure({ caption: inline`First subfigure` }, exampleImage),
        figure({ caption: inline`Second subfigure` }, exampleImage),
      ),
    ),
  )
  const [nowsDecl, nows] = let_('nows', h(pt(0)))
  const [eqDecl, eq] = let_('eq', unsafeRaw.math`nows=nows`)
  return doc(
    m.lines(
      importFile('/logo.typ', [LaTeX, LaTeX2e]),
      importPackage('@preview/pioneering-rlj:0.7.0', [
        appendix,
        acknowledgments,
        contribution,
        impactStatement,
        rlj,
        url,
      ]),
    ),
    afflsDecl,
    authorsDecl,
    contribsDecl,
    summaryDecl,
    show(
      rlj_with({
        title: inline`Formatting Instructions for RLJ/RLC Submissions`,
        authors: [authors, affls],
        abstract: inline`${space}The abstract paragraph should be indented 1/2${sym.space.nobreak}inch on both left and
right-hand margins. Use 10${sym.space.nobreak}point type, with a vertical spacing of 11${sym.space.nobreak}points.
The word "Abstract" must be centered, in bold, and in point size${sym.space.nobreak}12. Two
line spaces precede the abstract. The abstract must be limited to one paragraph.${space}`,
        keywords: ['RLJ', 'RLC', 'formatting guide', 'style file', 'LaTeX template'],
        bibliography: bibliography({ full: true }, path('main.bib')),
        appendix: inline(),
        accepted: false,
        summary: summary,
        contributions: contribs,
        runningTitle: inline`Enter Your Running Title Here`,
        supplementary: includeFile('supplementary.typ'),
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Submission of papers to RLJ/RLC')), label('sec:submission'))),
    inline`RLJ/RLC requires electronic submissions, processed by ${url('https://openreview.net/')}. See
RLC's website for more instructions.`,
    inline`Fur submissions, use no options with the ${raw('rlj')} package to adjust the format for submission
requirements, as follows:`,
    inline(align(center, inline(space, raw({ block: true, lang: 'latex' }, '    \\usepackage{rlj}'), space))),
    inline`If your paper is ultimately accepted, use option ${raw('accepted')} with the ${raw('rlj')} package
to adjust the format to the camera ready requirements, as follows:`,
    inline(align(center, inline(space, raw({ block: true, lang: 'latex' }, '    \\usepackage[accepted]{rlj}'), space))),
    'To de-anonymize and remove mentions to RLJ/RLC (for example for posting to preprint servers), use the preprint option, as in',
    inline(align(center, inline(space, raw({ block: true, lang: 'latex' }, '    \\usepackage[preprint]{rlj}'), space))),
    m.heading(2, 'Style'),
    'Papers to be submitted to RLJ/RLC must be prepared according to the instructions presented here.',
    inline`Authors are required to use the RLJ/RLC ${LaTeX} style files obtainable at the RLJ/RLC websites
(as both a .zip file and a link to an Overleaf project). Changing the style files, font, font
size, margins, line spacing, or appearance of sections and subsections may be grounds for rejection.`,
    m.heading(2, 'Retrieval of style files'),
    inline`The style files for RLJ/RLC are available online on the RLJ/RLC website. The file ${raw('rlj.pdf')}
contains these instructions and illustrates the various formatting requirements your RLC paper
must satisfy. Submissions must be made using ${LaTeX} and the style files ${raw('rlj.sty')}
and ${raw('rlj.bst')} (to be used with ${LaTeX2e}. The file ${raw('rlj.tex')} may be used as
a "shell" for writing your paper. All you have to do is replace the author, title, abstract,
and text of the paper with your own.`,
    inline(
      labelled(heading({ depth: 1 }, inline('Citations, figures, tables, references, equations')), label('sec:others')),
    ),
    'These instructions apply to everyone, regardless of the formatter being used.',
    inline(labelled(heading({ depth: 2 }, inline('Citations within the text')), label('sec:citations'))),
    inline`Citations within the text should be based on the ${raw('natbib')} package and include the authors'
last names and year (with the "et${sym.space.nobreak}al." construct for more than two authors).
When the authors or the publication are included in the sentence, the citation should not be
in parenthesis, using ${raw('\\citet{}')} (as in "See the work of ${cite({ form: 'prose' }, label('sutton1998introduction'))}
for more information."). Otherwise, the citation should be in parenthesis using ${raw('\\citep{}')}
(as in "Reinforcement learning is defined not by characterizing learning methods, but by characterizing
a learning ${emph(inline`problem`)} ${ref(label('sutton1998introduction'))}.").`,
    inline`The corresponding references are to be listed in alphabetical order of authors, in the ${strong(inline`References`)}
section. As to the format of the references themselves, any style is acceptable as long as it
is used consistently.`,
    inline(labelled(heading({ depth: 2 }, inline('Footnotes')), label('sec:footnotes'))),
    inline`Indicate footnotes with a number${footnote(inline`This is an example of a footnote.`)} in the
text. Place the footnotes at the bottom of the page on which they appear. Precede the footnote
with a horizontal rule of 2${sym.space.nobreak}inches. When following punctuation, footnotes
should be placed after the punctuation (e.g., commas and periods).${footnote(inline`This is a second example of a footnote.`)}`,
    inline(labelled(heading({ depth: 2 }, inline('Figures')), label('sec:figures'))),
    'All artwork must be neat, clean, and legible when printed. Lines should be dark enough for purposes of reproduction. The figure number and caption always appear after the figure. Place one line space before the figure caption, and one line space after the figure. The figure caption is lowercase (except for the first word and proper nouns); figures are numbered consecutively.',
    inline`Make sure the figure caption does not get separated from the figure. Leave sufficient space
to avoid splitting the figure and figure caption. Ensure that figures are always referenced
in the text before they appear, or on the same page that they appear. This will be ensured if
the figure occurs after its first reference in the source. For example, see ${ref(label('fig:example'))}.`,
    exampleImageDecl,
    inline(
      v(pt(-8)),
      space,
      labelled([figure({ caption: inline`Sample figure caption.` }, exampleImage), space], label('fig:example')),
      space,
      v(pt(-8)),
    ),
    'You may use color figures. However, it is best for the figure captions and the paper body to make sense if the paper is printed either in black/white or in color.',
    inline`You may use subfigures, as shown in ${ref(label('fig:subfigureExample'))}.`,
    subfiguresDecl,
    inline(v(pt(-2))),
    inline(labelled(heading({ depth: 2 }, inline('Tables')), label('sec:tables'))),
    inline`Tables must be centered, neat, clean and legible. Do not use hand-drawn tables. The table number
and title always appear after the table. See ${ref(label('tab:exampleTable'))}. Place one line
space before the table title, one line space above the table title, and one line space after
the table. Tables are numbered consecutively.`,
    inline(
      labelled(
        [figure({ caption: inline`An example using subfigures.`, kind: image, gap: pt(10.5) }, subfigures), space],
        label('fig:subfigureExample'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Sample table caption` },
            table(
              { columns: 2, align: [center, left], stroke: null, inset: { y: pt(0) } },
              table.header(
                spread(
                  data([inline(strong(inline`PART`)), inline(strong(inline`DESCRIPTION`))]).map((it) =>
                    table.cell({ inset: { bottom: pt(4) } }, it),
                  ),
                ),
              ),
              table.hline({ stroke: pt(0.4) }),
              inline(sym.space.nobreak, space),
              inline(sym.space.nobreak, space),
              inline`Actor${space}`,
              inline`Stores and updates the policy`,
              inline`Critic`,
              inline`Stores and updates a value function`,
            ),
          ),
          space,
        ],
        label('tab:exampleTable'),
      ),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Equations')), label('sec:equations'))),
    inline`Equations can be included inline or using ${raw('equation')}, ${raw('gather')}, or ${raw('align')}
blocks. When using ${raw('align')} blocks, place the alignment character ${raw('&')} after equality
or inequality symbols so that it is visually clear where each expression (which may span more
than one line) begins and ends, as in the following example.`,
    m.lines(
      nowsDecl,
      eqDecl,
      inline(
        labelled(
          [
            unsafeRaw.math.block`Pr(A_2 eq a_2)
  = & sum_(s_0 in cal(S)) Pr(S_0 eq s_0) sum_(a_0 in cal(A)) Pr(A_0 eq a_0|S_0 eq s_0) sum_(s_1 in cal(S)) Pr(S_1 eq s_1|S_0 eq s_0,A_0 eq a_0) \\
    & times sum_(a_1 in cal(A)) Pr(A_1 eq a_1|S_1 eq s_1) sum_(s_2 in cal(S)) Pr(S_2 eq s_2|S_1 eq s_1,A_1 eq a_1) Pr(A_2 eq a_2|S_2 eq s_2) \\
  = & sum_(s_0 in cal(S)) d_0(s_0) sum_(a_0 in cal(A)) pi(s_0,a_0) sum_(s_1 in cal(S)) p(s_0,a_0,s_1) sum_(a_1 in cal(A)) pi(s_1,a_1) sum_(s_2 in cal(S)) p(s_1,a_1,s_2) \\
    & times pi(s_2,a_2),`,
            space,
          ],
          label('eq:secondActionPr'),
        ),
      ),
    ),
    inline`where ${unsafeRaw.math`times`} denotes scalar multiplication split across multiple lines.`,
    'You may use the style of your choice when referencing expressions by number, including the following forms:',
    m.list(
      { tight: false },
      m.item([
        'In',
        space,
        ref(label('eq:secondActionPr')),
        ', there is no summation over',
        space,
        unsafeRaw.math`a_2`,
        space,
        'because it is defined on the left side of the equation.',
        space,
        footnote(inline`This format is sometimes preferred because often referenced expressions are inequalities or
definitions, not equations. Notice the use of ${raw('eqref')} in place of ${raw('ref')} in this
example.`),
      ]),
      m.item([
        'In',
        space,
        ref({ supplement: inline`Equation` }, label('eq:secondActionPr')),
        ', there is no summation over',
        space,
        unsafeRaw.math`a_2`,
        space,
        'because it is defined on the left side of the equation.',
      ]),
      m.item([
        'In',
        space,
        ref({ supplement: inline`Eq.` }, label('eq:secondActionPr')),
        ', there is no summation over',
        space,
        unsafeRaw.math`a_2`,
        space,
        'because it is defined on the left side of the equation.',
      ]),
    ),
    inline`You may number all lines of all equations, some lines of each equation (typically one line per
equation), or only the equations that are referenced. ${footnote(inline`To number some lines of each equation use ${raw('\\nonumber')} to suppress numbers for some
of the lines, as in this document. To number only the referenced equations, uncomment the line
in main.tex: ${raw('\\mathtoolsset{showonlyrefs}')}. Note that there may be conflicts between
showonlyrefs and both autoref and cref.`)}`,
    'The default behavior is to number all lines of all equations and we strongly encourage (but do not require) authors to number all lines of all equations for initial submissions to allow reviewers to easily reference specific lines.',
    inline(labelled(heading({ depth: 1 }, inline('Final instructions')), label('sec:final'))),
    inline`Do not change any aspects of the formatting parameters in the style files. In particular, do
not modify the width or length of the rectangle the text should fit into, and do not change
font sizes (except perhaps in the ${strong(inline`References`)} section; see below). Please
note that pages should be numbered for submissions, but not for camera-ready versions.`,
    inline(labelled(heading({ depth: 1 }, inline('Preparing PostScript or PDF files')), label('sec:prep'))),
    inline`We recommend preparing your manuscript using the provided Overleaf project, which will automatically
construct a PDF file for submission. This file can be downloaded by clicking the "Menu" button
in the top left, and then selecting "PDF" at the top of the menu that appears.`,
    inline`If you are not using Overleaf, please prepare PostScript or PDF files with paper size "US Letter",
and not, for example, "A4". The ${raw('-t')} letter option on dvips will produce US Letter files.`,
    inline`Consider directly generating PDF files using ${raw('pdflatex')} (especially if you are a MiKTeX
user). PDF figures must be substituted for EPS figures, however.`,
    'Otherwise, please generate your PostScript and PDF files with the following commands:',
    inline(
      raw(
        { block: true, lang: 'bash' },
        '    dvips mypaper.dvi -t letter -Ppdf -G0 -o mypaper.ps\n    ps2pdf mypaper.ps mypaper.pdf',
      ),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Margins in LaTeX')), label('sec:margins'))),
    inline`Most of the margin problems come from figures positioned by hand using ${raw('\\special')} or
other commands. We suggest using the command ${raw('\\includegraphics')} from the graphicx package.
Always specify the figure width as a multiple of the line width as in the example below using
.eps graphics`,
    inline`${raw({ block: true, lang: 'latex' }, '    \\usepackage[dvips]{graphicx} ...\n    \\includegraphics[width=0.8\\linewidth]{myfile.eps}')}
or ${raw({ block: true, lang: 'latex' }, '    \\usepackage[pdftex]{graphicx} ...\n    \\includegraphics[width=0.8\\linewidth]{myfile.pdf}')}`,
    inline`for .pdf graphics. See Section${sym.space.nobreak}4.4 in the graphics bundle documentation (${url('http://www.ctan.org/tex-archive/macros/latex/required/graphics/grfguide.ps')}).`,
    inline`A number of width problems arise when LaTeX cannot properly hyphenate a line. Please give LaTeX
hyphenation hints using the ${raw('\\-')} command.`,
    inline(
      impactStatement(inline`${space}In this optional section, RLJ/RLC encourages authors to discuss possible repercussions
of their work, notably any potential negative impact that a user of this research should be
aware of.${space}`),
    ),
    show(appendix),
    inline(labelled(heading({ depth: 1 }, inline('The first appendix')), label('sec:appendix1'))),
    'This is an example of an appendix.',
    inline`${strong(inline`Note:`)} Appendices appear before the references and are viewed as part of the
"main text" and are subject to the 8--12 page limit, are peer reviewed, and can contain content
central to the claims of the paper.`,
    inline(labelled(heading({ depth: 1 }, inline('The second appendix')), label('sec:appendix2'))),
    inline`This is an example of a second appendix. If there is only a single section in the appendix,
you may simply call it "Appendix" as follows:`,
    inline(heading({ numbering: null }, inline`Appendix`)),
    'This format should only be used if there is a single appendix (unlike in this document).',
    inline(
      acknowledgments(inline`${space}Use unnumbered third level headings for the acknowledgments. All acknowledgments, including
those to funding agencies, go at the end of the paper. Only add this information once your submission
is accepted and deanonymized. The acknowledgments do not count towards the 8--12 page limit.${space}`),
    ),
  )
}
