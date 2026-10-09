// Converted from test/universe/corpus/modern-innopolis-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  center,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  fr,
  h,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  pagebreak,
  par,
  path,
  quote,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const titlePage = define('title-page')
    .named('author-en', T.any, null)
    .named('author-ru', T.any, null)
    .named('consultants', T.any, null)
    .named('program-code', T.any, null)
    .named('program-en', T.any, null)
    .named('program-ru', T.any, null)
    .named('specialty-en', T.any, null)
    .named('specialty-ru', T.any, null)
    .named('supervisor-en', T.any, null)
    .named('supervisor-ru', T.any, null)
    .named('topic-en', T.any, null)
    .named('topic-ru', T.any, null)
    .named('work-en', T.any, null)
    .named('work-ru', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external()
  const thesis = external('thesis')
  const flexTitle = define('flex-title').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const lemma = define('lemma').pos('arg1', T.content).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).returns(T.any).external()
  const proposition = define('proposition').pos('arg1', T.content).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const thesis_with = define('with').named('abstract', T.any, null).returns(T.any).external(thesis)
  return doc(
    importPackage('@preview/modern-innopolis-thesis:0.1.2', [
      titlePage,
      thesis,
      flexTitle,
      theorem,
      proof,
      lemma,
      corollary,
      proposition,
      remark,
      definition,
      example,
      appendix,
    ]),
    inline(
      titlePage({
        programCode: '09.04.01',
        programRu: 'Информатика и вычислительная техника',
        programEn: 'Computer Science',
        workRu: 'МАГИСТЕРСКАЯ ДИССЕРТАЦИЯ',
        workEn: 'MASTER GRADUATE THESIS',
        specialtyRu: 'Анализ данных и искусственный интеллект',
        specialtyEn: 'Data Analysis and Artificial Intelligence',
        topicRu: 'Применение существующих бизнес-моделей к продуктам, созданным на платформе Telegram',
        topicEn: 'Application of existing business models to product on Telegram platform',
        authorRu: 'Иванов Иван Иванович',
        authorEn: 'Ivanov Ivan Ivanovich',
        supervisorRu: 'Иванов Иван Иванович',
        supervisorEn: 'Ivanov Ivan Ivanovich',
        consultants: 'Иванов Иван Иванович / Ivanov Ivan Ivanovich',
        year: '2025',
      }),
    ),
    show(thesis_with({ abstract: lorem(100) })),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
    m.heading(2, 'Spacing & Type'),
    inline`This is a section. This is a citation without brackets. and this is one with brackets ${ref(label('A'))}.
Multiple ${ref(label('A'))}, ${ref(label('B'))}, ${ref(label('C'))}. Here's a reference to a
subsection: ${ref({ supplement: inline() }, label('subsection'))}. Citation of an online article
${ref(label('D'))}. Citation of an online proceeding ${ref(label('F'))}. The body of the text
and abstract must be double-spaced except for footnotes or long quotations. Fonts such as Times
Roman, Bookman, New Century Schoolbook, Garamond, Palatine, and Courier are acceptable and commonly
found on most computers. The same type must be used throughout the body of the text. The font
size must be 10 point or larger and footnotes ${footnote(inline`This is a footnote.`)} must
be two sizes smaller than the text ${footnote(inline`This is another footnote.`)} but no smaller
than eight points. Chapter, section, or other headings should be of a consistent font and size
throughout the ETD, as should labels for illustrations, charts, and figures.`,
    inline(linebreak(), space, linebreak()),
    inline(labelled(heading({ depth: 3 }, inline('Creating a subsection')), label('subsection'))),
    m.lines(
      m.heading(4, 'Creating a subsubsection'),
      m.heading(4, 'Creating a subsubsection'),
      m.heading(4, 'Creating a subsubsection'),
    ),
    inline(
      par(
        { firstLineIndent: em(0) },
        inline`${strong(inline`This is a heading level below subsubsection`)} ${h(em(0.5))} And this is a quote:`,
      ),
    ),
    inline(quote(inline(lorem(50))), space, linebreak()),
    inline`This is a ${emph(inline`fancy`)} table:`,
    inline(
      align(
        center,
        inline(
          space,
          figure(
            {
              caption: inline(
                flexTitle(
                  inline`This is a Table Example`,
                  inline`This is the title I want to appear in the list of tables`,
                ),
              ),
              supplement: 'TABLE',
            },
            table(
              { columns: 3, inset: em(0.5), stroke: { left: null } },
              table.header(inline`A`, inline`B`, inline`C`),
              table.vline({ stroke: null, start: 0, end: 5 }),
              inline`a1`,
              inline`b1`,
              inline`c1`,
              table.hline({ stroke: null, start: 0, end: 3 }),
              inline`a2`,
              inline`b2`,
              inline`c2`,
              table.hline({ stroke: null, start: 0, end: 3 }),
              inline`a3`,
              inline`b3`,
              inline`c3`,
              table.hline({ stroke: null, start: 0, end: 3 }),
              inline`a4`,
              inline`b4`,
              inline`c4`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      align(
        center,
        inline(
          space,
          figure(
            {
              caption: inline`One kernel at ${unsafeRaw.math`x_s`} (${emph(inline`dotted kernel`)}) or two kernels at ${unsafeRaw.math`x_i`}
and ${unsafeRaw.math`x_j`} (${emph(inline`left and right`)}) lead to the same summed estimate
at ${unsafeRaw.math`x_s`}. This shows a figure consisting of different types of lines. Elements
of the figure described in the caption should be set in italics, in parentheses, as shown in
this sample caption.`,
            },
            image(path('figs/images.png')),
          ),
          space,
        ),
      ),
    ),
    inline`Typst supports non-italicized lower-case greek letters. See for yourself: ${unsafeRaw.math`upright(beta), bold(upright(beta)), beta, bold(beta)`}.
Next is a numbered equation:`,
    inline(
      labelled(
        [
          unsafeRaw.math
            .block`|bold(X)|_(2,1) = underbrace(sum_(j=1)^n f_j(bold(X)), "convex") = sum_(j=1)^n |X_(.,j)|_2`,
          space,
        ],
        label('equation'),
      ),
    ),
    inline`The reference to equation ${ref({ supplement: inline() }, label('equation'))} is clickable.`,
    m.heading(2, 'Theorems, Corollaries, Lemmas, Proofs, Remarks, Definitions and Examples'),
    inline(labelled([theorem(inline`${space}${lorem(100)},${space}`), space], label('thm'))),
    inline(proof(inline`${space}I'm a (very short) proof.${space}`)),
    inline(lemma(inline`${space}I'm a lemma.${space}`)),
    inline(corollary(inline`${space}I include a reference to ${link(label('thm'), inline`Theorem 1`)}${space}`)),
    inline(proposition(inline`${space}I'm a proposition.${space}`)),
    inline(remark(inline`${space}I'm a remark.${space}`)),
    inline(
      definition(inline`${space}I'm a definition. I'm a definition. I'm a definition. I'm a definition. I'm a definition.
I'm a definition. I'm a definition. I'm a definition. I'm a definition. I'm a definition. I'm
a definition.${space}`),
    ),
    inline(example(inline`${space}I'm an example.${space}`)),
    m.heading(
      2,
      flexTitle(
        inline`Section with ${linebreak()} line breaks in ${linebreak()} the name`,
        inline`Optional table of contents heading`,
      ),
    ),
    inline(lorem(100)),
    inline(labelled(heading({ depth: 1 }, inline('Literature Review')), label('lr'))),
    inline(lorem(200)),
    m.heading(2, 'Another section'),
    inline(lorem(100)),
    inline(pagebreak()),
    inline(lorem(150)),
    inline(
      align(
        center,
        inline(
          space,
          figure(
            {
              caption: inline(
                flexTitle(
                  inline`Simulation Parameters`,
                  inline`This is the title I want to appear in the list of tables`,
                ),
              ),
              supplement: 'TABLE',
            },
            table(
              { columns: [fr(1), fr(1)], align: center, stroke: { left: null }, inset: em(0.5) },
              table.header(inline`A`, inline`B`),
              table.vline({ stroke: null, start: 0, end: 13 }),
              inline(strong(inline`Parameter`)),
              inline(strong(inline`Value`)),
              inline`Number of vehicles`,
              inline(unsafeRaw.math`|cal(V)|`),
              inline`Number of RSUs`,
              inline(unsafeRaw.math`|cal(U)|`),
              inline`RSU coverage radius`,
              inline`150 m`,
              inline`V2V communication radius`,
              inline`30 m`,
              inline`Smart vehicle antenna height`,
              inline`1.5 m`,
              inline`RSU antenna height`,
              inline`25 m`,
              inline`Smart vehicle maximum speed`,
              inline`${unsafeRaw.math`v_"max"`} m/s`,
              inline`Smart vehicle minimum speed`,
              inline`${unsafeRaw.math`v_"min"`} m/s`,
              inline`Common smart vehicle cache capacities`,
              inline`[50, 100, 150, 200, 250] mb`,
              inline`Common RSU cache capacities`,
              inline`[5000, 1000, 1500, 2000, 2500] mb`,
              inline`Common backhaul rates`,
              inline`[75, 100, 150] mb/s`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      align(
        center,
        inline(
          space,
          figure(
            {
              caption: inline`One kernel at ${unsafeRaw.math`x_s`} (${emph(inline`dotted kernel`)}) or two kernels at ${unsafeRaw.math`x_i`}
and ${unsafeRaw.math`x_j`} (${emph(inline`left and right`)}) lead to the same summed estimate
at ${unsafeRaw.math`x_s`}. This shows a figure consisting of different types of lines. Elements
of the figure described in the caption should be set in italics, in parentheses, as shown in
this sample caption.`,
            },
            image(path('figs/images.png')),
          ),
          space,
        ),
      ),
    ),
    inline(linebreak()),
    'This description implies several essential properties of the task at hand:',
    m.enum(
      m.numbered(1, [
        'Watermark must contain all necessary information, but still, be placeable and recognizable even on smaller images. The produced watermark must be compact but have the possibility to store enough information.',
      ]),
      m.numbered(2, [
        'To prevent easy tampering, the watermark must be invisible to the naked eye (and, preferably, to basic image parsing tools). If malefactor does not know about the existence of watermark, they might not even try to remove it and disable it.',
      ]),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Methodology')), label('method'))),
    inline`Referencing other chapters ${ref({ supplement: inline() }, label('lr'))}, ${ref({ supplement: inline() }, label('method'))},
${ref({ supplement: inline() }, label('impl'))}, ${ref({ supplement: inline() }, label('eval'))}
and ${ref({ supplement: inline() }, label('concl'))}`,
    inline(
      align(
        center,
        inline(
          space,
          figure(
            {
              caption: inline(
                flexTitle(
                  inline`Simulation Parameters`,
                  inline`This is the title I want to appear in the list of tables`,
                ),
              ),
              supplement: 'TABLE',
            },
            table(
              { columns: [fr(1), fr(1)], align: center, stroke: { left: null }, inset: em(0.5) },
              table.header(inline`A`, inline`B`),
              table.vline({ stroke: null, start: 0, end: 13 }),
              inline(strong(inline`Parameter`)),
              inline(strong(inline`Value`)),
              inline`Number of vehicles`,
              inline(unsafeRaw.math`|cal(V)|`),
              inline`Number of RSUs`,
              inline(unsafeRaw.math`|cal(U)|`),
              inline`RSU coverage radius`,
              inline`150 m`,
              inline`V2V communication radius`,
              inline`30 m`,
              inline`Smart vehicle antenna height`,
              inline`1.5 m`,
              inline`RSU antenna height`,
              inline`25 m`,
              inline`Smart vehicle maximum speed`,
              inline`${unsafeRaw.math`v_"max"`} m/s`,
              inline`Smart vehicle minimum speed`,
              inline`${unsafeRaw.math`v_"min"`} m/s`,
              inline`Common smart vehicle cache capacities`,
              inline`[50, 100, 150, 200, 250] mb`,
              inline`Common RSU cache capacities`,
              inline`[5000, 1000, 1500, 2000, 2500] mb`,
              inline`Common backhaul rates`,
              inline`[75, 100, 150] mb/s`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Implementation')), label('impl'))),
    inline`...`,
    inline(labelled(heading({ depth: 1 }, inline('Evaluation and Discussion')), label('eval'))),
    inline`...`,
    inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('concl'))),
    inline`...`,
    inline(bibliography({ title: 'Bibliography cited' }, path('refs.bib'))),
    show(appendix),
    m.heading(1, 'Extra Stuff'),
    inline(lorem(100)),
    m.heading(1, 'Even More Extra Stuff'),
    inline(lorem(100)),
  )
}
