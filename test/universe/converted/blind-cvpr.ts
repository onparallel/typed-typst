// Converted from test/universe/corpus/blind-cvpr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  block,
  blocks,
  box,
  center,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  grid,
  h,
  heading,
  image,
  importFile,
  importPackage,
  inches,
  inline,
  label,
  labelled,
  left,
  let_,
  linebreak,
  link,
  m,
  minus,
  path,
  place,
  pt,
  quote,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  symbol,
  table,
  text,
  times,
  top,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const cvpr2025 = external('cvpr2025')
  const confName = external('conf-name')
  const confYear = external('conf-year')
  const eg = external('eg')
  const etal = external('etal')
  const indent = external('indent')
  const LaTeX = external('LaTeX')
  const TeX = external('TeX')
  const cvpr2025_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('id', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(cvpr2025)
  const [afflsDecl, affls] = let_('affls', {
    one: { institution: 'Institution1', location: 'Institution1 address' },
    two: { institution: 'Institution2', location: 'First line of institution1 address' },
    airi: ['AIRI', 'Moscow', 'Russia'],
    skoltech: { department: 'AI Center', institution: 'Skoltech', location: 'Moscow', country: 'Russia' },
  })
  const [authorsDecl, authors] = let_('authors', [
    { name: 'First Author', affl: ['one'], email: 'firstauthor@i1.org' },
    { name: 'Second Author', affl: ['two'], email: 'secondauthor@i2.org' },
  ])
  const [fig2aDecl, fig2a] = let_(
    'fig2a',
    figure(
      { caption: inline`An example of a subfigure.`, supplement: inline(), kind: 'subfigure' },
      rect({ width: inches(4), height: inches(2), stroke: pt(0.4) }),
    ),
  )
  const [fig2bDecl, fig2b] = let_(
    'fig2b',
    figure(
      { caption: inline`Another example of a subfigure.`, supplement: inline(), kind: 'subfigure' },
      rect({ width: inches(2), height: inches(2), stroke: pt(0.4) }),
    ),
  )
  const [figDecl, fig] = let_(
    'fig',
    block(
      { width: inches(6.875), height: inches(2.59) },
      inline(
        space,
        labelled(
          [
            figure(
              { caption: inline`Example of a short caption, which should be centered.`, placement: top },
              grid(
                { columns: 2, columnGutter: minus(inches(0.875), times(2, pt(0.4))) },
                inline(labelled([fig2a, space], label('fig2a'))),
                inline(labelled([fig2b, space], label('fig2b'))),
              ),
            ),
            space,
          ],
          label('fig:short-a'),
        ),
        space,
      ),
    ),
  )
  return doc(
    m.lines(
      importPackage('@preview/blind-cvpr:0.7.0', [cvpr2025, confName, confYear, eg, etal, indent]),
      importFile('/logo.typ', [LaTeX, TeX]),
    ),
    afflsDecl,
    authorsDecl,
    show(
      cvpr2025_with({
        title: inline`${LaTeX} Author Guidelines for ${confName}${sym.space.nobreak}Proceedings`,
        authors: [authors, affls],
        keywords: [],
        abstract: inline`${space}The ABSTRACT is to be in fully justified italicized text, at the top of the left-hand
column, below the author and affiliation information. Use the word "Abstract" as the title,
in 12-point Times, boldface type, centered relative to the column, initially capitalized. The
abstract is to be in 10-point, single-spaced type. Leave two blank lines after the Abstract,
then begin the main text. Look at previous CVPR abstracts to get a feel for style and length.${space}`,
        bibliography: bibliography(path('main.bib')),
        accepted: false,
        id: null,
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('sec:intro'))),
    'Please follow the steps outlined below when submitting your manuscript to the IEEE Computer Society Press. This style guide now has several important modifications (for example, you are no longer warned against the use of sticky tape to attach your artwork to the paper), so all authors should read this new version.',
    m.heading(2, 'Language'),
    'All manuscripts must be in English.',
    m.heading(2, 'Dual submission'),
    inline`Please refer to the author guidelines on the ${confName} ${confYear} web page for a discussion
of the policy on dual submissions.`,
    m.heading(2, 'Paper length'),
    inline`Papers, excluding the references section, must be no longer than eight pages in length. The
references section will not be included in the page count, and there is no limit on the length
of the references section. For example, a paper of eight pages with two pages of references
would have a total length of 10 pages. ${strong(inline`There will be no extra page charges for ${confName} ${confYear}.`)}`,
    inline`Overlength papers will simply not be reviewed. This includes papers where the margins and formatting
are deemed to have been significantly altered from those laid down by this style guide. Note
that this ${LaTeX} guide already sets figure captions and references in a smaller font. The
reason such papers will not be reviewed is that there is no provision for supervised revisions
of manuscripts. The reviewing process cannot determine the suitability of the paper for presentation
in eight pages if it is reviewed in eleven.`,
    m.heading(2, 'The ruler'),
    inline`The ${LaTeX} style defines a printed ruler which should be present in the version submitted
for review. The ruler is provided in order that reviewers may comment on particular lines in
the paper without circumlocution. If you are preparing a document using a non-${LaTeX} document
preparation system, please arrange for an equivalent ruler to appear on the final output pages.
The presence or absence of the ruler should not change the appearance of any other content on
the page. The camera-ready copy should not contain a ruler. (${LaTeX} users may use options
of ${raw('cvpr.sty')} to switch between different versions.)`,
    inline`Reviewers: note that the ruler measurements do not align well with lines in the paper --- this
turns out to be very difficult to do well when the paper contains many figures and equations,
and, when done, looks ugly. Just use fractional references (${eg}., this line is ${unsafeRaw.math`087.5`}),
although in most cases one would expect that the approximate location will be adequate.`,
    m.heading(2, 'Paper ID'),
    inline`Make sure that the Paper ID from the submission system is visible in the version submitted for
review (replacing the "*****" you see in this document). If you are using the ${LaTeX} template,
${strong(inline`make sure to update paper ID in the appropriate place in the tex file`)}.`,
    m.heading(2, 'Mathematics'),
    'Please number all of your sections and displayed equations as in these examples:',
    inline(labelled([unsafeRaw.math.block`E = m dot.c c^2`, space], label('eq:important'))),
    'and',
    inline(labelled([unsafeRaw.math.block`v = a dot.c t.`, space], label('eq:also-important'))),
    inline`It is important for readers to be able to refer to any particular equation. Just because you
did not refer to it in the text does not mean some future reader might not need to refer to
it. It is cumbersome to have to use circumlocutions like "the equation second from the top of
page 3 column 1". (Note that the ruler will not be present in the final copy, so is not an alternative
to equation numbers). All authors will benefit from reading Mermin's description of how to write
mathematics: ${link('http://www.pamitc.org/documents/mermin.pdf')}.`,
    m.heading(2, 'Blind review'),
    inline`Many authors misunderstand the concept of anonymizing for blind review. Blind review does not
mean that one must remove citations to one's own work --- in fact it is often impossible to
review a paper unless the previous citations are known and available.`,
    inline`Blind review means that you do not use the words "my" or "our" when citing previous work. That
is all. (But see below for tech reports.)`,
    inline`Saying "this builds on the work of Lucy Smith [1]" does not say that you are Lucy Smith; it
says that you are building on her work. If you are Smith and Jones, do not say "as we show in
[7]", say "as Smith and Jones show in [7]" and at the end of the paper, include reference 7
as you would any other cited work.`,
    'An example of a bad paper just asking to be rejected:',
    inline(
      quote(
        { block: true },
        blocks(
          inline`${h(em(1.5))} An analysis of the frobnicatable foo filter.`,
          'In this paper we present a performance analysis of our previous paper [1], and show it to be inferior to all previously known methods. Why the previous paper was accepted without this analysis is beyond me.',
          '[1] Removed for blind review',
        ),
      ),
    ),
    'An example of an acceptable paper:',
    inline(
      quote(
        { block: true },
        blocks(
          inline`${h(em(1.5))} An analysis of the frobnicatable foo filter.`,
          inline`In this paper we present a performance analysis of the paper of Smith ${etal} [1], and show
it to be inferior to all previously known methods. Why the previous paper was accepted without
this analysis is beyond me.`,
          inline`[1] Smith, L and Jones, C. "The frobnicatable foo filter, a fundamental contribution to human
knowledge". Nature 381(12), 1-213.`,
        ),
      ),
    ),
    inline`${indent} If you are making a submission to another conference at the same time, which covers
similar or overlapping material, you may need to refer to that submission in order to explain
the differences, just as you would if you had previously published related work. In such cases,
include the anonymized parallel submission${sym.space.nobreak}${ref(label('Authors14'))} as
supplemental material and cite it as`,
    inline(
      quote(
        { block: true },
        inline`${space}[1] Authors. "The frobnicatable foo filter", F${symbol('&')}G 2014 Submission ID 324,
Supplied as supplemental material ${raw('fg324.pdf')}.${space}`,
      ),
    ),
    inline`${indent} Finally, you may feel you need to tell the reader that more details can be found elsewhere,
and refer them to a technical report. For conference submissions, the paper must stand on its
own, and not ${emph(inline`require`)} the reviewer to go to a tech report for further details.
Thus, you may say in the body of the paper "further details may be found in${sym.space.nobreak}${ref(label('Authors14b'))}".
Then submit the tech report as supplemental material. Again, you may not assume the reviewers
will read this material.`,
    inline`Sometimes your paper is about a problem which you tested using a tool that is widely known to
be restricted to a single institution. For example, let's say it's 1969, you have solved a key
problem on the Apollo lander, and you believe that the CVPR70 audience would like to hear about
your solution. The work is a development of your celebrated 1968 paper entitled "Zero-g frobnication:
How being the only people in the world with access to the Apollo lander source code makes us
a wow at parties", by Zeus ${etal}.`,
    inline`You can handle this paper like any other. Do not write "We show how to improve our previous
work [Anonymous, 1968]. This time we tested the algorithm on a lunar lander [name of lander
removed for blind review]". That would be silly, and would immediately identify the authors.
Instead write the following:`,
    inline(
      quote(
        { block: true },
        inline`${space}We describe a system for zero-g frobnication. This system is new because it handles
the following cases: A, B. Previous systems [Zeus et al. 1968] did not handle case B properly.
Ours handles it by including a foo term in the bar integral. ${linebreak()} ${indent} ... ${linebreak()}
${indent} The proposed system was integrated with the Apollo lunar lander, and went all the
way to the moon, don't you know. It displayed the following behaviours, which show how well
we solved cases A and B: ...${space}`,
      ),
    ),
    inline`As you can see, the above text follows standard scientific convention, reads better than the
first version, and does not explicitly name you as the authors. A reviewer might think it likely
that the new paper was written by Zeus ${etal}, but cannot make any decision based on that guess.
He or she would have to be sure that no other authors could have been contracted to solve problem
B.`,
    inline(
      v({ weak: true }, pt(16)),
      space,
      block(
        blocks(
          'FAQ',
          inline`${linebreak()} ${strong(inline`Q:`)} Are acknowledgements OK? ${linebreak()} ${strong(inline`A:`)}
No. Leave them for the final copy.`,
          inline`${linebreak()} ${strong(inline`Q:`)} How do I cite my results reported in open challenges? ${linebreak()}
${strong(inline`A:`)} To conform with the double-blind review policy, you can report results
of other challenge participants together with your results in your paper. For your results,
however, you should not identify yourself and should not mention your participation in the challenge.
Instead present your results referring to the method proposed in your paper and draw conclusions
based on the experimental comparison to other results.`,
        ),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Example of caption. It is set in Roman so that mathematics (always set in Roman: ${unsafeRaw.math`B sin A = A sin B`})
may be included without an ugly clash.${space}`,
              placement: top,
              kind: image,
            },
            rect({
              width: minus(times(0.9, inches(3.25)), pt(0.8)),
              height: minus(inches(2.1), pt(0.8)),
              stroke: pt(0.4),
            }),
          ),
          space,
        ],
        label('fig:onecol'),
      ),
      space,
      linebreak(),
    ),
    m.heading(2, 'Miscellaneous'),
    'Compare the following:',
    inline(
      align(
        center,
        grid(
          { columns: 2, align: left, gutter: pt(5) },
          raw('conf_a'),
          unsafeRaw.math`c o n f_a`,
          raw('\\mathit{conf}_a'),
          unsafeRaw.math`italic("conf")_a`,
        ),
      ),
    ),
    inline`See The ${TeX} book, p165.`,
    inline`The space after ${eg}, meaning "for example", should not be a sentence-ending space. So ${eg}
is correct, ${emph(inline`e.g.`)} is not. The provided ${raw('\\eg')} macro takes care of this.`,
    inline`When citing a multi-author paper, you may save space by using "et alia", shortened to "${etal}"
(not "${emph(inline`et.${sym.space.nobreak}al.`)}" as "${emph(inline`et`)}" is a complete word).
If you use the ${raw('\\etal')} macro provided, then you need not worry about double periods
when used at the end of a sentence as in Alpher ${etal}. However, use it only when there are
three or more authors. Thus, the following is correct: "Frobnication has been trendy lately.
It was introduced by Alpher${sym.space.nobreak}${ref(label('Alpher02'))}, and subsequently developed
by Alpher and Fotheringham-Smythe${sym.space.nobreak}${ref(label('Alpher03'))}, and Alpher ${etal}${sym.space.nobreak}${ref(label('Alpher04'))}."`,
    inline`This is incorrect: "... subsequently developed by Alpher ${etal}${sym.space.nobreak}${ref(label('Alpher03'))}
..." because reference${sym.space.nobreak}${ref(label('Alpher03'))} has just two authors.`,
    m.lines(
      show(where(figure, { kind: 'subfigure' }), (it, ctx) => codeBlock([it.body, v(pt(-9)), it.caption])),
      unsafeRaw.markup`#show figure.caption.where(kind: "subfigure"): it => {
  let ix = context counter(figure.where(kind: "subfigure")).display("(a)")
  [#ix~#it.body]
}`,
    ),
    fig2aDecl,
    fig2bDecl,
    figDecl,
    inline(labelled(heading({ depth: 1 }, inline('Formatting your paper')), label('sec:formatting'))),
    inline`All text must be in a two-column format. The total allowable size of the text area is ${unsafeRaw.math`6 7/8`}
inches (17.46 cm) wide by ${unsafeRaw.math`8 7/8`} inches (22.54 cm) high. Columns are to be
${unsafeRaw.math`3 1/4`} inches (8.25 cm) wide, with a ${unsafeRaw.math`5/(16)`} inch (0.8 cm)
space between them. The main title (on the first page) should begin 1 inch (2.54 cm) from the
top edge of the page. The second and following pages should begin 1 inch (2.54 cm) from the
top edge. On all pages, the bottom margin should be ${unsafeRaw.math`1 1/8`} inches (2.86 cm)
from the bottom edge of the page for ${unsafeRaw.math`8.5
times 11`}-inch paper; for A4 paper, approximately ${unsafeRaw.math`1 5/8`} inches (4.13 cm)
from the bottom edge of the page.`,
    m.heading(2, 'Margins and page numbering'),
    inline`All printed material, including text, illustrations, and charts, must be kept within a print
area ${unsafeRaw.math`6 7/8`} inches (17.46 cm) wide by ${unsafeRaw.math`8 7/8`} inches (22.54
cm) high. Page numbers should be in the footer, centered and ${unsafeRaw.math`3/4`} inches from
the bottom of the page. The review version should have page numbers, yet the final version submitted
as camera ready should not show any page numbers. The ${LaTeX} template takes care of this when
used properly.`,
    m.heading(2, 'Type style and fonts'),
    'Wherever Times is specified, Times Roman may also be used. If neither is available on your word processor, please use the font closest in appearance to Times to which you have access.',
    inline`MAIN TITLE. Center the title ${unsafeRaw.math`1 3/8`} inches (3.49 cm) from the top edge of
the first page. The title should be in Times 14-point, boldface type. Capitalize the first letter
of nouns, pronouns, verbs, adjectives, and adverbs; do not capitalize articles, coordinate conjunctions,
or prepositions (unless the title begins with such a word). Leave two blank lines after the
title.`,
    'AUTHOR NAME(s) and AFFILIATION(s) are to be centered beneath the title and printed in Times 12-point, non-boldface type. This information is to be followed by two blank lines.',
    'The ABSTRACT and MAIN TEXT are to be in a two-column format.',
    inline`MAIN TEXT. Type main text in 10-point Times, single-spaced. Do NOT use double-spacing. All paragraphs
should be indented 1 pica (approx.${sym.space.nobreak}${unsafeRaw.math`1/6`} inch or 0.422 cm).
Make sure your text is fully justified --- that is, flush left and flush right. Please do not
place any additional blank lines between paragraphs.`,
    inline`Figure and table captions should be 9-point Roman type as in ${ref({ supplement: inline`Figs.` }, label('fig:onecol'))}
and ${ref({ supplement: inline() }, label('fig:short-a'))}. Short captions should be centred.${linebreak()}
Callouts should be 9-point Helvetica, non-boldface type. Initially capitalize only the first
word of section titles and first-, second-, and third-order headings.`,
    inline`FIRST-ORDER HEADINGS. (For example, ${box(text({ size: pt(12) }, inline(strong(inline`1. Introduction`))))})
should be Times 12-point boldface, initially capitalized, flush left, with one blank line before,
and one blank line after.`,
    inline`SECOND-ORDER HEADINGS. (For example, ${box(text({ size: pt(11) }, inline(strong(inline`1.1. Database elements`))))})
should be Times 11-point boldface, initially capitalized, flush left, with one blank line before,
and one after. If you require a third-order heading (we discourage it), use 10-point Times,
boldface, initially capitalized, flush left, preceded by one blank line, followed by a period
and your text on the same line.`,
    inline(place({ float: true }, top, fig)),
    m.heading(2, 'Footnotes'),
    inline`Please use footnotes${footnote(inline`This is what a footnote looks like. It often distracts the reader from the main flow of the
argument.`)} sparingly. Indeed, try to avoid footnotes altogether and include necessary peripheral
observations in the text (within parentheses, if you prefer, as in this sentence). If you wish
to use a footnote, place it at the bottom of the column on the page on which it is referenced.
Use Times 8-point type, single-spaced.`,
    m.heading(2, 'Cross-references'),
    'For the benefit of author(s) and readers, please use the',
    inline(raw({ block: true, lang: 'tex' }, '  \\cref{...}')),
    'command for cross-referencing to figures, tables, equations, or sections. This will automatically insert the appropriate label alongside the cross-reference as in this example:',
    inline(
      quote(
        { block: true },
        inline`${space}${indent} To see how our method outperforms previous work, please see ${ref({ supplement: inline`Fig.` }, label('fig:onecol'))}
and ${ref({ supplement: inline`Tab.` }, label('tab:example'))}. It is also possible to refer
to multiple targets as once, ${eg}${sym.space.nobreak}to ${ref({ supplement: inline`Figs.` }, label('fig:onecol'))}
and ${ref({ supplement: inline() }, label('fig:short-a'))}. You may also return to ${ref({ supplement: inline`Sec.` }, label('sec:formatting'))}
or look at ${ref(label('eq:also-important'))}.${space}`,
      ),
    ),
    'If you do not wish to abbreviate the label, for example at the beginning of the sentence, you can use the',
    inline(raw({ block: true, lang: 'tex' }, '  \\Cref{...}')),
    inline`${indent} command. Here is an example:`,
    inline(
      quote(
        { block: true },
        inline`${space}${indent} ${ref({ supplement: inline`Figure` }, label('fig:onecol'))} is also quite
important.${space}`,
      ),
    ),
    inline(place({ float: true }, top, block({ width: inches(3.25), height: unsafeRaw.code<any>`fig.height` }))),
    m.heading(2, 'References'),
    inline`List and number all bibliographical references in 9-point Times, single-spaced, at the end of
your paper. When referenced in the text, enclose the citation number in square brackets, for
example${sym.space.nobreak}${ref(label('Authors14'))}. Where appropriate, include page numbers
and the name(s) of editors of referenced books. When you cite multiple papers at once, please
make sure that you cite them in numerical order like this ${ref(label('Authors14'))} ${ref(label('Authors14b'))}
${ref(label('Alpher02'))} ${ref(label('Alpher03'))} ${ref(label('Alpher05'))}. If you use the
template as advised, this will be taken care of automatically.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Results. Ours is better.`, placement: top },
            table(
              {
                columns: 2,
                align: [left, center],
                rowGutter: pt(0),
                stroke: null,
                inset: (x, y) => unsafeRaw.code<any>`(
      top: if y == 0 or y == 1 { 5pt } else { 2.6pt },
      bottom: if y == 0 or y == 3 { 5.4pt } else { 2.6pt },
      left: if x == 0 { 0pt } else { 5pt },
      right: if x == 1 { 5pt } else { 0pt },
    )`,
              },
              table.hline({ stroke: pt(0.9) }),
              table.header(inline`Method`, inline`Frobnability`),
              table.hline({ stroke: pt(0.4) }),
              inline`Theirs`,
              inline`Frumpy`,
              inline`Yours`,
              inline`Frobbly`,
              inline`Ours`,
              inline`Makes one's heart Frob`,
              table.hline({ stroke: pt(0.9) }),
            ),
          ),
          space,
        ],
        label('tab:example'),
      ),
    ),
    m.heading(2, 'Illustrations, graphs, and photographs'),
    inline`All graphics should be centered. In ${LaTeX}, avoid using the ${raw('center')} environment for
this purpose, as this adds potentially unwanted whitespace. Instead use`,
    inline(raw({ block: true, lang: 'tex' }, '  \\centering')),
    'at the beginning of your figure. Please ensure that any point you wish to make is resolvable in a printed copy of the paper. Resize fonts in figures to match the font in the body text, and choose line widths that render effectively in print. Readers (and reviewers), even of an electronic copy, may choose to print your paper in order to read it. You cannot insist that they do otherwise, and therefore must not assume that they can zoom in to see tiny details on a graphic.',
    inline`When placing figures in ${LaTeX}, it's almost always best to use ${raw('\\includegraphics')},
and to specify the figure width as a multiple of the line width as in the example below`,
    inline(
      raw(
        { block: true, lang: 'tex' },
        '  \\usepackage{graphicx} ...\n  \\includegraphics[width=0.8\\linewidth]\n                  {myfile.pdf}',
      ),
    ),
    m.heading(2, 'Color'),
    inline`Please refer to the author guidelines on the ${confName} ${confYear} web page for a discussion
of the use of color in your document.`,
    inline`If you use color in your plots, please keep in mind that a significant subset of reviewers and
readers may have a color vision deficiency; red-green blindness is the most frequent kind. Hence
avoid relying only on color as the discriminative feature in plots (such as red ${symbol('v')}s
green lines), but add a second discriminative feature to ease disambiguation.`,
    m.heading(1, 'Final copy'),
    'You must include your signed IEEE copyright release form when you submit your finished paper. We MUST have this form before your paper can be published in the proceedings.',
    inline`Please direct any questions to the production editor in charge of these proceedings at the IEEE
Computer Society Press: ${link('https://www.computer.org/about/contact')}.`,
  )
}
