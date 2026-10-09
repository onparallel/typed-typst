// Converted from test/universe/corpus/modern-szu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  call,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  ltr,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  stack,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('bibliography', T.any, null)
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const indent = external('indent')
  const __ = external('字体')
  const ___2 = external('字号')
  const [
    patternDecl,
    [
      twoside,
      doc_2,
      preface,
      mainmatter,
      appendix,
      fontsDisplayPage,
      cover,
      declPage,
      abstract,
      abstractEn,
      bilingualBibliography,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'fonts-display-page',
      'cover',
      'decl-page',
      'abstract',
      'abstract-en',
      'bilingual-bibliography',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
    ],
    documentclass({
      twoside: false,
      info: {
        title: ['基于 Typst 的', '深圳大学学位论文'],
        titleEn: 'My Title in English',
        grade: '20XX',
        studentId: '1234567890',
        author: '张三',
        authorEn: 'Ming Xing',
        department: '某学院',
        departmentEn: 'School of Chemistry and Chemical Engineering',
        major: '某专业',
        majorEn: 'Chemistry',
        supervisor: ['李四', '教授'],
        supervisorEn: 'Professor My Supervisor',
        submitDate: datetime.today(),
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    importPackage('@preview/modern-szu-thesis:0.4.0', [documentclass, indent, __, ___2]),
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(call(declPage)),
    m.lines(show(preface), inline(call(outlinePage))),
    inline(call(abstract, { keywords: ['我', '就是', '测试用', '关键词'] }, inline`${space}中文摘要${space}`)),
    show(mainmatter),
    m.heading(1, '导　论'),
    m.heading(2, '列表'),
    m.heading(3, '无序列表'),
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, '有序列表'),
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, '术语列表'),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表'),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:nju-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。`,
    inline(
      align(
        center,
        stack(
          { dir: ltr },
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`常规表` },
                  table(
                    { align: add(center, horizon), columns: 4 },
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                  ),
                ),
                space,
              ],
              label('timing'),
            ),
            space,
          ),
          inline(space, h(pt(50)), space),
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`三线表` },
                  table(
                    { columns: 4, stroke: null },
                    table.hline(),
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    table.hline({ stroke: pt(0.5) }),
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                    table.hline(),
                  ),
                ),
                space,
              ],
              label('timing-tlt'),
            ),
            space,
          ),
        ),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/nju-emblem.svg'))), space],
        label('nju-logo'),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/nju-emblem.svg'))), space],
        label('nju-logo1'),
      ),
    ),
    m.heading(2, '数学公式'),
    inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))),
    inline`引用数学公式需要加上 ${raw('eqt:')} 前缀，则由${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline`我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x`, space], label('-'))),
    '而后续数学公式仍然能正常编号。',
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    m.heading(2, '参考文献'),
    inline`可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    m.heading(2, '代码块'),
    inline`代码块支持语法高亮。引用时需要加上 ${raw('lst:')} ${ref(label('lst:code'))}`,
    inline(
      labelled(
        [
          figure({ caption: inline`代码块` }, raw({ block: true, lang: 'py' }, 'def add(x, y):\n  return x + y')),
          space,
        ],
        label('code'),
      ),
    ),
    m.heading(1, '正　文'),
    m.heading(2, '正文子标题'),
    m.heading(3, '正文子子标题'),
    '正文内容',
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    inline(call(bilingualBibliography, { full: true })),
    inline(call(acknowledgement, inline`${space}感谢 NJU-LUG，感谢 NJUThesis LaTeX 模板。${space}`)),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    inline(
      call(abstractEn, { keywords: ['Dummy', 'Keywords', 'Here', 'It Is'] }, inline`${space}English abstract${space}`),
    ),
    show(appendix),
    m.heading(1, '关于XXX的自查表'),
    m.heading(2, '附录子标题'),
    m.heading(3, '附录子子标题'),
    inline`附录内容，这里也可以加入图片，例如${ref(label('fig:appendix-img'))}。`,
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/nju-emblem.svg'))), space],
        label('appendix-img'),
      ),
    ),
  )
}
