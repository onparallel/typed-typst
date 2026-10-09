// Converted from test/universe/corpus/latexy-book.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  block,
  blocks,
  bottom,
  center,
  cite,
  cm,
  datetime,
  define,
  doc,
  em,
  enum_,
  external,
  figure,
  fr,
  grid,
  heading,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  left,
  list,
  lorem,
  m,
  math,
  outline,
  pagebreak,
  par,
  path,
  pt,
  raw,
  ref,
  right,
  set,
  show,
  space,
  table,
  text,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const frontmatter = define('frontmatter').returns(T.any).external()
  const mainmatter = define('mainmatter').returns(T.any).external()
  const appendix = define('appendix').returns(T.any).external()
  const backmatter = define('backmatter').returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const assumption = define('assumption').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const proposition = define('proposition')
    .pos('arg1', T.content)
    .named('caption', T.any, null)
    .returns(T.any)
    .external()
  const lemma = define('lemma').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const exercise = define('exercise').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const notice = define('notice').pos('arg1', T.content).named('caption', T.any, null).returns(T.any).external()
  const code = define('code')
    .pos('arg1', T.content)
    .named('caption', T.any, null)
    .named('lineno', T.any, null)
    .named('show-language', T.any, null)
    .returns(T.any)
    .external()
  const citep = define('citep').pos('arg1', T.any).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const citet = define('citet').pos('arg1', T.any).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const subfigure = define('subfigure').pos('arg1', T.any).named('caption', T.any, null).returns(T.any).external()
  const modeWheel = define('mode-wheel').named('scale-notes', T.any, null).returns(T.any).external()
  const book_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('titlepage', T.any, null)
    .returns(T.any)
    .external(book)
  return doc(
    m.lines(
      importPackage('@preview/latexy-book:0.0.1', [
        book,
        frontmatter,
        mainmatter,
        appendix,
        backmatter,
        definition,
        theorem,
        assumption,
        proposition,
        lemma,
        corollary,
        exercise,
        example,
        notice,
        code,
        citep,
        citet,
        subfigure,
        modeWheel,
      ]),
      show(
        book_with({
          title: 'Book Title',
          subtitle: 'Book Subtitle',
          author: 'Author Name',
          date: datetime.today().display('[month repr:long] [day], [year]'),
          titlepage: true,
        }),
      ),
    ),
    inline(frontmatter()),
    m.lines(m.heading(1, 'Foreword'), inline(lorem(50))),
    m.lines(m.heading(1, 'Preface'), inline(lorem(50))),
    m.lines(m.heading(2, 'Section 1'), inline(lorem(50))),
    m.lines(m.heading(2, 'Section 2'), inline(lorem(50))),
    m.lines(m.heading(2, 'Section 3'), inline(lorem(50))),
    m.lines(m.heading(1, 'Acknowledgments'), inline(lorem(50))),
    inline(outline()),
    inline(mainmatter()),
    m.lines(inline(labelled(heading({ depth: 1 }, inline('Part I')), label('sec:partI'))), inline(lorem(50))),
    m.lines(inline(labelled(heading({ depth: 2 }, inline('Chapter 1')), label('sec:chapter1'))), inline(lorem(50))),
    m.lines(m.heading(3, 'Section 1.1'), inline(lorem(50))),
    m.lines(m.heading(4, 'Subsection 1.1.1'), inline(lorem(50))),
    m.lines(m.heading(5, 'Subsubsection 1.1.1.1'), inline(lorem(50))),
    m.lines(inline(pagebreak()), m.heading(3, 'Math')),
    inline`Equations without numbering: ${math.equation({ block: true, numbering: null }, unsafeRaw.math.block`dif S = (delta q) / T`)}`,
    inline`Equations with numbering: ${labelled(unsafeRaw.math.block`pi, alpha, beta, ..., cal(A), AA`, label('eq:math-1-1'))}`,
    inline(
      labelled(
        unsafeRaw.math
          .block`x^2_3 , frac(x^2, 2), sum_(k=0)^n k, product_(k=0)^n k, lim_x (x^2/x), integral_0^infinity x^2 dif x`,
        label('eq:math-1-2'),
      ),
    ),
    inline(unsafeRaw.math.block`f'(x, y) = cases(
  x + 2y &= 3,
  3x - y &= 5
)`),
    inline(unsafeRaw.math.block`vec(1, 2 ), vec(1, 2, delim: "["),
mat(1; 2 ), mat(1; 2, delim: "["),`),
    inline(definition({ caption: 'Definition 1.1' }, inline(lorem(50)))),
    inline(labelled([definition(inline(lorem(50))), space], label('def:definition-1-2'))),
    inline(theorem({ caption: 'Theorem 1.1' }, inline(lorem(50)))),
    inline(assumption({ caption: 'Assumption 1.1' }, inline(lorem(50)))),
    inline(proposition({ caption: 'Proposition 1.1' }, inline(lorem(50)))),
    inline(lemma({ caption: 'Lemma 1.1' }, inline(lorem(50)))),
    inline(corollary({ caption: 'Corollary 1.1' }, inline(lorem(50)))),
    inline(exercise({ caption: 'Exercise 1.1' }, inline(lorem(50)))),
    inline(example({ caption: 'Example 1.1' }, inline(lorem(50)))),
    inline(notice({ caption: 'Notice 1.1' }, inline(lorem(50)))),
    inline(lorem(50)),
    m.lines(inline(pagebreak()), m.heading(3, 'Code')),
    inline(raw({ block: true }, 'def python():\n  return 5 + 5')),
    inline(raw({ block: true, lang: 'python' }, 'def python():\n  return 5 + 5')),
    inline(code(inline(space, raw({ block: true, lang: 'python' }, 'def hello():\n    print("world")'), space))),
    inline(
      code(
        { lineno: false, showLanguage: false },
        inline(space, raw({ block: true, lang: 'py' }, 'def hello():\n    print("world")'), space),
      ),
    ),
    inline(
      code(
        { caption: 'Code Example' },
        inline(
          space,
          raw(
            { block: true, lang: 'python' },
            '# test\ndef hello():\n    print("world")\nfor each in range(0,5):\n    print(each)\ndef hello():\n    print("world")\nfor each in range(0,5):\n    print(each)\ndef hello():\n    print("world")\nfor each in range(0,5):\n    print(each + each + each + each + each + each + each + each + each + each + each + each )\ndef hello():\n    print("world")',
          ),
          space,
        ),
      ),
    ),
    inline(code(inline(space, raw({ block: true, lang: 'stata' }, 'regress y x'), space))),
    inline(lorem(50)),
    m.lines(inline(pagebreak()), m.heading(3, 'List')),
    inline(
      enum_(
        blocks(
          m.lines(
            'Item 1',
            m.enum(
              m.item(
                m.lines(
                  'Subitem 1',
                  m.enum(
                    m.item(['Subitem 1']),
                    m.item(
                      m.lines(
                        'Subitem 2',
                        m.enum(
                          m.item(
                            m.lines(
                              'Subitem 1',
                              m.enum(
                                m.item(['Subitem 1']),
                                m.item(m.lines('Subitem 2', m.enum(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
                              ),
                            ),
                          ),
                          m.item(['Subitem 2']),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              m.item(['Subitem 2']),
            ),
          ),
        ),
        blocks(m.lines('Item 2', m.enum(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
        blocks(m.lines('Item 3', m.enum(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
      ),
    ),
    inline(
      list(
        blocks(
          m.lines(
            'Item 1',
            m.list(
              m.item(
                m.lines(
                  'Subitem 1',
                  m.list(
                    m.item(['Subitem 1']),
                    m.item(m.lines('Subitem 2', m.list(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
                  ),
                ),
              ),
              m.item(['Subitem 2']),
            ),
          ),
        ),
        blocks(m.lines('Item 2', m.list(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
        blocks(m.lines('Item 3', m.list(m.item(['Subitem 1']), m.item(['Subitem 2'])))),
      ),
    ),
    m.lines(inline(pagebreak()), m.heading(3, 'Table')),
    inline(lorem(50)),
    inline(
      labelled(
        [
          figure(
            { caption: 'Table 1.1 Table without Notes' },
            table(
              { columns: 3, align: center, stroke: null },
              table.hline(),
              inline`123456789`,
              inline`123456789`,
              inline`123456789`,
              inline`X`,
              inline`X`,
              inline`X`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('tab:table-1-1'),
      ),
    ),
    inline(lorem(50)),
    inline(
      labelled(
        [
          figure(
            { caption: 'Table 1.2 Table with Notes' },
            block(
              inline(
                space,
                align(
                  left,
                  blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))),
                ),
                space,
                table(
                  { columns: 3, align: [add(left, top), add(center, horizon), add(right, bottom)], stroke: null },
                  table.hline(),
                  table.cell({ rowspan: 2, align: center }, inline`Multirows`),
                  table.cell({ colspan: 2, align: center }, inline`Multicolumns`),
                  table.hline({ start: 1 }),
                  inline`X`,
                  inline`X`,
                  table.hline(),
                  inline`X`,
                  inline`X`,
                  inline`X`,
                  inline(lorem(20)),
                  inline(lorem(20)),
                  inline(lorem(20)),
                  table.hline(),
                ),
                space,
              ),
            ),
          ),
          space,
        ],
        label('tab:table-1-2'),
      ),
    ),
    m.heading(3, 'Figure'),
    inline(lorem(50)),
    inline(
      labelled(
        [
          figure(
            { caption: 'Figure 1.1 Figure with Notes' },
            inline(
              space,
              modeWheel({ scaleNotes: [0, 2, 4, 7, 9] }),
              space,
              align(
                left,
                blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))),
              ),
              space,
            ),
          ),
          space,
        ],
        label('fig:figure-1-1'),
      ),
    ),
    inline(lorem(50)),
    inline(
      labelled(
        [
          figure(
            { caption: 'Figure 1.2 Figure without Notes' },
            inline(
              space,
              grid(
                { columns: [fr(1), fr(1)], gutter: cm(0) },
                subfigure({ caption: 'Subfigure (a)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
                subfigure({ caption: 'Subfigure (b)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
              ),
              space,
            ),
          ),
          space,
        ],
        label('fig:figure-1-2'),
      ),
    ),
    inline(lorem(50)),
    m.lines(inline(pagebreak()), m.heading(3, 'Reference')),
    inline`Section ${ref(label('sec:figure'))}, Chapter ${ref(label('sec:chapter1'))}, Part ${ref(label('sec:partI'))}.`,
    inline`Eq. ${ref(label('eq:math-1-1'))}, Eq. ${ref(label('eq:math-1-2'))}.`,
    inline`Definition ${ref(label('def:definition-1-2'))}, Definition ${ref(label('def:definition-2-2'))}.`,
    inline`Table ${ref(label('tab:table-1-1'))}, Table ${ref(label('tab:table-1-2'))}, Table ${ref(label('tab:table-2-1'))},
Table ${ref(label('tab:table-2-2'))}, Table ${ref(label('tab:table-B-1'))}, Table ${ref(label('tab:table-B-2'))}.`,
    inline`Figure ${ref(label('fig:figure-1-1'))}, Figure ${ref(label('fig:figure-1-2'))}, Figure ${ref(label('fig:figure-2-1'))},
Figure ${ref(label('fig:figure-2-2'))}, Figure ${ref(label('fig:figure-B-1'))}, Figure ${ref(label('fig:figure-B-2'))}.`,
    m.heading(3, 'Citation'),
    'Original commands:',
    inline`${cite({ form: 'prose' }, label('lamontFinancialConstraintsStock2001'))}.`,
    inline`${ref(label('lamontFinancialConstraintsStock2001'))} ${ref(label('famaCrossSectionExpectedStock1992'))}.`,
    inline`Commands defined in ${raw('latexy-book')}:`,
    inline(
      citep(
        label('famaCrossSectionExpectedStock1992'),
        label('lamontFinancialConstraintsStock2001'),
        label('chungEffectsAntitrustLaws2024'),
      ),
    ),
    inline(
      citet(
        label('famaCrossSectionExpectedStock1992'),
        label('lamontFinancialConstraintsStock2001'),
        label('chungEffectsAntitrustLaws2024'),
      ),
    ),
    m.heading(2, 'Chapter 2 Check Numbering'),
    m.heading(3, 'Section 2.1 Math'),
    inline(definition({ caption: 'Definition 2.1' }, inline(lorem(50)))),
    inline(
      labelled([definition({ caption: 'Definition 2.2' }, inline(lorem(50))), space], label('def:definition-2-2')),
    ),
    inline(definition(inline(lorem(50)))),
    inline(labelled(heading({ depth: 3 }, inline('Section 2.2 Table')), label('sec:table'))),
    inline(
      labelled(
        figure(
          { caption: 'Table 2.1' },
          table(
            { columns: 3, align: center, stroke: null },
            table.hline(),
            inline`123456789`,
            inline`123456789`,
            inline`123456789`,
            inline`X`,
            inline`X`,
            inline`X`,
            table.hline(),
          ),
        ),
        label('tab:table-2-1'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: 'Table 2.2' },
          block(inline`${space}${align(left, blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))))}
${table({ columns: 3, align: [add(left, top), add(center, horizon), add(right, bottom)], stroke: null }, table.hline(), table.cell({ rowspan: 2, align: center }, inline`Multirows`), table.cell({ colspan: 2, align: center }, inline`Multicolumns`), table.hline({ start: 1 }), inline`X`, inline`X`, table.hline(), inline`X`, inline`X`, inline`X`, inline(lorem(20)), inline(lorem(20)), inline(lorem(20)), table.hline())},${space}`),
        ),
        label('tab:table-2-2'),
      ),
    ),
    inline(labelled(heading({ depth: 3 }, inline('Section 2.3 Figure')), label('sec:figure'))),
    inline(
      labelled(
        [
          figure(
            { caption: 'Figure 2.1' },
            blocks(
              inline(
                grid(
                  { columns: [fr(1), fr(1)], gutter: cm(0) },
                  subfigure({ caption: 'Subfigure (a)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
                  subfigure({ caption: 'Subfigure (b)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
                ),
              ),
              inline(
                align(
                  left,
                  blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))),
                ),
              ),
            ),
          ),
          space,
        ],
        label('fig:figure-2-1'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: 'Figure 2.2' },
          inline(
            space,
            grid(
              { columns: [fr(1), fr(1)], gutter: cm(0) },
              subfigure({ caption: 'Subfigure (a)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
              subfigure({ caption: 'Subfigure (b)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
            ),
            space,
          ),
        ),
        label('fig:figure-2-2'),
      ),
    ),
    m.heading(1, 'Part II Long Part Name Long Part Name Long Part Name Long Part Name Long Part Name'),
    m.lines(
      m.heading(
        2,
        'Chapter 3 Long Chapter Name Long Chapter Name Long Chapter Name Long Chapter Name Long Chapter Name Long Chapter Name Long Chapter Name Long Chapter Name',
      ),
      inline(lorem(50)),
    ),
    m.lines(
      m.heading(
        3,
        'Section 3.1 Long Section Name Long Section Name Long Section Name Long Section Name Long Section Name Long Section Name Long Section Name Long Section Name',
      ),
      inline(lorem(50)),
    ),
    m.lines(
      m.heading(4, 'Subsection 3.1.1'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.2'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.3'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.4'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.5'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.6'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.7'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.8'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.9'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.10'),
      inline(lorem(50)),
      m.heading(4, 'Subsection 3.1.11'),
      inline(lorem(50)),
    ),
    m.lines(m.heading(3, 'Section 3.2'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 4'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 5'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 6'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 7'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 8'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 9'), inline(lorem(50))),
    m.lines(m.heading(2, 'Chapter 10'), inline(lorem(50))),
    inline(appendix()),
    m.heading(1, 'Appendix A'),
    m.lines(m.heading(2, 'Appendix A.1'), inline(lorem(50))),
    m.lines(m.heading(2, 'Appendix A.2'), inline(lorem(50))),
    m.heading(1, 'Appendix B'),
    m.lines(m.heading(2, 'Appendix B.1'), inline(lorem(50))),
    m.heading(2, 'Appendix B.2'),
    inline(
      labelled(
        figure(
          { caption: 'Table B.1' },
          table(
            { columns: 3, align: center, stroke: null },
            table.hline(),
            inline`123456789`,
            inline`123456789`,
            inline`123456789`,
            inline`X`,
            inline`X`,
            inline`X`,
            table.hline(),
          ),
        ),
        label('tab:table-B-1'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: 'Table B.2' },
          block(
            inline(
              space,
              align(
                left,
                blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))),
              ),
              space,
              table(
                { columns: 3, align: [add(left, top), add(center, horizon), add(right, bottom)], stroke: null },
                table.hline(),
                table.cell({ rowspan: 2, align: center }, inline`Multirows`),
                table.cell({ colspan: 2, align: center }, inline`Multicolumns`),
                table.hline({ start: 1 }),
                inline`X`,
                inline`X`,
                table.hline(),
                inline`X`,
                inline`X`,
                inline`X`,
                inline(lorem(20)),
                inline(lorem(20)),
                inline(lorem(20)),
                table.hline(),
              ),
              space,
            ),
          ),
        ),
        label('tab:table-B-2'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: 'Figure B.1' },
            blocks(
              inline(
                grid(
                  { columns: [fr(1), fr(1)], gutter: cm(0) },
                  subfigure({ caption: 'Subfigure (a)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
                  subfigure({ caption: 'Subfigure (b)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
                ),
              ),
              inline(
                align(
                  left,
                  blocks(m.lines(set(par, { leading: em(0.5) }), set(text, { size: pt(10) }), inline(lorem(50)))),
                ),
              ),
            ),
          ),
          space,
        ],
        label('fig:figure-B-1'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: 'Figure B.2' },
          inline(
            space,
            grid(
              { columns: [fr(1), fr(1)], gutter: cm(0) },
              subfigure({ caption: 'Subfigure (a)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
              subfigure({ caption: 'Subfigure (b)' }, modeWheel({ scaleNotes: [0, 2, 4, 7, 9] })),
            ),
            space,
          ),
        ),
        label('fig:figure-B-2'),
      ),
    ),
    inline(backmatter()),
    m.lines(m.heading(1, 'Afterword'), inline(lorem(50))),
    m.lines(m.heading(2, 'Afterword 1'), inline(lorem(50))),
    m.lines(m.heading(2, 'Afterword 2'), inline(lorem(50))),
    m.lines(m.heading(2, 'Afterword 3'), inline(lorem(50))),
    inline(bibliography(path('ref.bib'))),
  )
}
